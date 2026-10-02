# LP-02 · Previsio · Checklist de Risco Iminente NR-12

Landing page de conversão para Meta Ads, construída a partir de `plano-lp-02-checklist-nr12.md`.
Card: KanbanFlow `a8cbc2ae` (Previsio | Nova LP com isca NR-12).

## Arquivos
- `index.html`: a página. O checklist está na primeira tela (pergunta 1 com Sim / Não / Não sei) e o cadastro aparece no mesmo cartão depois da pergunta 8.
- `obrigado.html`: o resultado ponto a ponto, o botão do WhatsApp e a **conversão** (`inscricao_confirmada`).
- `privacidade.html`: **rascunho** do aviso de privacidade (pendência 10 do plano: bloqueia a publicação).
- `assets/css/style.css`: estilo, mobile first. As fontes Roboto e Roboto Slab são servidas daqui, recortadas para o português.
- `assets/js/main.js`: o checklist, o cadastro, o envio, os eventos e o resultado (um só arquivo para as duas páginas).
- `assets/img/`: as fotos de obra em WebP 640×480 e os logos "Segurança do Trabalho".

## Configuração (um lugar só)
Fica em `window.PREVISIO_CFG`, no `<head>` do `index.html` **e** do `obrigado.html` (também do `privacidade.html`):

| Chave | Hoje | O que falta |
|---|---|---|
| `GTM_ID` | vazio | TODO(Moisés): confirmar o reuso do `GTM-TN7JVR7R` |
| `FORM_ENDPOINT` | vazio | TODO(Moisés/João): webhook do n8n atual ou fluxo novo do autmaximum |
| `WHATSAPP` | `555134669601` | — |
| `HOSTS_APROVACAO` | agenciamaximum.com, localhost | Nesses endereços o GTM não carrega e o formulário não envia: vai direto ao obrigado, sem lead e sem conversão |

Sem `FORM_ENDPOINT`, a página funciona em modo prévia (mesmo comportamento da versão de aprovação).
Ao mudar CSS ou JS, incremente `?v=` nos links das três páginas (cache do servidor).

## Como o envio funciona
1. O formulário faz `POST` JSON ao `FORM_ENDPOINT` com `nome`, `empresa`, `telefone`, `email`, `maquinas` e `origem` (os nomes que o n8n já recebe da LP-01), mais: `oferta`, `variacao`, `event_id`, `lead_score`, `pontos_em_aberto`, `resultado`, `checklist` (as 8 respostas), `fbp`, `fbc`, UTMs, `gclid`, `gbraid`, `wbraid`, `fbclid`, `pagina`, `referrer`, `enviado_em`.
2. As UTMs e os IDs de clique ficam guardados no navegador por 90 dias.
3. Se o envio falhar, a página avisa e deixa tentar de novo. Na segunda falha, mostra o resultado mesmo assim, e a mensagem do WhatsApp leva os dados. **Nesse caso a conversão não dispara.**
4. Campo-isca preenchido: nada é enviado e nada é contado.
5. `lead_score` provisório: faixa de máquinas (1 a 5 = 10, 6 a 20 = 20, 21 a 50 = 30, Mais de 50 = 40, Não sei = 10) + pontos em aberto (0 a 8).

## Eventos no dataLayer
`pagina_pronta` · `checklist_iniciado` · `checklist_etapa` (`pergunta`) · `checklist_concluido` · `abriu_formulario` · `form_error` · `form_submit_error` · `gerou_lead` · **`inscricao_confirmada`** (obrigado, uma vez por `event_id`, com `user_data.em` e `user_data.ph` em SHA-256 → `Lead` da Meta) · `whatsapp_click` · `resultado_impresso` · `click_telefone` · `click_email` · `scroll_50` / `scroll_75` / `scroll_90`.

Nenhum nome, telefone ou e-mail entra cru no dataLayer. A LP-02 não usa `generate_lead`, então as tags da LP-01 não disparam nela. No GTM, falta criar os acionadores para esses nomes (com aval do Moisés).

## Testado (Chromium, Pixel 5 e desktop 1366 px)
- No celular, a pergunta 1 e os três botões cabem na primeira tela.
- O botão voltar do navegador volta uma pergunta.
- Falha simulada do servidor: aviso na 1ª tentativa e envio na 2ª.
- Payload com as UTMs e o `fbc` montado a partir do `fbclid`.
- `inscricao_confirmada` dispara uma vez e não repete ao recarregar o obrigado. Na versão de aprovação não dispara.
- Carga inicial com compressão: cerca de 77 KB (HTML 5 KB, CSS 4,5 KB, JS 9 KB, fontes 42 KB, logo 16 KB). O primeiro elemento da tela é o H1, não uma foto.
- **Falta:** passar no PageSpeed com a URL pública.

## Antes de publicar (do plano, seção 10)
- **Cliente:** cadastro obrigatório para ver o resultado; H1 e subtítulo; ordem das perguntas (painéis primeiro); revisão técnica das 8 perguntas; redação do resultado ("poderia resultar"); linhas "Como a Previsio atua" (para tirar, use `ATUA_ON = false` no `main.js`); "+1.000 clientes" e "Desde 2016"; autorização das fotos e **legenda da coladeira** (`TODO(cliente)` no `index.html`); quem atende o WhatsApp ("um Engenheiro"); **aviso de privacidade**; CNPJ e responsável técnico; NR-10; o nome "Risco Iminente".
- **Interno:** pixel (`2064326930859080` × board Dados), GTM, endpoint, endereço de produção (sugestão: `https://lp.previsio.com.br/checklist-nr12/` com https forçado), variação do anúncio com a chamada do checklist, régua de e-mail, aviso de cookies.
