/**
 * Artigos informacionais novos (topo de funil) — a lacuna do plano de keywords
 * (estrategia/08-plano-keywords.md §5.1): o site é forte no transacional e fraco
 * no informacional, que é o que mais rende em GEO.
 *
 * Cada artigo responde uma PERGUNTA real, com resposta direta no topo + FAQ —
 * formato que featured snippet e IA extraem. Ancorado em fatos reais (a norma,
 * o processo do cliente, metodologias que ele já cita). Sem preços, prazos ou
 * números inventados.
 *
 * Estes são URLs NOVAS (/artigos/<slug>) — não afetam as 235 canônicas. Quando
 * o blog migrar para o WordPress, a copy daqui é portável.
 *
 * Formato: { slug, titulo, data, description, resposta, corpo, faq, relacionados }
 * `relacionados` aponta para as páginas de serviço correspondentes (malha interna).
 */

export default [
  {
    slug: 'o-que-e-nr12-e-quais-maquinas-precisam-se-adequar',
    titulo: 'O que é a NR-12 e quais máquinas precisam se adequar',
    data: '2026-07-14',
    description:
      'Entenda o que é a NR-12, a quem ela se aplica e quais máquinas e equipamentos precisam ser adequados — de equipamentos novos a máquinas antigas.',
    resposta:
      'A NR-12 é a Norma Regulamentadora que estabelece os requisitos de segurança para máquinas e equipamentos. Ela se aplica a todas as máquinas em uso — novas e usadas, nacionais ou importadas, de qualquer setor. Na prática, todo equipamento que ofereça risco ao operador precisa de proteções e da documentação que comprove a conformidade.',
    corpo: `
      <h2>O que é a NR-12</h2>
      <p>A NR-12 — Segurança no Trabalho em Máquinas e Equipamentos — define as medidas de proteção que garantem a saúde e a integridade física de quem opera, mantém ou circula próximo de máquinas industriais. O objetivo é impedir o contato do trabalhador com as zonas de perigo, reduzindo o risco de cortes, esmagamentos e amputações.</p>

      <h2>A quem a NR-12 se aplica</h2>
      <p>A norma vale para qualquer empresa que possua máquinas e equipamentos, independentemente do porte ou do setor. Não importa se o equipamento é nacional ou importado, novo ou usado: se está em operação e oferece risco, precisa atender à NR-12.</p>

      <h2>Quais máquinas precisam ser adequadas</h2>
      <p>De modo geral, toda máquina que possua partes móveis, zonas de prensagem, corte ou projeção de materiais precisa de avaliação. Isso inclui, entre outras:</p>
      <ul>
        <li>Prensas, dobradeiras e guilhotinas;</li>
        <li>Tornos, fresas e centros de usinagem;</li>
        <li>Esteiras e transportadores;</li>
        <li>Injetoras, extrusoras e máquinas de embalagem;</li>
        <li>Equipamentos com sistemas elétricos, hidráulicos ou pneumáticos.</li>
      </ul>
      <p>Máquinas antigas, muitas vezes sem documentação, também estão sujeitas à norma — e costumam exigir a reconstituição do projeto além da adequação física.</p>

      <h2>Como saber se a sua máquina está em conformidade</h2>
      <p>O ponto de partida é a apreciação de risco de cada equipamento, que identifica os perigos e define as proteções necessárias. A partir dela, a empresa implementa as adequações e emite o laudo de conformidade com ART do engenheiro responsável — o documento que sustenta a conformidade perante a fiscalização.</p>
    `,
    faq: [
      {
        q: 'Máquina usada também precisa ser adequada à NR-12?',
        a: 'Sim. A NR-12 vale para máquinas novas e usadas, nacionais ou importadas. Equipamentos antigos costumam exigir a reconstituição do projeto além da adequação física.',
      },
      {
        q: 'Toda máquina da empresa precisa de adequação?',
        a: 'Toda máquina que ofereça risco ao operador precisa de avaliação. A apreciação de risco define quais equipamentos exigem intervenção e a prioridade de cada um.',
      },
      {
        q: 'O que acontece se a máquina não estiver em conformidade?',
        a: 'Máquinas fora da norma podem ser interditadas em uma fiscalização, o que paralisa a produção, além de expor a empresa a multas e à responsabilização em caso de acidente.',
      },
    ],
    relacionados: ['/servicos/nr-12', '/adequacao-nr12', '/apreciacao-riscos-nr12'],
  },

  {
    slug: 'como-adequar-uma-maquina-antiga-a-nr12',
    titulo: 'Como adequar uma máquina antiga à NR-12',
    data: '2026-07-16',
    description:
      'Máquinas antigas, sem documentação, também precisam atender à NR-12. Veja como funciona a adequação de equipamentos legados, passo a passo.',
    resposta:
      'Adequar uma máquina antiga à NR-12 começa pela apreciação de risco do equipamento e, quando não há documentação, pela reconstituição do projeto. A partir daí, instalam-se as proteções necessárias — barreiras físicas, intertravamentos, parada de emergência e bloqueio de energias — encerrando com o laudo de conformidade.',
    corpo: `
      <h2>Máquina antiga também precisa se adequar</h2>
      <p>A NR-12 se aplica a máquinas novas e usadas. Equipamentos antigos, muitas vezes em operação há décadas e sem manual ou projeto, estão igualmente sujeitos à norma — e representam boa parte das adequações realizadas na indústria.</p>

      <h2>O desafio dos equipamentos sem documentação</h2>
      <p>O principal obstáculo em máquinas legadas é a ausência de documentação técnica. Sem projeto original, é preciso reconstituir as informações do equipamento antes de projetar as proteções — levantando dimensões, sistemas de comando e pontos de risco em campo.</p>

      <h2>Passo a passo da adequação</h2>
      <ol>
        <li><strong>Apreciação de risco</strong> — identificação e quantificação dos perigos do equipamento, com metodologia HRN.</li>
        <li><strong>Reconstituição do projeto</strong> — quando não há documentação, o equipamento é levantado e documentado.</li>
        <li><strong>Projeto executivo</strong> — desenhos e especificações das proteções a instalar.</li>
        <li><strong>Adequação física</strong> — proteções mecânicas, intertravamentos, parada de emergência e bloqueio de energias (LOTO).</li>
        <li><strong>Laudo de conformidade</strong> — emissão do laudo com ART do engenheiro responsável.</li>
      </ol>

      <h2>Adequação sem parar a produção</h2>
      <p>A adequação de máquinas antigas pode ser planejada em paradas programadas, alinhadas ao cronograma da produção. Assim, o equipamento é modernizado com segurança e sem o impacto de uma parada não planejada.</p>
    `,
    faq: [
      {
        q: 'Vale a pena adequar uma máquina muito antiga ou é melhor trocar?',
        a: 'Depende do estado e da criticidade do equipamento. Em muitos casos, a adequação é viável e mais econômica que a substituição. A apreciação de risco ajuda a embasar essa decisão.',
      },
      {
        q: 'É possível adequar uma máquina sem manual ou projeto?',
        a: 'Sim. Quando não há documentação, o equipamento é levantado em campo e o projeto é reconstituído antes da adequação física.',
      },
      {
        q: 'A adequação precisa parar a máquina?',
        a: 'As intervenções são planejadas em paradas programadas, alinhadas ao cronograma da produção, para minimizar o impacto na operação.',
      },
    ],
    relacionados: ['/adequacao-nr12', '/adequacao-maquinas-nr12', '/servicos/nr-12'],
  },

  {
    slug: 'apreciacao-de-risco-nr12-metodologia-hrn',
    titulo: 'Apreciação de risco na NR-12: o que é e como funciona a metodologia HRN',
    data: '2026-07-18',
    description:
      'A apreciação de risco é a etapa que define toda a adequação NR-12. Entenda o que ela avalia e como a metodologia HRN prioriza os riscos.',
    resposta:
      'A apreciação de risco é a etapa da NR-12 que identifica e quantifica os perigos de cada máquina antes da adequação. Ela usa a metodologia HRN (Hazard Rating Number) para atribuir uma pontuação a cada risco e estabelecer a ordem de prioridade das intervenções.',
    corpo: `
      <h2>O que é a apreciação de risco</h2>
      <p>A apreciação de risco é o ponto de partida de toda adequação à NR-12. Ela identifica os perigos presentes em cada equipamento — mecânicos, elétricos, ergonômicos — e mede a gravidade de cada um, orientando quais proteções são necessárias e em que ordem.</p>

      <h2>Como funciona a metodologia HRN</h2>
      <p>A metodologia Hazard Rating Number (HRN) atribui uma pontuação a cada risco a partir de fatores como a probabilidade de exposição, a frequência com que o trabalhador fica exposto e a severidade da possível lesão. O resultado é uma matriz de pontuação que agrupa os riscos em faixas de criticidade.</p>
      <p>Com essa matriz, é possível estabelecer a ordem de prioridade das adequações e — depois das intervenções — comparar o nível de risco antes e depois, comprovando a redução alcançada.</p>

      <h2>Da apreciação ao projeto</h2>
      <p>A partir da apreciação, elabora-se um inventário detalhado dos riscos e um cronograma de ações para eliminá-los ou mitigá-los. Esse documento orienta a etapa seguinte — o projeto executivo das proteções — priorizando os equipamentos de maior grau de risco.</p>

      <h2>Por que a apreciação vem antes de tudo</h2>
      <p>Instalar proteções sem uma apreciação de risco é arriscado: pode-se proteger o que não era crítico e deixar de lado o que realmente oferece perigo. A apreciação garante que o investimento em segurança seja direcionado ao que importa.</p>
    `,
    faq: [
      {
        q: 'Qual a diferença entre apreciação e análise de risco?',
        a: 'Na prática do dia a dia os termos são usados de forma próxima. A apreciação de risco da NR-12 abrange identificar, estimar e avaliar os riscos de cada máquina para definir as medidas de proteção.',
      },
      {
        q: 'O que é a metodologia HRN?',
        a: 'É um método que atribui uma pontuação a cada risco, considerando probabilidade e severidade, para priorizar as adequações e comparar o risco antes e depois das intervenções.',
      },
      {
        q: 'A apreciação de risco é obrigatória?',
        a: 'A avaliação dos riscos é a base da adequação à NR-12 e sustenta as decisões técnicas do projeto e do laudo. É a etapa que dá consistência a todo o processo.',
      },
    ],
    relacionados: ['/apreciacao-riscos-nr12', '/inventario-maquinas-nr-12', '/servicos/nr-12'],
  },

  {
    slug: 'laudo-de-conformidade-nr12-o-que-e-e-por-que-precisa-de-art',
    titulo: 'Laudo de conformidade NR-12: o que é e por que precisa de ART',
    data: '2026-07-19',
    description:
      'O laudo de conformidade NR-12 atesta que uma máquina atende à norma. Entenda o que ele contém, quem pode emitir e por que a ART é essencial.',
    resposta:
      'O laudo de conformidade NR-12 é o documento técnico que atesta que uma máquina atende aos requisitos de segurança da norma. Ele deve ser emitido por engenheiro responsável e acompanhado de ART (Anotação de Responsabilidade Técnica), que dá validade jurídica ao documento perante a fiscalização.',
    corpo: `
      <h2>O que é o laudo de conformidade</h2>
      <p>O laudo de conformidade é o documento que verifica se uma máquina ou equipamento atende aos requisitos de segurança da NR-12. Ele registra as proteções e os sistemas de segurança presentes e conclui sobre a conformidade do equipamento.</p>

      <h2>Por que o laudo precisa de ART</h2>
      <p>A ART — Anotação de Responsabilidade Técnica — é o que vincula o laudo a um engenheiro habilitado e legalmente responsável pela avaliação. Sem ART, o laudo não tem a mesma validade perante a fiscalização do trabalho: é a responsabilidade técnica que demonstra que a análise foi conduzida por um profissional qualificado.</p>

      <h2>O que o laudo deve conter</h2>
      <ul>
        <li>Identificação da máquina e da empresa;</li>
        <li>Descrição das proteções e dos sistemas de segurança instalados;</li>
        <li>Avaliação de conformidade frente aos requisitos da NR-12;</li>
        <li>Conclusão técnica e ART do engenheiro responsável.</li>
      </ul>

      <h2>Laudo com quem executa a adequação</h2>
      <p>Quando o laudo é a etapa final de um trabalho que inclui apreciação de risco, projeto e execução, ele atesta algo acompanhado do início ao fim — não apenas uma inspeção pontual. Também é possível emitir o laudo para equipamentos adequados internamente pela empresa, com assessoria técnica.</p>
    `,
    faq: [
      {
        q: 'Quem pode emitir o laudo de conformidade NR-12?',
        a: 'O laudo deve ser emitido por engenheiro habilitado, com ART, que assume a responsabilidade técnica pela avaliação de conformidade do equipamento.',
      },
      {
        q: 'O laudo tem prazo de validade?',
        a: 'O laudo reflete a condição da máquina no momento da avaliação. Alterações no equipamento, no processo ou nas proteções podem exigir nova avaliação.',
      },
      {
        q: 'Preciso de um laudo por máquina?',
        a: 'A avaliação de conformidade é feita por equipamento. A forma de documentar pode variar conforme o parque de máquinas — a apreciação de risco orienta essa organização.',
      },
    ],
    relacionados: ['/laudo-conformidade-nr12', '/laudo-nr12', '/servicos/nr-12'],
  },

  {
    slug: 'quanto-custa-a-adequacao-de-maquinas-nr12',
    titulo: 'Quanto custa a adequação de máquinas à NR-12 (o que define o preço)',
    data: '2026-07-21',
    description:
      'Não existe preço único para adequar máquinas à NR-12. Entenda os fatores que definem o investimento e como estimar o custo do seu parque.',
    resposta:
      'O custo da adequação NR-12 varia conforme o número de máquinas, o grau de risco de cada uma, o tipo de proteção necessária e o estado atual dos equipamentos. Por isso não existe um preço único: o investimento é estimado a partir da apreciação de risco, que dimensiona o que cada máquina precisa.',
    corpo: `
      <h2>Por que não existe um preço fixo</h2>
      <p>Cada máquina tem riscos e necessidades diferentes. Uma esteira pode exigir apenas proteções fixas; uma prensa pode demandar cortina de luz, intertravamento e comando bimanual. Por isso, o custo da adequação é sempre estimado caso a caso — não há uma tabela única que sirva para qualquer parque de máquinas.</p>

      <h2>O que define o investimento</h2>
      <ul>
        <li><strong>Número de máquinas</strong> — o volume de equipamentos a adequar;</li>
        <li><strong>Grau de risco</strong> — máquinas mais críticas exigem sistemas de segurança mais robustos;</li>
        <li><strong>Tipo de proteção</strong> — proteções fixas, móveis, sensores, intertravamentos ou comandos de segurança;</li>
        <li><strong>Estado atual e documentação</strong> — equipamentos sem projeto exigem reconstituição antes da adequação.</li>
      </ul>

      <h2>Como estimar o custo do seu parque</h2>
      <p>O caminho mais seguro é começar pelo inventário de máquinas e pela apreciação de risco. Com o grau de risco de cada equipamento mapeado, é possível priorizar as intervenções e dimensionar o investimento — inclusive planejando a adequação em etapas, começando pelos equipamentos mais críticos.</p>

      <h2>Adequar é mais barato que o custo de não adequar</h2>
      <p>Vale considerar o outro lado da conta: máquinas fora da norma podem ser interditadas, paralisando a produção, além de expor a empresa a multas e à responsabilização em caso de acidente. A adequação é um investimento em segurança e continuidade da operação.</p>
    `,
    faq: [
      {
        q: 'Dá para ter um orçamento sem visita técnica?',
        a: 'Uma estimativa inicial pode partir do inventário do parque, mas o dimensionamento preciso depende da apreciação de risco de cada máquina, que identifica as proteções necessárias.',
      },
      {
        q: 'É possível adequar as máquinas por etapas?',
        a: 'Sim. Com o grau de risco mapeado, a adequação pode ser planejada em fases, priorizando os equipamentos mais críticos e diluindo o investimento.',
      },
      {
        q: 'O custo inclui o laudo?',
        a: 'O escopo é definido no orçamento e pode abranger da apreciação de risco à emissão do laudo com ART. Vale alinhar o que está incluído antes de contratar.',
      },
    ],
    relacionados: ['/adequacao-nr12', '/inventario-maquinas-nr-12', '/servicos/nr-12'],
  },
];
