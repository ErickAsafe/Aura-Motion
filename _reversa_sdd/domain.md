# Domínio e Regras de Negócio — Aura Motion

## 1. Glossário de Domínio (Ubiquitous Language)
- **Aura Motion**: Framework para criação de motion graphics de alto impacto via pipeline de IA.
- **Planner (Diretor de Criação)**: Agente responsável por quebrar o conceito em uma timeline (cenas e tempos).
- **Script Writer (Copywriter)**: Agente que escreve a copy da narração e textos de apoio.
- **Visuals (Diretor de Arte)**: Agente que define paleta de cores, ícones e referências visuais.
- **Remotion GSAP (Motion Designer)**: Agente que orquestra a animação da cena via GSAP sincronizado com Remotion.
- **QA Director (QA Visual)**: Agente de inspeção visual automatizada (arruma z-index, textos cortados).
- **Time Trick**: Técnica de paralisar o *ticker* nativo do GSAP e atrelar o avanço do tempo aos *frames* do Remotion.
- **Glassmorphism**: Princípio estético central (UI com desfoque e transparência).

## 2. Regras de Negócio Implícitas
- 🟢 **Orquestração de Agentes**: O processo de criação obedece estritamente a um modelo em cascata colaborativo (Ideação -> Roteiro -> Arte -> Animação -> QA).
- 🟢 **Sincronismo de Tempo**: O motor de animação web (GSAP) não pode rodar solto. Ele deve ser controlado frame a frame via `tl.seek(frame / fps)` para permitir a gravação via Remotion.
- 🟢 **Estética Obrigatória**: Elementos visuais devem seguir o Minimalismo e Glassmorphism, além de manter movimentação contínua (ex: respiração/loops) e transições suaves de In/Out.
- 🟡 **Estrutura do Projeto**: A saída final do código deve habitar a pasta `/src` de um projeto inicializado com `create-video` do Remotion.

## Escala de Confiança
🟢 CONFIRMADO (Evidente no `README.md` e `cachorrinho.html`)
🟡 INFERIDO (Inferido pela descrição do setup no README)
🔴 LACUNA (Nenhuma lacuna severa identificada no escopo principal)
