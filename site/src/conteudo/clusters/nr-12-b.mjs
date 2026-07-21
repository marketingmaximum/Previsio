/**
 * Conteúdo enriquecido — cluster NR-12 (páginas restantes).
 *
 * Continuação de ./nr-12.mjs. Aqui ficam as páginas de NR-12 que não são os
 * sete pilares já cobertos no primeiro módulo: análise/apreciação de risco em
 * suas variações, consultoria, assessoria, gestão, documentação, laudos,
 * manuais, inventário, grau de risco, medição de tempo de parada, projetos
 * executivos e treinamentos.
 *
 * Cada página recebe texto próprio conforme sua INTENÇÃO — páginas de intenção
 * parecida (consultoria x assessoria x gestão; documentação x documentos) são
 * ancoradas cada uma no seu bodyHtml e no ângulo do seu título, sem duplicar.
 *
 * Fontes: bodyHtml da própria página, nome/objetivo da NR-12 e metodologias que
 * o cliente já usa (HRN, ISO 13849). Sem números, prazos ou cases inventados.
 */

// FAQ do cliente (LP-01, aprovado). Reutilizado nas páginas de NR-12.
const FAQ_ADEQUACAO = [
  {
    q: 'A adequação vai parar a minha produção?',
    a: 'Nosso foco é minimizar o impacto: trabalhamos com paradas programadas, alinhadas ao seu cronograma — intervenções com segurança e eficiência, sem o caos de uma parada não planejada.',
  },
  {
    q: 'Máquina antiga ou usada também precisa ser adequada?',
    a: 'Sim. A NR-12 vale para máquinas novas e usadas, nacionais ou importadas. Adequamos ambas, inclusive reconstituindo projetos quando não há documentação disponível.',
  },
  {
    q: 'Vocês só fazem o laudo ou também executam a adequação?',
    a: 'Ciclo completo: apreciação de risco, projeto executivo, execução das proteções e laudo de conformidade — com um só fornecedor.',
  },
  {
    q: 'O laudo tem respaldo de engenheiro?',
    a: 'Sim, com responsabilidade técnica (ART) do engenheiro responsável — o que dá validade jurídica ao documento perante a fiscalização.',
  },
  {
    q: 'A Previsio atende a minha região?',
    a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional e no exterior.',
  },
];

export default {
  // ------------------------------------------------- ANÁLISE / APRECIAÇÃO
  '/analise-risco-nr-12': {
    resposta:
      'A análise de risco NR-12 é o estudo que identifica os perigos de cada máquina — como cortes e esmagamentos — conforme a Norma Regulamentadora 12. A avaliação classifica os riscos por gravidade e indica as medidas corretivas necessárias, servindo de base para adequar o equipamento e proteger quem o opera.',
    corpo: `
      <h2>O que é a análise de risco NR-12</h2>
      <p>A análise de risco é o estudo que identifica os perigos associados ao uso de máquinas e equipamentos industriais, conforme as diretrizes da NR-12. Ela mapeia as situações que podem causar cortes, esmagamentos e outros acidentes, para que cada risco seja tratado antes de se transformar em lesão.</p>

      <h2>O que a análise avalia</h2>
      <p>A avaliação percorre cada equipamento e considera as condições reais de operação, as possíveis falhas e os pontos de contato entre o trabalhador e as zonas de perigo. Cada perigo é classificado por gravidade — aplicamos a metodologia HRN para pontuar e priorizar os riscos —, o que define a ordem das intervenções.</p>

      <h2>Da análise às medidas corretivas</h2>
      <p>O resultado é um documento que relaciona os perigos encontrados e propõe as medidas corretivas: proteções, dispositivos de segurança e adequações. É a partir dele que a empresa planeja a adequação à NR-12, previne autuações e comprova o cuidado com a segurança dos colaboradores.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/apreciacao-riscos-apr': {
    resposta:
      'A apreciação de riscos é o estudo que identifica e avalia os perigos capazes de afetar a integridade e a saúde dos trabalhadores. Analisa as condições de operação e as possíveis falhas para, então, indicar as medidas preventivas e corretivas necessárias e orientar o atendimento às normas regulamentadoras.',
    corpo: `
      <h2>O que é a apreciação de riscos</h2>
      <p>A apreciação de riscos é o processo que identifica e avalia os perigos presentes em um equipamento ou ambiente de trabalho. Consiste em um estudo minucioso das condições operacionais, das possíveis falhas e dos impactos sobre a segurança, para que os riscos sejam conhecidos antes de causar acidentes.</p>

      <h2>Como a apreciação é conduzida</h2>
      <p>A partir da análise das condições reais de uso, cada perigo é avaliado quanto à probabilidade de ocorrência e à gravidade da lesão. Essa leitura permite priorizar os riscos mais críticos e definir as medidas corretivas e preventivas — de proteções físicas a procedimentos operacionais — que reduzem a exposição do trabalhador.</p>

      <h2>Por que apreciar os riscos</h2>
      <p>A apreciação é a base da conformidade: é ela que orienta as adequações e o atendimento às normas regulamentadoras. Empresas que apreciam seus riscos evitam penalidades, reduzem acidentes e constroem um ambiente de trabalho mais seguro e produtivo.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/apreciacao-riscos-maquinas': {
    resposta:
      'A apreciação de riscos em máquinas é a avaliação detalhada de cada equipamento industrial para identificar falhas, zonas de risco e pontos de esmagamento. Com base nela, são propostas as soluções preventivas — proteções mecânicas e dispositivos de segurança — que adequam a máquina às normas e reduzem o risco de acidentes.',
    corpo: `
      <h2>O que é a apreciação de riscos em máquinas</h2>
      <p>A apreciação de riscos em máquinas é a avaliação detalhada de cada equipamento industrial, feita para identificar os perigos que ele oferece a quem o opera ou mantém. O trabalho localiza falhas, áreas de risco e pontos de esmagamento antes que se tornem causa de acidente.</p>

      <h2>Como a avaliação é feita</h2>
      <p>Cada máquina é analisada individualmente, considerando o modo como é usada e mantida. A partir dos perigos identificados, definem-se as soluções preventivas: proteções mecânicas nas zonas de perigo, dispositivos de segurança e adequações conforme as normas regulamentadoras. Os componentes de comando de segurança são especificados de acordo com a ISO 13849.</p>

      <h2>O que a empresa ganha</h2>
      <p>A apreciação protege efetivamente os colaboradores, reduz custos ligados a acidentes e mantém a operação em conformidade. É também o ponto de partida para o projeto e a execução das proteções de cada equipamento.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // ---------------------------------------- CONSULTORIA / ASSESSORIA / GESTÃO
  '/assessoria-nr12': {
    resposta:
      'A assessoria NR-12 é o apoio técnico que acompanha a empresa na adequação das suas máquinas à Norma Regulamentadora 12. Reúne análise de risco, indicação dos dispositivos de segurança e treinamento dos operadores, orientando cada etapa para que a adequação seja feita com respaldo de engenharia e sem risco de penalidades.',
    corpo: `
      <h2>O que é a assessoria NR-12</h2>
      <p>A assessoria NR-12 é o acompanhamento técnico que orienta a empresa a adequar suas máquinas e equipamentos à Norma Regulamentadora 12. Em vez de apenas entregar um documento, a Previsio apoia o cliente ao longo do processo, do diagnóstico dos riscos até a definição das medidas de segurança.</p>

      <h2>O que a assessoria inclui</h2>
      <ul>
        <li>Análise dos riscos de cada equipamento;</li>
        <li>Indicação dos dispositivos de segurança necessários;</li>
        <li>Orientação para a execução das proteções;</li>
        <li>Treinamento dos operadores que interagem com as máquinas.</li>
      </ul>

      <h2>Assessoria para adequar internamente</h2>
      <p>Uma das modalidades de trabalho da Previsio é fornecer os projetos e a assessoria para que o próprio cliente realize as adequações. Concluída a adequação, emitimos o laudo de conformidade. É o caminho ideal para empresas que têm equipe de manutenção e preferem executar as melhorias com respaldo de engenharia.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/consultoria-nr-12': {
    resposta:
      'A consultoria NR-12 orienta a empresa a adequar máquinas e equipamentos aos requisitos da Norma Regulamentadora 12. Atua de forma preventiva: analisa os riscos existentes, indica os dispositivos de segurança e capacita os operadores, garantindo a conformidade legal e um ambiente de trabalho mais seguro para quem opera as máquinas.',
    corpo: `
      <h2>O que é a consultoria NR-12</h2>
      <p>A consultoria NR-12 é o serviço que orienta a empresa a colocar suas máquinas e equipamentos em conformidade com a Norma Regulamentadora 12. O trabalho é preventivo: identifica os riscos antes que resultem em acidente e define o caminho para adequar cada equipamento.</p>

      <h2>Como a consultoria atua</h2>
      <p>A partir da análise dos riscos presentes, a consultoria indica os dispositivos de segurança necessários e capacita os operadores para o uso seguro dos equipamentos. O objetivo é que a empresa cumpra a norma e mantenha a produção protegida, sem interrupções causadas por autuações ou acidentes.</p>

      <h2>Por que investir em consultoria</h2>
      <p>Adequar-se à NR-12 reduz acidentes de trabalho, evita multas por descumprimento e prolonga a vida útil dos equipamentos. Além da conformidade, a consultoria contribui para a eficiência operacional e reforça o compromisso da empresa com a segurança dos colaboradores.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/consultoria-nr12': {
    resposta:
      'A consultoria NR-12 da Previsio parte de uma análise detalhada dos riscos das máquinas e equipamentos. A equipe técnica realiza inspeções para identificar falhas de segurança e elabora um plano de ação personalizado, definindo quais proteções adequar para garantir a integridade dos trabalhadores e a conformidade com a norma.',
    corpo: `
      <h2>Consultoria NR-12: diagnóstico e plano de ação</h2>
      <p>A consultoria NR-12 começa por um diagnóstico técnico das máquinas e equipamentos da empresa. A equipe da Previsio faz inspeções detalhadas para identificar as falhas de segurança de cada equipamento e mapear onde a norma ainda não é atendida.</p>

      <h2>Um plano de ação sob medida</h2>
      <p>A partir do diagnóstico, elaboramos um plano de ação personalizado, que define as proteções e os dispositivos a adequar em cada máquina e a ordem de prioridade das intervenções. Assim, a empresa sabe exatamente o que precisa ser feito para chegar à conformidade.</p>

      <h2>Resultados da consultoria</h2>
      <p>Com a consultoria, a empresa reduz acidentes de trabalho, aumenta a eficiência dos processos produtivos e se protege de penalidades legais. A adequação à NR-12 melhora as condições de trabalho e cria um ambiente mais seguro para os operadores.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/gestao-nr12': {
    resposta:
      'A gestão de NR-12 é a coordenação contínua de tudo o que mantém as máquinas em conformidade: análise de risco, dispositivos de segurança, treinamento dos operadores e documentação técnica. Em vez de uma ação pontual, é o acompanhamento que garante que o parque de máquinas siga seguro e regular ao longo do tempo.',
    corpo: `
      <h2>O que é a gestão de NR-12</h2>
      <p>A gestão de NR-12 é a coordenação contínua das medidas que mantêm máquinas e equipamentos em conformidade com a norma. Reúne a análise de riscos, a instalação de dispositivos de segurança, o treinamento dos operadores e a elaboração da documentação técnica exigida, tratados como um processo permanente e não como uma ação isolada.</p>

      <h2>O que a gestão envolve</h2>
      <ul>
        <li>Manutenção do inventário e do grau de risco das máquinas;</li>
        <li>Acompanhamento das adequações e dos dispositivos de segurança;</li>
        <li>Treinamento contínuo de quem opera os equipamentos;</li>
        <li>Documentação técnica sempre atualizada.</li>
      </ul>

      <h2>O que a empresa ganha com a gestão</h2>
      <p>Gerir a NR-12 de forma estruturada mantém o ambiente de trabalho seguro, evita multas e sanções e aumenta a eficiência operacional — máquinas em conformidade tendem a ter melhor desempenho e vida útil mais longa. A Previsio dá o suporte para implementar e manter essa gestão.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // --------------------------------------------------- INVENTÁRIO / GRAU DE RISCO
  '/inventario-maquinas-equipamentos-nr-12': {
    resposta:
      'O inventário de máquinas e equipamentos NR-12 é o levantamento que lista e verifica todos os equipamentos da empresa quanto à conformidade com a norma. Registra dados de segurança, dispositivos de proteção e o grau de risco de cada máquina — é a base para priorizar adequações e prevenir acidentes e multas.',
    corpo: `
      <h2>O que é o inventário de máquinas e equipamentos NR-12</h2>
      <p>O inventário é o documento que lista e verifica todas as máquinas e equipamentos de uma empresa quanto à conformidade com a NR-12. Reúne informações sobre segurança, dispositivos de proteção e condições de operação de cada equipamento, formando o retrato completo do parque de máquinas.</p>

      <h2>Como o inventário é elaborado</h2>
      <p>A elaboração envolve a análise de cada máquina, verificando suas características, condições de segurança e o atendimento às exigências da norma. Cada equipamento é classificado por grau de risco, o que permite priorizar as adequações mais urgentes. O resultado é um relatório detalhado, com recomendações para elevar a segurança e o desempenho.</p>

      <h2>Por que fazer o inventário</h2>
      <p>Sem inventário, não há como planejar a adequação de forma eficiente. Ele evita penalidades por descumprimento da norma, identifica melhorias nos processos e mantém a documentação em dia — condição para que a empresa opere com segurança e conformidade.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/inventario-nr-12': {
    resposta:
      'O inventário NR-12 é o levantamento das máquinas e equipamentos usados pela empresa, realizado para verificar a conformidade com a norma. Feito de forma periódica e atualizada, ele identifica riscos operacionais, mantém os dispositivos de segurança em funcionamento e é a base para prevenir acidentes e cumprir a legislação.',
    corpo: `
      <h2>O que é o inventário NR-12</h2>
      <p>O inventário NR-12 é o levantamento das máquinas e equipamentos utilizados nos ambientes de trabalho, feito para verificar a conformidade de cada um com a norma. É a ferramenta que dá à empresa a visão organizada do seu parque de máquinas e do risco associado a cada equipamento.</p>

      <h2>Por que manter o inventário atualizado</h2>
      <p>Realizar o inventário de forma periódica é o que garante o seu valor. Um inventário atualizado permite identificar riscos operacionais, verificar se os dispositivos de segurança seguem em pleno funcionamento e antecipar adequações — reduzindo acidentes e evitando penalidades legais.</p>

      <h2>Como a Previsio conduz o inventário</h2>
      <p>A Previsio elabora e atualiza o inventário NR-12 de acordo com a realidade de cada cliente, classificando as máquinas por grau de risco. Esse trabalho organiza a adequação e serve de base para as etapas seguintes, como a apreciação de risco e o projeto das proteções.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/servicos/grau-de-risco-nr-12': {
    resposta:
      'O grau de risco NR-12 classifica as máquinas em grupos conforme o risco que oferecem. Além do relatório quantitativo em lista, a Previsio entrega um relatório gerencial em gráfico que mostra a situação das máquinas por grupo de risco — a base para gerenciar e priorizar as adequações.',
    corpo: `
      <h2>O que é o grau de risco NR-12</h2>
      <p>O grau de risco é a classificação que organiza as máquinas e equipamentos em grupos conforme o nível de risco que apresentam. Ele nasce do inventário e transforma o levantamento em uma ferramenta de decisão sobre por onde começar a adequação.</p>

      <h2>Relatório quantitativo e gerencial</h2>
      <p>Além de um relatório quantitativo em forma de lista, o inventário possibilita o gerenciamento das adequações, já que classificamos as máquinas e equipamentos em grupos de risco. Junto com a planilha, entregamos um relatório gerencial em forma de gráfico, indicando a situação das máquinas por grupo de risco.</p>

      <h2>Como o grau de risco orienta a adequação</h2>
      <p>Com as máquinas agrupadas por criticidade, a empresa prioriza os equipamentos de maior risco e planeja as adequações de forma racional. O acompanhamento por grupos também permite visualizar o avanço do parque de máquinas rumo à conformidade.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // ------------------------------------------------------- LAUDOS
  '/laudo-adequacao-nr12': {
    resposta:
      'O laudo de adequação NR-12 é o documento que verifica se máquinas e equipamentos estão em conformidade com a Norma Regulamentadora 12. Sua elaboração envolve a análise de risco, a verificação dos dispositivos de proteção e o registro de todo o procedimento, atestando a segurança do equipamento com respaldo de engenharia.',
    corpo: `
      <h2>O que é o laudo de adequação NR-12</h2>
      <p>O laudo de adequação NR-12 é o documento que verifica se as máquinas e equipamentos de uma empresa atendem aos requisitos de segurança da norma. Ele registra as proteções e os dispositivos presentes e conclui sobre a conformidade do equipamento, com respaldo de engenharia.</p>

      <h2>Como o laudo é elaborado</h2>
      <p>A elaboração do laudo envolve a análise de risco do equipamento, a verificação dos dispositivos de proteção e a documentação de todo o procedimento. Por exigir conhecimento técnico específico, o trabalho é conduzido por uma empresa de engenharia de segurança, o que assegura a precisão e a validade do documento.</p>

      <h2>Por que o laudo é importante</h2>
      <p>Além de comprovar a conformidade legal, o laudo evita custos com reparos emergenciais, prolonga a vida útil dos equipamentos e demonstra o compromisso da empresa com a segurança dos colaboradores. Na Previsio, ele é a etapa final de um ciclo que inclui análise de risco, projeto e adequação.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/laudo-nr12': {
    resposta:
      'O laudo NR-12 é o documento que verifica se máquinas e equipamentos industriais atendem aos requisitos da Norma Regulamentadora 12. Ele confirma que as medidas de segurança necessárias foram adotadas, prevenindo acidentes e protegendo os operadores — e comprova a conformidade do equipamento perante a fiscalização.',
    corpo: `
      <h2>O que é o laudo NR-12</h2>
      <p>O laudo NR-12 é o documento que verifica se as máquinas e equipamentos industriais estão de acordo com os requisitos da Norma Regulamentadora 12. Ele atesta que as medidas de segurança necessárias foram tomadas, protegendo a integridade de quem opera os equipamentos.</p>

      <h2>Benefícios do laudo</h2>
      <p>Emitir o laudo NR-12 cumpre as exigências legais, aumenta a eficiência operacional e garante que as máquinas operem de forma segura e conforme as normas vigentes. O documento também contribui para reduzir custos com manutenções corretivas e para a melhoria contínua dos processos industriais.</p>

      <h2>Laudo com respaldo técnico</h2>
      <p>O laudo NR-12 tem validade quando emitido por profissional habilitado. A Previsio, empresa de Engenharia de Segurança do Trabalho, emite o laudo com a responsabilidade técnica que sustenta o documento perante a fiscalização e as auditorias — inclusive para clientes que realizaram a adequação com a nossa assessoria.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/laudos-maquinas-implementos': {
    resposta:
      'Os laudos de máquinas e implementos avaliam as condições operacionais e de segurança de equipamentos industriais, verificando a conformidade com as normas regulamentadoras — em especial a NR-12. Emitidos por engenharia especializada, atestam que máquinas e implementos podem ser utilizados com segurança e ajudam a prevenir acidentes no ambiente de trabalho.',
    corpo: `
      <h2>O que são os laudos de máquinas e implementos</h2>
      <p>Os laudos de máquinas e implementos são documentos que avaliam as condições operacionais e de segurança de equipamentos industriais. Ao verificar a conformidade com as normas regulamentadoras, sobretudo a NR-12, asseguram que máquinas e implementos possam ser operados sem colocar o trabalhador em risco.</p>

      <h2>Como a Previsio elabora os laudos</h2>
      <p>A Previsio reúne experiência em laudos, adequações e projetos para máquinas e implementos industriais. A equipe técnica avalia cada equipamento à luz das normas vigentes e, quando necessário, orienta as adequações — do laudo à implementação das melhorias exigidas.</p>

      <h2>Por que realizar os laudos</h2>
      <p>Manter os laudos de máquinas e implementos em dia comprova a conformidade com as normas, protege a equipe e evita penalidades legais. É também a forma de sustentar, com documentação, a segurança das operações industriais perante clientes e órgãos fiscalizadores.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // ------------------------------------------------- DOCUMENTAÇÃO / MANUAIS
  '/documentacao-nr12': {
    resposta:
      'A documentação NR-12 reúne os registros técnicos que comprovam que máquinas e equipamentos atendem à Norma Regulamentadora 12: análises de risco, laudos, procedimentos operacionais e instruções de uso. Manter essa documentação organizada e atualizada é o que sustenta a conformidade da empresa diante de fiscalizações e auditorias.',
    corpo: `
      <h2>O que é a documentação NR-12</h2>
      <p>A documentação NR-12 é o conjunto de registros técnicos que comprova que as máquinas e equipamentos atendem aos requisitos de segurança da norma. Ela reúne, entre outros, análises de risco, laudos, procedimentos operacionais e instruções de uso de cada equipamento.</p>

      <h2>Por que mantê-la atualizada</h2>
      <p>Mais do que cumprir uma exigência, a documentação em dia protege a empresa: comprova a conformidade perante a fiscalização, facilita auditorias internas e externas e evita multas. Uma documentação bem organizada também apoia a manutenção e a operação segura no dia a dia.</p>

      <h2>Como a Previsio elabora a documentação</h2>
      <p>A Previsio elabora e atualiza a documentação técnica da NR-12 como parte do ciclo de adequação. Reunimos os registros de cada máquina em um conjunto consistente — do laudo às instruções de operação — para que a empresa tenha uma base auditável e sempre disponível.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/documentos-nr12': {
    resposta:
      'Os documentos NR-12 são os registros obrigatórios que comprovam a adequação de máquinas e equipamentos à Norma Regulamentadora 12 — como relatórios de análise de risco, laudos técnicos, inventário de máquinas e instruções de segurança. Mantê-los em dia garante a conformidade legal e facilita auditorias e inspeções.',
    corpo: `
      <h2>Quais são os documentos da NR-12</h2>
      <p>Os documentos NR-12 são os registros que comprovam a adequação de máquinas e equipamentos às exigências da norma. Entre eles estão os relatórios de análise de risco, os laudos técnicos, o inventário de máquinas e as instruções de segurança dos equipamentos.</p>

      <h2>Para que servem</h2>
      <p>Além de atestar a conformidade legal, esses documentos facilitam auditorias e inspeções, apoiam a gestão da segurança e ajudam a reduzir os riscos operacionais. Com a documentação em ordem, a empresa demonstra de forma objetiva o cuidado com a segurança dos trabalhadores.</p>

      <h2>Documentação com respaldo técnico</h2>
      <p>A Previsio elabora os documentos da NR-12 com respaldo de engenharia, integrando-os ao processo de adequação. Cada registro — do inventário ao laudo — é produzido para resistir à análise da fiscalização e das auditorias de clientes.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/servicos/documentacao-nr-12': {
    resposta:
      'A documentação NR-12 da Previsio reconstitui manuais de máquinas e equipamentos e projetos elétricos, além de criar e implementar procedimentos técnico-operacionais conforme as recomendações normativas. É o serviço que devolve ao equipamento a documentação exigida pela norma, mesmo quando não existe registro anterior disponível.',
    corpo: `
      <h2>Documentação e reconstituição de registros</h2>
      <p>A documentação NR-12 reúne os registros técnicos que a norma exige para cada máquina e equipamento. Quando esses registros não existem, a Previsio os reconstitui: recompomos manuais de máquinas e equipamentos e projetos elétricos a partir da análise do próprio equipamento.</p>

      <h2>Procedimentos técnico-operacionais</h2>
      <p>Além de reconstituir os documentos, criamos e implementamos procedimentos técnico-operacionais conforme as recomendações normativas. São eles que orientam a operação e a manutenção seguras de cada máquina e padronizam a forma de trabalhar com o equipamento.</p>

      <h2>Documentação para máquinas sem histórico</h2>
      <p>Muitos equipamentos antigos ou importados chegam sem qualquer documentação. A reconstituição resolve essa lacuna e coloca a empresa em conformidade, entregando um conjunto de registros consistente e pronto para auditorias e fiscalizações.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/manuais-maquinas-nr12': {
    resposta:
      'Os manuais de máquinas NR-12 são os documentos que orientam o uso seguro de cada equipamento, conforme a Norma Regulamentadora 12. Trazem instruções de operação, manutenção e medidas de segurança — inclusive procedimentos de emergência — para prevenir acidentes e manter a máquina em conformidade com a norma.',
    corpo: `
      <h2>O que são os manuais de máquinas NR-12</h2>
      <p>Os manuais de máquinas NR-12 são documentos essenciais que orientam o uso seguro de máquinas e equipamentos, seguindo as determinações da norma. Reúnem instruções detalhadas sobre operação, manutenção e as medidas de segurança necessárias para prevenir acidentes.</p>

      <h2>Por que o manual é importante</h2>
      <p>Ao seguir o manual, o trabalhador tem acesso a informações determinantes para a sua segurança: procedimentos de emergência, manuseio correto do equipamento e medidas de prevenção. O manual em português também é parte da conformidade com a NR-12, e a sua ausência pode expor a empresa a multas.</p>

      <h2>Reconstituição de manuais</h2>
      <p>Quando o equipamento não tem manual — situação comum em máquinas antigas ou importadas — a Previsio reconstitui o documento a partir da análise da própria máquina. Assim, cada equipamento passa a contar com as instruções de operação e segurança exigidas pela norma.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // -------------------------------------------- SERVIÇOS (adequação / análises)
  '/servicos/adequacao-de-maquinas-nr-12': {
    resposta:
      'A adequação de máquinas NR-12 torna máquinas e equipamentos seguros para uso, conforme as exigências das normas regulamentadoras. A Previsio cria conceitos, projetos e especificações que compatibilizam a norma com as necessidades de operação e manutenção de cada processo, instalando as proteções sem comprometer a produtividade.',
    corpo: `
      <h2>Adequação de máquinas conforme a NR-12</h2>
      <p>Realizamos adequações em máquinas e equipamentos para garantir a sua utilização de forma segura, conforme as exigências das normas regulamentadoras 10 e 12. O trabalho parte da avaliação de cada equipamento e chega à instalação das proteções que eliminam ou reduzem os riscos de acidente.</p>

      <h2>Projeto compatível com a operação</h2>
      <p>Criamos conceitos, projetos e especificações buscando a compatibilidade das normas com as exigências de operação e manutenção de cada processo. O objetivo é uma proteção que atende à norma sem prejudicar a produtividade — e que o operador não tenha motivo para burlar.</p>

      <h2>Do projeto à execução</h2>
      <p>A adequação abrange proteções mecânicas, intertravamentos, parada de emergência e bloqueio de energias, com componentes de comando de segurança especificados conforme a ISO 13849. A Previsio conduz o trabalho do projeto à execução, encerrando com o laudo de conformidade.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/servicos/analises-e-apreciacoes-de-risco-nr-12': {
    resposta:
      'As análises e apreciações de risco NR-12 avaliam cada equipamento considerando o seu uso real. Estudam as interações entre pessoas, máquinas e o ambiente de trabalho para identificar os perigos e sugerir as medidas que mitigam os riscos encontrados — a base técnica para todas as adequações posteriores.',
    corpo: `
      <h2>O que são as análises e apreciações de risco NR-12</h2>
      <p>As análises e apreciações de risco são o estudo que identifica os perigos de cada máquina e equipamento. São elaboradas considerando a utilização real de cada equipamento e ambiente, para que as conclusões reflitam o que de fato acontece na operação.</p>

      <h2>A interação entre pessoas, máquinas e ambiente</h2>
      <p>Estudamos as interações entre as pessoas, as máquinas e o próprio local de trabalho, de forma a propor uma solução segura e coerente. Essa leitura ampla evita proteções que atrapalham a operação e garante que as medidas façam sentido no dia a dia da planta.</p>

      <h2>Medidas para mitigar os riscos</h2>
      <p>O objetivo do documento é sugerir as medidas que mitigam os riscos encontrados. A partir dele, a Previsio prioriza as intervenções — com apoio da metodologia HRN para pontuar os riscos — e segue para o projeto e a adequação de cada equipamento.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/servicos/medicao-de-tempo-de-parada-em-maquinas-nr12': {
    resposta:
      'A medição de tempo de parada em máquinas determina quanto tempo um equipamento leva para parar após o acionamento da segurança. A Previsio possui equipamento próprio para medir esse tempo em máquinas de movimentação linear ou rotativa, o que permite dimensionar corretamente o distanciamento de cortinas de luz e sistemas ópticos, conforme a NR-12.',
    corpo: `
      <h2>O que é a medição de tempo de parada</h2>
      <p>A medição de tempo de parada determina quanto tempo uma máquina leva para interromper o movimento depois que um dispositivo de segurança é acionado. Esse dado é essencial para posicionar corretamente as proteções que dependem de distância para funcionar.</p>

      <h2>Equipamento próprio para a medição</h2>
      <p>A Previsio possui equipamento próprio para a medição do tempo de parada em máquinas com movimentação linear ou rotativa. Com a medição real de cada equipamento, evitam-se estimativas e garante-se que a proteção corresponda ao comportamento efetivo da máquina.</p>

      <h2>Dimensionamento de cortinas de luz e sistemas ópticos</h2>
      <p>O objetivo da medição é dimensionar corretamente o distanciamento de cortinas de luz e sistemas ópticos, conforme a NR-12. Se a distância for insuficiente, a máquina pode não parar a tempo; a medição assegura que o sistema óptico proteja a zona de perigo de forma efetiva.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/servicos/projetos-executivos-e-laudo-de-conformidade-nr-12': {
    resposta:
      'Nesta modalidade, a Previsio fornece os projetos executivos das proteções junto com a assessoria para que o próprio cliente realize as adequações. Concluída a adequação, emitimos o laudo de conformidade após uma inspeção completa dos equipamentos — que pode ser feita inclusive na sede do fabricante da máquina.',
    corpo: `
      <h2>Projetos executivos com assessoria</h2>
      <p>Uma das modalidades de trabalho da Previsio é fornecer os projetos executivos das proteções junto com uma assessoria para que o próprio cliente realize as adequações internamente. É o caminho ideal para empresas que têm equipe de manutenção e preferem executar as melhorias com orientação de engenharia.</p>

      <h2>Laudo de conformidade após a adequação</h2>
      <p>Concluída a adequação, emitimos o laudo de conformidade. Antes disso, realizamos a inspeção completa nos equipamentos para aferir o atendimento das normas — verificando se as proteções, os intertravamentos e os demais dispositivos foram implementados corretamente.</p>

      <h2>Inspeção inclusive no fabricante</h2>
      <p>A inspeção que precede o laudo pode ser realizada na sede do próprio fabricante do equipamento. Assim, é possível atestar a conformidade da máquina antes mesmo da entrega, evitando retrabalho e garantindo que ela chegue à planta já de acordo com a NR-12.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // ------------------------------------------------------- TREINAMENTOS
  '/servicos/treinamentos-nr-12': {
    resposta:
      'Os treinamentos NR-12 capacitam os trabalhadores que interagem com máquinas e equipamentos a operá-los com segurança. A Previsio realiza os treinamentos online ou in company e também capacita instrutores internos de NR-12. A realização do treinamento tem obrigatoriedade de lançamento no sistema do eSocial.',
    corpo: `
      <h2>Treinamentos NR-12</h2>
      <p>Desenvolvemos treinamentos para os trabalhadores que interagem de alguma forma com as máquinas e equipamentos. O objetivo é que cada operador conheça os riscos do equipamento e as práticas seguras de operação, reduzindo a chance de acidentes.</p>

      <h2>Online, in company ou formação de instrutores</h2>
      <p>Os treinamentos podem ser realizados online ou in company, conforme a necessidade da empresa. A Previsio também capacita instrutores internos de NR-12, o que permite ao cliente manter a formação da equipe de forma contínua e autônoma.</p>

      <h2>Registro no eSocial</h2>
      <p>O treinamento de NR-12 tem obrigatoriedade de lançamento no sistema do eSocial. A Previsio fornece a documentação que comprova a capacitação, para que a empresa cumpra essa exigência e mantenha os registros em ordem perante a fiscalização.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/treinamento-gestao-nr12': {
    resposta:
      'O treinamento de gestão de NR-12 capacita os profissionais responsáveis pela segurança em máquinas a coordenar o atendimento à norma. Prepara a equipe para identificar riscos, adotar medidas de prevenção e conduzir as obrigações da NR-12, garantindo que a empresa mantenha suas máquinas seguras e em conformidade legal.',
    corpo: `
      <h2>O que é o treinamento de gestão de NR-12</h2>
      <p>O treinamento de gestão de NR-12 prepara os profissionais responsáveis pela segurança em máquinas para coordenar o cumprimento da norma. Diferente do treinamento de operação, o foco está em quem administra o processo: entender as exigências da NR-12 e saber conduzi-las na empresa.</p>

      <h2>O que a capacitação desenvolve</h2>
      <p>Com a capacitação, os responsáveis passam a identificar os potenciais riscos, adotar as medidas de prevenção adequadas e agir de acordo com as normas de segurança estabelecidas. É o conhecimento necessário para manter o parque de máquinas em conformidade ao longo do tempo.</p>

      <h2>Por que investir nesse treinamento</h2>
      <p>Além de ser uma exigência de segurança, a formação em gestão de NR-12 reduz acidentes, aumenta a conformidade com a legislação e valoriza a mão de obra qualificada. A empresa que estrutura essa gestão passa a tratar a segurança de máquinas de forma preventiva, e não reativa.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/treinamento-nr12': {
    resposta:
      'O treinamento NR-12 aborda a segurança no uso de máquinas e equipamentos, conforme a norma. Ensina práticas de operação segura, manutenção e prevenção de acidentes, deixando os trabalhadores aptos a operar as máquinas com segurança e ajudando a empresa a cumprir as exigências legais da NR-12.',
    corpo: `
      <h2>O que é o treinamento NR-12</h2>
      <p>O treinamento NR-12 aborda a segurança no uso de máquinas e equipamentos, conforme a Norma Regulamentadora 12. Ensina práticas de operação segura, de manutenção e de prevenção de acidentes, preparando o trabalhador para lidar com o equipamento sem se expor às zonas de perigo.</p>

      <h2>Treinamento sob medida</h2>
      <p>Os treinamentos são personalizados conforme o maquinário utilizado e os processos específicos de cada empresa. Ao considerar as máquinas que a equipe realmente opera, a capacitação torna-se mais objetiva e diretamente aplicável ao dia a dia da planta.</p>

      <h2>Documentação e conformidade</h2>
      <p>Ao final, a Previsio fornece a documentação que comprova a realização do treinamento — necessária para o cumprimento das normas vigentes. Empresas que capacitam suas equipes protegem a integridade dos colaboradores e evitam penalidades por descumprimento da NR-12.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/treinamentos-nr-12-operadores': {
    resposta:
      'Os treinamentos NR-12 para operadores capacitam quem lida diariamente com máquinas e equipamentos industriais. Ensinam a identificar riscos, adotar práticas seguras e usar corretamente os equipamentos de proteção, reduzindo acidentes e mantendo a operação em conformidade com a norma — com a segurança de quem opera as máquinas em primeiro lugar.',
    corpo: `
      <h2>Por que treinar os operadores</h2>
      <p>Os treinamentos NR-12 para operadores são voltados a quem lida diariamente com máquinas e equipamentos industriais. É o operador que está mais próximo das zonas de perigo, e a sua capacitação é decisiva para evitar acidentes e lesões no dia a dia da operação.</p>

      <h2>O que o operador aprende</h2>
      <p>A capacitação prepara o operador para identificar os riscos do equipamento, adotar práticas seguras e utilizar corretamente os dispositivos de proteção. Com esse conhecimento, ele consegue agir preventivamente diante de situações de perigo, em vez de depender apenas das barreiras físicas.</p>

      <h2>Segurança e produtividade</h2>
      <p>Operadores bem treinados trabalham com mais segurança e reduzem o risco de paradas causadas por acidentes. A empresa, por sua vez, cumpre a norma e demonstra compromisso com a saúde da equipe — o que se reflete em um ambiente laboral mais saudável e produtivo.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },
};
