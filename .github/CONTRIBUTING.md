# Guia de Contribuição - Aura Motion

Bem-vindo ao Aura Motion! Se você é um engenheiro de IA ou um desenvolvedor tradicional e deseja melhorar este ecossistema, siga as diretrizes abaixo.

## 1. Regras de Ouro

- **Nunca quebre o `Time Trick`:** A sincronização `tl.seek(frame / fps)` entre Remotion e GSAP é intocável. Alterar o core rendering behavior resultará em vídeos desincronizados com aúdio ou dropped frames.
- **JSON Contracts:** O contrato entre a parte criativa e a engenharia (`video_plan.json`) deve permanecer estruturado. Se adicionar um novo campo no Planner, certifique-se de instruir o Coder a lê-lo.

## 2. Como criar uma nova "Skill" (Novo Agente)

Se você quer plugar um novo robô (ex: um pesquisador de imagens `aura-image-hunter` que raspa bancos de fotos antes do Visuals agir), siga o padrão do **Agent Skills**:

1. Crie uma pasta em `.agents/skills/aura-image-hunter/`.
2. Adicione o manifesto principal `SKILL.md` (o "cérebro" do agente).
3. Defina as regras de Handoff (de onde ele recebe os dados e para quem ele manda - veja a rastreabilidade em `_reversa_sdd/`).
4. Atualize o `AGENTS_PIPELINE.md` com a inserção desse novo membro no organograma.

## 3. Pull Requests

- **Docs-first:** Se uma regra de negócio mudar, atualize a arquitetura ou crie um arquivo em `_reversa_sdd/` para revalidar com o `/reversa`.
- Use **Conventional Commits**: `feat: adicionado suporte a bezier no GSAP`, `fix: erro de CORS no Remotion Audio`.
- Realize sempre o `npm run build` local para garantir que a pipeline inteira gera o arquivo de saída sem FFMPEG errors.
