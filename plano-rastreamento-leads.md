# Plano de Rastreamento de Leads — Maximum (replicável para qualquer cliente)

> **Objetivo**: saber com precisão **de onde vem cada lead** (orgânico, pago, IA, social, referral, direto), preservar o **first-touch** mesmo quando o lead volta por outro canal para converter, e enriquecer automaticamente o webhook do Elementor Pro Forms com esses dados — sem mudar nenhum formulário existente.

---

## 1. Visão geral da arquitetura

```
┌──────────────────────────────────────────────────────────────┐
│  Navegador do visitante                                      │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ mx-lead-tracking (JS injetado em todas as páginas)     │  │
│  │  • parseia UTM + referrer + click IDs                  │  │
│  │  • classifica origem → 6 buckets                       │  │
│  │  • persiste cookies first-party:                       │  │
│  │      mx_visitor_id  (UUID, 2 anos)                     │  │
│  │      mx_first_touch (180 dias — write-once)            │  │
│  │      mx_last_touch  (30 dias)                          │  │
│  │      mx_journey     (180 dias, até 10 touchpoints)     │  │
│  │      mx_consent     (365 dias)                         │  │
│  │  • injeta inputs hidden em todos os <form.elementor-form>│ │
│  │  • dispara dataLayer.push p/ GA4/GTM                   │  │
│  └────────────────────────────────────────────────────────┘  │
└────────────────────────────┬─────────────────────────────────┘
                             │ submit
                             ▼
┌──────────────────────────────────────────────────────────────┐
│  WordPress (hook: elementor_pro/forms/new_record, prio 5)    │
│  Lê cookies server-side + fields client-side,                │
│  adiciona ~23 campos de atribuição ao $record ANTES          │
│  de qualquer action (webhook, email, CRM, MailChimp...).     │
└────────────────────────────┬─────────────────────────────────┘
                             │ webhook
                             ▼
                    ┌──────────────────┐
                    │   n8n / CRM      │
                    │   recebe payload │
                    │   enriquecido    │
                    └──────────────────┘
```

---

## 2. Regras de classificação de origem (`origin_type`)

Ordem de avaliação (first match wins):

| Bucket | Condição |
|--------|----------|
| `pago` | `gclid`, `fbclid`, `msclkid` presentes **OU** `utm_medium ∈ {cpc, ppc, paid, ads, cpm, display, paid_social}` |
| `ia` | `utm_source` ou referrer contém `chatgpt`, `openai`, `perplexity`, `claude`, `gemini`, `bard`, `copilot`, `you.com`, `phind`, `poe` |
| `social` | referrer/utm_source de `facebook`, `instagram`, `linkedin`, `tiktok`, `youtube`, `x.com/twitter`, `pinterest`, `reddit`, `whatsapp`, `telegram` |
| `organico` | referrer é search engine (`google`, `bing`, `duckduckgo`, `yahoo`, `yandex`, `baidu`, `ecosia`, `brave`) sem click ID pago |
| `referral` | qualquer outro referrer externo ou `utm_source` preenchido |
| `direto` | sem referrer e sem UTM |

**Prioridade final do `origin_type`** (aplicada entre first-touch e last-touch):

```
pago  >  ia  >  social  >  referral  >  organico  >  direto
```

Lógica: damos crédito ao canal que **trouxe** o lead pela primeira vez, exceto quando o first-touch foi `direto` e o last-touch tem sinal melhor — nesse caso usa o last.

### Exemplo do cenário "ChatGPT primeiro, volta por Google, converte"

1. Dia 1 — usuário clica no ChatGPT → `first_touch = {type: ia, source: chatgpt.com}`
2. Dia 5 — volta por Google orgânico → `last_touch = {type: organico, source: google}`, `first_touch` **não muda**
3. Dia 5 — converte no form → webhook recebe:
   - `mx_origin_type = ia` (first-touch preserved)
   - `mx_first_source = chatgpt.com`
   - `mx_last_source = google`
   - `mx_journey_count = 2`
   - `mx_journey = [{type:ia,source:chatgpt.com,...}, {type:organico,source:google,...}]`

---

## 3. Campos entregues no webhook / integrations

Todos os campos abaixo chegam automaticamente em **qualquer action** do Elementor Pro Forms (webhook, email, MailChimp, HubSpot, etc). Prefixo `mx_` evita colisão.

| Campo | Origem | Descrição |
|-------|--------|-----------|
| `mx_origin_type` | calculado | `pago`\|`ia`\|`social`\|`organico`\|`referral`\|`direto` |
| `mx_visitor_id` | cookie | UUID persistente (2 anos) |
| `mx_session_id` | sessionStorage | UUID da sessão atual |
| `mx_first_source` | cookie | Ex: `chatgpt.com`, `google`, `facebook.com` |
| `mx_first_medium` | cookie | Ex: `ai`, `organic`, `cpc`, `social` |
| `mx_first_type` | cookie | Bucket no momento do primeiro toque |
| `mx_first_campaign` | cookie | `utm_campaign` do primeiro toque |
| `mx_first_landing` | cookie | URL de entrada (path + querystring) |
| `mx_first_ts` | cookie | Unix ms do primeiro toque |
| `mx_last_source` | cookie | Source do toque mais recente |
| `mx_last_medium` | cookie | |
| `mx_last_type` | cookie | |
| `mx_last_campaign` | cookie | |
| `mx_last_referrer` | cookie | `document.referrer` do último toque |
| `mx_gclid` | URL | Google Ads click ID |
| `mx_fbclid` | URL | Meta Ads click ID |
| `mx_msclkid` | URL | Bing Ads click ID |
| `mx_journey_count` | cookie | Nº de toques distintos |
| `mx_journey` | cookie | JSON resumido (máx 10 entries, 4000 chars) |
| `mx_landing_session` | sessionStorage | Landing da sessão atual |
| `mx_device` | JS | `mobile` \| `tablet` \| `desktop` |
| `mx_consent_status` | cookie | `granted` \| `denied` \| `pending` |
| `mx_page_url` | JS | URL da página onde converteu |
| `mx_ip` | server | IP do cliente (respeita CF/proxy) |
| `mx_ua` | server | User-agent (500 chars) |
| `mx_submitted_at` | server | ISO-8601 UTC |

---

## 4. Instalação (replicável em qualquer WordPress + Elementor Pro)

### Pré-requisitos
- WordPress com **Elementor Pro Forms** ativo
- Acesso SSH + WP-CLI (ou FTP)
- PHP 7.4+

### Passos

1. **Copiar o arquivo**: `arquivos/mx-lead-tracking.php` → `wp-content/mu-plugins/mx-lead-tracking.php`
   - Se a pasta `mu-plugins/` não existir, crie.
   - Não precisa de header extra, não aparece na lista de plugins (é MU = must-use).

2. **Validar**:
   ```bash
   wp --allow-root --path=/caminho/wp plugin list --status=must-use | grep lead
   # Deve retornar: mx-lead-tracking  must-use  1.0.0
   ```

3. **Limpar cache**:
   ```bash
   wp --allow-root --path=/caminho/wp cache flush
   rm -rf wp-content/cache/wp-rocket/* wp-content/cache/min/* 2>/dev/null
   ```

4. **Smoke test no front**:
   ```bash
   curl -sk 'https://site.com/' | grep -oE 'mx-consent-banner|mxLeadTracking|mx_attribution_ready'
   # Deve retornar as 3 strings
   ```

5. **Smoke test de cookies** — no browser, abra o site com `?utm_source=chatgpt&utm_medium=ai` e rode no console:
   ```js
   window.mxLeadTracking
   // { visitor_id, origin_type:'ia', first:{source:'chatgpt'...}, ... }
   ```

6. **Teste server-side** (logado como admin):
   ```
   GET https://site.com/wp-json/mx-lt/v1/debug
   ```
   Retorna os cookies que o servidor está lendo.

### Deploy via SSH — template Hostinger

```bash
# Local
scp -P PORTA mx-lead-tracking.php USER@IP:/tmp/

# Remoto
ssh -p PORTA USER@IP
php -l /tmp/mx-lead-tracking.php
cp /tmp/mx-lead-tracking.php ~/domains/SITE.com/public_html/wp-content/mu-plugins/
wp --allow-root --path=~/domains/SITE.com/public_html/ cache flush
rm -rf ~/domains/SITE.com/public_html/wp-content/cache/wp-rocket/* 2>/dev/null
```

---

## 5. Configuração no n8n

No workflow que recebe o webhook do Elementor:

1. Nó **Webhook** (POST, JSON).
2. Nó **Set** (ou **Edit Fields**) — mapeie os campos do body:
   - `origin_type  ← {{ $json["form_fields"]["mx_origin_type"] }}`
   - `visitor_id   ← {{ $json["form_fields"]["mx_visitor_id"] }}`
   - `first_source ← {{ $json["form_fields"]["mx_first_source"] }}`
   - ...etc
3. Nó **Switch** para rotear por `origin_type`:
   - `pago` → fila SDR prioritária
   - `ia` → tag especial "IA inbound"
   - `organico` → fila padrão
   - `referral` → tag parceiro
4. Nó **HTTP/CRM** para enviar ao CRM com as tags.

> **Importante**: o Elementor Pro envia os fields aninhados como `form_fields[ID]`. Os nossos campos entram com as chaves `mx_*`. No payload JSON, aparecem dentro do objeto do form.

### Exemplo de payload esperado

```json
{
  "form_id": "abc123",
  "form_name": "Contato",
  "form_fields": {
    "name": "João Silva",
    "email": "joao@empresa.com",
    "telefone": "11999999999",
    "mx_origin_type": "ia",
    "mx_visitor_id": "a1b2c3d4-...",
    "mx_first_source": "chatgpt.com",
    "mx_first_medium": "ai",
    "mx_first_type": "ia",
    "mx_first_campaign": "",
    "mx_first_landing": "/leads-premium-para-empresas-de-software-saas/?utm_source=chatgpt",
    "mx_first_ts": "1745500000000",
    "mx_last_source": "google",
    "mx_last_medium": "organic",
    "mx_last_type": "organico",
    "mx_journey_count": "2",
    "mx_journey": "[{\"ts\":174...,\"type\":\"ia\",\"source\":\"chatgpt.com\",...}]",
    "mx_gclid": "",
    "mx_fbclid": "",
    "mx_device": "desktop",
    "mx_consent_status": "granted",
    "mx_page_url": "https://lp.agenciamaximum.com/leads-premium-para-empresas-de-software-saas/",
    "mx_ip": "189.x.x.x",
    "mx_ua": "Mozilla/5.0 ...",
    "mx_submitted_at": "2026-04-24T18:00:00+00:00"
  }
}
```

---

## 6. Integração com GA4 / GTM

O plugin já dispara dois eventos no `dataLayer`:

### Evento `mx_attribution_ready` (em toda pageview)
```js
{ event: 'mx_attribution_ready',
  mx_origin_type: 'ia',
  mx_visitor_id:  'uuid',
  mx_first_source:'chatgpt.com',
  mx_last_source: 'google' }
```

### Evento `mx_lead_submit` (no submit do form)
```js
{ event: 'mx_lead_submit',
  mx_origin_type: 'ia',
  mx_first_source:'chatgpt.com',
  mx_last_source: 'google',
  mx_visitor_id:  'uuid' }
```

### Setup no GTM

1. **Variáveis** (Data Layer Variable):
   - `DLV - mx_origin_type`
   - `DLV - mx_first_source`
   - `DLV - mx_last_source`
   - `DLV - mx_visitor_id`

2. **Trigger**: Custom Event `mx_lead_submit`

3. **Tag GA4 Event**: `generate_lead`
   - Event parameters:
     - `origin_type` → `{{DLV - mx_origin_type}}`
     - `first_source` → `{{DLV - mx_first_source}}`
     - `last_source` → `{{DLV - mx_last_source}}`
     - `visitor_id` → `{{DLV - mx_visitor_id}}`

4. **GA4 → Admin → Custom definitions**: registre `origin_type`, `first_source`, `last_source` como **event-scoped custom dimensions**.

Depois, no GA4 Explore crie relatório: `origin_type` x `generate_lead count` x `conversion rate` — é o painel de atribuição.

---

## 7. LGPD / Consent

- **Banner** aparece apenas na primeira visita (sem cookie `mx_consent`).
- 2 opções: **Aceitar todos** (grava cookies persistentes) ou **Apenas essenciais** (não persiste; ainda classifica na sessão pra não perder atribuição do lead que converte sem aceitar — fica `consent_status: denied` no webhook, use isso pra auditoria).
- Visual segue tokens de [design-maximum.md](design-maximum.md): fundo `#000`, CTA `#fed30d` + texto `#131312`, fonte `Oswald`, radius `14px`.
- Para **customizar por cliente**, edite `mx_lt_consent_css()` no plugin (paleta + fonte).

---

## 8. Customização por cliente

| O que | Onde |
|-------|------|
| Cores/fonte do banner | função `mx_lt_consent_css()` |
| Texto do banner | função `mx_lt_tracker_js()` — HTML do `#mx-consent-banner` |
| Link da política | HTML do banner (`href="/politica-de-privacidade/"`) |
| Buckets de IA/social | arrays regex no topo do JS (`AI_HOSTS`, `SOCIAL_HOSTS`, etc) |
| Nº máximo de touchpoints | constante `JOURNEY_MAX` no JS (padrão 10) |
| Tempo de vida dos cookies | objeto `COOKIE` no JS |
| Prefixo dos campos | array `$fields_to_add` no PHP (atualmente `mx_*`) |
| Prioridade do origin_type | array `PRIORITY` no JS + `$priority` no PHP |

---

## 9. Troubleshooting

| Sintoma | Causa | Solução |
|---------|-------|---------|
| Campos `mx_*` não chegam no webhook | Cache de página ou plugin não ativo | `wp cache flush` + `rm -rf cache/wp-rocket/*` |
| `origin_type = direto` em 100% dos leads | Consent em `denied` ou cookies bloqueados | Testar em aba anônima com consent granted |
| JS não carrega | Conflito com outro plugin de otimização | Verificar no DevTools → Network se `mx-lead-tracking` está no head |
| Banner quebra layout mobile | Tema com z-index alto | Aumentar `z-index:99999` no CSS |
| Journey vazia | Primeira visita — só registra após ≥1 pageview | Normal, aguardar |
| IP vem `0.0.0.0` | Servidor atrás de proxy sem `X-Forwarded-For` | Adicionar header do proxy à lista `mx_lt_client_ip()` |

### Debug

```bash
# Server-side: ver cookies como o hook enxerga (admin logged in)
curl -b "cookies.txt" 'https://site.com/wp-json/mx-lt/v1/debug'

# Client-side: no console do browser
console.log(window.mxLeadTracking);
console.log(document.cookie.split(';').filter(c=>c.includes('mx_')));
```

### Testes manuais de origem

| URL | origin_type esperado |
|-----|---------------------|
| `?utm_source=chatgpt.com&utm_medium=ai` | `ia` |
| `?gclid=abc123` | `pago` |
| `?fbclid=xyz` | `pago` |
| `?utm_source=linkedin&utm_medium=social` | `social` |
| sem params, referrer google.com | `organico` |
| sem params, sem referrer | `direto` |

---

## 10. Checklist de replicação para novo cliente

- [ ] Site roda **Elementor Pro** ativo
- [ ] Copiar `mx-lead-tracking.php` para `wp-content/mu-plugins/`
- [ ] Rodar `php -l` e `wp plugin list --status=must-use`
- [ ] Flush de cache (WP + WP-Rocket + CDN se houver)
- [ ] Ajustar cores/fonte do banner (função `mx_lt_consent_css`)
- [ ] Ajustar link da política de privacidade
- [ ] Testar URL com `?utm_source=chatgpt` e confirmar `window.mxLeadTracking.origin_type === 'ia'`
- [ ] Fazer um submit real de form e conferir payload no n8n/webhook
- [ ] Criar/atualizar workflow n8n com os campos `mx_*`
- [ ] Configurar custom dimensions no GA4 e tag `generate_lead` no GTM
- [ ] Documentar para o cliente que o banner LGPD foi instalado

---

## 11. Roadmap (futuras versões)

- **v1.1** — Fingerprint server-side (visitor_id persistente via DB p/ casos de cookie limpo)
- **v1.2** — Integração direta com CAPI Meta e Google Ads Enhanced Conversions (server-side)
- **v1.3** — Dashboard interno no wp-admin (tabela `wp_mx_leads` com agregações por origin_type)
- **v1.4** — Webhook interno de sincronização entre múltiplos subdomínios (compartilhar first-touch via `.agenciamaximum.com`)
