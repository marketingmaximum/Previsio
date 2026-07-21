/**
 * Conteúdo enriquecido — cluster PROTEÇÃO RESPIRATÓRIA.
 *
 * Fontes: exclusivamente o bodyHtml de cada página e os nomes/objetivos gerais
 * já usados pelo cliente (PPR = Programa de Proteção Respiratória; fit test =
 * teste de vedação da máscara, qualitativo e quantitativo). Sem números, prazos,
 * cases ou normas inventadas. Cada página tem texto próprio conforme sua intenção.
 *
 * NAP: (51) 3466-9601 · São Leopoldo/RS · atendimento nacional.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Sim. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional — e também no exterior. Fale com a gente pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------- ESTANQUEIDADE
  '/estanqueidade-mascaras-respiradores': {
    resposta:
      'A verificação de estanqueidade em máscaras e respiradores confirma se o equipamento veda corretamente o rosto do trabalhador, evitando a entrada de ar contaminado. É essencial em ambientes com agentes nocivos: garante que o EPI respiratório realmente proteja e que a empresa cumpra as normas de segurança ocupacional.',
    corpo: `
      <h2>O que é a estanqueidade em máscaras e respiradores</h2>
      <p>A estanqueidade é o processo que garante a eficácia dos equipamentos de proteção respiratória usados em ambientes com agentes nocivos. O objetivo é verificar se máscaras e respiradores oferecem uma vedação adequada ao rosto do trabalhador, evitando vazamentos de ar contaminado.</p>

      <h2>Por que a vedação é decisiva</h2>
      <p>Um respirador só protege se vedar bem. Ao confirmar que os equipamentos estão em perfeitas condições de uso, a empresa reduz o risco de contaminação por substâncias prejudiciais à saúde, cumpre as normas de segurança ocupacional e oferece um ambiente de trabalho mais seguro.</p>

      <h2>Como a Previsio verifica a estanqueidade</h2>
      <p>Sediada em São Leopoldo/RS, a Previsio atua no mercado desde 2016 na área de engenharia de segurança do trabalho. Realizamos a verificação de estanqueidade com foco em atestar que o equipamento entregue ao trabalhador cumpre a função de proteção — parte do cuidado com a proteção respiratória da equipe.</p>

      <h2>Benefícios para a sua equipe</h2>
      <p>Além de proteger a saúde dos colaboradores, a verificação demonstra compromisso com a segurança, ajuda a prevenir doenças ocupacionais e sustenta a conformidade com as normas. É um investimento no capital mais importante da empresa: as pessoas.</p>
    `,
    faq: [
      {
        q: 'O que é a verificação de estanqueidade?',
        a: 'É o procedimento que confirma se a máscara ou o respirador veda corretamente o rosto do trabalhador, evitando vazamentos de ar contaminado.',
      },
      {
        q: 'Para que serve?',
        a: 'Para assegurar que o equipamento de proteção respiratória realmente protege, reduzindo o risco de contaminação e mantendo a empresa em conformidade com as normas de segurança.',
      },
      {
        q: 'A Previsio realiza esse serviço?',
        a: 'Sim. Atuamos em engenharia de segurança do trabalho desde 2016 e conduzimos a verificação de estanqueidade em máscaras e respiradores.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------------ FIT TEST
  '/fit-test': {
    resposta:
      'O fit test é o teste de vedação que verifica se o respirador se ajusta corretamente ao rosto do usuário, assegurando proteção contra poeiras, vapores e substâncias tóxicas. Existe em duas formas — qualitativo e quantitativo — e é fundamental para prevenir doenças ocupacionais e cumprir as normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o fit test</h2>
      <p>O fit test é um procedimento fundamental para garantir a eficácia dos equipamentos de proteção respiratória usados por trabalhadores em ambientes com risco de exposição a contaminantes. Esse teste de vedação verifica se o respirador se ajusta adequadamente ao rosto do usuário, assegurando a proteção necessária contra poeiras, vapores e substâncias tóxicas.</p>

      <h2>Tipos de fit test: qualitativo e quantitativo</h2>
      <p>Existem dois tipos principais de fit test. O qualitativo utiliza substâncias específicas para identificar possíveis vazamentos no respirador. O quantitativo mede de forma precisa a eficiência da vedação, garantindo uma avaliação ainda mais rigorosa da proteção oferecida ao trabalhador.</p>

      <h2>Por que realizar o fit test</h2>
      <p>Realizar o teste é essencial para garantir a segurança e a saúde dos colaboradores, prevenindo doenças ocupacionais e assegurando o cumprimento das normas de segurança do trabalho. Investir nesse procedimento demonstra compromisso com o bem-estar da equipe.</p>

      <h2>Vantagens de realizar o fit test</h2>
      <ul>
        <li>Proteção eficaz contra agentes contaminantes;</li>
        <li>Prevenção de doenças respiratórias ocupacionais;</li>
        <li>Conformidade com as normas de segurança do trabalho;</li>
        <li>Aumento da eficiência e da produtividade dos colaboradores;</li>
        <li>Redução de custos com afastamentos e processos judiciais.</li>
      </ul>

      <h2>Como a Previsio executa</h2>
      <p>Com equipe qualificada, a Previsio executa o fit test de forma precisa e eficiente, seguindo as normas e regulamentos vigentes, para empresas de diversos segmentos.</p>
    `,
    faq: [
      {
        q: 'O que é o fit test?',
        a: 'É o teste de vedação que verifica se o respirador se ajusta corretamente ao rosto do usuário, garantindo a proteção contra poeiras, vapores e substâncias tóxicas.',
      },
      {
        q: 'Qual a diferença entre fit test qualitativo e quantitativo?',
        a: 'O qualitativo usa substâncias específicas para identificar vazamentos; o quantitativo mede de forma precisa a eficiência da vedação. Indicamos o tipo adequado ao seu caso.',
      },
      {
        q: 'Quem precisa do fit test?',
        a: 'Empresas cujos trabalhadores usam respiradores em ambientes com risco de exposição a contaminantes, para confirmar que o equipamento realmente veda e protege.',
      },
      {
        q: 'A Previsio realiza o fit test?',
        a: 'Sim. Executamos o teste de vedação de forma precisa e eficiente, seguindo as normas e regulamentos vigentes.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------------- PPR (PLANO)
  '/plano-protecao-respiratoria-ppr': {
    resposta:
      'O Programa de Proteção Respiratória (PPR) reúne as medidas que protegem os trabalhadores contra a inalação de poeiras, fumos e gases tóxicos no ambiente de trabalho. A Previsio analisa os riscos, define os respiradores adequados, orienta o uso e capacita a equipe, prevenindo doenças ocupacionais e mantendo a conformidade legal.',
    corpo: `
      <h2>O que é o Programa de Proteção Respiratória (PPR)</h2>
      <p>Implementar um PPR é essencial para empresas que se preocupam com a saúde e a segurança dos colaboradores. O programa estabelece as medidas para proteger os trabalhadores contra a inalação de substâncias tóxicas ou perigosas no ambiente de trabalho, prevenindo doenças ocupacionais e assegurando um ambiente saudável.</p>

      <h2>Por que implementar o PPR</h2>
      <p>Adotar o programa demonstra compromisso com a saúde respiratória da equipe, reduz o risco de doenças ocupacionais e mantém a empresa em conformidade com as normas e legislações vigentes.</p>

      <h2>Como a Previsio conduz a consultoria</h2>
      <p>Nossa equipe realiza uma análise detalhada do ambiente de trabalho e identifica os riscos à saúde respiratória dos trabalhadores. Com base nessa análise, propomos medidas preventivas e corretivas, incluindo a indicação de equipamentos de proteção respiratória adequados e treinamentos personalizados para a equipe.</p>

      <h2>O que a sua empresa garante</h2>
      <p>Com o PPR implementado, a empresa organiza a proteção respiratória em um plano estruturado — do diagnóstico dos riscos à orientação de uso dos respiradores — protegendo a saúde dos colaboradores e sustentando a conformidade legal.</p>
    `,
    faq: [
      {
        q: 'O que é o PPR?',
        a: 'É o Programa de Proteção Respiratória: o conjunto de medidas que protege os trabalhadores contra a inalação de poeiras, fumos e gases tóxicos no ambiente de trabalho.',
      },
      {
        q: 'Para que serve o PPR?',
        a: 'Para organizar a proteção respiratória em um plano estruturado, prevenir doenças ocupacionais e manter a empresa em conformidade com as normas vigentes.',
      },
      {
        q: 'O fit test faz parte do PPR?',
        a: 'Sim. A verificação da vedação das máscaras (fit test) é uma das etapas que comprovam a eficácia dos respiradores indicados no programa.',
      },
      {
        q: 'A Previsio elabora o PPR?',
        a: 'Sim. Analisamos o ambiente, identificamos os riscos, indicamos os equipamentos adequados e capacitamos a equipe.',
      },
      REGIAO,
    ],
  },

  // --------------------------------------------------------------- PPR
  '/ppr': {
    resposta:
      'PPR é a sigla de Programa de Proteção Respiratória: o conjunto de medidas adotado pela empresa para proteger os colaboradores da exposição a poeiras, fumos e gases prejudiciais à saúde respiratória. Garante condições laborais seguras, reduz o risco de doenças ocupacionais e ajuda a empresa a cumprir as normas de segurança.',
    corpo: `
      <h2>O que é o PPR</h2>
      <p>O PPR (Programa de Proteção Respiratória) é o conjunto de medidas adotado pelas empresas para proteger os trabalhadores contra a exposição a agentes prejudiciais à saúde respiratória, como poeiras, fumos ou gases tóxicos. Sua implementação é essencial para garantir a saúde dos colaboradores e proporcionar condições de trabalho adequadas e seguras.</p>

      <h2>Importância do PPR para as empresas</h2>
      <p>Empresas que adotam o PPR demonstram comprometimento com a segurança e a saúde de seus funcionários. Além de reduzir o risco de doenças respiratórias ocupacionais e evitar acidentes, o programa contribui para o cumprimento das normas regulamentadoras vigentes.</p>

      <h2>Como a Previsio pode ajudar</h2>
      <p>Especializada em engenharia de segurança do trabalho, a Previsio oferece soluções completas para empresas que buscam implementar o PPR de forma eficiente e segura. Realizamos diagnósticos, elaboramos o plano de proteção respiratória, indicamos os equipamentos de proteção adequados e damos o suporte necessário para garantir a segurança da equipe.</p>

      <h2>Por que contar com a Previsio</h2>
      <p>Atuamos desde 2016 e já atendemos mais de mil clientes no Brasil e no exterior, com foco em qualidade, eficiência e cumprimento rigoroso das normas e legislações vigentes.</p>
    `,
    faq: [
      {
        q: 'O que significa PPR?',
        a: 'PPR é a sigla de Programa de Proteção Respiratória, o conjunto de medidas que protege os colaboradores da exposição a poeiras, fumos e gases prejudiciais à saúde respiratória.',
      },
      {
        q: 'Para que serve o PPR?',
        a: 'Para garantir condições de trabalho seguras, reduzir o risco de doenças respiratórias ocupacionais e ajudar a empresa a cumprir as normas regulamentadoras.',
      },
      {
        q: 'A Previsio elabora o PPR?',
        a: 'Sim. Realizamos o diagnóstico, elaboramos o plano, indicamos os equipamentos de proteção adequados e oferecemos o suporte necessário.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------- MEDIÇÃO DE ESTANQUEIDADE
  '/servicos/medicao-de-estanqueidade-em-mascaras': {
    resposta:
      'A medição de estanqueidade em máscaras é feita por Fit Test Qualitativo para atestar a eficiência dos respiradores entregues aos trabalhadores. O procedimento identifica falhas na especificação ou no uso das máscaras, permite ao empregador adotar medidas adicionais e mantém um histórico técnico contra futuras demandas trabalhistas e previdenciárias.',
    corpo: `
      <h2>O que é a medição de estanqueidade em máscaras</h2>
      <p>Realizamos a medição de estanqueidade em máscaras por meio do Fit Test Qualitativo. Trata-se de uma ação que visa atestar a eficiência das máscaras entregues aos trabalhadores, confirmando que o equipamento cumpre a função de proteção respiratória.</p>

      <h2>Para que serve</h2>
      <p>A medição permite identificar deficiências na especificação ou na utilização das máscaras. Com esse diagnóstico, o empregador pode adotar as medidas adicionais necessárias para corrigir falhas e assegurar a proteção efetiva da equipe.</p>

      <h2>Histórico técnico e proteção jurídica</h2>
      <p>Além de proteger a saúde dos colaboradores, o procedimento gera um histórico técnico que blinda a empresa diante de futuras demandas trabalhistas e previdenciárias — um registro que comprova o cuidado com a proteção respiratória.</p>

      <h2>Como a Previsio conduz</h2>
      <p>Conduzimos a medição com foco na eficácia real do equipamento entregue ao trabalhador, sempre alinhados às boas práticas de proteção respiratória e segurança do trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é a medição de estanqueidade em máscaras?',
        a: 'É a ação, realizada por Fit Test Qualitativo, que atesta a eficiência das máscaras entregues aos trabalhadores, verificando a vedação do equipamento.',
      },
      {
        q: 'Para que serve?',
        a: 'Para identificar deficiências na especificação ou no uso das máscaras, permitir a adoção de medidas adicionais e manter um histórico técnico de proteção contra demandas trabalhistas e previdenciárias.',
      },
      {
        q: 'A Previsio realiza esse serviço?',
        a: 'Sim. Conduzimos a medição por Fit Test Qualitativo, com foco na eficácia real do equipamento entregue ao trabalhador.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------ PLANO DE PROTEÇÃO RESPIRATÓRIO
  '/servicos/plano-de-protecao-respiratorio': {
    resposta:
      'O Plano de Proteção Respiratório especifica e atesta a eficiência das máscaras entregues aos trabalhadores. Como programa, permite identificar deficiências na especificação ou no uso dos respiradores, orienta o empregador a adotar medidas adicionais e constrói um histórico técnico que protege a empresa em demandas trabalhistas e previdenciárias.',
    corpo: `
      <h2>O que é o Plano de Proteção Respiratório</h2>
      <p>Trata-se de um plano que visa especificar e atestar a eficiência das máscaras entregues aos trabalhadores. É um programa estruturado que organiza a proteção respiratória da empresa, garantindo que o equipamento certo seja indicado e usado corretamente.</p>

      <h2>Especificar e atestar as máscaras</h2>
      <p>O programa permite identificar deficiências na especificação ou na utilização das máscaras. Com esse diagnóstico, o empregador tem base para adotar medidas adicionais e assegurar que cada trabalhador esteja de fato protegido.</p>

      <h2>Proteção contra passivos</h2>
      <p>Ao documentar a especificação e a eficiência dos respiradores, o plano constrói um histórico técnico que blinda a empresa diante de futuras demandas trabalhistas ou previdenciárias.</p>

      <h2>Como a Previsio conduz</h2>
      <p>Estruturamos o plano com foco na eficácia real da proteção respiratória, indicando os equipamentos adequados e as medidas necessárias para manter a equipe segura e a empresa em conformidade.</p>
    `,
    faq: [
      {
        q: 'O que é o Plano de Proteção Respiratório?',
        a: 'É o programa que especifica e atesta a eficiência das máscaras entregues aos trabalhadores, organizando a proteção respiratória da empresa.',
      },
      {
        q: 'Qual a diferença entre o plano e o fit test?',
        a: 'O fit test é o teste que verifica a vedação de um respirador; o plano é o programa mais amplo, que especifica os equipamentos, atesta sua eficiência e orienta as medidas adicionais.',
      },
      {
        q: 'A Previsio elabora o plano?',
        a: 'Sim. Estruturamos o plano indicando os equipamentos adequados e as medidas necessárias, com registro técnico que protege a empresa.',
      },
      REGIAO,
    ],
  },
};
