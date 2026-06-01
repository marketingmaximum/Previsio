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
FORM_ENDPOINT: "https://seu-webhook-do-crm",  // "" = só WhatsApp
```

## Eventos rastreados (dataLayer/gtag)
`gerar_lead` · `whatsapp_hero` · `whatsapp_float` · `whatsapp_cta_final` · `baixar_checklist` · `click_telefone`.
