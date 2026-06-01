# Revisão Completa do Site da Previsio — Conteúdo, SEO e Insumos para a LP-01

> Documento baseado em evidência de crawl (WebFetch + curl/PowerShell + WebSearch `site:previsio.com.br`), executado em 2026-05-31. Onde a evidência é de fonte única, contraditória entre clusters, ou apenas inferida (slug visto em link/sitemap mas a página não foi aberta), isso está marcado explicitamente. Convenção de marcação no mapa: **✓** = página aberta com HTTP 200 verificado; **~** = slug citado em link interno/sitemap, não aberto individualmente.

---

## 1. Retificação do diagnóstico de SEO

### Correção honesta
Um diagnóstico anterior classificou o site como **"SPA / SEO fraco"**. **Isso estava errado.** A evidência do crawl contradiz frontalmente essa afirmação.

Provável origem do erro (duas causas distintas, não fundir):
- Extratores de markdown/render **não enxergam o `<head>`**, então a leitura inicial concluiu "sem meta/sem schema" — falso.
- Em um fetch específico (cluster NR-35) houve **artefato de encoding UTF-16 do próprio analista**, não um defeito do site.

### Evidência de que NÃO é SPA e a base técnica é indexável

| Verificação | Evidência |
|---|---|
| Renderização | **WordPress SSR** — HTML completo entregue pelo servidor (nginx, `Content-Type: text/html; charset=UTF-8`). Páginas servem de ~138 KB (loja) a ~790 KB (serviços). |
| Teste de crawler | Requisição com **User-Agent Googlebot** em `/servicos/nr-35` e `/linha-vida` retornou o MESMO HTML SSR completo (linha-vida: 791.049 bytes, texto visível 386.770 chars). |
| On-page | `<title>` único por rota, meta description presente, H1 com keyword, `<link rel=canonical>` self-referente, `meta robots index,follow` nas páginas testadas. |
| Schema | JSON-LD `BreadcrumbList` presente nas páginas de serviço; subdomínio de loja com schema rico (Organization, WebSite, SearchAction). |
| Indexação | `site:previsio.com.br` retorna dezenas de páginas com title/description próprios (NR-12, NR-10, SPDA, laudos, treinamentos, artigos, ferramentas). |
| Escala | Sitemap com ~150 páginas raiz (uma por keyword) + 41 sob `/servicos/` = **SEO programático clássico / cobertura de cauda longa**. |

### Veredito honesto (sem trocar um exagero por outro)

**A base técnica é indexável e sólida; a estratégia de CONTEÚDO é frágil e está em risco.**

- **O que está certo:** SSR puro, fundamentos on-page presentes, ~200+ páginas indexáveis, malha interna densa, domínio da SERP de marca, subdomínios de utilidade. Existe um ativo orgânico legítimo e amplo.
- **O que é risco real (não mera "higiene"):** o site usa um **padrão programático com páginas near-duplicadas** (diff `/laudo-nr12` vs `/consultoria-nr12` ≈ **41 linhas diferentes em 11.364**, só a keyword trocada), **dezenas de URLs canibalizando a mesma intenção**, **meta descriptions quebradas em escala** e **blocos doorway-like** (keyword × lista de cidades). Esse conjunto pode ser enquadrado pelas políticas do Google como **scaled content abuse / doorway pages** — é o **maior risco estratégico de SEO do site**, não um detalhe de execução.

**Enquadramento final:** não é "SPA/SEO fraco" (errado) nem "SEO robusto com pequenas falhas" (otimista demais). É **base técnica indexável sólida + estratégia de conteúdo programática arriscada e que precisa de saneamento para proteger o investimento**.

> **Nota sobre "~2 anos de SEO":** a duração e o valor pago **não são evidenciados** pelo crawl. A evidência mostra **escala de páginas**, não tempo nem investimento. Tratar "2 anos" como contexto do cliente, não como fato comprovado. *(inferência)*

---

## 2. Mapa do site (todo o conteúdo)

> Reconciliação de contagem: o sitemap.xml tem **218–233 `<loc>`** dependendo do snapshot (e **~370** em dois crawls que usaram um export diferente do Screaming Frog — ver seção 3). Esse total **inclui** home, contato, artigos e páginas de cidade, além das páginas de serviço. Portanto "~200 páginas de serviço" e "218–370 locs no sitemap" não são o mesmo número e não devem ser tratados como iguais.

### 2.1 Hubs principais (domínio `www.previsio.com.br`)

| Hub | Title | Papel | Profundidade |
|---|---|---|---|
| `/` (Home) ✓ | "Segurança do trabalho e automação industrial - Previsio Engenharia" | Institucional guarda-chuva, distribui para NR-12/NR-10/Manutenção/Reformas | **240 links internos**; sem JSON-LD (zero schema) |
| `/quem-somos` ✓ | "Quem Somos - Previsio Engenharia" | Autoridade / E-E-A-T | ~2.000+ palavras; estatísticas; 30+ logos; guia NR-12; 1 JSON-LD |
| `/servicos` ✓ | "Serviços - Previsio Engenharia" | Hub/grid paginado de 50+ serviços | Índice raso por design; ótimas URLs filhas |
| `/informacoes` ✓ | "Informações - Previsio Engenharia" | Diretório de 200+ cards | Thin content (índice); sobrepõe `/mapa-site` e `/servicos` |
| `/artigos` ✓ | "Artigos - Previsio Engenharia" | Índice do blog (15 posts visíveis + paginação) | Posts em `/artigos/<slug>` |
| `/download` ✓ | "Downloads - Previsio Engenharia" | 3 eBooks (eSocial, Ruído, Burnout) | **Sem gate / sem captura de lead; nenhum material de NR-12** |
| `/contato` ✓ | "Contato - Previsio Engenharia" | Conversão; form com campo "Como nos conheceu" incl. **"Links Patrocinados"** | 1 JSON-LD, **não** LocalBusiness; sem mapa/horário |
| `/mapa-site` ✓ | "Mapa do site - Previsio Engenharia" | Sitemap HTML / crawlability | Árvore NR-12/NR-10 + 40+ treinamentos |

**Subdomínios:**
- `ferramentas.previsio.com.br` ✓ — SSR; 3 ferramentas: Grau de Risco (NR-04), Dimensionamento SESMT (NR-04), Dimensionamento CIPA (NR-05). **Nenhuma de NR-12** (lacuna/oportunidade de isca).
- `cursos.previsio.com.br` ✓ — **Loja WooCommerce** (Elementor + Yoast + Site Kit), integrada ao **`moodle.previsio.com.br`**. 10 cursos EAD avulsos, **R$30–R$110**. Funil B2C self-service, distinto do serviço consultivo in-company.

### 2.2 Páginas agrupadas por tema (~150 páginas raiz + 41 `/servicos/`)

**Convenção:** ✓ aberta/200 verificado · ~ citada em link/sitemap, não aberta.

**Cluster NR-12 (núcleo — foco da LP).** Dois templates coexistem:
- *Template "serviço oficial"* (`/servicos/`, copy técnica e crível): `/servicos/adequacao-de-maquinas-nr-12` ✓ · `/servicos/projetos-executivos-e-laudo-de-conformidade-nr-12` ✓ · `/servicos/treinamentos-nr-12` ~ · `/servicos/nr-12` ~ · `/servicos/analises-e-apreciacoes-de-risco-nr-12` ~ · `/servicos/grau-de-risco-nr-12` ~ · `/servicos/travamento-de-energias-perigosas-loto` ~
- *Template "keyword-page" raiz (programático, near-duplicado):* `/adequacao-nr12` ✓ · `/adequacao-maquinas-nr12` ✓ · `/apreciacao-riscos-nr12` ✓ · `/analise-risco-nr-12` ✓ · `/laudo-nr12` ✓ · `/laudo-conformidade-nr12` ✓ · `/laudo-adequacao-nr12` ✓ · `/projeto-nr12` ✓ · `/inventario-maquinas-nr-12` ✓ · `/consultoria-nr12` ✓ · `/assessoria-nr12` ✓ · `/gestao-nr12` ✓ · `/documentacao-nr12` ✓ · `/empresa-adequacao-nr` ✓ · `/apreciacao-riscos-maquinas` ✓ · `/manuais-maquinas-nr12` ✓ · `/consultoria-nr-12` ~ · `/documentos-nr12` ~ · `/inventario-nr-12` ~ · `/inventario-maquinas-equipamentos-nr-12` ~

**Cluster NR-10 / elétrica:** `/servicos/nr-10` ✓ (hub, lista 7 serviços) · `/prontuario-instalacao-eletrica-nr10` ✓ · `/spda` ✓ · `/projeto-spda` ✓ · `/aterramento-eletrico` ✓ · `/nr10-laudo` ✓ · `/analise-conformidade-nr10` ✓ · `/spda-sistema-protecao-descargas-atmosfericas` ✓ · `/pie` ✓ **(BUG de intenção — ver seção 3)** · `/laudo-spda` ~ · `/spda-raios` ~ · `/spda-descarga-atmosferica` ~ · `/instalacao-spda` ~ · `/manutencao-sistemas-spda` ~ · `/estudos-viabilidade-spda` ~ · `/sistema-aterramento` ~ · `/projeto-aterramento` ~ · `/instalacao-aterramento` ~ · `/sistema-de-aterramento-nr10` ~ · `/ordem-servico-nr10` ~

**Cluster SST documental / eSocial:** `/pgr` ✓ · `/laudo-tecnico-condicoes-ambientais-do-trabalho` (LTCAT) ✓ · `/ppp` ✓ · `/programa-conservacao-auditiva-pca` ✓ · `/plano-protecao-respiratoria-ppr` ✓ · `/gerenciamento-riscos-ocupacionais-gro` ✓ · `/e-social-sst` ✓ · `/laudo-insalubridade-periculosidade-lip` ✓ · `/analise-ergonomica-do-trabalho-aet` ✓ · `/laudo-periculosidade` ~ · `/ltip-laudo-tecnico-insalubridade-periculosidade` ~ · `/servicos/laudo-de-tecnico-de-insalubridade-e-periculosidade-ltip` ~ · `/lancamento-esocial-2240` ~ · `/servicos/lancamentos-no-esocial` ~

**Cluster NR-35 / NR-33 / emergência / estruturas:** `/servicos/nr-35` ✓ (hub) · `/prontuario-espaco-confinado-nr33` ✓ · `/linha-vida` ✓ · `/plano-emergencia` ✓ · `/laudos-estruturais` ✓ · `/seguranca-pontes-rolantes` ✓ · `/escadas-plataformas-nr35-nr12` ✓ **(cruza NR-35+NR-12)** · `/servicos/prontuario-nr-35` ~ · `/servicos/sistemas-de-protecao-coletiva-nr-35` ~ · `/treinamento-trabalho-altura-nr35` ~ · `/analise-risco-trabalho-altura` ~ · `/procedimentos-trabalho-altura` ~ · `/adequacao-pontes-rolantes` ~

**Cluster Treinamentos:** `/treinamentos-seguranca-do-trabalho` ✓ (hub) · `/treinamento-nr12` ✓ · `/treinamento-trabalho-altura-nr35` ✓ · `/treinamento-espaco-confinado-nr33` ✓ · `/treinamento-cipa` ✓ · `/treinamento-seguranca-eletricidade-nr10` ✓ · `/treinamento-gestao-de-nr12` ~ · 40+ treinamentos adicionais citados no `/mapa-site` (CIPA, empilhadeira, espaço confinado, altura, produtos químicos) ~

**Blog (`/artigos/<slug>`):** ✓ índice + posts NR-12 (`nr-12-a-importancia-da-adequacao`, `adequacao-de-maquinas-conforme-a-nr-12`, `projeto-executivo-de-nr-12`, `analise-de-risco-segundo-a-nr-12`), PAE, PPR, Burnout, Ruído, eSocial, ambiental.

> **Achado estrutural do blog (pertence ao mapa):** o mesmo post existe em **2–3 rotas** — `/blog/<slug>`, `/artigos/<slug>` e, em ao menos um caso, uma **URL raiz que retorna 302**. Detalhe e correção na seção 3.

> **Nota de completude:** as listas marcadas com "~" e os "40+ treinamentos" são resumos; nem todos os slugs foram abertos individualmente. Este mapa cobre todos os temas, mas não é uma enumeração 1-a-1 das ~200 URLs.

### 2.3 Template padrão das páginas de serviço (programático)

Esqueleto consistente entre dezenas de páginas raiz (muda essencialmente a keyword):

1. **Hero** — H1 = keyword exata (+ um `<h1>{{SHARE}}</h1>` placeholder não-renderizado, **bug**).
2. **"O que é / A importância de [keyword]"**.
3. **"Como funciona / Processo de [keyword]"**.
4. **"Vantagens / Benefícios de [keyword]"** (bullets).
5. **"Por que escolher a Previsio"** (prova social: desde 2016, +1.000 clientes).
6. **Bloco de contato** com CTAs repetidos: *Orçamento por e-mail · Orçamento por WhatsApp · Orçamento pelo Telefone · Clique e ligue · solicite uma cotação*.
7. **"FAÇA UM ORÇAMENTO"** (formulário).
8. **"Páginas Relacionadas"** (cards de serviços correlatos).
9. **"Principais cidades e regiões do Brasil onde a Previsio atende [keyword]"** — lista geográfica gigante (até **27 estados + 600+ cidades**), responsável pela maior parte do peso de HTML (~790 KB).

**Padrão de copy:** institucional, correto, mas genérico e intercambiável; keyword repetida à exaustão (keyword stuffing leve); **sem números próprios, prazos, carga horária, ART, NBRs ou cases**. NAP fixo: *(51) 3466-9601 · vendas@previsio.com.br · Rua Monteiro Lobato, 149 - Rio Branco - São Leopoldo/RS, CEP 93040-350*.

---

## 3. Problemas técnicos de SEO (com evidência) e correções — priorizados

> Reordenado por **risco confirmado × impacto** (não por facilidade). Itens condicionais/não verificados foram rebaixados.

| # | Problema | Evidência | Impacto | Correção |
|---|---|---|---|---|
| **1** | **Canibalização + risco de doorway/scaled-content** | Dezenas de URLs near-duplicadas por intenção: NR-12 (`adequacao-nr12` + `adequacao-maquinas-nr12` + `laudo-nr12` + `laudo-conformidade-nr12` + `laudo-adequacao-nr12` + `consultoria-nr12` + `consultoria-nr-12`…); SPDA (5–9 variantes); aterramento (5); laudos LIP/LTIP. Diff `/laudo-nr12` vs `/consultoria-nr12` = **~41 linhas em 11.364** (só a keyword muda) + bloco keyword×cidade. Cada página tem **canonical self-referente** (nenhuma consolida autoridade). | **Maior risco estratégico.** Diluição de autoridade + páginas competindo entre si + padrão que pode ser enquadrado como **scaled content abuse / doorway pages** nas políticas do Google (risco de ação algorítmica/manual). | Consolidar intenções: eleger as `/servicos/*` como canônicas e apontar as raiz via **canonical cruzado ou 301**; diferenciar de fato as que sobrarem; reduzir/variar os blocos de cidade. |
| **2** | **16 posts do blog como `https://www.localhost/blog/...` no sitemap** | sitemap.xml gerado por `<!--Generated by Screaming Frog SEO Spider 17.2-->` (estático, não nativo do CMS). 16 `<loc>` com host **inexistente** `www.localhost` (falha de DNS confirmada). Esses posts **só** aparecem como localhost no sitemap. | **Médio (matizado).** Os posts **não saíram do índice** — respondem HTTP 200 em `/artigos/` e `/blog/` no domínio real e o Google os indexou via `/artigos/`. Mas o sitemap fica **inútil** para descoberta/recrawl desses 16. | Substituir o sitemap estático por **sitemap dinâmico do CMS** (Yoast/RankMath) com host correto e caminho `/artigos/`. |
| **3** | **Canonicalização confusa do blog (rota tripla)** | Post `/blog/o-que-e-a-nr-12-guia-completo...` (HTTP 200, ~1.050 palavras): **canonical aponta para URL raiz** (`/o-que-e-a-nr-12...`, sem `/blog/`) que **retorna 302**. Mesmo conteúdo acessível em `/blog/`, `/artigos/` e raiz. | Médio. Sinais de canonicalização contraditórios; equity diluída entre 3 URLs. | Unificar tudo em `/artigos/`; **301** de `/blog/` e da raiz para `/artigos/`; canonical apontando para a URL canônica viva (não para a que dá 302). |
| **4** | **Placeholder `{{SHARE}}` como H1 + H1 duplicado** | `<h1>{{SHARE}}</h1>` renderizado cru no HTML de **todas** as páginas de serviço e da home, além do H1 real (`bread__title`). Dois H1 por página, um é lixo de template. | Médio (on-page/acessibilidade). | Corrigir o template para emitir **um único H1** limpo, sem placeholder. |
| **5** | **Meta descriptions auto-geradas e quebradas em escala** | Padrão em quase todas as páginas raiz: *"[Keyword], você veio ao lugar certo! **a é especializada** em [keyword]… Saiba mais."* — falta o sujeito ("a Previsio"), texto truncado. Exceção positiva: `/treinamento-espaco-confinado-nr33` e `/plano-emergencia` têm descrição natural. | Médio (perde CTR na SERP; aparência amadora em escala). | Reescrever metas **únicas e persuasivas** por página (ou corrigir a variável do template). Quick win de alto impacto/baixo esforço. |
| **6** | **`<title>` vazio em post(s) do blog** | Confirmado em **1** post (`/blog/o-que-e-a-nr-12...`): `<title> - Previsio Engenharia</title>`. **Contradição:** outros posts (Projeto Executivo, "A IMPORTÂNCIA DA ADEQUAÇÃO") têm title preenchido. | Médio, mas **intermitente** — não comprovado como sistêmico. | Verificar geração dinâmica de title nos posts; corrigir onde estiver vazio. *(escopo a confirmar)* |
| **7** | **`robots.txt` bloqueia `/*.webp$`** | Confirmado: `Disallow: /*.webp$` (+ `/doutor/`, `/inc/`, `/imagens/informacoes/thumb/`). | **Condicional.** SE o site serve imagens em WebP, perde Google Imagens. Impacto baixo para lead B2B industrial; **não confirmado que serve WebP**. `/doutor/` sugere área admin/staging (ok bloquear, mas conferir). | Remover `Disallow: /*.webp$` **se** WebP for usado e indexável. Conferir o que é `/doutor/`. *(a confirmar uso de WebP)* |
| **8** | **Home sem nenhum schema** | 0 blocos JSON-LD na home (negócio local com endereço físico). | Baixo-médio (rich results / sinais locais perdidos). | Adicionar `Organization` + `WebSite` (com `SearchAction`) na home e `LocalBusiness` na `/contato` (com geo/horário). |
| **9** | **Páginas-índice redundantes (thin)** | `/servicos`, `/informacoes` (200+ cards) e `/mapa-site` cumprem papel sobreposto de índice; corpo próprio raso. | Baixo. | Consolidar função ou diferenciar; garantir valor próprio em `/informacoes`. |

---

## 4. O que a página de NR-12 deles já diz (insumo direto p/ nossa LP)

Material **verbatim** do próprio site, pronto para reaproveitar ou superar.

### 4.1 Definições e escopo (reaproveitar)
- **O que é:** *"A adequação NR-12 consiste na implementação de medidas para que máquinas e equipamentos industriais atendam aos requisitos da Norma Regulamentadora 12."*
- **Diferencial técnico (das `/servicos/*`, crível):** *"Criamos conceitos, projetos e especificações buscando a compatibilidade das normas com as exigências de operação e manutenção de cada processo"* · *"Fornecemos os projetos executivos com assessoria para o cliente realizar as adequações internamente e, após a adequação, emitimos o laudo de conformidade"* · *"Inspeção completa, podendo ser realizada na sede do próprio fabricante."*
- **Escopo / entregáveis (combinando documentação + laudo + manuais + projeto executivo):** Inventário de máquinas → Apreciação/Análise de risco → Projeto executivo (desenhos técnicos, especificações, memorial descritivo) → Adequação física (proteções mecânicas, sensores, parada de emergência, **bloqueio/LOTO**) → Laudo de conformidade → Documentação/Prontuário + Manual de instruções em português.

### 4.2 Dor / urgência (forte para campanha)
- *"Cortes, esmagamentos e outros acidentes podem ser evitados pelas medidas corretivas."*
- *"Ignorar essas obrigações pode levar a multas, notificações, interdições, ações regressivas pelo INSS e, em casos graves, até prisão."*
  > ⚠️ **Compliance de anúncio:** afirmações jurídicas alarmistas ("…até prisão") podem **reprovar nas políticas de Google/Meta Ads** (apelo a medo) e prejudicar aprovação/Quality Score. **Suavizar na criativos do anúncio**; manter o tom mais forte apenas no corpo da LP.
- Framework de 3 fatores (do post "A importância da adequação"): **Humano** (gravidade do acidente) · **Financeiro** (indenizações, paralisações, perda de contratos) · **Jurídico** (multas, interdições, dano à credibilidade).

### 4.3 Benefícios (bullets de conversão)
*Evita multas e penalidades · Reduz riscos de acidentes · Conformidade legal · Protege a integridade dos colaboradores · Reduz custos com manutenções corretivas · Aumenta produtividade e vida útil dos equipamentos.* Argumento financeiro reforçável (do LTCAT/plano-emergência): *"redução de custos decorrentes de acidentes / afastamentos e indenizações."*

### 4.4 Prova social (reaproveitar — COM atenção à inconsistência)
- ✅ **Usar:** *"+1.000 clientes atendidos"* · *"atuação em todo o território nacional e no exterior"* · *"equipe multidisciplinar"* · *"Engenharia de Segurança do Trabalho **e Automação Industrial**"* (diferencial: capacidade de projetar/automatizar proteções).
- ⚠️ **Tempo de experiência — há TRÊS versões conflitantes no próprio site:** "desde 2016" (≈ **9–10 anos** com data atual 2026), "+5 anos" / "mais de cinco anos" (páginas de serviço), e "**mais de 20 anos** em análise de risco" (aparece **uma única vez**, no post `/blog/projeto-executivo-de-nr-12`). **Recomendação:** usar **"desde 2016"** como base. **NÃO usar "+20 anos" sem confirmação do cliente** — é fonte única, contradiz "desde 2016" e o onipresente "+5 anos"; publicá-lo na LP é risco de claim falso/inconsistente.

### 4.5 CTAs e NAP (manter identidade)
CTAs validados: *"Fale com nossos especialistas"*, *"Solicite um orçamento/cotação"*, *"Orçamento por WhatsApp"*. **NAP:** (51) 3466-9601 · vendas@previsio.com.br · Rua Monteiro Lobato, 149 - São Leopoldo/RS - CEP 93040-350. WhatsApp: 555134669601.

### 4.6 Onde a LP SUPERA o orgânico
As páginas orgânicas **não têm** números reais, prazos, cases/depoimentos, FAQ, fotos de proteções instaladas, nem citação objetiva da NR-12 e NBRs. **A LP deve preencher exatamente essas lacunas** — o melhor modelo de qualidade do próprio cliente é o post de Burnout (único com estatística + bloco "Referências").

---

## 5. Como a NOSSA LP-01 se diferencia das páginas orgânicas existentes

O cliente **já ranqueia** organicamente para NR-12 (`/adequacao-nr12`, `/adequacao-maquinas-nr12`, `/laudo-adequacao-nr12`, `/servicos/adequacao-de-maquinas-nr-12`). Criar mais uma página indexável com a mesma keyword **pioraria a canibalização que já é o problema nº 1 do site**.

### 5.1 Princípios da LP-01 (tráfego pago)
1. **Conversão pura, não SEO:** 1 oferta, 1 CTA primário, formulário/WhatsApp **acima da dobra**, sem o "muro" de links internos e lista de cidades das páginas programáticas.
2. **`noindex, follow`** (e **fora do sitemap**).
   - *Por que `follow` e não `nofollow`* (algumas fontes do crawl sugeriram `nofollow`): `follow` não desperdiça o equity dos próprios links da LP e basta o `noindex` para impedir indexação/competição. `nofollow` seria desnecessariamente restritivo. A não-competição vem do `noindex`, não do `nofollow`.
   - **Dois eixos independentes, não confundir:** `noindex` resolve **canibalização (SEO orgânico)**; o **Quality Score (Google Ads)** depende de relevância/landing experience/CTR — **não** de indexação. A LP enxuta e com message-match melhora o Quality Score; o `noindex` protege o orgânico. São objetivos separados.
3. **URL e oferta distintas:** ex. `/lp/adequacao-nr12`, com **ângulo de campanha próprio** (ex.: "Diagnóstico/Orçamento de Adequação NR-12 — sem interdição nem multa"). Não mirar a mesma keyword orgânica.
   > A **oferta-âncora concreta** (diagnóstico gratuito? orçamento em 24h? inventário como porta de entrada?) é **decisão do cliente** — sinalizar como pendência a definir antes do go-live.
4. **Message-match:** headline da LP = promessa do anúncio; rastrear via UTM e alinhar ao campo **"Como nos conheceu → Links Patrocinados"** que já existe no form de contato.
5. **Diferenciar pelo ângulo:** o orgânico trata NR-12 sobretudo via "treinamento" e "escadas/plataformas". A LP foca em **ADEQUAÇÃO DE MÁQUINAS** (apreciação de risco, projeto executivo, laudo de conformidade, LOTO) — intenção transacional de fundo de funil.
6. **Não herdar os bugs do template:** H1 único (sem `{{SHARE}}`), meta description manual, title próprio, base URL correta (nunca localhost), schema só se necessário.

### 5.2 Estrutura sugerida (transforma a canibalização do cliente em vantagem)
Hero (promessa + CTA) → Por que adequar agora (3 fatores: Humano/Financeiro/Jurídico) → **Nosso processo em ETAPAS** (Inventário → Apreciação de risco → Projeto executivo → Adequação física → Laudo → Documentação) — cada etapa que hoje é uma página orgânica solta vira **uma seção de uma jornada única** → Entregáveis → Benefícios → Prova social (+1.000 clientes, desde 2016, logos) → FAQ → Formulário/WhatsApp.

**Lead magnet (preenche lacuna real):** os downloads do site não têm gate nem material de NR-12, e as ferramentas cobrem só NR-04/05. Criar isca **gated de NR-12** (checklist de conformidade / autodiagnóstico de máquinas) para capturar lead.

### 5.3 Relação LP paga × SEO orgânico × funil
- **Orgânico** = topo/meio de funil (informacional, cauda longa) → **permanece indexado, recebe as correções da seção 3**.
- **LP-01 paga** = fundo de funil (transacional, `noindex`) → **converte tráfego pago sem competir** com o orgânico.
- Convivência saudável: o orgânico educa e ranqueia; a LP capitaliza a intenção de compra com oferta e CTA focados.

---

## 6. Tom de voz e identidade observados no site

Para a copy da LP ficar coerente com o que o cliente publica:

- **Registro:** profissional-técnico, formal-acessível. Trata o leitor como gestor/empresa ("sua empresa", "seus colaboradores"). Sem gírias.
- **Posicionamento:** "**empresa gaúcha de Engenharia de Segurança do Trabalho e Automação Industrial**", "equipe multidisciplinar", "grandes projetos em todo território nacional e no exterior". A junção **Segurança + Automação** é o diferencial de marca — usar.
- **Eixos de valor recorrentes:** conformidade legal · prevenção de acidentes · **evitar multas e interdições** · valorizar a produção · projetos personalizados e integrados ao fluxo do cliente · proteção jurídica.
- **Promessa-síntese (verbatim):** *"entregando soluções técnicas valorizando a produção, minimizando custos e evitando multas e interdições."*
- **CTAs da casa:** "Fale com nossos especialistas", "Solicite um orçamento/cotação", "Orçamento por WhatsApp" — manter para consistência de marca, mas na LP **consolidar em 1 CTA primário**.
- **Identidade visual/estrutural:** hero → quem somos → diferenciais → serviços em destaque → CTA → footer (NAP + redes IG/FB/LinkedIn + selos W3C). Reaproveitar como referência de marca, **mas em layout de conversão**.

---

## 7. Pendências / validações (somente evidência do crawl)

**Confirmado por evidência:**
- SSR/WordPress, indexação ampla, ~218–370 `<loc>` no sitemap (snapshots divergem), bug `www.localhost/blog/` (16 URLs), `{{SHARE}}` como H1, meta descriptions quebradas, canibalização NR-12/SPDA/aterramento/laudos, `robots.txt` bloqueando `/*.webp$`, home sem schema, `/contato` sem LocalBusiness, `/pie` = Plano de Emergência (não Prontuário), blog em rota tripla, downloads sem gate, ferramentas só NR-04/05.

**A confirmar / incertezas:**
- **Total exato do sitemap:** snapshots reportam 218, 233 e ~370 `<loc>`. **(a confirmar)** qual é o atual e por que diverge (provável reexport do Screaming Frog em datas diferentes).
- **`<title>` vazio nos posts:** confirmado em **1** post; outros posts têm title. **(a confirmar)** se é sistêmico ou pontual.
- **`/blog/o-que-e-a-nr-12-guia-completo...`** (canonical→raiz com 302): visto **só na auditoria final** (fonte única). **(a confirmar)** em outros posts.
- **Uso de WebP:** `robots.txt` bloqueia `.webp`, mas **não foi confirmado** que o site serve imagens nesse formato. **(a confirmar)** antes de priorizar a correção.
- **`/doutor/` no robots.txt:** finalidade não verificada (possível admin/staging). **(a confirmar)**.
- **`@type` exato dos JSON-LD** nas páginas internas: relatado como `BreadcrumbList`; alguns extratos não parsearam. **(a confirmar)**.
- **"+20 anos em análise de risco":** fonte única (1 post), contradiz "desde 2016" e "+5 anos". **NÃO usar na LP sem confirmação do cliente.**
- **Slugs marcados com "~":** vistos em links internos/sitemap mas **não abertos individualmente** (HTTP 200 não verificado um a um). **(a confirmar)** os que entrarem em uso.
- **Tempo de experiência oficial:** site exibe 5, 9 (≈ desde 2016) e 20 anos. **(a confirmar)** o número oficial com o cliente para padronizar a copy.
