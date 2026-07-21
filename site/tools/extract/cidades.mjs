/**
 * Extrai o bloco "Principais cidades e regiões" uma única vez.
 *
 * O bloco é byte-idêntico nas 217 páginas-keyword (319.641 chars) — só o H2
 * muda com a keyword. Guardar 217 cópias seria 15 MB de texto duplicado; em
 * vez disso, salvamos a lista uma vez em src/data/cidades.json e o template
 * gera o cabeçalho a partir do H1 de cada página.
 *
 * Preserva 100% do conteúdo (decisão do cliente — sem poda), mas o template
 * o renderiza recolhido num <details>: o texto fica todo no HTML para o
 * crawler, sem dominar o layout.
 *
 *   node tools/extract/cidades.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = join(ROOT, 'src', 'data');

// Página de referência: qualquer keyword-page serve, o bloco é idêntico.
const REF = join(ROOT, 'data', 'raw', 'adequacao-nr12.html');

const $ = cheerio.load(readFileSync(REF, 'utf8'));
const $bloco = $('.organictabs--regioes').first();

if (!$bloco.length) {
  console.error('Bloco de cidades não encontrado na página de referência.');
  process.exit(1);
}

// As siglas ficam no menu de abas; as cidades, em uma <ul> por aba, na ordem.
// "GO e DF" vem como uma aba só — mantido como está no original.
const ufs = $bloco.find('.organictabs__menu span').map((_, el) => $(el).text().trim()).get();
const uls = $bloco.find('.organictabs__content > ul');

const estados = [];
uls.each((i, ul) => {
  const cidades = $(ul).children('li').map((_, li) => $(li).text().trim()).get().filter(Boolean);
  if (cidades.length) estados.push({ uf: ufs[i] ?? '?', cidades });
});

const total = estados.reduce((n, e) => n + e.cidades.length, 0);

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'cidades.json'), JSON.stringify(estados), 'utf8');

console.log(`${estados.length} estados · ${total.toLocaleString('pt-BR')} cidades → src/data/cidades.json`);
