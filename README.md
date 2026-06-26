# 🎬 Aura Motion

[![Documentação Oficial](https://img.shields.io/badge/📖_Ver_Documentação-Reversa_Docs-a855f7?style=for-the-badge)](docs/index.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Powered by GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](#)
[![Powered by Remotion](https://img.shields.io/badge/Remotion-0B0B0B?style=for-the-badge&logo=remotion&logoColor=white)](#)

> **O Futuro do Motion Graphics Autônomo** <br>
> Aura Motion é um framework híbrido que une a fluidez extrema das timelines do GSAP com o poder de compilação Frame-a-Frame do React Remotion, governado 100% por uma esteira de Agentes Autônomos de Inteligência Artificial.

---

## 📑 Sumário

- [Visão Geral](#-visão-geral)
- [A Arquitetura Híbrida (Time Trick)](#-a-arquitetura-híbrida)
- [Pipeline de Agentes Autônomos](#-pipeline-de-agentes-autônomos)
- [Guia Rápido de Instalação](#-guia-rápido-de-instalação)
- [Documentação Detalhada](#-documentação-detalhada)
- [Como Contribuir](#-como-contribuir)

---

## 👁️ Visão Geral

O Aura Motion foi criado para substituir métodos lentos e pesados de geração de vídeo. Em vez de abrir o Adobe After Effects ou lutar com Puppeteer, o Aura Motion utiliza IAs locais para desenhar um roteiro, orquestrar os tempos, construir componentes React e animá-los usando a alta performance do **GSAP (GreenSock Animation Platform)**, renderizando para `.mp4` impecáveis usando o **Remotion**.

---

## ⚙️ A Arquitetura Híbrida

Renderizar animações web (GSAP) em formato MP4 costumava causar quadros perdidos (dropped frames). O Aura Motion resolve isso paralisando a timeline nativa da web e forçando o progresso atrelado a um relógio estrito do React.

```javascript
// O "Time Trick" do Aura Motion
const frame = useCurrentFrame();
const { fps } = useVideoConfig();

useEffect(() => {
  // O GSAP avança apenas quando o Remotion permite
  timeline.seek(frame / fps); 
}, [frame, fps, timeline]);
```
Para mergulhar fundo nas entranhas visuais e de design desse sistema, consulte nosso [Documento de Arquitetura (ARCHITECTURE.md)](ARCHITECTURE.md).

---

## 🤖 Pipeline de Agentes Autônomos

O trabalho não é feito por você, é feito por uma agência de IA virtual contida na pasta `.agents/skills/`.

- 🧠 **Planner:** Divide o conceito criativo em blocos de tempo lógicos.
- ✍️ **Script Writer:** Desenvolve a narração e as copys visuais.
- 🎨 **Visuals:** Estabelece a paleta Glassmorphism e diretrizes de UI.
- 🧑‍💻 **GSAP Coder:** Escreve as lógicas do React (`useCurrentFrame`) e animações (`tl.to`).
- 🕵️ **QA Director:** Inspeciona anomalias no DOM e z-index antes de renderizar.

O handoff entre os agentes é feito **exclusivamente via JSON**, garantindo integridade de parse no último robô gerador. Leia mais no [Manifesto do Pipeline (AGENTS_PIPELINE.md)](AGENTS_PIPELINE.md).

---

## 🚀 Guia Rápido de Instalação

Para testar a infraestrutura base onde nossos robôs injetarão o código, inicialize o ambiente Remotion:

```bash
# 1. Crie o núcleo do Remotion
npx create-video@latest meu-projeto

# 2. Acesse a pasta
cd meu-projeto

# 3. Instale as bibliotecas matemáticas web core
npm install gsap d3
```

A partir desse momento, chame os Agentes IA e peça para criarem sua primeira cena na pasta `/src`!

```bash
# 4. Inicie o render da inteligência finalizada
npm run build
```

---

## 📚 Documentação Detalhada

Para facilitar o onboarding de times técnicos, o repositório foi escavado via **Reversa Framework** (ver pasta `_reversa_sdd/`). Abaixo, os principais guias gerados:

*   [**Arquitetura e Fluxos (ARCHITECTURE.md)**](ARCHITECTURE.md)
*   [**Especificação dos Agentes (AGENTS_PIPELINE.md)**](AGENTS_PIPELINE.md)
*   [**Portal Docs Visual**](docs/index.html)

---

## 🤝 Como Contribuir

Quer criar um novo Agente? Descobriu um bug no `Time Trick` do GSAP?
Leia nosso [Guia de Contribuição (.github/CONTRIBUTING.md)](.github/CONTRIBUTING.md) para entender como escrever novas *Skills* para o nosso time virtual.

---
*Built with ❤️ and Autonomous AI Agents.*
