# Histórias de Usuário (User Stories) - Aura Motion

Aqui documentamos os fluxos macro extraídos dos requisitos do framework.

## 1. Fluxo de Geração de Vídeo

- **Como** um criador de conteúdo / Diretor,
- **Quero** informar apenas um tema de vídeo no prompt,
- **Para que** o conjunto de agentes de IA pesquise, roterize e gere automaticamente o código de renderização.

**Critérios de Aceitação:**
- O Planner cria a divisão em cenas automaticamente sem minha ajuda manual.
- O Script Writer cria falas que cabem dentro do tempo (Duração de locução x Duração da Cena).
- O GSAP Coder atrela corretamente a animação ao fluxo do Remotion (`tl.seek`).
- O sistema me notifica para eu rodar `npm run build` ao fim.

## 2. Fluxo de Inspeção (QA Automático)

- **Como** um Diretor,
- **Quero** que os agentes validem o próprio código gerado,
- **Para que** eu não precise consertar manualmente divs vazando na tela ou animações fora de posição.

**Critérios de Aceitação:**
- O agente `aura-qa-director` analisa as lógicas do Tailwind.
- Ele ajusta propriedades problemáticas de alinhamento antes do render final.
