/**
 * Conteúdo enriquecido — cluster CIPA / SESMT / SST (gestão de segurança).
 *
 * Fontes: bodyHtml de cada página; definições incontroversas (CIPA =
 * Comissão Interna de Prevenção de Acidentes, NR-05; SESMT = Serviço
 * Especializado em Engenharia de Segurança e Medicina do Trabalho, NR-04;
 * ISO 45001 = sistema de gestão de SST) e fatos da empresa que o cliente já
 * publica (desde 2016, +1.000 clientes, São Leopoldo/RS, atendimento nacional
 * e no exterior). Páginas de intenção próxima (consultoria x assessoria x
 * gestão x empresa-*) receberam ângulos distintos. Sem números, prazos,
 * dimensionamentos específicos ou cases inventados.
 */

const REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'A sede fica em São Leopoldo/RS e o atendimento é nacional — conduzimos projetos em todo o Brasil e também no exterior. Fale com a nossa equipe pelo (51) 3466-9601.',
};

const RESPALDO = {
  q: 'O trabalho tem respaldo técnico?',
  a: 'Sim. A Previsio é uma empresa de engenharia de segurança do trabalho; os laudos e projetos são assinados por profissional responsável, com Anotação de Responsabilidade Técnica (ART) quando aplicável.',
};

export default {
  // -------------------------------------------------------------- PILAR SST
  '/servicos/sst': {
    resposta:
      'SST — Saúde e Segurança do Trabalho — reúne os serviços que mantêm a empresa em conformidade com as normas regulamentadoras e protegem os trabalhadores. A Previsio elabora laudos, programas e documentação, dimensiona CIPA e SESMT, desenvolve procedimentos e ministra treinamentos, de São Leopoldo/RS para todo o Brasil.',
    corpo: `
      <h2>O que é SST</h2>
      <p>SST — Saúde e Segurança do Trabalho — é o conjunto de práticas, programas e documentos que protegem a integridade física dos trabalhadores e mantêm a empresa em conformidade com as normas regulamentadoras. Vai do diagnóstico dos riscos à elaboração da documentação legal, passando pela capacitação das equipes.</p>

      <h2>Serviços de SST da Previsio</h2>
      <p>A Previsio Engenharia reúne, sob um só fornecedor, os principais serviços de saúde e segurança do trabalho:</p>
      <ul>
        <li>Análise Ergonômica e Programa de Gerenciamento de Riscos (PGR);</li>
        <li>Lançamentos no eSocial;</li>
        <li>Laudo Técnico de Insalubridade e Periculosidade (LTIP) e LTCAT;</li>
        <li>Mapa de Risco e Matriz de Produtos Químicos;</li>
        <li>Planos de Emergência e Plano de Proteção Respiratória;</li>
        <li>Medição de estanqueidade em máscaras e Programa de Conservação Auditiva (PCA);</li>
        <li>Ordens de Serviço e Perfil Profissiográfico Previdenciário (PPP);</li>
        <li>Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes (PPRAMP);</li>
        <li>Treinamentos das NRs.</li>
      </ul>

      <h2>CIPA, SESMT e gestão da conformidade</h2>
      <p>Além da documentação, a SST envolve a estrutura de prevenção da empresa. A Previsio dimensiona a CIPA (Comissão Interna de Prevenção de Acidentes, da NR-05) e o SESMT (Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho, da NR-04), desenvolve procedimentos de segurança e mantém a organização em dia com as exigências legais.</p>
    `,
    faq: [
      {
        q: 'O que é SST?',
        a: 'SST é Saúde e Segurança do Trabalho: o conjunto de programas, laudos, procedimentos e treinamentos que protegem os trabalhadores e mantêm a empresa em conformidade com as normas regulamentadoras.',
      },
      {
        q: 'Para quais empresas a SST é obrigatória?',
        a: 'As obrigações de SST se aplicam a empresas com empregados, variando conforme o porte e o grau de risco da atividade. A Previsio ajuda a identificar quais programas e documentos a sua empresa precisa manter.',
      },
      {
        q: 'A Previsio elabora a documentação e os laudos?',
        a: 'Sim. A Previsio elabora os programas e a documentação de SST — de PGR, LTIP e LTCAT a PPP e planos de emergência — e conduz os lançamentos no eSocial.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------- CONSULTORIA SST
  '/consultoria-seguranca-do-trabalho': {
    resposta:
      'A consultoria em segurança do trabalho é o suporte técnico que identifica e elimina riscos ocupacionais e coloca a empresa em conformidade com as normas regulamentadoras. A Previsio avalia o ambiente, aponta as não conformidades e recomenda as medidas preventivas — de laudos e adequações a treinamentos, com atendimento em todo o Brasil.',
    corpo: `
      <h2>O que é a consultoria em segurança do trabalho</h2>
      <p>A consultoria em segurança do trabalho é o suporte técnico especializado que ajuda a empresa a identificar e eliminar riscos ocupacionais, garantindo a conformidade com as normas regulamentadoras. O consultor avalia o ambiente, aponta as não conformidades e recomenda as medidas mais adequadas para corrigi-las.</p>

      <h2>O que a consultoria da Previsio abrange</h2>
      <p>A partir do diagnóstico, a Previsio orienta e executa as soluções necessárias:</p>
      <ul>
        <li>Laudos e adequações em eletricidade conforme a NR-10;</li>
        <li>Assessoria, projetos, documentação e adequações à NR-12;</li>
        <li>Treinamentos de segurança do trabalho;</li>
        <li>Elaboração da documentação e regularização no eSocial.</li>
      </ul>

      <h2>Por que investir em consultoria</h2>
      <p>A consultoria reduz acidentes, melhora as condições do ambiente laboral e assegura a continuidade das operações. Mais do que evitar penalidades, ela fortalece a cultura de segurança, demonstrando o compromisso da empresa com o bem-estar dos colaboradores.</p>
    `,
    faq: [
      {
        q: 'O que faz uma consultoria em segurança do trabalho?',
        a: 'Ela avalia o ambiente de trabalho, identifica riscos e não conformidades e recomenda as medidas para corrigi-los, mantendo a empresa em conformidade com as normas regulamentadoras.',
      },
      {
        q: 'Qual a diferença entre consultoria e assessoria?',
        a: 'A consultoria tem foco no diagnóstico e nas recomendações; a assessoria é o acompanhamento contínuo que apoia a implementação e a manutenção das medidas no dia a dia. A Previsio oferece as duas frentes.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // -------------------------------------------------- ASSESSORIA SST
  '/assessoria-seguranca-do-trabalho': {
    resposta:
      'A assessoria em segurança do trabalho é o acompanhamento técnico contínuo que apoia a empresa a implementar e manter as medidas de proteção exigidas pelas normas. Inclui identificação de riscos, elaboração de procedimentos, treinamentos e auditorias internas — um suporte recorrente da Previsio para manter a conformidade no dia a dia.',
    corpo: `
      <h2>O que é a assessoria em segurança do trabalho</h2>
      <p>A assessoria em segurança do trabalho é o acompanhamento técnico contínuo que dá suporte à empresa para implementar e manter as medidas de proteção aos trabalhadores. Diferente de uma ação pontual, a assessoria caminha junto com a operação, ajudando a colocar as recomendações em prática e a sustentar a conformidade ao longo do tempo.</p>

      <h2>O que a assessoria inclui</h2>
      <p>O serviço reúne as frentes que mantêm a segurança viva no dia a dia:</p>
      <ul>
        <li>Identificação e reavaliação periódica de riscos;</li>
        <li>Elaboração e revisão de procedimentos de segurança;</li>
        <li>Treinamentos das equipes;</li>
        <li>Auditorias internas para verificar a conformidade.</li>
      </ul>

      <h2>Por que contar com assessoria</h2>
      <p>Investir em assessoria reduz acidentes, melhora as condições laborais e assegura a continuidade das operações de forma segura. As empresas evitam penalidades, aumentam a produtividade e constroem uma cultura organizacional focada na segurança e no bem-estar dos colaboradores.</p>
    `,
    faq: [
      {
        q: 'O que é a assessoria em segurança do trabalho?',
        a: 'É o acompanhamento técnico contínuo que apoia a empresa a implementar e manter as medidas de proteção — com identificação de riscos, procedimentos, treinamentos e auditorias internas.',
      },
      {
        q: 'A assessoria é um serviço contínuo?',
        a: 'Sim. Diferente de uma consultoria pontual, a assessoria é recorrente e acompanha a rotina da empresa, mantendo a conformidade e a cultura de segurança no dia a dia.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ---------------------------------------------------- GESTÃO SST
  '/gestao-seguranca-no-trabalho': {
    resposta:
      'A gestão de segurança no trabalho organiza, de forma contínua, as ações que mantêm o ambiente laboral seguro e em conformidade com as normas: documentação, laudos, treinamentos e adequações. A Previsio estrutura e conduz essa gestão, do diagnóstico à rotina, para reduzir acidentes e passivos e fortalecer a cultura de segurança.',
    corpo: `
      <h2>A importância da gestão de segurança no trabalho</h2>
      <p>A gestão de segurança no trabalho organiza, de forma contínua, todas as ações que mantêm o ambiente laboral seguro e em conformidade com as normas. Mais do que cumprir exigências, gerir a segurança significa proteger a vida e a integridade dos trabalhadores, evitando acidentes, doenças ocupacionais e prejuízos financeiros.</p>

      <h2>Benefícios de uma gestão eficiente</h2>
      <p>Empresas que adotam uma gestão eficiente reduzem custos com afastamentos e indenizações, aumentam a produtividade, melhoram o clima organizacional e cumprem as legislações vigentes. A promoção de uma cultura de segurança torna o ambiente mais harmonioso e colaborativo.</p>

      <h2>Como a Previsio conduz a gestão</h2>
      <p>Atuando desde 2016 e com mais de 1.000 clientes atendidos no Brasil e no exterior, a Previsio estrutura e conduz a gestão de segurança do trabalho: reformas e adequações às normas — como a NR-10 e a NR-12 —, laudos de conformidade, elaboração de documentação, treinamentos, apoio ao eSocial e a manutenção da conformidade ao longo do tempo.</p>
    `,
    faq: [
      {
        q: 'O que é gestão de segurança no trabalho?',
        a: 'É a organização contínua das ações de segurança — documentação, laudos, treinamentos, adequações e acompanhamento da conformidade — para manter o ambiente seguro e reduzir acidentes e passivos.',
      },
      {
        q: 'Qual a diferença entre gestão, consultoria e assessoria?',
        a: 'A consultoria diagnostica e recomenda; a assessoria acompanha a implementação; a gestão conduz de forma contínua todo o sistema de segurança da empresa. A Previsio atua nas três frentes.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ---------------------------------------------- EMPRESA SEG. DO TRABALHO
  '/empresa-seguranca-do-trabalho': {
    resposta:
      'A Previsio Engenharia é uma empresa de engenharia de segurança do trabalho e automação industrial sediada em São Leopoldo/RS, atuando desde 2016. Com equipe multidisciplinar e mais de 1.000 clientes atendidos no Brasil e no exterior, entrega laudos, projetos, adequações e treinamentos para manter as empresas seguras e em conformidade.',
    corpo: `
      <h2>Por que contratar uma empresa de segurança do trabalho</h2>
      <p>Contar com uma empresa especializada em segurança do trabalho é essencial para garantir um ambiente seguro, proteger a integridade física dos funcionários e evitar acidentes. Uma empresa como essa dá o suporte técnico para identificar riscos, implementar medidas de proteção e manter a organização em conformidade com as normas regulamentadoras.</p>

      <h2>A Previsio Engenharia</h2>
      <p>A Previsio Engenharia é uma empresa de Engenharia de Segurança do Trabalho e Automação Industrial sediada em São Leopoldo/RS, atuando desde 2016. Com equipe multidisciplinar e mais de 1.000 clientes atendidos, tem experiência na condução de projetos de grande porte em todo o Brasil e no exterior.</p>

      <h2>O que oferecemos</h2>
      <ul>
        <li>Reformas e atualização de máquinas e painéis elétricos;</li>
        <li>Laudos e adequações em eletricidade conforme a NR-10;</li>
        <li>Assessoria, projetos e documentação de acordo com a NR-12;</li>
        <li>Manutenção em CLPs e IHMs;</li>
        <li>Treinamentos de segurança do trabalho e apoio ao eSocial.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que faz uma empresa de segurança do trabalho?',
        a: 'Dá suporte técnico para identificar riscos, implementar medidas de proteção e manter a empresa em conformidade — com laudos, projetos, adequações, documentação e treinamentos.',
      },
      {
        q: 'Desde quando a Previsio atua?',
        a: 'A Previsio atua desde 2016 e já atendeu mais de 1.000 clientes no Brasil e no exterior, com equipe multidisciplinar sediada em São Leopoldo/RS.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------- EMPRESA CONSULTORIA SST
  '/empresa-consultoria-sst': {
    resposta:
      'A Previsio é uma empresa de consultoria em SST que dá suporte técnico do diagnóstico à implementação: identifica riscos, elabora documentação e conduz adequações e treinamentos. Atua desde 2016, com equipe qualificada e mais de 1.000 clientes atendidos no Brasil e no exterior, a partir de São Leopoldo/RS.',
    corpo: `
      <h2>A Previsio como empresa de consultoria em SST</h2>
      <p>A Previsio Engenharia é uma empresa de consultoria em Saúde e Segurança do Trabalho sediada em São Leopoldo/RS. Atuando desde 2016 e com mais de 1.000 clientes atendidos, acumulou experiência na condução de projetos de grande escala no Brasil e no exterior, sempre com foco na segurança e na conformidade das empresas.</p>

      <h2>Vantagens de contratar uma consultoria de SST</h2>
      <p>Uma consultoria especializada assegura a conformidade com as normas regulamentadoras e contribui para reduzir acidentes e doenças ocupacionais. O suporte técnico abrange desde a identificação e a avaliação de riscos até a implementação de medidas preventivas, protegendo os trabalhadores e evitando passivos trabalhistas.</p>

      <h2>Escopo de atuação</h2>
      <p>A consultoria da Previsio reúne reformas e atualização de máquinas e painéis elétricos, laudos e adequações conforme a NR-10 e a NR-12, manutenção em CLPs e IHMs, elaboração de documentação, treinamentos de segurança do trabalho e regularização no eSocial — soluções sob medida para cada cliente.</p>
    `,
    faq: [
      {
        q: 'O que é uma empresa de consultoria em SST?',
        a: 'É uma empresa que oferece suporte técnico especializado em Saúde e Segurança do Trabalho — do diagnóstico de riscos à implementação de medidas, documentação e treinamentos.',
      },
      {
        q: 'Por que escolher a Previsio?',
        a: 'Pela experiência desde 2016, mais de 1.000 clientes atendidos, equipe multidisciplinar e soluções sob medida, com atendimento nacional a partir de São Leopoldo/RS.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // -------------------------------------------------- EMPRESA ADEQUAÇÃO NR
  '/empresa-adequacao-nr': {
    resposta:
      'A Previsio é uma empresa de adequação às Normas Regulamentadoras: coloca máquinas, instalações e processos em conformidade com NRs como a NR-10 e a NR-12, com laudos, projetos e execução. Atua desde 2016, a partir de São Leopoldo/RS, com atendimento nacional e mais de 1.000 clientes atendidos.',
    corpo: `
      <h2>A Previsio como empresa de adequação NR</h2>
      <p>A Previsio Engenharia é referência em adequação às Normas Regulamentadoras (NRs), atuando desde 2016 a partir de São Leopoldo/RS. Com mais de 1.000 clientes atendidos, tem experiência na condução de projetos de grande porte em todo o território nacional e no exterior, colocando máquinas, instalações e processos em conformidade.</p>

      <h2>Serviços de adequação</h2>
      <ul>
        <li>Reformas e atualização de máquinas e painéis elétricos;</li>
        <li>Laudos e adequações em eletricidade conforme a NR-10;</li>
        <li>Projetos, documentação e adequações à NR-12;</li>
        <li>SPDA, aterramento e projetos complementares;</li>
        <li>Assessoria e consultoria em segurança do trabalho.</li>
      </ul>

      <h2>Por que a adequação às NRs é importante</h2>
      <p>Adequar-se às Normas Regulamentadoras é fundamental para garantir um ambiente laboral seguro e em conformidade com as exigências legais. Empresas que investem nisso protegem seus colaboradores e evitam penalidades, multas e interdições decorrentes do descumprimento das normas.</p>
    `,
    faq: [
      {
        q: 'O que faz uma empresa de adequação NR?',
        a: 'Coloca máquinas, instalações e processos em conformidade com as Normas Regulamentadoras, por meio de diagnóstico, projetos, execução das adequações e emissão dos laudos.',
      },
      {
        q: 'Com quais normas a Previsio trabalha?',
        a: 'Entre outras, a NR-10 (instalações elétricas) e a NR-12 (máquinas e equipamentos), além de projetos complementares como SPDA e aterramento.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------------ CONSULTORIA ISO 45001
  '/consultoria-iso-45001': {
    resposta:
      'A consultoria ISO 45001 apoia a empresa a implementar um sistema de gestão de saúde e segurança ocupacional conforme a norma internacional. A Previsio conduz o diagnóstico, desenvolve os procedimentos, capacita as equipes e realiza auditorias internas, preparando a organização para operar com segurança e reduzir riscos de acidentes.',
    corpo: `
      <h2>O que é a consultoria ISO 45001</h2>
      <p>A ISO 45001 é a norma internacional que estabelece os requisitos para sistemas de gestão de saúde e segurança ocupacional. A consultoria apoia a empresa a implementar esse sistema, aprimorando a gestão de SST e demonstrando um compromisso sólido com a segurança dos colaboradores.</p>

      <h2>Como a Previsio conduz a implementação</h2>
      <p>O processo envolve etapas bem definidas:</p>
      <ol>
        <li><strong>Diagnóstico organizacional</strong> — avaliação da situação atual e dos pontos de melhoria;</li>
        <li><strong>Desenvolvimento de procedimentos</strong> — estruturação do sistema de gestão conforme a norma;</li>
        <li><strong>Capacitação das equipes</strong> — treinamentos para envolver os colaboradores;</li>
        <li><strong>Auditorias internas</strong> — verificação da conformidade com os requisitos.</li>
      </ol>

      <h2>Vantagens da ISO 45001</h2>
      <p>Ao adotar a ISO 45001, a empresa ganha credibilidade, melhora o clima organizacional e assegura a proteção dos funcionários. A conformidade com as exigências legais torna-se mais fácil, e reduzem-se os riscos de acidentes e os prejuízos deles decorrentes.</p>
    `,
    faq: [
      {
        q: 'O que é a ISO 45001?',
        a: 'É a norma internacional que define os requisitos para um sistema de gestão de saúde e segurança ocupacional, com foco na prevenção de acidentes e doenças relacionadas ao trabalho.',
      },
      {
        q: 'Como funciona a consultoria?',
        a: 'A Previsio faz o diagnóstico, desenvolve os procedimentos do sistema de gestão, capacita as equipes e realiza auditorias internas, preparando a empresa para operar conforme a norma.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // -------------------------------------------- CONSULTORIA CERTIFICAÇÃO ISO
  '/consultoria-certificacao-iso-45001': {
    resposta:
      'A consultoria para certificação ISO 45001 prepara a empresa para conquistar o certificado do sistema de gestão de SST. A Previsio faz o diagnóstico inicial, ajusta processos e documentação, treina as equipes e conduz auditorias internas, deixando a organização apta a passar pela auditoria de certificação com conformidade.',
    corpo: `
      <h2>Rumo à certificação ISO 45001</h2>
      <p>A certificação ISO 45001 é o reconhecimento de que a empresa implementou um sistema de gestão de saúde e segurança ocupacional conforme a norma internacional. A consultoria de certificação prepara a organização para essa conquista, ajustando o que for necessário para atender aos requisitos e chegar à auditoria de certificação em conformidade.</p>

      <h2>O caminho conduzido pela Previsio</h2>
      <p>O processo começa por um diagnóstico inicial, que identifica os pontos de melhoria e adequação. Em seguida, são realizados treinamentos para as equipes, a elaboração dos procedimentos e auditorias internas, que verificam a conformidade antes da avaliação final.</p>

      <h2>O valor da certificação</h2>
      <p>Empresas certificadas demonstram seu compromisso com a segurança e a saúde dos colaboradores, o que gera credibilidade e confiança no mercado. Além disso, a certificação contribui para otimizar processos e reduzir custos com acidentes e doenças ocupacionais.</p>
    `,
    faq: [
      {
        q: 'O que é a certificação ISO 45001?',
        a: 'É o reconhecimento formal de que a empresa possui um sistema de gestão de saúde e segurança ocupacional em conformidade com a norma internacional ISO 45001.',
      },
      {
        q: 'Qual a diferença entre consultoria ISO 45001 e consultoria de certificação?',
        a: 'A consultoria de implementação estrutura o sistema de gestão; a de certificação foca em preparar a empresa para a auditoria e conquistar o certificado, verificando a conformidade previamente.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ------------------------------------------------------ DIMENSIONAMENTO CIPA
  '/dimensionamento-cipa': {
    resposta:
      'O dimensionamento da CIPA — Comissão Interna de Prevenção de Acidentes, prevista na NR-05 — define quantos membros a comissão deve ter conforme o número de funcionários e o grau de risco da empresa. A Previsio realiza esse dimensionamento para garantir uma CIPA representativa e em conformidade com a legislação.',
    corpo: `
      <h2>O que é o dimensionamento da CIPA</h2>
      <p>A CIPA — Comissão Interna de Prevenção de Acidentes, prevista na NR-05 — é responsável por promover a prevenção de acidentes e doenças ocupacionais e por orientar os trabalhadores sobre práticas seguras. O dimensionamento define a composição adequada dessa comissão para que ela seja efetiva em suas ações.</p>

      <h2>Como o dimensionamento é feito</h2>
      <p>A quantidade de membros da CIPA deve ser proporcional ao porte e ao risco das atividades da empresa. O dimensionamento leva em consideração o número de funcionários e o grau de risco das atividades desenvolvidas, entre outros fatores, garantindo representatividade e diversidade de opiniões na elaboração das ações preventivas.</p>

      <h2>Por que dimensionar corretamente</h2>
      <p>Empresas com a CIPA corretamente dimensionada ficam em conformidade com a legislação, evitando multas e penalidades. Uma comissão bem estruturada também contribui para reduzir acidentes e incidentes, promovendo um ambiente de trabalho mais seguro. A Previsio conduz esse processo com o apoio de profissionais especializados em segurança do trabalho.</p>
    `,
    faq: [
      {
        q: 'O que é a CIPA?',
        a: 'É a Comissão Interna de Prevenção de Acidentes, prevista na NR-05, responsável por promover a prevenção de acidentes e doenças ocupacionais e orientar os trabalhadores sobre práticas seguras.',
      },
      {
        q: 'Como se define o número de membros da CIPA?',
        a: 'O dimensionamento é proporcional ao porte e ao grau de risco da empresa, considerando o número de funcionários e as atividades desenvolvidas. A Previsio realiza esse cálculo conforme a legislação.',
      },
      {
        q: 'A Previsio dimensiona a CIPA?',
        a: 'Sim. A Previsio realiza o dimensionamento da CIPA para garantir uma comissão representativa e em conformidade com a NR-05, com apoio de profissionais especializados.',
      },
      REGIAO,
    ],
  },

  // ----------------------------------------------------- DIMENSIONAMENTO SESMT
  '/dimensionamento-sesmt': {
    resposta:
      'O dimensionamento do SESMT — Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho, previsto na NR-04 — define a estrutura mínima do serviço conforme o porte e o grau de risco da empresa. A Previsio realiza esse dimensionamento para assegurar conformidade legal e prevenção efetiva de acidentes.',
    corpo: `
      <h2>O que é o dimensionamento do SESMT</h2>
      <p>O SESMT é o Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho, previsto na NR-04. O dimensionamento define a estrutura necessária desse serviço, considerando o porte e o grau de risco da empresa, para assegurar a presença de profissionais qualificados atuando de forma preventiva.</p>

      <h2>Como o dimensionamento é feito</h2>
      <p>O processo analisa o número de funcionários, o grau de risco das atividades, o tipo de estabelecimento e outros fatores determinantes. Com base nessas informações, define-se a quantidade mínima de profissionais que devem compor o serviço, bem como seus cargos e atribuições. O dimensionamento deve ser revisado periodicamente, acompanhando mudanças na empresa e na legislação.</p>

      <h2>Vantagens de um SESMT bem dimensionado</h2>
      <ul>
        <li><strong>Conformidade legal</strong> — atende às normas regulamentadoras e evita autuações;</li>
        <li><strong>Prevenção de acidentes</strong> — profissionais qualificados identificam e mitigam riscos;</li>
        <li><strong>Redução de custos</strong> — menos afastamentos, indenizações e processos judiciais;</li>
        <li><strong>Valorização dos colaboradores</strong> — um ambiente seguro aumenta a satisfação e a produtividade.</li>
      </ul>
    `,
    faq: [
      {
        q: 'O que é o SESMT?',
        a: 'É o Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho, previsto na NR-04, formado por profissionais que atuam na prevenção de acidentes e doenças ocupacionais.',
      },
      {
        q: 'Como se dimensiona o SESMT?',
        a: 'Conforme o porte e o grau de risco da empresa, o número de funcionários e o tipo de estabelecimento — fatores que definem a estrutura mínima do serviço. A Previsio realiza esse dimensionamento.',
      },
      {
        q: 'O dimensionamento precisa ser revisado?',
        a: 'Sim. Ele deve ser revisado periodicamente, para acompanhar mudanças no quadro de funcionários, nas atividades da empresa e na legislação.',
      },
      REGIAO,
    ],
  },

  // ------------------------------------------------ DIMENSIONAMENTO EQUIPES SESMT
  '/dimensionamento-equipes-sesmt': {
    resposta:
      'O dimensionamento das equipes do SESMT determina quais profissionais — engenheiros e técnicos de segurança, médicos e enfermeiros do trabalho — e em que número devem compor o serviço, conforme o porte e o grau de risco da empresa. A Previsio define essa composição para manter a empresa em conformidade com a NR-04.',
    corpo: `
      <h2>O que é o dimensionamento das equipes do SESMT</h2>
      <p>O dimensionamento das equipes do SESMT determina a quantidade ideal de profissionais especializados em segurança, saúde e medicina do trabalho que devem compor o serviço, conforme as normas regulamentadoras. É a etapa que define não só o tamanho, mas a composição da equipe.</p>

      <h2>Quem compõe a equipe</h2>
      <p>Com base no número de funcionários, nos tipos de atividade, nos riscos de cada setor e na classificação da empresa por grau de risco, define-se a composição ideal do SESMT, que pode incluir:</p>
      <ul>
        <li>Engenheiros de segurança do trabalho;</li>
        <li>Técnicos de segurança do trabalho;</li>
        <li>Médicos do trabalho;</li>
        <li>Enfermeiros do trabalho.</li>
      </ul>

      <h2>Por que o dimensionamento correto importa</h2>
      <p>Contar com profissionais qualificados e em número adequado assegura a conformidade com a legislação trabalhista e previdenciária e reduz os riscos de acidentes, doenças ocupacionais e passivos trabalhistas. A Previsio define essa composição de acordo com a realidade de cada empresa.</p>
    `,
    faq: [
      {
        q: 'Quais profissionais compõem o SESMT?',
        a: 'A equipe pode incluir engenheiros e técnicos de segurança do trabalho, médicos do trabalho e enfermeiros do trabalho, conforme o porte e o grau de risco da empresa.',
      },
      {
        q: 'Como se define o número de profissionais?',
        a: 'A partir do número de funcionários, dos tipos de atividade, dos riscos por setor e da classificação da empresa por grau de risco — fatores que determinam a composição da equipe.',
      },
      {
        q: 'A Previsio faz esse dimensionamento?',
        a: 'Sim. A Previsio define a composição e o número de profissionais do SESMT de acordo com a realidade de cada empresa, mantendo a conformidade com a NR-04.',
      },
      REGIAO,
    ],
  },

  // -------------------------------------------- PROCEDIMENTOS DE SEGURANÇA
  '/desenvolvimento-procedimentos-seguranca': {
    resposta:
      'O desenvolvimento de procedimentos de segurança é a elaboração de diretrizes que padronizam práticas seguras: uso correto de equipamentos, manuseio de materiais e medidas preventivas. A Previsio cria procedimentos personalizados para cada operação, reduzindo acidentes e mantendo a empresa em conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>O que é o desenvolvimento de procedimentos de segurança</h2>
      <p>O desenvolvimento de procedimentos de segurança consiste na elaboração de diretrizes que padronizam práticas seguras no ambiente de trabalho. Esses procedimentos fornecem orientações detalhadas sobre o uso correto de equipamentos, o manuseio de materiais e a adoção de medidas preventivas para minimizar acidentes.</p>

      <h2>Por que os procedimentos são importantes</h2>
      <p>Criar e implementar procedimentos de segurança é fundamental para um ambiente de trabalho seguro e saudável. Eles preservam a integridade física e mental dos colaboradores, reduzem incidentes, aumentam a produtividade e sustentam a conformidade com as normas. Empresas que os adotam estabelecem uma cultura organizacional pautada na prevenção de riscos.</p>

      <h2>Procedimentos personalizados</h2>
      <p>A Previsio desenvolve procedimentos de segurança personalizados, que atendem às necessidades específicas de cada cliente. Dessa forma, obtêm-se benefícios como redução de acidentes, aumento da segurança dos colaboradores, melhoria do clima organizacional, conformidade com as normas regulamentadoras e otimização dos processos internos.</p>
    `,
    faq: [
      {
        q: 'O que são procedimentos de segurança?',
        a: 'São diretrizes que padronizam práticas seguras — uso correto de equipamentos, manuseio de materiais e medidas preventivas — para reduzir acidentes e orientar o trabalho no dia a dia.',
      },
      {
        q: 'Os procedimentos são padrão ou feitos sob medida?',
        a: 'São personalizados. A Previsio desenvolve procedimentos conforme as atividades, os riscos e as necessidades específicas de cada empresa.',
      },
      RESPALDO,
      REGIAO,
    ],
  },

  // ----------------------------------------------------------- TREINAMENTO CIPA
  '/treinamento-cipa': {
    resposta:
      'O treinamento da CIPA capacita os membros da Comissão Interna de Prevenção de Acidentes (NR-05) a identificar riscos e agir na prevenção de acidentes e doenças ocupacionais. A Previsio ministra o treinamento in-company, com conteúdo conforme a norma, para que a comissão atue de forma efetiva na sua empresa.',
    corpo: `
      <h2>O que é o treinamento da CIPA</h2>
      <p>O treinamento da CIPA (Comissão Interna de Prevenção de Acidentes) capacita os membros da comissão a identificar e eliminar riscos no ambiente de trabalho. A CIPA, prevista na NR-05, tem como principal objetivo promover a segurança e a saúde ocupacional, contribuindo para um ambiente laboral mais seguro.</p>

      <h2>Por que o treinamento é importante</h2>
      <p>O treinamento da CIPA é essencial para garantir a prevenção de acidentes e o cumprimento das normas regulamentadoras. Ao capacitar a comissão, a empresa demonstra seu compromisso com a segurança dos colaboradores e mantém-se em conformidade com as exigências legais. Entre os benefícios estão a redução de acidentes, o aumento da produtividade e a melhoria do clima organizacional.</p>

      <h2>Como a Previsio conduz</h2>
      <p>A Previsio ministra o treinamento da CIPA in-company, com conteúdo conforme a norma e adaptado à realidade da empresa. A capacitação prepara os membros da comissão para atuar de forma efetiva na identificação de riscos e na promoção de práticas seguras.</p>
    `,
    faq: [
      {
        q: 'O que é o treinamento da CIPA?',
        a: 'É a capacitação dos membros da Comissão Interna de Prevenção de Acidentes (NR-05) para identificar riscos e atuar na prevenção de acidentes e doenças ocupacionais.',
      },
      {
        q: 'Quem deve participar do treinamento?',
        a: 'Os membros da CIPA — titulares e suplentes —, para que a comissão exerça seu papel de prevenção de forma efetiva e em conformidade com a NR-05.',
      },
      {
        q: 'Vocês ministram o treinamento na nossa empresa?',
        a: 'Sim. O treinamento é in-company, realizado na sua empresa, com conteúdo conforme a norma e adaptado à sua realidade.',
      },
      REGIAO,
    ],
  },
};
