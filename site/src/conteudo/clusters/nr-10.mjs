/**
 * Conteúdo enriquecido — cluster NR-10 (segurança em instalações e serviços em
 * eletricidade).
 *
 * Cada página é reescrita a partir do que ela própria já diz (bodyHtml do site
 * atual), do objetivo geral da NR-10 e dos termos que o cliente já usa
 * (prontuário, PIE, laudo, RTI, LOTO). Nada de números, prazos, portarias ou
 * NBR inventados: só se aparecem no bodyHtml daquela página é que entram no
 * texto. Páginas de intenção próxima (os vários prontuários, os RTI, os
 * projetos elétricos) recebem ângulos distintos, ancorados no próprio título.
 *
 * NAP: (51) 3466-9601 · São Leopoldo/RS · atendimento nacional.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Sim. A sede fica em São Leopoldo/RS e atendemos todo o Brasil — atendimento nacional, com projetos conduzidos em território nacional e no exterior. Fale com a equipe pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------------------ PILAR
  '/servicos/nr-10': {
    resposta:
      'A NR-10 é a Norma Regulamentadora de segurança em instalações e serviços em eletricidade. Atender à norma envolve documentação, montagem e instalação elétrica, projetos elétricos, inspeção (RTI), sistema de aterramento, SPDA, prontuário (PIE) e travamento de energias perigosas (LOTO) — para proteger quem trabalha com eletricidade e manter a empresa em conformidade.',
    corpo: `
      <h2>O que é a NR-10</h2>
      <p>A NR-10 estabelece os requisitos mínimos para garantir a segurança e a saúde dos trabalhadores que interagem, direta ou indiretamente, com instalações elétricas e serviços com eletricidade. Atender à norma significa manter as instalações seguras e documentadas, prevenindo choques, curtos-circuitos e incêndios de origem elétrica.</p>

      <h2>O escopo de NR-10 na Previsio</h2>
      <p>Reunimos, sob um mesmo fornecedor, todas as frentes que a conformidade elétrica exige:</p>
      <ul>
        <li><strong>Documentação NR-10</strong> — instruções, procedimentos, ordens de serviço e planos de emergência;</li>
        <li><strong>Montagem e instalação elétrica</strong> — instalações novas, reformas e comandos em extrabaixa tensão;</li>
        <li><strong>Projetos elétricos</strong> — diagramas unifilares e multifilares com memorial descritivo;</li>
        <li><strong>Relatório Técnico de Inspeção (RTI)</strong> — diagnóstico das instalações e plano de ação;</li>
        <li><strong>Sistema de aterramento</strong> e <strong>SPDA</strong> — proteção contra falhas e descargas atmosféricas;</li>
        <li><strong>Prontuário de Instalações Elétricas (PIE)</strong> e travamento de energias perigosas (LOTO).</li>
      </ul>

      <h2>Como a Previsio conduz a conformidade</h2>
      <p>Partimos de um diagnóstico das instalações, elaboramos os projetos e as correções necessárias, executamos as adequações e encerramos com os laudos e a documentação exigida pela norma. Também capacitamos as equipes por meio de treinamento em segurança em eletricidade.</p>

      <h2>Soluções de NR-10</h2>
      <p>Conheça abaixo cada serviço do escopo de NR-10 — da documentação e dos projetos elétricos à inspeção, ao aterramento e ao prontuário.</p>
    `,
    faq: [
      {
        q: 'O que é a NR-10?',
        a: 'É a Norma Regulamentadora de segurança em instalações e serviços em eletricidade. Define os requisitos para proteger quem interage com instalações elétricas e serviços com eletricidade.',
      },
      {
        q: 'A Previsio só faz a documentação ou também executa?',
        a: 'Ciclo completo: inspeção, projetos elétricos, execução das adequações, aterramento, SPDA, prontuário (PIE) e a documentação da NR-10 — com um só fornecedor.',
      },
      {
        q: 'Os laudos e projetos têm engenheiro responsável?',
        a: 'Sim. Somos uma empresa de engenharia; os laudos e projetos são conduzidos por engenheiro responsável, com a Anotação de Responsabilidade Técnica (ART) que dá validade ao documento.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------------- ANÁLISE / LAUDO
  '/analise-conformidade-nr10': {
    resposta:
      'A análise de conformidade com a NR-10 verifica se as instalações elétricas atendem à norma. É uma avaliação técnica que inspeciona os sistemas, identifica falhas e riscos elétricos e recomenda as adequações necessárias, garantindo a segurança dos trabalhadores e a conformidade legal da empresa.',
    corpo: `
      <h2>O que é a análise de conformidade com a NR-10</h2>
      <p>A análise de conformidade com a NR-10 verifica se as instalações elétricas estão de acordo com a norma, cujo objetivo é garantir a segurança e a saúde dos trabalhadores que interagem com instalações elétricas e serviços de eletricidade. Vai muito além de uma inspeção simples: envolve um processo de verificação, testes e recomendações para mitigar riscos e prevenir acidentes.</p>

      <h2>O que a análise identifica</h2>
      <p>A avaliação detalhada revela pontos de risco e falhas que passam despercebidos no dia a dia e propõe medidas de proteção e adequação. Com isso, é possível prevenir acidentes relacionados à eletricidade e garantir a confiabilidade dos sistemas, evitando falhas que resultariam em prejuízos e paradas.</p>

      <h2>Benefícios da análise de conformidade</h2>
      <ul>
        <li><strong>Análise precisa</strong> — identifica riscos e falhas que não aparecem na rotina;</li>
        <li><strong>Medidas preventivas</strong> — recomendações que previnem acidentes;</li>
        <li><strong>Conformidade legal</strong> — evita multas e sanções por descumprimento da norma;</li>
        <li><strong>Mais confiança</strong> — equipe trabalhando em ambiente protegido;</li>
        <li><strong>Redução de custos</strong> — menos reparos emergenciais e afastamentos.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é a análise de conformidade com a NR-10?',
        a: 'É a verificação técnica das instalações elétricas para confirmar se atendem à NR-10, com identificação de falhas e riscos e recomendação das adequações necessárias.',
      },
      {
        q: 'A análise é obrigatória?',
        a: 'Estar em conformidade com a NR-10 é uma exigência legal. A análise é o passo que comprova essa conformidade e evita multas, sanções e acidentes.',
      },
      {
        q: 'Vocês só apontam as falhas ou também corrigem?',
        a: 'Fazemos as duas coisas. Além de apontar as não conformidades, a Previsio executa as adequações — projetos, instalação e correções — e emite a documentação final.',
      },
      REGIAO,
    ],
  },

  '/nr10-laudo': {
    resposta:
      'O laudo de NR-10 é o documento que atesta que as instalações elétricas atendem à Norma Regulamentadora 10. A partir da avaliação das condições elétricas, ele identifica e aponta a correção de riscos como choques e incêndios, dando respaldo técnico à segurança e à conformidade da empresa.',
    corpo: `
      <h2>O que é o laudo de NR-10</h2>
      <p>O laudo de NR-10 é um documento fundamental para garantir a segurança dos trabalhadores em instalações elétricas, assegurando que elas atendam às exigências da norma. Por meio dele, é possível identificar e corrigir possíveis riscos elétricos — como choques e incêndios — promovendo um ambiente de trabalho seguro e em conformidade com a legislação.</p>

      <h2>O que o laudo cobre</h2>
      <p>A Previsio elabora o laudo dentro de um portfólio que inclui reformas e atualizações de máquinas e painéis elétricos, projetos de segurança, adequações conforme a NR-10, assessoria e treinamentos. Assim, o documento reflete a real situação das instalações e aponta as medidas de adequação necessárias.</p>

      <h2>Laudo com quem executa</h2>
      <p>Atuamos no mercado desde 2016, com mais de mil clientes atendidos e experiência em projetos de grande porte no Brasil e no exterior. O laudo não é uma inspeção isolada: faz parte de um ciclo em que também projetamos e executamos as adequações, garantindo qualidade e conformidade do início ao fim.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de NR-10?',
        a: 'É o documento técnico que atesta se as instalações elétricas atendem à NR-10, identificando riscos e apontando as correções necessárias para a conformidade.',
      },
      {
        q: 'O laudo tem engenheiro responsável?',
        a: 'Sim. Como empresa de engenharia, emitimos o laudo com responsabilidade técnica (ART) do engenheiro responsável, o que dá respaldo ao documento perante a fiscalização.',
      },
      {
        q: 'Vocês também executam as adequações apontadas?',
        a: 'Sim. Além do laudo, realizamos reformas de painéis, projetos e adequações conforme a NR-10 — o laudo é a etapa final de um trabalho que acompanhamos por completo.',
      },
      REGIAO,
    ],
  },

  '/ordem-servico-nr10': {
    resposta:
      'A ordem de serviço de NR-10 é o documento que orienta e autoriza as intervenções em instalações elétricas, seguindo as diretrizes da norma. Sua emissão é essencial sempre que há trabalho em sistemas elétricos, prevenindo acidentes e protegendo a saúde dos funcionários expostos a riscos elétricos.',
    corpo: `
      <h2>O que é a ordem de serviço de NR-10</h2>
      <p>A ordem de serviço de NR-10 é um documento fundamental para garantir a segurança dos trabalhadores em instalações elétricas, de acordo com as diretrizes da norma. Ela é essencial sempre que há intervenções em sistemas elétricos, orientando a execução segura das atividades e prevenindo acidentes.</p>

      <h2>Por que a ordem de serviço importa</h2>
      <p>Empresas que emitem a ordem de serviço de NR-10 demonstram comprometimento com a segurança e a saúde de seus colaboradores. Seguindo as diretrizes estabelecidas, evitam-se acidentes, custos com afastamentos e multas por descumprimento das normas, além de se promover um ambiente de trabalho mais protegido e eficiente.</p>

      <h2>Documentação com a Previsio</h2>
      <p>A Previsio, sediada em São Leopoldo/RS e atuando desde 2016, elabora a ordem de serviço como parte da documentação de NR-10 — junto com instruções, procedimentos e planos de emergência. Fornecemos o conjunto documental completo, integrado às demais adequações elétricas da sua empresa.</p>
    `,
    faq: [
      {
        q: 'O que é a ordem de serviço de NR-10?',
        a: 'É o documento que orienta e autoriza as intervenções em instalações elétricas segundo a NR-10, garantindo que o trabalho seja feito com segurança.',
      },
      {
        q: 'Quando ela é necessária?',
        a: 'Sempre que há intervenção em sistemas elétricos. É um instrumento de prevenção de acidentes para os funcionários expostos a riscos elétricos.',
      },
      {
        q: 'Vocês elaboram junto com o restante da documentação?',
        a: 'Sim. A ordem de serviço faz parte da documentação de NR-10 que a Previsio desenvolve, ao lado de instruções, procedimentos e planos de emergência.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------- PRONTUÁRIO / PIE
  '/prontuario-instalacao-eletrica': {
    resposta:
      'O prontuário de instalação elétrica reúne todas as informações técnicas das instalações elétricas de um local, dando um panorama detalhado de sistemas e equipamentos. Mantido atualizado, comprova a conformidade com a NR-10, facilita manutenções e inspeções e sustenta a segurança dos colaboradores.',
    corpo: `
      <h2>O que é o prontuário de instalação elétrica</h2>
      <p>O prontuário de instalação elétrica é um documento essencial para manter um ambiente seguro e em conformidade com as normas. Ele reúne todas as informações técnicas relacionadas à instalação elétrica de um local, fornecendo um panorama detalhado dos sistemas e equipamentos presentes e servindo de base para manutenções, inspeções e adequações.</p>

      <h2>A importância de manter o prontuário atualizado</h2>
      <p>Ao manter o prontuário em dia, a empresa assegura conformidade com a NR-10, que estabelece os requisitos mínimos para a segurança e a saúde dos trabalhadores que interagem com instalações elétricas e serviços com eletricidade. A atualização constante também permite identificar falhas no sistema, prevenindo acidentes, interrupções não programadas e danos materiais.</p>

      <h2>A Previsio e o seu prontuário</h2>
      <p>Sediada em São Leopoldo/RS e atuando desde 2016, a Previsio elabora e mantém o prontuário como parte de um portfólio de segurança elétrica que inclui projetos de instalações elétricas (PIE), SPDA, aterramento e laudos de conformidade com a NR-10. Cuidamos do documento e da adequação que ele documenta.</p>
    `,
    faq: [
      {
        q: 'O que é o prontuário de instalação elétrica?',
        a: 'É o documento que reúne as informações técnicas das instalações elétricas de um local, servindo de base para manutenções, inspeções e adequações e comprovando a conformidade com a NR-10.',
      },
      {
        q: 'Preciso manter o prontuário atualizado?',
        a: 'Sim. É a atualização constante que garante a conformidade com a norma e permite identificar falhas antes que virem acidentes ou paradas.',
      },
      {
        q: 'Vocês elaboram o prontuário do zero?',
        a: 'Sim. Elaboramos e mantemos o prontuário, e também executamos as adequações elétricas que ele documenta — projetos, aterramento, SPDA e laudos.',
      },
      REGIAO,
    ],
  },

  '/prontuario-instalacao-eletrica-nr10': {
    resposta:
      'O prontuário de instalação elétrica conforme a NR-10 reúne as informações de segurança das instalações elétricas — condições, procedimentos e treinamentos. A norma obriga as empresas a elaborar e manter esse documento atualizado, comprovando conformidade e o compromisso com a proteção dos trabalhadores.',
    corpo: `
      <h2>O que é o prontuário conforme a NR-10</h2>
      <p>O prontuário de instalação elétrica é um documento fundamental para as empresas que lidam com instalações elétricas: ele contém informações detalhadas sobre as condições de segurança e as medidas adotadas para proteger os trabalhadores. De acordo com a NR-10, é obrigatório que a empresa elabore e mantenha o prontuário atualizado, demonstrando conformidade com a norma.</p>

      <h2>Por que é obrigatório mantê-lo atualizado</h2>
      <p>A elaboração e a manutenção do prontuário são essenciais para garantir um ambiente de trabalho seguro e em conformidade. Ao documentar as informações das instalações elétricas, os procedimentos de segurança e os treinamentos realizados, a empresa demonstra compromisso com a segurança e o bem-estar dos colaboradores.</p>

      <h2>O que a Previsio documenta</h2>
      <p>Como empresa especializada em Engenharia de Segurança do Trabalho, a Previsio elabora e atualiza o prontuário com expertise técnica, reunindo dados das instalações, procedimentos e registros de treinamento. Oferecemos atendimento personalizado para atender às necessidades específicas de cada cliente.</p>
    `,
    faq: [
      {
        q: 'O prontuário de NR-10 é obrigatório?',
        a: 'Sim. A NR-10 obriga as empresas que lidam com instalações elétricas a elaborar e manter o prontuário atualizado, demonstrando conformidade com a norma.',
      },
      {
        q: 'O que o prontuário precisa conter?',
        a: 'Informações das condições de segurança das instalações, os procedimentos adotados e os registros de treinamentos realizados.',
      },
      {
        q: 'Vocês elaboram e mantêm o documento?',
        a: 'Sim. A Previsio elabora e atualiza o prontuário, com atendimento personalizado às necessidades de cada empresa.',
      },
      REGIAO,
    ],
  },

  '/servicos/titulo-prontuario-de-instalacoes-eletricas-nr-10': {
    resposta:
      'O Prontuário de Instalações Elétricas (PIE) é um conjunto de documentos dinâmicos que funciona como gestão dos ativos técnicos da empresa. Conforme a NR-10, todo consumidor com carga instalada a partir de 75 kW precisa constituir o PIE — que é também o ponto de partida para a completa adequação elétrica.',
    corpo: `
      <h2>O que é o PIE</h2>
      <p>O Prontuário de Instalações Elétricas (PIE) é um conjunto de documentos dinâmicos que servem como gestão de ativos técnicos e ponto de partida para a completa adequação elétrica da empresa. Ele organiza as informações das instalações e orienta as demais frentes da NR-10.</p>

      <h2>Quando o PIE é obrigatório</h2>
      <p>Conforme a NR-10, todos os consumidores com carga instalada a partir de 75 kW obrigatoriamente necessitam constituir o PIE. Constituir o prontuário é, portanto, uma exigência para essas instalações — e o primeiro passo para colocar toda a operação elétrica em conformidade.</p>

      <h2>O PIE como ponto de partida da adequação</h2>
      <p>Por reunir e manter atualizados os documentos técnicos, o PIE funciona como base de gestão: a partir dele, a Previsio conduz projetos elétricos, inspeções (RTI), aterramento, SPDA e as adequações necessárias. É o documento que estrutura a conformidade elétrica de ponta a ponta.</p>
    `,
    faq: [
      {
        q: 'O que é o PIE?',
        a: 'É o Prontuário de Instalações Elétricas — um conjunto de documentos dinâmicos que funciona como gestão dos ativos técnicos e base para a adequação elétrica da empresa.',
      },
      {
        q: 'A partir de quando o PIE é obrigatório?',
        a: 'Conforme a NR-10, todo consumidor com carga instalada a partir de 75 kW obrigatoriamente precisa constituir o PIE.',
      },
      {
        q: 'Vocês montam o PIE do zero?',
        a: 'Sim. Constituímos o PIE e, a partir dele, conduzimos projetos, inspeções e as adequações elétricas necessárias para a completa conformidade.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------------- ÁREAS CLASSIFICADAS
  '/prontuario-areas-classificadas': {
    resposta:
      'O prontuário de áreas classificadas é o documento técnico dos ambientes com risco de explosão ou incêndio, como áreas que manipulam produtos inflamáveis. Ele reúne informações sobre sistemas de proteção, ventilação e prevenção de riscos, auxiliando a evitar acidentes e a manter a conformidade com as normas de segurança.',
    corpo: `
      <h2>O que é o prontuário de áreas classificadas</h2>
      <p>O prontuário de áreas classificadas é um documento fundamental para empresas que lidam com ambientes onde há risco de explosão ou incêndio — como áreas industriais que manipulam produtos inflamáveis. Ele reúne as informações essenciais sobre as condições e os requisitos de segurança desses espaços, apoiando a prevenção de acidentes e a proteção dos trabalhadores.</p>

      <h2>O que o documento reúne</h2>
      <p>O prontuário inclui informações detalhadas sobre os sistemas de proteção utilizados, as medidas de ventilação adotadas e as ações de prevenção de riscos implementadas no ambiente classificado. Esses dados são essenciais para identificar e mitigar vulnerabilidades que possam levar a situações de perigo.</p>

      <h2>Por que manter o prontuário atualizado</h2>
      <p>Manter o prontuário atualizado é essencial para cumprir as exigências legais e, sobretudo, para proteger colaboradores e patrimônio. A gestão correta dessas informações evita multas e sanções e preserva a reputação da empresa. A Previsio oferece serviços completos para a adequação e a manutenção desse documento.</p>
    `,
    faq: [
      {
        q: 'O que é o prontuário de áreas classificadas?',
        a: 'É o documento técnico dos ambientes com risco de explosão ou incêndio, que reúne informações sobre sistemas de proteção, ventilação e prevenção de riscos.',
      },
      {
        q: 'Quem precisa desse prontuário?',
        a: 'Empresas com ambientes onde há risco de explosão ou incêndio, como áreas que manipulam produtos inflamáveis.',
      },
      {
        q: 'Vocês elaboram e mantêm o documento?',
        a: 'Sim. A Previsio oferece serviços completos para a adequação e a manutenção do prontuário de áreas classificadas.',
      },
      REGIAO,
    ],
  },

  '/projeto-area-classificada': {
    resposta:
      'O projeto de área classificada define as zonas de risco de ambientes sujeitos a explosões ou incêndios e as medidas de segurança necessárias. A partir da identificação de gases, poeiras ou vapores combustíveis, ele estabelece os níveis de proteção que garantem a segurança dos trabalhadores e das instalações.',
    corpo: `
      <h2>O que é o projeto de área classificada</h2>
      <p>O projeto de área classificada é essencial para ambientes que apresentam risco de explosão ou incêndio, como indústrias químicas e petroquímicas. Ele define as zonas de risco e as medidas de segurança necessárias para proteger os trabalhadores e cumprir as regulamentações específicas desses espaços.</p>

      <h2>Como funciona o projeto</h2>
      <p>O trabalho envolve a identificação e a classificação das áreas com potencial de risco, considerando a presença de substâncias inflamáveis, gases, poeiras ou vapores combustíveis. Com base nessa análise, são estabelecidas as zonas de risco, que determinam os níveis de proteção e as medidas de prevenção necessárias.</p>

      <h2>Vantagens de investir no projeto</h2>
      <ul>
        <li>Aumento da segurança dos colaboradores;</li>
        <li>Redução de acidentes de trabalho;</li>
        <li>Cumprimento das normas regulamentadoras;</li>
        <li>Proteção das instalações e equipamentos;</li>
        <li>Minimização de danos ambientais.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o projeto de área classificada?',
        a: 'É o documento que define as zonas de risco de ambientes sujeitos a explosões ou incêndios e as medidas de proteção necessárias em cada uma.',
      },
      {
        q: 'Como as zonas de risco são definidas?',
        a: 'A partir da identificação das substâncias inflamáveis, gases, poeiras ou vapores combustíveis presentes, que determinam os níveis de proteção exigidos.',
      },
      {
        q: 'A Previsio conduz o projeto completo?',
        a: 'Sim. Nossa equipe elabora o projeto de área classificada com soluções personalizadas para cada ambiente, com engenheiro responsável.',
      },
      REGIAO,
    ],
  },

  '/laudo-area-classificada': {
    resposta:
      'O laudo de área classificada avalia e classifica as áreas de risco de instalações com presença de gases, vapores ou poeiras inflamáveis. É essencial para a segurança dos trabalhadores e para o cumprimento de normas como a NR-10 e a NR-20, prevenindo explosões e incêndios.',
    corpo: `
      <h2>O que é o laudo de área classificada</h2>
      <p>O laudo de área classificada é um documento fundamental para empresas que lidam com risco de explosão ou incêndio, seja pela presença de gases, vapores ou poeiras inflamáveis. A avaliação detalhada e a classificação das áreas de risco são essenciais para garantir a segurança dos trabalhadores e cumprir normas de segurança como a NR-10 e a NR-20.</p>

      <h2>Como o laudo é elaborado</h2>
      <p>O processo envolve uma análise minuciosa das instalações, a identificação dos agentes inflamáveis presentes, a avaliação dos riscos e a classificação das áreas conforme a probabilidade de ocorrência de atmosferas explosivas. É um documento técnico que exige profissionais qualificados e experientes.</p>

      <h2>Benefícios de manter o laudo atualizado</h2>
      <p>Manter o laudo sempre atualizado previne acidentes graves, protege os colaboradores, garante o cumprimento das normas regulamentadoras e reduz passivos trabalhistas. Também demonstra o compromisso da organização com a segurança. A Previsio oferece um serviço completo e especializado para a emissão do laudo.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de área classificada?',
        a: 'É a avaliação técnica que classifica as áreas de risco de instalações com gases, vapores ou poeiras inflamáveis, conforme normas como a NR-10 e a NR-20.',
      },
      {
        q: 'O laudo tem responsável técnico?',
        a: 'Sim. É um documento técnico elaborado por profissionais qualificados, com engenheiro responsável — o que dá respaldo à avaliação perante a fiscalização.',
      },
      {
        q: 'Preciso atualizar o laudo periodicamente?',
        a: 'Sim. Manter o laudo atualizado é o que previne acidentes graves e garante a conformidade contínua com as normas regulamentadoras.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------------------- PROJETOS ELÉTRICOS
  '/projetos-unifilares': {
    resposta:
      'Projetos unifilares são representações simplificadas de sistemas elétricos, que indicam o fluxo de energia e os principais dispositivos de proteção. Usados em instalações de baixa complexidade, garantem clareza na execução e na manutenção, o cumprimento de normas como a NR-10 e um ambiente de trabalho mais seguro.',
    corpo: `
      <h2>O que são projetos unifilares</h2>
      <p>Projetos unifilares são representações simplificadas de sistemas elétricos, indicando o fluxo de energia e os principais dispositivos de proteção. São utilizados em instalações elétricas de baixa complexidade e garantem clareza na execução e na manutenção, além de assegurar o cumprimento das normas de segurança elétrica.</p>

      <h2>Vantagens de investir em projetos unifilares</h2>
      <p>Um projeto unifilar bem elaborado garante conformidade com as normas vigentes, como a NR-10, e facilita a identificação de falhas e a realização de manutenções preventivas. Com isso, aumenta a vida útil dos equipamentos e reduz os riscos de acidentes.</p>

      <h2>Projetos unifilares com a Previsio</h2>
      <p>Atuando desde 2016, com mais de mil clientes atendidos, a Previsio desenvolve projetos elétricos com excelência técnica. Elaboramos os diagramas unifilares dentro de um portfólio que inclui projetos multifilares, PIE, SPDA, aterramento e laudos conforme a NR-10.</p>
    `,
    faq: [
      {
        q: 'O que é um projeto unifilar?',
        a: 'É a representação simplificada do sistema elétrico, que mostra o fluxo de energia e os principais dispositivos de proteção, usada em instalações de baixa complexidade.',
      },
      {
        q: 'Qual a diferença para o projeto multifilar?',
        a: 'O unifilar é uma visão simplificada; o multifilar detalha os circuitos e a interligação dos componentes. A Previsio elabora os dois.',
      },
      {
        q: 'O projeto tem engenheiro responsável?',
        a: 'Sim. Os projetos elétricos são conduzidos por engenheiro responsável e acompanhados de memorial descritivo.',
      },
      REGIAO,
    ],
  },

  '/projetos-multifilares': {
    resposta:
      'Projetos multifilares representam de forma detalhada os circuitos elétricos e a interligação dos componentes. São essenciais para o bom funcionamento e a segurança das instalações, pois asseguram o cumprimento das normas, facilitam a identificação de falhas e otimizam a manutenção.',
    corpo: `
      <h2>O que são projetos multifilares</h2>
      <p>Os projetos multifilares representam de forma detalhada os circuitos elétricos e a interligação dos componentes de uma instalação. Por meio desses diagramas, é possível garantir que as normas técnicas sejam seguidas e que as instalações estejam de acordo com as exigências de segurança, facilitando a identificação de falhas e o trabalho de manutenção.</p>

      <h2>Benefícios dos projetos multifilares</h2>
      <p>Projetos multifilares bem elaborados asseguram a conformidade com as normas vigentes e contribuem para a otimização da manutenção, resultando em maior eficiência operacional e redução de custos a longo prazo. São a base para instalações elétricas confiáveis e seguras.</p>

      <h2>Projetos multifilares com a Previsio</h2>
      <p>Com sede em São Leopoldo/RS, a Previsio é referência na elaboração e execução de projetos elétricos complexos. Nossa equipe desenvolve projetos multifilares personalizados conforme as especificidades de cada cliente, integrados às demais soluções de NR-10 — projetos unifilares, PIE, SPDA e aterramento.</p>
    `,
    faq: [
      {
        q: 'O que é um projeto multifilar?',
        a: 'É o diagrama que representa de forma detalhada os circuitos e a interligação dos componentes da instalação elétrica, facilitando manutenção e conformidade.',
      },
      {
        q: 'Para que serve o projeto multifilar?',
        a: 'Para garantir que as normas técnicas sejam seguidas, identificar falhas com precisão e otimizar a manutenção das instalações.',
      },
      {
        q: 'Vocês fazem projeto sob medida?',
        a: 'Sim. Desenvolvemos projetos multifilares personalizados conforme as especificidades de cada cliente, com engenheiro responsável.',
      },
      REGIAO,
    ],
  },

  '/servicos/projetos-eletricos-nr-10': {
    resposta:
      'Os projetos elétricos de NR-10 traduzem a instalação em diagramas técnicos claros. A Previsio elabora projetos unifilares e multifilares com memorial técnico descritivo, conforme as premissas da NR-10 e das demais normas técnicas da ABNT — a base para instalações seguras, manuteníveis e em conformidade.',
    corpo: `
      <h2>O que são os projetos elétricos de NR-10</h2>
      <p>Os projetos elétricos documentam tecnicamente as instalações, orientando execução, manutenção e conformidade. Na Previsio, elaboramos projetos elétricos unifilares e multifilares com memorial técnico descritivo, conforme as premissas da NR-10 e das demais normas técnicas da ABNT.</p>

      <h2>O que entregamos</h2>
      <ul>
        <li><strong>Projetos unifilares</strong> — a visão simplificada do fluxo de energia e dos dispositivos de proteção;</li>
        <li><strong>Projetos multifilares</strong> — o detalhamento dos circuitos e da interligação dos componentes;</li>
        <li><strong>Memorial técnico descritivo</strong> — a documentação que embasa e justifica o projeto.</li>
      </ul>

      <h2>Projeto que sustenta a conformidade</h2>
      <p>Um projeto elétrico bem elaborado é a base para a segurança das instalações: facilita a identificação de falhas, orienta a manutenção e comprova a aderência às normas. Por isso, os projetos se integram às demais frentes de NR-10 da Previsio — inspeção (RTI), prontuário (PIE), aterramento e SPDA.</p>
    `,
    faq: [
      {
        q: 'Que projetos elétricos vocês elaboram?',
        a: 'Projetos unifilares e multifilares com memorial técnico descritivo, conforme as premissas da NR-10 e das demais normas técnicas da ABNT.',
      },
      {
        q: 'Os projetos seguem a NR-10?',
        a: 'Sim. São elaborados conforme as premissas da NR-10 e das normas técnicas da ABNT, com memorial descritivo que embasa cada solução.',
      },
      {
        q: 'O projeto tem engenheiro responsável?',
        a: 'Sim. Somos uma empresa de engenharia; os projetos são conduzidos por engenheiro responsável.',
      },
      REGIAO,
    ],
  },

  '/projeto-luminotecnico': {
    resposta:
      'O projeto luminotécnico planeja a iluminação de ambientes de trabalho para garantir visibilidade, segurança e conforto visual. Ao dimensionar a quantidade de luz, o tipo de luminárias e a distribuição dos pontos, contribui para a produtividade, previne acidentes por má iluminação e gera economia de energia.',
    corpo: `
      <h2>O que é o projeto luminotécnico</h2>
      <p>O projeto luminotécnico é uma etapa fundamental para garantir ambientes de trabalho bem iluminados, seguros e eficientes. Com um planejamento adequado, cria-se um sistema de iluminação que atende às necessidades de cada espaço, promovendo a visibilidade necessária às atividades e o conforto visual dos colaboradores — o que impacta positivamente a produtividade e o bem-estar.</p>

      <h2>O que um bom projeto considera</h2>
      <p>Um projeto luminotécnico eficiente leva em conta as características do ambiente, o tipo de atividade realizada, a ergonomia dos postos de trabalho e a legislação vigente. A partir de análises detalhadas, define-se a quantidade de luz necessária, o tipo de luminárias, a distribuição dos pontos de luz e a temperatura de cor mais indicada — equilibrando luz natural e artificial.</p>

      <h2>Vantagens e a consultoria especializada</h2>
      <p>Um sistema bem distribuído reduz a fadiga visual, evita áreas de sombra, melhora a segurança e ainda economiza energia. Contar com uma consultoria especializada em engenharia de segurança do trabalho, como a Previsio, garante análises minuciosas e soluções que atendem aos requisitos legais e às melhores práticas do mercado.</p>
    `,
    faq: [
      {
        q: 'O que é um projeto luminotécnico?',
        a: 'É o planejamento da iluminação de um ambiente, que define quantidade de luz, luminárias, distribuição dos pontos e temperatura de cor para garantir visibilidade, segurança e conforto.',
      },
      {
        q: 'Quais os ganhos de um bom projeto?',
        a: 'Menos fadiga visual, mais segurança, iluminação uniforme e economia de energia, aproveitando ao máximo a luz natural disponível.',
      },
      {
        q: 'A Previsio elabora o projeto?',
        a: 'Sim. Nossa equipe de engenharia desenvolve projetos luminotécnicos sob medida, considerando as características e a legislação de cada ambiente.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------------------- INSPEÇÃO / RTI
  '/rti': {
    resposta:
      'O RTI (Relatório Técnico de Inspeção) é um documento que avalia minuciosamente as condições de segurança de sistemas, equipamentos e instalações, com foco nas instalações elétricas. Ele identifica riscos, falhas e irregularidades e orienta as melhorias necessárias para um ambiente de trabalho seguro e em conformidade.',
    corpo: `
      <h2>O que é o RTI</h2>
      <p>O RTI é um documento técnico elaborado para avaliar minuciosamente as condições de segurança de sistemas, equipamentos e instalações, com foco especial nas instalações elétricas. Esse relatório detalhado identifica possíveis riscos, falhas e irregularidades, permitindo a implementação de melhorias para garantir um ambiente de trabalho seguro e em conformidade com as normas.</p>

      <h2>Vantagens de contratar o RTI</h2>
      <ul>
        <li>Identificação precisa de riscos e potenciais problemas;</li>
        <li>Elaboração de planos de ação para correção das não conformidades;</li>
        <li>Garantia de conformidade com as normas de segurança do trabalho;</li>
        <li>Prevenção de acidentes e incidentes;</li>
        <li>Valorização do ambiente de trabalho e dos colaboradores.</li>
      </ul>

      <h2>RTI com a Previsio</h2>
      <p>A Previsio, com sede em São Leopoldo/RS, mais de mil clientes atendidos e experiência em projetos nacionais e internacionais, conta com equipe qualificada para realizar o RTI. Além do relatório, oferecemos as soluções para corrigir as não conformidades identificadas.</p>
    `,
    faq: [
      {
        q: 'O que é o RTI?',
        a: 'É o Relatório Técnico de Inspeção — um documento que avalia as condições de segurança das instalações, com foco no elétrico, identificando riscos e irregularidades.',
      },
      {
        q: 'O RTI aponta como corrigir os problemas?',
        a: 'Sim. Além de identificar riscos, o RTI traz planos de ação para correção das não conformidades encontradas.',
      },
      {
        q: 'Vocês também executam as correções?',
        a: 'Sim. A Previsio realiza o RTI e as adequações necessárias — o relatório orienta um trabalho que conduzimos por completo.',
      },
      REGIAO,
    ],
  },

  '/relatorio-tecnico-inspecao-das-instalacoes-eletricas-rti': {
    resposta:
      'O Relatório Técnico de Inspeção das Instalações Elétricas (RTI) é a avaliação minuciosa das condições das instalações elétricas, verificando a conformidade com as normas de segurança, identificando falhas e riscos e propondo medidas corretivas — essencial para prevenir acidentes e incêndios.',
    corpo: `
      <h2>O que é o relatório técnico de inspeção das instalações elétricas</h2>
      <p>O RTI é um documento fundamental para garantir a segurança em ambientes com instalações elétricas. Ele consiste em uma avaliação minuciosa das condições dessas instalações, verificando a conformidade com as normas de segurança vigentes, identificando possíveis falhas e riscos e propondo medidas corretivas quando necessário.</p>

      <h2>Por que realizar o RTI</h2>
      <p>A realização do relatório é essencial para proteger os trabalhadores e as instalações como um todo. Ao identificar e corrigir problemas nas instalações elétricas, previnem-se acidentes e incêndios, e garante-se o correto funcionamento dos equipamentos elétricos, evitando prejuízos e danos materiais.</p>

      <h2>Como a Previsio conduz a inspeção</h2>
      <p>Com equipe qualificada e experiente, a Previsio realiza a inspeção e elabora o relatório seguindo as normas e os padrões de segurança. Com mais de mil clientes atendidos e experiência em projetos de grande porte, entregamos um diagnóstico confiável e as soluções para as não conformidades.</p>
    `,
    faq: [
      {
        q: 'O que é o relatório técnico de inspeção das instalações elétricas?',
        a: 'É a avaliação minuciosa das instalações elétricas que verifica a conformidade com as normas, identifica falhas e riscos e propõe as medidas corretivas.',
      },
      {
        q: 'Por que ele é importante?',
        a: 'Porque identifica e permite corrigir problemas antes que causem acidentes ou incêndios, garantindo o correto funcionamento dos equipamentos.',
      },
      {
        q: 'Vocês emitem o relatório e corrigem as falhas?',
        a: 'Sim. A Previsio faz a inspeção, entrega o relatório com as medidas corretivas e executa as adequações necessárias.',
      },
      REGIAO,
    ],
  },

  '/servicos/relatorio-tecnico-de-inspecao-de-nr-10': {
    resposta:
      'O RTI de NR-10 é um laudo em forma de plano de ação, fundamentado em auditoria das condições dos sistemas de instalação elétrica. Trata-se de um diagnóstico real da situação das instalações e equipamentos elétricos, que orienta as correções e o caminho para a conformidade.',
    corpo: `
      <h2>O que é o RTI de NR-10</h2>
      <p>O RTI é um laudo em forma de plano de ação, fundamentado em auditoria das condições dos sistemas de instalação elétrica das empresas. Trata-se de um diagnóstico real da situação das instalações e equipamentos elétricos — não apenas uma inspeção pontual, mas um retrato fiel do que precisa ser adequado.</p>

      <h2>Um diagnóstico que vira plano de ação</h2>
      <p>Por partir de uma auditoria das instalações, o RTI transforma a inspeção em um roteiro prático: aponta as não conformidades e organiza as correções necessárias. É o documento que dá clareza sobre o estado real das instalações e sobre as prioridades da adequação.</p>

      <h2>Do diagnóstico à adequação</h2>
      <p>Na Previsio, o RTI é o ponto de partida para colocar as instalações em conformidade com a NR-10. A partir dele, conduzimos os projetos elétricos, o prontuário (PIE) e as adequações — com um só fornecedor, do diagnóstico à obra.</p>
    `,
    faq: [
      {
        q: 'O que é o RTI de NR-10?',
        a: 'É um laudo em forma de plano de ação, baseado em auditoria das instalações elétricas, que funciona como diagnóstico real da situação dos sistemas e equipamentos.',
      },
      {
        q: 'O RTI já indica o que corrigir?',
        a: 'Sim. Por ser um plano de ação, ele aponta as não conformidades e organiza as prioridades da adequação.',
      },
      {
        q: 'Vocês executam as adequações do plano?',
        a: 'Sim. A partir do RTI, conduzimos projetos, prontuário (PIE) e as adequações elétricas — do diagnóstico à obra.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------- DOCUMENTAÇÃO / OBRA
  '/servicos/documentacao-nr-10': {
    resposta:
      'A documentação de NR-10 reúne os registros que a norma exige para a segurança elétrica. A Previsio desenvolve as instruções e os procedimentos de trabalho, as ordens de serviço e os planos de ação de emergência, além de elaborar os planos de manutenção preventiva das instalações.',
    corpo: `
      <h2>O que inclui a documentação de NR-10</h2>
      <p>A documentação é o conjunto de registros que sustenta a segurança elétrica e comprova a conformidade com a norma. A Previsio desenvolve os principais documentos exigidos:</p>
      <ul>
        <li><strong>Instruções e procedimentos de trabalho</strong> — como executar as atividades com segurança;</li>
        <li><strong>Ordens de serviço</strong> — a autorização e a orientação das intervenções;</li>
        <li><strong>Planos de ação de emergência</strong> — o que fazer diante de sinistros elétricos;</li>
        <li><strong>Planos de manutenção preventiva</strong> — a rotina que mantém as instalações seguras.</li>
      </ul>

      <h2>Por que a documentação importa</h2>
      <p>Manter a documentação organizada e atualizada é o que comprova, perante fiscalização e auditorias, que a empresa opera em conformidade com a NR-10. Além do respaldo legal, os documentos orientam as equipes e reduzem o risco de acidentes.</p>

      <h2>Documentação com quem executa</h2>
      <p>A Previsio elabora a documentação integrada às demais frentes de NR-10 — projetos, inspeção (RTI), prontuário (PIE) e adequações. Assim, os registros refletem a real situação das instalações e acompanham cada melhoria realizada.</p>
    `,
    faq: [
      {
        q: 'O que a documentação de NR-10 inclui?',
        a: 'Instruções e procedimentos de trabalho, ordens de serviço, planos de ação de emergência e planos de manutenção preventiva.',
      },
      {
        q: 'A documentação é obrigatória?',
        a: 'Manter a documentação atualizada é o que comprova a conformidade com a NR-10 perante fiscalização e auditorias.',
      },
      {
        q: 'Vocês só documentam ou também executam?',
        a: 'A documentação é integrada às demais frentes de NR-10 — projetos, RTI, PIE e adequações — que a Previsio também executa.',
      },
      REGIAO,
    ],
  },

  '/servicos/montagem-e-instalacao-eletrica-nr-10': {
    resposta:
      'A Previsio realiza montagens e instalações elétricas novas e também reforma sistemas já existentes, além de adequar comandos elétricos para extrabaixa tensão. Todos os processos são executados em conformidade com as normas vigentes, garantindo instalações seguras, confiáveis e alinhadas aos requisitos da NR-10, tanto em obras novas quanto em modernizações.',
    corpo: `
      <h2>Montagem e instalação elétrica</h2>
      <p>Realizamos montagens e instalações elétricas novas e também reformamos sistemas existentes. Cada intervenção é executada em conformidade com as normas vigentes, com o objetivo de entregar instalações seguras, confiáveis e alinhadas à NR-10.</p>

      <h2>Instalações novas e reformas</h2>
      <p>Seja em um sistema do zero ou na atualização de uma instalação já em operação, cuidamos da execução com foco na segurança elétrica. As reformas modernizam sistemas antigos, corrigem não conformidades e preparam as instalações para operar dentro dos requisitos da norma.</p>

      <h2>Comandos em extrabaixa tensão</h2>
      <p>Também adequamos comandos elétricos para extrabaixa tensão, uma medida que reduz a exposição a choques e aumenta a proteção dos operadores. É parte do nosso compromisso de executar cada processo em conformidade com as normas existentes.</p>
    `,
    faq: [
      {
        q: 'O que vocês fazem na montagem e instalação elétrica?',
        a: 'Instalações elétricas novas, reformas de sistemas existentes e adequação de comandos elétricos para extrabaixa tensão, sempre em conformidade com as normas.',
      },
      {
        q: 'Vocês reformam instalações antigas?',
        a: 'Sim. Reformamos sistemas existentes, corrigindo não conformidades e modernizando as instalações para atender à NR-10.',
      },
      {
        q: 'A execução segue as normas?',
        a: 'Sim. Todos os processos são executados em conformidade com as normas vigentes, com responsabilidade técnica de engenharia.',
      },
      REGIAO,
    ],
  },

  '/adequacao-comandos-eletricos-extrabaixa-tensao': {
    resposta:
      'A adequação de comandos elétricos para extrabaixa tensão adapta os equipamentos para operar em níveis de tensão reduzidos, aumentando a proteção contra choques elétricos. É uma medida de segurança que reduz riscos de acidentes, protege colaboradores e equipamentos e mantém a empresa em conformidade com as normas.',
    corpo: `
      <h2>O que é a adequação de comandos para extrabaixa tensão</h2>
      <p>A adequação de comandos elétricos para extrabaixa tensão consiste na adaptação de equipamentos para operar em níveis de tensão reduzidos, seguindo normas técnicas e proporcionando maior proteção contra choques elétricos. É um serviço essencial para a segurança e a conformidade de sistemas elétricos em ambientes industriais e comerciais.</p>

      <h2>Importância da adequação</h2>
      <p>A segurança elétrica é prioridade em qualquer ambiente de trabalho. Operar os comandos em extrabaixa tensão minimiza os riscos de acidentes, protegendo tanto os colaboradores quanto os equipamentos, e contribui para a conformidade com as regulamentações vigentes — evitando penalidades.</p>

      <h2>Vantagens e como conduzimos</h2>
      <p>Além de um ambiente mais seguro, a adequação reduz a possibilidade de falhas elétricas, aumenta a eficiência dos sistemas e prolonga a vida útil dos equipamentos. O processo começa por uma análise dos sistemas existentes, identifica pontos de melhoria e implementa as mudanças necessárias para reduzir os níveis de tensão — sempre com profissionais qualificados.</p>
    `,
    faq: [
      {
        q: 'O que é a adequação para extrabaixa tensão?',
        a: 'É a adaptação dos comandos elétricos para operar em níveis de tensão reduzidos, aumentando a proteção contra choques e a segurança do sistema.',
      },
      {
        q: 'Quais os benefícios?',
        a: 'Menos risco de acidentes e falhas elétricas, maior eficiência dos sistemas, proteção de equipamentos e conformidade com as normas.',
      },
      {
        q: 'Como funciona o processo?',
        a: 'Começa por uma análise dos sistemas existentes, identifica pontos de melhoria e implementa as mudanças para reduzir os níveis de tensão, com profissionais qualificados.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------------------ TREINAMENTO
  '/treinamento-seguranca-eletricidade-nr10': {
    resposta:
      'O treinamento de segurança em eletricidade da NR-10 capacita os trabalhadores a lidar com os riscos elétricos do ambiente de trabalho. Aborda a prevenção de acidentes, o uso correto de EPIs e os procedimentos de emergência, garantindo a segurança dos colaboradores e o cumprimento da norma.',
    corpo: `
      <h2>O que é o treinamento de segurança em eletricidade</h2>
      <p>O treinamento em segurança em eletricidade da NR-10 é essencial para capacitar os trabalhadores a lidar com os riscos elétricos presentes no ambiente de trabalho. Empresas que investem nesse treinamento garantem a segurança de seus colaboradores e cumprem as regulamentações estabelecidas pela norma.</p>

      <h2>O que o treinamento aborda</h2>
      <p>O conteúdo vai das práticas de prevenção de acidentes ao uso correto de Equipamentos de Proteção Individual (EPIs) e aos procedimentos de emergência a serem adotados em casos de sinistros elétricos. É a capacitação que prepara a equipe para o trabalho seguro com eletricidade.</p>

      <h2>Por que investir no treinamento</h2>
      <p>O investimento traz redução de acidentes, aumento de produtividade, valorização dos funcionários e conformidade com as leis trabalhistas — além de um ambiente mais seguro e saudável. Na Previsio, o treinamento é ministrado por profissionais qualificados, com suporte técnico e a documentação necessária.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de NR-10?',
        a: 'É a capacitação em segurança em eletricidade que prepara os trabalhadores para lidar com riscos elétricos, abordando prevenção, uso de EPIs e procedimentos de emergência.',
      },
      {
        q: 'Por que investir no treinamento?',
        a: 'Reduz acidentes, aumenta a produtividade, valoriza os funcionários e mantém a empresa em conformidade com as regulamentações da NR-10.',
      },
      {
        q: 'Quem ministra o treinamento?',
        a: 'Profissionais qualificados da Previsio, com suporte técnico e a documentação necessária para cumprir as exigências legais.',
      },
      REGIAO,
    ],
  },
};
