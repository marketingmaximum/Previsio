# Site institucional Previsio — Astro SSG

Redesign do site institucional preservando as 235 URLs canônicas (ver
`estrategia/07-plano-site-institucional.md`). O site atual **não é WordPress**
— é PHP custom; o conteúdo aqui vem de crawl do HTML público.

## Comandos

```
npm install
npm run fetch        # baixa as 235 páginas do site atual -> data/raw/  (gitignored)
npm run extract      # HTML -> data/content/*.json + data/baseline.csv (contrato de QA)
node tools/extract/cidades.mjs    # extrai o bloco de cidades (uma vez) -> src/data/cidades.json
node tools/extract/imagens.mjs    # espelha imagens preservando o caminho -> public/imagens/
node tools/pexels.mjs             # hero e fundos (precisa de .env com PEXELS_API_KEY)
npx astro dev        # desenvolvimento
npx astro build      # gera dist/ com as 235 páginas
```

## Princípios inegociáveis (§3 do plano)

- As 235 URLs respondem 200, path byte-idêntico. Nunca renomear slug.
- title, meta description e H1 portados 1:1 na Fase 1.
- Conteúdo não encolhe — nenhuma página removida, nenhum bloco cortado
  (o bloco de 5.599 cidades é preservado, recolhido num `<details>`).
- Malha de links internos preservada em densidade.
- URLs de imagem preservadas (`/imagens/informacoes/<slug>-0N.webp`).

## Verificação

`npm run build` deve gerar exatamente 235 páginas. O diff de cobertura contra
`data/urls-canonicas.txt` e a paridade de `<title>` contra `data/baseline.csv`
são o contrato de QA do go-live.

## Pendências

- **Copy**: Fase 1 é paridade; reescrita vem depois (§7).
- **Bloqueadores do cliente**: subtítulo da marca, CNPJ, RT+CREA, logos.
- Ver `src/config.mjs` para os `TODO(cliente)`.
