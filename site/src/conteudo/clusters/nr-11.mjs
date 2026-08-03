/**
 * Conteúdo enriquecido — cluster NR-11 (movimentação e armazenamento de cargas).
 *
 * Fontes: o bodyHtml de cada página do site atual, o objetivo geral e
 * incontroverso da NR-11 (movimentação de materiais; pontes rolantes, talhas,
 * elevadores, guindastes, empilhadeiras) e os termos que o próprio cliente usa
 * — inclusive a lista de estruturas do pilar (guindastes, elevadores, talhas,
 * pontes rolantes, prateleiras, magazines). Nada de números, prazos, portarias,
 * NBRs ou cases inventados.
 *
 * Cada página recebe conteúdo próprio conforme sua INTENÇÃO — adequação,
 * segurança, inspeção, laudo e treinamento têm textos distintos, cada um
 * ancorado no seu próprio bodyHtml e no ângulo do título.
 */

// NAP do cliente. Reutilizado no fecho das FAQs para manter consistência.
const FAQ_REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Atendemos todo o Brasil a partir de São Leopoldo/RS, com projetos conduzidos em território nacional e no exterior. Fale com a Previsio pelo (51) 3466-9601.',
};

export default {
  // ------------------------------------------------------------------ PILAR
  '/servicos/laudos-estruturais-nr-11': {
    resposta:
      'A NR-11 trata da segurança na movimentação e no armazenamento de cargas. A Previsio projeta e lauda estruturas conforme a norma — guindastes, elevadores, talhas, pontes rolantes, prateleiras, magazines e demais dispositivos de movimentação e armazenamento —, avaliando a capacidade dessas estruturas de suportar as cargas com segurança.',
    corpo: `
      <h2>O que é a NR-11</h2>
      <p>A NR-11 trata da segurança na movimentação, no transporte e no armazenamento de materiais. Ela alcança os equipamentos e estruturas usados para erguer, deslocar e guardar cargas, onde falhas podem provocar acidentes graves.</p>
      <p>Atender à norma envolve avaliar a condição e a capacidade dessas estruturas, garantir a operação segura dos equipamentos e capacitar quem os utiliza.</p>

      <h2>Estruturas que projetamos e laudamos</h2>
      <p>Projetamos e laudamos estruturas de movimentação de carga conforme a NR-11, tais como:</p>
      <ul>
        <li>Guindastes;</li>
        <li>Elevadores;</li>
        <li>Talhas;</li>
        <li>Pontes rolantes;</li>
        <li>Prateleiras e magazines;</li>
        <li>Demais dispositivos de movimentação e armazenamento de cargas.</li>
      </ul>

      <h2>Soluções de NR-11 da Previsio</h2>
      <p>Reunimos o escopo de movimentação de cargas sob o mesmo fornecedor: adequação de equipamentos, inspeção de estruturas de movimentação, laudos estruturais e treinamento de operadores. Somos uma empresa de Engenharia de Segurança do Trabalho sediada em São Leopoldo/RS, atuando desde 2016 e com mais de mil clientes atendidos.</p>
      <p>Conheça abaixo cada serviço do escopo de NR-11 — da adequação ao treinamento:</p>
    `,
    faq: [
      {
        q: 'O que é a NR-11?',
        a: 'É a Norma Regulamentadora de segurança na movimentação, transporte e armazenamento de materiais. Ela alcança estruturas e equipamentos como pontes rolantes, talhas, guindastes, elevadores, prateleiras e magazines.',
      },
      {
        q: 'A Previsio projeta e lauda as estruturas de movimentação?',
        a: 'Sim. Projetamos e laudamos estruturas de movimentação de carga conforme a NR-11 — guindastes, elevadores, talhas, pontes rolantes, prateleiras, magazines e demais dispositivos de movimentação e armazenamento.',
      },
      {
        q: 'Os laudos têm respaldo de engenheiro?',
        a: 'Sim. Os laudos estruturais são conduzidos por engenheiro responsável, com Anotação de Responsabilidade Técnica (ART), o que confere validade ao documento perante auditorias e fiscalização.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------------- ADEQUAÇÃO ELEVADORES
  '/adequacao-elevadores': {
    resposta:
      'A adequação de elevadores garante que o equipamento atenda aos padrões de segurança exigidos pela legislação. Envolve a modernização de componentes elétricos e mecânicos, a instalação de sistemas de emergência e a adaptação para acessibilidade, reduzindo falhas e riscos operacionais e tornando o transporte vertical mais seguro.',
    corpo: `
      <h2>O que é a adequação de elevadores</h2>
      <p>A adequação de elevadores é o procedimento que assegura que o equipamento atenda aos padrões de segurança exigidos pela legislação vigente. É o que transforma um elevador antigo ou defasado em um equipamento seguro para usuários e para os técnicos de manutenção.</p>

      <h2>O que a adequação envolve</h2>
      <p>O processo reúne diferentes frentes de intervenção:</p>
      <ul>
        <li>Modernização de componentes elétricos e mecânicos;</li>
        <li>Instalação de sistemas de emergência;</li>
        <li>Adaptação para acessibilidade.</li>
      </ul>
      <p>Com isso, reduzem-se falhas e riscos operacionais e prolonga-se a durabilidade do equipamento.</p>

      <h2>Benefícios da adequação</h2>
      <p>Adequar elevadores não atende apenas às exigências legais: traz maior segurança aos usuários, reduz paradas inesperadas, mantém a conformidade com as normas de segurança e aprimora a acessibilidade. O resultado é um transporte vertical mais seguro e eficiente para todos os envolvidos.</p>
    `,
    faq: [
      {
        q: 'O que é a adequação de elevadores?',
        a: 'É o procedimento que ajusta o elevador aos padrões de segurança da legislação, por meio da modernização de componentes elétricos e mecânicos, da instalação de sistemas de emergência e da adaptação para acessibilidade.',
      },
      {
        q: 'A adequação reduz paradas inesperadas?',
        a: 'Sim. Ao modernizar componentes e instalar sistemas de emergência, a adequação reduz falhas e paradas inesperadas, além de prolongar a durabilidade do equipamento.',
      },
      {
        q: 'A Previsio executa a adequação, não só avalia?',
        a: 'Sim. Nossos serviços abrangem desde a modernização de componentes até a instalação de sistemas de emergência, com equipe qualificada para conduzir o projeto de ponta a ponta.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- ADEQUAÇÃO PONTES ROLANTES
  '/adequacao-pontes-rolantes': {
    resposta:
      'A adequação de pontes rolantes ajusta esses equipamentos de movimentação de cargas às normas de segurança e de funcionamento. O processo inclui inspeção estrutural, revisão elétrica e mecânica, instalação de dispositivos de segurança e sistemas de frenagem, reduzindo o risco de acidentes e prolongando a vida útil da ponte rolante.',
    corpo: `
      <h2>O que é a adequação de pontes rolantes</h2>
      <p>A adequação de pontes rolantes é o procedimento que garante que esses equipamentos de movimentação de cargas atendam às normas de segurança e de funcionamento. Abrange etapas de inspeção, revisão e instalação de dispositivos, com foco na proteção de quem opera e mantém o equipamento.</p>

      <h2>Etapas do processo</h2>
      <p>A adequação reúne intervenções que devolvem a ponte rolante à plena condição de uso:</p>
      <ul>
        <li>Inspeção estrutural;</li>
        <li>Revisão elétrica e mecânica;</li>
        <li>Instalação de dispositivos de segurança;</li>
        <li>Sistemas de frenagem.</li>
      </ul>

      <h2>Por que adequar</h2>
      <p>Adequar a ponte rolante reduz o risco de acidentes e de falhas operacionais, assegura a conformidade legal e prolonga a vida útil do equipamento. É o que evita prejuízos e mantém a movimentação de cargas em um ambiente seguro e produtivo.</p>
    `,
    faq: [
      {
        q: 'O que a adequação de pontes rolantes inclui?',
        a: 'Inspeção estrutural, revisão elétrica e mecânica, instalação de dispositivos de segurança e sistemas de frenagem — medidas que devolvem o equipamento à plena condição de uso conforme as normas.',
      },
      {
        q: 'Adequar a ponte rolante prolonga sua vida útil?',
        a: 'Sim. Além de reduzir o risco de acidentes e falhas, a adequação prolonga a vida útil do equipamento e evita prejuízos com paradas e manutenções corretivas.',
      },
      {
        q: 'A Previsio executa a adequação?',
        a: 'Sim. Conduzimos as etapas de inspeção, revisão e instalação de dispositivos de segurança, com equipe qualificada em Engenharia de Segurança do Trabalho.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------- INSPEÇÃO TALHAS E PONTES ROLANTES
  '/inspecao-talhas-pontes-rolantes': {
    resposta:
      'A inspeção em talhas e pontes rolantes verifica as condições estruturais e operacionais desses equipamentos de movimentação de cargas. Identifica desgastes, falhas mecânicas e necessidade de ajustes preventivos, prevenindo acidentes, reduzindo custos com reparos emergenciais e mantendo a conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>O que é a inspeção em talhas e pontes rolantes</h2>
      <p>A inspeção em talhas e pontes rolantes é o procedimento que verifica as condições estruturais e operacionais desses equipamentos usados na movimentação de cargas. É a avaliação que revela o estado real do equipamento antes que um problema se torne um acidente.</p>

      <h2>O que a inspeção identifica</h2>
      <p>Durante a verificação, são identificados desgastes, falhas mecânicas e a necessidade de ajustes preventivos. Com isso, é possível prevenir acidentes, reduzir custos com reparos emergenciais e manter a conformidade com as normas regulamentadoras.</p>

      <h2>Por que inspecionar periodicamente</h2>
      <p>Empresas que realizam inspeções periódicas identificam problemas precocemente, evitando gastos excessivos com reparos e paralisações inesperadas nas operações. Além de proteger os colaboradores, a prática mantém os equipamentos em pleno funcionamento e prolonga sua vida útil.</p>
    `,
    faq: [
      {
        q: 'O que a inspeção em talhas e pontes rolantes avalia?',
        a: 'As condições estruturais e operacionais dos equipamentos, identificando desgastes, falhas mecânicas e a necessidade de ajustes preventivos antes que se tornem problemas críticos.',
      },
      {
        q: 'Com que finalidade a inspeção deve ser periódica?',
        a: 'A inspeção periódica antecipa falhas, reduz custos com reparos emergenciais, evita paralisações inesperadas e mantém a conformidade com as normas regulamentadoras.',
      },
      {
        q: 'A Previsio realiza essas inspeções?',
        a: 'Sim. Conduzimos inspeções precisas em talhas e pontes rolantes com equipe qualificada, garantindo a segurança e a eficiência na movimentação de cargas.',
      },
      FAQ_REGIAO,
    ],
  },

  // --------------------------------------- INSPEÇÃO ESTRUTURAS MOVIMENTAÇÃO CARGAS
  '/inspecao-estruturas-movimentacao-cargas': {
    resposta:
      'A inspeção de estruturas de movimentação de cargas é a avaliação periódica de equipamentos como guindastes, talhas e pontes rolantes. Verifica a integridade das estruturas, identifica falhas mecânicas, desgastes e riscos de acidentes, contribuindo para a segurança dos trabalhadores e para a continuidade das operações.',
    corpo: `
      <h2>O que é a inspeção de estruturas de movimentação de cargas</h2>
      <p>A inspeção de estruturas de movimentação de cargas é o procedimento voltado às empresas que utilizam guindastes, talhas e pontes rolantes em suas operações. Trata-se de uma avaliação periódica que assegura a integridade dos equipamentos, identificando falhas mecânicas, desgastes e riscos de acidentes.</p>

      <h2>Por que a inspeção é importante</h2>
      <p>Realizada com regularidade, a inspeção mantém a operação segura e eficiente. Ao identificar problemas antes que se tornem críticos, permite programar intervenções preventivas, garantindo a continuidade das atividades sem interrupções indesejadas e a conformidade com as normas regulamentadoras.</p>

      <h2>Benefícios para a empresa</h2>
      <p>Além de prevenir acidentes e proteger os colaboradores, a inspeção prolonga a vida útil dos equipamentos e evita gastos desnecessários com manutenções corretivas. Com a avaliação periódica, a empresa planeja suas ações de forma assertiva e otimiza seus processos.</p>
    `,
    faq: [
      {
        q: 'Quais equipamentos entram nessa inspeção?',
        a: 'Estruturas de movimentação de cargas como guindastes, talhas e pontes rolantes, avaliadas periodicamente quanto à integridade e à identificação de falhas mecânicas e desgastes.',
      },
      {
        q: 'A inspeção evita paradas inesperadas?',
        a: 'Sim. Ao identificar problemas antes que se tornem críticos, a inspeção permite programar intervenções preventivas e evitar paralisações não planejadas nas operações.',
      },
      {
        q: 'A inspeção mantém a empresa em conformidade?',
        a: 'Sim. A avaliação periódica ajuda a empresa a atender às normas regulamentadoras, mantendo um ambiente de trabalho seguro na movimentação de cargas.',
      },
      FAQ_REGIAO,
    ],
  },

  // ------------------------------------------------------- LAUDOS ESTRUTURAIS
  '/laudos-estruturais': {
    resposta:
      'Os laudos estruturais são documentos técnicos que avaliam a condição e a capacidade das estruturas de suportar cargas e resistir a forças externas. Verificam a integridade dos elementos construtivos e identificam falhas que possam comprometer a segurança, garantindo a estabilidade e a durabilidade das construções e estruturas.',
    corpo: `
      <h2>O que são laudos estruturais</h2>
      <p>Os laudos estruturais são documentos técnicos que avaliam a condição e a capacidade das estruturas em suportar cargas e resistir a forças externas. Eles verificam a integridade dos elementos construtivos e identificam possíveis falhas que possam comprometer a segurança, sendo fundamentais para atestar a estabilidade e a durabilidade das construções e estruturas.</p>

      <h2>Por que os laudos estruturais são importantes</h2>
      <p>A realização de laudos estruturais é essencial para garantir a segurança de construções e estruturas — de edificações a estruturas de movimentação de cargas. Ao atestar a conformidade com as normas técnicas, o laudo evita acidentes decorrentes de falhas e proporciona um ambiente seguro para todos os usuários.</p>

      <h2>Benefícios dos laudos estruturais</h2>
      <ul>
        <li><strong>Prevenção de acidentes</strong> decorrentes de falhas na estrutura;</li>
        <li><strong>Conformidade com normas técnicas</strong>, garantindo a qualidade das obras;</li>
        <li><strong>Durabilidade</strong>, ao identificar e corrigir problemas antes que se agravem;</li>
        <li><strong>Ambiente seguro</strong> para quem utiliza ou frequenta as construções.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é um laudo estrutural?',
        a: 'É o documento técnico que avalia a condição e a capacidade de uma estrutura em suportar cargas e resistir a forças externas, verificando a integridade dos elementos construtivos e identificando falhas que comprometam a segurança.',
      },
      {
        q: 'O laudo estrutural tem respaldo de engenheiro?',
        a: 'Sim. O laudo é conduzido por engenheiro responsável, com Anotação de Responsabilidade Técnica (ART), o que confere validade ao documento perante auditorias e fiscalização.',
      },
      {
        q: 'Quais estruturas a Previsio avalia?',
        a: 'Avaliamos desde edificações até estruturas de movimentação de cargas conforme a NR-11 — guindastes, talhas, pontes rolantes, prateleiras e magazines.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- SEGURANÇA PONTES ROLANTES
  '/seguranca-pontes-rolantes': {
    resposta:
      'A segurança em pontes rolantes reúne as medidas que protegem quem opera e mantém esses equipamentos de movimentação de cargas. Inclui treinamento de operadores, dispositivos como limitadores de carga e sistemas de frenagem, inspeções periódicas e manutenção preventiva e corretiva, em conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>Segurança em pontes rolantes</h2>
      <p>A segurança em pontes rolantes é um aspecto essencial em ambientes industriais que usam esse equipamento para movimentação de cargas. Adotar medidas de proteção adequadas é fundamental para proteger os trabalhadores que operam e mantêm as pontes rolantes, mantendo o ambiente em conformidade com as normas regulamentadoras.</p>

      <h2>Medidas de segurança</h2>
      <p>Para assegurar a proteção dos colaboradores, é necessário adotar um conjunto de medidas:</p>
      <ul>
        <li>Treinamentos específicos para operadores de pontes rolantes;</li>
        <li>Dispositivos de segurança, como limitadores de carga e sistemas de frenagem;</li>
        <li>Inspeções periódicas para identificar falhas e garantir a integridade do equipamento;</li>
        <li>Manutenção preventiva e corretiva conforme as especificações do fabricante;</li>
        <li>Atendimento às normas regulamentadoras de segurança do trabalho.</li>
      </ul>

      <h2>Vantagens de investir em segurança</h2>
      <p>Empresas que investem na segurança das pontes rolantes reduzem o risco de acidentes, mantêm a conformidade com a legislação, aumentam a produtividade e promovem um ambiente de trabalho mais saudável, prevenindo afastamentos.</p>
    `,
    faq: [
      {
        q: 'Quais medidas garantem a segurança em pontes rolantes?',
        a: 'Treinamento dos operadores, dispositivos como limitadores de carga e sistemas de frenagem, inspeções periódicas, manutenção preventiva e corretiva e o atendimento às normas regulamentadoras.',
      },
      {
        q: 'A segurança em pontes rolantes é exigida por norma?',
        a: 'Sim. As medidas de proteção atendem às normas regulamentadoras de segurança do trabalho aplicáveis à movimentação de cargas, protegendo quem opera e mantém o equipamento.',
      },
      {
        q: 'A Previsio realiza treinamentos, inspeções e manutenções?',
        a: 'Sim. Atuamos na realização de treinamentos, inspeções, manutenções e adequações de pontes rolantes conforme as normas vigentes.',
      },
      FAQ_REGIAO,
    ],
  },

  // -------------------------------------------- SEGURANÇA VEÍCULOS AUTOPROPELIDOS
  '/seguranca-veiculos-autopropelidos': {
    resposta:
      'A segurança de veículos autopropelidos protege quem opera equipamentos como empilhadeiras e caminhões em ambientes industriais. Baseia-se em três pilares: treinamentos específicos para os operadores, sinalização adequada das áreas de circulação e manutenção regular dos veículos, prevenindo acidentes e mantendo a conformidade com as normas de segurança.',
    corpo: `
      <h2>Segurança de veículos autopropelidos</h2>
      <p>A segurança de veículos autopropelidos é fundamental para garantir a integridade dos trabalhadores que lidam com equipamentos como empilhadeiras e caminhões em ambientes industriais. Para que a operação seja segura e eficiente, é necessário implementar medidas que previnam acidentes e sigam as normas de segurança do trabalho.</p>

      <h2>Prevenção com treinamento e sinalização</h2>
      <p>Um dos pilares da segurança é a capacitação dos operadores para lidar com situações de risco. Somada a ela, a correta sinalização dos ambientes — áreas de carga e descarga, locais de circulação e pontos de cruzamento — alerta os trabalhadores e contribui para prevenir colisões e incidentes.</p>

      <h2>Manutenção regular dos veículos</h2>
      <p>Verificar regularmente freios, pneus, sistema elétrico e demais componentes é essencial para evitar falhas mecânicas que coloquem os trabalhadores em risco. A manutenção preventiva ainda aumenta a vida útil dos veículos e garante a eficiência operacional da frota.</p>
    `,
    faq: [
      {
        q: 'Quais são os pilares da segurança de veículos autopropelidos?',
        a: 'Treinamentos específicos para os operadores, sinalização adequada das áreas de circulação e manutenção regular dos veículos — juntos, previnem acidentes e mantêm a conformidade legal.',
      },
      {
        q: 'Por que a sinalização é importante?',
        a: 'Porque alertar sobre áreas de carga e descarga, locais de circulação e pontos de cruzamento de veículos reduz significativamente o risco de colisões e incidentes no ambiente industrial.',
      },
      {
        q: 'A Previsio apoia a segurança desses veículos?',
        a: 'Sim. Oferecemos serviços completos para a segurança de veículos autopropelidos, com equipe técnica qualificada para atender às necessidades de cada operação.',
      },
      FAQ_REGIAO,
    ],
  },

  // -------------------------------------------------------- TREINAMENTO EMPILHADEIRA
  '/treinamento-empilhadeira': {
    resposta:
      'O treinamento de empilhadeira capacita os operadores a manusear, transportar e armazenar cargas com segurança. É fundamental para prevenir acidentes e garantir a eficiência nas operações que envolvem esses equipamentos industriais, além de manter a empresa em conformidade com as normas de segurança do trabalho.',
    corpo: `
      <h2>A importância do treinamento de empilhadeira</h2>
      <p>O treinamento de empilhadeira é fundamental para garantir a segurança e a eficiência nas operações que envolvem esses equipamentos industriais. Os operadores precisam estar devidamente capacitados para manusear, transportar e armazenar cargas de maneira segura, prevenindo acidentes e mantendo um ambiente de trabalho adequado.</p>

      <h2>Benefícios da capacitação</h2>
      <p>Investir no treinamento traz benefícios tanto para os colaboradores quanto para a empresa. Além de cumprir as normas de segurança, a organização demonstra preocupação com o bem-estar dos funcionários, resultando em um ambiente de trabalho mais produtivo e harmonioso.</p>

      <h2>Como conduzimos o treinamento</h2>
      <p>A Previsio oferece um programa completo de treinamento para operadores de empilhadeiras e outros veículos industriais. Com equipe experiente e qualificada, o conteúdo é personalizado e adaptado às necessidades de cada cliente, para que o aprendizado se aplique à rotina real de operação.</p>
    `,
    faq: [
      {
        q: 'O que o treinamento de empilhadeira aborda?',
        a: 'A capacitação dos operadores para manusear, transportar e armazenar cargas com segurança, prevenindo acidentes nas operações que envolvem o equipamento.',
      },
      {
        q: 'O treinamento de empilhadeira é obrigatório?',
        a: 'A capacitação dos operadores é uma exigência das normas de segurança do trabalho. Oferecer treinamento adequado mantém a empresa em conformidade e protege os colaboradores.',
      },
      {
        q: 'O treinamento é adaptado à empresa?',
        a: 'Sim. O programa é personalizado e adaptado às necessidades de cada cliente, ministrado por equipe experiente e qualificada.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- TREINAMENTO MOVIMENTAÇÃO CARGAS
  '/treinamento-movimentacao-cargas': {
    resposta:
      'O treinamento de movimentação de cargas capacita os trabalhadores que lidam com o transporte e o manuseio de materiais. Ensina técnicas adequadas, o uso correto de equipamentos de proteção e as melhores práticas de movimentação, prevenindo lesões e acidentes e mantendo a empresa em conformidade com as normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o treinamento de movimentação de cargas</h2>
      <p>O treinamento de movimentação de cargas é essencial para garantir a segurança dos trabalhadores que lidam com o transporte e o manuseio de materiais. Nele, são ensinadas técnicas adequadas, o uso correto de equipamentos de proteção e as melhores práticas de movimentação, com o objetivo de prevenir lesões e acidentes durante as atividades.</p>

      <h2>Por que investir na capacitação</h2>
      <p>Ao investir nesse tipo de capacitação, a empresa demonstra compromisso com a saúde e o bem-estar dos funcionários e garante a conformidade com as normas de segurança do trabalho, evitando possíveis penalidades. Colaboradores qualificados são mais produtivos e confiantes em suas atividades.</p>

      <h2>Benefícios para a operação</h2>
      <p>Além de um ambiente mais seguro, o treinamento reduz acidentes, afastamentos e custos com indenizações, contribuindo para o aumento da eficiência operacional. É uma medida que protege as pessoas e melhora o desempenho da empresa.</p>
    `,
    faq: [
      {
        q: 'O que o treinamento de movimentação de cargas ensina?',
        a: 'Técnicas adequadas de transporte e manuseio de materiais, o uso correto de equipamentos de proteção e as melhores práticas de movimentação, para prevenir lesões e acidentes.',
      },
      {
        q: 'Esse treinamento ajuda a cumprir as normas?',
        a: 'Sim. A capacitação mantém a empresa em conformidade com as normas de segurança do trabalho vigentes, evitando penalidades e reduzindo acidentes e afastamentos.',
      },
      {
        q: 'A Previsio ministra esse treinamento?',
        a: 'Sim. Oferecemos treinamentos de movimentação de cargas com equipe qualificada, com conteúdo adaptado às necessidades específicas de cada cliente.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- TREINAMENTO TALHA E PONTE ROLANTE
  '/treinamento-talha-ponte-rolante': {
    resposta:
      'O treinamento de talha e ponte rolante capacita os operadores a utilizar esses equipamentos de movimentação de cargas com segurança, a realizar a manutenção adequada e a aplicar técnicas operacionais essenciais. É fundamental para prevenir acidentes e manter a empresa em conformidade com as normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o treinamento de talha e ponte rolante</h2>
      <p>O treinamento de talha e ponte rolante é fundamental para a segurança em locais onde a movimentação de cargas pesadas é rotineira. Ele capacita os operadores a utilizar os equipamentos com segurança, realizar a manutenção adequada e aplicar técnicas operacionais essenciais.</p>

      <h2>Por que capacitar os operadores</h2>
      <p>Capacitar quem opera talhas e pontes rolantes é essencial para prevenir acidentes relacionados ao uso desses equipamentos. Com operadores treinados, a empresa garante a conformidade com as normas de segurança do trabalho e proporciona um ambiente mais seguro para todos os colaboradores.</p>

      <h2>Vantagens do treinamento</h2>
      <p>Investir nessa capacitação reduz acidentes, aumenta a produtividade, melhora o clima organizacional e ajuda a cumprir a legislação. Operadores capacitados tendem a ter melhor desempenho e a prolongar a vida útil dos equipamentos.</p>
    `,
    faq: [
      {
        q: 'O que o treinamento de talha e ponte rolante aborda?',
        a: 'A utilização segura dos equipamentos, a manutenção adequada e as técnicas operacionais essenciais para a movimentação de cargas pesadas.',
      },
      {
        q: 'O treinamento é obrigatório para operar esses equipamentos?',
        a: 'A capacitação dos operadores é necessária para manter a conformidade com as normas de segurança do trabalho e prevenir acidentes na operação de talhas e pontes rolantes.',
      },
      {
        q: 'A Previsio oferece esse treinamento?',
        a: 'Sim. Ministramos o treinamento de talha e ponte rolante com profissionais qualificados e suporte técnico, com conteúdo voltado à realidade de cada operação.',
      },
      FAQ_REGIAO,
    ],
  },

  // ---------------------------------------------------- TREINAMENTO VEÍCULOS AUTOPROPELIDOS
  '/treinamento-veiculos-autopropelidos': {
    resposta:
      'O treinamento de veículos autopropelidos é um programa de capacitação para motoristas e operadores de equipamentos industriais, como empilhadeiras e caminhões. Ensina a conduzir esses veículos de forma segura, prevenindo acidentes e danos materiais e mantendo a empresa em conformidade com as normas de segurança do trabalho.',
    corpo: `
      <h2>O que é o treinamento de veículos autopropelidos</h2>
      <p>O treinamento de veículos autopropelidos é um programa de capacitação destinado a motoristas e operadores de equipamentos industriais, como empilhadeiras e caminhões. Seu objetivo é ensinar os profissionais a conduzir esses veículos de forma segura, prevenindo acidentes e danos materiais.</p>

      <h2>Benefícios do treinamento</h2>
      <ul>
        <li>Aumento da segurança no ambiente de trabalho;</li>
        <li>Redução de acidentes envolvendo veículos industriais;</li>
        <li>Conformidade com as normas de segurança do trabalho;</li>
        <li>Proteção da integridade física dos colaboradores;</li>
        <li>Otimização dos processos operacionais.</li>
      </ul>

      <h2>Como a Previsio conduz o treinamento</h2>
      <p>Somos uma empresa de Engenharia de Segurança do Trabalho, com sede em São Leopoldo/RS, atuando desde 2016 e com mais de mil clientes atendidos. Nossos treinamentos para veículos autopropelidos são ministrados por profissionais qualificados e experientes, garantindo a qualidade e a eficácia do aprendizado.</p>
    `,
    faq: [
      {
        q: 'Para quem é o treinamento de veículos autopropelidos?',
        a: 'Para motoristas e operadores de equipamentos industriais, como empilhadeiras e caminhões, que precisam conduzir esses veículos de forma segura e em conformidade com as normas.',
      },
      {
        q: 'O treinamento ajuda a cumprir as normas de segurança?',
        a: 'Sim. A capacitação mantém a empresa em conformidade com as normas de segurança do trabalho e reduz acidentes envolvendo veículos industriais.',
      },
      {
        q: 'Como diferencia-se do treinamento de empilhadeira?',
        a: 'O treinamento de veículos autopropelidos abrange operadores de diferentes equipamentos industriais, como empilhadeiras e caminhões, enquanto o treinamento de empilhadeira foca especificamente a operação desse equipamento.',
      },
      FAQ_REGIAO,
    ],
  },
};
