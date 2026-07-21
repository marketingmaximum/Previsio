/**
 * Baixa as 235 URLs canônicas do site atual da Previsio para disco.
 *
 * É o passo 1 da Fase 0 do plano (estrategia/07-plano-site-institucional.md).
 * O HTML bruto salvo aqui é a fonte de verdade da migração: dele saem tanto o
 * relatório de baseline (baseline.mjs) quanto o conteúdo estruturado (extract.mjs).
 *
 * Educado por padrão: concorrência baixa e pausa entre lotes. O site é do
 * cliente, mas continua em produção atendendo visitantes reais.
 *
 *   node tools/extract/fetch.mjs           # baixa só o que falta
 *   node tools/extract/fetch.mjs --force   # rebaixa tudo
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const ORIGIN = 'https://www.previsio.com.br';
const RAW_DIR = join(ROOT, 'data', 'raw');
const URLS_FILE = join(ROOT, 'data', 'urls-canonicas.txt');
const STATUS_FILE = join(ROOT, 'data', 'fetch-status.json');

const CONCURRENCY = 3;
const PAUSA_ENTRE_LOTES_MS = 400;
const TIMEOUT_MS = 30_000;
const TENTATIVAS = 3;

const FORCE = process.argv.includes('--force');

/** `/servicos/nr-12` -> `servicos__nr-12`; `/` -> `_home` */
export function pathParaArquivo(path) {
  if (path === '/') return '_home';
  return path.replace(/^\//, '').replace(/\//g, '__');
}

async function existe(caminho) {
  try {
    await access(caminho);
    return true;
  } catch {
    return false;
  }
}

async function baixar(path) {
  const url = ORIGIN + path;

  for (let tentativa = 1; tentativa <= TENTATIVAS; tentativa++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(url, {
        signal: ctrl.signal,
        redirect: 'manual', // um redirect aqui é achado, não algo a seguir
        headers: {
          // UA de navegador real: cursos./moodle. devolvem 406 para UA genérico,
          // e não queremos que o principal faça o mesmo sem avisar.
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
            '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          'Accept-Language': 'pt-BR,pt;q=0.9',
        },
      });
      clearTimeout(timer);

      const html = await res.text();
      return {
        path,
        status: res.status,
        location: res.headers.get('location') ?? null,
        bytes: Buffer.byteLength(html),
        html,
      };
    } catch (err) {
      clearTimeout(timer);
      if (tentativa === TENTATIVAS) {
        return { path, status: 0, erro: String(err.message ?? err), bytes: 0, html: null };
      }
      // backoff simples antes de tentar de novo
      await new Promise((r) => setTimeout(r, 1000 * tentativa));
    }
  }
}

async function main() {
  await mkdir(RAW_DIR, { recursive: true });

  const paths = (await readFile(URLS_FILE, 'utf8'))
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  console.log(`${paths.length} URLs canônicas.`);

  const pendentes = [];
  for (const p of paths) {
    const destino = join(RAW_DIR, pathParaArquivo(p) + '.html');
    if (!FORCE && (await existe(destino))) continue;
    pendentes.push(p);
  }

  const jaTinha = paths.length - pendentes.length;
  if (jaTinha) console.log(`${jaTinha} já em cache (use --force para rebaixar).`);
  if (!pendentes.length) {
    console.log('Nada a baixar.');
    return;
  }
  console.log(`Baixando ${pendentes.length}...\n`);

  const resultados = [];

  for (let i = 0; i < pendentes.length; i += CONCURRENCY) {
    const lote = pendentes.slice(i, i + CONCURRENCY);
    const respostas = await Promise.all(lote.map(baixar));

    for (const r of respostas) {
      if (r.html !== null) {
        await writeFile(join(RAW_DIR, pathParaArquivo(r.path) + '.html'), r.html, 'utf8');
      }
      const { html, ...semHtml } = r;
      resultados.push(semHtml);

      const marca = r.status === 200 ? 'ok ' : '!! ';
      const detalhe = r.status === 200 ? `${(r.bytes / 1024).toFixed(0)} KB` : r.erro ?? `HTTP ${r.status}`;
      console.log(`${marca}${r.path}  ${detalhe}`);
    }

    if (i + CONCURRENCY < pendentes.length) {
      await new Promise((r) => setTimeout(r, PAUSA_ENTRE_LOTES_MS));
    }
  }

  await writeFile(STATUS_FILE, JSON.stringify(resultados, null, 2), 'utf8');

  const problemas = resultados.filter((r) => r.status !== 200);
  console.log(`\n${resultados.length - problemas.length}/${resultados.length} OK.`);

  if (problemas.length) {
    console.log(`\n${problemas.length} com problema — precisam de decisão antes de seguir:`);
    for (const p of problemas) {
      console.log(`  ${p.path}  ${p.erro ?? `HTTP ${p.status}`}${p.location ? ` -> ${p.location}` : ''}`);
    }
    process.exitCode = 1;
  }
}

main();
