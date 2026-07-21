/**
 * Conteúdo enriquecido — cluster PPRAMP.
 *
 * PPRAMP = Plano de Prevenção de Riscos de Acidentes com Materiais
 * Perfurocortantes (tema da NR-32). Ancorado na definição correta que as
 * próprias páginas do cliente trazem (agulhas, bisturis, profissionais de
 * saúde/estética; programa obrigatório com equipamentos, medidas e
 * treinamentos). As páginas /ppramp e /treinamento-ppramp do site atual
 * traziam expansões erradas do acrônimo (proteção respiratória / riscos
 * ambientais) — corrigidas aqui para o significado real do PPRAMP.
 * Sem números, prazos ou cases inventados.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'A sede fica em São Leopoldo/RS e o atendimento é nacional — conduzimos projetos em todo o Brasil e também no exterior. Fale com a nossa equipe pelo (51) 3466-9601.',
};

export default {
  // -------------------------------------------------------------- PILAR
  '/servicos/plano-de-prevencao-de-riscos-de-acidentes-com-materiais-perfurocortantes-ppramp': {
    resposta:
      'O PPRAMP — Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes — é um programa obrigatório para empresas com profissionais de saúde ou estética que utilizam materiais perfurocortantes, como agulhas e bisturis. Prevê a adoção de equipamentos mais seguros, medidas de segurança e treinamentos. A Previsio elabora o plano.',
    corpo: `
      <h2>O que é o PPRAMP</h2>
      <p>O PPRAMP — Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes — é um programa obrigatório para empresas que empregam profissionais de saúde ou de estética que utilizam materiais perfurocortantes, como agulhas, bisturis e outros objetos do tipo. O objetivo é reduzir o risco de lesões e de contaminação no manuseio desses materiais.</p>

      <h2>O que o plano prevê</h2>
      <p>O programa se organiza, principalmente, em torno de três frentes:</p>
      <ul>
        <li><strong>Adoção de equipamentos mais seguros</strong> — dispositivos com proteção que reduzem o contato com a parte cortante;</li>
        <li><strong>Medidas de segurança</strong> — procedimentos de manuseio, descarte adequado e organização do trabalho;</li>
        <li><strong>Treinamentos</strong> — capacitação das equipes que lidam com os materiais perfurocortantes.</li>
      </ul>

      <h2>Como a Previsio elabora o PPRAMP</h2>
      <p>A Previsio Engenharia elabora o plano de forma personalizada, a partir da realidade de cada empresa: identifica onde estão os riscos de perfurocortantes, define as medidas de prevenção e a substituição de equipamentos e orienta os treinamentos. Assim, a empresa protege seus colaboradores e atende às exigências legais aplicáveis.</p>
    `,
    faq: [
      {
        q: 'O que significa PPRAMP?',
        a: 'PPRAMP é o Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes — o programa que organiza medidas, equipamentos e treinamentos para evitar lesões com agulhas, bisturis e objetos semelhantes.',
      },
      {
        q: 'O PPRAMP é obrigatório? Para quem?',
        a: 'Sim. É um programa obrigatório para empresas que empregam profissionais de saúde ou de estética que utilizam materiais perfurocortantes, como agulhas e bisturis.',
      },
      {
        q: 'A Previsio elabora o plano?',
        a: 'Sim. A Previsio elabora o PPRAMP de forma personalizada, definindo as medidas de segurança, os equipamentos mais seguros e os treinamentos necessários.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------------------------- PPRAMP
  '/ppramp': {
    resposta:
      'O PPRAMP é o Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes, exigido para empresas cujos trabalhadores manuseiam agulhas, bisturis e objetos semelhantes. Reúne medidas preventivas, equipamentos mais seguros e treinamentos para reduzir lesões e contaminações. A Previsio elabora e implementa o plano de forma personalizada.',
    corpo: `
      <h2>Entenda a importância do PPRAMP</h2>
      <p>Proteger a saúde e a integridade física dos trabalhadores é fundamental em qualquer ambiente laboral — e mais ainda onde há manuseio de materiais perfurocortantes. O PPRAMP, Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes, cumpre exatamente esse papel: prevenir lesões e contaminações causadas por agulhas, bisturis, lâminas e objetos do tipo.</p>

      <h2>Benefícios do PPRAMP para as empresas</h2>
      <p>Implementar o PPRAMP traz ganhos para trabalhadores e para a organização. Ao adotar um plano eficaz, a empresa reduz os riscos de acidentes e doenças ocupacionais, o que impacta diretamente o bem-estar dos colaboradores. Além disso, demonstra compromisso com a segurança, mantém a conformidade com as normas vigentes e evita custos com afastamentos e processos.</p>

      <h2>Como a Previsio Engenharia ajuda</h2>
      <p>A Previsio Engenharia oferece o serviço completo de elaboração do PPRAMP, considerando as características de cada cliente:</p>
      <ul>
        <li>Elaboração do plano de prevenção de riscos com perfurocortantes;</li>
        <li>Assessoria na escolha de equipamentos mais seguros;</li>
        <li>Definição de medidas de segurança e procedimentos de descarte;</li>
        <li>Treinamentos para as equipes que manuseiam esses materiais.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o PPRAMP?',
        a: 'É o Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes: o conjunto de medidas, equipamentos e treinamentos que reduz lesões e contaminações no manuseio de agulhas, bisturis e objetos semelhantes.',
      },
      {
        q: 'Quais empresas precisam do PPRAMP?',
        a: 'Empresas cujos trabalhadores manuseiam materiais perfurocortantes — em especial serviços de saúde e de estética que utilizam agulhas, bisturis e objetos do tipo.',
      },
      {
        q: 'A Previsio implementa o plano ou só elabora o documento?',
        a: 'Além de elaborar o plano, a Previsio dá assessoria na escolha dos equipamentos mais seguros, define as medidas de segurança e conduz os treinamentos das equipes.',
      },
      REGIAO,
    ],
  },

  // --------------------------------- PLANO (página descritiva do serviço)
  '/plano-prevencao-riscos-acidentes-materiais-perfurocortantes': {
    resposta:
      'O plano de prevenção de riscos de acidentes com materiais perfurocortantes reúne as medidas que reduzem lesões causadas por agulhas, lâminas e objetos cortantes no trabalho. Protege os colaboradores e atende às normas de segurança. A Previsio elabora o plano de forma personalizada para a realidade de cada empresa.',
    corpo: `
      <h2>O que é o plano de prevenção de riscos com materiais perfurocortantes</h2>
      <p>É um conjunto de medidas preventivas adotadas para reduzir os riscos de acidentes causados pelo manuseio de materiais cortantes, como agulhas, lâminas e outros objetos perfurocortantes. O plano busca evitar lesões graves e contaminações, garantindo a segurança dos trabalhadores e um ambiente laboral mais saudável.</p>

      <h2>Por que o plano é importante</h2>
      <p>Implementar esse plano é fundamental para preservar a integridade física dos colaboradores e para manter a empresa em conformidade com as legislações trabalhistas vigentes. Ao adotar medidas preventivas eficazes, a organização demonstra preocupação com a saúde da equipe, o que contribui para um clima organizacional mais positivo e produtivo.</p>

      <h2>Benefícios do plano</h2>
      <ul>
        <li>Redução de acidentes de trabalho;</li>
        <li>Cumprimento das normas regulamentadoras;</li>
        <li>Proteção da saúde e da integridade dos trabalhadores;</li>
        <li>Ambiente de trabalho mais seguro e saudável;</li>
        <li>Minimização de riscos de contaminação e de lesões físicas.</li>
      </ul>

      <h2>Como a Previsio Engenharia elabora o plano</h2>
      <p>Com equipe técnica qualificada e mais de 1.000 clientes atendidos no Brasil e no exterior, a Previsio Engenharia elabora o plano a partir da realidade de cada empresa — mapeando onde há manuseio de perfurocortantes, definindo as medidas preventivas, os equipamentos mais seguros e os treinamentos necessários.</p>
    `,
    faq: [
      {
        q: 'O que é o plano de prevenção de riscos com materiais perfurocortantes?',
        a: 'É o conjunto de medidas preventivas que reduz os acidentes causados por agulhas, lâminas e objetos cortantes, protegendo os trabalhadores e mantendo a empresa em conformidade com as normas.',
      },
      {
        q: 'O plano é obrigatório?',
        a: 'É exigido de empresas cujos trabalhadores manuseiam materiais perfurocortantes, sobretudo em serviços de saúde e de estética. Manter o plano em dia evita penalidades e protege a equipe.',
      },
      {
        q: 'A Previsio elabora o plano sob medida?',
        a: 'Sim. O plano é personalizado para a realidade de cada empresa, com as medidas preventivas, os equipamentos e os treinamentos adequados às suas atividades.',
      },
      REGIAO,
    ],
  },

  // --------------------------------------------------- TREINAMENTO PPRAMP
  '/treinamento-ppramp': {
    resposta:
      'O treinamento do PPRAMP capacita os trabalhadores que manuseiam materiais perfurocortantes — agulhas, bisturis e semelhantes — a adotar práticas seguras, usar os equipamentos corretos e prevenir lesões e contaminações. A Previsio ministra o treinamento in-company, com conteúdo conforme a norma, integrado ao plano de prevenção.',
    corpo: `
      <h2>O que é o treinamento do PPRAMP</h2>
      <p>O treinamento do PPRAMP capacita os trabalhadores que lidam com materiais perfurocortantes — como agulhas, bisturis e lâminas — a reconhecer os riscos e a adotar práticas seguras. É uma das frentes do Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes e complementa as medidas de segurança e a adoção de equipamentos mais seguros.</p>

      <h2>Por que o treinamento é importante</h2>
      <p>De nada adianta ter equipamentos e procedimentos se a equipe não sabe utilizá-los corretamente. O treinamento reduz o risco de acidentes e contaminações, reforça o descarte adequado dos materiais e ajuda a empresa a cumprir as exigências das normas de segurança, mantendo um ambiente laboral mais seguro.</p>

      <h2>Como a Previsio conduz o treinamento</h2>
      <p>A Previsio Engenharia ministra o treinamento in-company, na sua empresa, com conteúdo conforme a norma aplicável e adaptado à realidade das atividades. O treinamento é integrado ao PPRAMP, de modo que a capacitação das equipes acompanhe as medidas definidas no plano.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento do PPRAMP?',
        a: 'É a capacitação dos trabalhadores que manuseiam materiais perfurocortantes para adotar práticas seguras, usar corretamente os equipamentos e fazer o descarte adequado, prevenindo lesões e contaminações.',
      },
      {
        q: 'Para quem o treinamento é indicado?',
        a: 'Para as equipes que lidam com agulhas, bisturis e objetos semelhantes — especialmente em serviços de saúde e de estética.',
      },
      {
        q: 'Vocês ministram o treinamento na nossa empresa?',
        a: 'Sim. O treinamento é in-company, realizado na sua empresa, com conteúdo conforme a norma e integrado ao plano de prevenção (PPRAMP).',
      },
      REGIAO,
    ],
  },
};
