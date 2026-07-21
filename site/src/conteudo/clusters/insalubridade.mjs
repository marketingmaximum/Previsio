/**
 * Conteúdo enriquecido — cluster INSALUBRIDADE E PERICULOSIDADE
 * (laudos, perícias, LTIP/LIP e LTCAT).
 *
 * Fontes: exclusivamente o bodyHtml de cada página e os nomes/objetivos gerais
 * já usados pelo cliente (LTCAT = Laudo Técnico das Condições Ambientais do
 * Trabalho; LTIP/LIP = laudo de insalubridade e periculosidade; NR-15, Decreto
 * 3.048/99, PPP, PCMSO e PGR são citados no conteúdo do próprio cliente).
 * Sem números, prazos, percentuais de adicional, cases ou normas inventadas.
 *
 * Páginas de intenção próxima recebem texto DISTINTO, cada uma ancorada no seu
 * bodyHtml e no ângulo do título.
 *
 * NAP: (51) 3466-9601 · São Leopoldo/RS · atendimento nacional.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Sim. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional — e também no exterior. Fale com a gente pelo (51) 3466-9601.',
};

const RESPALDO = {
  q: 'O laudo tem respaldo técnico?',
  a: 'Sim. Os laudos são elaborados por engenheiro de segurança do trabalho, com responsabilidade técnica, o que dá respaldo ao documento perante a fiscalização e a Justiça do Trabalho.',
};

export default {
  // ------------------------------------------------------------------- LIP
  '/laudo-insalubridade-periculosidade-lip': {
    resposta:
      'O LIP — Laudo de Insalubridade e Periculosidade — verifica a exposição dos trabalhadores a agentes insalubres e a atividades perigosas, como substâncias tóxicas, eletricidade e explosivos. Determina se há direito ao adicional de insalubridade ou de periculosidade e mantém a empresa em conformidade com as normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o LIP (Laudo de Insalubridade e Periculosidade)</h2>
      <p>O LIP é um documento fundamental para proteger os trabalhadores e garantir a segurança no ambiente laboral. Ele verifica a exposição dos colaboradores a condições de risco — agentes insalubres e atividades perigosas — que podem comprometer a saúde e a integridade física.</p>

      <h2>O que o laudo analisa</h2>
      <p>Na avaliação são considerados fatores como substâncias tóxicas, atividades de risco, eletricidade e explosivos, entre outros. A partir desse levantamento, o laudo caracteriza a exposição existente no posto de trabalho.</p>

      <h2>Por que o LIP é importante</h2>
      <p>Além de proteger os trabalhadores, o laudo garante o cumprimento das normas de segurança do trabalho e permite determinar se os colaboradores têm direito ao adicional de insalubridade ou de periculosidade — assegurando seus direitos e prevenindo problemas legais para a empresa.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Especializada em engenharia de segurança do trabalho, a Previsio elabora o LIP com equipe qualificada, oferecendo soluções personalizadas para deixar o ambiente de trabalho mais seguro e a empresa em conformidade com as normas.</p>
    `,
    faq: [
      {
        q: 'O que é o LIP?',
        a: 'É o Laudo de Insalubridade e Periculosidade, que verifica a exposição a agentes insalubres e a atividades perigosas e determina o direito aos adicionais correspondentes.',
      },
      {
        q: 'Para que serve o LIP?',
        a: 'Para proteger os trabalhadores, manter a empresa em conformidade com as normas e determinar se há direito ao adicional de insalubridade ou de periculosidade.',
      },
      {
        q: 'A Previsio elabora o LIP?',
        a: 'Sim. Elaboramos o laudo com equipe qualificada, com soluções personalizadas para cada empresa.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // --------------------------------------------------------- INSALUBRIDADE
  '/laudo-insalubridade': {
    resposta:
      'O laudo de insalubridade é o documento técnico que avalia a exposição dos trabalhadores a agentes nocivos à saúde — ruído, produtos químicos, temperaturas extremas, entre outros — e verifica se a atividade se enquadra como insalubre conforme a legislação. Serve para identificar e controlar riscos e para embasar o adicional de insalubridade.',
    corpo: `
      <h2>O que é o laudo de insalubridade</h2>
      <p>O laudo de insalubridade é um documento técnico elaborado por profissionais especializados que avalia as condições de trabalho e a exposição dos funcionários a agentes nocivos à saúde. A partir da análise realizada no local, é possível determinar se as atividades se enquadram como insalubres, de acordo com a legislação vigente.</p>

      <h2>Quais agentes são avaliados</h2>
      <p>Entre os agentes analisados estão ruídos, produtos químicos e temperaturas extremas, entre outros. É essa caracterização que embasa a decisão sobre o enquadramento da atividade como insalubre.</p>

      <h2>Por que o laudo é importante</h2>
      <p>A realização do laudo permite identificar e controlar os riscos existentes no ambiente de trabalho. Além disso, é fundamental para garantir o cumprimento das normas de segurança e saúde ocupacional, promovendo a qualidade de vida dos colaboradores e evitando problemas judiciais e multas.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Com equipe altamente qualificada e especializada em segurança do trabalho, a Previsio oferece atendimento personalizado, com análises detalhadas e precisas, garantindo a adequação das condições de trabalho às normas regulamentadoras.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de insalubridade?',
        a: 'É o documento técnico que avalia a exposição dos trabalhadores a agentes nocivos — ruído, químicos, temperaturas extremas — e verifica se a atividade se enquadra como insalubre.',
      },
      {
        q: 'Para que serve o laudo de insalubridade?',
        a: 'Para identificar e controlar riscos, manter a empresa em conformidade com as normas e embasar a caracterização do adicional de insalubridade.',
      },
      {
        q: 'A Previsio elabora o laudo?',
        a: 'Sim. Fazemos a análise no local e emitimos o laudo com atendimento personalizado e precisão técnica.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // --------------------------------------------------------- PERICULOSIDADE
  '/laudo-periculosidade': {
    resposta:
      'O laudo de periculosidade avalia ambientes que expõem os trabalhadores a risco iminente à vida, como inflamáveis, explosivos e eletricidade. Determina se há direito ao adicional de periculosidade e garante a conformidade da empresa com as normas regulamentadoras. A elaboração envolve análise do ambiente, medições e avaliações técnicas.',
    corpo: `
      <h2>O que é o laudo de periculosidade</h2>
      <p>O laudo de periculosidade consiste em uma avaliação minuciosa de ambientes de trabalho que expõem os colaboradores a atividades ou substâncias de risco iminente à vida, como produtos inflamáveis, explosivos ou eletricidade. É um documento essencial para a segurança e a saúde no ambiente laboral.</p>

      <h2>Direito ao adicional de periculosidade</h2>
      <p>O laudo é determinante para verificar se os trabalhadores têm direito ao adicional de periculosidade, assegurando o cumprimento das normas regulamentadoras e a proteção da equipe exposta a esse tipo de risco.</p>

      <h2>Processo de elaboração</h2>
      <p>O trabalho começa com uma análise minuciosa do ambiente, identificando os riscos aos quais os colaboradores estão expostos. Em seguida, são realizadas medições e avaliações técnicas que embasam o documento, com todas as informações necessárias para garantir a segurança e a conformidade da empresa com a legislação.</p>

      <h2>Por que contar com a Previsio</h2>
      <p>Com experiência em engenharia de segurança do trabalho, a Previsio elabora o laudo de periculosidade com atendimento personalizado e ágil, sempre com foco na segurança dos colaboradores e na conformidade legal.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de periculosidade?',
        a: 'É a avaliação de ambientes que expõem os trabalhadores a risco iminente à vida — como inflamáveis, explosivos e eletricidade — para verificar o direito ao adicional de periculosidade.',
      },
      {
        q: 'O que caracteriza periculosidade?',
        a: 'A exposição a atividades ou substâncias de risco iminente à vida, como produtos inflamáveis, explosivos ou eletricidade. O laudo faz essa caracterização.',
      },
      {
        q: 'A Previsio elabora o laudo?',
        a: 'Sim. Fazemos a análise do ambiente, as medições e as avaliações técnicas e emitimos o laudo de periculosidade.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ---------------------------------------- CONDIÇÕES AMBIENTAIS (GERAL)
  '/laudo-tecnico-condicoes-ambientais-do-trabalho': {
    resposta:
      'O laudo técnico de condições ambientais do trabalho avalia os fatores presentes no ambiente laboral — físicos, químicos, biológicos e ergonômicos —, identificando potenciais riscos e verificando a adequação às normas regulamentadoras. Contribui para a prevenção de doenças ocupacionais e para a redução de custos com afastamentos e indenizações.',
    corpo: `
      <h2>O que é o laudo técnico de condições ambientais do trabalho</h2>
      <p>É um documento fundamental para as empresas que se preocupam com a segurança e a saúde de seus colaboradores. O laudo avalia diversos fatores presentes no ambiente de trabalho — aspectos físicos, químicos, biológicos e ergonômicos —, identificando potenciais riscos e verificando a adequação às normas regulamentadoras.</p>

      <h2>Vantagens do laudo</h2>
      <p>Empresas que investem nesse laudo demonstram compromisso com o bem-estar dos funcionários. A avaliação contribui para a prevenção de doenças ocupacionais, para o cumprimento das normas vigentes e para a redução de custos relacionados a afastamentos e indenizações.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Especializada em engenharia de segurança do trabalho, a Previsio oferece serviços completos para a elaboração do laudo, com equipe experiente e atuação em todo o território nacional, garantindo a qualidade e a precisão necessárias.</p>

      <h2>O que o laudo entrega</h2>
      <p>Ao final, a empresa recebe um retrato técnico das condições do ambiente de trabalho e das medidas necessárias para mantê-lo seguro e em conformidade — um instrumento de decisão para a gestão de segurança e saúde ocupacional.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo técnico de condições ambientais do trabalho?',
        a: 'É o documento que avalia os fatores físicos, químicos, biológicos e ergonômicos do ambiente laboral, identificando riscos e verificando a adequação às normas.',
      },
      {
        q: 'Para que serve esse laudo?',
        a: 'Para prevenir doenças ocupacionais, cumprir as normas vigentes e reduzir custos com afastamentos e indenizações.',
      },
      {
        q: 'A Previsio elabora o laudo?',
        a: 'Sim. Oferecemos serviços completos para a elaboração do laudo, com equipe experiente e atuação em todo o território nacional.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------------ LTCAT (TÉCNICO)
  '/laudo-tecnico-das-condicoes-ambientais-trabalho-ltcat': {
    resposta:
      'O LTCAT — Laudo Técnico das Condições Ambientais do Trabalho — descreve as condições do ambiente laboral e a exposição dos trabalhadores a agentes nocivos, como ruído, calor e produtos químicos. É a base técnica para caracterizar essa exposição e orientar adequações que evitam passivos trabalhistas e previdenciários.',
    corpo: `
      <h2>O que é o LTCAT</h2>
      <p>O LTCAT é um documento fundamental para garantir a segurança e a saúde dos trabalhadores. Tem como objetivo analisar e descrever as condições de trabalho que possam expor os funcionários a agentes nocivos à saúde.</p>

      <h2>Agentes nocivos avaliados</h2>
      <p>Entre os agentes considerados na avaliação estão o ruído, o calor e os produtos químicos, entre outros. A caracterização dessa exposição é o que dá sustentação técnica ao laudo.</p>

      <h2>LTCAT e a prevenção de passivos</h2>
      <p>Além de elaborar o laudo, a Previsio oferece serviços complementares que ajudam a garantir a segurança da equipe e a proporcionar adequações que evitam passivos trabalhistas. O objetivo é aliar a caracterização técnica à correção efetiva das condições do ambiente.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Com equipe qualificada e experiência na condução de grandes projetos em todo o território nacional e no exterior, a Previsio realiza todas as etapas necessárias para a elaboração do LTCAT, com uma abordagem personalizada para cada cliente.</p>
    `,
    faq: [
      {
        q: 'O que é o LTCAT?',
        a: 'É o Laudo Técnico das Condições Ambientais do Trabalho, que descreve as condições do ambiente e a exposição dos trabalhadores a agentes nocivos, como ruído, calor e produtos químicos.',
      },
      {
        q: 'Para que serve o LTCAT?',
        a: 'Para caracterizar tecnicamente a exposição a agentes nocivos e orientar adequações que evitam passivos trabalhistas e previdenciários.',
      },
      {
        q: 'A Previsio elabora o LTCAT?',
        a: 'Sim. Realizamos todas as etapas necessárias para a elaboração do laudo, com abordagem personalizada.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------------------ LTIP
  '/laudo-tecnico-insalubridade-periculosidade-ltip': {
    resposta:
      'O LTIP — Laudo Técnico de Insalubridade e Periculosidade — determina o grau de exposição dos trabalhadores aos agentes de risco do ambiente, identificando atividades insalubres ou perigosas. Permite adotar medidas preventivas e corretivas, cumprir as normas de segurança do trabalho e evitar problemas legais ligados à saúde ocupacional.',
    corpo: `
      <h2>O que é o LTIP</h2>
      <p>O LTIP é um documento fundamental para as empresas que desejam garantir a segurança e a saúde dos colaboradores. Por meio dele é possível determinar o grau de exposição aos agentes de risco presentes no ambiente de trabalho, permitindo identificar atividades insalubres ou perigosas.</p>

      <h2>Por que realizar o LTIP</h2>
      <p>O laudo é essencial para cumprir as normas de segurança do trabalho, garantir o bem-estar dos funcionários e evitar problemas legais. Com base nas informações do documento, a empresa pode adotar medidas preventivas e corretivas para minimizar os riscos de acidentes e doenças ocupacionais.</p>

      <h2>Vantagens de realizar o LTIP</h2>
      <ul>
        <li>Identificação precisa de atividades insalubres ou perigosas;</li>
        <li>Cumprimento das normas de segurança do trabalho;</li>
        <li>Proteção da saúde dos trabalhadores;</li>
        <li>Prevenção de acidentes laborais;</li>
        <li>Redução do risco de processos judiciais ligados à segurança e à saúde ocupacional.</li>
      </ul>

      <h2>Como a Previsio elabora</h2>
      <p>Atuando desde 2016, a Previsio elabora o LTIP com equipe altamente qualificada, garantindo a precisão e a confiabilidade necessárias para identificar e classificar os riscos do ambiente de trabalho e assegurar o cumprimento das normas regulamentadoras.</p>
    `,
    faq: [
      {
        q: 'O que é o LTIP?',
        a: 'É o Laudo Técnico de Insalubridade e Periculosidade, que determina o grau de exposição aos agentes de risco e identifica atividades insalubres ou perigosas.',
      },
      {
        q: 'Para que serve o LTIP?',
        a: 'Para cumprir as normas de segurança, proteger a saúde dos trabalhadores e adotar medidas preventivas e corretivas, evitando problemas legais.',
      },
      {
        q: 'A Previsio elabora o LTIP?',
        a: 'Sim. Elaboramos o laudo com equipe qualificada, identificando e classificando os riscos do ambiente de trabalho.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------- LAUDO TÉCNICO INSALUBRIDADE
  '/laudo-tecnico-insalubridade': {
    resposta:
      'O laudo técnico de insalubridade avalia a exposição dos trabalhadores a agentes nocivos — ruídos, poeiras e produtos químicos — e classifica o grau de insalubridade da atividade. Elaborado por profissionais qualificados, tem como principal referência a NR-15, que estabelece os limites de tolerância para agentes insalubres no trabalho.',
    corpo: `
      <h2>O que é o laudo técnico de insalubridade</h2>
      <p>O laudo técnico de insalubridade é fundamental para garantir a segurança e a saúde dos trabalhadores. O documento avalia a exposição dos funcionários a agentes nocivos, como ruídos, poeiras e produtos químicos, e classifica o grau de insalubridade das atividades desenvolvidas.</p>

      <h2>Como o grau de insalubridade é classificado</h2>
      <p>O laudo é elaborado por profissionais qualificados, que realizam inspeções minuciosas nos locais de trabalho para identificar possíveis agentes insalubres. A partir dessas informações, são determinados os graus de insalubridade e as medidas necessárias para proteger os trabalhadores.</p>

      <h2>Normas regulamentadoras relacionadas</h2>
      <p>O laudo está relacionado principalmente à NR-15, que estabelece os limites de tolerância para agentes insalubres no ambiente de trabalho. Outros dispositivos legais também podem ser considerados na avaliação, conforme os agentes presentes.</p>

      <h2>Por que escolher a Previsio</h2>
      <p>O laudo técnico de insalubridade é uma das especialidades da Previsio. Com profissionais capacitados e atendimento personalizado, entregamos soluções completas em engenharia de segurança do trabalho para tornar o ambiente mais seguro e em conformidade com as normas.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo técnico de insalubridade?',
        a: 'É o documento que avalia a exposição a agentes nocivos — ruídos, poeiras e produtos químicos — e classifica o grau de insalubridade da atividade.',
      },
      {
        q: 'Qual norma orienta o laudo?',
        a: 'A principal referência é a NR-15, que estabelece os limites de tolerância para agentes insalubres no ambiente de trabalho.',
      },
      {
        q: 'A Previsio elabora o laudo?',
        a: 'Sim. É uma das nossas especialidades: fazemos as inspeções, classificamos o grau de insalubridade e indicamos as medidas necessárias.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------------- LAUDO PERICIAL
  '/laudo-tecnico-pericial-insalubridade-periculosidade': {
    resposta:
      'O laudo técnico pericial de insalubridade e periculosidade é a análise minuciosa das condições de trabalho feita por engenheiro de segurança, com visita ao local, medições e coleta de dados. Identifica os agentes nocivos e as medidas de proteção necessárias, apoiando a prevenção de acidentes e a defesa técnica da empresa.',
    corpo: `
      <h2>O que é o laudo técnico pericial de insalubridade e periculosidade</h2>
      <p>É um documento fundamental para empresas que desejam garantir a segurança e a saúde de seus colaboradores. Trata-se de uma análise minuciosa das condições de trabalho, com o objetivo de identificar a presença de agentes insalubres ou perigosos que possam colocar em risco a integridade física e mental dos trabalhadores.</p>

      <h2>Como funciona</h2>
      <p>A elaboração envolve a visita de um engenheiro de segurança do trabalho ao local, onde são realizadas medições, análises e coleta de dados para identificar os riscos. Com base nessas informações, o laudo aponta os agentes nocivos presentes e as medidas necessárias para proteger a equipe.</p>

      <h2>Vantagens do laudo pericial</h2>
      <p>Ao identificar e corrigir as condições que oferecem riscos à saúde e à integridade dos trabalhadores, a empresa cumpre as normas de segurança e saúde ocupacional, evita possíveis passivos legais e garante um ambiente mais seguro. O documento também apoia a prevenção de acidentes e de doenças ocupacionais.</p>

      <h2>Por que contar com a Previsio</h2>
      <p>Especializada em engenharia de segurança do trabalho, a Previsio elabora laudos técnicos periciais de insalubridade e periculosidade com experiência técnica comprovada, ajudando a empresa a se adequar às normas e a proteger a equipe.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo técnico pericial de insalubridade e periculosidade?',
        a: 'É a análise minuciosa das condições de trabalho, feita por engenheiro de segurança, que identifica agentes nocivos e as medidas de proteção necessárias.',
      },
      {
        q: 'O engenheiro visita o local de trabalho?',
        a: 'Sim. A elaboração inclui a visita ao local, com medições, análises e coleta de dados para identificar os riscos.',
      },
      {
        q: 'A Previsio elabora o laudo pericial?',
        a: 'Sim. Elaboramos o laudo com experiência técnica comprovada, apoiando a adequação às normas e a defesa técnica da empresa.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // -------------------------------------------------------- LTIP (ADICIONAIS)
  '/ltip-laudo-tecnico-insalubridade-periculosidade': {
    resposta:
      'O LTIP é o laudo técnico que analisa as condições de trabalho e determina o grau de insalubridade ou periculosidade das atividades, garantindo o direito dos trabalhadores aos adicionais correspondentes. Mantém a empresa em conformidade com a legislação, reduz o risco de ações trabalhistas e ajuda a promover um ambiente de trabalho mais seguro.',
    corpo: `
      <h2>O que é o LTIP</h2>
      <p>O LTIP é uma ferramenta essencial para empresas que se preocupam com a saúde e a segurança de seus colaboradores. Por meio dele, é realizada uma análise minuciosa das condições de trabalho, identificando possíveis riscos à saúde e à integridade física dos trabalhadores.</p>

      <h2>Grau de insalubridade, periculosidade e adicionais</h2>
      <p>O laudo determina o grau de insalubridade ou periculosidade das atividades, garantindo o cumprimento das normas legais e o direito dos trabalhadores aos adicionais correspondentes. Com o LTIP em dia, a empresa assegura que está em conformidade com a legislação vigente.</p>

      <h2>Vantagens do LTIP</h2>
      <ul>
        <li>Atendimento às normas: evita penalidades e multas;</li>
        <li>Proteção dos trabalhadores: identifica e mitiga os riscos do ambiente;</li>
        <li>Prevenção de litígios: reduz as chances de ações trabalhistas;</li>
        <li>Ambiente de trabalho seguro: contribui para o bem-estar de todos;</li>
        <li>Valorização da empresa: reforça o reconhecimento no mercado.</li>
      </ul>

      <h2>A Previsio na elaboração do LTIP</h2>
      <p>Atuando desde 2016 em engenharia de segurança do trabalho, a Previsio realiza o LTIP com qualidade e confiabilidade, com uma equipe de profissionais qualificados pronta para dar todo o suporte necessário.</p>
    `,
    faq: [
      {
        q: 'O que é o LTIP?',
        a: 'É o laudo técnico que analisa as condições de trabalho e determina o grau de insalubridade ou periculosidade das atividades.',
      },
      {
        q: 'Para que serve o LTIP?',
        a: 'Para garantir o direito dos trabalhadores aos adicionais correspondentes, manter a empresa em conformidade com a legislação e reduzir o risco de ações trabalhistas.',
      },
      {
        q: 'O LTIP ajuda a prevenir ações trabalhistas?',
        a: 'Sim. Ao caracterizar corretamente a exposição e manter a documentação em dia, o laudo reduz as chances de litígios.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------------------ PERÍCIAS
  '/pericias-insalubridade-periculosidade': {
    resposta:
      'As perícias de insalubridade e periculosidade são avaliações que verificam se as condições de trabalho expõem os colaboradores a agentes insalubres ou perigosos. Servem para comprovar o cumprimento das normas, embasar a concessão dos adicionais de insalubridade e periculosidade e prevenir passivos trabalhistas, protegendo empresa e trabalhadores.',
    corpo: `
      <h2>O que são as perícias de insalubridade e periculosidade</h2>
      <p>São avaliações fundamentais para garantir a segurança e a saúde dos trabalhadores. Têm como objetivo identificar se as condições de trabalho expõem os colaboradores a agentes insalubres ou perigosos, que possam causar danos à saúde ou acidentes. É por meio dessas perícias que as empresas verificam se estão cumprindo as normas de segurança do trabalho.</p>

      <h2>Para que servem</h2>
      <p>Realizar as perícias traz benefícios como a prevenção de passivos trabalhistas, o cumprimento das normas vigentes e a garantia de um ambiente de trabalho seguro. Os laudos também são essenciais para a concessão dos adicionais de insalubridade e periculosidade, assegurando os direitos dos trabalhadores.</p>

      <h2>A experiência da Previsio</h2>
      <p>Especializada em engenharia de segurança do trabalho desde 2016, a Previsio se destaca na realização de perícias de insalubridade e periculosidade, com uma equipe técnica competente e experiência em diversos ambientes laborais.</p>

      <h2>Como solicitar</h2>
      <p>Se a sua empresa busca garantir a segurança dos colaboradores e a conformidade com as normas, conte com a Previsio para conduzir as perícias e orientar as medidas necessárias.</p>
    `,
    faq: [
      {
        q: 'O que são as perícias de insalubridade e periculosidade?',
        a: 'São avaliações que verificam se as condições de trabalho expõem os colaboradores a agentes insalubres ou perigosos.',
      },
      {
        q: 'Para que servem as perícias?',
        a: 'Para comprovar o cumprimento das normas, embasar a concessão dos adicionais de insalubridade e periculosidade e prevenir passivos trabalhistas.',
      },
      {
        q: 'A Previsio realiza as perícias?',
        a: 'Sim. Realizamos as perícias com equipe técnica experiente e orientamos as medidas necessárias.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ----------------------------------------------------- LTIP (SERVIÇO)
  '/servicos/laudo-de-tecnico-de-insalubridade-e-periculosidade-ltip': {
    resposta:
      'O LTIP é o laudo conclusivo que determina se o trabalhador está exposto a agentes que geram direito aos adicionais de insalubridade ou periculosidade. Junto às avaliações quantitativas e qualitativas, acompanha um plano de ação para mitigar os riscos — tornando o ambiente mais seguro e, quando possível, elidindo a necessidade do pagamento dos adicionais.',
    corpo: `
      <h2>O que é o LTIP</h2>
      <p>Trata-se de um laudo conclusivo para determinar se o trabalhador está exposto, ou não, a agentes que proporcionam o direito aos adicionais de periculosidade ou insalubridade. É o documento que caracteriza, com base técnica, a realidade do posto de trabalho.</p>

      <h2>Avaliações quantitativas e qualitativas</h2>
      <p>O laudo reúne avaliações quantitativas e qualitativas dos agentes presentes no ambiente. Essa combinação dá a medida exata da exposição e sustenta a conclusão do documento.</p>

      <h2>Plano de ação e redução de adicionais</h2>
      <p>Junto ao laudo segue um plano de ação voltado à mitigação dos riscos, com o propósito de tornar o ambiente de trabalho mais seguro e, por sua vez, elidir a necessidade do pagamento desses adicionais quando a exposição é eliminada.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Conduzimos o LTIP unindo a conclusão técnica ao plano de ação, para que a empresa não apenas caracterize a exposição, mas também tenha um caminho concreto de correção.</p>
    `,
    faq: [
      {
        q: 'O que é o LTIP?',
        a: 'É o laudo conclusivo que determina se o trabalhador está exposto a agentes que geram direito aos adicionais de insalubridade ou periculosidade, acompanhado de um plano de ação.',
      },
      {
        q: 'O LTIP pode reduzir os adicionais pagos?',
        a: 'Pode. Além de concluir sobre a exposição, o laudo acompanha um plano de ação para mitigar os riscos; ao eliminar a exposição, é possível elidir a necessidade do pagamento dos adicionais — sempre com base técnica.',
      },
      {
        q: 'O que são as avaliações quantitativas e qualitativas?',
        a: 'São as duas abordagens usadas no laudo para medir e caracterizar a exposição aos agentes de risco do ambiente de trabalho.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ---------------------------------------------------- LTCAT (SERVIÇO)
  '/servicos/laudo-tecnico-das-condicoes-ambientais-do-trabalho-ltcat': {
    resposta:
      'O LTCAT é o demonstrativo das condições do ambiente de trabalho para fins previdenciários. Conforme o Decreto 3.048/99, define perante a Previdência Social quem tem ou não direito à aposentadoria ou pensão especial, e é a base para a emissão do PPP, junto com o PCMSO e o PGR.',
    corpo: `
      <h2>O que é o LTCAT</h2>
      <p>Trata-se de um demonstrativo das condições do ambiente de trabalho para fins previdenciários. É o documento que registra tecnicamente a exposição do trabalhador aos agentes do ambiente, com foco na sua repercussão junto à Previdência.</p>

      <h2>LTCAT e a Previdência Social</h2>
      <p>Conforme o Decreto 3.048/99, o LTCAT define, perante a Previdência Social, quem tem ou não direito à aposentadoria ou pensão especial. É a partir dele que se caracteriza a atividade para esse fim.</p>

      <h2>LTCAT, PPP, PCMSO e PGR</h2>
      <p>O LTCAT é a base para a emissão do PPP (Perfil Profissiográfico Previdenciário), junto com o PCMSO e o PGR. Assim, o laudo se integra ao conjunto de documentos que sustentam a gestão previdenciária e de segurança da empresa.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Elaboramos o LTCAT com o rigor técnico exigido para fins previdenciários, garantindo um documento consistente e alinhado aos demais registros de segurança e saúde da empresa.</p>
    `,
    faq: [
      {
        q: 'O que é o LTCAT?',
        a: 'É o demonstrativo das condições do ambiente de trabalho para fins previdenciários, que registra tecnicamente a exposição do trabalhador aos agentes do ambiente.',
      },
      {
        q: 'Para que serve o LTCAT?',
        a: 'Para fins previdenciários: conforme o Decreto 3.048/99, define perante a Previdência Social quem tem direito à aposentadoria ou pensão especial e serve de base para a emissão do PPP, ao lado do PCMSO e do PGR.',
      },
      {
        q: 'A Previsio elabora o LTCAT?',
        a: 'Sim. Elaboramos o laudo com o rigor técnico exigido, alinhado aos demais registros de segurança e saúde da empresa.',
      },
      RESPALDO,
      REGIAO,
    ],
  },
};
