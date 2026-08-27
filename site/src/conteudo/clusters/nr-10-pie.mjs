/**
 * /pie — Prontuário de Instalações Elétricas (PIE).
 *
 * Correção confirmada pelo cliente (24/08/2026): PIE = Prontuário de Instalações
 * Elétricas (NR-10), NÃO Plano de Emergência (esse é o PAE). A página foi
 * reclassificada para o cluster nr-10 (taxonomia + pie.json) e o conteúdo abaixo
 * substitui o antigo (que era de Plano de Emergência).
 *
 * Fonte: informativo "PIE - Prontuário de Instalações Elétricas" do Drive do cliente.
 */

export default {
  '/pie': {
    resposta:
      'O PIE (Prontuário de Instalações Elétricas) é o conjunto de documentos exigido pela NR-10 para garantir a segurança de quem atua em instalações elétricas. Todas as empresas com instalações elétricas acima de 75 kW devem manter o PIE atualizado, reunindo relatórios de inspeção, diagramas unifilares, procedimentos e certificados de treinamento.',
    corpo: `
      <h2>O que é o PIE (Prontuário de Instalações Elétricas)</h2>
      <p>O PIE é o Prontuário de Instalações Elétricas, obrigatório pela NR-10 para garantir a segurança dos trabalhadores que atuam em instalações elétricas. Ele reúne, de forma organizada, toda a documentação técnica que comprova que a instalação é segura e está em conformidade com a norma.</p>

      <h2>Quem precisa do PIE</h2>
      <p>Todas as empresas com instalações elétricas <strong>acima de 75 kW</strong> devem manter o PIE atualizado. É um requisito da NR-10 e um documento cobrado em fiscalizações e auditorias.</p>

      <h2>O que deve conter o PIE</h2>
      <ul>
        <li>Relatórios de inspeção;</li>
        <li>Diagramas unifilares;</li>
        <li>Procedimentos operacionais;</li>
        <li>Certificados de treinamento (NR-10);</li>
        <li>Laudos e prontuários de SPDA e aterramento.</li>
      </ul>

      <h2>Por que manter o PIE atualizado</h2>
      <ul>
        <li>Evita acidentes;</li>
        <li>Evita multas;</li>
        <li>Demonstra conformidade em auditorias;</li>
        <li>Preserva a vida dos trabalhadores.</li>
      </ul>

      <h2>Como a Previsio ajuda</h2>
      <p>Fazemos a elaboração e a atualização completa do PIE, com atendimento à NR-10, suporte técnico e consultoria especializada — mantendo a sua empresa segura e dentro da lei.</p>
    `,
    faq: [
      {
        q: 'O que significa PIE?',
        a: 'PIE é o Prontuário de Instalações Elétricas — o conjunto de documentos exigido pela NR-10 para comprovar a segurança das instalações elétricas. (O Plano de Ação de Emergência é o PAE, um documento diferente.)',
      },
      {
        q: 'Quem é obrigado a ter o PIE?',
        a: 'Todas as empresas com instalações elétricas acima de 75 kW devem manter o PIE atualizado, conforme a NR-10.',
      },
      {
        q: 'O que o PIE precisa conter?',
        a: 'Relatórios de inspeção, diagramas unifilares, procedimentos operacionais, certificados de treinamento da NR-10 e os laudos/prontuários de SPDA e aterramento.',
      },
      {
        q: 'A Previsio atende a minha região?',
        a: 'Atendemos todo o Brasil. A sede fica em São Leopoldo/RS e conduzimos projetos em todo o território nacional. Fale com a equipe pelo (51) 3466-9601.',
      },
    ],
  },
};
