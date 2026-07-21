/**
 * Carrega o conteúdo extraído do site atual (data/content/*.json).
 *
 * É a única fonte das 235 rotas. Como tudo passa por aqui, a lista de páginas
 * geradas é auditável: dá para diffar contra data/baseline.csv e provar
 * cobertura de 100% antes do go-live (§13 do plano).
 */

import { PILARES, ROTULOS } from '../../tools/extract/taxonomia.mjs';

// Heros disponíveis por cluster (public/img/hero/*.jpg). O glob confirma quais
// existem no build; se um cluster não tiver hero próprio, cai no institucional.
const HEROS = new Set(
  Object.keys(import.meta.glob('../../public/img/hero/*.jpg')).map((p) =>
    p.split('/').pop().replace('.jpg', ''),
  ),
);

/** Imagem de hero para uma página, variando por cluster. */
export function heroDe(pagina) {
  const c = pagina?.cluster;
  if (c && HEROS.has(c)) return `/img/hero/${c}.jpg`;
  return '/img/hero/institucional.jpg';
}

// import.meta.glob (não fs.readdir): o Vite resolve isso em tempo de build e
// embute os dados no bundle. Com fs, o módulo empacotado procuraria os JSON
// dentro de dist/ e o build quebra.
const ARQUIVOS = import.meta.glob('../../data/content/*.json', { eager: true });

/** Todas as páginas, ordenadas por path. */
export const PAGINAS = Object.values(ARQUIVOS)
  .map((m) => m.default ?? m)
  .sort((a, b) => a.path.localeCompare(b.path));

export const porPath = (path) => PAGINAS.find((p) => p.path === path) ?? null;

/** Páginas de um cluster, com os pilares primeiro. */
export function porCluster(cluster) {
  const pilar = PILARES[cluster];
  return PAGINAS.filter((p) => p.cluster === cluster).sort((a, b) => {
    if (a.path === pilar) return -1;
    if (b.path === pilar) return 1;
    return (a.h1 ?? '').localeCompare(b.h1 ?? '');
  });
}

/** Resumo por cluster para montar mega-menu e cards da home. */
export function clustersComContagem(ordem) {
  return ordem
    .map((c) => {
      const paginas = porCluster(c);
      return {
        id: c,
        rotulo: ROTULOS[c] ?? c,
        pilar: PILARES[c] ?? null,
        total: paginas.length,
        paginas,
      };
    })
    .filter((c) => c.total > 0);
}

/** Artigos do blog (exclui o índice /artigos). */
export const ARTIGOS = PAGINAS.filter((p) => p.tipo === 'artigo');

/**
 * Trilha de navegação. As URLs continuam planas, mas o breadcrumb expõe a
 * hierarquia por cluster — é o que faz o site "parecer" organizado sem que
 * nenhum endereço mude.
 */
export function trilha(pagina) {
  const t = [{ label: 'Home', href: '/' }];
  if (pagina.tipo === 'artigo') {
    t.push({ label: 'Artigos', href: '/artigos' });
  } else if (pagina.cluster && pagina.cluster !== 'institucional') {
    const pilar = PILARES[pagina.cluster];
    // Não repetir o pilar como ancestral quando a própria página é o pilar.
    if (pilar && pilar !== pagina.path) {
      t.push({ label: ROTULOS[pagina.cluster], href: pilar });
    }
  }
  t.push({ label: pagina.breadcrumb || pagina.h1, href: null });
  return t;
}
