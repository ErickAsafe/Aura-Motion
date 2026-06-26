# agents/pipeline, Design Técnico

> Template do arquivo `design.md`. Foca no COMO a unit é construída, com base no código legado lido.

## Interface
Prompt interativo no CLI do Agente.

| Passo | Entrada | Saída |
|--------|---------|-------|
| `planner` | Tema/Contexto | Estrutura de Cenas |
| `script-writer` | Estrutura de Cenas | Locução/Copy |
| `visuals` | Copy | Estética visual da Cena |

## Fluxo Principal
1. Orquestrador invoca `planner`.
2. Planner analisa as restrições e divide o TEMA em tempos (ex: Cena 1: 0s-3s).
3. Script-writer adiciona a voz e texto legível na tela.
4. Visuals adiciona paletas Glassmorphism.

## Fluxos Alternativos
- **Rejeição:** Usuário rejeita os tempos, os agentes refazem.

## Dependências
- LLM Context Window (deve suportar o histórico do chat inteiro).

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---------|---------------------|-----------|
| Separação do trabalho criativo em três perfis distintos (planner, script, visual) | `README.md:15` | 🟢 |

## Estado Interno
O plano em formação na janela de contexto do LLM.

## Observabilidade
Log visual de Chat.

## Riscos e Lacunas
- 🟢 O uso estrito do formato `.json` estruturado mitiga o risco de falhas de leitura no handoff para o GSAP Remotion Agent.
