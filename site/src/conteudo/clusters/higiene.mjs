/**
 * Conteúdo enriquecido — cluster HIGIENE OCUPACIONAL (conforto térmico,
 * ventilação/exaustão, medição ambiental, conservação auditiva e treinamentos).
 *
 * Fontes: exclusivamente o bodyHtml de cada página e os nomes/objetivos gerais
 * já usados pelo cliente (PCA = Programa de Conservação Auditiva; PAIR = Perda
 * Auditiva Induzida pelo Ruído; NR-17 para conforto). Sem números, prazos, cases
 * ou normas inventadas. Cada página tem texto próprio conforme sua intenção.
 *
 * NAP: (51) 3466-9601 · São Leopoldo/RS · atendimento nacional.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Sim. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional — e também no exterior. Fale com a gente pelo (51) 3466-9601.',
};

export default {
  // -------------------------------------------------- LAUDO CONFORTO TÉRMICO
  '/laudo-conforto-termico': {
    resposta:
      'O laudo de conforto térmico avalia as condições de temperatura, umidade e ventilação do ambiente de trabalho para verificar se oferecem conforto e segurança aos colaboradores. Relacionado à NR-17, identifica problemas que afetam a saúde e a produtividade e embasa medidas de correção, promovendo a saúde ocupacional e a conformidade legal.',
    corpo: `
      <h2>O que é o laudo de conforto térmico</h2>
      <p>O laudo de conforto térmico é uma ferramenta fundamental para garantir o bem-estar e a saúde dos trabalhadores. Por meio da avaliação criteriosa das condições de temperatura, umidade e ventilação, ele identifica os problemas que possam comprometer o conforto e a segurança da equipe no ambiente laboral.</p>

      <h2>Por que ele importa: a NR-17</h2>
      <p>Realizar o laudo traz vantagens diretas: promove a saúde ocupacional, apoia o cumprimento das normas regulamentadoras — como a NR-17 — e previne impactos negativos na produtividade. O resultado é um ambiente de trabalho mais seguro e confortável, com reflexo na qualidade de vida dos colaboradores.</p>

      <h2>Laudo e projeto: o que muda</h2>
      <p>O laudo avalia e documenta as condições térmicas existentes. Quando é preciso intervir para corrigir essas condições, o caminho é o projeto de conforto térmico, que define as soluções de engenharia adequadas.</p>

      <h2>Como a Previsio elabora</h2>
      <p>Especializada em engenharia de segurança do trabalho, a Previsio conta com equipe qualificada para a elaboração do laudo de conforto térmico e demais serviços relacionados à segurança no ambiente de trabalho, com atenção à precisão técnica em cada etapa.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de conforto térmico?',
        a: 'É o documento que avalia temperatura, umidade e ventilação do ambiente de trabalho para verificar se oferecem conforto e segurança aos colaboradores.',
      },
      {
        q: 'O laudo de conforto térmico tem relação com a NR-17?',
        a: 'Sim. A NR-17 trata das condições de conforto no trabalho, incluindo aspectos térmicos; o laudo é o instrumento que avalia se essas condições são atendidas.',
      },
      {
        q: 'Qual a diferença entre o laudo e o projeto de conforto térmico?',
        a: 'O laudo avalia e documenta as condições térmicas existentes; o projeto define as soluções de engenharia para corrigi-las.',
      },
      {
        q: 'A Previsio elabora o laudo?',
        a: 'Sim. Nossa equipe realiza a avaliação e emite o laudo de conforto térmico com precisão técnica.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------- MEDIÇÃO AMBIENTAL
  '/medicao-ambiental': {
    resposta:
      'A medição ambiental avalia as condições do ambiente de trabalho, monitorando fatores como ruído, exposição a agentes químicos e outros contaminantes. Permite identificar áreas de risco e embasar ações corretivas e preventivas, contribuindo para a saúde dos colaboradores, para melhores condições de trabalho e para a conformidade com as normas vigentes.',
    corpo: `
      <h2>O que é a medição ambiental</h2>
      <p>A medição ambiental é o processo de análise e avaliação das condições do ambiente de trabalho, monitorando fatores como níveis de ruído, exposição a agentes químicos e outros contaminantes. É fundamental para empresas que desejam garantir a segurança e a saúde de seus colaboradores e cumprir as normas vigentes.</p>

      <h2>Por que medir o ambiente</h2>
      <p>A medição permite identificar áreas de risco, o que orienta a implementação de ações corretivas e preventivas. Além de melhorar as condições de trabalho, ajuda a garantir o cumprimento das normas e a evitar multas e sanções decorrentes do descumprimento das regulamentações.</p>

      <h2>Como a Previsio atua</h2>
      <p>Especializada em engenharia de segurança do trabalho e automação industrial, a Previsio oferece serviços para auxiliar as empresas na realização da medição ambiental e na adequação às normas. A atuação é personalizada, ajustada às necessidades específicas de cada cliente.</p>

      <h2>Da medição às adequações</h2>
      <p>Os resultados da medição orientam as próximas etapas — de ajustes no ambiente a documentações e adequações. Com foco na segurança e na excelência operacional, o objetivo é entregar ambientes de trabalho seguros e em conformidade com a legislação.</p>
    `,
    faq: [
      {
        q: 'O que é medição ambiental?',
        a: 'É a análise das condições do ambiente de trabalho — como ruído, agentes químicos e outros contaminantes — para identificar áreas de risco e orientar ações corretivas.',
      },
      {
        q: 'Para que serve a medição ambiental?',
        a: 'Para identificar riscos, embasar medidas preventivas e corretivas e garantir o cumprimento das normas, evitando multas e sanções.',
      },
      {
        q: 'A Previsio realiza medição ambiental?',
        a: 'Sim. Realizamos a medição e orientamos as adequações necessárias, de forma personalizada para cada cliente.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------------- PCA
  '/programa-conservacao-auditiva-pca': {
    resposta:
      'O Programa de Conservação Auditiva (PCA) reúne as medidas preventivas que protegem a audição dos trabalhadores expostos a ruído. Evita a perda auditiva causada pela exposição prolongada a níveis elevados, mantém a empresa em conformidade com as normas e demonstra o compromisso com a saúde dos colaboradores.',
    corpo: `
      <h2>O que é o Programa de Conservação Auditiva (PCA)</h2>
      <p>O PCA é um conjunto de medidas preventivas adotadas pelas empresas para proteger a audição dos trabalhadores expostos a ruído. O programa busca evitar os danos à audição causados pela exposição prolongada a níveis elevados, preservando a saúde auditiva da equipe.</p>

      <h2>Importância do PCA</h2>
      <p>Implementar o PCA é essencial para garantir a segurança e o bem-estar dos funcionários. Além de cumprir as normas regulamentadoras, as empresas que adotam o programa demonstram preocupação com a saúde dos trabalhadores e promovem um ambiente de trabalho mais saudável e seguro.</p>

      <h2>Benefícios do programa</h2>
      <p>Entre os benefícios estão a prevenção de doenças auditivas ocupacionais, o cumprimento das normas de segurança do trabalho, a redução de riscos relacionados à perda auditiva e a valorização dos colaboradores. A implementação do PCA também ajuda a evitar processos judiciais e multas por descumprimento da legislação.</p>

      <h2>Como a Previsio pode ajudar</h2>
      <p>Com equipe técnica qualificada, a Previsio oferece consultoria e assessoria para a implantação do programa. Auxiliamos na elaboração das medidas preventivas, nas estratégias de controle de ruído e nas orientações para proteger a audição dos trabalhadores.</p>
    `,
    faq: [
      {
        q: 'O que é o PCA?',
        a: 'É o Programa de Conservação Auditiva: o conjunto de medidas preventivas que protege a audição dos trabalhadores expostos a ruído.',
      },
      {
        q: 'Por que implementar o PCA?',
        a: 'Para prevenir doenças auditivas ocupacionais, cumprir as normas de segurança e evitar processos judiciais e multas por descumprimento da legislação.',
      },
      {
        q: 'A Previsio implanta o PCA?',
        a: 'Sim. Oferecemos consultoria e assessoria para a implantação do programa, com medidas preventivas e estratégias de controle de ruído.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------- PROJETO CONFORTO TÉRMICO
  '/projeto-conforto-termico': {
    resposta:
      'O projeto de conforto térmico é a solução de engenharia que garante temperatura e ventilação adequadas nos ambientes de trabalho. Diferente do laudo, que avalia, o projeto define as intervenções necessárias para prevenir desconfortos e problemas de saúde ligados ao calor ou frio excessivos, promovendo um ambiente mais saudável e produtivo.',
    corpo: `
      <h2>O que é o projeto de conforto térmico</h2>
      <p>O projeto de conforto térmico é uma solução fundamental para garantir condições ideais de temperatura e ventilação nos ambientes de trabalho. É uma medida essencial para prevenir desconfortos e problemas de saúde relacionados ao calor ou ao frio excessivos, promovendo um ambiente saudável e seguro.</p>

      <h2>Vantagens de implementar um projeto de conforto térmico</h2>
      <ul>
        <li>Melhoria na qualidade de vida e no bem-estar dos funcionários;</li>
        <li>Aumento da produtividade e do desempenho dos colaboradores;</li>
        <li>Redução do absenteísmo e de problemas de saúde relacionados ao clima;</li>
        <li>Cumprimento das normas de segurança e saúde ocupacional vigentes;</li>
        <li>Ambiente de trabalho mais agradável e acolhedor.</li>
      </ul>

      <h2>Laudo e projeto de conforto térmico</h2>
      <p>Enquanto o laudo avalia e documenta as condições térmicas existentes, o projeto vai além: define as soluções de engenharia para corrigir os problemas identificados e alcançar o conforto adequado.</p>

      <h2>Como a Previsio desenvolve</h2>
      <p>Especializada em engenharia de segurança do trabalho e automação industrial, a Previsio desenvolve projetos personalizados de acordo com as necessidades de cada cliente, com equipe qualificada e compromisso com a segurança e o bem-estar dos colaboradores.</p>
    `,
    faq: [
      {
        q: 'O que é o projeto de conforto térmico?',
        a: 'É a solução de engenharia que garante temperatura e ventilação adequadas nos ambientes de trabalho, prevenindo desconfortos e problemas de saúde ligados ao calor ou ao frio.',
      },
      {
        q: 'Qual a diferença entre o projeto e o laudo de conforto térmico?',
        a: 'O laudo avalia e documenta as condições existentes; o projeto define as soluções de engenharia para corrigi-las.',
      },
      {
        q: 'A Previsio desenvolve o projeto?',
        a: 'Sim. Desenvolvemos projetos personalizados de acordo com as necessidades de cada cliente.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------ PROJETO SISTEMA DE EXAUSTÃO
  '/projeto-sistema-exaustao': {
    resposta:
      'O projeto de sistema de exaustão remove do ar as substâncias nocivas geradas no processo industrial — poeiras, fumos e vapores — captando os contaminantes e melhorando a qualidade do ar. Reduz o risco de doenças respiratórias, mantém a empresa em conformidade com as normas de segurança e torna o ambiente de trabalho mais saudável.',
    corpo: `
      <h2>O que é o projeto de sistema de exaustão</h2>
      <p>Em ambientes industriais, a qualidade do ar é essencial para a saúde e a segurança dos trabalhadores. O projeto de sistema de exaustão cumpre papel fundamental ao remover as substâncias nocivas presentes no ar, contribuindo para um ambiente de trabalho mais saudável e seguro.</p>

      <h2>Benefícios de investir em um sistema de exaustão</h2>
      <ul>
        <li>Redução de riscos à saúde: elimina substâncias prejudiciais, prevenindo doenças respiratórias e intoxicações;</li>
        <li>Conformidade com as normas de segurança, evitando multas e penalidades;</li>
        <li>Melhoria do ambiente de trabalho, com ar de melhor qualidade e mais conforto;</li>
        <li>Proteção do patrimônio, com menor presença de partículas nocivas nas instalações e equipamentos;</li>
        <li>Sustentabilidade, com práticas mais eficientes e responsáveis.</li>
      </ul>

      <h2>Por que contar com consultoria especializada</h2>
      <p>Para garantir a eficácia do sistema, é fundamental contar com uma empresa especializada. A Previsio desenvolve soluções personalizadas, atendendo às necessidades específicas de cada cliente e mantendo o projeto adequado às legislações e normas vigentes.</p>

      <h2>Exaustão e ventilação</h2>
      <p>A exaustão atua na remoção dos contaminantes gerados no processo; a ventilação atua na renovação do ar e no controle da temperatura. Muitas vezes as duas soluções se complementam, e indicamos a combinação adequada para o seu ambiente.</p>
    `,
    faq: [
      {
        q: 'O que é o projeto de sistema de exaustão?',
        a: 'É a solução de engenharia que remove do ar as substâncias nocivas geradas no processo — poeiras, fumos e vapores — melhorando a qualidade do ar do ambiente de trabalho.',
      },
      {
        q: 'Qual a diferença entre exaustão e ventilação?',
        a: 'A exaustão remove os contaminantes gerados no processo; a ventilação renova o ar e controla a temperatura. As duas soluções frequentemente se complementam.',
      },
      {
        q: 'A Previsio desenvolve o projeto?',
        a: 'Sim. Desenvolvemos o projeto de sistema de exaustão de forma personalizada, adequado às normas vigentes.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------- PROJETO SISTEMA DE VENTILAÇÃO
  '/projeto-sistema-ventilacao': {
    resposta:
      'O projeto de sistema de ventilação controla a temperatura e a qualidade do ar em ambientes fechados, renovando o ar e reduzindo o acúmulo de agentes poluentes. Previne problemas respiratórios e térmicos, promove conforto e segurança aos trabalhadores e mantém a empresa em conformidade com as normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o projeto de sistema de ventilação</h2>
      <p>A ventilação é uma solução essencial, principalmente em ambientes fechados, para controlar a temperatura e garantir a qualidade do ar nos locais de trabalho. Um sistema adequado previne problemas respiratórios e térmicos, proporcionando um ambiente mais saudável e confortável para os colaboradores.</p>

      <h2>Vantagens de implementar um sistema de ventilação</h2>
      <ul>
        <li>Controle da temperatura e da umidade do ar;</li>
        <li>Redução do acúmulo de agentes poluentes e contaminantes;</li>
        <li>Prevenção de doenças respiratórias e alergias;</li>
        <li>Melhoria na qualidade do ar interno;</li>
        <li>Conformidade com as normas de segurança do trabalho.</li>
      </ul>

      <h2>Importância para as empresas</h2>
      <p>Ambientes bem ventilados promovem conforto e bem-estar, fatores essenciais para o desempenho das atividades. Além de cumprir as normas regulamentadoras, a ventilação adequada contribui para o aumento da produtividade e da satisfação dos colaboradores.</p>

      <h2>Ventilação e exaustão</h2>
      <p>A ventilação atua na renovação do ar e no controle da temperatura; a exaustão atua na remoção dos contaminantes gerados no processo. Analisamos o seu ambiente e indicamos a solução adequada — muitas vezes, a combinação das duas.</p>

      <h2>Como a Previsio desenvolve</h2>
      <p>Com ampla experiência na elaboração e execução de projetos, a Previsio oferece soluções personalizadas para atender às necessidades específicas de cada cliente, sempre em conformidade com as normas vigentes.</p>
    `,
    faq: [
      {
        q: 'O que é o projeto de sistema de ventilação?',
        a: 'É a solução de engenharia que controla a temperatura e a qualidade do ar em ambientes fechados, renovando o ar e reduzindo o acúmulo de poluentes.',
      },
      {
        q: 'Qual a diferença entre ventilação e exaustão?',
        a: 'A ventilação renova o ar e controla a temperatura; a exaustão remove os contaminantes gerados no processo. As duas soluções costumam se complementar.',
      },
      {
        q: 'A Previsio desenvolve o projeto?',
        a: 'Sim. Elaboramos e executamos projetos de ventilação de forma personalizada, adequados às normas vigentes.',
      },
      REGIAO,
    ],
  },

  // --------------------------------------------------------- PCA (SERVIÇO)
  '/servicos/programa-de-conservacao-auditiva-pca': {
    resposta:
      'O Programa de Conservação Auditiva (PCA) é o acompanhamento que monitora a saúde auditiva do trabalhador para prevenir a PAIR — Perda Auditiva Induzida pelo Ruído. Identifica perdas auditivas de forma precoce, permite ao empregador adotar medidas adicionais e constrói um histórico técnico que protege a empresa em demandas trabalhistas e previdenciárias.',
    corpo: `
      <h2>O que é o PCA</h2>
      <p>O Programa de Conservação Auditiva é essencial para monitorar a saúde do trabalhador, prevenindo a PAIR — Perda Auditiva Induzida pelo Ruído. O acompanhamento identifica perdas auditivas ao longo do tempo, permitindo agir antes que o dano avance.</p>

      <h2>Prevenção da PAIR</h2>
      <p>Ao acompanhar a audição da equipe exposta a ruído, o programa cria as condições para prevenir a perda auditiva ocupacional e orientar as medidas de proteção adequadas a cada situação.</p>

      <h2>Histórico técnico e proteção jurídica</h2>
      <p>O monitoramento permite ao empregador adotar medidas adicionais e gera um histórico técnico que blinda a empresa diante de futuras demandas trabalhistas ou previdenciárias — um registro que comprova o cuidado com a saúde auditiva.</p>

      <h2>Como a Previsio conduz</h2>
      <p>Conduzimos o acompanhamento com foco na prevenção e no registro consistente, apoiando a empresa na tomada de decisão e no cumprimento das boas práticas de segurança do trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é o PCA?',
        a: 'É o Programa de Conservação Auditiva, o acompanhamento que monitora a saúde auditiva do trabalhador para prevenir a Perda Auditiva Induzida pelo Ruído (PAIR).',
      },
      {
        q: 'O que é a PAIR?',
        a: 'PAIR é a sigla de Perda Auditiva Induzida pelo Ruído — o dano à audição causado pela exposição prolongada a ruído no trabalho, que o PCA busca prevenir.',
      },
      {
        q: 'A Previsio conduz o acompanhamento?',
        a: 'Sim. Monitoramos a saúde auditiva, orientamos medidas adicionais e mantemos o histórico técnico que protege a empresa.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------------- TREINAMENTO CALOR
  '/treinamento-calor': {
    resposta:
      'O treinamento de calor conscientiza os trabalhadores sobre os riscos do calor excessivo em ambientes como fábricas e obras e ensina como se proteger da desidratação e da insolação. Reduz acidentes e afastamentos por problemas de saúde ligados ao calor e ajuda a empresa a manter um ambiente de trabalho seguro.',
    corpo: `
      <h2>O que é o treinamento de calor</h2>
      <p>O treinamento de calor é essencial para conscientizar os trabalhadores sobre os riscos associados ao calor excessivo no ambiente de trabalho. Em locais quentes, como fábricas e obras, os colaboradores ficam suscetíveis a problemas de saúde como a desidratação e a insolação.</p>

      <h2>Riscos do calor no trabalho</h2>
      <p>A exposição ao calor excessivo pode causar desde mal-estar até quadros graves de saúde. Por isso é fundamental que as empresas ofereçam treinamentos específicos, orientando a equipe sobre como se proteger e como reconhecer os sinais de alerta.</p>

      <h2>Benefícios do treinamento</h2>
      <p>Com orientações sobre como se proteger do calor, os colaboradores desempenham suas funções com mais segurança e bem-estar. Isso contribui para a redução do número de acidentes e de afastamentos por problemas de saúde relacionados ao calor.</p>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio oferece um serviço completo de treinamento de calor para empresas de diversos segmentos, com conteúdo ajustado à realidade de cada operação e foco na segurança da equipe.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de calor?',
        a: 'É a capacitação que conscientiza os trabalhadores sobre os riscos do calor excessivo e ensina como se proteger da desidratação e da insolação.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para equipes que atuam em ambientes quentes, como fábricas e obras, onde a exposição ao calor exige medidas de proteção.',
      },
      {
        q: 'A Previsio ministra o treinamento?',
        a: 'Sim. Oferecemos o treinamento de calor para empresas de diversos segmentos, com conteúdo ajustado à realidade de cada operação.',
      },
      REGIAO,
    ],
  },

  // --------------------------------------------- TREINAMENTO CONFORTO TÉRMICO
  '/treinamento-conforto-termico': {
    resposta:
      'O treinamento de conforto térmico capacita os colaboradores a lidar com ambientes de calor ou frio excessivos, identificando situações de risco e adotando medidas preventivas. Voltado a locais com variações térmicas, contribui para a saúde e a produtividade da equipe e reforça o cumprimento das normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o treinamento de conforto térmico</h2>
      <p>O treinamento de conforto térmico é uma prática essencial no ambiente de trabalho, com o objetivo de garantir que os colaboradores estejam em condições adequadas de temperatura e ventilação, evitando desconfortos e problemas de saúde decorrentes do calor ou do frio excessivos. É especialmente relevante em locais com variações térmicas extremas.</p>

      <h2>Benefícios do treinamento</h2>
      <p>Ao garantir condições térmicas adequadas, as empresas contribuem para o aumento da produtividade, a redução do absenteísmo e a melhoria do clima organizacional. Investir no conforto térmico também demonstra compromisso com a saúde e a segurança dos funcionários.</p>

      <h2>Prevenção no ambiente de trabalho</h2>
      <p>O treinamento capacita os trabalhadores a identificar situações de risco, adotar medidas preventivas e utilizar os equipamentos de proteção individual adequados. Dessa forma, a empresa assegura o cumprimento das normas de segurança e preserva a integridade física e mental da equipe.</p>

      <h2>Por que escolher a Previsio</h2>
      <p>Com equipe qualificada, a Previsio oferece treinamentos personalizados de acordo com as necessidades de cada empresa, com suporte contínuo e atendimento próximo.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de conforto térmico?',
        a: 'É a capacitação que prepara os colaboradores para lidar com ambientes de temperatura extrema, identificando riscos e adotando medidas preventivas.',
      },
      {
        q: 'O treinamento cobre calor e frio?',
        a: 'Sim. O treinamento de conforto térmico aborda ambientes com temperaturas extremas, tanto de calor quanto de frio; para focos específicos, oferecemos também o treinamento de calor e o treinamento de frio.',
      },
      {
        q: 'O treinamento é personalizado?',
        a: 'Sim. O conteúdo é ajustado às necessidades e à realidade das atividades de cada empresa.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------------- TREINAMENTO FRIO
  '/treinamento-frio': {
    resposta:
      'O treinamento de frio prepara os trabalhadores que atuam em baixas temperaturas — como câmaras frigoríficas ou áreas externas no inverno — para prevenir hipotermia, congelamento e outros problemas ligados ao frio. Ensina o uso correto de proteção térmica e medidas preventivas, reduzindo acidentes e doenças ocupacionais.',
    corpo: `
      <h2>O que é o treinamento de frio</h2>
      <p>O treinamento de frio é essencial para garantir a segurança dos trabalhadores que atuam em ambientes com baixas temperaturas. Em locais como câmaras frigoríficas ou áreas externas durante o inverno, os riscos de doenças relacionadas ao frio, como hipotermia e congelamento, podem ser significativos.</p>

      <h2>Riscos do frio no trabalho</h2>
      <p>A exposição a baixas temperaturas exige cuidados específicos. Por isso, as empresas devem investir em treinamentos que orientem os colaboradores sobre como se proteger e como reconhecer os sinais de alerta de problemas relacionados ao frio.</p>

      <h2>Como o treinamento previne acidentes</h2>
      <p>O treinamento capacita os trabalhadores a identificar os sinais de alerta e ensina medidas preventivas: o uso adequado de equipamentos de proteção térmica, a importância da hidratação e da alimentação adequada e estratégias para manter a temperatura corporal estável.</p>

      <h2>Por que escolher a Previsio</h2>
      <p>A Previsio oferece treinamentos personalizados e adaptados às necessidades específicas de cada cliente, com equipe qualificada e abordagem ajustada à realidade das atividades em baixas temperaturas.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de frio?',
        a: 'É a capacitação que prepara os trabalhadores que atuam em baixas temperaturas para prevenir hipotermia, congelamento e outros problemas ligados ao frio.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para equipes que atuam em ambientes frios, como câmaras frigoríficas, ou em áreas externas durante o inverno.',
      },
      {
        q: 'A Previsio ministra o treinamento?',
        a: 'Sim. Oferecemos o treinamento de frio de forma personalizada, adaptado às necessidades de cada cliente.',
      },
      REGIAO,
    ],
  },
};
