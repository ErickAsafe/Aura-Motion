# Aura Motion Framework

Bem-vindo ao **Aura Motion**! Este é um framework desenhado para aproveitar toda a flexibilidade de motores web puros (HTML, GSAP, D3) na criação de motion graphics de alto impacto através de um pipeline automatizado de inteligência artificial.

## O Que É?

O Aura Motion transforma PDFs, ideias e documentações em animações HTML deslumbrantes que, em seguida, são convertidas programaticamente em arquivos de vídeo reais (`.mp4`). Os agentes colaboram para extrair roteiros, definir animações e programar a renderização visual.

## Pipeline de Agentes

O framework é coordenado pelos seguintes agentes (definidos em `.agents/skills/`):

1. **`aura-motion-planner` (Diretor de Criação):** Quebra o conceito em uma timeline (cenas e tempos).
2. **`aura-script-writer` (Copywriter):** Escreve a copy da narração e os textos de apoio.
3. **`aura-visuals` (Diretor de Arte):** Define as cores, ícones e referências de imagens/vetores.
4. **`aura-remotion-gsap` (Motion Designer):** Escreve o código final envolto em componentes React (Remotion) e orquestra a animação da cena via GSAP (sincronizando o tempo do GSAP com os frames do Remotion).
5. **`aura-qa-director` (QA Visual):** Inspeciona o código construído caçando quebras de layout, bugs de z-index e textos cortados, arrumando tudo antes do render final.

## Como Usar

O fluxo de trabalho funciona melhor com uma IA operadora (como Claude Desktop, Claude Code ou Antigravity):

1. **Peça uma nova apresentação:** "Crie um vídeo sobre [TEMA] usando o Aura Motion."
2. **Passe pela Ideaçāo:** O `planner` e o `script-writer` vão gerar um arquivo `video_plan.yml` (ou um artefato similar).
3. **Revisão:** Aprove o roteiro e os tempos das cenas.
4. **Build:** O `aura-remotion-gsap` gerará as composições React na pasta `/src` do Remotion.

## Renderização para MP4

Com a fusão tecnológica, a renderização volta a usar o motor ultra-veloz e de alta qualidade do Remotion:

```bash
npm run build
```

## Setup Inicial (Projeto Base)

Para hospedar o código gerado pelo `aura-remotion-gsap`, você precisa inicializar um repositório Remotion e instalar as bibliotecas matemáticas web:

```bash
npx create-video@latest meu-projeto
cd meu-projeto
npm install gsap d3
```

Depois disso, o builder pode escrever diretamente na pasta `src/` as sequências animadas.

---
*Desenvolvido em colaboração iterativa usando a regra global de AGENTS.*
