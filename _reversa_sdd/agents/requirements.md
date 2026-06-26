# Requirements: Agents

> Identificador: `002-agents`
> Data: `2026-06-26`
> Pasta da extração reversa: `_reversa_sdd/`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA / DÚVIDA

## 1. Resumo executivo

A unit `agents` engloba a orquestração de todo o pipeline de geração automatizada de código HTML e GSAP usando inteligência artificial, desde a ideia até o arquivo gerado em disco para ser lido pelo Remotion.

## 2. Contexto a partir do legado

| Fonte | Trecho relevante | Confidência |
|-------|------------------|-------------|
| `_reversa_sdd/code-analysis.md#2-módulo-ai-agents-pipeline` | Os agentes são instruídos via .agents/skills e AGENTS.md. A arquitetura de automação depende da passagem de bastão (Handoff). | 🟢 |

## 3. Personas e cenários de uso

| Persona | Objetivo | Cenário-chave |
|---------|----------|---------------|
| Diretor / Usuário | Criar animações baseadas num prompt de texto inicial | Passa o tema no chat para o `aura-motion-planner` iniciar o pipeline. |

## 4. Regras de negócio novas ou alteradas

1. **RN-01:** Todos os agentes devem se submeter à diretriz global presente no `AGENTS.md`. 🟢
   - Origem no legado: `README.md#setup-inicial` e commit log.
   - Tipo: mantida

## 5. Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de aceite | Confidência |
|----|-----------|------------|--------------------|-------------|
| RF-01 | O pipeline de agentes deve suportar Handoff | Must | Cada agente sabe para quem passar a tarefa ao terminar seu arquivo | 🟢 |

## 6. Requisitos Não Funcionais

| Tipo | Requisito | Evidência ou justificativa | Confidência |
|------|-----------|----------------------------|-------------|
| Extensibilidade | Baseado em SKILLs Markdown | Agentes são plugáveis via `.agents/skills/<nome>` | 🟢 |

## 7. Critérios de Aceitação

```gherkin
Cenário: Inicialização de fluxo de agentes
  Dado um repositório configurado
  Quando invocado um agente Planner
  Então ele executa a sua skill e passa para o Script Writer
```

## 8. Prioridade MoSCoW

| Item | MoSCoW | Justificativa |
|------|--------|---------------|
| RF-01 | Must | Sem Handoff, o sistema morre. |

## 9. Esclarecimentos

> Nenhuma sessão de dúvidas registrada ainda. Rode `/reversa-clarify` quando houver `[DÚVIDA]` pendente.

## 10. Lacunas

Nenhuma.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-06-26 | Versão inicial gerada por `/reversa-requirements` | reversa-writer |
