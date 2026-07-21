/**
 * Conteúdo enriquecido — cluster QUÍMICOS (segurança com produtos químicos,
 * laudos e serviços ambientais correlatos).
 *
 * Fontes: bodyHtml de cada página; normas que as próprias páginas citam
 * (NR-26 sinalização, NR-15 limites de tolerância, NR-20 inflamáveis,
 * NBR 10151 ruído, critérios da FEPAM). Treinamentos deste cluster seguem a
 * regra: in-company, conteúdo conforme a norma, sem carga horária inventada.
 * Sem números, prazos ou cases inventados.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'A sede fica em São Leopoldo/RS e o atendimento é nacional — conduzimos projetos em todo o Brasil e também no exterior. Fale com a nossa equipe pelo (51) 3466-9601.',
};

const RESPALDO = {
  q: 'O laudo tem respaldo técnico?',
  a: 'Sim. A Previsio é uma empresa de engenharia de segurança do trabalho; os laudos são elaborados por profissional habilitado, com Anotação de Responsabilidade Técnica (ART) quando aplicável.',
};

export default {
  // ---------------------------------------------------------- PILAR
  '/servicos/matriz-de-produtos-quimicos': {
    resposta:
      'A matriz de produtos químicos é o programa que avalia todos os produtos químicos usados na empresa — locais de armazenamento, disposição, quantidade, rotulagem, sinalização, EPIs, procedimentos e treinamentos. A Previsio estrutura esse programa para prevenir incompatibilidades e acidentes e manter a empresa em conformidade com as normas de segurança.',
    corpo: `
      <h2>O que é a matriz de produtos químicos</h2>
      <p>A matriz de produtos químicos é um programa de incompatibilidade de produtos químicos. Seu objetivo é avaliar todos os produtos químicos utilizados na empresa, considerando os locais de armazenamento, a disposição e a quantidade dos produtos, a rotulagem, a sinalização, os equipamentos de proteção, os procedimentos e os treinamentos.</p>

      <h2>O que o programa organiza</h2>
      <p>Ao mapear os produtos e suas condições de uso e armazenamento, a matriz permite identificar riscos e definir controles:</p>
      <ul>
        <li>Classificação dos produtos e identificação de incompatibilidades;</li>
        <li>Regras de armazenamento e separação de substâncias incompatíveis;</li>
        <li>Rotulagem e sinalização de segurança;</li>
        <li>Equipamentos de proteção, procedimentos e treinamentos das equipes.</li>
      </ul>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio estrutura o programa de forma personalizada, a partir da realidade de cada empresa. O resultado é um ambiente mais seguro no manuseio e na guarda de produtos químicos, com prevenção de acidentes e conformidade com as normas de segurança aplicáveis.</p>
    `,
    faq: [
      {
        q: 'O que é a matriz de produtos químicos?',
        a: 'É um programa de incompatibilidade que avalia todos os produtos químicos da empresa — armazenamento, disposição, quantidade, rotulagem, sinalização, EPIs, procedimentos e treinamentos.',
      },
      {
        q: 'Para quais empresas ela é indicada?',
        a: 'Para empresas que utilizam, armazenam ou manipulam produtos químicos e precisam prevenir incompatibilidades e acidentes e manter a conformidade com as normas de segurança.',
      },
      {
        q: 'A Previsio estrutura o programa?',
        a: 'Sim. A Previsio elabora a matriz de forma personalizada, definindo a classificação dos produtos, as regras de armazenamento, a sinalização, os EPIs, os procedimentos e os treinamentos.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------ MATRIZ INCOMPATIBILIDADE
  '/matriz-incompatibilidade-produtos-quimicos': {
    resposta:
      'A matriz de incompatibilidade de produtos químicos classifica as substâncias por suas propriedades para identificar quais não podem ser armazenadas ou manuseadas juntas. Com ela, a empresa separa produtos incompatíveis, define EPIs e procedimentos seguros e previne reações perigosas. A Previsio elabora essa matriz de forma personalizada para cada operação.',
    corpo: `
      <h2>A importância da matriz de incompatibilidade</h2>
      <p>A matriz de incompatibilidade de produtos químicos é uma ferramenta essencial para empresas que lidam com substâncias químicas em seus processos. Seu principal objetivo é identificar os riscos associados à manipulação e ao armazenamento inadequado de produtos incompatíveis, prevenindo acidentes graves e garantindo a segurança dos trabalhadores e do ambiente.</p>

      <h2>Como a matriz funciona</h2>
      <p>A matriz classifica os produtos químicos de acordo com suas propriedades e composições. Com base nessa classificação, identifica-se quais substâncias apresentam incompatibilidades entre si — reações perigosas que podem ocorrer caso entrem em contato. A partir daí, a empresa adota medidas preventivas, como o armazenamento separado, o uso de EPIs adequados e procedimentos seguros de manuseio.</p>

      <h2>Vantagens de utilizar a matriz</h2>
      <ul>
        <li>Prevenção de acidentes químicos;</li>
        <li>Proteção dos trabalhadores e do ambiente de trabalho;</li>
        <li>Cumprimento das normas de segurança e da legislação vigente;</li>
        <li>Redução de custos com acidentes e passivos trabalhistas;</li>
        <li>Ambiente de trabalho mais seguro e controlado.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é a matriz de incompatibilidade de produtos químicos?',
        a: 'É a ferramenta que classifica as substâncias por suas propriedades para identificar quais não podem ser armazenadas ou manuseadas juntas, prevenindo reações perigosas.',
      },
      {
        q: 'Como a matriz previne acidentes?',
        a: 'A partir da classificação, ela orienta o armazenamento separado de produtos incompatíveis, o uso de EPIs adequados e procedimentos seguros de manuseio.',
      },
      {
        q: 'A Previsio elabora a matriz sob medida?',
        a: 'Sim. A Previsio elabora a matriz de forma personalizada, conforme os produtos e as necessidades específicas do segmento de cada empresa.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------- INVENTÁRIO QUÍMICOS
  '/inventario-produtos-quimicos-perigosos': {
    resposta:
      'O inventário de produtos químicos perigosos é o levantamento de todas as substâncias tóxicas, inflamáveis ou corrosivas presentes na empresa, com suas condições de armazenamento e manuseio. É a base para prevenir riscos e atender normas como a NR-26 e a NR-15. A Previsio elabora esse inventário completo.',
    corpo: `
      <h2>O que é o inventário de produtos químicos perigosos</h2>
      <p>O inventário de produtos químicos perigosos é um levantamento minucioso de todas as substâncias tóxicas, inflamáveis ou corrosivas presentes na empresa. Esse documento detalhado permite identificar os riscos de exposição dos trabalhadores, analisar as condições de armazenamento e estabelecer procedimentos de manuseio seguro.</p>

      <h2>Por que o inventário é importante</h2>
      <p>Ao conhecer e documentar os produtos químicos utilizados, os gestores podem adotar medidas preventivas, fornecer treinamentos adequados e garantir a correta manipulação e o armazenamento das substâncias, minimizando os riscos de acidentes. É também a base para a matriz de incompatibilidade e para os planos de emergência.</p>

      <h2>Conformidade e responsabilidade ambiental</h2>
      <p>O inventário auxilia a empresa a cumprir a legislação vigente, como a NR-26, que trata da sinalização de segurança, e a NR-15, que estabelece limites de tolerância para agentes químicos no ambiente de trabalho. Além de proteger os trabalhadores, contribui para a preservação do meio ambiente e para a saúde ocupacional.</p>
    `,
    faq: [
      {
        q: 'O que é o inventário de produtos químicos perigosos?',
        a: 'É o levantamento detalhado de todas as substâncias tóxicas, inflamáveis ou corrosivas da empresa, com suas condições de armazenamento e manuseio, para identificar e controlar riscos.',
      },
      {
        q: 'A quais normas o inventário ajuda a atender?',
        a: 'Entre outras, à NR-26 (sinalização de segurança) e à NR-15 (limites de tolerância para agentes químicos), citadas na própria página do serviço.',
      },
      {
        q: 'A Previsio elabora o inventário?',
        a: 'Sim. A Previsio elabora o inventário de produtos químicos perigosos, servindo de base para medidas preventivas, treinamentos e demais programas de segurança química.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------ AUDITORIA QUÍMICOS
  '/auditoria-seguranca-produtos-quimicos': {
    resposta:
      'A auditoria de segurança em produtos químicos avalia todas as etapas de manuseio, armazenamento e descarte de substâncias perigosas, verificando a conformidade com as normas e apontando melhorias. A Previsio conduz essa auditoria para prevenir acidentes, proteger os trabalhadores e o meio ambiente e evitar penalidades.',
    corpo: `
      <h2>O que é a auditoria de segurança em produtos químicos</h2>
      <p>A auditoria de segurança em produtos químicos é essencial para empresas que lidam com substâncias perigosas. É um processo de avaliação que garante que as práticas adotadas estejam em conformidade com as normas de segurança e as regulamentações ambientais, minimizando os riscos à saúde dos trabalhadores e ao meio ambiente.</p>

      <h2>Como a auditoria funciona</h2>
      <p>A auditoria analisa minuciosamente todas as etapas que envolvem o manuseio, o armazenamento e o descarte das substâncias perigosas. Os auditores verificam se as práticas estão de acordo com as normas vigentes, identificam possíveis falhas e propõem melhorias para garantir a segurança das pessoas e do ambiente.</p>

      <h2>Vantagens da auditoria</h2>
      <p>Além de assegurar a conformidade, a auditoria ajuda a prevenir acidentes, proteger a saúde dos funcionários e evitar impactos negativos no meio ambiente. Ao adotar práticas seguras, a empresa demonstra compromisso com a segurança e a sustentabilidade, fortalecendo sua reputação no mercado.</p>
    `,
    faq: [
      {
        q: 'O que é a auditoria de segurança em produtos químicos?',
        a: 'É a avaliação de todas as etapas de manuseio, armazenamento e descarte de substâncias perigosas, para verificar a conformidade com as normas e apontar melhorias.',
      },
      {
        q: 'Para quem a auditoria é indicada?',
        a: 'Para empresas que lidam com substâncias perigosas e querem prevenir acidentes, proteger trabalhadores e o meio ambiente e evitar penalidades.',
      },
      {
        q: 'A Previsio realiza a auditoria?',
        a: 'Sim. A Previsio conduz a auditoria com profissionais qualificados, avaliando os processos de manuseio, armazenamento e descarte e propondo as melhorias necessárias.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------- AVALIAÇÃO EXPOSIÇÃO QUÍMICOS
  '/avaliacao-exposicao-agentes-quimicos': {
    resposta:
      'A avaliação de exposição a agentes químicos mede e analisa a concentração de substâncias químicas no ambiente de trabalho, verificando se está dentro dos limites de tolerância das normas. A partir dos resultados, define as medidas de proteção. A Previsio realiza essa avaliação para prevenir doenças ocupacionais.',
    corpo: `
      <h2>O que é a avaliação de exposição a agentes químicos</h2>
      <p>A avaliação de exposição a agentes químicos é um procedimento técnico que envolve a medição e a análise da concentração de substâncias químicas presentes no ambiente de trabalho. É fundamental para garantir que os níveis de exposição estejam dentro dos limites de tolerância estabelecidos pelas normas regulamentadoras.</p>

      <h2>Para que serve a avaliação</h2>
      <p>A partir dos resultados, é possível determinar quais são os riscos associados à exposição e quais medidas devem ser adotadas para proteger a saúde dos trabalhadores. A avaliação também identifica oportunidades de melhoria nos processos e ambientes, promovendo um local de trabalho mais seguro e saudável.</p>

      <h2>Benefícios</h2>
      <ul>
        <li>Prevenção de doenças ocupacionais;</li>
        <li>Promoção de um ambiente de trabalho mais seguro;</li>
        <li>Conformidade com as normas de segurança e saúde ocupacional;</li>
        <li>Redução de acidentes de trabalho;</li>
        <li>Identificação de oportunidades de melhoria nos processos.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é a avaliação de exposição a agentes químicos?',
        a: 'É a medição e a análise da concentração de substâncias químicas no ambiente de trabalho, para verificar se a exposição está dentro dos limites de tolerância das normas.',
      },
      {
        q: 'Por que a avaliação é importante?',
        a: 'Porque a exposição a substâncias nocivas pode causar doenças ocupacionais. A avaliação identifica os riscos e orienta as medidas de proteção necessárias.',
      },
      {
        q: 'A Previsio realiza a avaliação?',
        a: 'Sim. A Previsio conduz a avaliação com equipe qualificada e apresenta recomendações personalizadas, em conformidade com as normas regulamentadoras.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------------- LAUDO SEG. QUÍMICOS
  '/laudo-seguranca-produtos-quimicos': {
    resposta:
      'O laudo de segurança para produtos químicos verifica se o armazenamento, o manuseio e o transporte de substâncias perigosas atendem às normas de segurança, analisando os riscos e propondo medidas preventivas. A Previsio elabora o laudo a partir de inspeção detalhada das instalações, equipamentos e procedimentos da empresa.',
    corpo: `
      <h2>O que é o laudo de segurança para produtos químicos</h2>
      <p>O laudo de segurança para produtos químicos é uma avaliação fundamental para garantir a proteção dos trabalhadores e do ambiente em empresas que lidam com substâncias perigosas. O documento verifica se as condições de armazenamento, manuseio e transporte estão de acordo com as normas de segurança, analisando os riscos e propondo medidas preventivas.</p>

      <h2>Como o laudo é elaborado</h2>
      <p>A elaboração envolve a análise minuciosa das instalações, dos equipamentos e dos procedimentos utilizados no manuseio das substâncias químicas. A equipe da Previsio realiza inspeções detalhadas, identifica possíveis pontos de risco e propõe as medidas corretivas necessárias para garantir a segurança das pessoas e do ambiente.</p>

      <h2>Benefícios do laudo</h2>
      <p>O laudo protege a saúde dos colaboradores, previne acidentes, apoia o cumprimento das legislações ambientais e de segurança e reduz os riscos de ocorrência de acidentes químicos. Empresas que investem nesse laudo demonstram compromisso com a segurança e evitam complicações legais e danos ao meio ambiente.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de segurança para produtos químicos?',
        a: 'É a avaliação que verifica se o armazenamento, o manuseio e o transporte de substâncias perigosas atendem às normas de segurança, analisando riscos e propondo medidas preventivas.',
      },
      {
        q: 'Como o laudo é feito?',
        a: 'Por meio de inspeção detalhada das instalações, dos equipamentos e dos procedimentos, com identificação dos pontos de risco e proposição das medidas corretivas.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // --------------------------------------------------- LAUDO HABITAÇÃO CONTAINER
  '/laudo-habitacao-container': {
    resposta:
      'O laudo de habitação em container é o documento técnico que avalia se containers usados como alojamento temporário — em canteiros de obra ou eventos — atendem aos requisitos de ventilação, iluminação, integridade estrutural e segurança. A Previsio elabora o laudo para assegurar condições adequadas e conformidade com as normas.',
    corpo: `
      <h2>O que é o laudo de habitação em container</h2>
      <p>O laudo de habitação em container é um documento técnico elaborado por profissionais de engenharia de segurança do trabalho que avalia a segurança e a adequação de containers utilizados como moradias temporárias — em canteiros de obra, eventos ou outras situações que demandem espaços de alojamento. Ele verifica se os containers atendem aos requisitos para garantir conforto, segurança e bem-estar aos trabalhadores.</p>

      <h2>O que é avaliado</h2>
      <p>Durante a elaboração do laudo, são analisados criteriosamente aspectos como ventilação, iluminação, integridade estrutural e conformidade com as normas de segurança. O objetivo é assegurar que as condições de trabalho e de descanso dos colaboradores que utilizam esses espaços sejam adequadas.</p>

      <h2>Por que ter o laudo em dia</h2>
      <p>Empresas que investem nesse laudo demonstram preocupação com a saúde ocupacional dos funcionários, evitando acidentes e doenças relacionadas ao ambiente. Manter o laudo em dia também evita problemas legais e garante a conformidade com as normas de segurança do trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de habitação em container?',
        a: 'É o documento técnico que avalia se containers usados como alojamento temporário atendem aos requisitos de ventilação, iluminação, integridade estrutural e segurança.',
      },
      {
        q: 'Quando o laudo é necessário?',
        a: 'Quando containers são utilizados como moradia temporária — em canteiros de obra, eventos ou situações semelhantes — e é preciso assegurar condições adequadas aos trabalhadores.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------ LAUDO IMPACTO AMBIENTAL
  '/laudo-impacto-ambiental-nbr10151': {
    resposta:
      'O laudo de impacto ambiental conforme a NBR 10151 avalia os níveis de ruído de uma área e verifica se estão dentro dos limites da norma. Identifica as fontes de ruído e orienta medidas corretivas. A Previsio elabora o laudo para garantir conformidade ambiental e reduzir a poluição sonora.',
    corpo: `
      <h2>O que é o laudo de impacto ambiental NBR 10151</h2>
      <p>O laudo de impacto ambiental conforme a NBR 10151 é um documento técnico que avalia os níveis de ruído em determinada área, verificando se estão de acordo com os limites estabelecidos pela norma. É fundamental para preservar a saúde auditiva da população e dos trabalhadores e para reduzir a poluição sonora no ambiente.</p>

      <h2>Por que realizar o laudo</h2>
      <p>A realização do laudo é essencial para empresas que desejam estar em conformidade com a legislação ambiental. Com ele, é possível identificar as fontes de ruído, avaliar seus impactos e adotar medidas corretivas para garantir que os níveis de emissão fiquem dentro dos padrões permitidos.</p>

      <h2>O que a Previsio entrega</h2>
      <ul>
        <li>Profissionais capacitados e experientes;</li>
        <li>Relatórios completos e detalhados;</li>
        <li>Orientação técnica para a implementação de medidas corretivas;</li>
        <li>Auxílio no cumprimento das normas e regulamentações vigentes.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que avalia o laudo de impacto ambiental NBR 10151?',
        a: 'Ele avalia os níveis de ruído de uma área e verifica se estão dentro dos limites da NBR 10151, identificando as fontes e orientando medidas corretivas.',
      },
      {
        q: 'Para que serve o laudo?',
        a: 'Para comprovar conformidade com a legislação ambiental relativa a ruído, proteger a saúde auditiva e reduzir a poluição sonora no entorno.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ----------------------------------------- MEDIÇÃO ESTANQUEIDADE DIESEL
  '/medicao-estanqueidade-tanques-diesel': {
    resposta:
      'A medição de estanqueidade em tanques de diesel verifica se os tanques de armazenamento estão hermeticamente fechados, identificando vazamentos, mesmo as menores aberturas. Previne contaminação ambiental, riscos de incêndio e danos à estrutura. A Previsio realiza o serviço para manter o armazenamento seguro e conforme as normas.',
    corpo: `
      <h2>O que é a medição de estanqueidade em tanques de diesel</h2>
      <p>A medição de estanqueidade em tanques de diesel é um procedimento essencial para garantir a segurança e a eficiência no armazenamento do combustível. Verificar se os tanques estão hermeticamente fechados é fundamental para prevenir vazamentos, que podem causar contaminações ambientais, riscos de incêndio e danos à estrutura do local.</p>

      <h2>Como o serviço funciona</h2>
      <p>O processo consiste em verificar se há vazamentos nos tanques de armazenamento, utilizando métodos capazes de identificar até mesmo as menores aberturas. Essa análise minuciosa garante que o sistema esteja em conformidade com as normas de segurança, protegendo o meio ambiente e evitando problemas futuros.</p>

      <h2>Vantagens do serviço especializado</h2>
      <p>Contar com uma empresa especializada garante que o armazenamento do combustível esteja seguro e conforme as normas vigentes. A prevenção de vazamentos evita multas e danos à imagem da empresa, demonstrando compromisso com a segurança e a preservação do meio ambiente.</p>
    `,
    faq: [
      {
        q: 'O que é a medição de estanqueidade em tanques de diesel?',
        a: 'É o procedimento que verifica se os tanques de armazenamento estão hermeticamente fechados, identificando vazamentos, mesmo as menores aberturas.',
      },
      {
        q: 'Por que o serviço é importante?',
        a: 'Porque previne contaminação ambiental, riscos de incêndio e danos à estrutura, além de manter o armazenamento em conformidade com as normas de segurança.',
      },
      {
        q: 'A Previsio realiza a medição?',
        a: 'Sim. A Previsio executa o serviço com profissionais qualificados, mantendo o armazenamento de combustível seguro e conforme as normas.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------- MEMORIAL IR FEPAM
  '/memorial-calculo-indice-risco-ir-fepam': {
    resposta:
      'O memorial de cálculo do índice de risco (IR) conforme os critérios da FEPAM avalia e quantifica o risco ambiental das atividades da empresa. É usado para comprovar conformidade com a legislação ambiental. A Previsio elabora o memorial e a assessoria técnica para garantir a regularidade das operações.',
    corpo: `
      <h2>O que é o memorial de cálculo do índice de risco IR FEPAM</h2>
      <p>O memorial de cálculo do índice de risco IR FEPAM é um documento essencial para empresas que desejam avaliar e controlar o risco ambiental associado às suas atividades. Ele é elaborado de acordo com os critérios da Fundação Estadual de Proteção Ambiental (FEPAM) e tem como objetivo calcular o índice de risco das operações realizadas pela empresa.</p>

      <h2>Para que serve o memorial</h2>
      <p>O memorial é fundamental para garantir que as atividades da empresa estejam em conformidade com as leis ambientais, contribuindo para a preservação do meio ambiente e a proteção da saúde pública. Empresas que o realizam agem de forma responsável, evitando impactos negativos e cumprindo suas obrigações legais.</p>

      <h2>O que a Previsio entrega</h2>
      <ul>
        <li>Elaboração do memorial de cálculo;</li>
        <li>Avaliação e controle de riscos ambientais;</li>
        <li>Assessoria técnica especializada;</li>
        <li>Conformidade com as normas ambientais;</li>
        <li>Proteção da saúde pública e do meio ambiente.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o memorial de cálculo do índice de risco IR FEPAM?',
        a: 'É o documento que avalia e quantifica o risco ambiental das atividades da empresa segundo os critérios da FEPAM, comprovando conformidade com a legislação ambiental.',
      },
      {
        q: 'Para quem o memorial é indicado?',
        a: 'Para empresas que precisam avaliar e controlar seu risco ambiental e comprovar regularidade perante a legislação ambiental.',
      },
      {
        q: 'A Previsio elabora o memorial?',
        a: 'Sim. A Previsio elabora o memorial de cálculo e presta assessoria técnica para garantir a conformidade ambiental das operações.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------ TREINAMENTO INFLAMÁVEIS NR-20
  '/treinamento-inflamaveis-nr20': {
    resposta:
      'O treinamento de inflamáveis da NR-20 capacita os trabalhadores que lidam com líquidos e substâncias inflamáveis, abordando os cuidados no manuseio e as medidas de emergência. A Previsio ministra o treinamento in-company, com conteúdo conforme a NR-20, para prevenir acidentes e manter a empresa em conformidade.',
    corpo: `
      <h2>O que é o treinamento de inflamáveis NR-20</h2>
      <p>O treinamento de inflamáveis da NR-20 é uma medida essencial para empresas que lidam diariamente com substâncias inflamáveis. A NR-20 estabelece os requisitos para garantir a segurança e a saúde dos trabalhadores que interagem com esses materiais. O treinamento abrange desde os cuidados básicos até as medidas de emergência.</p>

      <h2>Vantagens do treinamento</h2>
      <p>Investir no treinamento traz vantagens como a redução de acidentes, a manutenção da segurança dos colaboradores, o cumprimento das normas regulamentadoras e a proteção do patrimônio da empresa. Ao capacitar os funcionários, a organização demonstra compromisso com a segurança e promove um ambiente mais saudável e produtivo.</p>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio desenvolve treinamentos personalizados, de acordo com as necessidades específicas de cada cliente, e os ministra in-company. O conteúdo segue a NR-20, garantindo relevância e conformidade com a legislação vigente.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de inflamáveis NR-20?',
        a: 'É a capacitação dos trabalhadores que lidam com substâncias inflamáveis, com foco nos cuidados de manuseio e nas medidas de emergência, conforme a NR-20.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para trabalhadores e empresas que manuseiam ou armazenam líquidos e substâncias inflamáveis e precisam operar com segurança e em conformidade com a NR-20.',
      },
      {
        q: 'Vocês ministram o treinamento na nossa empresa?',
        a: 'Sim. O treinamento é in-company, adaptado à sua realidade, com conteúdo conforme a NR-20.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------- TREINAMENTO PRODUTOS QUÍMICOS
  '/treinamento-produtos-quimicos': {
    resposta:
      'O treinamento de segurança em produtos químicos orienta os colaboradores sobre a correta manipulação, armazenamento e descarte de substâncias perigosas, uso de EPIs e procedimentos de emergência. A Previsio ministra o treinamento in-company, com conteúdo conforme as normas aplicáveis, para reduzir acidentes e proteger a saúde da equipe.',
    corpo: `
      <h2>O que é o treinamento de segurança em produtos químicos</h2>
      <p>O manuseio inadequado de produtos químicos pode acarretar riscos graves à saúde dos trabalhadores e ao meio ambiente. Por isso, é fundamental que as empresas ofereçam treinamentos específicos para orientar seus colaboradores sobre a correta manipulação, o armazenamento e o descarte de substâncias químicas.</p>

      <h2>Conteúdo do treinamento</h2>
      <p>Os treinamentos abordam temas essenciais para o trabalho seguro com produtos químicos:</p>
      <ul>
        <li>Identificação de riscos;</li>
        <li>Procedimentos de segurança;</li>
        <li>Uso correto dos EPIs;</li>
        <li>Emergências e primeiros socorros;</li>
        <li>Legislação vigente.</li>
      </ul>

      <h2>Benefícios e como a Previsio conduz</h2>
      <p>O treinamento proporciona maior segurança no ambiente de trabalho, reduz acidentes, apoia o cumprimento das normas regulamentadoras, preserva a saúde dos colaboradores e minimiza impactos ambientais. A Previsio ministra o treinamento in-company, com conteúdo conforme as normas aplicáveis e adaptado à realidade da empresa.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de segurança em produtos químicos?',
        a: 'É a capacitação que orienta os colaboradores sobre a correta manipulação, armazenamento e descarte de substâncias perigosas, uso de EPIs e procedimentos de emergência.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para os profissionais que lidam diariamente com substâncias perigosas e para empresas que precisam operar com segurança e em conformidade com as normas.',
      },
      {
        q: 'Vocês ministram o treinamento na nossa empresa?',
        a: 'Sim. O treinamento é in-company, adaptado à sua realidade, com conteúdo conforme as normas aplicáveis.',
      },
      REGIAO,
    ],
  },
};
