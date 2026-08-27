/**
 * Conteúdo enriquecido — cluster Emergência (planos de emergência e PPCI).
 *
 * Fontes: o bodyHtml de cada página do site atual, o objetivo geral e
 * incontroverso dos planos de emergência (mapear situações de risco, definir
 * procedimentos e treinamentos) e do PPCI (Plano de Prevenção e Proteção Contra
 * Incêndios — exigência do corpo de bombeiros para alvará) e os termos que o
 * próprio cliente usa. Nada de números, prazos, portarias, NBRs ou cases
 * inventados.
 *
 * Observação: as variações plano de emergência / PIE / PAE / PAE com resgate
 * são de intenção próxima; cada uma recebe texto distinto, ancorado no seu
 * próprio bodyHtml e no ângulo do título.
 */

// NAP do cliente. Reutilizado no fecho das FAQs para manter consistência.
const FAQ_REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Atendemos todo o Brasil a partir de São Leopoldo/RS, com projetos conduzidos em território nacional e no exterior. Fale com a Previsio pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------------------ PILAR
  '/servicos/planos-de-emergencia': {
    resposta:
      'Os planos de emergência mapeiam todas as situações de emergência da empresa e estabelecem os procedimentos e treinamentos para direcionar as ações da forma mais segura. Definem o que fazer em casos de emergências médicas, incêndios, vazamentos ambientais ou outros eventos de risco, protegendo pessoas e patrimônio.',
    corpo: `
      <h2>O que são os planos de emergência</h2>
      <p>Os planos de emergência têm por finalidade mapear todas as situações de emergência da empresa e estabelecer procedimentos e treinamentos que direcionem as ações da forma mais segura. Eles definem, com antecedência, o que fazer em casos de emergências médicas, incêndios, vazamentos ambientais ou outros eventos de risco.</p>
      <p>Preparar-se antes é o que separa uma resposta rápida e organizada do improviso em um momento crítico.</p>

      <h2>Soluções de emergência da Previsio</h2>
      <p>Reunimos o escopo de resposta a emergências sob o mesmo fornecedor:</p>
      <ul>
        <li><strong>Plano de emergência</strong> — medidas preventivas e procedimentos para situações de risco;</li>
        <li><strong>Plano de ação de emergência (PAE)</strong> — diretrizes e procedimentos para resposta rápida, inclusive resgate;</li>
        <li><strong>PPCI</strong> — Plano de Prevenção e Proteção Contra Incêndios, para regularização junto ao corpo de bombeiros;</li>
        <li><strong>Laudos de proteção contra incêndios</strong> — verificação da conformidade dos sistemas de prevenção e combate.</li>
      </ul>

      <h2>Por que trabalhar com a Previsio</h2>
      <p>Somos uma empresa gaúcha de Engenharia de Segurança do Trabalho, sediada em São Leopoldo/RS. Elaboramos, implantamos e treinamos as equipes para os planos de emergência, adaptando cada solução às particularidades do ambiente de trabalho.</p>
      <p>Conheça abaixo cada serviço do escopo de emergência — do plano de emergência ao PPCI:</p>
    `,
    faq: [
      {
        q: 'O que é um plano de emergência?',
        a: 'É o conjunto de medidas e procedimentos que mapeia as situações de emergência da empresa e estabelece o que fazer em cada uma — emergências médicas, incêndios, vazamentos ambientais e outros eventos de risco.',
      },
      {
        q: 'O plano de emergência é obrigatório?',
        a: 'A preparação para emergências é uma exigência das normas de segurança do trabalho. O plano organiza os procedimentos e os treinamentos que protegem pessoas e patrimônio em situações de risco.',
      },
      {
        q: 'A Previsio elabora, implanta e treina as equipes?',
        a: 'Sim. Atuamos na elaboração, na implantação e no treinamento das equipes para os planos de emergência, com soluções adaptadas a cada ambiente de trabalho.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------------------- PLANO DE EMERGÊNCIA
  '/plano-emergencia': {
    resposta:
      'O plano de emergência é um conjunto de medidas preventivas e procedimentos a serem seguidos em casos de acidentes ou situações de risco. Tem como objetivo minimizar danos, proteger vidas e patrimônio e garantir a continuidade das atividades, envolvendo a identificação de ameaças, a definição de responsabilidades e treinamentos periódicos.',
    corpo: `
      <h2>O que é um plano de emergência</h2>
      <p>O plano de emergência consiste em um conjunto de medidas preventivas e procedimentos a serem seguidos em casos de acidentes ou situações de risco. Seu objetivo principal é minimizar danos, proteger vidas e patrimônio e garantir a continuidade das atividades da empresa.</p>

      <h2>O que um bom plano envolve</h2>
      <p>Um plano de emergência bem elaborado vai além do documento e organiza a resposta da empresa a partir de várias frentes:</p>
      <ul>
        <li>Identificação de potenciais ameaças;</li>
        <li>Definição de responsabilidades;</li>
        <li>Treinamentos periódicos com a equipe;</li>
        <li>Manutenção constante do plano, para ajustes e melhorias.</li>
      </ul>

      <h2>Vantagens de implementar um plano de emergência</h2>
      <ul>
        <li>Maior segurança para colaboradores e visitantes;</li>
        <li>Resposta rápida a situações de risco, minimizando danos;</li>
        <li>Conformidade com normas e legislações trabalhistas;</li>
        <li>Redução de custos decorrentes de acidentes;</li>
        <li>Proteção da imagem e da reputação da empresa.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que compõe um plano de emergência?',
        a: 'Medidas preventivas e procedimentos para situações de risco, a identificação das ameaças, a definição de responsabilidades, treinamentos periódicos com a equipe e a manutenção constante do plano.',
      },
      {
        q: 'O plano de emergência é obrigatório?',
        a: 'A preparação para emergências integra as exigências das normas e legislações de segurança do trabalho. O plano é o que garante uma resposta organizada, protegendo vidas e patrimônio.',
      },
      {
        q: 'A Previsio desenvolve o plano sob medida?',
        a: 'Sim. Desenvolvemos planos de emergência personalizados, considerando as particularidades de cada ambiente de trabalho, com equipe qualificada em segurança do trabalho.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------------------------- PIE
  // /pie foi reclassificado para o cluster NR-10 (Prontuário de Instalações
  // Elétricas) por confirmação do cliente (PIE = Prontuário; PAE = Plano de Ação
  // de Emergência). Conteúdo agora em clusters/nr-10-pie.mjs.

  // --------------------------------------------------- PLANO DE AÇÃO DE EMERGÊNCIA (PAE)
  '/plano-acao-emergencia-pae': {
    resposta:
      'O Plano de Ação de Emergência (PAE) é um conjunto de diretrizes e procedimentos a serem seguidos em casos de emergência, como incêndios, vazamentos ou desastres naturais. Visa minimizar riscos, proteger pessoas e instalações e garantir uma resposta rápida e eficaz diante de situações críticas.',
    corpo: `
      <h2>O que é o Plano de Ação de Emergência (PAE)</h2>
      <p>O Plano de Ação de Emergência (PAE) consiste em um conjunto de diretrizes e procedimentos a serem seguidos em casos de emergência, como incêndios, vazamentos ou desastres naturais. Ele visa minimizar os riscos, proteger as pessoas e as instalações e garantir uma resposta rápida e eficaz diante de situações críticas.</p>

      <h2>Vantagens de implementar o PAE</h2>
      <p>A implementação do PAE traz benefícios diretos para a empresa:</p>
      <ul>
        <li>Cumprimento das normas regulamentadoras;</li>
        <li>Proteção da vida e da integridade física dos colaboradores;</li>
        <li>Redução de danos materiais;</li>
        <li>Melhoria da capacidade de resposta em situações de crise.</li>
      </ul>

      <h2>Como a Previsio conduz o PAE</h2>
      <p>A Previsio oferece serviços especializados na elaboração, implantação e treinamento de equipes para o Plano de Ação de Emergência. Com equipe qualificada e experiente, garantimos a adequação do plano às necessidades de cada cliente, proporcionando mais segurança e tranquilidade em situações de emergência.</p>
    `,
    faq: [
      {
        q: 'O que é o Plano de Ação de Emergência (PAE)?',
        a: 'É o conjunto de diretrizes e procedimentos a serem seguidos em casos de emergência — incêndios, vazamentos ou desastres naturais —, com foco em minimizar riscos e garantir uma resposta rápida e eficaz.',
      },
      {
        q: 'O PAE é obrigatório?',
        a: 'A implementação do PAE contribui para o cumprimento das normas regulamentadoras de segurança do trabalho, protegendo a vida dos colaboradores e reduzindo danos materiais em situações de crise.',
      },
      {
        q: 'A Previsio elabora e implanta o PAE?',
        a: 'Sim. Atuamos na elaboração, na implantação e no treinamento das equipes para o Plano de Ação de Emergência, com o plano adaptado às necessidades de cada cliente.',
      },
      FAQ_REGIAO,
    ],
  },

  // ----------------------------------------- PLANO DE AÇÃO DE EMERGÊNCIA E RESGATE
  '/plano-acao-emergencia-resgate': {
    resposta:
      'O plano de ação de emergência e resgate reúne as medidas para proteger e socorrer pessoas em momentos críticos. Inclui treinamentos de evacuação, identificação de rotas de fuga, definição de pontos de encontro e procedimentos claros para o resgate de pessoas em perigo, garantindo segurança em situações de risco.',
    corpo: `
      <h2>O que é o plano de ação de emergência e resgate</h2>
      <p>O plano de ação de emergência e resgate é o instrumento que garante a proteção e o bem-estar dos colaboradores em momentos críticos. Além de organizar a resposta à emergência, ele estrutura o socorro às pessoas — o que exige conhecimento técnico e ações precisas, planejadas de forma estratégica.</p>

      <h2>O que o plano inclui</h2>
      <p>A preparação para emergências ganha corpo em medidas concretas:</p>
      <ul>
        <li>Treinamentos de evacuação;</li>
        <li>Identificação de rotas de fuga;</li>
        <li>Definição de pontos de encontro;</li>
        <li>Procedimentos claros para o resgate de pessoas em perigo.</li>
      </ul>

      <h2>Benefícios de um plano bem estruturado</h2>
      <p>Além de cumprir as obrigações legais, o plano protege os colaboradores em situações de risco, reduz danos materiais, preserva a imagem institucional e minimiza impactos negativos no ambiente de trabalho. A Previsio oferece suporte completo na elaboração e na implementação, garantindo que as normas e exigências legais sejam atendidas.</p>
    `,
    faq: [
      {
        q: 'O que diferencia o plano com resgate de um plano de emergência comum?',
        a: 'Além dos procedimentos de resposta à emergência, este plano estrutura o socorro às pessoas, com treinamentos de evacuação, rotas de fuga, pontos de encontro e procedimentos claros para o resgate de quem está em perigo.',
      },
      {
        q: 'O plano de ação de emergência e resgate é obrigatório?',
        a: 'A preparação e a resposta a emergências integram as exigências legais de segurança do trabalho. O plano organiza a evacuação e o resgate, protegendo os colaboradores em situações de risco.',
      },
      {
        q: 'A Previsio elabora e implementa o plano?',
        a: 'Sim. Oferecemos suporte completo na elaboração e na implementação de planos de ação de emergência e resgate sob medida, com equipe qualificada em segurança do trabalho.',
      },
      FAQ_REGIAO,
    ],
  },

  // --------------------------------------------------------------------- PPCI (PLANO)
  '/servicos/plano-de-prevencao-e-protecao-contra-incendios-ppci': {
    resposta:
      'O PPCI — Plano de Prevenção e Proteção Contra Incêndios — é um conjunto de ações e documentos elaborados para edificações de ocupação coletiva, com o objetivo de prevenir e combater incêndios. É uma exigência do corpo de bombeiros para a liberação do alvará, e a Previsio assessora o processo do início ao fim.',
    corpo: `
      <h2>O que é o PPCI</h2>
      <p>O PPCI — Plano de Prevenção e Proteção Contra Incêndios — é um conjunto de ações e documentos elaborados para edificações de ocupação coletiva, com o objetivo de prevenir e combater situações de incêndio. Trata-se de uma exigência do corpo de bombeiros para a liberação do alvará.</p>

      <h2>Por que o PPCI é necessário</h2>
      <p>Sem o PPCI aprovado, a edificação de ocupação coletiva não obtém o alvará junto ao corpo de bombeiros. Mais do que um documento, o plano estrutura as medidas de prevenção e combate a incêndio que protegem as pessoas e o patrimônio que ocupam o local.</p>

      <h2>Assessoria do início ao fim</h2>
      <p>A Previsio assessora o processo do início ao fim, até que a efetiva regularização ocorra. Acompanhamos a elaboração dos documentos e as etapas junto ao corpo de bombeiros, para que a edificação chegue ao alvará com segurança e sem retrabalho.</p>
    `,
    faq: [
      {
        q: 'O que é o PPCI?',
        a: 'É o Plano de Prevenção e Proteção Contra Incêndios: um conjunto de ações e documentos para edificações de ocupação coletiva, voltado a prevenir e combater incêndios, exigido pelo corpo de bombeiros.',
      },
      {
        q: 'O PPCI é obrigatório?',
        a: 'Sim. O PPCI é uma exigência do corpo de bombeiros para a liberação do alvará de edificações de ocupação coletiva.',
      },
      {
        q: 'A Previsio acompanha todo o processo até o alvará?',
        a: 'Sim. Assessoramos o processo do início ao fim, até que a efetiva regularização ocorra, acompanhando a documentação e as etapas junto ao corpo de bombeiros.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------ LAUDOS PPCI (PROTEÇÃO INCÊNDIOS)
  '/laudos-protecao-incendios-ppci': {
    resposta:
      'Os laudos de proteção contra incêndios (PPCI) avaliam se as medidas de prevenção e combate a incêndios de uma edificação estão de acordo com as normas vigentes. A partir de uma análise detalhada das instalações, identificam riscos e propõem medidas corretivas, garantindo o cumprimento das regulamentações e a proteção de pessoas e patrimônio.',
    corpo: `
      <h2>O que são os laudos de proteção contra incêndios (PPCI)</h2>
      <p>Os laudos de proteção contra incêndios (PPCI) são essenciais para garantir a segurança das instalações e a integridade dos colaboradores em casos de emergência. Eles avaliam se as medidas de prevenção e combate a incêndios estão de acordo com as normas vigentes, assegurando o cumprimento das regulamentações e a proteção do patrimônio e das vidas presentes no local.</p>

      <h2>Como o laudo é elaborado</h2>
      <p>A elaboração do laudo envolve uma análise detalhada das instalações, identificando possíveis riscos e propondo medidas corretivas para garantir a segurança do ambiente. É um trabalho que exige profissionais especializados em engenharia de segurança do trabalho.</p>

      <h2>Por que manter os laudos em dia</h2>
      <p>Manter as instalações em conformidade com as normas de segurança contra incêndios é fundamental para evitar acidentes, prejuízos financeiros e possíveis penalizações legais. O laudo assegura que os sistemas de prevenção e combate estejam funcionando adequadamente, protegendo todos que frequentam o local.</p>
    `,
    faq: [
      {
        q: 'O que verifica um laudo de proteção contra incêndios?',
        a: 'O laudo avalia se as medidas de prevenção e combate a incêndios da edificação estão de acordo com as normas vigentes, a partir de uma análise detalhada das instalações, e propõe medidas corretivas quando necessário.',
      },
      {
        q: 'Qual a diferença entre o laudo e o PPCI?',
        a: 'O PPCI é o plano completo — ações e documentos exigidos pelo corpo de bombeiros para o alvará. O laudo verifica se os sistemas de prevenção e combate estão em conformidade com as normas e funcionando adequadamente.',
      },
      {
        q: 'A Previsio elabora esses laudos?',
        a: 'Sim. Elaboramos os laudos de proteção contra incêndios com profissionais especializados em engenharia de segurança do trabalho, avaliando as instalações e propondo as medidas necessárias.',
      },
      FAQ_REGIAO,
    ],
  },
};
