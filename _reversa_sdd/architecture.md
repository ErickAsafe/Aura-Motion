# Arquitetura — Aura Motion

Aura Motion é um framework arquitetado para transformar planejamento em vídeos motion graphics utilizando agentes de Inteligência Artificial. A arquitetura de software combina componentes puros web com renderização server-side headless para entrega de arquivos `.mp4`.

## Visão Geral

O core técnico reside em uma composição de tecnologias web:
- **GSAP:** Para interpolação e controle de timelines.
- **Remotion (React):** Para renderização de frames em contêineres de vídeo consistentes, permitindo output em MP4.
- **Agentes IA (.agents/skills):** Atuam como o cérebro que escreve a pipeline do roteiro ao código.

## Principais Componentes e Fluxo de Dados
1. **Input:** O usuário fornece um tema ou documentação.
2. **Orquestração de Agentes:**
   - Planner -> Cria a estrutura de timeline.
   - Script Writer -> Elabora locução.
   - Visuals -> Define estética (Glassmorphism, Cores).
   - Motion Designer (Remotion + GSAP) -> Escreve o código final no `/src`.
   - QA Visual -> Faz as correções finais de CSS e layout.
3. **Renderização (Build):** O usuário executa `npm run build` e o Remotion gera o `.mp4` usando headless Chrome e FFmpeg.

## Decisões Críticas
- Substituição de Puppeteer Puro por Remotion devido à precisão frame-a-frame (Time Trick).
- Uso extensivo de HTML/CSS puro (Tailwind/Minimalismo) animado com GSAP.

## Escala de Confiança
🟢 CONFIRMADO
