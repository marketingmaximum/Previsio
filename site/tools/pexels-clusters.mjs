/**
 * Um hero por cluster — dá variação visual às páginas internas.
 *
 * Antes todas usavam a MESMA foto (hero-interno.jpg, com uma pessoa de cabeça
 * cortada). Aqui buscamos uma cena industrial por tema, com termos de CENA/
 * EQUIPAMENTO (não de retrato), para eliminar corte de cabeça. Escolhas fixas
 * por índice → build reproduzível.
 *
 *   node tools/pexels-clusters.mjs --buscar "termo"   # lista candidatas
 *   node tools/pexels-clusters.mjs                     # baixa conforme HEROIS
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, 'public', 'img', 'hero');

function chave() {
  const env = readFileSync(join(ROOT, '.env'), 'utf8');
  const m = env.match(/^PEXELS_API_KEY=(.+)$/m);
  if (!m) throw new Error('PEXELS_API_KEY ausente em site/.env');
  return m[1].trim();
}

async function buscar(query, perPage = 15) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=${perPage}&locale=pt-BR`;
  const res = await fetch(url, { headers: { Authorization: chave() } });
  if (!res.ok) throw new Error(`Pexels ${res.status}`);
  return (await res.json()).photos ?? [];
}

/**
 * Cada cluster: termo de busca (cena/equipamento) + índice escolhido.
 * Termos evitam close de pessoa; o scrim navy escurece a esquerda, então o
 * lado direito da imagem é o que aparece.
 */
const HEROIS = [
  { cluster: 'nr-12', query: 'industrial factory production line machine', escolha: 0 },
  { cluster: 'nr-10', query: 'painel eletrico industrial quadro', escolha: 3 },
  { cluster: 'spda', query: 'high voltage power transmission tower sky', escolha: 0 },
  { cluster: 'nr-35', query: 'industrial steel structure construction height', escolha: 0 },
  { cluster: 'nr-33', query: 'industrial storage tanks pipes plant', escolha: 0 },
  { cluster: 'loto', query: 'industrial pipes valves factory', escolha: 0 },
  { cluster: 'nr-11', query: 'empilhadeira armazem logistica', escolha: 0 },
  { cluster: 'pgr', query: 'modern industrial facility interior', escolha: 0 },
  { cluster: 'esocial', query: 'office desk documents laptop workplace', escolha: 0 },
  { cluster: 'insalubridade', query: 'heavy industry metal foundry sparks', escolha: 0 },
  { cluster: 'higiene', query: 'industrial ventilation ducts pipes', escolha: 0 },
  { cluster: 'respiratoria', query: 'industrial spray painting workshop', escolha: 0 },
  { cluster: 'ergonomia', query: 'linha de montagem fabrica operario', escolha: 3 },
  { cluster: 'quimicos', query: 'tambores produtos quimicos armazenamento', escolha: 3 },
  { cluster: 'emergencia', query: 'extintor incendio seguranca predio', escolha: 4 },
  { cluster: 'ppramp', query: 'clean modern laboratory interior', escolha: 0 },
  { cluster: 'cipa-sesmt', query: 'industrial workplace safety helmet team', escolha: 0 },
  { cluster: 'treinamentos', query: 'industrial workers training facility', escolha: 0 },
  { cluster: 'manutencao', query: 'industrial machinery maintenance workshop', escolha: 0 },
  // hero genérico das páginas institucionais (substitui hero-interno.jpg)
  { cluster: 'institucional', query: 'modern factory industrial building interior', escolha: 0 },
];

async function baixar(url, destino) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  await writeFile(destino, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  const idx = process.argv.indexOf('--buscar');
  if (idx !== -1) {
    const termo = process.argv[idx + 1];
    const fotos = await buscar(termo);
    console.log(`${fotos.length} para "${termo}":\n`);
    fotos.forEach((f, i) => console.log(`[${i}] ${f.width}x${f.height} — ${f.alt || '(sem alt)'}`));
    return;
  }

  await mkdir(OUT, { recursive: true });
  const creditos = [];

  for (const h of HEROIS) {
    const fotos = await buscar(h.query);
    const foto = fotos[h.escolha];
    if (!foto) {
      console.log(`!! sem resultado: ${h.cluster} ("${h.query}")`);
      continue;
    }
    const src = `${foto.src.original}?auto=compress&cs=tinysrgb&w=1600`;
    await baixar(src, join(OUT, `${h.cluster}.jpg`));
    creditos.push({ cluster: h.cluster, fotografo: foto.photographer, pagina: foto.url, alt: foto.alt });
    console.log(`ok ${h.cluster}.jpg — ${foto.alt?.slice(0, 60) ?? foto.photographer}`);
    await new Promise((r) => setTimeout(r, 250)); // educado com a API
  }

  await writeFile(join(OUT, '_creditos.json'), JSON.stringify(creditos, null, 2), 'utf8');
  console.log(`\n${creditos.length} heros · créditos em public/img/hero/_creditos.json`);
}

main();
