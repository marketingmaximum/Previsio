# Alterações da V2 — feedback do cliente (montado, aguardando execução)

> Consolidado do feedback do cliente (PREVISIO.docx, 23/07/2026) + materiais do
> Drive + nota do Rodrigo sobre a logo. **Nada executado ainda** — este é o plano
> para revisarmos e aí aplicarmos de uma vez. Cada item marca a ação exata.

---

## 1. Marca e subtítulo ✅ decisão travada

- **Subtítulo oficial = "Segurança do Trabalho"**. Remover TODAS as variações:
  "…e Meio Ambiente" **e** "…e Automação Industrial" (confirma a nota do Rodrigo).
  - Onde muda: `config.mjs` (`subtitulo`), título da home, textos de quem-somos e
    contato, schema. **Ação:** trocar para "Engenharia de Segurança do Trabalho".
  - ⚠️ **Logo (imagem):** o arquivo `logo-previsio.png` tem "Segurança do Trabalho e
    Meio Ambiente" gravado na imagem. As designers já estão refazendo a logo sem
    "Meio Ambiente" — **precisamos do arquivo novo** para trocar no header/rodapé.

## 2. Dados oficiais e conteúdo ✅ recebidos

- **Números confirmados:** "Desde 2016" e "+1.000 clientes" — podem ficar firmes.
- **Autoridade (adicionar nas páginas + schema):**
  - CNPJ: **26.244.431/0001-97**
  - Responsável Técnico: **Rodrigo — CREA-RS 113630**
  - **Ação:** preencher em `config.mjs` (hoje estão como TODO), exibir no rodapé/contato
    e no schema. Ganho direto de E-E-A-T (autoridade p/ Google e IA).
- **Siglas com significado ao lado** (ex.: PIE — Prontuário de Instalações Elétricas;
  eventos do eSocial). **Ação:** revisar as páginas e grafar a sigla por extenso na
  primeira menção.
- **Logos de clientes:** **stand-by** até coletarem autorizações. **Ação:** ocultar a
  seção "Alguns de nossos clientes" da página Quem Somos por ora (reativar depois).

## 3. Imagens reais (Drive) — inventário e uso 🟢 material excelente

Fotos reais de obra, com **Antes/Depois** das adequações NR-12 — o diferencial que
nenhum concorrente mostra. Qualidade profissional, alta resolução.

| Pasta | Antes | Depois | Uso proposto |
|---|---|---|---|
| Coladeira | 4 | 6 | Hero NR-12 + seção **Antes/Depois** |
| Serra fita | 3 | 5 | Antes/Depois + galeria |
| Furadeira | 1 | 3 | Antes/Depois |
| Onduladeira Ushida | 14 fotos | — | **Case completo** (tem pptx com o texto) |
| Prensa Sandt | pptx (71 imgs) | — | **Case completo** (case detalhado) |

**Ações:**
- Substituir os heros de banco de imagem das páginas de NR-12 por fotos reais.
- Criar uma seção **"Antes e Depois"** (na home e/ou no pilar NR-12) — prova visual forte.
- Montar 1–2 **cases reais** (Onduladeira, Prensa) como página/artigo.
- **Revisar capas de artigos** onde o logo ficou em fundo preto (o cliente apontou) —
  trocar por foto real ou capa mais clara.
- Cliente vai **subir mais fotos** de projetos em andamento (aguardar).

## 4. Conteúdo novo dos informativos (pptx) 🟢 texto real do cliente

Material rico, escrito pela própria Previsio — usar para enriquecer/corrigir páginas:

- **PIE (Prontuário de Instalações Elétricas):** "obrigatório pela NR-10, empresas com
  instalações **acima de 75 kW**; contém relatórios de inspeção, diagramas unifilares,
  procedimentos." → alimenta as páginas de prontuário elétrico.
  - ⚠️ **Conflito a resolver:** nossa página **/pie** hoje tem conteúdo de *Plano de
    Emergência* (herdado do site antigo). O cliente confirma PIE = Prontuário Elétrico.
    Decidir na execução: corrigir o conteúdo de /pie para Prontuário Elétrico
    (mantendo a URL) ou tratar como caso à parte.
- **NR-10:** lista de serviços (Treinamento, PIE e RTI, Projetos Elétricos, SPDA,
  Extra Baixa Tensão, Manutenção, Reforma de Painéis) → enriquece o pilar /servicos/nr-10.
- **PCA / PPR / LTIP:** "só fornecer EPI não elimina risco nem evita adicional de
  insalubridade" → páginas de PCA (higiene), PPR (respiratória), LTIP (insalubridade).
- **Manutenção preventiva:** "máquinas paradas custam caro… plano sob medida" →
  preenche **/servicos/manutencao** (que estava vazio!).
- **Combate ao Assédio / riscos psicossociais (NR-01 + NR-17/AEP):** tema novo e quente
  (obrigatório desde 26/05) — **2ª prioridade do briefing.** → criar página de serviço
  e/ou artigo. Alto potencial de SEO/GEO.

## 5. Treinamentos e Cursos EAD

- **Nas páginas de treinamento, deixar claras as 3 modalidades:**
  1. In-company (presencial) · 2. Remoto Síncrono (via Teams) · 3. Flexível EAD (Moodle)
  - **Ação:** adicionar um bloco padrão de modalidades nas páginas do cluster Treinamentos.
- **Direcionamento:** quem lê sobre treinamentos deve ser levado à **página de Cursos EAD**.
  - ⚠️ **Link do curso:** a cliente confirma com o desenvolvedor e nos passa o link correto.
    **Aguardando.** Por ora, apontar para `cursos.previsio.com.br`.
- **Reformulação do EAD (WooCommerce + Asaas + Moodle):** a loja de cursos está com
  visual antigo. **Escopo à parte** (é WordPress, fora do site Astro) — planejar
  redesign no mesmo padrão. **Não é parte desta rodada; sinalizar prazo próprio.**

## 6. Ferramenta de PDF (opendataloader) ⚙️

- `opendataloader-pdf` **instalado** (pip, global — vale para próximas sessões).
- ⚠️ **Precisa de Java 11+** para rodar (não está instalado na máquina). Quando for
  usar em PDFs, instalamos o Java. Para os materiais desta rodada usei `python-pptx`
  (os informativos eram .pptx, não .pdf).

## 7. Pendências do cliente (aguardando)

- Arquivo novo da **logo** sem "Meio Ambiente".
- **Link correto** da página de Cursos EAD (confirmação do desenvolvedor).
- **Autorizações** dos logos de clientes.
- **Mais fotos** de projetos em andamento.
- Confirmar **prazo** para alinharmos a execução.

---

## Resumo — o que dá para executar já (não depende do cliente)

1. Subtítulo → "Segurança do Trabalho" (texto).
2. CNPJ + RT (Rodrigo, CREA-RS 113630) nas páginas e schema.
3. Siglas por extenso.
4. Ocultar logos de clientes (stand-by).
5. Trocar heros de NR-12 por fotos reais + seção Antes/Depois.
6. Preencher /servicos/manutencao e enriquecer NR-10/PIE/PCA/PPR/LTIP com o conteúdo real.
7. Bloco de 3 modalidades nos treinamentos.
8. Corrigir capas de artigos com logo em fundo preto.

## Depende do cliente

- Logo nova (imagem) · Link do EAD · Autorização de logos · Fotos adicionais ·
  Redesign da loja EAD (escopo próprio).
