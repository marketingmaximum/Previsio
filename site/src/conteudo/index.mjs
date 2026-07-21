/**
 * Conteúdo enriquecido — a camada de copy nova, escrita sobre o que já existe.
 *
 * Cada módulo em ./clusters/*.mjs exporta um mapa `{ path: { ... } }`. Quando
 * uma página tem entrada aqui, o template usa esta versão no lugar do corpo
 * extraído do site atual (que continua guardado em data/content, intacto e
 * auditável). Sem entrada, a página cai no conteúdo original — nada quebra.
 *
 * Regra do projeto: o conteúdo é REESCRITO a partir do que o cliente já diz
 * (site atual, LP-01, processo do briefing) e de fatos normativos reais.
 * Não se inventam números, prazos, cases ou serviços que a empresa não presta.
 *
 * Formato de cada entrada:
 *   {
 *     resposta: string   // resposta direta ~40-60 palavras (bloco de topo, GEO)
 *     corpo: string      // HTML semântico limpo (h2/h3/p/ul/ol)
 *     faq: [{ q, a }]    // perguntas frequentes (conteúdo do cliente)
 *   }
 */

const MODULOS = import.meta.glob('./clusters/*.mjs', { eager: true });

const MAPA = {};
for (const m of Object.values(MODULOS)) {
  Object.assign(MAPA, m.default ?? {});
}

export const conteudoEnriquecido = (path) => MAPA[path] ?? null;

/** Quantas páginas já têm conteúdo novo — usado para acompanhar o avanço. */
export const TOTAL_ENRIQUECIDO = Object.keys(MAPA).length;
