import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.previsio.com.br',

  // As 235 URLs canônicas não têm barra final, e hoje `/pagina/` responde 200
  // canonicalizando para a home (bug #3 do plano). `format: 'file'` gera
  // `adequacao-nr12.html` em vez de `adequacao-nr12/index.html`, o que com
  // `try_files $uri $uri.html` no nginx serve a URL exata, sem barra.
  trailingSlash: 'never',
  build: { format: 'file' },

  // Site institucional estático: nada de JS por padrão.
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
