/**
 * Conteúdo enriquecido — cluster ERGONOMIA (NR-17).
 *
 * Fontes: exclusivamente o bodyHtml de cada página e os nomes/objetivos gerais
 * do serviço já usados pelo cliente (AEP = Análise Ergonômica Preliminar;
 * AET = Análise Ergonômica do Trabalho; NR-17). Sem números, prazos, cases ou
 * normas inventadas. Cada página recebe texto próprio conforme sua intenção.
 *
 * NAP: (51) 3466-9601 · São Leopoldo/RS · atendimento nacional.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Sim. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional — e também no exterior. Fale com a gente pelo (51) 3466-9601.',
};

export default {
  // ---------------------------------------------------------------- AET
  '/analise-ergonomica-do-trabalho-aet': {
    resposta:
      'A Análise Ergonômica do Trabalho (AET) é o estudo detalhado das condições de trabalho — posturas, esforços e organização das tarefas — para identificar e corrigir riscos ergonômicos. É indicada para situações mais complexas, no âmbito da NR-17, e conclui com medidas que reduzem acidentes e doenças ocupacionais.',
    corpo: `
      <h2>O que é a Análise Ergonômica do Trabalho (AET)</h2>
      <p>A Análise Ergonômica do Trabalho é um processo fundamental para garantir a saúde e a segurança dos trabalhadores e, ao mesmo tempo, sustentar a produtividade da empresa. Por meio dela é possível identificar e corrigir os riscos ergonômicos presentes no ambiente de trabalho, proporcionando condições mais adequadas para a realização das atividades.</p>

      <h2>Quando a AET é indicada</h2>
      <p>Elaboramos a AET para situações ergonômicas mais complexas — aquelas em que a avaliação exige aprofundamento maior do que a análise preliminar. Além de esforços e posturas, empreendemos atenção especial aos aspectos psicossociais do trabalho, prevenindo adoecimentos e as consequentes ações trabalhistas.</p>

      <h2>Como a Previsio conduz a AET</h2>
      <p>O trabalho começa com a coleta de informações e dados sobre as condições de trabalho. Em seguida, são realizadas inspeções in loco para identificar os fatores de risco. Com base nessas informações, propomos medidas corretivas e preventivas que tornam o ambiente mais seguro e saudável.</p>

      <h2>O que a análise entrega</h2>
      <p>Ao final, a empresa recebe um diagnóstico das condições ergonômicas e um conjunto de recomendações práticas. O objetivo é reduzir o número de acidentes e doenças ocupacionais, aumentar o bem-estar dos funcionários e melhorar a qualidade das atividades realizadas.</p>
    `,
    faq: [
      {
        q: 'O que é a Análise Ergonômica do Trabalho?',
        a: 'É o estudo detalhado das condições de trabalho — posturas, esforços, organização das tarefas e aspectos psicossociais — para identificar riscos ergonômicos e propor as correções necessárias.',
      },
      {
        q: 'Qual a diferença entre AEP e AET?',
        a: 'A Análise Ergonômica Preliminar (AEP) atende empresas de risco baixo; a AET é o estudo completo, indicado para situações ergonômicas mais complexas. Avaliamos o seu caso e indicamos a abordagem adequada.',
      },
      {
        q: 'A AET é obrigatória?',
        a: 'A ergonomia é tratada pela NR-17, que exige a adequação das condições de trabalho às características dos trabalhadores. A AET é o estudo que atende a essa exigência quando a atividade envolve riscos ergonômicos que precisam de avaliação aprofundada.',
      },
      {
        q: 'A Previsio elabora a AET?',
        a: 'Sim. Coletamos os dados das condições de trabalho, fazemos inspeção in loco para identificar os fatores de risco e entregamos o laudo com as medidas corretivas e preventivas.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------------------------- AEP
  '/analise-ergonomica-preliminar-aep': {
    resposta:
      'A Análise Ergonômica Preliminar (AEP) é uma avaliação inicial das condições de trabalho — posturas, esforços repetitivos e outros fatores — voltada a empresas de risco baixo. Identifica de forma antecipada os riscos ergonômicos e propõe ajustes que previnem lesões musculoesqueléticas e DORT, mantendo a conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>O que é a Análise Ergonômica Preliminar (AEP)</h2>
      <p>A AEP desempenha papel fundamental na identificação e na prevenção de riscos ergonômicos nas atividades laborais. É uma avaliação cuidadosa que analisa posturas, esforços repetitivos e outros fatores capazes de impactar a saúde e o bem-estar dos trabalhadores, propondo melhorias e ajustes no ambiente de trabalho.</p>

      <h2>Para que serve: prevenção de lesões</h2>
      <p>A AEP é essencial para evitar lesões musculoesqueléticas, distúrbios osteomusculares relacionados ao trabalho (DORT) e outras condições decorrentes de más práticas ergonômicas. Ao identificar e corrigir potenciais problemas, promove um ambiente de trabalho mais saudável, seguro e produtivo.</p>

      <h2>Quando a AEP é indicada</h2>
      <p>Desenvolvemos a análise preliminar para atender empresas de risco baixo — situações em que a avaliação inicial já orienta as medidas necessárias. Quando o cenário é mais complexo, o caminho é a Análise Ergonômica do Trabalho (AET). Avaliamos o seu caso e indicamos a abordagem adequada.</p>

      <h2>Como a Previsio conduz a AEP</h2>
      <p>Com um time de profissionais qualificados, realizamos a análise para identificar e corrigir os riscos ergonômicos no ambiente de trabalho. Além de proteger a saúde da equipe e reduzir afastamentos, a AEP assegura o cumprimento das normas regulamentadoras vigentes.</p>
    `,
    faq: [
      {
        q: 'O que é a Análise Ergonômica Preliminar?',
        a: 'É a avaliação inicial das condições ergonômicas do trabalho, que analisa posturas, esforços repetitivos e outros fatores para identificar riscos e propor ajustes de forma antecipada.',
      },
      {
        q: 'Para quem a AEP é indicada?',
        a: 'Para empresas de risco baixo, em que a avaliação preliminar já orienta as medidas necessárias. Para situações mais complexas, indicamos a Análise Ergonômica do Trabalho (AET).',
      },
      {
        q: 'A AEP previne DORT?',
        a: 'Sim. Ao identificar posturas e esforços inadequados, a AEP ajuda a prevenir lesões musculoesqueléticas e distúrbios osteomusculares relacionados ao trabalho (DORT).',
      },
      {
        q: 'A Previsio elabora a AEP?',
        a: 'Sim. Nossa equipe realiza a análise, identifica os riscos ergonômicos e propõe os ajustes necessários para manter o ambiente seguro e em conformidade com as normas.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------------- ANÁLISE ERGONÔMICA
  '/servicos/analise-ergonomica': {
    resposta:
      'A análise ergonômica avalia a relação entre o trabalhador e suas tarefas para prevenir adoecimentos. A Previsio desenvolve a Análise Ergonômica Preliminar (AEP) para empresas de risco baixo e a Análise Ergonômica do Trabalho (AET) para situações mais complexas, com atenção especial aos aspectos psicossociais do trabalho.',
    corpo: `
      <h2>O que é a análise ergonômica</h2>
      <p>A análise ergonômica avalia a relação entre o trabalhador e as suas atividades para garantir conforto, segurança e eficiência. Vai além dos esforços e das posturas: dá atenção especial aos aspectos psicossociais, prevenindo adoecimentos e as consequentes ações trabalhistas.</p>

      <h2>AEP e AET: qual atende o seu caso</h2>
      <p>Desenvolvemos a Análise Ergonômica Preliminar (AEP) para atender empresas de risco baixo. E elaboramos a Análise Ergonômica do Trabalho (AET) para situações ergonômicas mais complexas, que exigem avaliação aprofundada. Indicamos a abordagem certa conforme a realidade de cada operação.</p>

      <h2>Por que investir em ergonomia</h2>
      <p>Ambientes ajustados às pessoas reduzem lesões, afastamentos e passivos. A análise ergonômica identifica os fatores de risco e orienta melhorias que elevam o bem-estar da equipe e a qualidade do trabalho.</p>

      <h2>Como a Previsio atua</h2>
      <p>Nossa equipe conduz a análise, identifica os riscos ergonômicos e propõe as medidas corretivas e preventivas adequadas — sempre alinhadas às normas de segurança e saúde do trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é análise ergonômica?',
        a: 'É a avaliação da relação entre o trabalhador e suas tarefas — posturas, esforços e aspectos psicossociais — para identificar riscos e propor melhorias que previnem adoecimentos.',
      },
      {
        q: 'Vocês fazem AEP e AET?',
        a: 'Sim. Desenvolvemos a AEP para empresas de risco baixo e a AET para situações mais complexas. Avaliamos o seu caso e indicamos a análise adequada.',
      },
      {
        q: 'A análise considera fatores psicossociais?',
        a: 'Sim. Além de esforços e posturas, damos atenção especial aos aspectos psicossociais do trabalho, prevenindo adoecimentos e as consequentes ações trabalhistas.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------- TREINAMENTO
  '/treinamento-ergonomia': {
    resposta:
      'O treinamento de ergonomia orienta os colaboradores a adaptar o posto e a rotina de trabalho, prevenindo lesões e desconfortos ligados a posturas, esforços e equipamentos inadequados. É um conjunto de práticas que melhora conforto, segurança e produtividade e reforça o cumprimento das normas de saúde ocupacional.',
    corpo: `
      <h2>O que é o treinamento de ergonomia</h2>
      <p>O treinamento de ergonomia adapta o ambiente e a rotina de trabalho às necessidades dos colaboradores, prevenindo lesões e desconfortos relacionados ao uso de equipamentos inadequados. Reúne técnicas e práticas que otimizam a relação entre o trabalhador e suas atividades, garantindo conforto, segurança e eficiência.</p>

      <h2>Benefícios para a empresa e a equipe</h2>
      <p>Investir em treinamento ergonômico traz ganhos para os dois lados. Ao proporcionar um ambiente de trabalho adequado, a empresa reduz o absenteísmo, aumenta a produtividade, melhora a qualidade de vida dos funcionários e evita problemas de saúde ocupacional.</p>

      <h2>Como a Previsio conduz o treinamento</h2>
      <p>Oferecemos treinamentos personalizados conforme as necessidades de cada cliente, sempre voltados à prevenção de acidentes e à promoção da saúde no ambiente de trabalho. O conteúdo é ajustado à realidade das atividades da empresa.</p>

      <h2>Por que treinar a sua equipe</h2>
      <p>Trabalhadores orientados adotam posturas e hábitos que reduzem o risco de lesões e sustentam o desempenho ao longo do dia. É uma medida preventiva que protege a saúde da equipe e contribui para o resultado do negócio.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de ergonomia?',
        a: 'É a capacitação que orienta os colaboradores a adaptar posto e rotina de trabalho, prevenindo lesões e desconfortos ligados a posturas, esforços e equipamentos inadequados.',
      },
      {
        q: 'Para que serve o treinamento?',
        a: 'Para reduzir o absenteísmo e problemas de saúde ocupacional, aumentar a produtividade e a qualidade de vida da equipe, com foco na prevenção de acidentes.',
      },
      {
        q: 'O treinamento é personalizado?',
        a: 'Sim. O conteúdo é ajustado às necessidades e à realidade das atividades de cada cliente.',
      },
      REGIAO,
    ],
  },
};
