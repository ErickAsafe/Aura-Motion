# agents/pipeline, Tarefas de Implementação

> Template do arquivo `tasks.md`. Foca em uma sequência de tarefas executáveis para reimplementar a unit a partir do legado, com rastreabilidade ao código original.

## Pré-requisitos
- [x] O framework base (AGENTS.md) estar criado.

## Tarefas

- [ ] T-01, Implementar `aura-motion-planner`
  - Origem no legado: `README.md:15`
  - Critério de pronto: O prompt deste agente instruir divisão em timeline.
  - Confiança: 🟢

- [ ] T-02, Implementar `aura-script-writer`
  - Origem no legado: `README.md:16`
  - Critério de pronto: Gerar falas baseadas nos tempos do planner.
  - Confiança: 🟢

- [ ] T-03, Implementar `aura-visuals`
  - Origem no legado: `README.md:17`
  - Critério de pronto: Prompt focado em cores e ícones coerentes (Minimalismo).
  - Confiança: 🟢

## Tarefas de Teste
- [ ] TT-01, Executar fluxo Ideação inteiro e revisar o `video_plan`.

## Ordem Sugerida
1. Planner -> Script -> Visuals.

## Lacunas Pendentes (🔴)
- 🟢 Resolvido: Usaremos JSON para o plano do vídeo.
