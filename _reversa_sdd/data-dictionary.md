# Dicionário de Dados

Como o Aura Motion é um framework focado em automação e geração estática, **não há banco de dados** ou ORM.
Os dados trafegados limitam-se ao contexto do LLM durante os Handoffs.

## Entidades Virtuais
- **Handoff YAML**
  - `Tema`: string
  - `Angulo`: string
  - `Mídia`: file_path
  - `Roteiro`: string
- **Remotion VideoConfig**
  - `fps`: number (default: 30)
  - `frame`: number (0 to infinity)
