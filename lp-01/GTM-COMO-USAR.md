# Rastreamento de leads — GTM `GTM-TN7JVR7R`

A LP já está instrumentada. O Google Tag Manager (`GTM-TN7JVR7R`) está instalado no `<head>` e o `<noscript>` após o `<body>`. O site **só alimenta o dataLayer**; quem dispara GA4, Meta e Google Ads é o GTM (assim você troca tags sem mexer no site).

## 1. Importar o container
1. GTM → **Admin → Importar contêiner**.
2. Arquivo: `gtm-container-previsio.json`.
3. Espaço de trabalho: **Existente / Default Workspace**.
4. Opção de mesclagem: **Mesclar → Renomear conflitos** (seguro; não apaga o que já existe).
5. Confirmar.

## 2. IDs — todos preenchidos (nada pausado)
- `CONST - GA4 Measurement ID` = **G-ND02L73K2W**
- `CONST - Meta Pixel ID` = **2064326930859080**
- `CONST - Google Ads Conversion ID` = **18203369574**
- `CONST - Ads Label Lead` = **vODvCLve174cEObAhehD** (Lead NR-12, PRIMÁRIA)
- `CONST - Ads Label Telefone` = **gvRtCNi4vb4cEObAhehD** (Clique no telefone, secundária)

**Checklist ("Abriu o checklist")** = conversão **importada do GA4** (sem tag nativa do Ads). A LP manda o evento `abrir_checklist` → GA4 → o Ads importa. Em Google Ads → Conversões, importe o evento `abrir_checklist` do GA4 e deixe como **Secundária**.

> NÃO cole o snippet gtag.js que o Google Ads mostra — o GTM já dispara as conversões. Colar os dois conta dobrado.

## Tags no container (10, todas ativas)
GA4: Configuration · generate_lead · click_telefone · abrir_checklist · Google Ads: Conversion Linker · **Google tag (AW)** · Conversão Lead (primária) · Conversão Telefone · Meta Pixel: Base (PageView) · Lead.

## Alertas do Google Ads no diagnóstico da campanha (18/09/2026)
**"Seu site não tem uma tag do Google"** — as tags de conversão (`awct`) só carregam o `AW-18203369574` na hora de converter; em pageview subia só o GA4, e o Ads procura o `AW-` em toda página. Corrigido no container: tag **Google Ads - Google tag (AW)** (`AW-{{CONST - Google Ads Conversion ID}}`, gatilho *Initialization - All Pages*). Reimportar o JSON (Mesclar → Renomear conflitos) **ou** criar a tag na mão no GTM, e **Enviar**. Em Google Ads → Ferramentas → Tag do Google, o status muda pra "ativa" depois de algumas visitas na LP (pode levar até 24h).

**"Sua meta não tem uma ação de conversão principal"** — é só no Google Ads: Metas → Conversões → Resumo → abrir **Lead NR-12** → Configurações → *Ação de conversão principal para otimização de lances* → **Principal**, e categoria **Enviar formulário de lead** (a mesma meta que a campanha usa em Configurações → Metas). Telefone e Checklist ficam **Secundárias**.

## 2b. Conversões no Google Ads (Primária x Secundária)
Em Google Ads → Conversões, deixe:
- **Lead NR-12** → **Principal** (otimiza os lances)
- **Clique no telefone** → **Secundária**
- **Abriu o checklist** → **Secundária**
(Se "Abriu o checklist" estiver como Principal, mude — senão o Google otimiza para abrir o quiz, não para gerar lead.)

## 3. Publicar o container no GTM (botão **Enviar**).

## 4. Marcar a conversão
- **GA4**: Admin → Eventos → marque `generate_lead` como **evento-chave** (conversão).
- **GA4 (opcional, recomendado)**: Admin → Definições personalizadas → crie dimensões *event-scoped* para `origin_type`, `first_source`, `last_source` → habilita o relatório de atribuição (origem do lead × conversões).
- **Google Ads**: importe a conversão do GA4 **ou** use a tag de conversão própria (já incluída).
- **Meta**: o evento **Lead** vai aparecer no Gerenciador de Eventos; marque como conversão na campanha.

## O que a página envia para o dataLayer
| Evento | Quando | Para quê |
|---|---|---|
| `mx_attribution_ready` | toda visita | dados de origem disponíveis (first/last touch) |
| `generate_lead` | envio de QUALQUER form (orçamento OU lead gate do WhatsApp/checklist) | **conversão** → GA4, Meta (Lead) e Google Ads |
| `gerar_lead` | idem (legado) | compatibilidade |
| `click_telefone` | clique no telefone | micro-conversão opcional |

Parâmetros no `generate_lead`: `canal` (form_orcamento, whatsapp_float, checklist_critico…), `mx_origin_type`, `mx_first_source`, `mx_last_source`, `mx_visitor_id`, `lead_value`.

## Atribuição de origem (no lead que chega no n8n)
O webhook recebe, além dos dados do form, os campos `mx_*`: `mx_origin_type` (pago/ia/social/organico/referral/direto), first/last source e medium, `utm_*`, `mx_gclid`, `mx_fbclid`, `mx_device`, `mx_visitor_id`. Cookies first-party: `mx_visitor_id` (2 anos), `mx_first_touch` (180d, write-once), `mx_last_touch` (30d).

## Testar
- GTM → **Visualizar (Preview)** → abra `https://lp.previsio.com.br/?utm_source=teste&utm_medium=cpc` → envie o form → confirme que `generate_lead` dispara e as tags (GA4/Meta/Ads) ficam *fired*.
- Console do browser: `window.mxLeadTracking` mostra a atribuição capturada.

> Observação: por enquanto a LP está `noindex` (homologação). O rastreamento funciona normalmente mesmo assim.
