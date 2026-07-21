/**
 * Converte o HTML bruto das 235 páginas em conteúdo estruturado + baseline de QA.
 *
 * Passo 2 da Fase 0. Produz:
 *   data/content/<arquivo>.json  — um registro por página, entrada do Astro
 *   data/baseline.csv            — contrato de QA do go-live (§13 do plano)
 *
 * Princípio: preservar, não editar. O corpo editorial sai daqui byte a byte como
 * está hoje. A única coisa que este script conserta é bug de template — e ainda
 * assim guarda o valor original ao lado, para a mudança ser auditável.
 *
 *   node tools/extract/extract.mjs
 */

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { clusterDe, tipoDe, PILARES } from './taxonomia.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const RAW_DIR = join(ROOT, 'data', 'raw');
const OUT_DIR = join(ROOT, 'data', 'content');
const URLS_FILE = join(ROOT, 'data', 'urls-canonicas.txt');
const ORIGIN = 'https://www.previsio.com.br';

/** `/servicos/nr-12` -> `servicos__nr-12`; `/` -> `_home` */
function pathParaArquivo(path) {
  if (path === '/') return '_home';
  return path.replace(/^\//, '').replace(/\//g, '__');
}

/**
 * Conserta a meta description quebrada em escala.
 *
 * O template atual emite "...lugar certo! a é especializada em X" — o sujeito
 * ("A Previsio Engenharia") sumiu numa variável não preenchida. É bug de
 * template, não escolha editorial, então entra já na Fase 1 (§7 do plano).
 * Retorna null quando não há o que consertar.
 */
function corrigirDescription(desc) {
  if (!desc) return null;
  const corrigida = desc.replace(
    /(certo!\s*)a é especializada/i,
    '$1A Previsio Engenharia é especializada',
  );
  return corrigida === desc ? null : corrigida;
}

/** Texto limpo, sem quebras e espaços duplicados. */
const limpar = (s) => (s ?? '').replace(/\s+/g, ' ').trim();

/**
 * O site atual usa quatro templates distintos. A ordem abaixo importa: vai do
 * contêiner mais específico ao mais genérico, e o primeiro que existir vence.
 *
 *   article            páginas-keyword raiz — galeria + bloco editorial
 *   .article-container artigos do blog e o índice /artigos
 *   main .content      institucionais (home, quem-somos, contato, informações)
 *
 * `/servicos/*` é o quarto e não cabe em seletor fixo: o conteúdo vive num
 * `div.col-*` cuja posição varia, e o primeiro da página costuma vir vazio.
 * Resolvido por heurística em `blocoServicos()`.
 */
const CONTEINERES = ['article', 'div.article-container', 'main div.content'];

/**
 * Acha o bloco editorial das páginas `/servicos/*`: entre os `div.col-*`,
 * o que tem mais texto, ignorando os que só carregam script ou menu lateral.
 *
 * Verificado sobre as 42 páginas do template — 39 têm corpo real (o mais
 * curto com ~50 palavras, técnico e específico); 3 (`manutencao`, `nr-35`,
 * `reformas`) têm de fato só o bloco de CTA.
 */
function blocoServicos($) {
  let melhor = null;
  let maior = 0;
  $('main div[class*=col-]').each((_, el) => {
    const $el = $(el);
    if ($el.find('script, nav, ul.aside__menu').length) return;
    const n = limpar($el.text()).split(' ').filter(Boolean).length;
    if (n > maior) {
      maior = n;
      melhor = $el;
    }
  });
  return maior >= 20 ? melhor : null;
}

/** Tipos cujo corpo é legitimamente raso hoje — serão reescritos, não migrados. */
const CORPO_RASO_ESPERADO = new Set(['pilar', 'home', 'institucional', 'indice-artigos']);

function extrair(path, html) {
  const $ = cheerio.load(html);

  // Formulário, "Páginas Relacionadas" e o bloco de cidades ficam fora do
  // contêiner editorial — por isso a extração é cirúrgica sem heurística
  // de posição.
  let $article = $();
  let conteinerUsado = null;
  for (const sel of CONTEINERES) {
    const $c = $(sel).first();
    if ($c.length) {
      $article = $c;
      conteinerUsado = sel;
      break;
    }
  }
  if (!conteinerUsado) {
    const $servicos = blocoServicos($);
    if ($servicos) {
      $article = $servicos;
      conteinerUsado = 'div.col-* (heurística)';
    }
  }

  // Todas as imagens do contêiner, não só a galeria: os posts do blog usam
  // imagem de capa solta em /doutor/uploads/. Preservar estas URLs é requisito
  // do plano (§3.5) — imagem que muda de endereço perde histórico.
  const vistas = new Set();
  const imagens = $article
    .find('img[src]')
    .map((_, el) => {
      const src = ($(el).attr('src') ?? '').replace(ORIGIN, '');
      if (!src || vistas.has(src)) return null;
      vistas.add(src);
      return {
        src,
        width: $(el).attr('width') ?? null,
        height: $(el).attr('height') ?? null,
        alt: limpar($(el).attr('alt')) || limpar($(el).attr('title')) || null,
        // /doutor/ e *.webp estão bloqueados no robots.txt hoje. As duas regras
        // saem na migração (§10), mas registrar aqui deixa o impacto visível.
        bloqueadaNoRobots: src.startsWith('/doutor/') || src.endsWith('.webp'),
      };
    })
    .get()
    .filter(Boolean);

  // O corpo é o contêiner sem galeria, sem o <h2>Galeria</h2> que a rotula e
  // sem cromo de navegação (sidebar de posts recentes, busca, breadcrumb).
  const $corpo = $article.clone();
  $corpo.find('ul.mpi-gallery, aside, form, .recent-posts, .bread, script, style').remove();
  $corpo
    .find('h2')
    .filter((_, el) => limpar($(el).text()).toLowerCase() === 'galeria')
    .remove();
  // Comentários HTML: o parágrafo de intro está comentado no fonte e nunca
  // renderizou. Não é conteúdo vivo — não migra.
  $corpo.contents().filter((_, n) => n.type === 'comment').remove();

  const bodyHtml = ($corpo.html() ?? '').trim().replace(/\n\s*\n\s*\n+/g, '\n\n');
  const bodyTexto = limpar($corpo.text());

  const headings = $corpo
    .find('h2, h3, h4')
    .map((_, el) => ({ nivel: Number(el.tagName[1]), texto: limpar($(el).text()) }))
    .get();

  const description = limpar($('meta[name="description"]').attr('content')) || null;
  const descriptionCorrigida = corrigirDescription(description);

  // Links internos: medida da malha que o plano exige preservar (§3.4).
  const linksInternos = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href') ?? '';
    if (href.startsWith('/') || href.startsWith(ORIGIN)) {
      linksInternos.add(href.replace(ORIGIN, '').split('#')[0]);
    }
  });

  const cluster = clusterDe(path);

  // O bloco "Principais cidades" vive fora do <article>. É idêntico em todas
  // as páginas que o têm (extraído uma vez por cidades.mjs); aqui só marcamos
  // quem o exibe, para o template renderizá-lo recolhido.
  const temCidades = $('.organictabs--regioes').length > 0;

  return {
    path,
    slug: path === '/' ? '' : path.replace(/^\//, ''),
    tipo: tipoDe(path),
    cluster,
    temCidades,
    pilar: cluster ? (PILARES[cluster] ?? null) : null,

    // Paridade 1:1 — estes três não mudam na Fase 1.
    title: limpar($('title').text()).replace(/​/g, '') || null,
    h1: limpar($('h1').first().text()) || null,
    breadcrumb: limpar($('.bread__column.active').first().text()) || null,

    description,
    descriptionCorrigida,
    canonical: limpar($('link[rel="canonical"]').attr('href')) || null,
    robots: limpar($('meta[name="robots"]').attr('content')) || null,

    imagens,
    headings,
    bodyHtml,
    conteinerUsado,

    metricas: {
      palavras: bodyTexto ? bodyTexto.split(/\s+/).length : 0,
      caracteres: bodyTexto.length,
      linksInternos: linksInternos.size,
      h1NoDom: $('h1').length,
      bytesOriginal: Buffer.byteLength(html),
    },
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const paths = (await readFile(URLS_FILE, 'utf8'))
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const arquivosRaw = new Set(await readdir(RAW_DIR));
  const registros = [];
  const avisos = [];

  for (const path of paths) {
    const arquivo = pathParaArquivo(path) + '.html';
    if (!arquivosRaw.has(arquivo)) {
      avisos.push(`SEM HTML: ${path} — rode \`npm run fetch\``);
      continue;
    }

    const html = await readFile(join(RAW_DIR, arquivo), 'utf8');
    const reg = extrair(path, html);

    if (!reg.cluster) avisos.push(`SEM CLUSTER: ${path} — classificar em taxonomia.mjs`);
    if (!reg.title) avisos.push(`SEM TITLE: ${path}`);
    if (!reg.h1) avisos.push(`SEM H1: ${path}`);
    if (reg.metricas.h1NoDom !== 1) avisos.push(`H1 x${reg.metricas.h1NoDom}: ${path}`);
    // Corpo raso só é problema onde deveria haver conteúdo migrável. Pilares e
    // institucionais entram no projeto justamente para ganhar conteúdo novo.
    if (!CORPO_RASO_ESPERADO.has(reg.tipo) && reg.metricas.palavras < 50) {
      avisos.push(`CORPO CURTO (${reg.metricas.palavras}p): ${path}`);
    }

    registros.push(reg);
    await writeFile(
      join(OUT_DIR, pathParaArquivo(path) + '.json'),
      JSON.stringify(reg, null, 2),
      'utf8',
    );
  }

  // Baseline de QA: é contra este CSV que o site novo será diffado no go-live.
  const csv = [
    'path,tipo,cluster,status_original,palavras,links_internos,imagens,title,h1',
    ...registros.map((r) =>
      [
        r.path,
        r.tipo,
        r.cluster ?? '',
        200,
        r.metricas.palavras,
        r.metricas.linksInternos,
        r.imagens.length,
        JSON.stringify(r.title ?? ''),
        JSON.stringify(r.h1 ?? ''),
      ].join(','),
    ),
  ].join('\n');
  await writeFile(join(ROOT, 'data', 'baseline.csv'), csv, 'utf8');

  // Resumo
  const porCluster = {};
  for (const r of registros) porCluster[r.cluster ?? '(sem)'] = (porCluster[r.cluster ?? '(sem)'] ?? 0) + 1;

  console.log(`${registros.length}/${paths.length} páginas extraídas.\n`);
  console.log('Por cluster:');
  for (const [c, n] of Object.entries(porCluster).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(3)}  ${c}`);
  }

  const palavras = registros.map((r) => r.metricas.palavras).sort((a, b) => a - b);
  const total = palavras.reduce((a, b) => a + b, 0);
  console.log(`\nCorpo editorial: ${total.toLocaleString('pt-BR')} palavras no total`);
  console.log(`  mediana ${palavras[Math.floor(palavras.length / 2)]} · min ${palavras[0]} · max ${palavras.at(-1)}`);

  const corrigidas = registros.filter((r) => r.descriptionCorrigida).length;
  console.log(`\nMeta descriptions com o bug do sujeito: ${corrigidas} corrigidas`);

  const imgs = registros.flatMap((r) => r.imagens);
  const bloqueadas = imgs.filter((i) => i.bloqueadaNoRobots).length;
  console.log(
    `Imagens: ${imgs.length} referenciadas · ${bloqueadas} hoje bloqueadas no robots.txt`,
  );

  if (avisos.length) {
    console.log(`\n${avisos.length} aviso(s):`);
    for (const a of avisos.slice(0, 40)) console.log(`  ${a}`);
    if (avisos.length > 40) console.log(`  ... e mais ${avisos.length - 40}`);
  } else {
    console.log('\nNenhum aviso.');
  }
}

main();
