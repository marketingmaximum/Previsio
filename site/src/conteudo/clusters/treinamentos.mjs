/**
 * Conteúdo enriquecido — cluster TREINAMENTOS (segurança do trabalho).
 *
 * Regra específica: NÃO inventar carga horária. Os treinamentos são
 * in-company e o conteúdo segue a norma/tema aplicável. Ancorado no bodyHtml
 * de cada página. Cada treinamento recebe texto distinto conforme o seu tema.
 * Sem números, prazos ou cases inventados.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'A sede fica em São Leopoldo/RS e o atendimento é nacional — conduzimos projetos e treinamentos em todo o Brasil e também no exterior. Fale com a nossa equipe pelo (51) 3466-9601.',
};

const IN_COMPANY = {
  q: 'Vocês ministram o treinamento na nossa empresa?',
  a: 'Sim. Os treinamentos são in-company, realizados na sua empresa e adaptados à sua realidade, com conteúdo conforme a norma ou o tema aplicável.',
};

export default {
  // -------------------------------------------------------------- PILAR
  '/treinamentos-seguranca-do-trabalho': {
    resposta:
      'Os treinamentos de segurança do trabalho capacitam os colaboradores a identificar, prevenir e lidar com riscos no ambiente laboral — de uso de EPIs e segurança em máquinas a comportamento seguro. A Previsio desenvolve e ministra treinamentos in-company, personalizados para cada empresa e com conteúdo conforme as normas regulamentadoras.',
    corpo: `
      <h2>Por que investir em treinamentos de segurança do trabalho</h2>
      <p>Os treinamentos de segurança do trabalho capacitam os colaboradores a identificar, prevenir e lidar com riscos e acidentes no ambiente laboral. Abrangem temas como uso de EPIs, segurança em máquinas, comportamento seguro e procedimentos de emergência. Empresas que treinam suas equipes protegem os funcionários, cumprem as normas regulamentadoras e constroem um ambiente mais seguro.</p>

      <h2>O que a capacitação entrega</h2>
      <p>Mais do que atender a uma exigência legal, o treinamento muda o comportamento no dia a dia. Colaboradores bem treinados tornam-se conscientes dos riscos à sua volta e agem de forma preventiva, o que reduz acidentes e afastamentos e melhora o clima organizacional e a produtividade.</p>

      <h2>Treinamentos in-company e personalizados</h2>
      <p>Na Previsio, os treinamentos são desenvolvidos de forma personalizada, considerando as necessidades específicas de cada cliente, e conduzidos in-company. O conteúdo é definido conforme a norma ou o tema aplicável — de treinamentos normativos a temas comportamentais — e ministrado por profissionais qualificados.</p>
    `,
    faq: [
      {
        q: 'Quais treinamentos de segurança do trabalho a Previsio oferece?',
        a: 'Uma ampla gama de treinamentos normativos e comportamentais — de EPIs, NR-18, trabalho a quente e inflamáveis (NR-20) a CIPA, direção defensiva e prevenção ao assédio, entre outros. O tema é definido conforme a necessidade da empresa.',
      },
      {
        q: 'Os treinamentos são obrigatórios?',
        a: 'Muitos são exigidos por normas regulamentadoras específicas; outros, como direção defensiva e prevenção ao assédio, reforçam a cultura de segurança. Em todos, o objetivo é proteger os colaboradores e manter a conformidade.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },

  // --------------------------------------------------- ASSÉDIO NO TRABALHO
  '/treinamento-assedio-no-trabalho': {
    resposta:
      'O treinamento sobre assédio no trabalho conscientiza os colaboradores sobre as formas de assédio moral e sexual e as estratégias de prevenção e combate, promovendo um ambiente de respeito. A Previsio ministra o treinamento in-company, ajudando a empresa a cumprir suas obrigações legais e a fortalecer a cultura organizacional.',
    corpo: `
      <h2>O que é o treinamento sobre assédio no trabalho</h2>
      <p>O treinamento sobre assédio no trabalho educa os colaboradores sobre as diversas formas de assédio moral e sexual que podem ocorrer no ambiente profissional. Ao trazer informações claras e estratégias de prevenção e combate, ele contribui para uma cultura organizacional pautada no respeito mútuo e na valorização do bem-estar das pessoas.</p>

      <h2>Principais benefícios</h2>
      <ul>
        <li><strong>Prevenção de conflitos</strong> — ao entender o que caracteriza o assédio, a equipe evita conflitos e constrói relações mais harmoniosas;</li>
        <li><strong>Ambiente respeitoso</strong> — colaboradores tornam-se aptos a identificar e denunciar situações de assédio;</li>
        <li><strong>Atendimento às exigências legais</strong> — o treinamento apoia o cumprimento das obrigações relacionadas à segurança e à saúde no trabalho, reduzindo riscos de sanções.</li>
      </ul>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio ministra o treinamento in-company, adaptado à realidade da empresa, com profissionais qualificados. O foco é promover um ambiente de trabalho seguro, acolhedor e livre de práticas abusivas, ao mesmo tempo em que se reforça a conformidade legal.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento sobre assédio no trabalho?',
        a: 'É a capacitação que conscientiza os colaboradores sobre as formas de assédio moral e sexual e ensina estratégias de prevenção, denúncia e combate, promovendo um ambiente de respeito.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para toda a organização — lideranças e equipes —, já que a prevenção ao assédio depende de conscientização e de cultura em todos os níveis.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },

  // ------------------------------------------------------ DIREÇÃO DEFENSIVA
  '/treinamento-direcao-defensiva': {
    resposta:
      'O treinamento de direção defensiva capacita motoristas a adotar práticas seguras no trânsito — distância segura, atenção ao entorno e antecipação de riscos —, reduzindo acidentes e custos. A Previsio ministra o treinamento in-company, protegendo colaboradores e o patrimônio da empresa e reforçando a segurança nos deslocamentos.',
    corpo: `
      <h2>A importância do treinamento de direção defensiva</h2>
      <p>O treinamento de direção defensiva capacita motoristas a adotar práticas seguras no trânsito, prevenindo acidentes e protegendo a todos. Empresas que investem nessa capacitação demonstram cuidado com a integridade dos colaboradores e reduzem custos relacionados a acidentes de trânsito.</p>

      <h2>O que os motoristas aprendem</h2>
      <p>O treinamento aborda técnicas que minimizam os riscos no tráfego, como manter distância segura entre veículos, manter atenção constante ao ambiente e antecipar possíveis situações de perigo. Essas práticas preservam a vida e protegem o patrimônio da empresa.</p>

      <h2>Benefícios para a empresa</h2>
      <p>Além de reduzir acidentes e as despesas decorrentes, a direção defensiva valoriza os profissionais, que se sentem mais seguros e preparados, e melhora a imagem da empresa perante clientes e parceiros. A Previsio ministra o treinamento in-company, adaptado à rotina de deslocamentos da sua equipe.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de direção defensiva?',
        a: 'É a capacitação que ensina motoristas a dirigir de forma preventiva — mantendo distância segura, atenção ao entorno e antecipando riscos —, reduzindo acidentes de trânsito.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para equipes que dirigem a trabalho — motoristas, entregadores, técnicos de campo e frotistas — e para empresas que querem reduzir acidentes e custos com deslocamentos.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },

  // ----------------------------------------------------------------- EPIs
  '/treinamento-epis': {
    resposta:
      'O treinamento de EPIs orienta os trabalhadores sobre a correta utilização dos equipamentos de proteção individual — capacetes, luvas, óculos e outros —, garantindo o uso adequado e a proteção no dia a dia. A Previsio ministra o treinamento in-company, com conteúdo conforme as normas, para reduzir riscos e acidentes.',
    corpo: `
      <h2>Por que o treinamento de EPIs é essencial</h2>
      <p>O treinamento de EPIs (Equipamentos de Proteção Individual) é um dos pilares da segurança dos trabalhadores. Ao dar instruções claras sobre a correta utilização de capacetes, luvas, óculos de proteção e outros equipamentos, a empresa garante que a proteção realmente funcione no dia a dia e demonstra compromisso com o bem-estar da equipe.</p>

      <h2>O que o treinamento aborda</h2>
      <p>Não basta fornecer o EPI: é preciso usá-lo corretamente. O treinamento trata da escolha adequada para cada risco, da forma correta de uso, da conservação e da importância de manter o equipamento em bom estado. Assim, o EPI cumpre seu papel de proteger contra os riscos presentes na atividade.</p>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio oferece treinamentos personalizados em EPIs, adequados às necessidades específicas de cada cliente e conduzidos in-company. Além de cumprir as exigências legais, a capacitação promove um ambiente de trabalho mais seguro e produtivo, com conteúdo conforme as normas aplicáveis.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de EPIs?',
        a: 'É a capacitação que orienta os trabalhadores sobre a escolha, o uso correto e a conservação dos equipamentos de proteção individual, garantindo que a proteção seja efetiva.',
      },
      {
        q: 'O treinamento de EPIs é obrigatório?',
        a: 'O uso e a orientação sobre EPIs são exigidos pelas normas de segurança sempre que há riscos que os equipamentos precisam controlar. O treinamento assegura o uso adequado e a conformidade.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },

  // ----------------------------------------------------------------- NR-18
  '/treinamento-nr18': {
    resposta:
      'O treinamento da NR-18 capacita os profissionais da construção civil para os riscos específicos do setor — quedas, uso de equipamentos e demais perigos do canteiro —, reduzindo acidentes e multas. A Previsio ministra o treinamento in-company, com conteúdo conforme a NR-18, para tornar a obra mais segura.',
    corpo: `
      <h2>Por que o treinamento da NR-18 é fundamental</h2>
      <p>O treinamento da NR-18 tem papel crucial na segurança do trabalho na construção civil — um setor com riscos específicos, como quedas e a utilização incorreta de equipamentos. Capacitar os profissionais que atuam no canteiro é essencial para lidar de forma adequada com esses perigos.</p>

      <h2>Benefícios para a obra e para a empresa</h2>
      <p>Empresas que investem no treinamento da NR-18 mantêm um ambiente de trabalho mais protegido, reduzem a ocorrência de acidentes e diminuem o risco de multas por descumprimento das normas. Colaboradores bem treinados também desempenham suas funções com mais eficiência e confiança, o que reflete na qualidade dos serviços.</p>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio ministra o treinamento in-company, com conteúdo conforme a NR-18 e adaptado à realidade da obra. O objetivo é preparar as equipes para os desafios e perigos da construção civil, tornando o canteiro mais seguro e em conformidade com as normas.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento da NR-18?',
        a: 'É a capacitação voltada à segurança na construção civil, que prepara os profissionais para os riscos do canteiro — como quedas e uso de equipamentos — conforme a NR-18.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para trabalhadores e empresas do setor da construção civil que precisam atuar com segurança e em conformidade com as normas do canteiro de obras.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },

  // ------------------------------------------------------------------ PTA
  '/treinamento-pta': {
    resposta:
      'O treinamento PTA (Programa de Treinamento de Admissão) capacita os novos funcionários sobre os riscos do ambiente de trabalho, as políticas de segurança da empresa e o uso correto dos EPIs. A Previsio ministra o treinamento in-company para que os colaboradores iniciem suas atividades de forma segura e consciente.',
    corpo: `
      <h2>O que é o treinamento PTA</h2>
      <p>O treinamento PTA (Programa de Treinamento de Admissão) é voltado para os novos funcionários da empresa. Ele os capacita sobre os riscos presentes no ambiente de trabalho, as políticas de segurança adotadas pela organização e a correta utilização dos Equipamentos de Proteção Individual (EPIs), para que iniciem suas atividades com segurança.</p>

      <h2>Por que ele é importante</h2>
      <p>A admissão é o momento certo para alinhar o novo colaborador à cultura de segurança da empresa. Com o PTA, o profissional compreende desde cedo a importância da segurança, fica ciente das normas e das práticas necessárias e passa a agir de forma preventiva, o que contribui para reduzir acidentes.</p>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio ministra o treinamento de admissão in-company, adaptado às atividades e aos riscos de cada empresa. Assim, cada novo colaborador começa já orientado sobre os procedimentos de segurança do seu posto de trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento PTA?',
        a: 'É o Programa de Treinamento de Admissão, que orienta os novos funcionários sobre os riscos do ambiente de trabalho, as políticas de segurança da empresa e o uso correto dos EPIs.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para os colaboradores recém-admitidos, no início de suas atividades, de modo que já iniciem o trabalho cientes dos procedimentos de segurança.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },

  // -------------------------------------------------- TRABALHO A QUENTE
  '/treinamento-trabalho-quente-nr34': {
    resposta:
      'O treinamento de trabalho a quente capacita os trabalhadores que executam soldagem, corte e outras atividades que geram calor, abordando os riscos de incêndio e explosão e as medidas preventivas. A Previsio ministra o treinamento in-company, com conteúdo conforme a norma, para operações mais seguras e em conformidade.',
    corpo: `
      <h2>O que é o treinamento de trabalho a quente</h2>
      <p>O treinamento de trabalho a quente é essencial para a segurança dos trabalhadores que realizam atividades como soldagem, corte e outras operações que envolvem geração de calor. Ele apresenta os requisitos de segurança e prepara a equipe para executar essas tarefas com o cuidado que os riscos exigem.</p>

      <h2>O que o treinamento aborda</h2>
      <p>O conteúdo trata dos riscos de incêndios e explosões associados ao trabalho a quente e das medidas preventivas que devem ser adotadas para evitar acidentes — do isolamento da área às precauções com materiais inflamáveis. É fundamental que empresas que executam essas atividades ofereçam a capacitação adequada.</p>

      <h2>Benefícios e como a Previsio conduz</h2>
      <p>Investir na capacitação garante a segurança da equipe, evita acidentes e afastamentos e mantém a conformidade legal. A Previsio ministra o treinamento in-company, com conteúdo conforme a norma aplicável e adaptado às operações da sua empresa.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de trabalho a quente?',
        a: 'É a capacitação dos trabalhadores que executam soldagem, corte e outras atividades que geram calor, com foco nos riscos de incêndio e explosão e nas medidas preventivas.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para trabalhadores e empresas que realizam atividades de soldagem, corte a quente e operações semelhantes com risco de geração de calor.',
      },
      IN_COMPANY,
      REGIAO,
    ],
  },
};
