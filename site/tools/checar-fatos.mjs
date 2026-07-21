/**
 * Varredura de segurança factual do conteúdo enriquecido.
 *
 * Não decide nada — só aponta trechos que MERECEM olho humano: números,
 * datas, portarias, normas citadas com número, prazos, percentuais. O objetivo
 * é revisar direcionado em vez de reler ~200 páginas linha a linha.
 *
 *   node tools/checar-fatos.mjs
 */

import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'conteudo', 'clusters');

// Padrões que exigem verificação. Cada um pode ser fato real OU invenção.
const PADROES = [
  { nome: 'proibido "+20 anos"', re: /\b20\s*anos\b/gi, grave: true },
  { nome: 'portaria', re: /portaria[s]?\s*(n[º°.]?\s*)?\d+/gi, grave: true },
  { nome: 'número de NBR', re: /\bNBR\s*\d+/gi, grave: false },
  { nome: 'número de NHO', re: /\bNHO\s*\d+/gi, grave: false },
  { nome: 'ano específico (exceto 2016)', re: /\b(19\d\d|20(0\d|1[0-57-9]|2\d))\b/g, grave: false },
  { nome: 'percentual', re: /\d+\s*%/g, grave: false },
  { nome: 'prazo em dias/meses/horas', re: /\b\d+\s*(dias|meses|horas|semanas)\b/gi, grave: false },
  { nome: 'valor em reais', re: /R\$\s*[\d.,]+/g, grave: true },
  { nome: 'quantidade grande', re: /\b\d{3,}(\.\d{3})*\b/g, grave: false },
];

// Números/expressões que o cliente já usa e são permitidos.
const PERMITIDOS = [/desde 2016/i, /1\.000/, /ISO 13849/i, /ISO 45001/i, /S-22\d0/];

const arquivos = readdirSync(DIR).filter((f) => f.endsWith('.mjs'));
let totalAvisos = 0;

for (const f of arquivos) {
  const txt = readFileSync(join(DIR, f), 'utf8');
  const achados = [];

  for (const p of PADROES) {
    for (const m of txt.matchAll(p.re)) {
      const trecho = m[0];
      if (PERMITIDOS.some((ok) => ok.test(trecho))) continue;
      // contexto curto ao redor
      const i = m.index;
      const ctx = txt.slice(Math.max(0, i - 45), i + trecho.length + 45).replace(/\s+/g, ' ');
      achados.push({ tipo: p.nome, grave: p.grave, trecho, ctx });
    }
  }

  if (achados.length) {
    console.log(`\n### ${f} — ${achados.length} trecho(s) a verificar`);
    for (const a of achados) {
      console.log(`  ${a.grave ? '🔴' : '· '} [${a.tipo}] …${a.ctx}…`);
    }
    totalAvisos += achados.length;
  }
}

console.log(`\n${totalAvisos} trecho(s) para revisão humana em ${arquivos.length} arquivos.`);
console.log('🔴 = prioridade (portaria/valor/"20 anos"). Verifique se o fato está na fonte da página.');
