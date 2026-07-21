/**
 * Taxonomia das 235 URLs canônicas por cluster temático.
 *
 * Derivada do crawl de 21/07/2026. É a base da arquitetura de informação
 * proposta em §5 do plano: as URLs continuam planas (restrição de SEO), mas a
 * navegação passa a ter hierarquia — cada cluster tem uma página-pilar.
 *
 * Editar aqui é o jeito certo de reclassificar uma página. Nada infere cluster
 * por regex sobre o slug: `/pie` é Plano de Emergência e não "PIE elétrico",
 * e adivinhação por substring erraria justamente nos casos que importam.
 */

/** Página-pilar de cada cluster. URLs que já existem — não inventar rota nova. */
export const PILARES = {
  'nr-12': '/servicos/nr-12',
  'nr-11': '/servicos/laudos-estruturais-nr-11',
  'nr-10': '/servicos/nr-10',
  spda: '/servicos/sistema-de-protecao-contra-descargas-atmosfericas-nr-10',
  'nr-35': '/servicos/nr-35',
  'nr-33': '/servicos/prontuario-nr-33',
  loto: '/servicos/travamento-de-energias-perigosas-loto',
  insalubridade: '/servicos/laudo-de-tecnico-de-insalubridade-e-periculosidade-ltip',
  esocial: '/servicos/lancamentos-no-esocial',
  pgr: '/servicos/programa-de-gerenciamento-de-riscos-pgr',
  ergonomia: '/servicos/analise-ergonomica',
  quimicos: '/servicos/matriz-de-produtos-quimicos',
  respiratoria: '/servicos/plano-de-protecao-respiratorio',
  higiene: '/servicos/programa-de-conservacao-auditiva-pca',
  emergencia: '/servicos/planos-de-emergencia',
  ppramp: '/servicos/plano-de-prevencao-de-riscos-de-acidentes-com-materiais-perfurocortantes-ppramp',
  'cipa-sesmt': '/servicos/sst',
  treinamentos: '/treinamentos-seguranca-do-trabalho',
  manutencao: '/servicos/manutencao',
  institucional: null,
  artigos: '/artigos',
};

/** Rótulo de menu por cluster. Os 6 primeiros vão para o mega-menu (§5). */
export const ROTULOS = {
  'nr-12': 'NR-12 · Segurança em Máquinas',
  'nr-10': 'NR-10 · Elétrica',
  spda: 'SPDA e Aterramento',
  'nr-35': 'NR-35 · Trabalho em Altura',
  'nr-33': 'NR-33 · Espaço Confinado',
  loto: 'LOTO · Bloqueio de Energias',
  'nr-11': 'NR-11 · Movimentação de Cargas',
  insalubridade: 'Insalubridade e Periculosidade',
  esocial: 'eSocial e SST Documental',
  pgr: 'PGR / GRO / NR-01',
  ergonomia: 'Ergonomia · NR-17',
  quimicos: 'Produtos Químicos e Ambiental',
  respiratoria: 'Proteção Respiratória',
  higiene: 'Higiene Ocupacional',
  emergencia: 'Emergência e PPCI',
  ppramp: 'PPRAMP · NR-32',
  'cipa-sesmt': 'CIPA, SESMT e Consultoria',
  treinamentos: 'Treinamentos',
  manutencao: 'Manutenção e Reformas',
  institucional: 'Institucional',
  artigos: 'Artigos',
};

/**
 * slug (sem barra inicial) -> cluster.
 * Montado a partir da taxonomia verificada; total tem de fechar em 235.
 */
const GRUPOS = {
  'nr-12': [
    'adequacao-nr12', 'adequacao-maquinas-nr12', 'consultoria-nr12', 'consultoria-nr-12',
    'laudo-nr12', 'laudo-adequacao-nr12', 'laudo-conformidade-nr12', 'projeto-nr12',
    'assessoria-nr12', 'gestao-nr12', 'documentos-nr12', 'documentacao-nr12',
    'inventario-nr-12', 'inventario-maquinas-nr-12', 'inventario-maquinas-equipamentos-nr-12',
    'analise-risco-nr-12', 'apreciacao-riscos-nr12', 'apreciacao-riscos-maquinas',
    'apreciacao-riscos-apr', 'manuais-maquinas-nr12', 'laudos-maquinas-implementos',
    'treinamento-nr12', 'treinamento-gestao-nr12', 'treinamentos-nr-12-operadores',
    'servicos/nr-12', 'servicos/treinamentos-nr-12', 'servicos/adequacao-de-maquinas-nr-12',
    'servicos/documentacao-nr-12', 'servicos/grau-de-risco-nr-12',
    'servicos/analises-e-apreciacoes-de-risco-nr-12',
    'servicos/projetos-executivos-e-laudo-de-conformidade-nr-12',
    'servicos/medicao-de-tempo-de-parada-em-maquinas-nr12',
  ],
  'nr-11': [
    'adequacao-pontes-rolantes', 'inspecao-estruturas-movimentacao-cargas',
    'inspecao-talhas-pontes-rolantes', 'seguranca-pontes-rolantes',
    'treinamento-talha-ponte-rolante', 'treinamento-movimentacao-cargas',
    'laudos-estruturais', 'adequacao-elevadores', 'treinamento-empilhadeira',
    'treinamento-veiculos-autopropelidos', 'seguranca-veiculos-autopropelidos',
    'servicos/laudos-estruturais-nr-11',
  ],
  'nr-10': [
    'analise-conformidade-nr10', 'nr10-laudo', 'prontuario-instalacao-eletrica',
    'prontuario-instalacao-eletrica-nr10', 'rti',
    'relatorio-tecnico-inspecao-das-instalacoes-eletricas-rti', 'ordem-servico-nr10',
    'projetos-unifilares', 'projetos-multifilares', 'projeto-luminotecnico',
    'adequacao-comandos-eletricos-extrabaixa-tensao', 'treinamento-seguranca-eletricidade-nr10',
    'projeto-area-classificada', 'laudo-area-classificada', 'prontuario-areas-classificadas',
    'servicos/nr-10', 'servicos/projetos-eletricos-nr-10', 'servicos/documentacao-nr-10',
    'servicos/montagem-e-instalacao-eletrica-nr-10',
    'servicos/titulo-prontuario-de-instalacoes-eletricas-nr-10',
    'servicos/relatorio-tecnico-de-inspecao-de-nr-10',
  ],
  spda: [
    'spda', 'spda-raios', 'spda-descarga-atmosferica', 'spda-sistema-protecao-descargas-atmosfericas',
    'projeto-spda', 'laudo-spda', 'instalacao-spda', 'manutencao-sistemas-spda',
    'estudos-viabilidade-spda', 'sistema-aterramento', 'projeto-aterramento',
    'instalacao-aterramento', 'aterramento-eletrico',
    'servicos/sistema-de-protecao-contra-descargas-atmosfericas-nr-10',
    'servicos/sistema-de-aterramento-nr-10',
  ],
  'nr-35': [
    'analise-risco-trabalho-altura', 'analise-risco-trabalho-telhado',
    'procedimentos-trabalho-altura', 'linha-vida', 'projeto-linha-vida',
    'instalacao-linha-vida', 'projeto-instalacao-linhas-vida',
    'treinamento-trabalho-altura-nr35', 'escadas-plataformas-nr35-nr12',
    'servicos/nr-35', 'servicos/prontuario-nr-35',
    'servicos/sistemas-de-protecao-coletiva-nr-35', 'servicos/sistemas-de-protecao-contra-quedas',
    'servicos/manutencao-e-inspecao-em-linhas-de-vida',
  ],
  'nr-33': [
    'prontuario-espaco-confinado-nr33', 'seguranca-espacos-confinados-nr33',
    'treinamento-espaco-confinado-nr33', 'servicos/prontuario-nr-33',
  ],
  loto: [
    'treinamento-bloqueio-energias-perigosas-loto',
    'plano-bloqueio-etiquetagem-energias-perigosas-loto',
    'servicos/travamento-de-energias-perigosas-loto',
  ],
  insalubridade: [
    'ltip-laudo-tecnico-insalubridade-periculosidade', 'laudo-insalubridade-periculosidade-lip',
    'laudo-tecnico-insalubridade-periculosidade-ltip', 'laudo-tecnico-pericial-insalubridade-periculosidade',
    'laudo-insalubridade', 'laudo-tecnico-insalubridade', 'laudo-periculosidade',
    'pericias-insalubridade-periculosidade', 'laudo-tecnico-condicoes-ambientais-do-trabalho',
    'laudo-tecnico-das-condicoes-ambientais-trabalho-ltcat',
    'servicos/laudo-de-tecnico-de-insalubridade-e-periculosidade-ltip',
    'servicos/laudo-tecnico-das-condicoes-ambientais-do-trabalho-ltcat',
  ],
  esocial: [
    'lancamento-esocial-2240', 'lancamento-esocial-2220', 'lancamento-esocial-2210',
    'lancamento-esocial-ambiente-trabalho', 'lancamento-esocial-seguranca', 'lancamento-aso-esocial',
    'regularizacao-e-social-seguranca-do-trabalho', 'e-social-sst', 'ppp',
    'perfil-profissiografico-previdenciario', 'perfil-profissiografico-previdenciario-eletronico',
    'gestao-documentacao-seguranca', 'servicos/lancamentos-no-esocial',
    'servicos/perfil-profissiografico-previdenciario-ppp',
  ],
  pgr: [
    'pgr', 'plano-gerenciamento-riscos-pgr', 'plano-gerenciamento-riscos',
    'plano-gerenciamento-riscos-construcao-civil', 'gerenciamento-riscos-ocupacionais-gro',
    'inventario-riscos', 'analise-riscos', 'analise-riscos-seguranca-do-trabalho',
    'analise-preliminar-riscos-apr', 'planos-acao-reducao-riscos', 'plano-sinalizacao-riscos',
    'mapa-risco', 'ordem-servico-nr01', 'treinamento-nr01',
    'servicos/programa-de-gerenciamento-de-riscos-pgr', 'servicos/ordens-de-servico',
    'servicos/mapa-de-risco',
  ],
  ergonomia: [
    'analise-ergonomica-do-trabalho-aet', 'analise-ergonomica-preliminar-aep',
    'treinamento-ergonomia', 'servicos/analise-ergonomica',
  ],
  quimicos: [
    'auditoria-seguranca-produtos-quimicos', 'inventario-produtos-quimicos-perigosos',
    'laudo-seguranca-produtos-quimicos', 'matriz-incompatibilidade-produtos-quimicos',
    'avaliacao-exposicao-agentes-quimicos', 'treinamento-produtos-quimicos',
    'treinamento-inflamaveis-nr20', 'memorial-calculo-indice-risco-ir-fepam',
    'medicao-estanqueidade-tanques-diesel', 'laudo-impacto-ambiental-nbr10151',
    'laudo-habitacao-container', 'servicos/matriz-de-produtos-quimicos',
  ],
  respiratoria: [
    'ppr', 'plano-protecao-respiratoria-ppr', 'fit-test', 'estanqueidade-mascaras-respiradores',
    'servicos/medicao-de-estanqueidade-em-mascaras', 'servicos/plano-de-protecao-respiratorio',
  ],
  higiene: [
    'medicao-ambiental', 'programa-conservacao-auditiva-pca', 'laudo-conforto-termico',
    'projeto-conforto-termico', 'treinamento-conforto-termico', 'treinamento-calor',
    'treinamento-frio', 'projeto-sistema-exaustao', 'projeto-sistema-ventilacao',
    'servicos/programa-de-conservacao-auditiva-pca',
  ],
  emergencia: [
    // `/pie` é Plano de Emergência, NÃO "Prontuário de Instalações Elétricas".
    // Bug de intenção registrado no crawl — a URL engana, o conteúdo manda.
    'pie', 'plano-emergencia', 'plano-acao-emergencia-pae', 'plano-acao-emergencia-resgate',
    'laudos-protecao-incendios-ppci', 'servicos/planos-de-emergencia',
    'servicos/plano-de-prevencao-e-protecao-contra-incendios-ppci',
  ],
  ppramp: [
    'ppramp', 'treinamento-ppramp',
    'plano-prevencao-riscos-acidentes-materiais-perfurocortantes',
    'servicos/plano-de-prevencao-de-riscos-de-acidentes-com-materiais-perfurocortantes-ppramp',
  ],
  'cipa-sesmt': [
    'dimensionamento-cipa', 'treinamento-cipa', 'dimensionamento-sesmt',
    'dimensionamento-equipes-sesmt', 'consultoria-seguranca-do-trabalho',
    'assessoria-seguranca-do-trabalho', 'gestao-seguranca-no-trabalho',
    'empresa-seguranca-do-trabalho', 'empresa-consultoria-sst', 'empresa-adequacao-nr',
    'consultoria-certificacao-iso-45001', 'consultoria-iso-45001',
    'desenvolvimento-procedimentos-seguranca', 'servicos/sst',
  ],
  treinamentos: [
    'treinamentos-seguranca-do-trabalho', 'treinamento-epis', 'treinamento-nr18',
    'treinamento-trabalho-quente-nr34', 'treinamento-assedio-no-trabalho',
    'treinamento-direcao-defensiva', 'treinamento-pta',
  ],
  manutencao: [
    'plano-manutencao-preventiva', 'contrato-manutencao-preventiva',
    'servicos/manutencao', 'servicos/reformas',
  ],
  institucional: ['', 'quem-somos', 'contato', 'informacoes', 'mapa-site', 'download', 'servicos'],
};

/** Índice slug -> cluster, montado uma vez. */
const INDICE = new Map();
for (const [cluster, slugs] of Object.entries(GRUPOS)) {
  for (const s of slugs) INDICE.set(s, cluster);
}

/** Classifica um path canônico. Artigos são reconhecidos por prefixo. */
export function clusterDe(path) {
  const slug = path.replace(/^\//, '');
  if (slug === 'artigos' || slug.startsWith('artigos/')) return 'artigos';
  return INDICE.get(slug) ?? null;
}

/**
 * Tipo de página — define qual template do Astro renderiza.
 * `pilar` são as que viram hub de cluster e ganham conteúdo próprio (§5).
 */
export function tipoDe(path) {
  const slug = path.replace(/^\//, '');
  if (slug === '') return 'home';
  if (slug === 'artigos') return 'indice-artigos';
  if (slug.startsWith('artigos/')) return 'artigo';
  if (GRUPOS.institucional.includes(slug)) return 'institucional';
  if (Object.values(PILARES).includes('/' + slug)) return 'pilar';
  return 'servico';
}

export const CLUSTERS = Object.keys(GRUPOS).concat('artigos');
