/**
 * Conteúdo enriquecido — cluster NR-12 (carro-chefe).
 *
 * Fontes: definições e processo do próprio site atual e da LP-01, o processo do
 * briefing (inventário → apreciação → projeto → adequação → laudo →
 * documentação) e nomes de norma/metodologia que o cliente já usa (NR-12,
 * ISO 13849, HRN, LOTO). Nada de números, prazos ou cases inventados.
 *
 * Cada página recebe conteúdo próprio conforme sua INTENÇÃO — é assim que a
 * duplicação do site atual se resolve por enriquecimento, não por poda.
 */

// FAQ do cliente (LP-01, aprovado). Reutilizado onde faz sentido.
const FAQ_ADEQUACAO = [
  {
    q: 'A adequação vai parar a minha produção?',
    a: 'Nosso foco é minimizar o impacto: trabalhamos com paradas programadas, alinhadas ao seu cronograma — intervenções com segurança e eficiência, sem o caos de uma parada não planejada.',
  },
  {
    q: 'Máquina antiga ou usada também precisa ser adequada?',
    a: 'Sim. A NR-12 vale para máquinas novas e usadas, nacionais ou importadas. Adequamos ambas, inclusive reconstituindo projetos quando não há documentação disponível.',
  },
  {
    q: 'Vocês só fazem o laudo ou também executam a adequação?',
    a: 'Ciclo completo: apreciação de risco, projeto executivo, execução das proteções e laudo de conformidade — com um só fornecedor.',
  },
  {
    q: 'O laudo tem respaldo de engenheiro?',
    a: 'Sim, com responsabilidade técnica (ART) do engenheiro responsável — o que dá validade jurídica ao documento perante a fiscalização.',
  },
  {
    q: 'A Previsio atende a minha região?',
    a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional e no exterior.',
  },
];

export default {
  // ---------------------------------------------------------------- PILAR
  '/servicos/nr-12': {
    resposta:
      'A NR-12 é a Norma Regulamentadora que define os requisitos de segurança para máquinas e equipamentos. Adequar uma máquina significa avaliar seus riscos e instalar proteções, intertravamentos, parada de emergência e bloqueio de energias, encerrando com o laudo de conformidade — para proteger os operadores e evitar multas e interdições.',
    corpo: `
      <h2>O que é a NR-12</h2>
      <p>A NR-12 — Segurança no Trabalho em Máquinas e Equipamentos — estabelece as medidas de proteção que garantem a saúde e a integridade física de quem opera, mantém ou circula próximo de máquinas industriais. Aplica-se a máquinas novas e usadas, nacionais ou importadas, em qualquer setor produtivo.</p>
      <p>Na prática, atender à norma significa avaliar os riscos de cada equipamento e implementar barreiras físicas e sistemas de segurança que impeçam o contato do trabalhador com as zonas de perigo, reduzindo o risco de cortes, esmagamentos e amputações.</p>

      <h2>Quando a adequação é necessária</h2>
      <p>Toda máquina em operação precisa estar em conformidade — inclusive equipamentos antigos. A adequação costuma ser motivada por fiscalização do trabalho, auditoria de clientes, aquisição de máquina nova ou retrofit, e por acidentes ou quase-acidentes. Máquinas fora da norma podem ser interditadas, o que paralisa a produção.</p>

      <h2>Como funciona a adequação de máquinas</h2>
      <p>A Previsio conduz a adequação em etapas encadeadas, do diagnóstico à obra:</p>
      <ol>
        <li><strong>Inventário</strong> — cadastro das máquinas e equipamentos, com priorização dos riscos.</li>
        <li><strong>Apreciação de risco</strong> — avaliação por metodologia HRN e categorização dos sistemas de comando conforme a ISO 13849.</li>
        <li><strong>Projeto executivo</strong> — desenhos técnicos, especificações e memorial descritivo das proteções.</li>
        <li><strong>Adequação física</strong> — proteções mecânicas, intertravamentos, parada de emergência e bloqueio de energias (LOTO).</li>
        <li><strong>Laudo de conformidade</strong> — emissão do laudo com ART do engenheiro responsável.</li>
        <li><strong>Documentação</strong> — prontuário da máquina e manual de instruções em português.</li>
      </ol>

      <h2>O diferencial da Previsio</h2>
      <p>Reunimos projeto, execução e laudo sob o mesmo fornecedor. Elaboramos os projetos executivos e, quando o cliente prefere adequar internamente, oferecemos assessoria; após a adequação, emitimos o laudo de conformidade. A inspeção pode ser realizada inclusive na sede do próprio fabricante.</p>

      <h2>Soluções de NR-12</h2>
      <p>Conheça abaixo cada serviço do escopo de NR-12 — da apreciação de risco à documentação final:</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // ------------------------------------------------------------- ADEQUAÇÃO
  '/adequacao-nr12': {
    resposta:
      'A adequação NR-12 consiste em implementar as medidas de proteção que uma máquina precisa para atender à norma: proteções físicas, intertravamentos, parada de emergência e bloqueio de energias, precedidos de apreciação de risco e encerrados com laudo de conformidade.',
    corpo: `
      <h2>O que é a adequação de máquinas à NR-12</h2>
      <p>A adequação NR-12 consiste na implementação de medidas para que máquinas e equipamentos industriais atendam aos requisitos da Norma Regulamentadora 12. O processo envolve a instalação de proteções mecânicas, sistemas de parada de emergência e bloqueio de energias, reduzindo o risco de acidentes.</p>
      <p>Empresas que realizam a adequação garantem um ambiente de trabalho mais seguro, cumprem as exigências legais e evitam penalidades. Além disso, a conformidade com a NR-12 contribui para a produtividade e para a vida útil dos equipamentos.</p>

      <h2>Como a Previsio conduz a adequação</h2>
      <p>Partimos de uma apreciação de risco de cada equipamento e, a partir dela, definimos as proteções necessárias. A execução prioriza os equipamentos de maior grau de risco e é planejada em paradas programadas, alinhadas ao cronograma da produção.</p>
      <ul>
        <li>Proteções fixas e móveis nas zonas de perigo;</li>
        <li>Intertravamentos e sistemas de parada de emergência;</li>
        <li>Bloqueio e etiquetagem de energias perigosas (LOTO);</li>
        <li>Componentes de comando de segurança conforme a ISO 13849.</li>
      </ul>

      <h2>O que você recebe ao final</h2>
      <p>Ao concluir a adequação, a máquina fica acompanhada da documentação que comprova a conformidade: laudo com ART, prontuário e manual de instruções. É o conjunto que sustenta a empresa perante fiscalização e auditorias.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  '/adequacao-maquinas-nr12': {
    resposta:
      'A adequação de máquinas à NR-12 abrange desde equipamentos individuais até linhas completas: apreciação de risco, projeto das proteções, execução física e laudo de conformidade — para máquinas novas e usadas, de qualquer fabricante.',
    corpo: `
      <h2>Adequação de máquinas e equipamentos</h2>
      <p>Realizamos adequações em máquinas e equipamentos de forma a garantir a utilização segura conforme a NR-12. O escopo cobre desde uma máquina isolada até linhas de produção completas, em equipamentos nacionais ou importados, novos ou usados.</p>

      <h2>Etapas do trabalho</h2>
      <p>Após o inventário, a análise e a quantificação dos riscos, a próxima etapa envolve a adequação das máquinas. Essa fase requer a elaboração de estratégias para eliminar ou reduzir riscos, obedecendo à ordem de prioridade: primeiro medidas de proteção coletiva, depois medidas administrativas e, por fim, equipamentos de proteção individual.</p>
      <ul>
        <li>Proteções mecânicas nas zonas de perigo;</li>
        <li>Sistemas de segurança e intertravamento;</li>
        <li>Reformas de atualização de máquinas e painéis elétricos;</li>
        <li>Bloqueio de energias perigosas (LOTO).</li>
      </ul>

      <h2>Por que adequar com a Previsio</h2>
      <p>As partes relacionadas à segurança dos sistemas de comando — relés de segurança, componentes elétricos e sensores — são especificadas conforme os requisitos aplicáveis da ISO 13849. Isso garante que a proteção instalada tenha o desempenho de segurança exigido pelo risco de cada máquina.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // -------------------------------------------------------- APRECIAÇÃO DE RISCO
  '/apreciacao-riscos-nr12': {
    resposta:
      'A apreciação de risco é a etapa que identifica e quantifica os perigos de cada máquina antes da adequação. Usa a metodologia HRN para priorizar os riscos e a ISO 13849 para definir a categoria de segurança dos sistemas de comando.',
    corpo: `
      <h2>O que é a apreciação de risco na NR-12</h2>
      <p>A apreciação de risco é o ponto de partida de toda adequação. Ela identifica os perigos presentes em cada equipamento — mecânicos, elétricos, ergonômicos — e quantifica a gravidade de cada um, permitindo priorizar as intervenções.</p>

      <h2>Como quantificamos o risco</h2>
      <p>Aplicamos a metodologia Hazard Rating Number (HRN), que atribui uma pontuação a cada risco a partir de fatores como a probabilidade de exposição e a severidade da lesão. Como resultado, obtém-se uma matriz de pontuação que agrupa os riscos em faixas, estabelecendo a ordem de prioridade das adequações e permitindo comparar o nível de risco antes e depois das melhorias.</p>

      <h2>Da apreciação ao projeto</h2>
      <p>A partir da apreciação, a equipe da Previsio elabora um inventário detalhado dos riscos e desenvolve as estratégias de eliminação ou mitigação, apresentadas em um cronograma de ações. Esse documento orienta a etapa seguinte — o projeto executivo das proteções — e prioriza os equipamentos de grau de risco mais elevado.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // -------------------------------------------------------------- INVENTÁRIO
  '/inventario-maquinas-nr-12': {
    resposta:
      'O inventário de máquinas é o levantamento que cadastra todos os equipamentos da planta e o grau de risco de cada um. É o primeiro passo da adequação NR-12 e a base para priorizar as intervenções por criticidade.',
    corpo: `
      <h2>O que é o inventário de máquinas</h2>
      <p>O inventário é o levantamento que identifica e cadastra todas as máquinas e equipamentos da planta, com a priorização dos riscos baseada na metodologia HRN. É o primeiro passo para a adequação e organiza todo o trabalho que vem a seguir.</p>

      <h2>O que o inventário registra</h2>
      <p>De maneira prática, a equipe da Previsio elabora um inventário detalhado identificando todos os riscos presentes nos equipamentos. Cada máquina recebe informações como identificação, localização, pontuação e grau de risco — o que permite priorizar os equipamentos mais críticos.</p>

      <h2>Por que começar pelo inventário</h2>
      <p>Sem um inventário, não há como planejar a adequação de forma eficiente. Ele oferece a visão completa do parque de máquinas, estabelece a ordem de prioridade e serve de base para o cronograma de ações e para a apreciação de risco de cada equipamento.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // ------------------------------------------------------------------ PROJETO
  '/projeto-nr12': {
    resposta:
      'O projeto executivo de NR-12 traduz a apreciação de risco em soluções construtivas: desenhos técnicos, especificação das proteções e dos sistemas de segurança e memorial descritivo — a base para executar a adequação com precisão.',
    corpo: `
      <h2>O que é o projeto executivo de NR-12</h2>
      <p>O projeto executivo transforma as conclusões da apreciação de risco em soluções construtivas detalhadas. Ele especifica cada proteção, intertravamento e dispositivo de segurança, com desenhos técnicos e memorial descritivo, para que a adequação seja executada exatamente como planejado.</p>

      <h2>O que o projeto contempla</h2>
      <ul>
        <li>Desenhos técnicos das proteções fixas e móveis;</li>
        <li>Especificação dos sistemas de comando de segurança (ISO 13849);</li>
        <li>Definição de intertravamentos, parada de emergência e bloqueio de energias;</li>
        <li>Memorial descritivo e lista de materiais.</li>
      </ul>

      <h2>Projeto integrado à operação</h2>
      <p>Criamos conceitos, projetos e especificações buscando a compatibilidade das normas com as exigências de operação e manutenção de cada processo. O objetivo é uma proteção que atende à norma sem prejudicar a produtividade — e que o operador não tenha motivo para burlar.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },

  // -------------------------------------------------------------------- LAUDO
  '/laudo-conformidade-nr12': {
    resposta:
      'O laudo de conformidade NR-12 é o documento que atesta que uma máquina atende aos requisitos da norma. Emitido por engenheiro responsável e acompanhado de ART, tem validade jurídica perante a fiscalização e as auditorias.',
    corpo: `
      <h2>O que é o laudo de conformidade NR-12</h2>
      <p>O laudo de conformidade é o documento técnico que verifica se uma máquina ou equipamento atende aos requisitos de segurança da NR-12. Ele registra as proteções e os sistemas de segurança presentes e conclui sobre a conformidade do equipamento.</p>

      <h2>Por que o laudo precisa de ART</h2>
      <p>O laudo é emitido por engenheiro responsável e acompanhado da Anotação de Responsabilidade Técnica (ART). É a ART que dá validade jurídica ao documento perante a fiscalização do trabalho, demonstrando que a avaliação foi conduzida por profissional habilitado.</p>

      <h2>Laudo com quem executa</h2>
      <p>Na Previsio, o laudo é a etapa final de um ciclo que inclui apreciação de risco, projeto e execução. Quando emitimos o laudo, atestamos um trabalho que acompanhamos do início ao fim — não apenas uma inspeção pontual. Também emitimos o laudo para clientes que realizaram a adequação internamente com a nossa assessoria.</p>
    `,
    faq: FAQ_ADEQUACAO,
  },
};
