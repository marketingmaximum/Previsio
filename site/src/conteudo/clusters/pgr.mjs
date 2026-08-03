/**
 * Conteúdo enriquecido — cluster PGR (Programa de Gerenciamento de Riscos).
 *
 * Fontes: o bodyHtml de cada página do site atual e termos que o cliente já usa
 * (PGR ligado à NR-01, GRO, inventário de riscos, plano de ação, ISO 45001,
 * mapa de risco, ordem de serviço). Nada de números, prazos, multas ou cases
 * inventados. Fatos de empresa: "desde 2016", "+1.000 clientes", São Leopoldo/RS.
 *
 * Cada página recebe conteúdo próprio conforme sua INTENÇÃO, ancorado no que a
 * própria página já diz — é assim que a duplicação se resolve por enriquecimento.
 */

// Reutilizado onde faz sentido (padrão do gabarito NR-12).
const NAP_REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional. Fale com a equipe pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------------------- PGR
  '/pgr': {
    resposta:
      'O PGR — Programa de Gerenciamento de Riscos — é o documento exigido pela NR-01 que identifica, avalia e controla os riscos ocupacionais de uma empresa. É formado pelo inventário de riscos e pelo plano de ação, e orienta as medidas preventivas que protegem a saúde dos trabalhadores e mantêm a empresa em conformidade legal.',
    corpo: `
      <h2>O que é o PGR (Programa de Gerenciamento de Riscos)</h2>
      <p>O Programa de Gerenciamento de Riscos é o conjunto estruturado de medidas que identifica, avalia e controla os riscos presentes no ambiente de trabalho. Previsto na NR-01, é o documento que organiza a prevenção de acidentes e doenças ocupacionais em uma empresa, reunindo o diagnóstico dos riscos e as ações para eliminá-los ou reduzi-los.</p>
      <p>O PGR integra o Gerenciamento de Riscos Ocupacionais (GRO) e se apoia em dois documentos centrais: o inventário de riscos, que relaciona os perigos de cada função e ambiente, e o plano de ação, que define as medidas preventivas e os responsáveis por executá-las.</p>

      <h2>Por que sua empresa precisa de um PGR</h2>
      <p>Manter o PGR é uma exigência legal, mas o benefício vai além da conformidade. Ao mapear os riscos antes que se transformem em acidentes, a empresa reduz afastamentos, evita autuações e passivos trabalhistas e demonstra compromisso com a saúde dos colaboradores.</p>
      <ul>
        <li>Redução de acidentes de trabalho e doenças ocupacionais;</li>
        <li>Cumprimento das exigências da NR-01;</li>
        <li>Prevenção de multas e passivos trabalhistas;</li>
        <li>Ambiente de trabalho mais seguro e produtivo.</li>
      </ul>

      <h2>Como a Previsio elabora o PGR</h2>
      <p>A Previsio Engenharia conduz o programa do levantamento à documentação final. Nossa equipe técnica identifica os riscos de cada ambiente, monta o inventário de riscos, quantifica cada perigo e propõe o plano de ação com as medidas de controle. O documento é revisado periodicamente, acompanhando as mudanças do processo produtivo.</p>
      <p>Atuamos desde 2016 e já atendemos mais de mil clientes, com projetos conduzidos em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O PGR é obrigatório?',
        a: 'Sim. O Programa de Gerenciamento de Riscos é exigido pela NR-01 para empresas que possuem empregados. A ausência do documento expõe a empresa a autuações da fiscalização do trabalho e a passivos em caso de acidente.',
      },
      {
        q: 'Qual a diferença entre PGR e GRO?',
        a: 'O GRO (Gerenciamento de Riscos Ocupacionais) é o processo mais amplo de gestão dos riscos; o PGR é o documento que materializa esse processo, reunindo o inventário de riscos e o plano de ação exigidos pela NR-01.',
      },
      {
        q: 'O que compõe o PGR?',
        a: 'O PGR é formado pelo inventário de riscos — que relaciona e classifica os perigos de cada ambiente e função — e pelo plano de ação, que define as medidas preventivas, os prazos e os responsáveis pela sua execução.',
      },
      {
        q: 'A Previsio elabora o PGR da minha empresa?',
        a: 'Sim. Elaboramos o PGR completo: levantamento dos riscos, inventário, plano de ação e revisões periódicas, com acompanhamento técnico de engenharia de segurança do trabalho.',
      },
      NAP_REGIAO,
    ],
  },

  '/servicos/programa-de-gerenciamento-de-riscos-pgr': {
    resposta:
      'O PGR da Previsio é entregue como uma planilha gerencial que identifica os riscos e propõe medidas preventivas. Atende às premissas da NR-01 — acompanhado do inventário de riscos e do plano de ação — e à norma ISO 45001, sendo uma ferramenta para obter e manter a certificação.',
    corpo: `
      <h2>O que é o PGR</h2>
      <p>O Programa de Gerenciamento de Riscos tem como finalidade prevenir a ocorrência de acidentes, avaliando e identificando os riscos e propondo medidas preventivas para eventos que possam ser danosos à saúde e à integridade dos trabalhadores. É o instrumento central da gestão de segurança exigida pela NR-01.</p>

      <h2>Como o PGR da Previsio é apresentado</h2>
      <p>Entregamos o PGR em forma de planilha gerencial, um formato que facilita o acompanhamento das ações e o controle dos riscos ao longo do tempo. Essa apresentação atende às premissas da norma ISO 45001, sendo uma ferramenta imprescindível para a obtenção e a manutenção da certificação.</p>
      <p>O programa é apresentado em conjunto com dois documentos que completam as exigências da NR-01:</p>
      <ul>
        <li><strong>Inventário de riscos</strong> — relaciona e classifica os perigos identificados em cada ambiente e função;</li>
        <li><strong>Plano de ação</strong> — define as medidas preventivas e corretivas para eliminar ou reduzir cada risco.</li>
      </ul>

      <h2>Por que contar com a Previsio</h2>
      <p>Reunimos a experiência de engenharia de segurança do trabalho para transformar o levantamento de riscos em um documento vivo, útil para a rotina da empresa e alinhado às normas. Atuamos desde 2016, com mais de mil clientes atendidos em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O PGR é obrigatório?',
        a: 'Sim. O PGR é exigido pela NR-01 para empresas com empregados. É a principal entrega documental do gerenciamento de riscos ocupacionais.',
      },
      {
        q: 'O PGR serve para a certificação ISO 45001?',
        a: 'Sim. Apresentamos o PGR em planilha gerencial atendendo às premissas da ISO 45001, o que o torna uma ferramenta de apoio para obter e manter a certificação nessa norma.',
      },
      {
        q: 'O que acompanha o PGR?',
        a: 'O PGR é entregue junto com o inventário de riscos e o plano de ação, conforme as premissas da NR-01. Juntos, esses documentos formam a base do gerenciamento de riscos da empresa.',
      },
      {
        q: 'A Previsio elabora o PGR?',
        a: 'Sim. Elaboramos o programa completo, incluindo o inventário de riscos e o plano de ação, e o entregamos em planilha gerencial pronta para acompanhamento.',
      },
      NAP_REGIAO,
    ],
  },

  '/plano-gerenciamento-riscos': {
    resposta:
      'O plano de gerenciamento de riscos (PGR) é o documento que identifica, avalia e propõe medidas de controle para os riscos do ambiente de trabalho. Exigido pela NR-01, ajuda a empresa a prevenir acidentes, reduzir custos com afastamentos e manter-se em conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>O que é o plano de gerenciamento de riscos</h2>
      <p>O plano de gerenciamento de riscos (PGR) é o documento que identifica, avalia e propõe medidas de controle para os riscos presentes no ambiente de trabalho. Previsto na NR-01, é a base da prevenção de acidentes e doenças ocupacionais em qualquer empresa com empregados.</p>

      <h2>Como o PGR torna o trabalho mais seguro</h2>
      <p>A partir de uma análise criteriosa dos riscos, o PGR permite criar estratégias eficazes de prevenção, definindo condições de trabalho mais seguras antes que um perigo se converta em acidente. É o que transforma a segurança de uma reação a incidentes em uma rotina planejada.</p>

      <h2>Vantagens de um PGR bem elaborado</h2>
      <ul>
        <li>Proteção da saúde e da integridade dos colaboradores;</li>
        <li>Redução de custos com acidentes e afastamentos;</li>
        <li>Cumprimento das normas regulamentadoras, evitando multas;</li>
        <li>Melhora da produtividade e da imagem da empresa.</li>
      </ul>

      <h2>Elaboração com a Previsio Engenharia</h2>
      <p>A Previsio Engenharia é especialista em engenharia de segurança do trabalho e elabora o PGR de forma personalizada para cada operação. Reunimos o inventário de riscos e o plano de ação em um documento alinhado à NR-01, com o acompanhamento de uma equipe técnica experiente. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'O plano de gerenciamento de riscos é obrigatório?',
        a: 'Sim. É exigido pela NR-01 para toda empresa que possui empregados, independentemente do porte ou do segmento.',
      },
      {
        q: 'PGR e plano de gerenciamento de riscos são a mesma coisa?',
        a: 'Sim. PGR é a sigla de Programa (ou plano) de Gerenciamento de Riscos, o documento exigido pela NR-01 para identificar, avaliar e controlar os riscos ocupacionais.',
      },
      {
        q: 'Com que frequência o PGR deve ser revisado?',
        a: 'O PGR deve ser mantido atualizado, acompanhando mudanças no ambiente de trabalho, nos processos e na legislação. A Previsio realiza as revisões periódicas do documento.',
      },
      {
        q: 'A Previsio elabora o PGR?',
        a: 'Sim. Elaboramos o PGR de forma personalizada, reunindo o inventário de riscos e o plano de ação em um documento alinhado à NR-01.',
      },
      NAP_REGIAO,
    ],
  },

  '/plano-gerenciamento-riscos-pgr': {
    resposta:
      'O plano de gerenciamento de riscos (PGR) é elaborado em etapas: identificação, avaliação e controle dos riscos de cada atividade laboral. Exigido pela NR-01, deve ser revisado e atualizado sempre que o ambiente de trabalho ou a legislação mudam, mantendo a prevenção de acidentes alinhada à realidade da empresa.',
    corpo: `
      <h2>O plano de gerenciamento de riscos e sua importância</h2>
      <p>O plano de gerenciamento de riscos (PGR) protege a saúde e a segurança dos colaboradores ao antecipar os perigos do ambiente laboral. Previsto na NR-01, é fundamental para prevenir acidentes e doenças ocupacionais e para manter a empresa em conformidade com a legislação.</p>

      <h2>Como é o processo de elaboração</h2>
      <p>Elaborar o PGR envolve identificar, avaliar e controlar os riscos presentes no trabalho. Para isso, realizamos uma análise minuciosa de todas as atividades laborais, reconhecendo os perigos de cada função e estabelecendo as medidas preventivas e corretivas necessárias.</p>
      <ol>
        <li><strong>Identificação</strong> dos riscos de cada atividade e ambiente;</li>
        <li><strong>Avaliação</strong> da gravidade e da probabilidade de cada perigo;</li>
        <li><strong>Controle</strong> por meio do plano de ação, com as medidas preventivas;</li>
        <li><strong>Revisão</strong> periódica, acompanhando as mudanças do trabalho.</li>
      </ol>
      <p>O PGR não é um documento estático: deve ser constantemente revisado e atualizado, acompanhando as mudanças no ambiente de trabalho e nas legislações pertinentes.</p>

      <h2>Consultoria especializada da Previsio</h2>
      <p>A Previsio Engenharia oferece consultoria completa na elaboração e implementação do PGR para empresas de diversos segmentos. Auxiliamos na identificação dos riscos, na definição das medidas preventivas e no acompanhamento da eficácia do programa, com uma equipe técnica experiente. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'Quais são as etapas de elaboração do PGR?',
        a: 'A elaboração passa por identificação, avaliação e controle dos riscos. Começa por uma análise das atividades laborais, segue para a quantificação dos perigos e termina no plano de ação com as medidas preventivas.',
      },
      {
        q: 'Com que frequência o PGR deve ser atualizado?',
        a: 'O PGR deve ser constantemente revisado e atualizado, acompanhando as mudanças no ambiente de trabalho e nas legislações pertinentes. Não é um documento que se elabora uma única vez.',
      },
      {
        q: 'O PGR é obrigatório?',
        a: 'Sim. O Programa de Gerenciamento de Riscos é exigido pela NR-01 para empresas com empregados.',
      },
      {
        q: 'A Previsio presta consultoria em PGR?',
        a: 'Sim. Oferecemos consultoria especializada na elaboração e implementação do PGR, auxiliando na identificação dos riscos, na definição das medidas preventivas e no acompanhamento da eficácia do programa.',
      },
      NAP_REGIAO,
    ],
  },

  '/plano-gerenciamento-riscos-construcao-civil': {
    resposta:
      'O plano de gerenciamento de riscos na construção civil identifica, avalia e controla os perigos típicos dos canteiros de obra — como quedas, choques elétricos e soterramentos. Exigido pela NR-01, garante um ambiente mais seguro para os trabalhadores e mantém a construtora em conformidade com a legislação trabalhista.',
    corpo: `
      <h2>O que é o plano de gerenciamento de riscos na construção civil</h2>
      <p>O plano de gerenciamento de riscos para a construção civil é o documento que reúne as medidas preventivas e corretivas para identificar, avaliar e controlar os riscos das atividades realizadas em canteiros de obra. É a aplicação do PGR, exigido pela NR-01, à realidade específica do setor da construção.</p>

      <h2>Os riscos característicos do canteiro de obra</h2>
      <p>A construção civil é reconhecida por concentrar riscos elevados e variados. O plano se dedica a mapear e mitigar perigos como quedas de altura, choques elétricos e soterramentos, entre outros, promovendo um ambiente de trabalho mais seguro para todos os envolvidos na obra.</p>

      <h2>Por que a construtora precisa do plano</h2>
      <p>Além de proteger a integridade física dos trabalhadores, o plano de gerenciamento de riscos assegura o cumprimento das legislações trabalhistas e previdenciárias, evitando multas e penalidades. Entre os ganhos estão:</p>
      <ul>
        <li>Redução de acidentes e doenças ocupacionais no canteiro;</li>
        <li>Aumento da produtividade e do clima organizacional;</li>
        <li>Valorização da imagem da construtora perante clientes;</li>
        <li>Redução de custos com indenizações e despesas médicas.</li>
      </ul>

      <h2>A Previsio na segurança da sua obra</h2>
      <p>A Previsio Engenharia elabora e executa planos de gerenciamento de riscos para a construção civil com soluções personalizadas para cada obra. Nossa equipe técnica atua em conformidade com as normas vigentes, do inventário de riscos ao plano de ação. Atuamos desde 2016, com mais de mil clientes atendidos em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O PGR é obrigatório na construção civil?',
        a: 'Sim. Toda empresa com empregados precisa manter o PGR conforme a NR-01, e no setor da construção o documento é ainda mais crítico pela concentração de riscos como quedas, choques elétricos e soterramentos.',
      },
      {
        q: 'Quais riscos o plano cobre em uma obra?',
        a: 'O plano mapeia os perigos típicos do canteiro, como quedas de altura, choques elétricos e soterramentos, e define as medidas de proteção para cada um, protegendo os trabalhadores da obra.',
      },
      {
        q: 'A Previsio elabora o plano para o meu canteiro?',
        a: 'Sim. Elaboramos e executamos o plano de gerenciamento de riscos para a construção civil, com o inventário de riscos e o plano de ação adaptados à realidade da sua obra.',
      },
      NAP_REGIAO,
    ],
  },

  // ------------------------------------------------------------------- GRO
  '/gerenciamento-riscos-ocupacionais-gro': {
    resposta:
      'O Gerenciamento de Riscos Ocupacionais (GRO) é o processo de identificar, analisar e controlar os perigos do ambiente de trabalho. Um de seus pilares é o PGR — Programa de Gerenciamento de Riscos —, exigido pela NR-01, que reúne as medidas preventivas e corretivas para reduzir acidentes e doenças ocupacionais.',
    corpo: `
      <h2>O que é o Gerenciamento de Riscos Ocupacionais (GRO)</h2>
      <p>O Gerenciamento de Riscos Ocupacionais é o processo que identifica, analisa e controla os perigos presentes no ambiente de trabalho. Ao adotar práticas eficientes de gestão de riscos, a empresa minimiza acidentes e doenças ocupacionais e constrói um ambiente mais seguro e saudável para os colaboradores.</p>

      <h2>O PGR como pilar do GRO</h2>
      <p>Um dos principais pilares do GRO é a elaboração do Programa de Gerenciamento de Riscos (PGR), que estabelece as medidas preventivas e corretivas para mitigar os riscos identificados. É por meio do PGR — com o inventário de riscos e o plano de ação — que o gerenciamento sai do conceito e se torna prática documentada, conforme a NR-01.</p>

      <h2>Benefícios do GRO</h2>
      <ul>
        <li><strong>Segurança dos trabalhadores</strong> — ao controlar os riscos, protege-se a integridade física e a saúde da equipe;</li>
        <li><strong>Conformidade legal</strong> — o GRO auxilia na adequação às normas regulamentadoras, evitando sanções;</li>
        <li><strong>Redução de custos</strong> — menos acidentes significam menor absenteísmo e menos despesas associadas;</li>
        <li><strong>Cultura de segurança</strong> — a prevenção passa a orientar as decisões da organização.</li>
      </ul>

      <h2>Conte com a Previsio Engenharia</h2>
      <p>Referência em engenharia de segurança do trabalho desde 2016, a Previsio conduz o GRO da sua empresa com uma equipe técnica qualificada, do levantamento dos riscos à documentação. Já atendemos mais de mil clientes, com projetos em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'Qual a diferença entre GRO e PGR?',
        a: 'O GRO é o processo amplo de gestão dos riscos ocupacionais; o PGR é o documento que materializa esse processo, reunindo o inventário de riscos e o plano de ação exigidos pela NR-01.',
      },
      {
        q: 'O GRO é obrigatório?',
        a: 'Sim. O Gerenciamento de Riscos Ocupacionais decorre da NR-01 e se aplica às empresas com empregados. Sua principal entrega documental é o PGR.',
      },
      {
        q: 'Quem precisa implementar o GRO?',
        a: 'Empresas de todos os portes e segmentos que possuem empregados devem gerenciar seus riscos ocupacionais e manter o PGR atualizado.',
      },
      {
        q: 'A Previsio implementa o GRO?',
        a: 'Sim. Conduzimos o gerenciamento de riscos ocupacionais do levantamento à documentação, incluindo a elaboração do PGR, do inventário de riscos e do plano de ação.',
      },
      NAP_REGIAO,
    ],
  },

  // ------------------------------------------------------------ INVENTÁRIO
  '/inventario-riscos': {
    resposta:
      'O inventário de riscos é o levantamento que identifica, cataloga e classifica os perigos do ambiente de trabalho — físicos, químicos, biológicos e ergonômicos. É um dos documentos que compõem o PGR, exigido pela NR-01, e serve de base para as medidas preventivas contra acidentes e doenças ocupacionais.',
    corpo: `
      <h2>O que é o inventário de riscos</h2>
      <p>O inventário de riscos é o processo que identifica e cataloga os potenciais perigos presentes no ambiente laboral. A partir desse levantamento, é possível mapear e classificar os riscos físicos, químicos, biológicos e ergonômicos aos quais os colaboradores estão expostos, o que permite implementar medidas preventivas eficazes.</p>
      <p>Como parte do PGR exigido pela NR-01, o inventário é o retrato dos riscos da empresa: registra onde estão os perigos, a que agentes os trabalhadores se expõem e qual a gravidade de cada situação.</p>

      <h2>Por que o inventário é essencial</h2>
      <p>Empresas que realizam o inventário de riscos não apenas cumprem suas obrigações legais, como investem na prevenção de acidentes e doenças ocupacionais. Ao identificar e quantificar os riscos, torna-se possível adotar medidas corretivas e preventivas de forma assertiva, reduzindo custos com afastamentos e passivos trabalhistas.</p>

      <h2>Do inventário ao plano de ação</h2>
      <p>O inventário de riscos não caminha sozinho: é a partir dele que se constrói o plano de ação, com as medidas para eliminar ou reduzir cada risco identificado. Juntos, os dois documentos formam o núcleo do Programa de Gerenciamento de Riscos.</p>

      <h2>Como a Previsio elabora seu inventário</h2>
      <p>A Previsio Engenharia atua de forma personalizada, identificando os riscos específicos de cada ambiente de trabalho e propondo soluções sob medida. Com ampla experiência na condução de projetos em todo o território nacional, mais de mil clientes atendidos e atuação desde 2016, garantimos um inventário preciso e útil para a rotina de segurança da empresa.</p>
    `,
    faq: [
      {
        q: 'O que o inventário de riscos registra?',
        a: 'Ele identifica e classifica os riscos físicos, químicos, biológicos e ergonômicos de cada ambiente e função, indicando onde estão os perigos e a que agentes os trabalhadores se expõem.',
      },
      {
        q: 'O inventário de riscos é obrigatório?',
        a: 'Sim. O inventário integra o PGR exigido pela NR-01 e é o ponto de partida para o plano de ação e para as demais medidas de prevenção da empresa.',
      },
      {
        q: 'Qual a relação entre inventário de riscos e PGR?',
        a: 'O inventário de riscos é um dos documentos que compõem o PGR. Ele registra e classifica os perigos; o plano de ação, também parte do PGR, define as medidas para controlá-los.',
      },
      {
        q: 'A Previsio elabora o inventário de riscos?',
        a: 'Sim. Nossa equipe identifica os riscos de cada ambiente, classifica cada perigo e entrega o inventário pronto para orientar o plano de ação.',
      },
      NAP_REGIAO,
    ],
  },

  // -------------------------------------------------------------- MAPA DE RISCO
  '/mapa-risco': {
    resposta:
      'O mapa de risco é uma representação gráfica que identifica e classifica, por cores, os riscos existentes em cada setor da empresa. Fixado em locais estratégicos, comunica aos trabalhadores os perigos presentes e as principais medidas de proteção obrigatórias, ajudando a prevenir acidentes e doenças ocupacionais.',
    corpo: `
      <h2>O que é o mapa de risco</h2>
      <p>O mapa de risco é uma ferramenta gráfica que identifica e classifica os riscos presentes no ambiente de trabalho. Por meio de uma representação visual, torna possível enxergar os perigos físicos, químicos e biológicos que podem afetar a saúde e a segurança dos trabalhadores de cada setor.</p>
      <p>Trata-se de uma representação que deve ser fixada em locais estratégicos, apresentando aos trabalhadores que circulam pelos diversos setores da empresa os riscos existentes e as principais medidas de proteção obrigatórias.</p>

      <h2>Por que manter o mapa de risco</h2>
      <p>Empresas que elaboram e mantêm o mapa de risco não apenas cumprem exigências legais, como investem na prevenção de acidentes e doenças ocupacionais. A identificação prévia dos perigos permite adotar medidas preventivas e corretivas de forma mais eficiente e apoia decisões de segurança mais assertivas.</p>
      <ul>
        <li>Redução de acidentes de trabalho;</li>
        <li>Conscientização dos colaboradores sobre os riscos de cada área;</li>
        <li>Cumprimento das normas de segurança do trabalho;</li>
        <li>Ambiente mais organizado, saudável e produtivo.</li>
      </ul>

      <h2>O mapa de risco com a Previsio</h2>
      <p>Atuando desde 2016 em engenharia de segurança do trabalho, a Previsio elabora o mapa de risco a partir do reconhecimento dos perigos de cada setor, oferecendo todo o suporte — da identificação dos riscos à sinalização final. Já atendemos mais de mil clientes em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O que é o mapa de risco?',
        a: 'É uma representação gráfica, fixada em locais estratégicos, que mostra aos trabalhadores os riscos existentes em cada setor e as principais medidas de proteção obrigatórias, geralmente por meio de cores.',
      },
      {
        q: 'O mapa de risco é obrigatório?',
        a: 'A elaboração do mapa de risco atende às exigências de segurança do trabalho e é uma medida de prevenção reconhecida. Ele deve ser fixado em local visível, comunicando os perigos de cada área.',
      },
      {
        q: 'Quais riscos o mapa representa?',
        a: 'O mapa identifica e classifica os perigos físicos, químicos e biológicos de cada setor, tornando visíveis as áreas críticas do ambiente de trabalho.',
      },
      {
        q: 'A Previsio elabora o mapa de risco?',
        a: 'Sim. Reconhecemos os riscos de cada setor e elaboramos o mapa de risco, com todo o suporte da identificação dos perigos à sinalização.',
      },
      NAP_REGIAO,
    ],
  },

  '/servicos/mapa-de-risco': {
    resposta:
      'O mapa de risco é a representação gráfica que deve ser fixada em locais estratégicos, apresentando aos trabalhadores que acessam os diversos setores da empresa os riscos existentes e as principais medidas de proteção obrigatórias. É uma ferramenta visual de comunicação de perigos no ambiente de trabalho.',
    corpo: `
      <h2>O que é o mapa de risco</h2>
      <p>O mapa de risco é uma representação gráfica que deve ser fixada em locais estratégicos, apresentando aos trabalhadores que acessam os diversos setores da empresa os riscos existentes e as principais medidas de proteção obrigatórias. É uma forma visual e direta de comunicar os perigos de cada área.</p>

      <h2>Para que serve o mapa de risco</h2>
      <p>Ao tornar os riscos visíveis, o mapa orienta o comportamento de quem circula pela empresa e reforça a cultura de prevenção. Ele indica, por cores e símbolos, onde estão os perigos e o que fazer para se proteger, apoiando o cumprimento das normas de segurança do trabalho.</p>

      <h2>Parte da gestão de riscos</h2>
      <p>O mapa de risco complementa os demais documentos de segurança da empresa, como o inventário de riscos e o plano de ação. A Previsio Engenharia elabora o mapa a partir do reconhecimento dos perigos de cada setor e o entrega pronto para fixação. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'Onde o mapa de risco deve ser fixado?',
        a: 'Em locais estratégicos, de forma que os trabalhadores que acessam os diversos setores da empresa visualizem os riscos existentes e as principais medidas de proteção obrigatórias.',
      },
      {
        q: 'O que o mapa de risco mostra?',
        a: 'Ele apresenta, de forma gráfica, os riscos existentes em cada setor e as principais medidas de proteção obrigatórias, comunicando visualmente os perigos aos colaboradores.',
      },
      {
        q: 'A Previsio elabora o mapa de risco?',
        a: 'Sim. Reconhecemos os perigos de cada setor e elaboramos o mapa de risco pronto para fixação, integrado aos demais documentos de segurança.',
      },
      NAP_REGIAO,
    ],
  },

  // ------------------------------------------------------------ ORDEM DE SERVIÇO
  '/ordem-servico-nr01': {
    resposta:
      'A ordem de serviço da NR-01 é o documento, assinado junto ao contrato de todos os trabalhadores, que apresenta os riscos existentes, as medidas de proteção e os direitos e obrigações de cada cargo. Obrigatória pela NR-01, funciona como proteção jurídica para o trabalhador e para a empresa.',
    corpo: `
      <h2>O que é a ordem de serviço da NR-01</h2>
      <p>A ordem de serviço é um documento essencial para a segurança e a saúde dos trabalhadores. Trata-se de um documento que deve ser assinado juntamente com o contrato de todos os trabalhadores e que estabelece diretrizes claras para a execução das atividades, prevenindo acidentes e doenças ocupacionais.</p>
      <p>A ordem de serviço é obrigatória conforme a NR-01 e deve apresentar os riscos existentes, as medidas de proteção e os direitos e obrigações de cada cargo.</p>

      <h2>Por que a ordem de serviço protege a empresa</h2>
      <p>Ao informar formalmente cada colaborador sobre os procedimentos e riscos das atividades que desempenha, a ordem de serviço reduz a ocorrência de acidentes e serve como proteção jurídica tanto para o trabalhador quanto para a empresa. É a comprovação de que a empresa cumpriu seu dever de informar sobre os riscos e as medidas de proteção.</p>

      <h2>Ordem de serviço e o gerenciamento de riscos</h2>
      <p>A ordem de serviço se conecta ao PGR e ao inventário de riscos: os perigos identificados no gerenciamento de riscos são comunicados ao trabalhador por meio desse documento. A Previsio Engenharia elabora ordens de serviço alinhadas à NR-01, integradas à documentação de segurança da empresa. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'A ordem de serviço é obrigatória?',
        a: 'Sim. A ordem de serviço é obrigatória conforme a NR-01 e deve ser assinada por todos os trabalhadores, junto ao contrato, apresentando os riscos, as medidas de proteção e os direitos e obrigações de cada cargo.',
      },
      {
        q: 'O que a ordem de serviço deve conter?',
        a: 'Os riscos existentes na função, as medidas de proteção adotadas e os direitos e obrigações de cada cargo. É por isso que ela funciona como proteção jurídica para o trabalhador e para a empresa.',
      },
      {
        q: 'Quem precisa emitir ordem de serviço?',
        a: 'Toda empresa com empregados, pois a NR-01 determina que o documento seja assinado por todos os trabalhadores. Ele deve refletir os riscos de cada função.',
      },
      {
        q: 'A Previsio elabora as ordens de serviço?',
        a: 'Sim. Elaboramos as ordens de serviço conforme a NR-01, alinhadas ao inventário de riscos e ao PGR da sua empresa.',
      },
      NAP_REGIAO,
    ],
  },

  '/servicos/ordens-de-servico': {
    resposta:
      'A ordem de serviço é o documento que deve ser assinado junto ao contrato de todos os trabalhadores. Obrigatória conforme a NR-01, apresenta os riscos existentes, as medidas de proteção e os direitos e obrigações de cada cargo, servindo como proteção jurídica para o trabalhador e para a empresa.',
    corpo: `
      <h2>O que é a ordem de serviço</h2>
      <p>A ordem de serviço é um documento que deve ser assinado juntamente com o contrato de todos os trabalhadores. Ela é obrigatória conforme a NR-01 e deve apresentar os riscos existentes, as medidas de proteção e os direitos e obrigações de cada cargo. Com isso, esse documento serve como proteção jurídica para o trabalhador e para a empresa.</p>

      <h2>Por que a ordem de serviço é importante</h2>
      <p>Ao registrar formalmente os riscos de cada função e as medidas de proteção correspondentes, a ordem de serviço garante que o trabalhador seja informado sobre as condições da sua atividade. Esse registro reduz acidentes e ampara a empresa em eventuais questionamentos legais.</p>

      <h2>Emissão com a Previsio</h2>
      <p>A Previsio Engenharia elabora as ordens de serviço a partir dos riscos identificados no inventário de riscos e no PGR, mantendo a documentação de segurança da empresa alinhada à NR-01. Atuamos desde 2016, com mais de mil clientes atendidos em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'A ordem de serviço é obrigatória?',
        a: 'Sim, conforme a NR-01. Deve ser assinada por todos os trabalhadores, junto ao contrato, e apresentar os riscos, as medidas de proteção e os direitos e obrigações de cada cargo.',
      },
      {
        q: 'Por que a ordem de serviço é uma proteção jurídica?',
        a: 'Porque comprova que a empresa informou o trabalhador sobre os riscos e as medidas de proteção da sua função. Isso ampara tanto o colaborador quanto a empresa.',
      },
      {
        q: 'A Previsio emite as ordens de serviço?',
        a: 'Sim. Elaboramos as ordens de serviço conforme a NR-01, a partir do inventário de riscos e do PGR da sua empresa.',
      },
      NAP_REGIAO,
    ],
  },

  // ------------------------------------------------------------- TREINAMENTO NR-01
  '/treinamento-nr01': {
    resposta:
      'O treinamento da NR-01 é a capacitação que conscientiza trabalhadores e empregadores sobre a gestão de segurança e saúde no trabalho prevista na Norma Regulamentadora 1. Ajuda a empresa a cumprir suas obrigações legais e a promover um ambiente de trabalho mais seguro, reduzindo acidentes e afastamentos.',
    corpo: `
      <h2>O que é o treinamento da NR-01</h2>
      <p>O treinamento da NR-01 é fundamental para a conscientização e a capacitação de trabalhadores e empregadores sobre a gestão de segurança e saúde no trabalho, de acordo com a Norma Regulamentadora 1. É por meio dele que a empresa dissemina as diretrizes de prevenção e cumpre parte de suas obrigações legais.</p>

      <h2>Vantagens do treinamento</h2>
      <p>Investir no treinamento da NR-01 traz benefícios tanto para os colaboradores quanto para a empresa. Ao promover a conscientização sobre segurança do trabalho, a organização reduz o risco de acidentes, diminui custos com afastamentos e multas e melhora a produtividade e a qualidade do ambiente laboral.</p>
      <ul>
        <li>Conscientização dos trabalhadores sobre os riscos de suas atividades;</li>
        <li>Cumprimento das obrigações previstas na NR-01;</li>
        <li>Redução de acidentes, afastamentos e custos associados;</li>
        <li>Fortalecimento da cultura de segurança na empresa.</li>
      </ul>

      <h2>Treinamento integrado à gestão de riscos</h2>
      <p>O treinamento da NR-01 conversa diretamente com o PGR e com as ordens de serviço: os riscos identificados no gerenciamento de riscos são o conteúdo que os trabalhadores precisam conhecer. A Previsio Engenharia oferece treinamentos completos de segurança do trabalho, personalizados para a realidade de cada empresa. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'O treinamento da NR-01 é obrigatório?',
        a: 'A NR-01 estabelece diretrizes de gestão de segurança e saúde no trabalho, e a capacitação dos trabalhadores é parte das obrigações legais da empresa. O treinamento ajuda a cumpri-las e a reduzir acidentes.',
      },
      {
        q: 'Quem deve participar do treinamento?',
        a: 'O treinamento é voltado a trabalhadores e empregadores, conscientizando todos sobre a gestão de segurança e saúde no trabalho prevista na Norma Regulamentadora 1.',
      },
      {
        q: 'A Previsio realiza o treinamento da NR-01?',
        a: 'Sim. Oferecemos treinamentos completos de segurança do trabalho, incluindo o da NR-01, personalizados para as necessidades específicas de cada empresa.',
      },
      NAP_REGIAO,
    ],
  },

  // ---------------------------------------------------------- ANÁLISE DE RISCOS
  '/analise-preliminar-riscos-apr': {
    resposta:
      'A análise preliminar de riscos (APR) é um estudo preventivo que identifica e avalia os possíveis perigos antes da realização de uma atividade, considerando o ambiente, os equipamentos e as tarefas envolvidas. A partir dela, propõem-se medidas para eliminar ou minimizar os riscos, prevenindo acidentes de trabalho.',
    corpo: `
      <h2>O que é a análise preliminar de riscos (APR)</h2>
      <p>A análise preliminar de riscos é um procedimento preventivo, fundamental para garantir a segurança dos trabalhadores, especialmente na indústria e na construção civil. Seu objetivo é identificar e avaliar os possíveis perigos antes da realização de uma atividade, considerando variáveis como o ambiente, os equipamentos e as tarefas envolvidas.</p>
      <p>Por ser feita antes da execução, a APR permite antecipar situações de perigo e propor medidas para eliminar ou minimizar os riscos, contribuindo para a prevenção de acidentes.</p>

      <h2>Benefícios da APR</h2>
      <p>Ao identificar as situações de perigo de forma antecipada, é possível adotar medidas de controle eficazes, reduzindo a ocorrência de incidentes e acidentes de trabalho. Além disso, a APR contribui para o cumprimento das normas de segurança vigentes, evitando penalizações e garantindo a proteção jurídica da empresa.</p>
      <ul>
        <li>Redução de acidentes de trabalho e incidentes;</li>
        <li>Cumprimento das normas de segurança do trabalho;</li>
        <li>Otimização dos processos produtivos;</li>
        <li>Proteção jurídica da empresa.</li>
      </ul>

      <h2>Como a Previsio conduz a APR</h2>
      <p>A Previsio Engenharia realiza um diagnóstico preciso dos riscos presentes no ambiente de trabalho e elabora planos de ação personalizados para cada cliente. Oferecemos suporte na implementação das medidas de controle e na adequação às normas regulamentadoras, com uma equipe técnica qualificada e experiente.</p>
    `,
    faq: [
      {
        q: 'Qual a diferença entre APR e PGR?',
        a: 'A APR é um estudo pontual, feito antes de uma atividade específica para antecipar seus perigos. O PGR é o programa que gerencia os riscos de toda a empresa, exigido pela NR-01. Os dois se complementam.',
      },
      {
        q: 'Quando a APR deve ser feita?',
        a: 'Antes da realização de uma atividade, para identificar e avaliar os perigos relacionados ao ambiente, aos equipamentos e às tarefas envolvidas, permitindo adotar medidas de controle antecipadamente.',
      },
      {
        q: 'Quem precisa de APR?',
        a: 'Empresas de setores com atividades de risco, como indústria e construção civil, se beneficiam da APR para prevenir acidentes antes que as atividades sejam executadas.',
      },
      {
        q: 'A Previsio elabora a APR?',
        a: 'Sim. Realizamos o diagnóstico dos riscos e elaboramos planos de ação personalizados, com suporte na implementação das medidas de controle.',
      },
      NAP_REGIAO,
    ],
  },

  '/analise-riscos-seguranca-do-trabalho': {
    resposta:
      'A análise de riscos de segurança do trabalho é o processo que identifica e avalia os perigos do ambiente laboral — do ambiente físico e dos equipamentos às práticas operacionais e aos fatores psicossociais. Com base nela, definem-se medidas preventivas e corretivas que protegem os trabalhadores e evitam sanções legais.',
    corpo: `
      <h2>A importância da análise de riscos de segurança do trabalho</h2>
      <p>A análise de riscos de segurança do trabalho é um processo fundamental para garantir a integridade física dos trabalhadores em qualquer ambiente laboral. A identificação e a avaliação dos perigos presentes no local de trabalho são essenciais para prevenir acidentes, promover a saúde ocupacional e assegurar a conformidade com as normas de segurança.</p>

      <h2>O que a análise considera</h2>
      <p>A análise leva em conta diversos fatores que podem representar perigo para os trabalhadores, como as condições do ambiente, o uso de equipamentos, as práticas operacionais e até mesmo os fatores psicossociais. Com base nesse diagnóstico, é possível elaborar medidas preventivas e corretivas, implementar treinamentos específicos e promover uma cultura de segurança.</p>

      <h2>Análise de riscos e conformidade</h2>
      <p>Atender às normas de segurança é fundamental para proteger a saúde dos trabalhadores e evitar sanções legais e prejuízos financeiros. A análise de riscos é a base desse cumprimento: alimenta o inventário de riscos e o plano de ação e orienta as demais medidas de prevenção da empresa.</p>

      <h2>Previsio Engenharia, especialista em análise de riscos</h2>
      <p>Sediada em São Leopoldo/RS, a Previsio é especializada em engenharia de segurança do trabalho, com ampla experiência em análises de riscos nos mais diversos ambientes. Com mais de mil clientes atendidos e uma equipe técnica qualificada, oferecemos soluções personalizadas para cada operação.</p>
    `,
    faq: [
      {
        q: 'O que a análise de riscos avalia?',
        a: 'As condições do ambiente, o uso de equipamentos, as práticas operacionais e até fatores psicossociais — tudo o que pode representar perigo para os trabalhadores no ambiente laboral.',
      },
      {
        q: 'A análise de riscos é obrigatória?',
        a: 'A identificação e a avaliação dos riscos são a base da segurança do trabalho e alimentam documentos exigidos por norma, como o inventário de riscos e o PGR previstos na NR-01.',
      },
      {
        q: 'Análise de riscos e PGR são a mesma coisa?',
        a: 'Não. A análise de riscos é o processo de identificar e avaliar os perigos; o PGR é o documento que organiza esses resultados em inventário de riscos e plano de ação, conforme a NR-01.',
      },
      {
        q: 'A Previsio realiza a análise de riscos?',
        a: 'Sim. Nossa equipe conduz a análise em diferentes ambientes laborais e propõe as medidas preventivas e corretivas adequadas a cada caso.',
      },
      NAP_REGIAO,
    ],
  },

  '/analise-riscos': {
    resposta:
      'A análise de riscos é o processo técnico que identifica e avalia os perigos de atividades industriais e comerciais, examinando fatores de segurança elétrica, mecânica e ergonômica. A partir dela, propõem-se medidas preventivas que reduzem acidentes, atendem às normas regulamentadoras e tornam o ambiente de trabalho mais seguro.',
    corpo: `
      <h2>O que é a análise de riscos</h2>
      <p>A análise de riscos é um processo essencial para identificar e avaliar perigos em diversas atividades industriais e comerciais. O serviço examina fatores como a segurança elétrica, mecânica e ergonômica e propõe medidas preventivas para minimizar acidentes, permitindo criar um ambiente de trabalho mais seguro e em conformidade com as normas.</p>

      <h2>Benefícios da análise de riscos</h2>
      <p>Empresas que investem na análise de riscos garantem maior proteção para seus funcionários, evitam multas e aumentam a eficiência dos processos produtivos. A avaliação minuciosa de todos os aspectos de segurança permite identificar perigos potenciais e agir preventivamente, evitando acidentes e prejuízos.</p>

      <h2>Como funciona o processo</h2>
      <p>Nossa equipe conduz avaliações detalhadas em todas as áreas de risco e elabora relatórios completos com recomendações precisas para a mitigação de perigos. Esse diagnóstico serve de base para os documentos de gestão de riscos, como o inventário de riscos e o plano de ação.</p>

      <h2>Por que escolher a Previsio Engenharia</h2>
      <p>Sediada em São Leopoldo/RS, a Previsio é referência em engenharia de segurança do trabalho. Com mais de mil clientes atendidos e projetos conduzidos em todo o Brasil e no exterior, unimos expertise técnica e atendimento personalizado em cada análise.</p>
    `,
    faq: [
      {
        q: 'O que a análise de riscos examina?',
        a: 'Fatores de segurança elétrica, mecânica e ergonômica das atividades industriais e comerciais, identificando os perigos e propondo medidas preventivas para reduzir acidentes.',
      },
      {
        q: 'Para que serve a análise de riscos?',
        a: 'Para antecipar perigos e definir medidas preventivas, tornando o ambiente mais seguro, atendendo às normas regulamentadoras e reduzindo multas e prejuízos.',
      },
      {
        q: 'A análise de riscos gera algum documento?',
        a: 'Sim. A Previsio entrega relatórios completos com as recomendações para mitigar os perigos, que servem de base para o inventário de riscos e o plano de ação da empresa.',
      },
      {
        q: 'A Previsio realiza a análise de riscos?',
        a: 'Sim. Nossa equipe conduz avaliações detalhadas em todas as áreas de risco, com soluções personalizadas para cada cliente.',
      },
      NAP_REGIAO,
    ],
  },

  // ----------------------------------------------------- SINALIZAÇÃO / PLANO DE AÇÃO
  '/plano-sinalizacao-riscos': {
    resposta:
      'O plano de sinalização de riscos torna visíveis os perigos presentes no ambiente de trabalho. Por meio de placas, avisos e cores específicas, alerta os trabalhadores sobre os riscos existentes, ajudando a evitar situações perigosas, prevenir acidentes e manter a empresa em conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>O que é o plano de sinalização de riscos</h2>
      <p>O plano de sinalização de riscos é responsável por tornar visíveis os potenciais perigos presentes no local de trabalho. Por meio de placas, avisos e cores específicas, os trabalhadores são alertados sobre os riscos existentes, o que permite que identifiquem e evitem situações perigosas.</p>
      <p>Essa medida previne acidentes, aumenta a conscientização sobre segurança e assegura a conformidade com as normas regulamentadoras, protegendo os colaboradores.</p>

      <h2>A importância da sinalização</h2>
      <p>Implementar um plano de sinalização de riscos é essencial para promover um ambiente de trabalho seguro. Ao adotar medidas visuais claras e objetivas, a empresa demonstra compromisso com a segurança dos funcionários e atende exigências legais que visam prevenir acidentes e preservar a integridade física dos trabalhadores.</p>
      <p>Além disso, a sinalização contribui para a organização e a eficiência no local de trabalho, facilitando a identificação de áreas críticas e orientando a conduta dos colaboradores.</p>

      <h2>Benefícios da sinalização de riscos</h2>
      <ul>
        <li>Redução de acidentes de trabalho;</li>
        <li>Conformidade com as normas de segurança;</li>
        <li>Proteção dos colaboradores;</li>
        <li>Organização e eficiência no ambiente laboral;</li>
        <li>Prevenção de prejuízos financeiros.</li>
      </ul>

      <h2>Sinalização com a Previsio Engenharia</h2>
      <p>Localizada em São Leopoldo/RS e atuando desde 2016, a Previsio Engenharia oferece soluções completas para a implementação do plano de sinalização de riscos, integrando-o ao inventário de riscos e ao plano de ação da empresa. Já atendemos mais de mil clientes em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O que é o plano de sinalização de riscos?',
        a: 'É o conjunto de placas, avisos e cores que tornam visíveis os perigos do ambiente de trabalho, alertando os trabalhadores sobre os riscos existentes e orientando as medidas de proteção.',
      },
      {
        q: 'A sinalização de riscos é obrigatória?',
        a: 'A sinalização é uma medida de segurança que atende às normas regulamentadoras e é essencial para prevenir acidentes. Ela comunica visualmente os perigos e as áreas críticas da empresa.',
      },
      {
        q: 'Como a sinalização se relaciona com o mapa de risco?',
        a: 'A sinalização coloca no ambiente, por placas e cores, os perigos que o mapa de risco e o inventário de riscos identificam. É a etapa que torna os riscos visíveis no dia a dia.',
      },
      {
        q: 'A Previsio implementa a sinalização de riscos?',
        a: 'Sim. Oferecemos soluções completas de sinalização, integradas ao inventário de riscos e ao plano de ação da empresa.',
      },
      NAP_REGIAO,
    ],
  },

  '/planos-acao-reducao-riscos': {
    resposta:
      'Os planos de ação para redução de riscos definem as estratégias e as medidas preventivas para eliminar ou reduzir os perigos identificados no ambiente de trabalho. A partir da avaliação de cada risco, o plano estabelece as ações de controle — parte essencial do PGR exigido pela NR-01.',
    corpo: `
      <h2>Por que os planos de ação para redução de riscos são essenciais</h2>
      <p>Os planos de ação para redução de riscos são fundamentais para garantir a segurança e a saúde dos trabalhadores. Ao implementar estratégias eficazes para identificar e mitigar os perigos, a empresa demonstra compromisso com a proteção dos colaboradores e evita penalidades legais.</p>

      <h2>Da avaliação do risco à ação</h2>
      <p>O plano de ação nasce da avaliação dos perigos existentes. A empresa analisa os riscos associados a cada perigo e, a partir daí, implementa as medidas preventivas necessárias para garantir a segurança de todos. É a etapa que transforma o diagnóstico em melhorias concretas no ambiente de trabalho.</p>
      <p>Por isso, o plano de ação caminha junto com o inventário de riscos: um relaciona os perigos, o outro define o que fazer para controlá-los. Juntos, formam o núcleo do PGR previsto na NR-01.</p>

      <h2>Por que contar com a Previsio Engenharia</h2>
      <p>A Previsio Engenharia elabora e executa planos de ação para redução de riscos com uma equipe especializada em engenharia de segurança do trabalho. Entre os diferenciais:</p>
      <ul>
        <li>Profissionais especializados em engenharia de segurança do trabalho;</li>
        <li>Experiência na condução de grandes projetos em todo o território nacional;</li>
        <li>Atendimento personalizado às necessidades de cada cliente;</li>
        <li>Conformidade com as normas regulamentadoras;</li>
        <li>Redução de custos com acidentes e afastamentos.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é um plano de ação para redução de riscos?',
        a: 'É o documento que define as medidas preventivas e corretivas para eliminar ou reduzir os perigos identificados. Ele parte da avaliação de cada risco e integra o PGR exigido pela NR-01.',
      },
      {
        q: 'Qual a relação entre plano de ação e inventário de riscos?',
        a: 'O inventário de riscos relaciona e classifica os perigos; o plano de ação define as medidas para controlá-los. Juntos, formam o núcleo do Programa de Gerenciamento de Riscos.',
      },
      {
        q: 'O plano de ação é obrigatório?',
        a: 'Sim. Como parte do PGR previsto na NR-01, o plano de ação é exigido para empresas com empregados e é o que garante que os riscos identificados sejam efetivamente tratados.',
      },
      {
        q: 'A Previsio elabora o plano de ação?',
        a: 'Sim. Elaboramos e apoiamos a execução dos planos de ação para redução de riscos, com soluções personalizadas para cada cliente.',
      },
      NAP_REGIAO,
    ],
  },
};
