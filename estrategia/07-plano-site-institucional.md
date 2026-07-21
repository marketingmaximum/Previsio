# Plano do Site Institucional Previsio — Redesign + Migração sem perda de SEO

> Documento de planejamento. Base de evidência: crawl HTTP real de `www.previsio.com.br` em 21/07/2026 (217 URLs verificadas com status 200), `05-revisao-site-previsio.md`, `01-briefing-cliente.md`, `06-analise-visual-concorrentes.md` e o design system implementado em `lp-01/`.
> Decisões travadas com o cliente interno (Maximum) em 21/07/2026 — ver §2.

---

## 1. Contexto e premissas corrigidas

O objetivo é substituir o site atual da Previsio por um site com layout atualizado, menos confuso e otimizado para busca — **sem perder o ativo orgânico construído nos últimos ~2 anos**. O cliente exige explicitamente que as URLs permaneçam as mesmas.

Duas premissas de entrada estavam erradas e precisam ser corrigidas antes de qualquer estimativa:

| Premissa assumida | Realidade verificada |
|---|---|
| "O site é WordPress" | **Falso.** É aplicação **PHP custom** com templates estáticos atrás de nginx. `/wp-admin/`, `/wp-json/`, `/feed`, `/sitemap_index.xml` → **404**. Cookie `PHPSESSID`, zero ocorrência de `wp-content`/`wp-includes`, sem Yoast/RankMath/Elementor. Só `cursos.previsio.com.br` é WordPress de verdade. |
| "O site tem ~218 páginas" | **235 URLs canônicas** a preservar: 217 do sitemap + `/artigos` + `/servicos/manutencao-e-inspecao-em-linhas-de-vida` + `/servicos/medicao-de-tempo-de-parada-em-maquinas-nr12` (as três fora do sitemap) + 15 posts vivos em `/artigos/<slug>`. |

**Consequências práticas:** não há banco WordPress para exportar, não há plugin de redirect, não há painel administrativo herdado. O conteúdo será extraído por crawl do HTML público. O mapa de redirects será implementado no servidor novo (nginx) ou no próprio build.

**Ponto favorável:** mantendo as URLs, o vetor nº 1 de perda em replatform (mudança de URL) é eliminado. Migrações que preservam URLs estabilizam tipicamente em 4–8 semanas, com oscilação de 10–25% no primeiro mês.

---

## 2. Decisões travadas

| Decisão | Escolha | Implicação |
|---|---|---|
| Quem edita o institucional | **Só a agência, via código** | Libera arquitetura estática. Cliente não precisa de CMS para páginas de serviço. |
| Arquitetura | **Astro SSG + WordPress headless só no blog** | Deploy por rsync/SSH — mesmo fluxo já usado na LP-01. |
| Páginas duplicadas | **Recriar por template a partir de dados extraídos. Preservar 100% do conteúdo — nenhuma página removida, nenhum bloco cortado** | O conteúdo único de cada página é preservado 1:1; a duplicação vira 1 template + 217 registros. Não há fase de poda — ver §11.5. |
| Go-live | **Antes de nov/2026** | Separa o redesign da troca de hospedagem (contrato Ideal Marketing encerra nov/2026). Duas mudanças em momentos distintos, não uma só. |

---

## 3. Restrições inegociáveis de SEO

Regras que valem para toda a execução. Violá-las é o que derruba tráfego em migração.

1. **As 235 URLs respondem 200 no site novo, byte-idênticas no path.** Nenhuma renomeação, nenhuma "melhoria" de slug.
2. **`<title>`, meta description e H1 são portados 1:1 na Fase 1.** Otimização de copy vem depois do tráfego estabilizar — nunca junto.
3. **O corpo do conteúdo não encolhe.** Redesign "mais limpo" tipicamente corta texto; isso derruba cauda longa. Reorganizar sim, remover não.
4. **A malha de links internos é preservada em densidade.** As páginas atuais têm ~239 links internos cada. Um menu novo mais enxuto pode desindexar profundidade — o hub por cluster (§5) e o `/mapa-site` compensam.
5. **URLs de imagem preservadas.** As imagens vivem em `/imagens/informacoes/<slug>-01.webp` (padrão de 3 por página). Imagem que muda de URL perde histórico e demora muito mais a recuperar que a busca web.
6. **Staging obrigatoriamente `noindex` + protegido; produção obrigatoriamente sem `noindex`.** O erro mais comum e mais fatal de todos é subir o `robots.txt` de staging.
7. **Dados estruturados validados antes do go-live**, não depois.

---

## 4. Modelo de conteúdo — o achado que torna o projeto viável

As páginas-keyword são **99,1% HTML idêntico** (`/adequacao-nr12` vs `/laudo-nr12`: 112 linhas diferentes de 13.126). Mas a análise do diff mostra que a diferença **não é só a keyword trocada**:

- **Boilerplate compartilhado (~95% do peso):** menu, mega-nav, formulário, "Páginas Relacionadas", rodapé e o bloco "Principais cidades e regiões" — que sozinho tem **5.601 itens de cidade/estado** por página.
- **Conteúdo único real (~400–600 palavras):** cada página tem um bloco editorial próprio, com H2/H3, parágrafos e listas, genuinamente diferente entre si. Não é a mesma frase com a keyword substituída.

Cada uma das 235 URLs se reduz a este registro:

```
slug                → adequacao-nr12
cluster             → nr-12
h1 / breadcrumb     → "Adequação nr12"
title               → "Adequação nr12 - Previsio Engenharia"
metaDescription     → (porta 1:1 na Fase 1; corrige na Fase 2 — ver §10)
body                → bloco HTML de 400-600 palavras (H2/H3/p/ul)
imagens             → /imagens/informacoes/adequacao-nr12-0{1,2,3}.webp
relacionadas        → derivadas do cluster
```

**Motor da migração:** script de extração que percorre as 235 URLs, parseia o HTML e emite um arquivo de conteúdo por página (MDX ou JSON). O Astro consome isso via `getStaticPaths` e gera as 235 rotas. Um template, 235 registros — em vez de 235 arquivos mantidos à mão.

Esse script é também o **instrumento de QA**: a lista de rotas geradas pode ser diffada contra o crawl original para provar cobertura de 100% antes do go-live.

**Descartar na extração:** blocos de cidade, mega-menu duplicado, `<meta name="keywords">` (tag obsoleta), o `<h1>{{SHARE}}</h1>` (placeholder de template renderizado cru, gerando 2 H1 por página) e o parágrafo de intro que hoje está **dentro de um comentário HTML** — nunca renderizou.

---

## 5. Arquitetura de informação e sitemap

A restrição de URLs impede reestruturar endereços. Mas **navegação não é URL** — dá para impor hierarquia por cima de URLs planas. É a maior oportunidade de "deixar menos confuso" sem custo de SEO.

Hoje são 2 níveis sem hierarquia (217 páginas-keyword na raiz + 41 em `/servicos/`), com três índices sobrepostos (`/servicos`, `/informacoes`, `/mapa-site`).

**Modelo proposto: pilar-cluster, usando URLs que já existem.**

As páginas `/servicos/nr-12`, `/servicos/nr-10`, `/servicos/nr-35`, `/servicos/sst` hoje são índices rasos (~1.262 palavras, quase tudo menu). Elas viram **páginas-pilar de verdade** — conteúdo próprio, substantivo, e ponto de convergência do cluster. As páginas-keyword raiz permanecem intocadas em URL, mas passam a ter breadcrumb e navegação apontando ao seu pilar.

### Menu principal

Organizado por **norma**, que é como o gestor industrial pensa e busca:

```
Soluções ▾  (mega-menu, 6 colunas por cluster)
├── NR-12 · Segurança em Máquinas      → /servicos/nr-12       (31 páginas)
├── NR-10 · Elétrica e SPDA            → /servicos/nr-10       (37 páginas)
├── NR-35 · Trabalho em Altura         → /servicos/nr-35       (13 páginas)
├── NR-33 · Espaço Confinado + LOTO    → /servicos/prontuario-nr-33  (7 páginas)
├── SST Documental e eSocial           → /servicos/sst         (43 páginas)
└── Treinamentos                       → /treinamentos-seguranca-do-trabalho  (7+ páginas)

Quem somos     → /quem-somos
Artigos        → /artigos
Ferramentas    → ferramentas.previsio.com.br  (externo)
Contato        → /contato
[CTA] Solicitar orçamento
```

Clusters restantes (NR-11/movimentação, ergonomia, químicos, higiene ocupacional, emergência/PPCI, PPRAMP, CIPA/SESMT/ISO 45001) entram sob **SST Documental** ou no índice completo — não merecem espaço no menu principal, mas continuam acessíveis e linkados.

### Papel de cada índice (hoje sobrepostos, agora diferenciados)

| URL | Papel novo |
|---|---|
| `/servicos` | Hub visual dos 6 clusters principais — porta de entrada, não lista |
| `/informacoes` | Índice A–Z completo de todos os serviços — diretório de navegação profunda |
| `/mapa-site` | Sitemap HTML puro, para crawlability |

### Páginas institucionais a redesenhar do zero

`/` (home) · `/quem-somos` · `/contato` · `/download` · `/servicos` · os 6 pilares de cluster.

A **home** hoje tem 240 links internos e **zero JSON-LD**. Vira: hero com foto industrial real → prova (números/logos, quando autorizados) → 6 clusters → diferencial "projeta, executa e atesta" → cases antes/depois → CTA. O peso de links internos migra para o mega-menu e o rodapé, preservando a malha.

---

## 6. Design a aplicar

**Não partimos do zero.** O design system já existe, implementado e validado em `lp-01/assets/css/style.css`. O site institucional herda e estende.

### Tokens (já definidos, ver `lp-01/assets/css/style.css:5-13`)

```
navy   #09253C  (Pantone 281C) — cor de autoridade
green  #44B44A  (Pantone 7479C) — exclusiva de CTA
ink #1c2b36 · muted #5d6f7c · line #e5eaef · soft #f4f7f9 · wa #25D366
Roboto (400/500/700) + Roboto Slab (600/700/800) para headings
radius 14px · pills 999px · maxw 1180px
```

### Direção visual (de `06-analise-visual-concorrentes.md`, baseado em screenshots de 10 concorrentes)

O concorrente nº 1 em SEO local — **SISTRA, mesma cidade** — tem página de NR-12 em formato blog: H1 azul sobre branco, parágrafos longos, sem hero visual e **sem CTA acima da dobra**. É a maior oportunidade do projeto: ganhamos no visual sem esforço.

Padrões a aplicar:
1. **Hero full-bleed com foto industrial real** + overlay navy + headline de dor à esquerda (modelo Prisma, o melhor do setor)
2. **Navy como autoridade, verde só no CTA** — nunca verde como cor de fundo de seção
3. **Foto real > ilustração** — público industrial rejeita clipart (ver Tecnoeng: ideia boa, execução datada)
4. **Ícones de linha, família única, zero emoji** — os 14 SVGs de `lp-01/assets/icons/` já cobrem boa parte
5. **2 CTAs no hero:** orçamento (primário, verde) + WhatsApp (secundário, ghost)
6. **Um único formulário por página**
7. **Seção de processo em etapas** — as 6 etapas já validadas na LP-01 (Apreciação → Inventário → Projeto → Adequação → Laudo → Documentação)
8. **Cases antes/depois** — prova visual que nenhum concorrente mostra

### Extensões necessárias para o institucional

O CSS da LP-01 cobre landing page, não site multi-página. Falta construir: mega-menu, breadcrumb, template de página de serviço, template de artigo, índice A–Z, paginação, página 404 real.

### Correções de assets já identificadas

- `hero-mobile.jpg` existe e **nunca foi referenciado** (falta `<source media>`)
- Os `.webp` de `diferencial` e dos 4 cases existem mas **nunca são servidos** — os `<img>` apontam direto ao `.jpg`. Perda de ~40% de peso já disponível.
- Banner LGPD de `plano-rastreamento-leads.md` usa tokens da **Maximum** (`#fed30d`, Oswald) — precisa ser re-tematizado para navy/verde/Roboto.

---

## 7. Estratégia de textos

**Fase 1 é paridade — o texto atual é portado 1:1.** Reescrever copy junto com replatform torna impossível diagnosticar uma eventual queda.

O que **pode** ser corrigido já na Fase 1, porque é bug e não conteúdo:

- **Meta descriptions quebradas em escala.** Padrão atual: *"Adequação nr12, você veio ao lugar certo! **a é especializada** em adequação nr12… Saiba mais."* — falta o sujeito "A Previsio". Está assim em quase todas as páginas raiz. É bug de variável de template, não escolha editorial. Corrigir é quick win de CTR.
- **`<title>` vazio** em `/blog/*` e no post morto.
- **`<title>` de `/servicos/nr-10` contém `U+200B`** (caractere invisível).

### Diretrizes para a reescrita (Fase 2+)

Tom já definido no briefing: técnico, direto, orientado a risco e resultado, empático com o gestor industrial. Trata o leitor como empresa ("sua empresa", "seus colaboradores").

O que as páginas atuais **não têm** e é onde ganhamos: números próprios, prazos, ART, NBRs/ISO citadas, cases, depoimentos, FAQ. Prioridades de conteúdo original:

- **Resposta direta no topo** de cada página: a pergunta como H2, resposta em 40–60 palavras, depois o aprofundamento. Formato que funciona tanto para featured snippet quanto para extração por IA.
- **Citar fontes normativas explicitamente** — NR-12 (Portarias MTE 224 e 344/2024), ABNT NBR 5419 (SPDA), ISO 13849. Verdadeiro no domínio e é a tática de melhor desempenho medido em estudo de GEO.
- **Dados originais** — nº de laudos emitidos, prazos médios, não-conformidades mais comuns encontradas em campo. É o conteúdo "não-commodity" que ninguém no nicho tem.
- **Autoria explícita** com engenheiro responsável e nº de CREA. E-E-A-T verificável e diferencial genuíno neste nicho.

### Claims travados — não publicar sem autorização

Registrados em 4 documentos do projeto e **válidos também para o site**:

- ❌ **"+20 anos"** — fonte única, contradiz "desde 2016" e o onipresente "+5 anos". Proibido.
- ⏸️ **Logos de clientes** (AGCO, Ambev, Gerdau, GM, John Deere, JBS, Klabin, Pirelli, Randon…) — só após autorização nominal.
- ⏸️ **"+1.000 clientes"**, números de case (nº de máquinas, prazo, % aprovação) — não existem compilados.
- ⚠️ **Automação industrial é da CODA**, não da Previsio. Decidido em 01/06/2026: sem cross-branding. O honesto é "execução com automação de segurança" dentro do escopo NR-12.
- ⚠️ **Subtítulo da marca em aberto:** guia de marca e logo dizem *"Segurança do Trabalho e Meio Ambiente"*; o APT diz *"…e Automação Industrial"*; o `<title>` da home atual diz "automação industrial". **Precisa ser definido antes do go-live** — aparece no logo, no title da home e no schema.
- ⚠️ Evitar no site o tom *"…em casos graves, até prisão"* (texto atual) — reprova em políticas de Google/Meta Ads.

---

## 8. Blog e integração WordPress

Hoje o blog é a área mais quebrada do site.

### Estado atual (verificado)

- **15 posts vivos** em `/artigos/<slug>`; índice `/artigos` responde 200 mas **não está no sitemap**
- **1 post morto:** `/artigos/cultura-de-seguranca-do-trabalho` → 200 com `<title>` vazio, fora do índice. Soft-404, post deletado. **Não migrar** — mapear para `/artigos`.
- 🔴 **`/blog/<slug>` canonicaliza para `/<slug>` na raiz, que retorna 404.** Páginas indexáveis, conteúdo vazio, canonicalizando para URLs inexistentes.
- 🔴 **`/blog/`, `/artigos/` e `/servicos/` são catch-all 200** — `/blog/slug-inventado-abc` responde 200 com title vazio. Armadilha de crawl budget infinita.
- Os 16 posts no sitemap estão com host `www.localhost` (sitemap estático gerado por Screaming Frog 17.2, **4,5 meses desatualizado**)
- Último post publicado: 28/03/2025

### Desenho

**WordPress headless, exclusivamente como CMS do blog.** Sem tema público, sem page builder, sem plugins de front. O Astro consome a REST API no build e gera `/artigos/<slug>` como HTML estático.

- **Instância:** subdiretório ou subdomínio protegido — o WP nunca é o site público
- **Publicação:** webhook no `publish` dispara rebuild (~1–3 min)
- **Treinamento obrigatório:** o cliente precisa saber que o post aparece após o build. Cliente não-técnico descobrir isso sozinho ("publiquei e não está no ar") é o principal risco operacional desta arquitetura — mitiga-se com treinamento na entrega, não com documentação.
- **URLs:** `/artigos/<slug>` é a rota canônica única. `/blog/*` → **301** para `/artigos/*`. Catch-alls passam a retornar **404 real**.
- **Schema:** `Article`/`BlogPosting` com `author` apontando para uma `Person` real, com `jobTitle` e CREA.

Os 15 posts são importados para o WP na migração.

---

## 9. Rastreamento — preservar integralmente

Já está em produção e não pode regredir. Detalhe em `lp-01/GTM-COMO-USAR.md` e `plano-rastreamento-leads.md`.

| Item | Valor |
|---|---|
| GTM | `GTM-TN7JVR7R` |
| GA4 | `G-ND02L73K2W` |
| Meta Pixel | `2064326930859080` |
| Google Ads | `18203369574` (label lead primária `vODvCLve174cEObAhehD`) |
| Webhook n8n | `https://n8n.srv981504.hstgr.cloud/webhook/541d74f5-...` |

**Eventos que o site novo tem de emitir:** `generate_lead` (conversão principal), `click_telefone`, `abrir_checklist`, `checklist_resultado`, `mx_attribution_ready`.

**Módulo de atribuição MX** já implementado em JS vanilla em `lp-01/assets/js/main.js:26-110` — porta direta para o site novo. Cookies `mx_visitor_id` (730d), `mx_first_touch` (180d, write-once), `mx_last_touch` (30d). Inclui bucket **`ia`** (chatgpt/perplexity/claude/gemini), relevante hoje.

**Pendência a resolver no site novo:** compartilhar first-touch entre `previsio.com.br`, `lp.previsio.com.br`, `ferramentas.` e `cursos.` — hoje é v1.4 no roadmap, não implementado. Com o site principal sendo reconstruído, é o momento.

⚠️ Não colar o snippet `gtag.js` do Google Ads — o GTM já dispara; os dois juntos contam conversão em dobro.

---

## 10. Correções técnicas a executar na migração

Bugs confirmados por crawl. A migração é a janela natural para todos.

| # | Problema | Correção |
|---|---|---|
| 1 | `/blog/<slug>` canonicaliza para URL raiz **404** | 301 `/blog/*` → `/artigos/*` |
| 2 | `/blog/`, `/artigos/`, `/servicos/` são **catch-all 200** | 404 real para slug inexistente |
| 3 | `/pagina/` (barra final) → 200 canonicalizando para a **home** | 301 `/x/` → `/x` |
| 4 | `robots.txt` bloqueia `/*.webp$` **e o site serve WebP como formato principal** → zero indexação em Google Imagens | Remover a regra |
| 5 | Sitemap estático (Screaming Frog), 4,5 meses velho, 16 URLs `www.localhost` | Sitemap gerado no build |
| 6 | Home com **zero JSON-LD** | `Organization` + `WebSite` |
| 7 | `/contato` sem `LocalBusiness` | Adicionar, com `areaServed` real |
| 8 | `<h1>{{SHARE}}</h1>` + H1 duplicado em todas as páginas de serviço | H1 único e limpo |
| 9 | Meta descriptions sem sujeito, em escala | Corrigir a variável na extração |
| 10 | `Cache-Control: no-store` em tudo | Cache/CDN normal (trivial em site estático) |
| 11 | HTML de 790 KB (152 KB gzip) — jQuery + CSS + JS **inline em toda página** | Resolvido por construção |
| 12 | `PHPSESSID` sem `Secure`/`HttpOnly`/`SameSite` | Desaparece (sem PHP) |
| 13 | `/servicos/nr-10` com `U+200B` no `<title>` | Limpar |
| 14 | `cursos.`/`moodle.` devolvem **406** para UA não-browser — pode estar bloqueando Googlebot | Investigar WAF (fora do escopo, mas reportar ao cliente) |

### Schema a implementar

Baseado no que o Google ainda suporta em 2026:

- ✅ `Organization` (global) · `LocalBusiness` (sede São Leopoldo — **usar `LocalBusiness` direto**, sem subtipo: `ProfessionalService` está deprecado no schema.org) · `BreadcrumbList` · `Article` nos posts · `Person` para o RT com CREA
- ⚠️ `Service` nas páginas de serviço — **não gera rich result**, implementa-se por desambiguação semântica. Baixo custo, mas não vender como entregável visual.
- ❌ **`FAQPage` e `HowTo` foram descontinuados.** O rich result de FAQ deixou de aparecer em **07/05/2026** (confirmado na documentação oficial do Google). Conteúdo de FAQ na página continua valioso — o que morreu foi o rich result, não o formato.

### Sobre GEO/AEO

O guia oficial do Google (maio/2026) é explícito: *"Structured data isn't required for generative AI search"* e *"You don't need to create new machine readable files, AI text files, markup, or Markdown"*. **`llms.txt` não é consumido por nenhum grande fornecedor de IA** — adoção de ~10% dos domínios com ~0% de consumo. Não implementar esperando ganho de citação, e não cobrar como entregável.

O que funciona para IA generativa é o que já está em §7: resposta direta, fontes citadas, dados originais, autoria verificável. É conteúdo bom — não uma disciplina separada.

---

## 11. Fases

Go-live antes de novembro. Hoje é 21/07/2026 — cerca de 14 semanas.

**O maior risco do projeto é de sequenciamento, não técnico.** Redesign visual, replatform e poda de conteúdo têm perfis de risco independentes. Feitos juntos, uma queda de tráfego vira opinião contra opinião.

### Fase 0 — Linha de base e acessos (semanas 1–2) — **BLOQUEANTE**

- **Acesso ao Google Search Console** (ver §12)
- Crawl completo de referência: URL, status, title, meta, H1, canonical, contagem de palavras, links internos. **É o contrato de QA da migração.**
- Script de extração das 235 páginas → arquivos de conteúdo
- Definir com o cliente: subtítulo da marca, CNPJ, RT/ART nomeado, autorização de logos

### Fase 1 — Design system e institucional (semanas 2–6)

- Extensão do CSS da LP-01 para multi-página (mega-menu, breadcrumb, templates, 404)
- Home, `/quem-somos`, `/contato`, `/servicos`, `/download` redesenhadas
- 6 páginas-pilar de cluster com conteúdo próprio

### Fase 2 — Geração em massa e blog (semanas 5–9)

- Template de página de serviço + geração das 229 páginas restantes via `getStaticPaths`
- WordPress headless provisionado; 15 posts importados; webhook de rebuild
- Schema, sitemap dinâmico, `robots.txt` corrigido

### Fase 3 — QA de paridade (semanas 9–11)

- Diff automatizado: rotas geradas × crawl da Fase 0 → **prova de cobertura 100%**
- Validação de schema, Core Web Vitals, tracking end-to-end
- Staging com `noindex` + proteção por senha

### Fase 4 — Go-live e monitoramento (semanas 11–14)

- Deploy, verificação imediata de `robots.txt`/`noindex` em produção
- Sitemap submetido no GSC
- Monitoramento diário por 30 dias, **segmentado por cluster** (`/nr-12*`, `/nr-10*`, `/spda*`) — a média do site esconde perda concentrada

### Fase 5 — Enriquecimento de conteúdo (30–60 dias após go-live)

**Não há poda. Nenhuma página é removida, nenhum bloco é cortado.** Decidido em 21/07/2026, e a evidência sustenta:

1. **As páginas funcionam.** Geram 5–6 contatos orgânicos/dia com 74–75% de fechamento. Um site sob ação por scaled content abuse não performa em cauda longa assim. A melhor evidência disponível sobre esse conteúdo é o comportamento observado do próprio site.
2. **A evidência de risco é fraca.** Os "casos de penalização" que circulam são relatos anedóticos reciclados por blogs de ferramentas SEO que vendem a solução. Não há estudo controlado em nenhuma das duas direções. Não se poda ativo que funciona com base em evidência anedótica.
3. **São intenções comerciais distintas.** `/laudo-nr12` (entregável) e `/consultoria-nr12` (processo) atendem buscas diferentes. Consolidar joga fora query comercial válida.
4. **O argumento de performance para cortar o bloco de cidades não se sustenta** — medido em 21/07/2026 sobre `/adequacao-nr12`:

   | | raw | gzip |
   |---|---|---|
   | Página inteira | 790.850 B | 151.779 B |
   | Bloco de cidades (linhas 6584–12292) | 323.241 B | **36.431 B** |
   | Página sem o bloco | 467.609 B | 113.419 B |
   | jQuery + CSS + JS inline (17 `<script>` + 6 `<style>`) | **364.437 B** | — |

   Os assets inline pesam **mais que o bloco de cidades inteiro** e são removíveis sem tocar em conteúdo. Somado ao `Cache-Control: no-store` atual (quem navega por 5 páginas rebaixa o jQuery 5 vezes), o ganho de performance vem daí — não das cidades. Preservar o bloco custa ~36 KB gzip, e menos ainda com cache normal num site estático.

**O que a Fase 5 faz, então: adicionar, não remover.**
- Diferenciar de fato os pares tipo `/laudo-nr12` vs `/consultoria-nr12` — escrever o que realmente distingue laudo de consultoria (escopo, entregável, ART, prazo de validade). Isso resolve a duplicação **por enriquecimento**, que é a orientação correta para intenções distintas.
- Conteúdo original nas páginas-pilar (§7): dados próprios, fontes normativas, autoria com CREA.
- Reativar o blog — último post em 28/03/2025.

**Se e quando houver GSC**, ele serve para *priorizar* onde investir conteúdo (quais páginas têm impressão sem clique = título/description fracos; quais têm posição 11–20 = perto do topo), não para decidir o que apagar.

---

## 12. Pré-requisitos e bloqueadores

### Google Search Console — importante, não bloqueante

Como não haverá poda de conteúdo (§11.5), o GSC deixa de ser pré-requisito para decidir o que remover. Ele continua sendo, porém, **o instrumento que detecta se a migração deu errado** — e detecta cedo, quando ainda dá para reverter.

O que ele entrega e nada mais substitui: picos de "Descoberta – não indexada" e soft 404 nos dias seguintes ao go-live, cobertura de sitemap (enviadas × indexadas), performance segmentada por cluster e crawl stats. Queda brusca no volume de rastreio é o sinal precoce mais confiável de que algo quebrou.

Duas ações, quanto antes:
1. **Pedir acesso ao cliente** (ele é dono do domínio; provavelmente a Ideal Marketing administra a propriedade)
2. **Verificar uma propriedade em paralelo** — o GSC só acumula dados a partir da verificação. Cada semana de atraso é uma semana de baseline perdida, e o histórico não se recupera retroativamente.

Se o acesso não vier, a migração acontece assim mesmo: o crawl completo da Fase 0 é a linha de base de estrutura, e o monitoramento pós-go-live passa a depender de analytics + verificação manual de indexação por amostragem (`site:previsio.com.br/<slug>`). É pior, mas não impede o projeto.

### Bloqueadores de conteúdo do cliente

Repetidos em 4 documentos do projeto e ainda abertos: **CNPJ** · **RT nomeado + CREA** · **autorização de logos de clientes** · **números de case** · **subtítulo oficial da marca** · **endereço POA** (Rua 18 de Novembro, 433/10 — é escritório ativo?).

### Fora do escopo

`ferramentas.`, `cursos.` e `moodle.` são subdomínios independentes e não entram nesta migração — mas o first-touch de atribuição precisa ser compartilhado com eles (§9).

---

## 13. Verificação de go-live

Checklist executável antes de apontar o DNS:

```
[ ] 235/235 URLs respondem 200 no staging — diff automatizado contra o crawl da Fase 0
[ ] title, meta description e H1 idênticos ao crawl original (paridade 1:1)
[ ] Contagem de palavras por página ≥ original
[ ] Zero cadeia de redirect (todo 301 aponta direto ao destino final)
[ ] /blog/* → 301 → /artigos/*  ·  /x/ → 301 → /x
[ ] Slug inexistente retorna 404 real em /blog/, /artigos/, /servicos/
[ ] robots.txt de PRODUÇÃO — sem Disallow: /, sem /*.webp$
[ ] Nenhum noindex remanescente do staging
[ ] Sitemap gerado no build, host correto, sem www.localhost
[ ] Schema validado no Rich Results Test (Organization, LocalBusiness, Breadcrumb, Article)
[ ] URLs de imagem preservadas (/imagens/informacoes/<slug>-0N.webp)
[ ] Core Web Vitals: LCP ≤2,5s · INP ≤200ms · CLS ≤0,1
[ ] GTM disparando generate_lead, click_telefone, abrir_checklist
[ ] Formulário → webhook n8n com os ~25 campos mx_* (teste end-to-end real)
[ ] Sem gtag.js do Ads duplicando conversão
[ ] Rebuild via webhook do WP testado com post real
```

**Pós-go-live:** monitoramento diário por 30 dias no GSC — indexação (picos de "Descoberta – não indexada", "Rastreada – não indexada", soft 404), cobertura de sitemap, performance por cluster e crawl stats (queda brusca de rastreio é o sinal precoce mais confiável).

**Manter os redirects indefinidamente.** Custo ~zero; John Mueller recomenda no mínimo 1 ano.
