# Plano da LP-02 · Previsio · Checklist de Risco Iminente NR-12

**Fase:** F1 (plano da página), aguardando aprovação. Nenhum HTML foi escrito.
**Card:** Previsio | Nova LP com isca NR-12 (conversão Meta Ads) · KanbanFlow `a8cbc2ae` · prazo 02/10/2026.
**Data deste plano:** 02/10/2026.

---

## 1. Decisão em uma página

- **A página é o checklist.** A pergunta 1 aparece na primeira tela, com três botões (Sim, Não, Não sei). A pessoa começa com um toque, sem digitar. Depois da pergunta 8 ela faz o cadastro e vê o resultado, ponto a ponto, numa página de obrigado.
- **A isca é o "Checklist de Risco Iminente NR-12"**, com as 8 perguntas e os dois textos de resultado que a própria cliente escreveu. Não é diagnóstico: a cliente disse que o diagnóstico real é a apreciação de risco, serviço pago [R4].
- **Quem a página mira:** quem assina (dono, sócio, diretor industrial, gerente de produção). É para quem os conjuntos de anúncio ativos apontam [M] e quem o tráfego trata como lead A/B [T2].
- **Mensagem:** máquina fora da NR-12 pode ser interditada e parar a produção; em 8 pontos você confere a sua operação.
- **Formulário:** nome, empresa, WhatsApp, e-mail e uma pergunta qualificadora (número de máquinas, nas mesmas faixas da LP-01).
- **Conversão:** uma só, na página de obrigado, travada por `event_id`.

Três propostas independentes de funil foram comparadas por três avaliadores (tráfego, persona, conformidade). As três avaliações escolheram este desenho. O funil clássico (cadastro primeiro, material depois) perdeu por pedir o teclado antes de entregar qualquer coisa, que é a ordem da LP-01 em tamanho menor.

**É hipótese, não promessa de taxa.** Com cerca de 106 visitas e 1 conversão [C], não há dado para estimar número. A página nasce com evento por etapa para mostrar onde as pessoas saem.

---

## 2. O que foi lido e o que faltou

| Fonte | Situação |
|---|---|
| Card da demanda | Lido. Restrições: "(sem restrição no momento)". |
| Relatório do card (claude.ai/artifact/XiT2…) | **Sem acesso**: é um documento não compartilhado. Os números saíram direto da conta Meta, pelo Stract [M], e batem com o card (106 visualizações de página e 1 resultado de 15/09 a 29/09). |
| Board Dados › coluna PREVISIO | Lida. **O card Onboarding não tem `dossie-repasse.md`.** "Preferência do cliente": "Trazer um fundo mais humanizado nas artes também". Senhas e acessos do card Dados não foram copiados para nenhum arquivo. |
| Planejamentos do Drive | Lidos os quatro (Análise de Público, Análise de Mercado, SWOT, Planejamento de Quarter). **Não existe PLANEJAMENTO-TRAFEGO**: usei o card de tráfego do Moisés [T1] e a conta Meta [M]. |
| Materiais do cliente | Manual de marca, apresentação da empresa (APT), fotos de obra e criativos vistos. |
| Feedback da cliente sobre a LP-01 | Lido (`alteracoes cliente/Ajustes Landing page Previsio.pptx`). É a fonte que mais muda a página. |
| LP-01 (código e versão no ar) | Lida e auditada. |
| Site da cliente no ar e projeto do site novo | Conferidos em 02/10/2026. |
| NR-12, NR-10, NR-3, NR-28, CLT e Lei 8.213 | Conferidas no texto oficial (gov.br e planalto.gov.br) em 02/10/2026. |
| Reuniões com o cliente (2 transcrições) | Lidas inteiras. São reuniões comerciais: **não trazem nenhuma objeção de prospect**, então o FAQ sai da LP-01 revisada pela cliente e do planejamento. |
| Skills | `lp-cliente` (com 03 e 04), `tracking-pagina` e `frontend-design` lidas. `form-instantaneo-meta` lida e **não aplicada**: o card pede página; o formulário instantâneo é um paliativo do Moisés [T1]. `impeccable` entra na F2. |

### Onde o planejamento e a cliente divergem, vale a cliente

| Planejamento diz | A cliente escreveu | Na página |
|---|---|---|
| Mensagem central "Conformidade NR-12 sem parar a sua produção" [P2] | "Não podemos prometer que não perca pois seria propaganda enganosa. Remover essa frase." [R3] | Só a frase que ela aprovou: "minimizar o impacto", "paradas programadas" [R7]. |
| Isca "diagnóstico de prioridades do parque, gratuito" [P2] | "o diagnóstico real é dado pela análise de risco [...] Esse é um trabalho demorado, que nós vendemos." [R4] | A isca é o checklist. A palavra diagnóstico só aparece como serviço. |
| "Obrigatória desde 02/01/2025" para máquinas usadas [P4] | "É obrigatório desde 2010, podemos deixar sem a data." [R1] | **Sem data.** A conferência da norma mostrou que 02/01/2025 vale só para máquinas usadas do setor de calçados (Portaria MTE 224/2024, art. 1º) [N]. A data está errada em 6 arquivos de planejamento. |
| "+1.000 clientes" travado até validação [P3] | Confirmou "Desde 2016" e "+1.000 clientes" ao revisar o site (23/07/2026) [S] | Entra como "+1.000 clientes", pedindo confirmação expressa para página de anúncio. |

---

## 3. Mensagem principal, persona e o que sustenta

**Persona principal: quem assina.** Dono, sócio, diretor industrial e gerente de produção (a cadeira "Marcelo" do planejamento).

- O card: "Segurança e adequação de máquinas para quem responde por produção e segurança na indústria." [C]
- Os conjuntos ativos miram os cargos CEO, Empresário, Proprietário, Gerente, Dono e Director, mais interesses industriais [M].
- O tráfego: "Dono/sócio, diretor industrial e gerente de produção qualificam. Técnico de segurança do trabalho é influenciador [...]. A copy precisa mirar o decisor." [T2]

**Persona secundária: a técnica de segurança** (a cadeira "Débora"). É quem "baixa checklist", monta a lista de fornecedores e "percebe imprecisão de norma em 10 segundos" [P1]. Para ela a página traz as perguntas no texto técnico da própria cliente, o limite do checklist dito às claras e um resultado que dá para imprimir e levar ao chefe.

**Mensagem principal:** *Máquina fora da NR-12 pode ser interditada e parar a sua produção. Em 8 pontos você confere a sua operação.*

**Trechos do planejamento que sustentam:**

1. "A dor nº 1 é parada de linha, não multa. O medo de multa é abstrato; o de não entregar o pedido é concreto. Toda headline de fundo de funil parte da consequência operacional." [P1, implicação I1]
2. Mensagem que ressoa com quem assina: "Máquina fora da NR-12 pode ser interditada — e parar a sua produção." Tom "direto, orientado a consequência e prazo. Zero tecniquês." [P1, persona 01]
3. "Falta um lead magnet de NR-12. [...] é a maior alavanca de topo de funil não explorada hoje." [P1, I8]
4. "O conteúdo precisa pré-qualificar, porque o comercial é de duas pessoas." [P1, I7]
5. Ângulo para quem chega sem gatilho: "Consequência e espelho. Mostrar o que acontece na segunda-feira se a fiscalização chegar hoje." [P2, ângulo A1]

**Por que não um arquivo para baixar:** quem assina "Não baixa material" e "adia indefinidamente quando o assunto é papel", mas "decide rápido quando entende o risco" [P1]. Por isso a isca é uma resposta na tela sobre a fábrica dele, não um PDF para ler depois. Isto é leitura do planejamento, não resultado medido.

### Casamento com os criativos

O **[IMG] Máquinas Paradas** recebe quase toda a entrega: de 30/09 a 02/10 teve 2.900 das cerca de 3.090 impressões [M]. A arte pergunta "Máquinas antigas travando a sua produção?" sobre um painel elétrico antes e depois. O vídeo **Soluções em NR-10 e NR-12** diz "A fiscalização não avisa quando chega" e fala em multa, interdição e no "ciclo completo: apreciação, projeto, execução e laudo com ART" [M].

| O anúncio diz ou mostra | Onde a página repete |
|---|---|
| "travando a sua produção" | H1: "parar a sua produção" |
| "Máquinas antigas" | Subtítulo: "inclusive as mais antigas da linha" · dobra 2 |
| Painel elétrico antes e depois | Pergunta 1 sobre painéis elétricos (proposta) · dobra 2 com antes e depois real de painel |
| "Adequação NR-12 de Máquinas" (título do link) | H1 com "Máquina" e "NR-12" |
| "multa ou interdição das máquinas" | H1: "pode ser interditada" · dobra 3 |
| "ciclo completo: apreciação, projeto, execução e laudo com ART" | Linha de credenciais · dobra 5 |
| "NR-10 e NR-12" | Caso do painel ("NR-10 e NR-12") · bloco "Também em NR-10" |

**Descompasso que a página não resolve sozinha:** a legenda do Máquinas Paradas vende retrofit com "máxima performance" e termina em "fale com nossos engenheiros". A página não promete desempenho (veto da cliente). Sem uma variação do anúncio com a chamada do checklist, parte dos cliques chega procurando outra coisa. Ver pendência interna 6.

---

## 4. O funil

1. **Anúncio** (celular: de 15/09 a 02/10, 224 dos 225 cliques no link vieram de celular; 183 de Android e 41 de iPhone; 148 do Facebook e 77 do Instagram [M]).
2. **Primeira tela:** logo, chamada, H1, subtítulo e o cartão do checklist com a pergunta 1. Tocar numa resposta já avança. Não há botão "começar".
3. **Perguntas 2 a 8:** no mesmo cartão, uma por vez, com contador e "Voltar". O botão voltar do Android volta uma pergunta, não fecha a página.
4. **Cadastro:** no mesmo cartão. Mostra a contagem, a pergunta qualificadora em botões e os quatro campos. Botão "Ver meu resultado".
5. **Página de obrigado:** o resultado no texto da cliente, os 8 pontos um a um e o botão para falar com a Previsio no WhatsApp. É aqui que a conversão dispara.
6. **Se o envio falhar:** tenta de novo; se falhar outra vez, mostra o resultado mesmo assim e oferece o WhatsApp com os dados na mensagem. A conversão não dispara sem a confirmação do servidor.

O aviso do cadastro é dado antes da primeira resposta ("O cadastro fica para o final, para ver o resultado"), para o formulário não soar como isca trocada.

---

## 5. Mapa de dobras

| # | Dobra | Papel |
|---|---|---|
| 0 | Topo | Só o logo (versão "Segurança do Trabalho", a mesma do anúncio). Sem menu, sem telefone, sem saída. |
| 1 | Hero com o checklist | Promessa e início da conversão na mesma tela. Único formulário da página. Abaixo do cartão, a linha de credenciais. |
| 2 | Antes e depois | Rastro do anúncio: quem tocou num antes e depois de painel encontra um antes e depois real. Prova nº 1 do planejamento [P1, I3]. |
| 3 | O que está em jogo | Fazer quem chega sem gatilho reconhecer o risco pela consequência operacional. Sem data, sem valor de multa. |
| 4 | Como funciona o checklist | Para quem rolou sem tocar: o que vão perguntar, o que recebe, o que isso não é. |
| 5 | Quem está por trás | Motivo para confiar o contato à Previsio: ciclo completo e NR-10. |
| 6 | Perguntas frequentes | Tira as dúvidas que travam o cadastro e dá saída para quem já tem notificação. |
| 7 | Chamada final | Última repetição do CTA, com a pergunta que a cliente escreveu. |
| 8 | Rodapé | Dados reais da empresa (confiança em B2B regulado [P1]), aviso de privacidade, link para agenciamaximum.com. |
| — | Barra fixa no celular | Mantém o CTA à mão. Some enquanto o cartão está na tela. |
| — | Página de obrigado | Entrega o resultado e abre a conversa. |

O que ficou de fora de propósito: barra de 4 números (só há um número com lastro), grade de cartões com ícone, botão flutuante de WhatsApp, segundo formulário, pop-up, PDF, vídeo.

---

## 6. Copy completa, com a fonte de cada linha

A legenda das fontes está na seção 11. Texto entre aspas é o que vai na página.

### Dobra 0 · Topo
- Logo Previsio Engenharia, assinatura "Segurança do Trabalho" (`site/public/img/logo-marca.png`) [S1]. O logo da LP-01 traz "e Meio Ambiente", que a cliente mandou remover.

### Dobra 1 · Hero com o checklist

| Elemento | Texto | Fonte |
|---|---|---|
| Chamada | "Para quem responde por produção e segurança na indústria" | [C] |
| H1 | "Máquina fora da NR-12 pode ser interditada e parar a sua produção. Confira 8 pontos da sua operação." | 1ª frase: H1 da LP-01 revisada pela cliente [L1] e mensagem do planejamento [P1]. Interdição como possibilidade: CLT art. 161 e NR-3 [N]. "8 pontos": as 8 perguntas [R5]. A 2ª frase é nova. |
| Subtítulo | "Responda com Sim, Não ou Não sei. A NR-12 vale para máquinas novas e usadas, inclusive as mais antigas da linha." | Opções [R5]. "vale para máquinas novas e usadas": FAQ da LP-01 revisada, cuja pergunta é "Máquina antiga / usada também precisa ser adequada?" [L3]. |
| Cartão, título | "Checklist de Risco Iminente NR-12" | Nome dado pela cliente [R4] |
| Cartão, aviso | "8 perguntas, sem custo. O cadastro fica para o final, para ver o resultado." | "sem custo" [R4]; o resto descreve o funil |
| Cartão, contador | "Pergunta 1 de 8" | [R5] |
| Pergunta 1 (proposta) | "Painéis elétricos. Os painéis elétricos das máquinas estão trancados, sinalizados e sem nenhuma 'parte viva' (fios descascados/contatos) exposta?" | [R5], literal |
| Botões | "Sim" · "Não" · "Não sei" | [R5] |
| Só na pergunta 1 | "Não sabe responder? Marque Não sei." | [R5]: "Não sei" é resposta prevista |
| Credenciais | "Desde 2016 · +1.000 clientes · Projeto, execução e laudo com ART · Sede em São Leopoldo/RS, atendimento em todo o Brasil" | "Desde 2016" e "+1.000 clientes" [S2]; "Projeto + Execução + Laudo com ART" [P3]; sede e atendimento [A21] [L3] |

**Outras opções de H1, se preferirem:**
- B: "NR-12: confira em 8 perguntas se as suas máquinas passariam em uma fiscalização hoje." (promessa da cliente: "para saber se sua operação passaria em uma fiscalização hoje" [R4])
- C: "Saiba se suas máquinas antigas passariam em uma fiscalização da NR-12 hoje."

Recomendo a primeira. Ela parte da produção parada, que é o que quase todo visitante acabou de ler no anúncio, e promete o que o checklist entrega ("confira 8 pontos"). B e C prometem um veredito ("passariam") que o checklist não dá: pela regra da cliente, um único "Não sei" já resulta em "Risco Crítico".

**Tela pequena:** a pergunta 1 e os três botões têm prioridade. Se não couberem sem rolar, o H1 encurta para "Máquina fora da NR-12 pode ser interditada. Confira 8 pontos da sua operação."

### As 8 perguntas (texto literal da cliente [R5])

Ordem proposta: a dos painéis primeiro, as outras na ordem dela. Ver pendência da cliente 3.

1. **Painéis elétricos.** "Os painéis elétricos das máquinas estão trancados, sinalizados e sem nenhuma 'parte viva' (fios descascados/contatos) exposta?"
2. **Inventário.** "Você possui o Inventário de Máquinas e Equipamentos 100% atualizado?"
3. **Documentação.** "Todas as máquinas da sua operação possuem uma Apreciação/Análise de Risco válida, documentada e assinada por profissional legalmente habilitado?"
4. **Proteções e interfaces.** "As zonas de perigo das máquinas possuem proteções (fixas ou móveis) com sistema de intertravamento corretamente ligado a uma interface de segurança?"
5. **Emergência e rearme.** "As máquinas possuem botões de parada de emergência de fácil acesso e contam com sistema de rearme manual de segurança após paradas?"
6. **Manuais.** "Existem manuais de operação e manutenção, rigorosamente em português, disponíveis e de fácil acesso para todos os operadores?"
7. **Capacitação.** "Seus operadores e equipe de manutenção possuem treinamento específico, periódico e documentado sobre os riscos da NR-12?"
8. **Procedimentos.** "Existe um procedimento formal e prático de bloqueio e etiquetagem (LOTO) para a manutenção segura das máquinas?"

### Tela de cadastro (no cartão, depois da pergunta 8)

| Elemento | Texto | Fonte |
|---|---|---|
| Contagem | "8 de 8 respondidas. Você marcou Não ou Não sei em N pontos." (com 8 Sim: "Você marcou Sim nos 8 pontos.") | Regra do resultado [R5] |
| Chamada | "Informe seus dados para ver o resultado, ponto a ponto." | Funil |
| Pergunta qualificadora | "Quantas máquinas tem a sua operação?" · "1 a 5" · "6 a 20" · "21 a 50" · "Mais de 50" · "Não sei" | Faixas da LP-01 [L4]; regra de prioridade [P1] |
| Campos | "Nome" · "Empresa" · "WhatsApp" · "E-mail" | [C] |
| Botão | "Ver meu resultado" | [L5] |
| Consentimento | "Ao enviar, você concorda que a Previsio Engenharia use esses dados e as suas respostas para mostrar o resultado e falar com você por WhatsApp e e-mail. Aviso de privacidade." | Texto novo; depende da cliente (pendência 10) |
| Erros | "Digite seu nome." · "Digite o nome da empresa." · "Confira o número, com DDD." · "Confira o e-mail." · "Escolha uma opção." | — |
| Falha de envio | "Não conseguimos enviar agora. Seus dados e respostas continuam aqui. Tente de novo." | — |

### Dobra 2 · Antes e depois
- Título: "A NR-12 vale para máquina nova e para máquina usada." [L3]
- Apoio: "Adequamos as duas, inclusive reconstituindo projetos quando não há documentação." [L3] [A9]
- Caso 1, duas fotos lado a lado: painel elétrico antes e depois. Legenda: "Reforma de painel elétrico: NR-10 e NR-12." [L2] [A18]
- Caso 2, duas fotos: coladeira antes e depois (fotos reais enviadas pela cliente [S3]). **Legenda a escrever pela cliente:** a que existe no site novo é da agência.
- Botão: "Fazer o checklist NR-12"
- Sem nome de cliente final, sem número de máquinas, sem prazo.

### Dobra 3 · O que está em jogo
- Título: "Adiar custa caro, em três frentes." [L6]
- Entrada: "A adequação de máquinas à NR-12 é obrigatória, para máquinas novas e usadas. Sem conformidade:" [L6]
- "Risco jurídico. Interdição da máquina ou do setor: sua linha para de um dia para o outro." [L6]
- "Risco financeiro. Multas, indenizações, ações regressivas do INSS e perda de contratos." [L6]. A ação regressiva tem base na Lei 8.213/1991, art. 120, I [N].
- "Risco humano. Cortes, esmagamentos e amputações: acidentes evitáveis." [L6]
- As três frases são as da LP-01, revisadas pela cliente. Mudou só a ordem: a interdição vem primeiro [P1, I1].

### Dobra 4 · Como funciona o checklist
- Título: "Como funciona o checklist"
- "1. Você responde 8 perguntas com Sim, Não ou Não sei."
- "2. Informa nome, empresa, WhatsApp e e-mail."
- "3. Vê o resultado na hora, ponto a ponto: o que está em ordem, o que está em aberto e o que precisa ser verificado."
- Os 8 pontos, só pelo nome que a cliente deu: "Painéis elétricos · Inventário · Documentação · Proteções e interfaces · Emergência e rearme · Manuais · Capacitação · Procedimentos" [R5]
- Limite: "O checklist não substitui a apreciação de risco, que é o diagnóstico técnico de cada máquina e é um serviço contratado. Ele aponta os pontos em aberto." [R4]
- Botão: "Fazer o checklist NR-12"

### Dobra 5 · Quem está por trás
- Título: "Do laudo à obra: projeta, executa e atesta." [L7]
- "Ciclo completo: apreciação de risco, projeto, execução e laudo com ART, com um só fornecedor." [L3] e texto do anúncio em vídeo [M]
- Etapas, só pelo nome: "Apreciação de risco · Inventário de risco · Projeto executivo · Adequação física · Laudo · Documentação" [L8], na ordem que a cliente corrigiu [R2]
- "Também em NR-10: prontuário de instalações elétricas (PIE), relatório técnico de inspeção (RTI), projetos elétricos, SPDA, aterramento, adequação de comandos para extra baixa tensão e reforma de painéis e instalações elétricas." [A10]
- Botão: "Fazer o checklist NR-12"
- Fica de fora: logos e nomes de clientes (em stand-by por decisão da cliente [S4]); "a maioria só emite o laudo" (comparação sem lastro); "O HRN de cada máquina, conforme NR-12 e ISO 13849" (o HRN não aparece na NR-12 [N]); a palavra automação; "atendimento direto com engenheiros" (ver pendência da cliente 9).

### Dobra 6 · Perguntas frequentes

1. **"Preciso me cadastrar para fazer o checklist?"** "Para responder, não. Para ver o resultado, sim: no fim das 8 perguntas você informa nome, empresa, WhatsApp e e-mail."
2. **"O checklist tem custo? Ele substitui a apreciação de risco?"** "Não tem custo e não substitui. O diagnóstico real de cada máquina é dado pela apreciação de risco, e num parque fabril o conjunto das apreciações forma o inventário de risco. Esse trabalho é contratado. O checklist aponta os pontos em aberto." [R4]
3. **"Marquei Não sei em várias perguntas. E agora?"** "Não sei conta como ponto a verificar. O resultado lista esses pontos para você levar a quem responde tecnicamente pela planta: SESMT, técnico de segurança ou gerente de manutenção." [R5] [P1]
4. **"A adequação vai parar a minha produção?"** "Nosso foco é minimizar o impacto. Trabalhamos com paradas programadas e estratégicas, 100% alinhadas com o seu cronograma. Assim, realizamos as intervenções necessárias com segurança e eficiência, sem gerar o caos de uma parada não planejada na sua fábrica." [R7], texto escrito pela cliente
5. **"Máquina antiga ou usada também precisa ser adequada?"** "Sim. A NR-12 vale para máquinas novas e usadas. Adequamos as duas, inclusive reconstituindo projetos quando não há documentação." [L3]
6. **"Vocês só fazem o laudo ou também executam?"** "Ciclo completo: apreciação de risco, projeto, execução e laudo, com um só fornecedor." [L3]
7. **"A Previsio atende a minha região?"** "Todo o Brasil. Sede em São Leopoldo/RS, com projetos no país e no exterior." [L3] [A2]
8. **"O que a Previsio faz com os meus dados?"** "Usa seu nome, empresa, WhatsApp, e-mail e as respostas do checklist para mostrar o resultado e para falar com você sobre a adequação das suas máquinas. Não vende nem cede seus dados. Para corrigir ou apagar, escreva para vendas@previsio.com.br." Texto novo; depende da cliente (pendência 10).
9. **"Recebi notificação ou tenho auditoria marcada. Preciso fazer o checklist?"** "Não. Ligue para (51) 3466-9601 ou escreva para vendas@previsio.com.br." [W1]

As perguntas 4 a 7 são as da LP-01, que a cliente revisou. As reuniões não trazem objeção de prospect. As demais explicam a oferta e o uso dos dados.

### Dobra 7 · Chamada final
- Título: "Sua operação passaria em uma fiscalização hoje?" [R5], literal
- "São 8 perguntas. O resultado aparece assim que você conclui o cadastro."
- Botão: "Fazer o checklist NR-12"

### Dobra 8 · Rodapé
- "Previsio Engenharia · Segurança do Trabalho" [S1]
- "(51) 3466-9601 · vendas@previsio.com.br" [W1]
- "Rua Monteiro Lobato, 149 — Rio Branco, São Leopoldo/RS — CEP 93040-350" [W1]
- "CNPJ 26.244.431/0001-97 · Responsável Técnico: Rodrigo — CREA-RS 113630" [S5]
- "Aviso de privacidade" (pendência 10)
- "Feito por Agência Maximum", com link para agenciamaximum.com

### Barra fixa no celular
- "Fazer o checklist NR-12". Depois da primeira resposta: "Continuar: pergunta N de 8".

### Página de obrigado (resultado)

| Elemento | Texto | Fonte |
|---|---|---|
| Confirmação | "Cadastro recebido, {primeiro nome}. Este é o resultado do seu Checklist de Risco Iminente NR-12." | — |
| Resultado com um ou mais "Não" ou "Não sei" | "Sua empresa está em Risco Crítico. Você respondeu Não ou Não sei em N de 8 pontos. Uma fiscalização do Ministério do Trabalho hoje poderia resultar em multas pesadas ou na interdição das suas máquinas, parando a produção. O próximo passo é um diagnóstico técnico formal." | [R5], na redação que está no ar na LP-01 [L5] |
| Resultado com 8 "Sim" | "Parabéns: bons indícios de conformidade. Você respondeu Sim a todas as perguntas. Lembre-se: a segurança é contínua. Alterou o layout, trocou componentes ou comprou máquina nova? A adequação precisa ser revista." | [R5] [L5] |
| Botão (resultado crítico) | "Quero falar com um Engenheiro da Previsio para regularizar minha situação" | [R5], escrito pela cliente |
| Mensagem do WhatsApp | "Olá! Fiz o Checklist de NR12 no site de vocês e percebi que minha operação possui pontos de risco. Gostaria de falar com a equipe técnica para entender como regularizar minha fábrica." + nome, empresa, faixa de máquinas e total de pontos | [R6] |
| Botão (8 Sim) | "Falar com a equipe técnica da Previsio", com a mensagem de manutenção da conformidade | [L5] |
| Ao lado do botão | "Nosso foco é minimizar o impacto: paradas programadas, alinhadas ao seu cronograma." | [R7] |
| Os 8 pontos | Em cada um, a resposta dada e o estado: "Em ordem, segundo a sua resposta" (Sim) · "Em aberto" (Não) · "A verificar" (Não sei) | Regra [R5] |
| Em cada "Não sei" | "Leve esta pergunta a quem responde tecnicamente pela planta: SESMT, técnico de segurança ou gerente de manutenção." | [P1] |
| Em cada ponto em aberto ou a verificar | "Como a Previsio atua neste ponto:" + a linha da lista de serviços da cliente (tabela abaixo) | [A] |
| Aviso | "Não há ordem de prioridade entre os pontos: priorizar é trabalho da apreciação de risco." | [R2] |
| Limite | "O checklist aponta indícios. O diagnóstico de cada máquina é a apreciação de risco, um serviço contratado." | [R4] |
| Link | "Imprimir ou salvar este resultado" | — |

**"Como a Previsio atua", ponto a ponto** (palavras da apresentação da cliente; a agência não escreve explicação de norma):

| Ponto | Linha | Fonte |
|---|---|---|
| Painéis elétricos | "Reforma de painéis e instalações elétricas" | [A10] |
| Inventário | "Inventário de máquinas com priorizações de risco por HRN" | [A9] |
| Documentação | "Análise de risco indicando a solução técnica" | [A9] |
| Proteções e interfaces | "Projetos elétricos, mecânicos e de software" · "Montagem e instalação de sistemas de segurança" | [A9] |
| Emergência e rearme | "Montagem e instalação de sistemas de segurança" | [A9] |
| Manuais | "Reconstituição de projetos e manuais" | [A9] |
| Capacitação | "Treinamentos de todas as NR's" | [A5] |
| Procedimentos | "Plano de bloqueio de energias perigosas (LOTO)" · "Criação de procedimentos de operação e manutenção" | [A6] [A9] |

**A página de obrigado não promete** que alguém vai ligar, nem prazo de resposta. O planejamento trata quem fez só o checklist como lead morno, que segue na nutrição [P1], e o comercial tem duas pessoas.

**Plano B:** se a cliente não aprovar a tempo as linhas "Como a Previsio atua", o resultado sai só com os pontos e as respostas.

---

## 7. Formulário, campos enviados e eventos

### Campos visíveis (todos obrigatórios)

| Campo | Tipo | Observação |
|---|---|---|
| Quantas máquinas tem a sua operação? | 5 botões de escolha única | "1 a 5", "6 a 20", "21 a 50", "Mais de 50", "Não sei" |
| Nome | texto | preenchimento automático ligado |
| Empresa | texto | |
| WhatsApp | telefone | máscara e validação de DDD |
| E-mail | e-mail | não exige domínio de empresa |

**Por que número de máquinas:** é o exemplo do card ("porte da planta") e o qualificador que o planejamento já usa: "As faixas 21–50 e +50 devem subir de prioridade automaticamente no FunnelsFlow" [P1]. As faixas são as da LP-01, então a regra do CRM não muda. A dor já vem nas 8 respostas.

**Por que não cargo:** o card pede uma pergunta só. Sem cargo, o evento Lead não separa lead A/B de C/D, como o Moisés definiu [T2]. A página manda a faixa de máquinas e o total de pontos como parâmetros, e o filtro pode ser ligado no GTM sem mexer na página. Decisão do Moisés (pendência interna 5).

### Campos enviados sem aparecer na tela

- **Origem:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, `wbraid`, `fbclid`. Capturados na entrada e guardados no navegador por 90 dias (padrão da skill `tracking-pagina`; cobre a sessão e a volta em outro dia).
- **Meta:** `fbp` e `fbc`, para a API de conversões quando entrar.
- **Checklist:** as 8 respostas, `pontos_em_aberto` (0 a 8) e `resultado` (`critico` ou `ok`).
- **Contexto:** `origem` = `lp-02-checklist-nr12`, `oferta`, `variacao`, `event_id`, `lead_score`, URL da página, referenciador, data e hora.
- **Contra robô:** um campo-isca escondido. Preenchido, o envio é descartado sem contar conversão.

Os nomes `nome`, `empresa`, `telefone`, `email`, `maquinas` e `origem` são os que o fluxo atual do n8n já recebe da LP-01.

### Eventos no dataLayer

A página não tem nenhuma tag de fornecedor. O plano de tráfego só nomeia o evento da Meta (`Lead`); os nomes do dataLayer abaixo seguem o padrão da skill `tracking-pagina` e precisam do aval do Moisés.

| Evento | Página | Quando | Nível |
|---|---|---|---|
| `pagina_pronta` | as duas | ao carregar | diagnóstico |
| `checklist_iniciado` | index | primeira resposta | engajamento |
| `checklist_etapa` | index | cada resposta (só o número da pergunta) | diagnóstico |
| `checklist_concluido` | index | oitava resposta | engajamento |
| `abriu_formulario` | index | tela de cadastro aparece | engajamento |
| `form_error` · `form_submit_error` | index | campo inválido · falha de envio | diagnóstico |
| `gerou_lead` | index | o servidor confirma o recebimento | secundário |
| **`inscricao_confirmada`** | obrigado | chegada com lead na sessão, **uma vez por `event_id`** | **principal** → `Lead` da Meta |
| `whatsapp_click` | obrigado | toque no botão | secundário |
| `resultado_impresso` | obrigado | toque em imprimir | engajamento |
| `click_telefone` · `click_email` | index | rodapé e FAQ | secundário |
| `scroll_50` · `scroll_75` · `scroll_90` | index | rolagem | engajamento |

- **Nome, telefone e e-mail nunca entram crus no dataLayer.** Telefone e e-mail vão só como SHA-256, para a correspondência avançada.
- **Por que não reaproveitar `generate_lead`:** o container no ar dispara `Lead`, GA4 e Google Ads nesse nome. A LP-02 usa outros nomes, então as tags antigas não disparam nela e nada conta em dobro.
- **Na versão de aprovação** (clientes.agenciamaximum.com) o GTM não carrega e o formulário não envia: vai direto para o obrigado, sem criar lead.

---

## 8. Rastreamento: o que existe e o que fica como TODO

Pela regra, só entra no código o ID que estiver no card, no plano ou no board Dados. O único que está lá é um pixel, e ele não é o da campanha.

| Item | O que as fontes dizem | No código |
|---|---|---|
| Pixel da Meta | Board Dados: `4002977600011948`. **Todos os conjuntos ativos otimizam em `2064326930859080`** [M], que é o único publicado no container no ar. O pixel do board Dados não está publicado em lugar nenhum. | Nenhum pixel no HTML. O ID fica no container. **TODO: confirmar com o Moisés.** |
| GTM | `GTM-TN7JVR7R` está no ar na LP-01 e no site institucional. Não está no card, no plano nem no board Dados. | **TODO** (constante vazia até a confirmação) |
| GA4 | `G-ND02L73K2W` publicado no container. Fora das três fontes aceitas. | **TODO** |
| Google Ads | `AW-18203369574`, rótulo de lead publicado no container. | **TODO** (só se a LP-02 também receber Google) |
| Endpoint do lead | A LP-01 envia a um webhook do n8n que aceita qualquer origem. O card "Rastreamento do Google" fala em um fluxo novo pelo autmaximum. | **TODO** (vazio) |

Achados da auditoria da LP-01 no ar que mudam a LP-02:

- **A perda entre clique e página não é a hospedagem.** O servidor responde em 78 ms (mediana de 30 medições em https). O PageView do pixel só dispara no fim de uma cadeia em série (HTML, CSS, GTM, script do pixel, configuração) e sai aos 2,4 s em 4G rápido e aos 6,7 s em 4G lento. Quem volta ao feed antes disso é clique sem visualização de página.
- **Dos 913 KB da LP-01, cerca de 560 KB são scripts de medição.** A foto do hero pesa 55 KB.
- **A mesma LP-01 carrega em 74% dos cliques de vídeo e em 59% dos de imagem** [M]. Parte da perda é do tipo de clique (a arte tem um botão desenhado "Leia a legenda"), não da página.
- **O link dos anúncios é `http://`** e o servidor não redireciona para https.
- **Na LP-01 a conversão dispara mesmo quando o envio falha.** Na LP-02 só dispara com a confirmação do servidor.
- **A tag do Google Ads em todas as páginas**, descrita como correção em 18/09, não está publicada. Pode ser a causa da "tag de page view não dispara no Google" da reunião de 30/09.

---

## 9. Desempenho: o que a página precisa bater

| Medida | LP-01 hoje | Meta da LP-02 |
|---|---|---|
| Arquivos próprios na carga inicial | 141 KB em 5 requisições | até 100 KB |
| Maior elemento da primeira tela | foto de banco de imagem | texto (o H1) |
| LCP no celular (laboratório) | 8,1 s de mediana | até 2,5 s [P2] |
| CLS | 0,26 (troca de fontes) | até 0,1 |
| HTML | 69 KB, 56% dele ícones embutidos | sem ícones embutidos |
| Fontes | CSS do Google Fonts bloqueando a pintura | Roboto e Roboto Slab servidas da própria página |

- **Sem foto na primeira tela do celular.** As fotos entram a partir da dobra 2, em WebP no tamanho de uso e com carregamento adiado. No computador, a direção visual da F2 decide se há foto ao lado do cartão.
- **O que a página não controla:** o peso do GTM, do GA4 e do pixel. A recomendação é ajustar o container para o pixel disparar o quanto antes e o GA4 depois do carregamento (F4).
- **Decisão em aberto:** no teste, pôr a base do pixel direto no HTML antecipou o PageView de 6,2 s para 4,3 s em 4G lento. Isso quebra a regra "nenhuma tag de fornecedor no HTML". Mantenho a regra, salvo decisão sua (pendência interna 9).

---

## 10. O que depende de confirmação

### Da cliente (Previsio)

1. **Cadastro obrigatório para ver o resultado.** Hoje o checklist da LP-01 é "Gratuito e sem cadastro". Continua sem custo, mas o resultado passa a exigir cadastro.
2. **H1 e subtítulo.** A segunda frase do H1 é nova.
3. **Ordem das perguntas:** a dos painéis primeiro (é a imagem do anúncio e é pergunta que o dono responde olhando o painel). O texto das perguntas não muda.
4. **Revisão técnica das 8 perguntas.** A conferência com o texto oficial vigente da NR-12 achou diferenças que a engenharia dela precisa decidir se mantém:
   - Pergunta do inventário: o texto vigente pede "relação atualizada das máquinas e equipamentos" (item 12.18.1); "inventário" era o termo da redação de 2010, revogada.
   - Pergunta da documentação: a NR-12 não exige, para todas as máquinas, apreciação de risco "válida, documentada e assinada por profissional legalmente habilitado".
   - Pergunta das proteções: proteção fixa não tem intertravamento (item 12.5.4). Como está, a pergunta reprova quem tem proteção fixa em ordem.
   - Pergunta da capacitação: "periódico" não está na NR-12 (a reciclagem é exigida quando há mudança significativa, item 12.16.8).
   - Pergunta dos procedimentos: "LOTO" e "etiquetagem" não aparecem na NR-12; a norma fala em bloqueio e "cartão ou etiqueta de bloqueio" (item 12.11.3).
5. **Texto do resultado.** Qual redação vale: "resultaria em multas pesadas ou até na interdição" (original) ou "poderia resultar" (no ar na LP-01)? A norma só sustenta a segunda: interdição exige risco grave e iminente (NR-3). E a regra "um Não sei já é Risco Crítico" faz quase todo mundo receber o mesmo resultado.
6. **Linhas "Como a Previsio atua"** em cada ponto do resultado, montadas com a lista de serviços da apresentação dela.
7. **"+1.000 clientes" e "Desde 2016"** em página de anúncio. Ela confirmou os dois para o site.
8. **Fotos.** Autorização para usar as fotos de obra em página de anúncio; o que fazer com marcas de terceiros visíveis (MONTOESTE no painel, MP e perChef na coladeira); legenda da coladeira.
9. **Quem atende o WhatsApp do resultado.** O botão que ela escreveu promete "um Engenheiro da Previsio". Se quem atende é o comercial, o botão muda. Sem confirmação, a página não cita prazo de resposta.
10. **Aviso de privacidade.** O site da Previsio não tem política de privacidade (a URL cai em 404). A página precisa de um texto curto, aprovado por ela, dizendo quem trata os dados e como pedir correção ou exclusão. **Bloqueia a publicação.**
11. **CNPJ e responsável técnico no rodapé** (aprovados para o site: confirmar para a LP).
12. **NR-10:** basta a menção ou ela quer escrever perguntas próprias de NR-10 para uma segunda etapa.
13. **O nome "Risco Iminente".** É próximo do termo legal "grave e iminente risco", que só o auditor-fiscal caracteriza. O nome é dela; vale ela confirmar.

### Interno (Moisés, João, Layla)

1. **Pixel:** confirmar o `2064326930859080` e corrigir o card Dados.
2. **GTM e GA4:** confirmar o reuso do `GTM-TN7JVR7R`, que é compartilhado com a LP-01 e com o site institucional.
3. **Endpoint do lead:** webhook atual do n8n ou fluxo novo do autmaximum; quem recebe; se as UTMs chegam ao CRM. A LP-01 já envia as UTMs no POST, então o defeito relatado em 30/09 tende a estar depois do webhook.
4. **Endereço de produção.** Sugestão: `https://lp.previsio.com.br/checklist-nr12/`, com redirecionamento de http para https no servidor e link https nos anúncios. A LP-01 segue na raiz para o Google.
5. **Lead em todo envio ou só para A/B.**
6. **Anúncios:**
   - uma variação do Máquinas Paradas com a chamada do checklist (a legenda atual vende retrofit e "máxima performance");
   - não apontar para a LP-02 o anúncio "[VID] A adequação à NR-12" enquanto disser "sem comprometer a sua produtividade", frase que a cliente vetou;
   - UTMs: hoje `utm_source` leva o nome do anúncio.
7. **Depois do lead:** conferir se n8n, FunnelsFlow e Brevo estão ligados e quem faz o primeiro contato. A régua do checklist no planejamento traz três itens vetados (a data, "sem parar a linha", "diagnóstico sem compromisso") e precisa ser reescrita antes de ligar.
8. **LP-01:** continua oferecendo o mesmo checklist sem cadastro?
9. **Pixel pelo GTM ou direto no HTML** (seção 9).
10. **Aviso de cookies:** a LP-01 grava cookies de medição ao abrir, sem aviso. A LP-02 herda isso se nada for decidido.
11. **A data 02/01/2025** está errada nos planejamentos e não deve ir para anúncio, e-mail nem post.

---

## 11. Legenda das fontes

| Sigla | Fonte |
|---|---|
| [C] | Card da demanda (KanbanFlow `a8cbc2ae`, 30/09/2026) |
| [T1] | Card "Previsio \| Ajustes Meta Ads pós-diagnóstico" (`e961d20a`, 30/09/2026) |
| [T2] | Card "[PREVISIO] 8 ESTATICOS" do Moisés (`509012fe`, 22/09/2026) |
| [M] | Conta Meta "CA 01 - Previsio", lida pelo Stract em 02/10/2026 |
| [P1] | Análise de Público, jul/2026 (`[02. Planejamento Estratégico]`) |
| [P2] | Planejamento de Quarter Ago–Out 2026 |
| [P3] | Análise SWOT, seção "Munição de credibilidade" |
| [P4] | Análise de Mercado |
| [R1]…[R7] | Feedback da cliente sobre a LP-01, `alteracoes cliente/Ajustes Landing page Previsio.pptx`, slides 1 a 7 |
| [L1] | `lp-01/index.html` linha 232 (H1) |
| [L2] | `lp-01/index.html` linha 341 (legenda do painel) |
| [L3] | `lp-01/index.html` linhas 441 a 445 (FAQ revisado pela cliente) |
| [L4] | `lp-01/index.html` linhas 413 a 421 (faixas de máquinas) |
| [L5] | `lp-01/index.html` linha 541 e `lp-01/assets/js/main.js` linhas 138 a 140 e 323 a 331 |
| [L6] | `lp-01/index.html` linhas 268 a 285 |
| [L7] | `lp-01/index.html` linha 317 |
| [L8] | `lp-01/index.html` linhas 297 a 302 |
| [A2] [A5] [A6] [A9] [A10] [A18] [A21] | `APT - Previsio Engenharia.pdf`, página indicada |
| [S1] | `site/ALTERACOES-CLIENTE-V2.md` linhas 11 e 12 (subtítulo da marca) |
| [S2] | `site/ALTERACOES-CLIENTE-V2.md` linha 21 (números confirmados) |
| [S3] | `site/ALTERACOES-CLIENTE-V2.md` linhas 40 a 44 e `site/public/img/obras/` (fotos de obra) |
| [S4] | `site/ALTERACOES-CLIENTE-V2.md` linhas 30 e 31 (logos em stand-by) |
| [S5] | `site/ALTERACOES-CLIENTE-V2.md` linhas 23 e 24 (CNPJ e responsável técnico) |
| [W1] | www.previsio.com.br, conferido em 02/10/2026 (telefone, e-mail, endereço) |
| [N] | Texto oficial das normas (gov.br e planalto.gov.br), conferido em 02/10/2026 |

**Limite das fontes [S]:** os arquivos de `site/` são a consolidação que a agência fez do feedback da cliente. O documento original dela (23/07/2026) não está no repositório. Por isso os itens 7 e 11 da lista da cliente pedem confirmação expressa.
