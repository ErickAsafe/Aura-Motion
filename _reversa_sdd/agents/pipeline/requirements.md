# Requirements: Agents Pipeline

> Identificador: `003-pipeline`
> Data: `2026-06-26`
> Pasta da extração reversa: `_reversa_sdd/`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA / DÚVIDA

## 1. Resumo executivo

Esta unit descreve especificamente o sub-módulo (caso de uso) do **Pipeline de Planejamento**, coordenado pelo Diretor de Criação (Planner), Diretor de Arte (Visuals) e Copywriter (Script Writer). O objetivo é desenhar todo o esqueleto da animação, gerando o `video_plan.yml` (ou MD) antes do código.

## 2. Contexto a partir do legado

| Fonte | Trecho relevante | Confidência |
|-------|------------------|-------------|
| `README.md#pipeline-de-agentes` | 1. aura-motion-planner 2. aura-script-writer 3. aura-visuals | 🟢 |

## 3. Personas e cenários de uso

| Persona | Objetivo | Cenário-chave |
|---------|----------|---------------|
| `aura-motion-planner` | Mapear tempo do vídeo | Cria cenas com start/end times precisos |

## 4. Regras de negócio novas ou alteradas

1. **RN-01:** Nenhuma linha de código React ou HTML/GSAP pode ser iniciada antes que o script esteja aprovado. 🟡

## 5. Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de aceite | Confidência |
|----|-----------|------------|--------------------|-------------|
| RF-01 | Geração do Roteiro Base | Must | Arquivo de texto gerado contendo cenas e tempos. | 🟢 |

## 6. Requisitos Não Funcionais

| Tipo | Requisito | Evidência ou justificativa | Confidência |
|------|-----------|----------------------------|-------------|
| Integridade | Formato Específico | O Roteiro deve usar sintaxe amigável para parse do LLM no passo seguinte. | 🟡 |

## 7. Critérios de Aceitação

```gherkin
Cenário: Geração do planejamento
  Dado que um usuário insere um TEMA
  Quando o planner age
  Então ele retorna um modelo de dados textual claro da timeline
```

## 8. Prioridade MoSCoW

| Item | MoSCoW | Justificativa |
|------|--------|---------------|
| RF-01 | Must | Pré-requisito para o GSAP Coder |

## 9. Esclarecimentos
> Nenhuma sessão de dúvidas registrada ainda. Rode `/reversa-clarify` quando houver `[DÚVIDA]` pendente.

## 10. Lacunas
- 🟢 Resolvido: O artefato final do script será estritamente em `.json` para garantir robustez no parsing pelo Coder e facilidade de manipulação em React.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-06-26 | Versão inicial gerada por `/reversa-requirements` | reversa-writer |
