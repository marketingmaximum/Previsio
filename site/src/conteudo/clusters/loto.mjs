/**
 * Conteúdo enriquecido — cluster LOTO (bloqueio e etiquetagem de energias).
 *
 * LOTO (Lockout/Tagout) é o procedimento que isola as fontes de energia de um
 * equipamento antes da manutenção. Fatos ancorados no bodyHtml de cada página
 * e no objetivo incontroverso do bloqueio de energias, que a NR-12 exige durante
 * intervenções em máquinas. Sem números, prazos ou cases inventados.
 */

// FAQ para as páginas de programa/plano LOTO (o que é, obrigatoriedade,
// execução, respaldo, região).
const FAQ_LOTO_PROGRAMA = [
  {
    q: 'O que é o bloqueio e etiquetagem de energias (LOTO)?',
    a: 'É o procedimento que isola as fontes de energia de um equipamento — elétrica, hidráulica, pneumática, entre outras — antes da manutenção, usando cadeados, travas e etiquetas para impedir acionamentos acidentais durante a intervenção.',
  },
  {
    q: 'O bloqueio de energias perigosas é obrigatório?',
    a: 'É uma medida de segurança prevista nas normas regulamentadoras. A NR-12, por exemplo, exige o bloqueio das fontes de energia durante a manutenção de máquinas. O plano LOTO é a forma de atender a essa exigência de maneira organizada e replicável.',
  },
  {
    q: 'A Previsio executa o programa ou só entrega a documentação?',
    a: 'Entregamos o programa completo: avaliamos o ambiente industrial, apontamos os pontos passíveis de travamento em um mapa de bloqueios, especificamos os dispositivos, capacitamos os trabalhadores e fornecemos o manual de utilização e os procedimentos para toda a empresa.',
  },
  {
    q: 'O trabalho tem respaldo de engenheiro?',
    a: 'Sim. O programa é elaborado pela equipe da Previsio, empresa de Engenharia de Segurança do Trabalho, o que dá respaldo técnico ao mapa de bloqueios, à especificação dos dispositivos e aos procedimentos.',
  },
  {
    q: 'A Previsio atende a minha região?',
    a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional e no exterior.',
  },
];

// FAQ para a página de treinamento LOTO.
const FAQ_LOTO_TREINAMENTO = [
  {
    q: 'O que é o treinamento LOTO?',
    a: 'É a capacitação que ensina os trabalhadores a isolar e bloquear as fontes de energia antes da manutenção de equipamentos elétricos e mecânicos, aplicando corretamente o procedimento de Lockout/Tagout.',
  },
  {
    q: 'Quem deve fazer o treinamento?',
    a: 'Os profissionais que executam ou supervisionam intervenções de manutenção em equipamentos com energias perigosas — eles precisam saber identificar as fontes de energia e aplicar o bloqueio com segurança.',
  },
  {
    q: 'A Previsio fornece comprovação do treinamento?',
    a: 'Sim. Ao final, entregamos a documentação que comprova a capacitação da equipe, necessária para o cumprimento das normas de segurança.',
  },
  {
    q: 'O treinamento tem respaldo de engenheiro?',
    a: 'Sim. Os treinamentos são conduzidos pela equipe da Previsio, empresa de Engenharia de Segurança do Trabalho, com conteúdo alinhado às boas práticas de bloqueio de energias.',
  },
  {
    q: 'A Previsio atende a minha região?',
    a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos treinamentos e projetos em todo o território nacional e no exterior.',
  },
];

export default {
  '/plano-bloqueio-etiquetagem-energias-perigosas-loto': {
    resposta:
      'O plano de bloqueio e etiquetagem de energias perigosas (LOTO — Lockout/Tagout) é o procedimento que isola as fontes de energia de um equipamento antes da manutenção. Usa cadeados, travas e etiquetas de sinalização para impedir que a energia — elétrica, hidráulica, pneumática ou outra — seja acionada acidentalmente durante a intervenção.',
    corpo: `
      <h2>O que é o plano de bloqueio e etiquetagem (LOTO)</h2>
      <p>O plano de bloqueio e etiquetagem de energias perigosas, conhecido como LOTO (Lockout/Tagout), é um procedimento de segurança que protege os trabalhadores durante a manutenção de máquinas e sistemas que envolvem energias perigosas — como eletricidade, vapor e gás. Seu objetivo é evitar a liberação acidental de energia durante intervenções programadas.</p>

      <h2>Como o LOTO funciona</h2>
      <p>O plano baseia-se no uso de dispositivos de bloqueio — como cadeados e travas — e de etiquetas de sinalização que isolam as fontes de energia e impedem o seu acionamento. Antes de qualquer manutenção, a equipe segue um procedimento definido:</p>
      <ol>
        <li>Identificação das fontes de energia do equipamento;</li>
        <li>Desligamento dos equipamentos;</li>
        <li>Isolamento das fontes de energia;</li>
        <li>Aplicação dos dispositivos de bloqueio e das etiquetas, de forma visível e segura.</li>
      </ol>

      <h2>Por que implementar o LOTO</h2>
      <p>O bloqueio de energias perigosas é uma medida exigida pelas normas de segurança — a NR-12, por exemplo, prevê o bloqueio das fontes de energia durante intervenções em máquinas. Além de reduzir acidentes, o LOTO preserva os equipamentos e demonstra o compromisso da empresa com a segurança e a saúde dos colaboradores.</p>
    `,
    faq: FAQ_LOTO_PROGRAMA,
  },

  '/servicos/travamento-de-energias-perigosas-loto': {
    resposta:
      'O travamento de energias perigosas (LOTO) é o programa que avalia o ambiente industrial e define como isolar com segurança as fontes de energia durante a manutenção. A Previsio aponta os pontos passíveis de travamento, especifica os dispositivos, capacita os trabalhadores e entrega o manual e os procedimentos de uso.',
    corpo: `
      <h2>O que é o travamento de energias perigosas (LOTO)</h2>
      <p>O programa de Lockout/Tagout (LOTO) organiza o travamento das fontes de energia de máquinas e sistemas antes das intervenções de manutenção. É ele que garante que nenhuma energia perigosa seja acionada enquanto o trabalhador atua sobre o equipamento.</p>

      <h2>O que o programa entrega</h2>
      <p>O programa de Lockout e Tagout avalia o ambiente industrial e aponta os pontos passíveis de travamento, fornecendo um mapa de bloqueios. A partir dele:</p>
      <ul>
        <li>Especifica os dispositivos de bloqueio necessários;</li>
        <li>Capacita os trabalhadores para aplicar o procedimento;</li>
        <li>Fornece um manual de utilização e os procedimentos para uso em toda a empresa.</li>
      </ul>

      <h2>Um procedimento para toda a empresa</h2>
      <p>Mais do que instalar cadeados, o LOTO padroniza a forma de intervir com segurança em qualquer equipamento. Com o mapa de bloqueios, os dispositivos especificados e a equipe capacitada, a empresa passa a ter um procedimento único e replicável, aplicável a todas as manutenções.</p>
    `,
    faq: FAQ_LOTO_PROGRAMA,
  },

  '/treinamento-bloqueio-energias-perigosas-loto': {
    resposta:
      'O treinamento de bloqueio de energias perigosas (LOTO) capacita os trabalhadores a isolar e bloquear as fontes de energia antes da manutenção de equipamentos elétricos e mecânicos. Ensina o procedimento de Lockout/Tagout para evitar acionamentos acidentais e acidentes graves, como choques elétricos, durante as intervenções.',
    corpo: `
      <h2>O que é o treinamento LOTO</h2>
      <p>O treinamento de bloqueio de energias perigosas (Lockout/Tagout) capacita os profissionais a isolar e bloquear as fontes de energia durante a manutenção de equipamentos elétricos e mecânicos. É a formação que garante que o procedimento de bloqueio seja aplicado corretamente por quem executa as intervenções.</p>

      <h2>O que os participantes aprendem</h2>
      <p>Por meio do treinamento, os trabalhadores aprendem a identificar e neutralizar as fontes de energia perigosas, evitando acidentes que podem resultar em ferimentos graves — como choques elétricos. A capacitação também reforça uma cultura de segurança, em que o bloqueio passa a ser parte natural da rotina de manutenção.</p>

      <h2>Por que capacitar a equipe</h2>
      <p>Investir no treinamento LOTO reduz acidentes, mantém a empresa em conformidade com as normas de segurança e preserva a integridade física dos colaboradores. A Previsio ministra os treinamentos sob medida para a realidade de cada empresa, preparando as equipes para executar o bloqueio de forma segura e eficaz.</p>
    `,
    faq: FAQ_LOTO_TREINAMENTO,
  },
};
