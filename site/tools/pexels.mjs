/**
 * Busca e baixa imagens da Pexels para os slots que ainda não têm foto real.
 *
 * Uso deliberadamente limitado: hero e fundos. As posições de PROVA (cases,
 * antes/depois, equipe) ficam reservadas para foto real do cliente — a análise
 * de concorrentes (06-analise-visual-concorrentes.md) mostra que público
 * industrial descrê de stock, e o antes/depois real é o diferencial que
 * nenhum concorrente exibe.
 *
 *   node tools/pexels.mjs            # busca e baixa conforme SLOTS
 *   node tools/pexels.mjs --buscar "termo"   # só lista candidatas
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, 'public', 'img');

function chave() {
  try {
    const env = readFileSync(join(ROOT, '.env'), 'utf8');
    const m = env.match(/^PEXELS_API_KEY=(.+)$/m);
    if (m) return m[1].trim();
  } catch {}
  if (process.env.PEXELS_API_KEY) return process.env.PEXELS_API_KEY;
  throw new Error('PEXELS_API_KEY ausente. Crie site/.env a partir de .env.example.');
}

const API = 'https://api.pexels.com/v1/search';

async function buscar(query, { orientation = 'landscape', perPage = 12 } = {}) {
  const url = `${API}?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=${perPage}&locale=pt-BR`;
  const res = await fetch(url, { headers: { Authorization: chave() } });
  if (!res.ok) throw new Error(`Pexels ${res.status}: ${await res.text()}`);
  return (await res.json()).photos ?? [];
}

/**
 * Slots do site. `escolha` fixa o índice do resultado para o build ser
 * reproduzível — sem isso a imagem mudaria a cada execução.
 */
const SLOTS = [
  // Escolhas conferidas uma a uma pela descrição. A busca em inglês devolveu
  // um foguete da SpaceX e uma fábrica ABANDONADA nos primeiros resultados —
  // por isso as queries são em português e os índices, fixos e verificados.
  {
    arquivo: 'hero-home',
    query: 'operario industria capacete maquina',
    // Índice 1 tinha a marca "НЛМК" (siderúrgica russa) legível no capacete —
    // marca estrangeira de terceiro no hero de uma empresa gaúcha não serve.
    escolha: 4, // engenheira com EPI reparando máquina, sem marca visível
    largura: 1920,
  },
  {
    arquivo: 'hero-interno',
    query: 'operario industria capacete maquina',
    escolha: 6, // engenheira com EPI inspecionando máquinas — casa com laudo/inspeção
    largura: 1600,
  },
  {
    arquivo: 'cta-industria',
    query: 'trabalhador fabrica seguranca equipamento',
    escolha: 6, // operário com EPI diante de bobina de aço
    largura: 1600,
  },
];

async function baixar(url, destino) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  await writeFile(destino, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  const termoAvulso = process.argv.includes('--buscar')
    ? process.argv[process.argv.indexOf('--buscar') + 1]
    : null;

  if (termoAvulso) {
    const fotos = await buscar(termoAvulso);
    console.log(`${fotos.length} resultados para "${termoAvulso}":\n`);
    fotos.forEach((f, i) => {
      console.log(`[${i}] ${f.width}x${f.height}  ${f.photographer}`);
      console.log(`     ${f.alt || '(sem alt)'}`);
      console.log(`     ${f.url}\n`);
    });
    return;
  }

  await mkdir(OUT, { recursive: true });
  const creditos = [];

  for (const slot of SLOTS) {
    const fotos = await buscar(slot.query);
    const foto = fotos[slot.escolha];
    if (!foto) {
      console.log(`!! sem resultado para "${slot.query}" no índice ${slot.escolha}`);
      continue;
    }

    const src = `${foto.src.original}?auto=compress&cs=tinysrgb&w=${slot.largura}`;
    await baixar(src, join(OUT, `${slot.arquivo}.jpg`));

    creditos.push({
      arquivo: `${slot.arquivo}.jpg`,
      fotografo: foto.photographer,
      perfil: foto.photographer_url,
      pagina: foto.url,
      alt: foto.alt,
    });
    console.log(`ok ${slot.arquivo}.jpg — ${foto.photographer}`);
  }

  // Pexels não exige atribuição, mas registrar a origem evita dúvida futura
  // sobre licenciamento — mesmo padrão do _manifest.json dos ícones Freepik.
  await writeFile(join(OUT, '_pexels-creditos.json'), JSON.stringify(creditos, null, 2), 'utf8');
  console.log(`\n${creditos.length} imagens · créditos em public/img/_pexels-creditos.json`);
}

main();
