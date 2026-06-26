# agents, Design Técnico

> Template do arquivo `design.md`. Foca no COMO a unit é construída, com base no código legado lido.

## Interface
Via CLI ou Chat com IA usando prompts instrucionais e Markdown.

| Entidade | Papel no Pipeline | Formato |
|---------|---------|-------|
| `aura-motion-planner` | Quebra conceito na timeline | SKILL.md |
| `aura-script-writer` | Copywriting | SKILL.md |
| `aura-visuals` | Direção de Arte | SKILL.md |
| `aura-remotion-gsap` | Coding | SKILL.md |
| `aura-qa-director` | Teste | SKILL.md |

## Fluxo Principal
1. Orquestração inicia no chat.
2. Cada agente lê o `AGENTS.md` (regras globais).
3. Lêem sua própria `SKILL.md`.
4. Produzem o artefato local de sua fase.
5. Invocam o próximo via Prompt / Handoff.

## Fluxos Alternativos
- **Revisão Humana:** O fluxo pode parar no meio para pedir `[Aprovação Humana]` do roteiro (`video_plan.yml`).

## Dependências
- Interpretador de SKILLs (.agents / .claude format).

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---------|---------------------|-----------|
| Arquitetura em SKILLs locais | Pastas `.agents/skills/` | 🟢 |

## Estado Interno
O estado de geração (ex. arquivo `video_plan.yml`).

## Observabilidade
Logs do Terminal LLM.

## Riscos e Lacunas
- 🟡 Alucinação do LLM pode quebrar o handoff.
