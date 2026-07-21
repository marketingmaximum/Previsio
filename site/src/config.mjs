/**
 * Dados fixos da marca e da navegação.
 *
 * NAP verificado no site atual e no briefing — aparece igual em todas as
 * páginas hoje, e precisa continuar consistente (sinal local).
 */
export const EMPRESA = {
  nome: 'Previsio Engenharia',
  // TODO(cliente): subtítulo oficial em aberto. Guia de marca e logo dizem
  // "Segurança do Trabalho e Meio Ambiente"; o APT diz "...e Automação
  // Industrial"; o <title> da home atual diz "automação industrial".
  // Definir antes do go-live — afeta logo, title da home e schema.
  subtitulo: 'Engenharia de Segurança do Trabalho',
  telefone: '(51) 3466-9601',
  telefoneLink: '+555134669601',
  whatsapp: '555134669601',
  email: 'vendas@previsio.com.br',
  endereco: {
    rua: 'Rua Monteiro Lobato, 149',
    bairro: 'Rio Branco',
    cidade: 'São Leopoldo',
    uf: 'RS',
    cep: '93040-350',
  },
  desde: 2016,
  // TODO(cliente): CNPJ e RT nomeado + CREA continuam pendentes.
  cnpj: null,
  responsavelTecnico: null,
};

export const WHATSAPP_MSG =
  'Olá, gostaria de falar com um especialista da Previsio Engenharia.';

export const waLink = (msg = WHATSAPP_MSG) =>
  `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(msg)}`;

/**
 * Clusters do mega-menu, na ordem de exibição.
 * Usado onde é preciso a lista achatada (rodapé, mapa do site).
 */
export const MENU_PRINCIPAL = [
  'nr-12',
  'nr-10',
  'spda',
  'nr-35',
  'nr-33',
  'loto',
  'nr-11',
  'pgr',
  'esocial',
  'insalubridade',
  'respiratoria',
  'higiene',
  'ergonomia',
  'quimicos',
  'emergencia',
  'ppramp',
  'cipa-sesmt',
  'treinamentos',
];

/**
 * Temas do mega-menu — agrupam os clusters em linguagem simples, pensando no
 * gestor industrial leigo em siglas de norma. Cada tema mostra poucos itens que
 * levam ao pilar do cluster; o detalhe fino fica dentro do pilar. Isso troca um
 * painel de ~35 links por um menu escaneável em segundos.
 */
export const TEMAS_MENU = [
  {
    titulo: 'Máquinas e movimentação',
    clusters: ['nr-12', 'loto', 'nr-11'],
  },
  {
    titulo: 'Elétrica e para-raios',
    clusters: ['nr-10', 'spda'],
  },
  {
    titulo: 'Altura, espaços e emergência',
    clusters: ['nr-35', 'nr-33', 'emergencia'],
  },
  {
    titulo: 'Saúde e higiene ocupacional',
    clusters: ['insalubridade', 'higiene', 'respiratoria', 'ergonomia', 'quimicos'],
  },
  {
    titulo: 'Gestão, documentos e eSocial',
    clusters: ['pgr', 'esocial', 'cipa-sesmt', 'ppramp', 'manutencao'],
  },
  {
    titulo: 'Treinamentos',
    clusters: ['treinamentos'],
  },
];

/** Descrição curta por cluster — usada nos cards da home e nos pilares. */
export const DESCRICAO_CLUSTER = {
  'nr-12': 'Adequação de máquinas, apreciação de risco, projeto executivo e laudo de conformidade.',
  'nr-10': 'Prontuário elétrico, laudos, projetos unifilares e áreas classificadas.',
  spda: 'Projeto, instalação e laudo de proteção contra descargas atmosféricas e aterramento.',
  'nr-35': 'Linha de vida, análise de risco em altura e sistemas de proteção contra quedas.',
  'nr-33': 'Prontuário de espaço confinado, segurança e treinamento.',
  loto: 'Bloqueio e etiquetagem de energias perigosas.',
  'nr-11': 'Pontes rolantes, talhas, empilhadeiras e laudos estruturais.',
  pgr: 'PGR, GRO, inventário de riscos e ordens de serviço conforme a NR-01.',
  esocial: 'Lançamentos S-2210, S-2220 e S-2240, PPP e gestão documental.',
  insalubridade: 'LTCAT, LTIP, laudos de insalubridade e periculosidade.',
  respiratoria: 'PPR, fit test e medição de estanqueidade em máscaras.',
  higiene: 'Medição ambiental, PCA, conforto térmico, exaustão e ventilação.',
  ergonomia: 'AET e AEP conforme a NR-17.',
  quimicos: 'Inventário, matriz de incompatibilidade e auditoria de produtos químicos.',
  emergencia: 'Plano de emergência, PAE e laudos de proteção contra incêndio.',
  ppramp: 'Prevenção de acidentes com materiais perfurocortantes — NR-32.',
  'cipa-sesmt': 'Dimensionamento de CIPA e SESMT, consultoria e ISO 45001.',
  treinamentos: 'Treinamentos normativos in-company em segurança do trabalho.',
};
