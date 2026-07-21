/**
 * Conteúdo enriquecido — cluster SPDA (Sistema de Proteção contra Descargas
 * Atmosféricas) e aterramento.
 *
 * Cada página é reescrita a partir do próprio bodyHtml, do objetivo geral do
 * SPDA (proteger edificações contra raios, direcionando a energia para o solo)
 * e do aterramento (direcionar correntes e descargas para a terra). Números de
 * NBR só entram nas páginas em que já aparecem: NBR 5419 em /laudo-spda e no
 * card de SPDA; NBR 5410 no card de aterramento. Páginas de intenção próxima
 * (os vários SPDA, os vários aterramentos) recebem ângulos distintos.
 *
 * NAP: (51) 3466-9601 · São Leopoldo/RS · atendimento nacional.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Sim. A sede fica em São Leopoldo/RS e atendemos todo o Brasil — atendimento nacional, com projetos conduzidos em território nacional e no exterior. Fale com a equipe pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------------------ PILAR
  '/spda': {
    resposta:
      'O SPDA (Sistema de Proteção contra Descargas Atmosféricas) protege as edificações contra os danos causados por raios. É composto por para-raios, condutores e aterramento, que atuam de forma integrada para direcionar a energia das descargas ao solo, preservando o patrimônio e a segurança de trabalhadores e instalações.',
    corpo: `
      <h2>O que é o SPDA</h2>
      <p>O SPDA (Sistema de Proteção contra Descargas Atmosféricas) é fundamental para proteger as edificações contra os danos causados por raios. Ele é composto por dispositivos e estruturas — para-raios, condutores e sistemas de aterramento — que atuam de forma integrada para direcionar a energia das descargas ao solo, evitando prejuízos materiais e protegendo trabalhadores e instalações.</p>

      <h2>Por que instalar o SPDA corretamente</h2>
      <p>Um SPDA adequado garante a conformidade com as normas de segurança, preserva o patrimônio e protege a integridade física de quem circula pelo local. Além disso, evita interrupções nas atividades e prejuízos financeiros decorrentes de danos provocados por descargas atmosféricas.</p>

      <h2>Soluções de SPDA e aterramento na Previsio</h2>
      <p>Referência em Engenharia de Segurança do Trabalho, a Previsio oferece o ciclo completo do SPDA e do aterramento:</p>
      <ul>
        <li><strong>Estudo de viabilidade</strong> — análise da necessidade e da melhor forma de proteção;</li>
        <li><strong>Projeto de SPDA</strong> — dimensionamento de para-raios, condutores e aterramento;</li>
        <li><strong>Instalação</strong> — execução do sistema com materiais adequados;</li>
        <li><strong>Laudo de SPDA</strong> — avaliação da proteção instalada;</li>
        <li><strong>Manutenção</strong> — inspeção e conservação do sistema;</li>
        <li><strong>Aterramento</strong> — projeto, medição, laudo e instalação.</li>
      </ul>

      <h2>Conheça cada solução</h2>
      <p>Explore abaixo os serviços de SPDA e aterramento — do estudo de viabilidade ao laudo e à manutenção.</p>
    `,
    faq: [
      {
        q: 'O que é o SPDA?',
        a: 'É o Sistema de Proteção contra Descargas Atmosféricas — para-raios, condutores e aterramento que direcionam a energia dos raios ao solo, protegendo a edificação.',
      },
      {
        q: 'A Previsio projeta, instala e mantém o SPDA?',
        a: 'Sim. Oferecemos o ciclo completo: estudo de viabilidade, projeto, instalação, laudo e manutenção do sistema, além do aterramento.',
      },
      {
        q: 'Os projetos e laudos têm engenheiro responsável?',
        a: 'Sim. Somos uma empresa de engenharia; projetos e laudos são conduzidos por engenheiro responsável, com a Anotação de Responsabilidade Técnica (ART).',
      },
      REGIAO,
    ],
  },

  // --------------------------------------------------------- SPDA — DEFINIÇÕES
  '/spda-sistema-protecao-descargas-atmosfericas': {
    resposta:
      'O SPDA, sistema de proteção contra descargas atmosféricas, é o conjunto de dispositivos e técnicas que protege edificações contra os efeitos dos raios. Formado por para-raios, condutores e aterramento, garante a segurança das instalações e dos trabalhadores, prevenindo danos materiais e riscos de acidentes.',
    corpo: `
      <h2>O que é o SPDA</h2>
      <p>O SPDA (sistema de proteção contra descargas atmosféricas) é um conjunto de dispositivos e técnicas essenciais para proteger edificações contra os efeitos das descargas elétricas ocasionadas por raios. Composto por para-raios, condutores e sistemas de aterramento, garante a segurança das instalações e dos trabalhadores, previne danos materiais e riscos de acidentes e assegura o cumprimento das normas de segurança.</p>

      <h2>Por que implementar o SPDA</h2>
      <p>A implementação do SPDA é fundamental para garantir a segurança e a integridade das estruturas, evitando prejuízos decorrentes de raios. Empresas que investem nesse sistema demonstram compromisso com a segurança de seus colaboradores e patrimônio, além de se manterem em conformidade com as regulamentações de segurança e proteção contra incêndios.</p>

      <h2>Vantagens de contar com o serviço de SPDA</h2>
      <ul>
        <li>Proteção eficaz contra descargas atmosféricas;</li>
        <li>Redução de danos materiais e riscos de acidentes;</li>
        <li>Conformidade com as normas de segurança;</li>
        <li>Preservação do patrimônio da empresa;</li>
        <li>Segurança e tranquilidade para colaboradores e gestores.</li>
      </ul>

      <h2>Por que escolher a Previsio</h2>
      <p>Sediada em São Leopoldo/RS, com mais de mil clientes atendidos e expertise em projetos de grande porte, a Previsio oferece serviços completos: instalação e manutenção de SPDA, laudos, adequações conforme as normas e consultoria especializada em segurança do trabalho — com atendimento personalizado e soluções sob medida.</p>
    `,
    faq: [
      {
        q: 'O que é o SPDA?',
        a: 'É o conjunto de dispositivos e técnicas — para-raios, condutores e aterramento — que protege as edificações contra os efeitos das descargas atmosféricas.',
      },
      {
        q: 'Por que implementar o SPDA?',
        a: 'Para proteger estruturas, pessoas e patrimônio contra os danos causados por raios e manter a empresa em conformidade com as normas de segurança.',
      },
      {
        q: 'A Previsio instala e mantém o sistema?',
        a: 'Sim. Oferecemos instalação e manutenção de SPDA, laudos e adequações conforme as normas, com equipe qualificada.',
      },
      REGIAO,
    ],
  },

  '/spda-descarga-atmosferica': {
    resposta:
      'O SPDA para descarga atmosférica protege edificações contra os danos provocados por raios. Formado por para-raios, condutores e aterramento, direciona a energia das descargas para o solo com segurança — reduzindo o risco de incêndios, preservando equipamentos eletrônicos e protegendo a vida dos ocupantes.',
    corpo: `
      <h2>O que é o SPDA para descarga atmosférica</h2>
      <p>O SPDA, também conhecido como Sistema de Proteção contra Descargas Atmosféricas, é um conjunto de dispositivos e equipamentos projetados para proteger edificações e estruturas contra danos provocados por raios. É composto por para-raios, condutores e aterramento, que atuam direcionando a energia das descargas atmosféricas para o solo, garantindo a segurança das instalações e das pessoas que nelas trabalham.</p>

      <h2>Por que a instalação é importante</h2>
      <p>Com a ocorrência frequente de tempestades e descargas elétricas, é imprescindível contar com um sistema eficiente que dissipe a energia dos raios de forma segura, evitando prejuízos materiais e, principalmente, protegendo a vida dos ocupantes do local.</p>

      <h2>Benefícios do sistema</h2>
      <p>Além de oferecer proteção contra danos estruturais, o SPDA reduz o risco de incêndios, preserva equipamentos eletrônicos e elétricos, atende às normas de segurança e traz a tranquilidade de saber que a edificação está devidamente protegida contra eventos climáticos extremos. A Previsio instala sistemas eficientes e seguros, com equipe especializada.</p>
    `,
    faq: [
      {
        q: 'O que é o SPDA para descarga atmosférica?',
        a: 'É o sistema formado por para-raios, condutores e aterramento que direciona a energia dos raios ao solo, protegendo a edificação e seus ocupantes.',
      },
      {
        q: 'Quais os benefícios do sistema?',
        a: 'Redução do risco de incêndios, preservação de equipamentos eletrônicos e elétricos, conformidade com as normas e proteção estrutural contra raios.',
      },
      {
        q: 'A Previsio faz a instalação?',
        a: 'Sim. Instalamos sistemas de SPDA eficientes e seguros, com equipe especializada e soluções conforme as normas vigentes.',
      },
      REGIAO,
    ],
  },

  '/spda-raios': {
    resposta:
      'O SPDA para raios protege construções e pessoas dos danos causados por descargas atmosféricas. Funciona com para-raios (captores), cabos condutores e dispositivos de aterramento: o captor atrai a descarga, os cabos conduzem a corrente até o solo e o aterramento dissipa a energia com segurança.',
    corpo: `
      <h2>O que é o SPDA para raios</h2>
      <p>O SPDA (Sistema de Proteção contra Descargas Atmosféricas) é fundamental para proteger construções e pessoas dos danos causados por raios. Ele funciona direcionando a corrente elétrica das descargas atmosféricas para a terra, evitando prejuízos e garantindo a segurança de todos.</p>

      <h2>Como funciona o sistema</h2>
      <p>O SPDA para raios é composto por para-raios, cabos condutores e dispositivos de aterramento. O para-raios, ou captor, é responsável por atrair a descarga atmosférica; os cabos condutores conduzem a corrente elétrica até o solo de forma segura; e os dispositivos de aterramento garantem a dissipação da energia no solo, evitando danos às estruturas e aos equipamentos.</p>

      <h2>Vantagens e a expertise da Previsio</h2>
      <p>O sistema oferece proteção eficaz de instalações e equipamentos, previne acidentes de trabalho relacionados a descargas atmosféricas, mantém a conformidade com as normas de segurança e reduz prejuízos materiais. A Previsio oferece o serviço completo — projeto, instalação e manutenção do sistema — com soluções sob medida para cada cliente.</p>
    `,
    faq: [
      {
        q: 'O que é o SPDA para raios?',
        a: 'É o sistema que protege construções e pessoas dos raios, direcionando a corrente das descargas atmosféricas para a terra com segurança.',
      },
      {
        q: 'Como o sistema funciona?',
        a: 'O para-raios (captor) atrai a descarga, os cabos condutores levam a corrente ao solo e os dispositivos de aterramento dissipam a energia.',
      },
      {
        q: 'A Previsio cuida de todo o sistema?',
        a: 'Sim. Oferecemos projeto, instalação e manutenção do SPDA, com soluções sob medida e atendimento às normas vigentes.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------------ SPDA — SERVIÇOS
  '/estudos-viabilidade-spda': {
    resposta:
      'O estudo de viabilidade para SPDA analisa a necessidade e a melhor forma de instalar a proteção contra descargas atmosféricas em uma edificação. Considera os riscos envolvidos, as condições estruturais do local e as normas técnicas vigentes, garantindo eficiência na proteção contra raios antes do projeto.',
    corpo: `
      <h2>O que é o estudo de viabilidade para SPDA</h2>
      <p>O estudo de viabilidade para SPDA analisa a necessidade e a melhor forma de instalar Sistemas de Proteção contra Descargas Atmosféricas em edificações. É a etapa que antecede o projeto e orienta a decisão sobre como proteger a estrutura da maneira mais eficiente.</p>

      <h2>Análise de riscos e normas técnicas</h2>
      <p>A análise considera os riscos envolvidos, as condições estruturais do local e as normas técnicas vigentes, garantindo eficiência na proteção contra raios. Com esse estudo, é possível evitar danos materiais, incêndios e acidentes decorrentes de descargas elétricas, além de assegurar a conformidade com as exigências normativas.</p>

      <h2>Benefícios do estudo de viabilidade</h2>
      <ul>
        <li>Análise detalhada dos riscos envolvidos;</li>
        <li>Conformidade com as normas técnicas vigentes;</li>
        <li>Prevenção de danos materiais e acidentes;</li>
        <li>Maior segurança para colaboradores e usuários;</li>
        <li>Redução de custos com manutenção corretiva.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o estudo de viabilidade para SPDA?',
        a: 'É a análise que define a necessidade e a melhor forma de instalar a proteção contra descargas atmosféricas em uma edificação, antes do projeto.',
      },
      {
        q: 'O que o estudo considera?',
        a: 'Os riscos envolvidos, as condições estruturais do local e as normas técnicas vigentes, para garantir eficiência na proteção contra raios.',
      },
      {
        q: 'O estudo leva ao projeto e à instalação?',
        a: 'Sim. A partir do estudo, a Previsio conduz o projeto, a instalação e a manutenção do SPDA.',
      },
      REGIAO,
    ],
  },

  '/projeto-spda': {
    resposta:
      'O projeto de SPDA dimensiona o sistema que protege a edificação contra raios. Consiste na definição dos para-raios e condutores que desviam a energia das descargas atmosféricas, protegendo estruturas, funcionários e equipamentos — elaborado de forma personalizada conforme as necessidades de cada cliente.',
    corpo: `
      <h2>A importância do projeto de SPDA</h2>
      <p>Quando se trata de proteger as edificações contra danos causados por raios, o projeto de SPDA é fundamental. É ele que estrutura o sistema de proteção contra descargas atmosféricas de forma adequada à edificação, garantindo a segurança das instalações, dos funcionários e dos equipamentos.</p>

      <h2>Como funciona o projeto</h2>
      <p>O projeto de SPDA consiste na definição dos para-raios e condutores responsáveis por desviar a energia proveniente das descargas atmosféricas, protegendo as estruturas e evitando danos. Com a expertise da Previsio, é possível elaborar um projeto personalizado, de acordo com as necessidades específicas de cada cliente, garantindo eficiência e segurança.</p>

      <h2>Vantagens de investir em um projeto de SPDA</h2>
      <ul>
        <li>Proteção das instalações contra danos causados por raios;</li>
        <li>Segurança para os colaboradores e equipamentos;</li>
        <li>Conformidade com as normas de segurança do trabalho;</li>
        <li>Redução de custos com manutenções corretivas;</li>
        <li>Prevenção de acidentes e danos estruturais.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o projeto de SPDA?',
        a: 'É o dimensionamento do sistema de proteção contra raios — para-raios e condutores que desviam a energia das descargas atmosféricas, protegendo a edificação.',
      },
      {
        q: 'O projeto é personalizado?',
        a: 'Sim. Elaboramos o projeto de acordo com as necessidades específicas de cada cliente e as características da edificação.',
      },
      {
        q: 'O projeto tem engenheiro responsável?',
        a: 'Sim. Como empresa de engenharia, conduzimos o projeto de SPDA com engenheiro responsável.',
      },
      REGIAO,
    ],
  },

  '/instalacao-spda': {
    resposta:
      'A instalação de SPDA implanta o Sistema de Proteção contra Descargas Atmosféricas — captores, condutores e aterramentos — que dissipa a energia dos raios de forma segura. Executada com materiais adequados, previne danos estruturais, incêndios e acidentes elétricos, protegendo edificações, equipamentos e pessoas.',
    corpo: `
      <h2>O que é a instalação de SPDA</h2>
      <p>A instalação de SPDA (Sistema de Proteção contra Descargas Atmosféricas) é fundamental para garantir a segurança de edificações e estruturas contra os riscos das descargas provocadas por raios. O sistema é composto por captores, condutores e aterramentos, que têm como objetivo dissipar a energia elétrica de forma segura, prevenindo danos estruturais, incêndios e acidentes elétricos.</p>

      <h2>Como a Previsio executa a instalação</h2>
      <p>A equipe técnica realiza uma análise detalhada das necessidades de cada cliente e desenvolve soluções que atendem às especificidades de cada edificação. Na execução, garantimos a utilização de materiais adequados e tecnologia apropriada, assegurando a eficácia e a durabilidade do sistema instalado.</p>

      <h2>Por que instalar com a Previsio</h2>
      <p>Empresas que investem na instalação de SPDA demonstram preocupação com a segurança de colaboradores, clientes e patrimônio, além de manterem a conformidade com as normas técnicas. Com atuação desde 2016 e mais de mil clientes atendidos, a Previsio entrega instalações que protegem equipamentos sensíveis e asseguram a continuidade das operações.</p>
    `,
    faq: [
      {
        q: 'O que é a instalação de SPDA?',
        a: 'É a implantação do sistema — captores, condutores e aterramentos — que dissipa a energia dos raios com segurança, protegendo a edificação.',
      },
      {
        q: 'Vocês projetam e instalam?',
        a: 'Sim. Analisamos as necessidades da edificação, desenvolvemos a solução e executamos a instalação com materiais adequados.',
      },
      {
        q: 'A instalação atende às normas?',
        a: 'Sim. A instalação garante a conformidade com as normas técnicas vigentes e a durabilidade do sistema.',
      },
      REGIAO,
    ],
  },

  '/laudo-spda': {
    resposta:
      'O laudo de SPDA avalia a instalação do Sistema de Proteção contra Descargas Atmosféricas de uma edificação, verificando se ela está devidamente protegida contra raios segundo normas técnicas como a NBR 5419. Analisa a eficácia do sistema de aterramento e da captação das descargas, essenciais para a segurança.',
    corpo: `
      <h2>O que é o laudo de SPDA</h2>
      <p>O laudo de SPDA é um documento fundamental para a avaliação da instalação de Sistemas de Proteção contra Descargas Atmosféricas. Ele assegura que a edificação esteja devidamente protegida contra raios, seguindo normas técnicas rigorosas, como a NBR 5419, e analisa a eficácia do sistema de aterramento e de captação das descargas — essenciais para a segurança das instalações e de seus ocupantes.</p>

      <h2>A importância de realizar o laudo</h2>
      <p>Empresas que investem no laudo de SPDA tomam medidas preventivas essenciais para proteger suas estruturas contra danos materiais e riscos de incêndios. A realização do laudo garante a conformidade com as normas vigentes e proporciona maior segurança aos colaboradores, cumprindo as exigências legais e promovendo um ambiente de trabalho mais seguro.</p>

      <h2>Laudo com quem executa</h2>
      <p>Atuando desde 2016, com mais de mil clientes atendidos, a Previsio emite o laudo de SPDA dentro de um portfólio que inclui projeto, instalação, aterramento e manutenção. Contamos com equipe qualificada e experiente para avaliar o sistema e, quando necessário, executar as adequações.</p>
    `,
    faq: [
      {
        q: 'O que é o laudo de SPDA?',
        a: 'É o documento que avalia a instalação do SPDA e confirma se a edificação está protegida contra raios segundo normas técnicas como a NBR 5419.',
      },
      {
        q: 'O laudo tem engenheiro responsável?',
        a: 'Sim. É emitido por engenheiro responsável, o que dá respaldo técnico ao documento perante a fiscalização e as auditorias.',
      },
      {
        q: 'Vocês também corrigem o que o laudo apontar?',
        a: 'Sim. Além do laudo, a Previsio executa projeto, instalação, aterramento e manutenção do SPDA.',
      },
      REGIAO,
    ],
  },

  '/manutencao-sistemas-spda': {
    resposta:
      'A manutenção de sistemas SPDA garante que a proteção contra descargas atmosféricas continue eficaz. Por meio de inspeção regular dos aterramentos, captadores e condutores, assegura o correto funcionamento do sistema, previne danos materiais e reduz o risco de incêndios, mantendo a conformidade com as normas de segurança.',
    corpo: `
      <h2>A importância da manutenção de sistemas SPDA</h2>
      <p>A manutenção de sistemas SPDA é essencial para garantir a segurança das edificações contra descargas atmosféricas. Com a inspeção regular, assegura-se o correto funcionamento dos aterramentos, captadores e condutores de descargas elétricas, prevenindo danos materiais e reduzindo o risco de incêndios.</p>

      <h2>Benefícios da manutenção preventiva</h2>
      <p>A realização periódica da manutenção traz conformidade com as normas de segurança, proteção das instalações, prevenção de acidentes de trabalho e redução de custos com reparos emergenciais. Empresas que mantêm seus sistemas em dia demonstram responsabilidade e compromisso com a segurança.</p>

      <h2>Manutenção com a Previsio</h2>
      <p>Sediada em São Leopoldo/RS e atuando há mais de cinco anos, a Previsio conta com equipe técnica qualificada para a manutenção de sistemas SPDA, ao lado de reformas de painéis, laudos de eletricidade conforme a NR-10 e demais serviços. Oferecemos atendimento ágil e orientado às necessidades de cada cliente.</p>
    `,
    faq: [
      {
        q: 'O que é a manutenção de sistemas SPDA?',
        a: 'É a inspeção regular dos aterramentos, captadores e condutores para assegurar o correto funcionamento do sistema de proteção contra raios.',
      },
      {
        q: 'Por que fazer manutenção preventiva?',
        a: 'Para manter a conformidade com as normas, prevenir acidentes e incêndios e reduzir custos com reparos emergenciais.',
      },
      {
        q: 'A Previsio faz a manutenção do meu sistema?',
        a: 'Sim. Nossa equipe técnica realiza a manutenção de sistemas SPDA, com atendimento ágil e personalizado.',
      },
      REGIAO,
    ],
  },

  '/servicos/sistema-de-protecao-contra-descargas-atmosfericas-nr-10': {
    resposta:
      'A Previsio desenvolve projetos, medições e laudos e instala SPDA — Sistemas de Proteção contra Descargas Atmosféricas — de acordo com as premissas da NBR 5419. É o serviço completo de proteção contra raios, do projeto à instalação, com respaldo técnico de engenharia.',
    corpo: `
      <h2>Sistema de Proteção contra Descargas Atmosféricas</h2>
      <p>Desenvolvemos projetos, medições, laudos e instalamos SPDA de acordo com as premissas da NBR 5419. É o serviço que cobre todo o ciclo da proteção contra raios — do dimensionamento à execução e à verificação do sistema.</p>

      <h2>O que entregamos</h2>
      <ul>
        <li><strong>Projeto de SPDA</strong> — dimensionamento de captores, condutores e aterramento;</li>
        <li><strong>Medições</strong> — verificação dos parâmetros do sistema;</li>
        <li><strong>Laudo</strong> — avaliação da proteção instalada;</li>
        <li><strong>Instalação</strong> — execução do sistema conforme a NBR 5419.</li>
      </ul>

      <h2>Proteção com um só fornecedor</h2>
      <p>Reunir projeto, medição, laudo e instalação em um único fornecedor garante coerência técnica e agilidade. A Previsio conduz cada etapa com engenheiro responsável, assegurando que a edificação fique protegida contra descargas atmosféricas e em conformidade com as normas.</p>
    `,
    faq: [
      {
        q: 'O que inclui o serviço de SPDA?',
        a: 'Projetos, medições, laudos e a instalação de SPDA, de acordo com as premissas da NBR 5419.',
      },
      {
        q: 'Vocês projetam e instalam o sistema?',
        a: 'Sim. Cobrimos todo o ciclo — do projeto e das medições ao laudo e à instalação — com um só fornecedor.',
      },
      {
        q: 'O serviço segue a NBR 5419?',
        a: 'Sim. Projetamos e instalamos os SPDA de acordo com as premissas da NBR 5419, com engenheiro responsável.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------------------- ATERRAMENTO
  '/aterramento-eletrico': {
    resposta:
      'O aterramento elétrico é um sistema de segurança que direciona as descargas elétricas para o solo. Fundamental em instalações industriais, comerciais e residenciais, previne choques, protege equipamentos e reduz riscos de incêndios, surtos elétricos e falhas de isolamento, garantindo a segurança dos trabalhadores.',
    corpo: `
      <h2>O que é o aterramento elétrico</h2>
      <p>O aterramento elétrico é um sistema de segurança fundamental em instalações elétricas, cuja principal função é direcionar as descargas elétricas para o solo. Esse procedimento é essencial para prevenir choques elétricos, proteger equipamentos e garantir a segurança de trabalhadores em indústrias, comércios e residências.</p>

      <h2>Vantagens do aterramento elétrico</h2>
      <p>Além de atender aos requisitos normativos, o aterramento melhora a eficiência dos sistemas elétricos, reduz riscos de incêndios e protege contra surtos elétricos e falhas de isolamento. Empresas que investem em aterramento garantem ambientes mais seguros e evitam prejuízos financeiros e estruturais.</p>

      <h2>Aterramento nas instalações com a Previsio</h2>
      <p>A correta implementação do aterramento em instalações industriais, comerciais e residenciais é essencial para a segurança de pessoas e equipamentos. A Previsio, especializada em Engenharia de Segurança do Trabalho, oferece serviços completos — reformas, laudos, documentações e adequações conforme as normas — com experiência técnica e mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'O que é o aterramento elétrico?',
        a: 'É o sistema que direciona as descargas elétricas para o solo, prevenindo choques, protegendo equipamentos e garantindo a segurança das instalações.',
      },
      {
        q: 'Quais os benefícios do aterramento?',
        a: 'Mais eficiência dos sistemas, menor risco de incêndios e proteção contra surtos elétricos e falhas de isolamento.',
      },
      {
        q: 'A Previsio projeta e instala o aterramento?',
        a: 'Sim. Oferecemos serviços completos de aterramento, incluindo projeto, laudos e adequações conforme as normas.',
      },
      REGIAO,
    ],
  },

  '/sistema-aterramento': {
    resposta:
      'O sistema de aterramento direciona a corrente elétrica para a terra em casos de falha, evitando choques, incêndios e danos aos equipamentos. É fundamental para a segurança elétrica em instalações industriais, comerciais e residenciais, além de assegurar o cumprimento das normas de segurança.',
    corpo: `
      <h2>O que é o sistema de aterramento</h2>
      <p>O sistema de aterramento é fundamental para garantir a segurança elétrica em instalações industriais, comerciais e residenciais. Sua principal função é direcionar a corrente elétrica para a terra em casos de falha no sistema, evitando choques, incêndios e danos aos equipamentos.</p>

      <h2>Vantagens de um sistema eficiente</h2>
      <p>Implementar um sistema de aterramento adequado traz o cumprimento das normas de segurança, a prevenção de acidentes elétricos, a proteção dos colaboradores e a redução de custos com manutenção corretiva. É um investimento indispensável diante dos riscos envolvidos em ambientes com energia elétrica.</p>

      <h2>Como a Previsio pode ajudar</h2>
      <p>Localizada em São Leopoldo/RS e com mais de mil clientes atendidos, a Previsio é especializada em Engenharia de Segurança do Trabalho. Oferece projetos de sistema de aterramento, reformas de máquinas e painéis elétricos, laudos de SPDA, treinamentos e documentações conforme as normas vigentes — tudo para garantir a segurança e a conformidade da sua empresa.</p>
    `,
    faq: [
      {
        q: 'O que é o sistema de aterramento?',
        a: 'É o sistema que direciona a corrente elétrica para a terra em caso de falha, evitando choques, incêndios e danos aos equipamentos.',
      },
      {
        q: 'Quais as vantagens de um sistema eficiente?',
        a: 'Cumprimento das normas de segurança, prevenção de acidentes, proteção dos colaboradores e menos custos com manutenção corretiva.',
      },
      {
        q: 'A Previsio elabora projetos de aterramento?',
        a: 'Sim. Desenvolvemos projetos de sistema de aterramento, ao lado de laudos de SPDA e demais serviços de segurança elétrica.',
      },
      REGIAO,
    ],
  },

  '/projeto-aterramento': {
    resposta:
      'O projeto de aterramento estrutura o sistema que protege trabalhadores e equipamentos de sobrecargas elétricas e descargas atmosféricas. Bem elaborado, reduz significativamente os riscos de choques, incêndios e danos aos sistemas elétricos, proporcionando um ambiente de trabalho seguro e em conformidade com as normas.',
    corpo: `
      <h2>O que é o projeto de aterramento</h2>
      <p>O projeto de aterramento é fundamental para proteger trabalhadores e equipamentos de sobrecargas elétricas e descargas atmosféricas. Ele estrutura o sistema de aterramento de acordo com o ambiente, sendo essencial para garantir a segurança elétrica em instalações industriais.</p>

      <h2>A importância de um aterramento bem elaborado</h2>
      <p>Empresas que investem em um sistema de aterramento eficiente reduzem significativamente os riscos de acidentes, como choques elétricos, incêndios e danos aos sistemas elétricos. Além disso, um aterramento bem elaborado proporciona um ambiente de trabalho seguro e em conformidade com as normas de segurança vigentes.</p>

      <h2>Vantagens do projeto de aterramento</h2>
      <ul>
        <li>Minimização de riscos de acidentes elétricos;</li>
        <li>Proteção eficaz contra sobrecargas e descargas atmosféricas;</li>
        <li>Prevenção de danos em equipamentos e sistemas elétricos;</li>
        <li>Conformidade com as normas de segurança do trabalho;</li>
        <li>Ambiente de trabalho mais seguro e produtivo.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o projeto de aterramento?',
        a: 'É o dimensionamento do sistema de aterramento que protege trabalhadores e equipamentos de sobrecargas elétricas e descargas atmosféricas.',
      },
      {
        q: 'Por que investir no projeto?',
        a: 'Um aterramento bem elaborado reduz os riscos de choques, incêndios e danos aos sistemas, além de garantir conformidade com as normas.',
      },
      {
        q: 'O projeto tem engenheiro responsável?',
        a: 'Sim. Nossa equipe elabora e executa o projeto de aterramento com engenheiro responsável.',
      },
      REGIAO,
    ],
  },

  '/instalacao-aterramento': {
    resposta:
      'A instalação de aterramento implanta o sistema que direciona as descargas elétricas para o solo, evitando danos aos equipamentos e protegendo as pessoas contra choques e surtos. Em instalações industriais, comerciais e residenciais, é essencial para prevenir incêndios e reduzir os riscos de falhas elétricas.',
    corpo: `
      <h2>A importância da instalação de aterramento</h2>
      <p>A instalação de aterramento é um procedimento fundamental para manter a segurança elétrica em diversos tipos de instalações. Ao implementar um sistema adequado, é possível direcionar corretamente as descargas elétricas para o solo, evitando danos aos equipamentos e garantindo a proteção das pessoas contra choques e surtos elétricos. Em instalações industriais, comerciais e residenciais, é essencial para prevenir incêndios e reduzir os riscos de falhas elétricas.</p>

      <h2>Vantagens da instalação de aterramento</h2>
      <p>Além de promover a segurança, a instalação de aterramento protege contra descargas atmosféricas e curtos-circuitos, que podem causar grandes danos às instalações e riscos às pessoas. Com um sistema eficiente, evitam-se prejuízos financeiros com danos a equipamentos e estruturas, mantendo a continuidade das operações em eventos adversos.</p>

      <h2>Projetos personalizados com a Previsio</h2>
      <p>Especialista em instalação de aterramento, a Previsio oferece projetos personalizados de acordo com as necessidades de cada cliente. Com equipe qualificada e atuação em todo o território nacional, desenvolvemos os sistemas considerando as normas técnicas vigentes e as características do local, entregando um aterramento confiável e seguro.</p>
    `,
    faq: [
      {
        q: 'O que é a instalação de aterramento?',
        a: 'É a implantação do sistema que direciona as descargas elétricas para o solo, protegendo equipamentos e pessoas contra choques e surtos.',
      },
      {
        q: 'Quais os benefícios?',
        a: 'Proteção contra descargas atmosféricas e curtos-circuitos, prevenção de incêndios e continuidade das operações em eventos adversos.',
      },
      {
        q: 'Vocês fazem projeto sob medida?',
        a: 'Sim. Desenvolvemos projetos de aterramento personalizados conforme as normas técnicas e as características de cada local.',
      },
      REGIAO,
    ],
  },

  '/servicos/sistema-de-aterramento-nr-10': {
    resposta:
      'A Previsio desenvolve projetos, medições e laudos e instala sistemas de aterramento de acordo com a NBR 5410. É o serviço completo de aterramento — do projeto à instalação, passando pelas medições e pelo laudo — com respaldo técnico de engenharia.',
    corpo: `
      <h2>Sistema de Aterramento</h2>
      <p>Desenvolvemos projetos, medições, laudos e instalamos sistemas de aterramento de acordo com a NBR 5410. É o serviço que cobre todo o ciclo do aterramento, garantindo instalações seguras e em conformidade.</p>

      <h2>O que entregamos</h2>
      <ul>
        <li><strong>Projeto</strong> — dimensionamento do sistema de aterramento;</li>
        <li><strong>Medições</strong> — verificação dos parâmetros do aterramento;</li>
        <li><strong>Laudo</strong> — avaliação do sistema instalado;</li>
        <li><strong>Instalação</strong> — execução conforme a NBR 5410.</li>
      </ul>

      <h2>Aterramento com um só fornecedor</h2>
      <p>Ao reunir projeto, medição, laudo e instalação em um único fornecedor, a Previsio garante coerência técnica em cada etapa. Conduzimos o trabalho com engenheiro responsável, assegurando um aterramento eficaz e em conformidade com a NBR 5410.</p>
    `,
    faq: [
      {
        q: 'O que inclui o serviço de aterramento?',
        a: 'Projetos, medições, laudos e a instalação de sistemas de aterramento, de acordo com a NBR 5410.',
      },
      {
        q: 'Vocês projetam e instalam?',
        a: 'Sim. Cobrimos todo o ciclo — projeto, medições, laudo e instalação — com um só fornecedor.',
      },
      {
        q: 'O serviço segue a NBR 5410?',
        a: 'Sim. Desenvolvemos e instalamos os sistemas de aterramento de acordo com a NBR 5410, com engenheiro responsável.',
      },
      REGIAO,
    ],
  },
};
