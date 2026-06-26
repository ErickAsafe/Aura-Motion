# Aura Motion Framework

Bem-vindo ao **Aura Motion**! Este é um framework desenhado para aproveitar toda a flexibilidade de motores web puros (HTML, GSAP, D3) na criação de motion graphics de alto impacto através de um pipeline automatizado de inteligência artificial.

## O Que É?

O Aura Motion transforma PDFs, ideias e documentações em animações HTML deslumbrantes que, em seguida, são convertidas programaticamente em arquivos de vídeo reais (`.mp4`). Os agentes colaboram para extrair roteiros, definir animações e programar a renderização visual.

## Pipeline de Agentes

O framework é coordenado pelos seguintes agentes (definidos em `.agents/skills/`):

1. **`aura-motion-planner` (Diretor de Criação):** Quebra o conceito em uma timeline (cenas e tempos).
2. **`aura-script-writer` (Copywriter):** Escreve a copy da narração e os textos de apoio.
3. **`aura-visuals` (Diretor de Arte):** Define as cores, ícones e referências de imagens/vetores.
4. **`aura-gsap-animator` (Motion Designer):** Escreve o código final em HTML e anima as timelines via GSAP e D3.js.
5. **`aura-qa-director` (QA Visual):** Inspeciona o código construído caçando quebras de layout, bugs de z-index e textos cortados, arrumando tudo antes do render final.

## Como Usar

O fluxo de trabalho funciona melhor com uma IA operadora (como Claude Desktop, Claude Code ou Antigravity):

1. **Peça uma nova apresentação:** "Crie um vídeo sobre [TEMA] usando o Aura Motion."
2. **Passe pela Ideaçāo:** O `planner` e o `script-writer` vão gerar um arquivo `video_plan.yml` (ou um artefato similar).
3. **Revisão:** Aprove o roteiro e os tempos das cenas.
4. **Build:** O `gsap-animator` gerará as páginas `index.html` com a animação pronta.

## Renderização para MP4

Após o agente construir sua página web super animada, utilize uma ferramenta de captura (como `timecut` via Node.js) para transformar a página em vídeo de forma 100% autônoma e sincronizada com a timeline do GSAP:

```bash
npx timecut index.html --viewport=1920,1080 --fps=30 --duration=10 --output=scene1.mp4
```

## Setup Inicial (Projeto Base)

Para hospedar o código gerado pelo `remotion-builder`, você pode inicializar um repositório Remotion puro:

```bash
npx create-video@latest
# Escolha o template em branco (TypeScript/Tailwind)
```

Depois disso, o builder pode escrever diretamente na pasta `src/` as sequências animadas.

---
*Desenvolvido em colaboração iterativa usando a regra global de AGENTS.*
