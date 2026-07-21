# Plano de Keywords — Previsio Engenharia

> Planejamento de palavras-chave para orientar quais páginas criar e como
> estruturá-las, pensando em SEO e GEO. Baseado no inventário real das 212 páginas
> de serviço + 15 artigos já existentes (crawl de 21/07/2026) e nas prioridades do
> briefing. **Ressalva honesta:** não temos ainda dados de volume de busca (sem
> acesso ao Google Search Console nem a ferramenta de keyword) — este plano é de
> **arquitetura e intenção**, não de volume. A validação de volume/dificuldade
> deve vir depois, com o Keyword Planner ou o GSC (§8).

---

## 1. O que já está coberto (o ponto de partida)

O site atual **já tem cobertura de cauda longa muito ampla** — 212 páginas de
serviço distribuídas em 19 clusters de norma. Isso é um ativo, não um problema. O
plano NÃO é criar centenas de páginas novas do zero; é:

1. **Manter e enriquecer** o que existe (feito na v1 — cada página ganhou resposta
   direta + FAQ + estrutura).
2. **Preencher as lacunas de intenção** que hoje quase não existem — sobretudo o
   conteúdo **informacional** (topo de funil), que é onde estão o maior ganho de
   GEO e o tráfego que ainda não capturamos.

### Distribuição atual por intenção (contagem real por cluster)

| Cluster | Total | Laudo | Projeto/Adequação | Treinamento | Consultoria | "Empresa" |
|---|---|---|---|---|---|---|
| NR-12 | 32 | 5 | 6 | 4 | 5 | 0 |
| NR-10 | 21 | 8 | 9 | 1 | 0 | 0 |
| PGR | 17 | 0 | 5 | 1 | 0 | 0 |
| SPDA | 15 | 1 | 4 | 0 | 0 | 0 |
| NR-35 | 14 | 1 | 3 | 1 | 0 | 0 |
| CIPA/SESMT | 14 | 0 | 1 | 1 | 6 | 3 |
| eSocial | 14 | 0 | 0 | 0 | 1 | 0 |
| NR-11 | 12 | 2 | 2 | 4 | 0 | 0 |
| Químicos | 12 | 3 | 0 | 2 | 0 | 0 |
| Insalubridade | 12 | 11 | 0 | 0 | 0 | 0 |
| Higiene | 10 | 1 | 3 | 3 | 0 | 0 |
| Emergência | 7 | 1 | 5 | 0 | 0 | 0 |
| Treinamentos | 7 | 0 | 0 | 7 | 0 | 0 |
| Respiratória | 6 | 0 | 2 | 0 | 0 | 0 |
| Ergonomia / Manutenção / PPRAMP / NR-33 / LOTO | 4 cada | — | — | — | — | — |

**Leitura:** a cobertura é forte em intenção **transacional** (laudo, projeto,
adequação) e **comercial** (consultoria, "empresa de..."). É fraca em intenção
**informacional** (perguntas) — que é a lacuna a atacar.

---

## 2. Mapa de intenção por tipo de página

Toda keyword cai em uma destas quatro intenções. A estratégia é ter conteúdo para
cada uma, sem canibalizar.

| Intenção | Exemplo de keyword | Página que atende | Status |
|---|---|---|---|
| **Transacional** (fundo de funil, quer contratar) | "laudo nr12", "adequação de máquinas nr12", "projeto spda" | páginas de serviço `/laudo-nr12`, `/adequacao-nr12` | ✅ amplo |
| **Comercial** (compara fornecedores) | "empresa de adequação nr12", "consultoria segurança do trabalho" | `/empresa-adequacao-nr`, `/consultoria-nr12` | ✅ existe |
| **Informacional** (quer entender) | "o que é nr12", "quais máquinas precisam de nr12", "quanto custa adequação nr12", "como adequar máquina antiga" | **quase inexistente** — só 15 artigos | 🔴 **lacuna** |
| **Local** (busca por região) | "adequação nr12 são leopoldo", "segurança do trabalho vale do sinos" | disperso nos blocos de cidade | ⚠️ frágil |

---

## 3. Prioridade por cluster (ordem do briefing)

O dono definiu o foco: **"tem um monte de soluções, mas a gente vai sempre focar
na NR-12"**. A ordem de investimento em conteúdo deve seguir isso:

1. **NR-12 — máquinas** (carro-chefe). Todo o funil, do artigo "o que é" ao "laudo".
2. **PGR / NR-01 + riscos psicossociais** e **eSocial** (2º foco declarado; driver
   regulatório forte).
3. **Automação / retrofit / intertravamento** (dentro do escopo NR-12 — é o
   diferencial "projeta, executa e atesta").
4. **NR-10 / PIE / laudos elétricos**.
5. **SPDA / aterramento** (bom volume transacional, já bem coberto).
6. **Demais clusters** — manutenção do que existe, sem investir em conteúdo novo
   agora.

---

## 4. Arquitetura de keyword por cluster (modelo pilar → cauda)

O modelo é sempre o mesmo: **1 pilar** (head term, informacional-comercial) que
distribui autoridade para as **páginas-folha** (long-tail transacional). Exemplo com
NR-12:

```
PILAR  /servicos/nr-12                → "nr12", "norma regulamentadora 12", "segurança em máquinas"
  ├── /adequacao-nr12                 → "adequação nr12", "adequação de máquinas"
  ├── /apreciacao-riscos-nr12         → "apreciação de risco nr12", "análise de risco máquina"
  ├── /projeto-nr12                   → "projeto nr12", "projeto executivo de segurança"
  ├── /laudo-conformidade-nr12        → "laudo de conformidade nr12"
  ├── /inventario-maquinas-nr-12      → "inventário de máquinas nr12"
  └── /treinamento-nr12               → "treinamento nr12"
```

Cada folha mira **uma intenção transacional específica** — é assim que a duplicação
do site antigo se resolve: cada página tem uma keyword-alvo distinta, com conteúdo
próprio (já feito na v1). O pilar não compete com as folhas; ele responde a pergunta
ampla e linka para elas.

**Regra anti-canibalização:** uma keyword-alvo por página. Se duas páginas miram o
mesmo termo (ex. `/laudo-nr12` vs `/laudo-adequacao-nr12`), diferenciar o ângulo no
conteúdo (feito) ou, no futuro com dados, consolidar via 301 a mais fraca na mais
forte.

---

## 5. Lacunas — páginas a CRIAR (o foco do trabalho novo)

Aqui está o que ainda não existe e vale criar. Priorizado por impacto em NR-12 e por
ganho de GEO.

### 5.1 Conteúdo informacional / perguntas (maior lacuna, maior ganho de GEO)

Páginas ou artigos que respondem à pergunta direta — formato ideal para featured
snippet e citação por IA. Sugestões de keyword-alvo (validar volume depois):

- "o que é NR-12" · "para que serve a NR-12"
- "quais máquinas precisam de adequação NR-12"
- "quanto custa a adequação de máquinas" *(sem preço fixo — explicar o que define o custo)*
- "como adequar uma máquina antiga à NR-12"
- "diferença entre apreciação e análise de risco"
- "o que é ART e por que o laudo precisa dela"
- "NR-12 x NR-10: qual se aplica ao painel elétrico"
- "checklist de conformidade NR-12" *(pode virar isca de lead — o autodiagnóstico da LP-01 já é isso)*

Estes entram como **artigos no blog** (`/artigos/<slug>`), não como novas páginas de
serviço — mantém a separação de funil e não canibaliza o transacional.

### 5.2 Reativar e ampliar o blog

O blog tem **15 posts, último de março/2025**. É o canal natural do informacional. Um
calendário de 2–4 posts/mês cobrindo as perguntas acima, cada um linkando para a
página de serviço correspondente, alimenta topo de funil + GEO + malha interna.

### 5.3 Automação / retrofit (diferencial declarado, hoje mal coberto)

O briefing aponta "automação de segurança" (intertravamento, sensores, CLP de
segurança) como diferencial "projeta, executa e atesta". Isso está diluído. Vale uma
página de serviço dedicada — ex. keyword "retrofit de máquinas nr12", "intertravamento
de segurança", "modernização de painel elétrico" — ancorada no que a empresa de fato
faz. **Confirmar escopo com o cliente antes** (é serviço da Previsio ou da CODA?).

### 5.4 Local — com cuidado

Busca local existe ("adequação nr12 são leopoldo", "segurança do trabalho vale do
sinos"). **NÃO** recriar as 600 páginas de cidade (padrão doorway, risco de
penalização). Em vez disso:
- `LocalBusiness` schema com `areaServed` nas regiões reais (feito na /contato).
- No máximo **poucas páginas locais genuínas** para as praças de fato atendidas
  (São Leopoldo, Vale do Sinos, Porto Alegre, e SP se houver operação lá — o briefing
  cita fiscalização forte em SP).
- O bloco de cidades atual fica preservado (recolhido), mas não é a estratégia local.

---

## 6. Dimensão GEO / AEO (otimização para IA)

O que move citação por IA é conteúdo bem estruturado — já aplicado na v1:
- **Resposta direta no topo** de cada página (a pergunta como H2, resposta em 40–60
  palavras). ✅
- **FAQ** com schema. ✅
- **Fontes normativas citadas** (NR-12, ISO 13849, NBR onde aplicável). ✅ parcial
- **Autoria com engenheiro responsável + CREA** — pendente (bloqueador do cliente). É
  E-E-A-T real neste nicho.
- **Dados originais** (nº de não-conformidades mais comuns, prazos médios) — seria o
  conteúdo "não-commodity" que ninguém no nicho tem. Só com dados reais do cliente.

O informacional da §5.1 é o que mais amplifica o GEO — perguntas com resposta direta
são exatamente o que os motores de IA extraem.

---

## 7. Não fazer (armadilhas)

- ❌ Recriar páginas de cidade em massa (doorway / scaled content).
- ❌ Criar página nova mirando keyword que uma página existente já cobre (canibalização).
- ❌ Inventar número de volume/dificuldade — sem ferramenta, é chute.
- ❌ Prometer preço/prazo fixo em conteúdo ("adequação em X dias") sem o cliente confirmar.

---

## 8. Próximos passos

1. **Validar volume e dificuldade** das keyword-alvo desta lista com o Google Keyword
   Planner (grátis com conta de Ads) — priorizar por volume × facilidade.
2. **Verificar o GSC** (assim que houver acesso) — ele mostra as queries reais que já
   trazem impressão e as posições 11–20 (quase na 1ª página) — o alvo mais barato.
3. **Calendário editorial do blog** — 8–12 pautas informacionais de NR-12 para os
   próximos meses, a partir da §5.1.
4. **Confirmar o escopo de automação/retrofit** com o cliente antes de criar a página
   da §5.3.
5. Cruzar com as pendências de `site/PERGUNTAS-CLIENTE.md` (subtítulo da marca,
   RT+CREA para autoria E-E-A-T).
