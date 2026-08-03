/**
 * Conteúdo enriquecido — cluster NR-35 (trabalho em altura).
 *
 * Fontes: o bodyHtml de cada página do site atual, o objetivo geral e
 * incontroverso da NR-35 (segurança no trabalho em altura; linha de vida =
 * sistema de ancoragem) e os termos que o próprio cliente usa nas páginas do
 * cluster — meios de acesso (escadas, passarelas, plataformas, guarda-corpos,
 * pontos de ancoragem), prontuário NR-35, teste de arrancamento. Nada de
 * números, prazos, portarias, NBRs ou cases inventados.
 *
 * Cada página recebe conteúdo próprio conforme sua INTENÇÃO — é assim que a
 * proximidade entre as variações (linha de vida: projeto / instalação /
 * projeto+instalação / manutenção) se resolve por ângulo, não por repetição.
 */

// NAP do cliente. Reutilizado no fecho das FAQs para manter consistência.
const FAQ_REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Atendemos todo o Brasil a partir de São Leopoldo/RS, com projetos conduzidos em território nacional e no exterior. Fale com a Previsio pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------------------ PILAR
  '/servicos/nr-35': {
    resposta:
      'A NR-35 é a Norma Regulamentadora do trabalho em altura, que define os requisitos de proteção para atividades realizadas em locais elevados. Atendê-la envolve análise de risco, sistemas de proteção coletiva e de ancoragem — como linhas de vida —, treinamento das equipes e a documentação reunida no prontuário NR-35.',
    corpo: `
      <h2>O que é a NR-35</h2>
      <p>A NR-35 — Segurança no Trabalho em Altura — estabelece as medidas de proteção para atividades executadas em locais elevados, onde há risco de queda. Ela orienta a análise dos riscos, a escolha das proteções e a capacitação dos trabalhadores e supervisores que atuam nessas condições.</p>
      <p>Atender à norma significa combinar proteção coletiva, sistemas de ancoragem e procedimentos claros, de modo que a atividade em altura seja realizada com segurança e devidamente documentada.</p>

      <h2>Soluções de NR-35 da Previsio</h2>
      <p>A Previsio reúne o escopo de trabalho em altura sob o mesmo fornecedor:</p>
      <ul>
        <li><strong>Análise de risco</strong> das atividades em altura, inclusive em telhados;</li>
        <li><strong>Sistemas de proteção coletiva</strong> — escadas, passarelas, plataformas e guarda-corpos;</li>
        <li><strong>Linhas de vida e pontos de ancoragem</strong> — projeto, instalação, manutenção e inspeção;</li>
        <li><strong>Prontuário NR-35</strong> — inventário dos meios de acesso, projetos, laudos e permissões;</li>
        <li><strong>Treinamento</strong> de trabalhadores e supervisores para trabalho em altura.</li>
      </ul>

      <h2>Por que trabalhar com a Previsio</h2>
      <p>Somos uma empresa de Engenharia de Segurança do Trabalho sediada em São Leopoldo/RS, atuando desde 2016 e com mais de mil clientes atendidos. Projetamos os meios de acesso, executamos as proteções e reunimos a documentação que comprova a conformidade.</p>
      <p>Conheça abaixo cada serviço do escopo de NR-35 — da análise de risco ao prontuário:</p>
    `,
    faq: [
      {
        q: 'O que é a NR-35?',
        a: 'É a Norma Regulamentadora de Segurança no Trabalho em Altura. Ela define as medidas de proteção — análise de risco, proteção coletiva, ancoragem e capacitação — para atividades realizadas em locais elevados, com risco de queda.',
      },
      {
        q: 'A Previsio projeta, instala e treina, ou só emite documento?',
        a: 'Fazemos o ciclo completo: análise de risco, projeto e instalação de meios de acesso e linhas de vida, manutenção e inspeção, prontuário NR-35 e treinamento de trabalhadores e supervisores.',
      },
      {
        q: 'Os projetos e laudos têm respaldo de engenheiro?',
        a: 'Sim. Os projetos e laudos de conformidade são conduzidos por engenheiro responsável, com Anotação de Responsabilidade Técnica (ART), o que dá validade ao documento perante a fiscalização.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- ANÁLISE DE RISCO ALTURA
  '/analise-risco-trabalho-altura': {
    resposta:
      'A análise de risco para trabalho em altura avalia as atividades executadas acima de dois metros do solo, identificando perigos como quedas, uso inadequado de EPI e condições inseguras. A partir dela, definem-se as medidas preventivas — treinamento, EPIs adequados e procedimentos de emergência — para proteger o trabalhador e atender à NR-35.',
    corpo: `
      <h2>O que é a análise de risco para trabalho em altura</h2>
      <p>A análise de risco para trabalho em altura é o estudo que avalia, de forma minuciosa, as atividades executadas acima de dois metros do solo. Ela é a base para qualquer trabalho seguro em locais elevados, pois identifica os perigos antes que a atividade comece.</p>
      <p>É a partir dessa avaliação que se decide quais proteções, procedimentos e capacitações são necessários — em vez de improvisar no campo.</p>

      <h2>O que a análise identifica</h2>
      <p>O estudo mapeia os perigos envolvidos na tarefa, entre eles:</p>
      <ul>
        <li>Risco de quedas de altura;</li>
        <li>Utilização inadequada de equipamentos de proteção individual (EPIs);</li>
        <li>Condições inseguras no ambiente de trabalho.</li>
      </ul>

      <h2>Da análise às medidas de proteção</h2>
      <p>Com base nos perigos identificados, são desenvolvidas as medidas preventivas para evitar acidentes: treinamentos específicos, adoção de EPIs adequados e o estabelecimento de procedimentos de emergência. O resultado é um ambiente em conformidade com a norma e a integridade física dos colaboradores preservada.</p>
      <p>Entre os benefícios estão a prevenção de acidentes graves, a redução de custos com afastamentos e o cumprimento das normas de segurança do trabalho.</p>
    `,
    faq: [
      {
        q: 'A partir de que altura o trabalho exige essa análise?',
        a: 'A NR-35 trata das atividades executadas acima de dois metros do solo, onde há risco de queda. É nessas condições que a análise de risco para trabalho em altura se torna essencial.',
      },
      {
        q: 'A análise de risco é obrigatória?',
        a: 'A avaliação dos riscos é o ponto de partida exigido pela NR-35 para o trabalho em altura. Sem ela, não há como definir as proteções, os procedimentos e a capacitação adequados à atividade.',
      },
      {
        q: 'A Previsio também implementa as medidas indicadas na análise?',
        a: 'Sim. Além da análise, conduzimos as etapas seguintes — proteção coletiva, linhas de vida, treinamento e procedimentos de emergência —, de forma que a recomendação vire proteção instalada.',
      },
      FAQ_REGIAO,
    ],
  },

  // --------------------------------------------------- ANÁLISE DE RISCO TELHADO
  '/analise-risco-trabalho-telhado': {
    resposta:
      'A análise de risco para trabalho em telhado avalia atividades de manutenção, instalação e reparo executadas sobre coberturas. Identifica perigos como queda, materiais soltos, instabilidade da estrutura e condições climáticas desfavoráveis e, a partir deles, define medidas como uso de EPIs, instalação de linhas de vida, delimitação de áreas seguras e sinalização.',
    corpo: `
      <h2>Por que o telhado exige uma análise específica</h2>
      <p>Trabalhar sobre telhados — em manutenções, instalações ou reparos — é uma atividade de alto risco. A análise de risco para trabalho em telhado identifica e avalia os perigos próprios desse ambiente, para prevenir acidentes e manter a atividade em conformidade com as normas regulamentadoras.</p>

      <h2>Perigos avaliados no trabalho em telhado</h2>
      <p>A avaliação considera as condições que tornam a cobertura um local perigoso:</p>
      <ul>
        <li>Risco de queda de altura;</li>
        <li>Materiais soltos sobre a superfície;</li>
        <li>Instabilidade da estrutura do telhado;</li>
        <li>Condições climáticas desfavoráveis.</li>
      </ul>

      <h2>Medidas preventivas definidas</h2>
      <p>A partir dos perigos mapeados, são estabelecidas as medidas para mitigar cada risco: uso de Equipamentos de Proteção Individual (EPIs), instalação de linhas de vida, delimitação de áreas seguras e sinalização adequada. Assim, reduz-se a ocorrência de acidentes e evita-se penalidades legais e prejuízos à imagem da empresa.</p>
    `,
    faq: [
      {
        q: 'A análise para telhado é diferente da análise para altura em geral?',
        a: 'O princípio é o mesmo, mas a análise em telhado foca perigos próprios da cobertura — instabilidade da estrutura, materiais soltos e condições climáticas —, além do risco de queda comum a todo trabalho em altura.',
      },
      {
        q: 'Vocês instalam as linhas de vida indicadas na análise?',
        a: 'Sim. Além da análise, projetamos e instalamos linhas de vida e pontos de ancoragem, e definimos a delimitação e a sinalização das áreas seguras sobre o telhado.',
      },
      {
        q: 'A análise atende às exigências das normas de segurança?',
        a: 'Sim. O estudo é conduzido para manter a atividade em conformidade com as normas regulamentadoras aplicáveis ao trabalho em altura, com respaldo técnico de engenheiro.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------- ESCADAS E PLATAFORMAS
  '/escadas-plataformas-nr35-nr12': {
    resposta:
      'Escadas e plataformas conforme as NR-35 e NR-12 são meios de acesso projetados para o trabalho em altura e a operação segura de máquinas. A NR-35 orienta o acesso elevado e a NR-12 a segurança de equipamentos industriais — juntas, reduzem riscos de queda, evitam autuações e aprimoram a eficiência das operações.',
    corpo: `
      <h2>Escadas e plataformas: acesso seguro em altura e às máquinas</h2>
      <p>Escadas e plataformas são essenciais para garantir a segurança em atividades que envolvem trabalho em altura e a operação de equipamentos industriais. Quando projetadas conforme a NR-35 e a NR-12, tornam-se meios de acesso seguros tanto para quem sobe a locais elevados quanto para quem opera e mantém máquinas.</p>

      <h2>O papel de cada norma</h2>
      <p>A NR-35 estabelece requisitos para a utilização segura de estruturas de acesso elevado, enquanto a NR-12 define a segurança dos equipamentos industriais, com foco na prevenção de acidentes. Adotar medidas conforme as duas normas evita acidentes, reduz o risco de quedas e mantém a manutenção das máquinas segura.</p>

      <h2>Vantagens de estruturas conforme as normas</h2>
      <ul>
        <li><strong>Segurança</strong> para os trabalhadores em altura e na operação de máquinas;</li>
        <li><strong>Conformidade legal</strong>, evitando autuações e multas;</li>
        <li><strong>Produtividade</strong>, com equipes mais confiantes;</li>
        <li><strong>Redução de acidentes</strong> e lesões no ambiente de trabalho;</li>
        <li><strong>Durabilidade</strong>, com estruturas projetadas para o uso prolongado.</li>
      </ul>
    `,
    faq: [
      {
        q: 'Por que escadas e plataformas envolvem NR-35 e NR-12 ao mesmo tempo?',
        a: 'Porque são meios de acesso usados tanto no trabalho em altura (NR-35) quanto na operação e manutenção de máquinas (NR-12). Projetá-las conforme as duas normas cobre os dois riscos de uma vez.',
      },
      {
        q: 'A Previsio projeta as escadas e plataformas?',
        a: 'Sim. Desenvolvemos projetos de meios de acesso — escadas, passarelas, plataformas e guarda-corpos — dimensionados para atender às exigências de segurança e às necessidades de operação.',
      },
      {
        q: 'Estruturas adequadas evitam autuações?',
        a: 'Sim. Seguir as normas NR-35 e NR-12 mantém a empresa em conformidade com a legislação, evitando autuações e multas, além de reduzir o risco de acidentes.',
      },
      FAQ_REGIAO,
    ],
  },

  // ----------------------------------------------------------- LINHA DE VIDA
  '/linha-vida': {
    resposta:
      'A linha de vida é um sistema de ancoragem que dá suporte e proteção aos trabalhadores expostos a risco de queda em altura, como em telhados e estruturas elevadas. Composta por dispositivos instalados em pontos estratégicos, permite o deslocamento seguro e o uso correto dos EPIs, em conformidade com a NR-35.',
    corpo: `
      <h2>O que é a linha de vida</h2>
      <p>A linha de vida é um sistema fundamental para a segurança de quem realiza atividades em altura, como em telhados e estruturas elevadas. É composta por um conjunto de dispositivos de suporte e ancoragem, instalados em locais estratégicos, que protegem o trabalhador exposto ao risco de queda.</p>
      <p>Esses dispositivos são dimensionados para suportar o peso e a movimentação dos profissionais, garantindo estabilidade e segurança durante a execução das tarefas.</p>

      <h2>Como funciona e quais tipos existem</h2>
      <p>Existem diferentes tipos de linha de vida, e a escolha do sistema mais adequado depende das características do ambiente e das necessidades de cada atividade. Por isso, é essencial contar com profissionais especializados tanto na definição do sistema quanto na instalação e na manutenção dos equipamentos.</p>

      <h2>Vantagens da linha de vida</h2>
      <ul>
        <li>Aumento da segurança dos trabalhadores;</li>
        <li>Redução do risco de acidentes e quedas;</li>
        <li>Cumprimento das normas regulamentadoras;</li>
        <li>Valorização da imagem da empresa;</li>
        <li>Ambiente de trabalho mais seguro e produtivo.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é uma linha de vida?',
        a: 'É um sistema de ancoragem formado por dispositivos instalados em pontos estratégicos, que dão suporte ao trabalhador e o protegem contra quedas durante atividades em altura, como sobre telhados e estruturas elevadas.',
      },
      {
        q: 'A linha de vida é obrigatória?',
        a: 'É exigida sempre que há trabalho em altura com risco de queda, como parte das medidas de proteção previstas na NR-35. O sistema adequado depende das características de cada ambiente.',
      },
      {
        q: 'A Previsio projeta, instala e mantém a linha de vida?',
        a: 'Sim. Atuamos no ciclo completo — projeto, instalação, manutenção e inspeção do sistema —, sempre com orientação de profissionais especializados em segurança do trabalho.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------------- PROJETO LINHA VIDA
  '/projeto-linha-vida': {
    resposta:
      'O projeto de linha de vida define a instalação de cabos e dispositivos de ancoragem em pontos estratégicos, para que os trabalhadores fiquem protegidos contra quedas em atividades em altura. É a etapa técnica que dimensiona o sistema conforme o ambiente e assegura o cumprimento das normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o projeto de linha de vida</h2>
      <p>O projeto de linha de vida é a etapa técnica que antecede a instalação. Ele define onde e como serão dispostos os cabos e os dispositivos de ancoragem — em pontos estratégicos — para que os trabalhadores sejam protegidos contra quedas durante a execução de atividades em locais elevados.</p>
      <p>É no projeto que o sistema ganha precisão: o percurso, os apoios e a fixação são pensados de acordo com a estrutura e a atividade, e não improvisados na obra.</p>

      <h2>O que o projeto assegura</h2>
      <p>Um projeto bem elaborado garante que a integridade física dos colaboradores seja preservada e que a solução esteja em conformidade com as normas de segurança do trabalho. Ele orienta a etapa seguinte — a instalação — e evita que a proteção seja subdimensionada para o risco.</p>

      <h2>Vantagens de projetar antes de instalar</h2>
      <ul>
        <li>Proteção dos trabalhadores contra quedas;</li>
        <li>Cumprimento das normas de segurança do trabalho;</li>
        <li>Ambiente de trabalho mais seguro;</li>
        <li>Redução de acidentes laborais;</li>
        <li>Valorização da empresa perante colaboradores e órgãos fiscalizadores.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que entra no projeto de linha de vida?',
        a: 'A definição dos cabos e dispositivos de ancoragem, a localização dos pontos estratégicos de fixação e o dimensionamento do sistema conforme a estrutura e a atividade em altura.',
      },
      {
        q: 'Preciso de projeto antes de instalar a linha de vida?',
        a: 'Sim. O projeto é o que garante que o sistema seja adequado ao ambiente e ao risco, orientando a instalação e assegurando a conformidade com as normas de segurança.',
      },
      {
        q: 'O projeto tem respaldo de engenheiro?',
        a: 'Sim. O desenvolvimento do projeto de linha de vida é conduzido pela equipe técnica da Previsio, com responsabilidade de engenheiro habilitado.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- INSTALAÇÃO LINHA VIDA
  '/instalacao-linha-vida': {
    resposta:
      'A instalação de linha de vida é a montagem dos sistemas de ancoragem — fixos ou temporários — que protegem quem trabalha em altura. Executada conforme a NR-35, permite que os trabalhadores se desloquem com segurança em superfícies verticais ou inclinadas, beneficiando setores como construção civil, manutenção industrial e telecomunicações.',
    corpo: `
      <h2>O que é a instalação de linha de vida</h2>
      <p>A instalação de linha de vida é a montagem dos sistemas de ancoragem que dão segurança a quem executa atividades em altura. Com os dispositivos corretamente instalados, a empresa fica em conformidade com a NR-35 e previne acidentes graves.</p>

      <h2>Como funciona a montagem</h2>
      <p>A instalação envolve a montagem de sistemas de ancoragem fixos ou temporários, conforme a necessidade de cada ambiente. Esses dispositivos permitem que os trabalhadores se desloquem com segurança em superfícies verticais ou inclinadas, evitando quedas e preservando a integridade física de todos os envolvidos.</p>

      <h2>Setores que se beneficiam</h2>
      <p>Setores como construção civil, manutenção industrial e telecomunicações ganham significativamente com a instalação, que reduz o risco de quedas e permite o uso correto dos Equipamentos de Proteção Individual (EPIs). Além da segurança, o sistema contribui para a produtividade, criando um ambiente de trabalho mais estável e confiável.</p>
    `,
    faq: [
      {
        q: 'Qual a diferença entre ancoragem fixa e temporária?',
        a: 'A instalação pode usar sistemas de ancoragem fixos ou temporários, conforme a necessidade do ambiente. A escolha depende de a atividade em altura ser permanente ou pontual naquele local.',
      },
      {
        q: 'A instalação segue a NR-35?',
        a: 'Sim. A montagem dos sistemas de ancoragem é executada em conformidade com a NR-35, que trata da segurança no trabalho em altura, garantindo a proteção dos trabalhadores.',
      },
      {
        q: 'Vocês instalam a partir de um projeto?',
        a: 'Sim. A instalação parte da definição técnica do sistema — o projeto de linha de vida —, o que assegura que a ancoragem seja adequada ao ambiente e ao risco da atividade.',
      },
      FAQ_REGIAO,
    ],
  },

  // -------------------------------------------- PROJETO + INSTALAÇÃO LINHAS VIDA
  '/projeto-instalacao-linhas-vida': {
    resposta:
      'O projeto e instalação de linhas de vida reúne, sob um só fornecedor, a definição técnica do sistema de ancoragem e a sua montagem. Fornece os pontos de ancoragem que permitem o uso de EPIs contra quedas, protegendo trabalhadores em telhados, andaimes e áreas elevadas, em conformidade com as normas de segurança.',
    corpo: `
      <h2>Projeto e instalação de linhas de vida em um só serviço</h2>
      <p>Em atividades que envolvem trabalho em altura, o projeto e instalação de linhas de vida é uma medida essencial para proteger os colaboradores que atuam em telhados, andaimes e outras áreas elevadas. Reunir as duas etapas — projetar e instalar — sob o mesmo fornecedor garante coerência entre o que foi dimensionado e o que é montado.</p>

      <h2>Por que integrar as etapas</h2>
      <p>Empresas que priorizam a segurança reconhecem a importância de investir em soluções que previnem acidentes. O projeto e instalação de linhas de vida cumpre esse papel ao fornecer sistemas de ancoragem que permitem a utilização de equipamentos de proteção individual contra quedas — do desenho técnico à fixação em campo.</p>

      <h2>Vantagens da solução integrada</h2>
      <ul>
        <li>Redução do risco de acidentes em altura;</li>
        <li>Conformidade com as normas de segurança do trabalho;</li>
        <li>Proteção dos trabalhadores e da empresa contra incidentes;</li>
        <li>Ambiente de trabalho mais seguro e produtivo;</li>
        <li>Menos custos com afastamentos e processos.</li>
      </ul>
    `,
    faq: [
      {
        q: 'Qual a vantagem de contratar projeto e instalação juntos?',
        a: 'Com as duas etapas sob o mesmo fornecedor, o sistema é instalado exatamente como foi dimensionado — sem descompasso entre o projeto e a execução em campo.',
      },
      {
        q: 'Em quais locais o serviço é aplicado?',
        a: 'Em telhados, andaimes e demais áreas elevadas onde há risco de queda. Os pontos de ancoragem são definidos e montados conforme a estrutura de cada ambiente.',
      },
      {
        q: 'A solução atende às normas de segurança?',
        a: 'Sim. Tanto o projeto quanto a instalação são conduzidos em conformidade com as normas de segurança do trabalho aplicáveis ao trabalho em altura, com respaldo técnico de engenheiro.',
      },
      FAQ_REGIAO,
    ],
  },

  // ----------------------------------------- MANUTENÇÃO E INSPEÇÃO LINHAS VIDA
  '/servicos/manutencao-e-inspecao-em-linhas-de-vida': {
    resposta:
      'A manutenção e inspeção em linhas de vida verifica se o sistema de ancoragem continua confiável ao longo do tempo. Inclui o teste de arrancamento para a verificação do ponto de ancoragem, assegurando que a linha de vida suporte a solicitação prevista e mantenha a proteção contra quedas em conformidade com a NR-35.',
    corpo: `
      <h2>Por que inspecionar a linha de vida</h2>
      <p>Instalar a linha de vida não encerra o trabalho: o sistema de ancoragem precisa ser mantido e inspecionado para continuar confiável. A manutenção e inspeção em linhas de vida verifica as condições do sistema ao longo do tempo, garantindo que a proteção contra quedas permaneça efetiva.</p>

      <h2>O teste de arrancamento</h2>
      <p>A inspeção inclui o teste de arrancamento, realizado para a verificação do ponto de ancoragem. Esse ensaio confirma que o ponto suporta a solicitação prevista, condição indispensável para que o sistema cumpra sua função em caso de queda.</p>

      <h2>Manutenção que sustenta a conformidade</h2>
      <p>Com a manutenção e a inspeção em dia, a empresa mantém a linha de vida em condições de uso e a atividade em altura em conformidade com a NR-35. É a verificação periódica que evita confiar em um sistema cuja capacidade não foi comprovada.</p>
    `,
    faq: [
      {
        q: 'O que é o teste de arrancamento?',
        a: 'É o ensaio realizado durante a inspeção para verificar o ponto de ancoragem da linha de vida, confirmando que ele suporta a solicitação prevista e que o sistema pode proteger o trabalhador em caso de queda.',
      },
      {
        q: 'Por que a linha de vida precisa de manutenção e inspeção?',
        a: 'Porque um sistema de ancoragem instalado precisa continuar confiável ao longo do tempo. A inspeção periódica verifica suas condições e mantém a proteção contra quedas efetiva e em conformidade com a NR-35.',
      },
      {
        q: 'A Previsio também instala linhas de vida?',
        a: 'Sim. Atuamos no ciclo completo — projeto, instalação, manutenção e inspeção —, o que permite acompanhar o sistema desde a montagem até as verificações periódicas.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------------ PRONTUÁRIO NR-35
  '/servicos/prontuario-nr-35': {
    resposta:
      'O prontuário NR-35 é o conjunto de documentos que organiza a segurança do trabalho em altura de uma empresa. Reúne o inventário dos meios de acesso e EPCs, projetos, procedimentos, relatórios de inspeção, laudos de conformidade, análise de risco e permissões de trabalho, conforme a NR-35.',
    corpo: `
      <h2>O que é o prontuário NR-35</h2>
      <p>O prontuário NR-35 é o conjunto organizado de documentos que reúne, em um só lugar, tudo o que sustenta a segurança do trabalho em altura na empresa. Ele consolida os registros técnicos e operacionais exigidos pela norma, dando visão completa das condições de acesso e proteção.</p>

      <h2>O que o prontuário reúne</h2>
      <p>De acordo com a NR-35, o prontuário contempla:</p>
      <ul>
        <li>Inventário dos meios de acesso e dos EPCs (Equipamentos de Proteção Coletiva);</li>
        <li>Projetos das estruturas e sistemas;</li>
        <li>Procedimentos de trabalho;</li>
        <li>Relatórios de inspeção;</li>
        <li>Laudos de conformidade;</li>
        <li>Análise de risco;</li>
        <li>Permissões de trabalho.</li>
      </ul>

      <h2>Por que manter o prontuário organizado</h2>
      <p>Com o prontuário reunido e atualizado, a empresa demonstra que os meios de acesso foram inventariados, os riscos analisados e as proteções laudadas — o conjunto que sustenta a conformidade perante auditorias e fiscalização.</p>
    `,
    faq: [
      {
        q: 'O que compõe o prontuário NR-35?',
        a: 'Inventário dos meios de acesso e EPCs, projetos, procedimentos, relatórios de inspeção, laudos de conformidade, análise de risco e permissões de trabalho, conforme a NR-35.',
      },
      {
        q: 'O prontuário NR-35 é obrigatório?',
        a: 'A organização dessa documentação é parte da gestão do trabalho em altura exigida pela NR-35. É o que comprova, perante a fiscalização, que meios de acesso e proteções foram avaliados e laudados.',
      },
      {
        q: 'A Previsio monta o prontuário e também produz os documentos que o compõem?',
        a: 'Sim. Elaboramos análise de risco, projetos, inspeções e laudos de conformidade e reunimos tudo no prontuário, com respaldo técnico de engenheiro.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------- SISTEMAS DE PROTEÇÃO COLETIVA
  '/servicos/sistemas-de-protecao-coletiva-nr-35': {
    resposta:
      'Os sistemas de proteção coletiva da NR-35 são os meios de acesso e proteção para trabalho em altura: escadas, passarelas, plataformas, guarda-corpos, linhas de vida e pontos de ancoragem. A Previsio projeta esses dispositivos e capacita trabalhadores e supervisores de trabalho em altura.',
    corpo: `
      <h2>O que são os sistemas de proteção coletiva</h2>
      <p>Os sistemas de proteção coletiva são os meios de acesso e os dispositivos que protegem, de uma só vez, todos os trabalhadores expostos ao risco de queda. Na NR-35, são a primeira linha de defesa do trabalho em altura, priorizada antes das medidas individuais.</p>

      <h2>Meios de acesso que projetamos</h2>
      <p>Desenvolvemos projetos de meios de acesso para trabalho em altura, tais como:</p>
      <ul>
        <li>Escadas;</li>
        <li>Passarelas;</li>
        <li>Plataformas;</li>
        <li>Guarda-corpos;</li>
        <li>Linhas de vida;</li>
        <li>Pontos de ancoragem e demais dispositivos de proteção.</li>
      </ul>

      <h2>Projeto e capacitação juntos</h2>
      <p>Além de projetar as estruturas, aplicamos treinamentos para a capacitação de trabalhadores e supervisores de trabalho em altura. Assim, a proteção não fica só na estrutura instalada: as equipes sabem operar com segurança nos meios de acesso.</p>
    `,
    faq: [
      {
        q: 'Quais dispositivos fazem parte da proteção coletiva?',
        a: 'Escadas, passarelas, plataformas, guarda-corpos, linhas de vida, pontos de ancoragem e demais dispositivos de proteção, projetados como meios de acesso para o trabalho em altura.',
      },
      {
        q: 'A Previsio projeta esses meios de acesso?',
        a: 'Sim. Desenvolvemos os projetos dos meios de acesso e dispositivos de proteção e também capacitamos os trabalhadores e supervisores que vão utilizá-los.',
      },
      {
        q: 'Vocês também treinam as equipes?',
        a: 'Sim. Aplicamos treinamentos para a capacitação de trabalhadores e supervisores de trabalho em altura, complementando a proteção estrutural com o preparo das pessoas.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------- SISTEMAS DE PROTEÇÃO CONTRA QUEDAS
  '/servicos/sistemas-de-protecao-contra-quedas': {
    resposta:
      'Os sistemas de proteção contra quedas são o conjunto de medidas que impede ou detém a queda de quem trabalha em altura. Reúnem proteção coletiva — como guarda-corpos e plataformas — e sistemas de ancoragem, como linhas de vida e pontos de ancoragem, dimensionados conforme a NR-35 para cada ambiente.',
    corpo: `
      <h2>O que são os sistemas de proteção contra quedas</h2>
      <p>Os sistemas de proteção contra quedas reúnem as medidas que evitam ou detêm a queda de trabalhadores expostos ao risco em altura. São a resposta central da NR-35 ao principal perigo do trabalho em locais elevados.</p>

      <h2>Proteção coletiva e ancoragem</h2>
      <p>A proteção contra quedas combina dois tipos de solução, que se complementam:</p>
      <ul>
        <li><strong>Proteção coletiva</strong> — guarda-corpos, plataformas, passarelas e escadas, que protegem todos ao mesmo tempo;</li>
        <li><strong>Sistemas de ancoragem</strong> — linhas de vida e pontos de ancoragem, que sustentam o trabalhador quando o acesso exige deslocamento em altura.</li>
      </ul>

      <h2>Solução dimensionada para cada ambiente</h2>
      <p>Como empresa gaúcha de Engenharia de Segurança do Trabalho, a Previsio dimensiona a proteção conforme o ambiente e a atividade, projetando e instalando os meios de acesso e a ancoragem adequados ao risco de cada local.</p>
    `,
    faq: [
      {
        q: 'O que compõe um sistema de proteção contra quedas?',
        a: 'A combinação de proteção coletiva — guarda-corpos, plataformas, passarelas e escadas — com sistemas de ancoragem, como linhas de vida e pontos de ancoragem, dimensionados conforme o risco do ambiente.',
      },
      {
        q: 'Proteção coletiva ou individual: qual vem primeiro?',
        a: 'A NR-35 prioriza a proteção coletiva. Quando ela não é suficiente para eliminar o risco, entram os sistemas de ancoragem que dão suporte ao trabalhador em deslocamento.',
      },
      {
        q: 'A Previsio projeta e instala esses sistemas?',
        a: 'Sim. Projetamos e instalamos tanto os meios de acesso de proteção coletiva quanto as linhas de vida e pontos de ancoragem, conforme a atividade em altura de cada cliente.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------- PROCEDIMENTOS TRABALHO ALTURA
  '/procedimentos-trabalho-altura': {
    resposta:
      'Os procedimentos para trabalho em altura são as regras e medidas que organizam atividades em locais elevados, como andaimes, telhados e plataformas. Baseados na NR-35, incluem análise de riscos, sistemas de proteção coletiva, inspeção de equipamentos, capacitação dos trabalhadores e supervisão qualificada durante as atividades.',
    corpo: `
      <h2>O que são os procedimentos para trabalho em altura</h2>
      <p>Procedimentos para trabalho em altura são as medidas e regras que garantem a segurança de quem atua em locais elevados — andaimes, telhados e plataformas. Baseados na NR-35, eles orientam como a atividade deve ser planejada e executada para prevenir quedas e acidentes.</p>

      <h2>O que os procedimentos incluem</h2>
      <p>Um trabalho em altura seguro combina várias medidas:</p>
      <ul>
        <li>Análise de riscos da atividade;</li>
        <li>Sistemas de proteção coletiva, como guarda-corpos e redes de proteção;</li>
        <li>Inspeção regular dos equipamentos;</li>
        <li>Capacitação dos trabalhadores;</li>
        <li>Supervisão de profissionais qualificados durante as atividades em altura.</li>
      </ul>

      <h2>Por que padronizar os procedimentos</h2>
      <p>Implementar procedimentos para trabalho em altura não apenas atende à legislação, como demonstra o compromisso da empresa com a segurança dos colaboradores. O resultado é um ambiente mais seguro e produtivo, com menor risco de acidentes e lesões.</p>
    `,
    faq: [
      {
        q: 'Quais medidas compõem os procedimentos de trabalho em altura?',
        a: 'Análise de riscos, sistemas de proteção coletiva (como guarda-corpos e redes), inspeção regular de equipamentos, capacitação dos trabalhadores e supervisão de profissionais qualificados durante a atividade.',
      },
      {
        q: 'Os procedimentos seguem a NR-35?',
        a: 'Sim. Os procedimentos para trabalho em altura são estruturados com base na NR-35, que estabelece as diretrizes para a realização segura desse tipo de atividade.',
      },
      {
        q: 'A Previsio ajuda a implementar esses procedimentos?',
        a: 'Sim. Realizamos análises de risco, inspeções, treinamentos e consultoria, apoiando a empresa na implementação dos procedimentos e na conformidade com as normas vigentes.',
      },
      FAQ_REGIAO,
    ],
  },

  // -------------------------------------------- TREINAMENTO TRABALHO ALTURA NR-35
  '/treinamento-trabalho-altura-nr35': {
    resposta:
      'O treinamento de trabalho em altura NR-35 capacita os profissionais que atuam em locais elevados. A Norma Regulamentadora 35 estabelece os requisitos mínimos de proteção para o trabalho em altura, e a capacitação é o que prepara as equipes para prevenir acidentes e manter a empresa em conformidade legal.',
    corpo: `
      <h2>A importância do treinamento de trabalho em altura</h2>
      <p>O treinamento de trabalho em altura NR-35 é essencial para garantir a segurança dos profissionais que realizam atividades em locais elevados. A Norma Regulamentadora 35 estabelece os requisitos mínimos de proteção para o trabalho em altura, com foco na prevenção de acidentes e na preservação da saúde dos trabalhadores.</p>

      <h2>Por que investir na capacitação</h2>
      <p>Empresas que investem no treinamento demonstram preocupação com a segurança e o bem-estar dos colaboradores. Além disso, o cumprimento da NR-35 é fundamental para evitar multas e garantir a conformidade legal, protegendo também a empresa no campo jurídico.</p>

      <h2>Como conduzimos o treinamento</h2>
      <p>A Previsio ministra os treinamentos com profissionais experientes e uma abordagem prática e objetiva. O conteúdo é adaptado às necessidades de cada cliente, para que o aprendizado seja efetivo e aplicável ao ambiente real de trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento de trabalho em altura NR-35?',
        a: 'É a capacitação, prevista na NR-35, dos profissionais que atuam em locais elevados. Ela transmite os requisitos mínimos de proteção para o trabalho em altura e prepara as equipes para prevenir acidentes.',
      },
      {
        q: 'O treinamento NR-35 é obrigatório?',
        a: 'A NR-35 exige a capacitação dos trabalhadores que atuam em altura. Cumpri-la é fundamental para a segurança das equipes e para manter a empresa em conformidade legal, evitando multas.',
      },
      {
        q: 'O treinamento é adaptado à realidade da empresa?',
        a: 'Sim. Os treinamentos são customizados conforme as necessidades de cada cliente, com abordagem prática, para que o conteúdo se aplique ao ambiente real de trabalho.',
      },
      FAQ_REGIAO,
    ],
  },
};
