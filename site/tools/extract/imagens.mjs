/**
 * Espelha as imagens do site atual para public/, preservando o caminho exato.
 *
 * Preservar URL de imagem é requisito do plano (§3.5): imagem que muda de
 * endereço perde histórico e o Google Imagens demora muito mais a recuperar
 * que a busca web. Então /imagens/informacoes/x.webp continua sendo
 * /imagens/informacoes/x.webp no site novo.
 *
 *   node tools/extract/imagens.mjs
 */

import { writeFile, mkdir, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdirSync, readFileSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENT = join(ROOT, 'data', 'content');
const PUBLIC = join(ROOT, 'public');
const ORIGIN = 'https://www.previsio.com.br';

const CONCURRENCY = 4;

async function existe(p) {
  try { await access(p); return true; } catch { return false; }
}

async function main() {
  // Coleta toda src referenciada — tanto do array `imagens` quanto de dentro
  // do corpo HTML (os posts do blog têm capa solta em /doutor/uploads/).
  const srcs = new Set();
  for (const f of readdirSync(CONTENT).filter((f) => f.endsWith('.json'))) {
    const d = JSON.parse(readFileSync(join(CONTENT, f), 'utf8'));
    for (const img of d.imagens ?? []) if (img.src?.startsWith('/')) srcs.add(img.src);
    for (const m of (d.bodyHtml ?? '').matchAll(/src="([^"]+)"/g)) {
      const s = m[1].replace(ORIGIN, '');
      if (s.startsWith('/')) srcs.add(s);
    }
  }

  const lista = [...srcs].sort();
  console.log(`${lista.length} imagens únicas referenciadas.`);

  const pendentes = [];
  for (const s of lista) {
    if (!(await existe(join(PUBLIC, s)))) pendentes.push(s);
  }
  console.log(`${lista.length - pendentes.length} já em cache · baixando ${pendentes.length}...\n`);

  let ok = 0;
  const falhas = [];

  for (let i = 0; i < pendentes.length; i += CONCURRENCY) {
    const lote = pendentes.slice(i, i + CONCURRENCY);
    await Promise.all(
      lote.map(async (src) => {
        try {
          const res = await fetch(ORIGIN + src, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0' },
          });
          if (!res.ok) {
            falhas.push(`${src} — HTTP ${res.status}`);
            return;
          }
          const destino = join(PUBLIC, src);
          await mkdir(dirname(destino), { recursive: true });
          await writeFile(destino, Buffer.from(await res.arrayBuffer()));
          ok++;
        } catch (err) {
          falhas.push(`${src} — ${err.message}`);
        }
      }),
    );
    if (i % 80 === 0) console.log(`  ${i + lote.length}/${pendentes.length}...`);
  }

  console.log(`\n${ok} baixadas.`);
  if (falhas.length) {
    console.log(`\n${falhas.length} falha(s):`);
    for (const f of falhas.slice(0, 20)) console.log(`  ${f}`);
    if (falhas.length > 20) console.log(`  ... e mais ${falhas.length - 20}`);
  }
}

main();
