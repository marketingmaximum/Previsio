/**
 * Conteúdo enriquecido — cluster MANUTENÇÃO (manutenção industrial e reformas).
 *
 * Fontes: bodyHtml das próprias páginas (contrato e plano de manutenção
 * preventiva) e termos que o cliente já usa em todo o site — "reformas de
 * atualização de máquinas e painéis elétricos" e "manutenção em CLP e IHMs".
 * As páginas /servicos/manutencao e /servicos/reformas não têm corpo no site
 * atual; foram ancoradas no tema do cluster e no vocabulário do cliente.
 * Sem números, prazos ou cases inventados.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'A sede fica em São Leopoldo/RS e o atendimento é nacional — conduzimos projetos em todo o Brasil e também no exterior. Fale com a nossa equipe pelo (51) 3466-9601.',
};

export default {
  // -------------------------------------------------------------- PILAR
  '/servicos/manutencao': {
    resposta:
      'A manutenção da Previsio mantém máquinas, painéis e sistemas industriais funcionando com segurança e disponibilidade. Abrange manutenção preventiva programada, reformas e atualização de máquinas e painéis elétricos e manutenção em CLPs e IHMs — reduzindo paradas não planejadas e prolongando a vida útil dos equipamentos, com atendimento em todo o Brasil.',
    corpo: `
      <h2>Manutenção industrial com foco em segurança e disponibilidade</h2>
      <p>A Previsio Engenharia mantém máquinas, painéis elétricos e sistemas industriais operando de forma segura e confiável. O objetivo é evitar falhas graves e paradas não planejadas, que interrompem a produção e geram custos de reparo emergencial, ao mesmo tempo em que se preserva a integridade dos equipamentos e a segurança de quem opera.</p>

      <h2>O que a manutenção abrange</h2>
      <p>Reunimos, em um só fornecedor, os serviços que mantêm o parque de máquinas em ordem:</p>
      <ul>
        <li>Manutenção preventiva programada — inspeções, ajustes e substituição de peças em cronograma;</li>
        <li>Reformas e atualização de máquinas e painéis elétricos;</li>
        <li>Manutenção em CLPs e IHMs;</li>
        <li>Adequações de segurança conforme as normas aplicáveis.</li>
      </ul>

      <h2>Preventiva em vez de corretiva</h2>
      <p>Priorizamos a manutenção preventiva à corretiva: intervir de forma planejada, antes da falha, custa menos e evita o caos de uma parada inesperada. As intervenções são organizadas em um cronograma alinhado à rotina produtiva, para que a manutenção não atrapalhe a operação.</p>
    `,
    faq: [
      {
        q: 'Qual a diferença entre manutenção preventiva e corretiva?',
        a: 'A preventiva é programada e acontece antes da falha, com inspeções e ajustes que evitam paradas; a corretiva reage a um problema já ocorrido. Priorizar a preventiva reduz custos e paralisações não planejadas.',
      },
      {
        q: 'Vocês fazem manutenção em CLPs e painéis elétricos?',
        a: 'Sim. Além da manutenção preventiva, realizamos reformas e atualização de máquinas e painéis elétricos e manutenção em CLPs e IHMs.',
      },
      {
        q: 'A manutenção para a minha produção?',
        a: 'Nosso foco é o mínimo impacto: as intervenções são planejadas em cronograma alinhado à sua rotina produtiva, evitando interferências e paradas não programadas.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------------- CONTRATO PREVENTIVA
  '/contrato-manutencao-preventiva': {
    resposta:
      'O contrato de manutenção preventiva estabelece inspeções periódicas, ajustes e substituição de peças em um cronograma programado, prevenindo falhas graves e paradas não planejadas. A Previsio executa as intervenções alinhadas à rotina produtiva, reduzindo custos com reparos emergenciais e prolongando a vida útil dos equipamentos, com segurança e conformidade.',
    corpo: `
      <h2>O que é o contrato de manutenção preventiva</h2>
      <p>O contrato de manutenção preventiva é o acordo que garante o cuidado contínuo dos seus equipamentos e sistemas industriais. Ele estabelece inspeções periódicas, ajustes e substituição de peças, com o objetivo de prevenir falhas graves e assegurar a continuidade das operações — em vez de deixar a manutenção acontecer apenas quando algo quebra.</p>

      <h2>Por que ter um contrato</h2>
      <p>Ao formalizar a manutenção em contrato, a empresa reduz de forma significativa os custos com reparos emergenciais e evita paralisações não programadas, que impactam diretamente a produtividade. A manutenção regular também prolonga a vida útil dos equipamentos, preserva a segurança dos colaboradores e sustenta a conformidade com as normas técnicas.</p>

      <h2>Como conduzimos as intervenções</h2>
      <p>O trabalho envolve inspeções, limpezas, lubrificações, ajustes e calibrações, organizados em um cronograma bem estruturado. A Previsio realiza cada intervenção de forma programada, evitando interferências na rotina produtiva e garantindo a integridade dos equipamentos ao longo do tempo.</p>
    `,
    faq: [
      {
        q: 'O que está incluído no contrato de manutenção preventiva?',
        a: 'Inspeções periódicas, limpezas, lubrificações, ajustes, calibrações e substituição de peças, organizados em cronograma. O escopo é definido conforme os equipamentos e as necessidades de cada empresa.',
      },
      {
        q: 'O contrato ajuda a reduzir custos?',
        a: 'Sim. A manutenção programada reduz reparos emergenciais e paradas não planejadas e prolonga a vida útil dos equipamentos, o que costuma sair mais barato do que reagir a falhas.',
      },
      {
        q: 'As intervenções atrapalham a produção?',
        a: 'Não precisam atrapalhar: as intervenções são planejadas em um cronograma alinhado à rotina produtiva, para minimizar interferências na operação.',
      },
      REGIAO,
    ],
  },

  // ---------------------------------------------------- PLANO PREVENTIVA
  '/plano-manutencao-preventiva': {
    resposta:
      'O plano de manutenção preventiva organiza ações programadas e periódicas para identificar problemas antes que virem falhas graves, prevenindo acidentes e mantendo os equipamentos disponíveis. A Previsio elabora e executa o plano — de reformas de máquinas e painéis a manutenção em CLPs e IHMs — sob medida para cada empresa.',
    corpo: `
      <h2>O que é o plano de manutenção preventiva</h2>
      <p>O plano de manutenção preventiva é o documento que organiza as ações programadas e periódicas de cuidado com os equipamentos e sistemas. Por meio dele, é possível identificar potenciais problemas antes que se tornem falhas graves, prevenindo acidentes e garantindo a segurança no ambiente de trabalho.</p>

      <h2>Vantagens de adotar o plano</h2>
      <p>Empresas que investem em um plano de manutenção preventiva reduzem custos com reparos emergenciais, aumentam a vida útil dos equipamentos, cumprem as normas de segurança do trabalho e mantêm um ambiente mais seguro e produtivo. É o planejamento que transforma a manutenção em rotina previsível, e não em urgência.</p>

      <h2>O que a Previsio executa</h2>
      <p>Além de elaborar o plano, a Previsio conduz as intervenções necessárias com uma equipe técnica qualificada:</p>
      <ul>
        <li>Reformas de atualização de máquinas e painéis elétricos;</li>
        <li>Manutenção em CLPs e IHMs;</li>
        <li>Laudos e adequações segundo a NR-10 e a NR-12;</li>
        <li>Projetos complementares, como SPDA e aterramento.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é um plano de manutenção preventiva?',
        a: 'É o documento que organiza inspeções e intervenções programadas e periódicas nos equipamentos, para identificar problemas cedo, prevenir falhas graves e manter a operação segura e disponível.',
      },
      {
        q: 'Vocês elaboram e também executam o plano?',
        a: 'Sim. A Previsio elabora o plano e executa as intervenções, incluindo reformas de máquinas e painéis elétricos e manutenção em CLPs e IHMs.',
      },
      {
        q: 'O plano é padrão ou feito sob medida?',
        a: 'É personalizado. O plano considera os equipamentos, as atividades e as necessidades específicas de cada empresa.',
      },
      REGIAO,
    ],
  },

  // --------------------------------------------------------------- REFORMAS
  '/servicos/reformas': {
    resposta:
      'As reformas da Previsio modernizam e atualizam máquinas e painéis elétricos, recuperando equipamentos e adequando comandos e proteções às normas de segurança. É o retrofit que devolve desempenho, disponibilidade e conformidade a máquinas antigas, sem a necessidade de substituí-las, com atendimento em todo o Brasil.',
    corpo: `
      <h2>Reformas e atualização de máquinas e painéis elétricos</h2>
      <p>A Previsio Engenharia realiza reformas de atualização de máquinas e painéis elétricos — o retrofit que recupera equipamentos e os coloca em dia com as exigências de segurança e de operação. É a alternativa que devolve desempenho e disponibilidade a máquinas antigas sem a necessidade de substituí-las por completo.</p>

      <h2>O que a reforma moderniza</h2>
      <p>A atualização vai além do reparo mecânico: envolve a modernização de comandos, painéis e sistemas elétricos, com a possibilidade de integrar proteções e dispositivos de segurança. Assim, a máquina reformada ganha confiabilidade e passa a operar em conformidade com as normas aplicáveis.</p>

      <h2>Reforma integrada à adequação</h2>
      <p>Quando a reforma envolve segurança, ela caminha junto com a adequação às normas — como a NR-12, para máquinas e equipamentos, e a NR-10, para instalações elétricas. Conduzir a reforma e a adequação com um só fornecedor evita retrabalho e garante que a modernização já entregue o equipamento em conformidade.</p>
    `,
    faq: [
      {
        q: 'O que é uma reforma de atualização de máquinas?',
        a: 'É o retrofit que recupera e moderniza a máquina e seus painéis elétricos, atualizando comandos e sistemas e, quando necessário, integrando proteções de segurança — sem substituir o equipamento.',
      },
      {
        q: 'A reforma inclui a adequação às normas?',
        a: 'Pode incluir. A Previsio conduz a reforma junto à adequação às normas aplicáveis, como a NR-12 e a NR-10, entregando o equipamento modernizado e em conformidade.',
      },
      {
        q: 'Vale a pena reformar em vez de comprar uma máquina nova?',
        a: 'Em muitos casos, sim: a reforma devolve desempenho e disponibilidade e adequa o equipamento às normas por um custo menor do que a substituição total.',
      },
      REGIAO,
    ],
  },
};
