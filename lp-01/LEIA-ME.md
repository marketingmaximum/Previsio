# LP-01 — Adequação NR-12 (Previsio Engenharia) · v2

Landing page de campanha (tráfego pago) para captação de leads de **Adequação NR-12 de máquinas**.
Agência Maximum · Cliente: Previsio Engenharia.

## O que mudou da v1 → v2 (correções)
- **Layout profissional** baseado em análise visual real dos concorrentes (ver `../estrategia/06-analise-visual-concorrentes.md`).
- **Hero full-bleed com foto industrial** (chão de fábrica) + overlay navy + headline + 2 CTAs — padrão dos melhores concorrentes (Global, Prisma, Adequada, Weisa).
- **Um único formulário** (corrigido o erro dos 2 forms).
- **Zero emoji** — todos os ícones são SVG da **Freepik API**, em sprite inline (`<use href="#ic-...">`), coloridos por CSS.
- Pattern de fundo leve (SVG inline) nas seções navy.

## Arquivos
- `index.html` — página única (sprite de ícones embutido no topo do body).
- `assets/css/style.css` — estilo (navy #09253C, verde CTA #44B44A, Roboto / Roboto Slab).
- `assets/js/main.js` — máscara de telefone, validação, modal, fallback WhatsApp, eventos GA4/dataLayer.
- `assets/img/hero.jpg` · `hero.webp` · `hero-mobile.jpg` — foto do hero (Freepik), tratada em tom navy.
- `assets/img/logo-previsio*.png` — logos.
- `assets/icons/*.svg` — ícones-fonte (Freepik) usados para gerar o sprite. `_manifest.json` registra os IDs Freepik usados (licenciamento).

## Como abrir
Duplo clique em `index.html` (não precisa de servidor).

## ⚠️ Cache ao republicar (servidor LiteSpeed/Hostinger)
O servidor faz cache agressivo de CSS/JS. **Ao alterar `style.css` ou `main.js`, incremente a versão no `index.html`** (`?v=AAAAMMDD` nos links de `style.css` e `main.js`) — senão o visitante continua recebendo a versão antiga em cache. Versão atual: `?v=20260601`.

## Assets Freepik (licenciamento)
- **Foto do hero:** Freepik ID **24332460** (engenheiro + máquina). 
- **Ícones:** IDs em `assets/icons/_manifest.json`.
- Uso coberto pela licença Freepik do cliente/agência. Conferir necessidade de atribuição conforme o plano.

## Seções (na ordem)
Hero (foto + badge + 2 CTAs) → barra de confiança → dor em 3 frentes → processo em 6 etapas → diferencial (engenharia+automação) → cases antes/depois → **formulário único** (oferta + selos + lead magnet) → FAQ → **CTA final** → rodapé. + WhatsApp flutuante, barra fixa mobile e modal de sucesso.

## Verificação automática (Playwright) — OK
1 formulário · hero carrega · 41 ícones renderizam (0 quebrados) · 15 símbolos no sprite · 0 `<use>` órfão · 0 erro de console.

## ✅ Já resolvido nesta rodada
- **Oferta-âncora** definida e implementada (workflow multiagente, 5 ângulos avaliados; vencedor = ROI/continuidade + enxertos). Oferta = "Orçamento de Adequação NR-12 com diagnóstico técnico de prioridades": o lead recebe conversa com engenheiro + lista das máquinas priorizada por risco (HRN) + proposta de escopo. **Honesta:** sem "ART grátis" (ART entra no escopo contratado), sem claim fabricado. Copy no hero (badge), seção `#form`, nova faixa **CTA final** e mensagem de WhatsApp.
- **Fotos reais** (cases + diferencial) já inseridas; hero ≠ diferencial.
- **Lead magnet secundário** (Checklist NR-12) adicionado na própria seção do form — é um link (retargeting), **não** um segundo `<form>`.
- **GA4 / GTM / Google Ads + integração do form**: agora há um **bloco único de config** no `<head>` (`window.PREVISIO_CFG`) — basta preencher os IDs e o `FORM_ENDPOINT`. As tags são injetadas só se o ID existir. O form faz `POST` JSON ao `FORM_ENDPOINT` (com UTMs/gclid/fbclid) e usa o WhatsApp como fallback. CTAs padronizados para "Solicitar orçamento NR-12".

## ⚠️ PENDÊNCIAS antes de publicar (dependem do cliente — procure `TODO(cliente)` no código)
1. **IDs de medição** — preencher `GA4_ID`, `GTM_ID`, `ADS_ID` em `window.PREVISIO_CFG` (`<head>` do `index.html`). Se usar GTM, colar também o `<noscript>` logo após `<body>`.
2. **Endpoint do formulário** — preencher `FORM_ENDPOINT` (webhook do CRM/FunnelsFlow) no mesmo bloco.
3. **URL do Checklist NR-12** — apontar o botão "Baixar checklist NR-12" para o PDF real (com captura de e-mail/UTM).
4. **Logos de clientes** — só inserir a faixa após autorização de uso de marca.
5. **RT/ART** — se autorizado, citar nome + CREA do engenheiro responsável (rodapé + FAQ).
6. **CNPJ** — inserir no rodapé (`TODO(cliente)` na `ft__bar`).
7. **Claims** — NÃO usar "+20 anos" (inconsistente no site); usamos "desde 2016" e "+1.000 clientes" (a confirmar).
8. **Subtítulo da marca** — confirmar "Meio Ambiente" vs "Automação Industrial".

## Como configurar medição e CRM (1 lugar só)
No `<head>` do `index.html`, edite `window.PREVISIO_CFG`:
```js
GTM_ID: "GTM-XXXXXXX",   // ou deixe "" para não carregar
GA4_ID: "G-XXXXXXXXXX",
ADS_ID: "AW-XXXXXXXXX",
FORM_ENDPOINT: "https://n8n.srv981504.hstgr.cloud/webhook/55a9...",  // ATIVO (n8n)
```
**Webhook ativo:** os dois formulários (orçamento `#lead-form` e o lead gate `#gate-form`) fazem POST JSON para o webhook do **n8n**. CORS já liberado no n8n para `lp.previsio.com.br` (preflight OPTIONS 204). Para trocar de CRM, basta mudar o `FORM_ENDPOINT`.

## Publicado em
- **https://lp.previsio.com.br/** (HostGator do cliente, `~/lp.previsio.com.br`).
- **https://agenciamaximum.com/clientes/previsio/lp-01/** (servidor da Maximum — cópia espelho).
Ao alterar HTML/CSS/JS, subir nos DOIS e incrementar `?v=` nos links de assets (cache LiteSpeed). Versão atual: `?v=20260612c`.

## Checklist de Risco Iminente NR-12 (autoteste)
Oferta secundária (gratuita): um **quiz de 8 perguntas** que abre em modal (botão "Fazer o checklist sem custo" na seção do formulário). Não captura dados — calcula o resultado no navegador e leva ao WhatsApp com mensagem pré-preenchida:
- **Qualquer "Não"/"Não sei"** → resultado **Risco Crítico** + msg "percebi que minha operação possui pontos de risco…".
- **Tudo "Sim"** → **Boa conformidade** + msg de manutenção da conformidade.
Markup: `#ck-modal` no `index.html`; lógica no bloco "Checklist de Risco Iminente" em `main.js`; estilo `.ck__*` no `style.css`. Substituiu o antigo "Baixar checklist NR-12" (PDF), conforme pedido do cliente — o diagnóstico/análise de risco é serviço pago, então o gratuito é o autoteste.

> Há **3 `<form>`** na página: `#lead-form` (orçamento), `#gate-form` (captura antes do WhatsApp) e `#ck-quiz` (autoteste, sem captura).

## Captura de lead antes do WhatsApp (lead gate)
**Todo** clique que levaria ao WhatsApp agora abre primeiro um **modal de captura** (`#gate-modal`: Nome, Empresa, WhatsApp) — só depois segue para o `wa.me`. Vale para: widget flutuante, "Falar no WhatsApp" do hero/CTA-final, "WhatsApp comercial" do rodapé, e o **"Falar com a equipe técnica"** do resultado do checklist (que anexa o resultado do quiz ao lead). Assim, todo contato vira lead rastreável (`gerar_lead` + envio ao `FORM_ENDPOINT`). A mensagem do WhatsApp é montada por contexto (orçamento / checklist-crítico / checklist-ok) já com os dados preenchidos.

> O gate abre uma aba em branco no clique do submit (antes do POST) para não ser bloqueado por popup-blocker, e então redireciona para o WhatsApp.

## Eventos rastreados (dataLayer/gtag)
`gerar_lead` (com `canal`: form_orcamento, whatsapp_hero, whatsapp_float, whatsapp_cta_final, whatsapp_rodape, checklist_critico, checklist_ok) · `abrir_checklist` · `checklist_resultado` (com `risco` e `pontos_de_risco`) · `click_telefone`.
> O payload do lead inclui `canal`, atribuição (UTMs/gclid/fbclid) e, quando vier do checklist, o objeto `checklist` com as 8 respostas e o nível de risco.
