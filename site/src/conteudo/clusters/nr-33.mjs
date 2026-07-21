/**
 * Conteúdo enriquecido — cluster NR-33 (espaços confinados).
 *
 * A NR-33 trata da segurança e saúde nos trabalhos em espaços confinados
 * (silos, tanques, tubulações, dutos). Fatos ancorados no bodyHtml de cada
 * página — em especial o prontuário, cujo conteúdo (inventário dos espaços,
 * projetos, mapa de sinalizações, sistemas de travamento, procedimentos,
 * relatório de inspeção, laudos de conformidade, análise de risco e permissões
 * de entrada e trabalho) o cliente descreve na página de serviço.
 * Sem números, prazos ou cases inventados.
 */

// FAQ para as páginas de documentação/segurança em espaços confinados.
const FAQ_NR33_DOC = [
  {
    q: 'O que é o prontuário de espaço confinado NR-33?',
    a: 'É o conjunto de documentos que organiza a segurança dos espaços confinados — inventário dos espaços, projetos, mapa de sinalizações, sistemas de travamento, procedimentos, relatório de inspeção, laudos de conformidade, análise de risco e permissões de entrada e trabalho.',
  },
  {
    q: 'A documentação de espaço confinado é obrigatória?',
    a: 'Sim. A NR-33 exige que o trabalho em espaços confinados seja precedido de análise de risco, procedimentos e permissões de entrada. O prontuário reúne esses documentos e comprova a conformidade da empresa.',
  },
  {
    q: 'A Previsio executa ou só documenta?',
    a: 'Elaboramos a documentação (prontuário, análise de risco e procedimentos) e também ministramos os treinamentos da equipe, apoiando a empresa na adequação dos seus espaços confinados à NR-33.',
  },
  {
    q: 'O trabalho tem respaldo de engenheiro?',
    a: 'Sim. O prontuário inclui laudos de conformidade e análise de risco elaborados com responsabilidade técnica de engenharia — o que dá validade aos documentos perante a fiscalização.',
  },
  {
    q: 'A Previsio atende a minha região?',
    a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional e no exterior.',
  },
];

// FAQ para a página de treinamento em espaço confinado.
const FAQ_NR33_TREINAMENTO = [
  {
    q: 'O que é o treinamento de espaço confinado NR-33?',
    a: 'É a capacitação dos trabalhadores que atuam em ambientes de alto risco, como tanques e dutos, abordando ventilação, procedimentos de resgate e uso dos equipamentos de proteção individual, conforme a NR-33.',
  },
  {
    q: 'O treinamento de espaço confinado é obrigatório?',
    a: 'Sim. A NR-33 exige que os trabalhadores envolvidos em atividades em espaços confinados sejam capacitados antes de entrar nesses ambientes.',
  },
  {
    q: 'A Previsio fornece comprovação do treinamento?',
    a: 'Sim. Entregamos a documentação que comprova a realização do treinamento, necessária para o cumprimento das exigências da norma.',
  },
  {
    q: 'O treinamento tem respaldo de engenheiro?',
    a: 'Sim. A capacitação é conduzida pela Previsio, empresa de Engenharia de Segurança do Trabalho, com conteúdo alinhado às exigências da NR-33.',
  },
  {
    q: 'A Previsio atende a minha região?',
    a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos treinamentos e projetos em todo o território nacional e no exterior.',
  },
];

export default {
  '/prontuario-espaco-confinado-nr33': {
    resposta:
      'O prontuário de espaço confinado NR-33 é o documento que reúne as condições de segurança para o trabalho em ambientes confinados, conforme a Norma Regulamentadora 33. Descreve a ventilação necessária, os equipamentos de proteção individual e coletiva e os procedimentos corretos de entrada, trabalho e resgate nesses espaços.',
    corpo: `
      <h2>O que é o prontuário de espaço confinado NR-33</h2>
      <p>O prontuário de espaço confinado é o documento que reúne as condições de segurança exigidas para o trabalho em ambientes confinados, seguindo as diretrizes da NR-33. Nele são descritas as precauções a adotar e as medidas que protegem os trabalhadores expostos a esse tipo de risco.</p>

      <h2>O que o prontuário abrange</h2>
      <p>O prontuário reúne informações essenciais para o trabalho seguro em espaços confinados:</p>
      <ul>
        <li>A ventilação adequada dos ambientes confinados;</li>
        <li>Os equipamentos de proteção individual e coletiva necessários;</li>
        <li>Os procedimentos corretos de entrada, trabalho e resgate.</li>
      </ul>

      <h2>Por que manter o prontuário atualizado</h2>
      <p>Manter o prontuário em conformidade com a NR-33 comprova o compromisso da empresa com a segurança dos colaboradores. A atualização constante do documento torna a gestão das atividades em espaços confinados mais eficaz, reduz o risco de acidentes e garante o cumprimento das normas trabalhistas vigentes.</p>
    `,
    faq: FAQ_NR33_DOC,
  },

  '/seguranca-espacos-confinados-nr33': {
    resposta:
      'A segurança para espaços confinados NR-33 reúne as medidas que protegem quem trabalha em ambientes como silos, tanques e tubulações. Seguindo a Norma Regulamentadora 33, inclui ventilação adequada, uso de equipamentos de proteção individual e coletiva e planos de resgate e emergência para garantir a integridade física dos trabalhadores.',
    corpo: `
      <h2>A importância da segurança em espaços confinados</h2>
      <p>A segurança para espaços confinados trata da proteção de quem trabalha em ambientes específicos, como silos, tanques e tubulações. A Norma Regulamentadora 33 estabelece as diretrizes e práticas que garantem a integridade física dos colaboradores que atuam nesses locais de risco.</p>

      <h2>Medidas de proteção e prevenção</h2>
      <p>A segurança em espaços confinados prevê um conjunto de medidas de proteção:</p>
      <ul>
        <li>Ventilação adequada dos ambientes confinados;</li>
        <li>Uso de equipamentos de proteção individual e coletiva;</li>
        <li>Planos de resgate e de emergência.</li>
      </ul>
      <p>É fundamental que as empresas estejam em conformidade com a NR-33 para garantir um ambiente de trabalho seguro e saudável.</p>

      <h2>Vantagens da adequação à NR-33</h2>
      <p>Empresas que investem na segurança de espaços confinados não apenas cumprem suas obrigações legais, como reduzem acidentes e afastamentos. A adoção dessas práticas valoriza os colaboradores e fortalece a imagem da empresa, tornando o ambiente de trabalho mais seguro e produtivo.</p>
    `,
    faq: FAQ_NR33_DOC,
  },

  '/servicos/prontuario-nr-33': {
    resposta:
      'O prontuário NR-33 é o conjunto de documentos que organiza a segurança dos espaços confinados de uma empresa. Reúne o inventário dos espaços, os projetos, o mapa de sinalizações, os sistemas de travamento, os procedimentos, o relatório de inspeção, os laudos de conformidade, a análise de risco e as permissões de entrada e trabalho.',
    corpo: `
      <h2>O que é o prontuário NR-33</h2>
      <p>O prontuário NR-33 é o conjunto de documentos que reúne tudo o que a norma exige para o trabalho seguro em espaços confinados. Ele centraliza os registros de cada espaço da empresa, servindo de base para o controle das entradas e das atividades realizadas nesses ambientes.</p>

      <h2>O que o prontuário reúne</h2>
      <p>O prontuário NR-33 é composto por um conjunto de documentos que inclui:</p>
      <ul>
        <li>O inventário dos espaços confinados;</li>
        <li>Os projetos e o mapa de sinalizações;</li>
        <li>Os sistemas de travamento;</li>
        <li>Os procedimentos e o relatório de inspeção;</li>
        <li>Os laudos de conformidade e a análise de risco;</li>
        <li>As permissões de entrada e trabalho, conforme a NR-33.</li>
      </ul>

      <h2>Por que centralizar tudo no prontuário</h2>
      <p>Reunir esses documentos em um único prontuário organiza a gestão dos espaços confinados e garante que cada entrada seja precedida das análises e permissões exigidas. É também o conjunto que a empresa apresenta à fiscalização para comprovar a conformidade com a NR-33.</p>
    `,
    faq: FAQ_NR33_DOC,
  },

  '/treinamento-espaco-confinado-nr33': {
    resposta:
      'O treinamento de espaço confinado NR-33 capacita os trabalhadores que atuam em ambientes de alto risco, como tanques e dutos. Aborda práticas fundamentais de segurança — ventilação, resgate e uso de equipamentos de proteção individual — preparando a equipe para entrar, trabalhar e sair desses espaços em conformidade com a norma.',
    corpo: `
      <h2>A importância do treinamento de espaço confinado NR-33</h2>
      <p>O treinamento de espaço confinado NR-33 é essencial para quem atua em ambientes de alto risco, como tanques e dutos. Por meio dele, os trabalhadores conhecem as práticas fundamentais de segurança e ficam aptos a atuar nesses espaços dentro das exigências da Norma Regulamentadora 33.</p>

      <h2>O que o treinamento aborda</h2>
      <p>A capacitação trata dos temas determinantes para o trabalho seguro em espaços confinados: a ventilação dos ambientes, os procedimentos de resgate e a utilização correta dos equipamentos de proteção individual. Com esse preparo, a equipe sabe reconhecer os riscos e agir diante de situações de emergência.</p>

      <h2>Por que capacitar a equipe</h2>
      <p>Trabalhadores treinados atuam com mais segurança e reduzem a ocorrência de acidentes nesses ambientes de risco. A empresa que promove o treinamento demonstra compromisso com a saúde da equipe e mantém-se em conformidade com a NR-33. A Previsio ministra a capacitação conforme a realidade de cada operação.</p>
    `,
    faq: FAQ_NR33_TREINAMENTO,
  },
};
