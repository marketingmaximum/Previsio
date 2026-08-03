/**
 * Conteúdo enriquecido — cluster eSocial (SST, lançamentos, PPP, documentação).
 *
 * Fontes: o bodyHtml de cada página do site atual e termos incontroversos
 * (eSocial = sistema de escrituração digital do governo; PPP = Perfil
 * Profissiográfico Previdenciário; ASO = Atestado de Saúde Ocupacional).
 * Os códigos de evento (2210 acidente; 2220 exposição; 2240 insalubridade/
 * periculosidade) só são usados porque aparecem no bodyHtml de cada página.
 * Nada de números, prazos, multas ou cases inventados. Fatos de empresa:
 * "desde 2016", "+1.000 clientes", São Leopoldo/RS, atendimento nacional.
 */

// Reutilizado onde faz sentido (padrão do gabarito NR-12).
const NAP_REGIAO = {
  q: 'A Previsio atende a minha região?',
  a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional. Fale com a equipe pelo (51) 3466-9601.',
};

export default {
  // ---------------------------------------------------------------- eSocial SST
  '/e-social-sst': {
    resposta:
      'O eSocial SST é a parte do eSocial — sistema de escrituração digital do governo — dedicada a centralizar e padronizar o envio das informações de saúde ocupacional e segurança do trabalho. Manter esses eventos em dia garante conformidade legal, evita penalidades e protege juridicamente a empresa.',
    corpo: `
      <h2>O que é o eSocial SST</h2>
      <p>O eSocial é o sistema de escrituração digital do governo que unifica o envio de informações trabalhistas, previdenciárias e fiscais. A sua vertente de SST — saúde e segurança do trabalho — centraliza e padroniza o envio das informações relacionadas à saúde ocupacional e aos aspectos de segurança do ambiente de trabalho.</p>
      <p>Estar em conformidade com o eSocial SST é fundamental para as empresas que desejam atender às normas de saúde e segurança do trabalho, garantindo conformidade legal e proteção jurídica.</p>

      <h2>Por que manter o eSocial SST em dia</h2>
      <p>Os eventos de SST do eSocial comunicam ao governo, de forma padronizada, as condições de trabalho e a exposição dos colaboradores a riscos. Manter esses envios corretos e atualizados evita penalidades, assegura a transparência das informações e demonstra o compromisso da empresa com a proteção dos trabalhadores.</p>

      <h2>Como a Previsio Engenharia ajuda</h2>
      <p>A Previsio Engenharia fornece toda a documentação necessária para a segurança do trabalho e apoia a empresa na adequação ao eSocial SST. Com uma equipe qualificada e experiência em projetos por todo o território nacional, garantimos que os eventos de SST estejam de acordo com as normas vigentes, evitando penalidades e protegendo os trabalhadores.</p>
    `,
    faq: [
      {
        q: 'O que é o eSocial SST?',
        a: 'É a parte do eSocial, sistema de escrituração digital do governo, dedicada às informações de saúde ocupacional e segurança do trabalho. Ela centraliza e padroniza o envio desses dados ao governo.',
      },
      {
        q: 'O envio dos eventos de SST é obrigatório?',
        a: 'Sim. As empresas com empregados devem enviar ao eSocial os eventos de saúde e segurança do trabalho. A falta ou o atraso desses envios pode gerar penalidades.',
      },
      {
        q: 'Quais informações o eSocial SST abrange?',
        a: 'As condições do ambiente de trabalho, a exposição a riscos ocupacionais, o monitoramento da saúde e os acidentes de trabalho, entre outros eventos de SST.',
      },
      {
        q: 'A Previsio ajuda na adequação ao eSocial SST?',
        a: 'Sim. Fornecemos a documentação de segurança do trabalho e apoiamos a empresa nos lançamentos dos eventos de SST, garantindo conformidade com as normas.',
      },
      NAP_REGIAO,
    ],
  },

  '/servicos/lancamentos-no-esocial': {
    resposta:
      'Todas as empresas com pelo menos um funcionário são obrigadas a realizar, no eSocial, os lançamentos dos riscos ambientais, dos monitoramentos biológicos e dos acidentes de trabalho. Os treinamentos de NR-10 e NR-12 também possuem essa obrigatoriedade. A Previsio realiza esses lançamentos individualmente ou por contrato mensal.',
    corpo: `
      <h2>O que são os lançamentos no eSocial</h2>
      <p>Todas as empresas a partir de um funcionário são obrigadas a realizar lançamentos no eSocial. Entram nessa obrigação os riscos ambientais, os monitoramentos biológicos e os acidentes de trabalho, além dos treinamentos de NR-10 e NR-12, que também possuem essa obrigatoriedade.</p>

      <h2>O que precisa ser lançado</h2>
      <ul>
        <li><strong>Riscos ambientais</strong> — a exposição dos trabalhadores aos agentes do ambiente de trabalho;</li>
        <li><strong>Monitoramentos biológicos</strong> — os exames e o acompanhamento da saúde ocupacional;</li>
        <li><strong>Acidentes de trabalho</strong> — a comunicação dos eventos ocorridos;</li>
        <li><strong>Treinamentos de NR-10 e NR-12</strong> — que também precisam ser informados ao sistema.</li>
      </ul>

      <h2>Lançamentos avulsos ou por contrato mensal</h2>
      <p>A Previsio Engenharia realiza esses lançamentos individualmente ou através de contrato mensal, conforme a necessidade da empresa. Assim, mantemos os eventos de SST em dia e a empresa em conformidade, com o suporte de uma equipe especializada em segurança do trabalho. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'Quais empresas precisam fazer lançamentos no eSocial?',
        a: 'Todas as empresas a partir de um funcionário. São obrigatórios os lançamentos dos riscos ambientais, dos monitoramentos biológicos e dos acidentes de trabalho, além dos treinamentos de NR-10 e NR-12.',
      },
      {
        q: 'O que deve ser lançado no eSocial?',
        a: 'Os riscos ambientais, os monitoramentos biológicos, os acidentes de trabalho e os treinamentos de NR-10 e NR-12, entre os eventos de SST previstos.',
      },
      {
        q: 'A Previsio faz os lançamentos avulsos ou mensais?',
        a: 'Realizamos os lançamentos individualmente ou através de contrato mensal, conforme a necessidade da sua empresa.',
      },
      NAP_REGIAO,
    ],
  },

  // ---------------------------------------------------- LANÇAMENTOS POR EVENTO
  '/lancamento-esocial-2210': {
    resposta:
      'O lançamento do eSocial S-2210 é o envio das informações sobre acidentes de trabalho ao eSocial. O evento registra os detalhes do acidente ocorrido no ambiente de trabalho — como causas e medidas adotadas —, cumprindo uma obrigação legal e apoiando um monitoramento mais eficaz das condições de segurança.',
    corpo: `
      <h2>O que é o lançamento do eSocial 2210</h2>
      <p>O lançamento do eSocial 2210 consiste no envio de informações específicas sobre acidentes de trabalho para o eSocial, o sistema de escrituração digital que unifica o envio dos dados trabalhistas e previdenciários das empresas. O evento S-2210 reúne os detalhes dos acidentes ocorridos no ambiente de trabalho, incluindo causas, medidas preventivas adotadas e outras informações relevantes.</p>

      <h2>Por que o lançamento é importante</h2>
      <p>O lançamento do eSocial 2210 é essencial para as empresas que desejam estar em conformidade com as normas trabalhistas, garantindo transparência na gestão dos acidentes e promovendo um ambiente de trabalho mais seguro. Ao enviar essas informações de forma correta e completa, a empresa contribui para um monitoramento mais eficaz das condições laborais e cumpre suas obrigações legais.</p>

      <h2>Benefícios de lançar corretamente</h2>
      <ul>
        <li>Redução do risco de autuações trabalhistas;</li>
        <li>Melhoria contínua das condições de segurança no trabalho;</li>
        <li>Apoio à prevenção de acidentes futuros;</li>
        <li>Fortalecimento da cultura de segurança organizacional.</li>
      </ul>

      <h2>Conte com a Previsio Engenharia</h2>
      <p>A Previsio Engenharia, especializada em engenharia de segurança do trabalho, apoia sua empresa no lançamento do eSocial 2210 com uma equipe experiente. Garantimos a correta transmissão das informações de acidentes, a regularização do eSocial e a proteção jurídica da empresa. Atuamos desde 2016, com mais de mil clientes atendidos.</p>
    `,
    faq: [
      {
        q: 'O que é o evento S-2210 do eSocial?',
        a: 'É o evento pelo qual a empresa envia ao eSocial as informações sobre acidentes de trabalho, incluindo causas e medidas preventivas adotadas, cumprindo uma obrigação legal.',
      },
      {
        q: 'O lançamento do eSocial 2210 é obrigatório?',
        a: 'Sim. As empresas devem comunicar ao eSocial os acidentes de trabalho. O envio correto e no prazo evita autuações e dá transparência à gestão dos eventos.',
      },
      {
        q: 'A Previsio faz o lançamento do 2210?',
        a: 'Sim. Garantimos a correta transmissão das informações de acidentes ao eSocial, individualmente ou por contrato mensal, mantendo a empresa regularizada.',
      },
      NAP_REGIAO,
    ],
  },

  '/lancamento-esocial-2220': {
    resposta:
      'O lançamento do eSocial S-2220 é o envio, ao eSocial, dos dados sobre a exposição dos trabalhadores a agentes nocivos durante suas atividades e sobre as medidas de proteção adotadas pela empresa. Com esse lançamento, a empresa cumpre as normas, previne riscos ocupacionais e evita multas e sanções.',
    corpo: `
      <h2>O que é o lançamento do eSocial 2220</h2>
      <p>O lançamento do eSocial 2220 consiste no envio de dados detalhados sobre a exposição dos trabalhadores a agentes nocivos durante suas atividades laborais, bem como sobre as medidas de proteção adotadas pela empresa para garantir a segurança e a saúde dos colaboradores.</p>
      <p>Com a transmissão desse evento, a empresa consegue cumprir as normas regulamentadoras, prevenir riscos ocupacionais e manter um ambiente de trabalho seguro e saudável.</p>

      <h2>Vantagens de lançar o 2220 corretamente</h2>
      <p>Ao realizar o lançamento do eSocial 2220, a empresa garante o cumprimento das exigências legais relacionadas à segurança do trabalho, evitando multas e sanções. Além disso, o registro correto da exposição e das proteções contribui para a redução de riscos ocupacionais, o que se reflete em menos acidentes e afastamentos por questões de saúde.</p>

      <h2>Como a Previsio Engenharia ajuda</h2>
      <p>Com uma equipe altamente qualificada em engenharia de segurança do trabalho, a Previsio oferece todo o suporte para o lançamento do eSocial 2220, da coleta das informações de exposição à transmissão do evento. Atuamos desde 2016, com mais de mil clientes atendidos e projetos em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O que informa o evento S-2220 do eSocial?',
        a: 'Os dados sobre a exposição dos trabalhadores a agentes nocivos durante suas atividades e as medidas de proteção adotadas pela empresa para garantir a saúde dos colaboradores.',
      },
      {
        q: 'O lançamento do eSocial 2220 é obrigatório?',
        a: 'Sim. O envio dos eventos de SST ao eSocial é obrigatório para as empresas com empregados, e o correto lançamento do 2220 evita multas e sanções.',
      },
      {
        q: 'A Previsio faz o lançamento do 2220?',
        a: 'Sim. Oferecemos suporte completo, da coleta das informações de exposição à transmissão do evento, individualmente ou por contrato mensal.',
      },
      NAP_REGIAO,
    ],
  },

  '/lancamento-esocial-2240': {
    resposta:
      'O lançamento do eSocial S-2240 é o envio das informações sobre os trabalhadores que exercem atividades insalubres ou perigosas. O evento reúne dados sobre as condições de trabalho, os agentes de risco e os exames médicos realizados, ajudando a empresa a cumprir as obrigações trabalhistas e a evitar penalidades.',
    corpo: `
      <h2>O que é o lançamento do eSocial 2240</h2>
      <p>O lançamento do eSocial 2240 refere-se ao envio de informações sobre os trabalhadores que exercem atividades insalubres ou perigosas, conforme a legislação. Esse lançamento inclui dados sobre as condições de trabalho, os agentes de risco presentes e os exames médicos realizados.</p>
      <p>Empresas que realizam esse lançamento corretamente garantem o cumprimento das obrigações trabalhistas, asseguram a segurança dos trabalhadores e evitam penalidades, promovendo um ambiente mais seguro e saudável.</p>

      <h2>Por que o 2240 é importante</h2>
      <p>O registro correto das condições de trabalho e dos agentes de risco é o que dá respaldo a direitos dos trabalhadores e à conformidade da empresa. Ao manter esse evento em dia, a empresa demonstra compromisso com a saúde ocupacional e reduz o risco de autuações relacionadas a atividades insalubres ou perigosas.</p>

      <h2>O lançamento do 2240 com a Previsio</h2>
      <p>A Previsio Engenharia, especializada em engenharia de segurança do trabalho desde 2016, oferece um serviço completo para o lançamento do eSocial 2240. Nossa equipe garante a correta transmissão das informações, assegurando o cumprimento das normas e a segurança dos trabalhadores. Já atendemos mais de mil clientes em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O que informa o evento S-2240 do eSocial?',
        a: 'As informações sobre os trabalhadores em atividades insalubres ou perigosas, incluindo as condições de trabalho, os agentes de risco e os exames médicos realizados.',
      },
      {
        q: 'Quem precisa do lançamento do eSocial 2240?',
        a: 'Empresas cujos trabalhadores exercem atividades insalubres ou perigosas, que precisam informar ao eSocial as condições de trabalho e os agentes de risco a que os colaboradores estão expostos.',
      },
      {
        q: 'A Previsio faz o lançamento do 2240?',
        a: 'Sim. Garantimos a correta transmissão das informações ao eSocial, individualmente ou por contrato mensal, assegurando o cumprimento das normas.',
      },
      NAP_REGIAO,
    ],
  },

  '/lancamento-esocial-ambiente-trabalho': {
    resposta:
      'O lançamento no eSocial das condições do ambiente de trabalho registra e documenta as condições de trabalho, os riscos, as exposições e as medidas adotadas para proteger os colaboradores. É essencial para as empresas que se preocupam com a segurança e para manter a conformidade com as normas regulamentadoras.',
    corpo: `
      <h2>O que é o lançamento no eSocial do ambiente de trabalho</h2>
      <p>O lançamento no eSocial das condições do ambiente de trabalho é o registro que permite o acompanhamento e a documentação de todas as condições de trabalho, dos riscos, das exposições e das medidas adotadas para garantir a proteção dos profissionais. É por meio desses eventos que a empresa comunica ao governo como está o seu ambiente laboral.</p>

      <h2>Por que esse lançamento é essencial</h2>
      <p>O lançamento é essencial para empresas que se preocupam com a segurança e a saúde dos colaboradores. Ao registrar as condições e as exposições do ambiente, a empresa demonstra comprometimento com a segurança ocupacional e contribui para um ambiente mais saudável. Além disso, estar em conformidade com as normas regulamentadoras é fundamental para evitar multas e prejuízos financeiros.</p>

      <h2>Regularização do eSocial com a Previsio</h2>
      <p>Localizada em São Leopoldo/RS e atuando desde 2016, a Previsio Engenharia fornece toda a documentação referente à segurança do trabalho, incluindo projeto e execução, e cuida da regularização do eSocial com foco na proteção jurídica da empresa. Já atendemos mais de mil clientes em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O que é lançado no eSocial sobre o ambiente de trabalho?',
        a: 'As condições de trabalho, os riscos, as exposições dos colaboradores e as medidas de proteção adotadas pela empresa, permitindo o acompanhamento e a documentação do ambiente laboral.',
      },
      {
        q: 'Esse lançamento é obrigatório?',
        a: 'Sim. As empresas com empregados devem informar ao eSocial as condições e as exposições do ambiente de trabalho, sob risco de multas e prejuízos por descumprimento das normas.',
      },
      {
        q: 'A Previsio cuida da regularização do eSocial?',
        a: 'Sim. Fornecemos a documentação de segurança do trabalho e realizamos a regularização do eSocial, com foco na proteção jurídica da empresa.',
      },
      NAP_REGIAO,
    ],
  },

  '/lancamento-esocial-seguranca': {
    resposta:
      'O lançamento no eSocial de segurança é o envio das informações relacionadas à segurança no trabalho — como os riscos ocupacionais, os treinamentos realizados e as medidas preventivas adotadas. Ele mantém um registro atualizado das condições de segurança e saúde dos trabalhadores e assegura a conformidade com as obrigações trabalhistas.',
    corpo: `
      <h2>O que é o lançamento no eSocial de segurança</h2>
      <p>O lançamento no eSocial de segurança refere-se ao envio de informações relacionadas à segurança no trabalho, incluindo dados sobre riscos ocupacionais, treinamentos e medidas preventivas. Esse lançamento permite que a empresa mantenha um registro atualizado das condições de segurança e saúde dos trabalhadores.</p>

      <h2>Vantagens de manter os lançamentos em dia</h2>
      <p>Empresas que realizam esse lançamento corretamente garantem a conformidade com as obrigações trabalhistas, reduzem acidentes e protegem os trabalhadores. Além disso, ajudam a criar uma cultura de segurança no ambiente de trabalho, promovendo mais proteção e eficiência.</p>

      <h2>Por que escolher a Previsio Engenharia</h2>
      <p>Localizada em São Leopoldo/RS e especializada em engenharia de segurança do trabalho desde 2016, a Previsio conta com mais de mil clientes atendidos e experiência na condução de projetos em todo o território nacional. Apoiamos a empresa nos lançamentos de segurança do eSocial, mantendo os eventos de SST em conformidade com as normas.</p>
    `,
    faq: [
      {
        q: 'O que é lançado no eSocial de segurança?',
        a: 'As informações sobre os riscos ocupacionais, os treinamentos realizados e as medidas preventivas adotadas, formando um registro atualizado das condições de segurança e saúde dos trabalhadores.',
      },
      {
        q: 'Esse lançamento é obrigatório?',
        a: 'Sim. As empresas com empregados devem manter os eventos de segurança e saúde do trabalho atualizados no eSocial, o que garante a conformidade com as obrigações trabalhistas.',
      },
      {
        q: 'A Previsio realiza os lançamentos de segurança no eSocial?',
        a: 'Sim. Apoiamos a empresa no envio dos eventos de SST, individualmente ou por contrato mensal, mantendo tudo em conformidade com as normas.',
      },
      NAP_REGIAO,
    ],
  },

  '/lancamento-aso-esocial': {
    resposta:
      'O lançamento do ASO no eSocial é o registro dos atestados de saúde ocupacional (ASO) no sistema, assegurando que os dados de exames médicos, atestados e condições de saúde dos colaboradores sejam enviados conforme a legislação. Mantém a empresa em dia com suas obrigações e melhora a gestão da saúde ocupacional.',
    corpo: `
      <h2>O que é o lançamento do ASO no eSocial</h2>
      <p>O lançamento do ASO no eSocial consiste no registro dos atestados de saúde ocupacional (ASO) no sistema, assegurando que todos os dados referentes a exames médicos, atestados e condições de saúde dos colaboradores sejam enviados de forma precisa e conforme a legislação vigente.</p>
      <p>Essa prática garante que a empresa esteja em dia com suas obrigações trabalhistas e proporciona uma gestão mais eficiente da saúde no ambiente de trabalho.</p>

      <h2>Vantagens do lançamento do ASO</h2>
      <ul>
        <li>Conformidade com as exigências do eSocial;</li>
        <li>Prevenção de penalidades trabalhistas;</li>
        <li>Melhora da gestão da saúde ocupacional;</li>
        <li>Proteção da saúde dos trabalhadores;</li>
        <li>Transparência nas informações de saúde ocupacional.</li>
      </ul>
      <p>Empresas que mantêm o lançamento do ASO em dia protegem a saúde de seus colaboradores, evitam multas e aprimoram sua governança, além de contribuir para um ambiente de trabalho mais seguro e saudável.</p>

      <h2>O lançamento do ASO com a Previsio</h2>
      <p>A Previsio Engenharia, especializada em engenharia de segurança do trabalho, apoia sua empresa no lançamento do ASO no eSocial, garantindo o envio correto dos dados de saúde ocupacional. Atuamos desde 2016, com mais de mil clientes atendidos, e realizamos os lançamentos individualmente ou por contrato mensal.</p>
    `,
    faq: [
      {
        q: 'O que é o ASO?',
        a: 'ASO é o atestado de saúde ocupacional, o documento que registra os exames médicos e as condições de saúde do trabalhador. Seus dados precisam ser enviados ao eSocial conforme a legislação.',
      },
      {
        q: 'O lançamento do ASO no eSocial é obrigatório?',
        a: 'Sim. Os dados de saúde ocupacional dos colaboradores devem ser enviados ao eSocial. O envio correto evita penalidades trabalhistas e melhora a gestão da saúde ocupacional.',
      },
      {
        q: 'A Previsio faz o lançamento do ASO?',
        a: 'Sim. Realizamos o lançamento dos atestados de saúde ocupacional no eSocial, individualmente ou por contrato mensal, garantindo o envio correto dos dados.',
      },
      NAP_REGIAO,
    ],
  },

  // -------------------------------------------------------------------- PPP
  '/ppp': {
    resposta:
      'O PPP — Perfil Profissiográfico Previdenciário — é o documento que descreve, de forma detalhada, as atividades e as condições de trabalho às quais o colaborador foi exposto. É essencial para garantir direitos previdenciários, como a aposentadoria especial, e deve refletir os agentes nocivos presentes ao longo da carreira.',
    corpo: `
      <h2>O que é o PPP e por que ele importa</h2>
      <p>O PPP (Perfil Profissiográfico Previdenciário) é um documento essencial para garantir que os trabalhadores estejam protegidos e recebam os benefícios previdenciários corretamente. Ele descreve detalhadamente as atividades e as condições de trabalho às quais o colaborador foi exposto, sendo fundamental para a concessão da aposentadoria especial e de outros direitos previdenciários.</p>

      <h2>O PPP e os agentes nocivos</h2>
      <p>Um dos papéis centrais do PPP é registrar os agentes nocivos aos quais o trabalhador esteve exposto ao longo de sua carreira. Esse histórico é o que dá respaldo ao reconhecimento de condições prejudiciais à saúde e à concessão de benefícios, o que torna a precisão do documento decisiva para o trabalhador.</p>

      <h2>A elaboração do PPP pela Previsio Engenharia</h2>
      <p>Referência em engenharia de segurança do trabalho, a Previsio já atendeu mais de mil clientes e elabora o PPP com uma equipe altamente qualificada. Garantimos que todas as exigências legais sejam cumpridas e que as condições de trabalho dos colaboradores sejam devidamente registradas, com precisão e agilidade.</p>
    `,
    faq: [
      {
        q: 'O que é o PPP?',
        a: 'O Perfil Profissiográfico Previdenciário é o documento que descreve as atividades e as condições de trabalho a que o colaborador foi exposto, incluindo os agentes nocivos, para fins previdenciários.',
      },
      {
        q: 'Para que serve o PPP?',
        a: 'Serve para comprovar as condições de trabalho ao longo da carreira e garantir direitos previdenciários, como a aposentadoria especial e o reconhecimento de condições prejudiciais à saúde.',
      },
      {
        q: 'A Previsio elabora o PPP?',
        a: 'Sim. Elaboramos o PPP de forma precisa e ágil, garantindo o cumprimento das exigências legais e o registro correto das condições de trabalho dos colaboradores.',
      },
      NAP_REGIAO,
    ],
  },

  '/perfil-profissiografico-previdenciario': {
    resposta:
      'O perfil profissiográfico previdenciário (PPP) é o documento que descreve as atividades desempenhadas pelo trabalhador e os agentes nocivos a que esteve exposto ao longo da carreira. É fundamental para a aposentadoria especial e para o reconhecimento de condições de trabalho prejudiciais à saúde do colaborador.',
    corpo: `
      <h2>A importância do perfil profissiográfico previdenciário</h2>
      <p>O perfil profissiográfico previdenciário (PPP) é um documento de extrema importância para garantir a segurança e os direitos dos trabalhadores, especialmente no que diz respeito à aposentadoria especial e ao reconhecimento de condições de trabalho prejudiciais à saúde. Por meio dele, descrevem-se detalhadamente as atividades desempenhadas pelo trabalhador e os agentes nocivos aos quais esteve exposto ao longo da carreira.</p>

      <h2>Quem precisa do PPP</h2>
      <p>O PPP deve ser elaborado pelas empresas que admitem trabalhadores como empregados, sempre que houver exposição a agentes nocivos. Ele acompanha a vida laboral do colaborador e é a base para que ele comprove, junto à Previdência, as condições em que trabalhou.</p>

      <h2>Como a Previsio elabora o PPP</h2>
      <p>A Previsio Engenharia oferece serviços completos para auxiliar as empresas na elaboração do perfil profissiográfico previdenciário. Com vasta experiência técnica e um time de profissionais qualificados, garantimos a correta elaboração do documento, assegurando que os trabalhadores tenham seus direitos previdenciários preservados. Atuamos com clientes em todo o território nacional, com mais de mil empresas atendidas.</p>
    `,
    faq: [
      {
        q: 'Quem deve elaborar o PPP?',
        a: 'As empresas que admitem trabalhadores como empregados, especialmente quando há exposição a agentes nocivos. O documento acompanha a vida laboral do colaborador.',
      },
      {
        q: 'Para que serve o PPP?',
        a: 'Para descrever as atividades e os agentes nocivos a que o trabalhador esteve exposto, servindo de base para a aposentadoria especial e o reconhecimento de condições prejudiciais à saúde.',
      },
      {
        q: 'A Previsio elabora o PPP?',
        a: 'Sim. Nossa equipe elabora o perfil profissiográfico previdenciário com precisão, assegurando o cumprimento das exigências legais e a preservação dos direitos previdenciários.',
      },
      NAP_REGIAO,
    ],
  },

  '/perfil-profissiografico-previdenciario-eletronico': {
    resposta:
      'O perfil profissiográfico previdenciário eletrônico é a versão digital do PPP, o documento que descreve as atividades e os agentes nocivos a que o trabalhador foi exposto. A partir de janeiro de 2023, o PPP passou a ser emitido em formato digital, o que agiliza o envio das informações e a gestão dos dados.',
    corpo: `
      <h2>O que é o PPP eletrônico</h2>
      <p>O perfil profissiográfico previdenciário eletrônico é uma evolução do tradicional PPP — Perfil Profissiográfico Previdenciário. Trata-se da versão digital desse documento obrigatório, que descreve as atividades desenvolvidas pelo trabalhador e os agentes nocivos aos quais esteve exposto ao longo de sua carreira. A partir de janeiro de 2023, o PPP passou a ser emitido em formato digital.</p>

      <h2>Vantagens do PPP eletrônico</h2>
      <p>A adoção do PPP eletrônico traz vantagens para as empresas. Além de facilitar a gestão e o armazenamento dos dados, a versão digital agiliza o envio das informações ao INSS, garantindo mais precisão e rapidez nos processos administrativos. Com ele, a empresa cumpre as exigências legais e ganha eficiência no controle das exposições e dos riscos ocupacionais.</p>

      <h2>Como a Previsio Engenharia ajuda</h2>
      <p>Especializada em engenharia de segurança do trabalho, a Previsio conta com uma equipe técnica qualificada para elaborar e manter o PPP eletrônico da sua empresa. Já atendemos mais de mil clientes, com projetos conduzidos em todo o Brasil, sempre em conformidade com as exigências legais.</p>
    `,
    faq: [
      {
        q: 'Qual a diferença entre o PPP e o PPP eletrônico?',
        a: 'O conteúdo é o mesmo — atividades e agentes nocivos a que o trabalhador foi exposto —, mas o eletrônico é a versão digital. A partir de janeiro de 2023, o PPP passou a ser emitido em formato digital.',
      },
      {
        q: 'Quais as vantagens da versão eletrônica?',
        a: 'Ela facilita a gestão e o armazenamento dos dados e agiliza o envio das informações ao INSS, trazendo mais precisão e rapidez aos processos administrativos.',
      },
      {
        q: 'A Previsio elabora o PPP eletrônico?',
        a: 'Sim. Nossa equipe elabora e mantém o PPP eletrônico em conformidade com as exigências legais, com precisão no registro das exposições ocupacionais.',
      },
      NAP_REGIAO,
    ],
  },

  '/servicos/perfil-profissiografico-previdenciario-ppp': {
    resposta:
      'O PPP é o documento que reúne dados administrativos, registros ambientais e resultados de monitoração biológica do trabalhador. Deve ser preenchido pelas empresas que admitem empregados e entregue no desligamento e sempre que solicitado para fins previdenciários. Desde janeiro de 2023, passou a ser emitido em formato digital.',
    corpo: `
      <h2>O que é o PPP</h2>
      <p>O Perfil Profissiográfico Previdenciário é um documento que reúne algumas informações, dados administrativos, registros ambientais e resultados de monitoração biológica do trabalhador. Deve ser preenchido pelas empresas que admitem trabalhadores como empregados.</p>

      <h2>Quando o PPP é entregue</h2>
      <p>O documento deve ser entregue no desligamento do trabalhador e sempre que solicitado para fins previdenciários. Ele acompanha a trajetória do colaborador e serve de base para a comprovação das condições de trabalho junto à Previdência. A partir de janeiro de 2023, o PPP passou a ser emitido em formato digital.</p>

      <h2>Elaboração do PPP com a Previsio</h2>
      <p>A Previsio Engenharia elabora o PPP reunindo os registros ambientais e os resultados de monitoração biológica de forma precisa e conforme as normas. Com uma equipe especializada em engenharia de segurança do trabalho e mais de mil clientes atendidos, garantimos um documento pronto para os fins previdenciários. Atuamos desde 2016, em todo o território nacional.</p>
    `,
    faq: [
      {
        q: 'O que o PPP reúne?',
        a: 'Informações e dados administrativos, registros ambientais e resultados de monitoração biológica do trabalhador, reunidos ao longo da sua trajetória na empresa.',
      },
      {
        q: 'Quando o PPP deve ser entregue?',
        a: 'No desligamento do trabalhador e sempre que solicitado para fins previdenciários. Desde janeiro de 2023, o documento passou a ser emitido em formato digital.',
      },
      {
        q: 'Quem precisa preencher o PPP?',
        a: 'As empresas que admitem trabalhadores como empregados devem preencher e manter o PPP de cada colaborador.',
      },
      {
        q: 'A Previsio elabora o PPP?',
        a: 'Sim. Elaboramos o PPP reunindo os registros ambientais e os resultados de monitoração biológica, conforme as exigências legais.',
      },
      NAP_REGIAO,
    ],
  },

  // ------------------------------------------------- DOCUMENTAÇÃO / REGULARIZAÇÃO
  '/regularizacao-e-social-seguranca-do-trabalho': {
    resposta:
      'A regularização do eSocial na segurança do trabalho é o processo de colocar em dia, no sistema, as informações de SST exigidas por lei. Ao centralizar esses dados no eSocial, a empresa mantém a conformidade trabalhista e previdenciária, evita multas e sanções e comprova a proteção oferecida aos colaboradores.',
    corpo: `
      <h2>A importância da regularização do eSocial na segurança do trabalho</h2>
      <p>A regularização do eSocial na segurança do trabalho é um processo fundamental para as empresas que desejam manter a conformidade com a legislação trabalhista e previdenciária, além de garantir um ambiente de trabalho seguro. Por meio do eSocial, as informações relacionadas à segurança do trabalho são centralizadas, o que facilita o monitoramento e a prestação de contas aos órgãos competentes.</p>
      <p>Ao realizar a regularização, a empresa evita multas e sanções, pois passa a estar em conformidade com as normas, e contribui para a prevenção de acidentes e doenças ocupacionais.</p>

      <h2>Como a Previsio Engenharia ajuda</h2>
      <p>Localizada em São Leopoldo/RS, a Previsio é especializada em engenharia de segurança do trabalho e oferece diversos serviços para a regularização do eSocial. Entre eles, o fornecimento de toda a documentação referente à segurança do trabalho — incluindo projeto e execução —, a regularização do eSocial em si e a consultoria voltada à proteção jurídica da empresa.</p>

      <h2>Vantagens da regularização</h2>
      <p>Além de evitar penalidades legais, a regularização contribui para a promoção da segurança e da saúde dos trabalhadores, aumentando a produtividade e a qualidade dos serviços. Com uma equipe qualificada e mais de mil clientes atendidos, a Previsio oferece soluções personalizadas para cada empresa, garantindo um ambiente de trabalho seguro e em conformidade.</p>
    `,
    faq: [
      {
        q: 'O que é a regularização do eSocial na segurança do trabalho?',
        a: 'É o processo de colocar em dia, no eSocial, as informações de saúde e segurança do trabalho exigidas por lei, mantendo a empresa em conformidade trabalhista e previdenciária.',
      },
      {
        q: 'O que acontece se a empresa não regularizar o eSocial?',
        a: 'A empresa fica sujeita a multas e sanções por descumprimento das normas, além de perder o respaldo documental das medidas de segurança adotadas.',
      },
      {
        q: 'A Previsio faz a regularização do eSocial?',
        a: 'Sim. Fornecemos a documentação de segurança do trabalho e cuidamos da regularização do eSocial, com consultoria voltada à proteção jurídica da empresa.',
      },
      NAP_REGIAO,
    ],
  },

  '/gestao-documentacao-seguranca': {
    resposta:
      'A gestão de documentação de segurança é a organização e a manutenção dos registros obrigatórios de saúde e segurança do trabalho — laudos técnicos, certificados e relatórios. Mantê-los atualizados evita penalidades, facilita auditorias e reduz riscos de acidentes, demonstrando o compromisso da empresa com a segurança dos colaboradores.',
    corpo: `
      <h2>O que é a gestão de documentação de segurança</h2>
      <p>A gestão de documentação de segurança é fundamental para as empresas que desejam garantir a conformidade com as normas regulamentadoras e promover um ambiente de trabalho seguro. A organização e a manutenção dos registros obrigatórios relacionados à saúde e à segurança do trabalho são essenciais para evitar penalidades, facilitar auditorias e reduzir riscos de acidentes.</p>

      <h2>Vantagens de manter a documentação em ordem</h2>
      <p>A correta administração dos documentos de segurança do trabalho traz diversas vantagens. Além de assegurar a conformidade legal, a gestão adequada contribui para prevenir acidentes e proteger os trabalhadores. Manter os laudos técnicos, certificados e relatórios sempre atualizados é uma ação proativa que demonstra o compromisso da empresa com a segurança e a saúde de seus colaboradores.</p>

      <h2>Documentação e o eSocial</h2>
      <p>Boa parte da documentação de segurança alimenta os eventos de SST do eSocial: os laudos e os registros ambientais são a origem das informações enviadas ao sistema. Manter a documentação organizada é, portanto, o que sustenta a regularidade dos lançamentos e a proteção jurídica da empresa.</p>

      <h2>Como a Previsio Engenharia ajuda</h2>
      <p>Especialista em engenharia de segurança do trabalho, a Previsio oferece serviços completos para a gestão da documentação de segurança — de reformas e laudos a adequações e treinamentos, com toda a documentação necessária. Com mais de mil clientes atendidos, entregamos soluções personalizadas para cada negócio.</p>
    `,
    faq: [
      {
        q: 'O que inclui a gestão de documentação de segurança?',
        a: 'A organização e a manutenção dos registros obrigatórios de SST, como laudos técnicos, certificados e relatórios, sempre atualizados para evitar penalidades e facilitar auditorias.',
      },
      {
        q: 'Por que manter a documentação atualizada?',
        a: 'Documentos atualizados asseguram a conformidade legal, facilitam auditorias, reduzem riscos de acidentes e sustentam os lançamentos dos eventos de SST no eSocial.',
      },
      {
        q: 'A Previsio cuida da documentação de segurança?',
        a: 'Sim. Fornecemos toda a documentação necessária para a segurança do trabalho e apoiamos a empresa na sua organização e manutenção.',
      },
      NAP_REGIAO,
    ],
  },
};
