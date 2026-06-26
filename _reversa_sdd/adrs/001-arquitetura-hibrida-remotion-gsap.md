# ADR 001: Arquitetura Híbrida (Remotion renderer + GSAP animator)

## Status
Aceito (Implementado na v2.0 do projeto)

## Contexto
Originalmente (v1.0), o Aura Motion baseava-se em um pipeline HTML puro com GSAP para animação, e usava o `aura-qa-director` (QA via Puppeteer) para capturar a saída. Esse modelo, no entanto, apresentava limitações de taxa de quadros, sincronia de áudio e limitações para renderizar `.mp4` de alta qualidade confiavelmente. O objetivo central é criar motion graphics programáticos que sejam convertidos para vídeo real.

## Decisão
Foi adotada uma Arquitetura Híbrida combinando o renderizador do Remotion (React) e o GSAP como motor de animação. O *ticker* (relógio) nativo do GSAP é interrompido e seu avanço passa a ser atrelado estritamente aos quadros do Remotion através da técnica de *Time Trick* (`tl.seek(frame / fps)`).

## Alternativas Consideradas
1. **Puppeteer Puro/FFmpeg**: Interceptar screenshots usando Puppeteer e costurar com FFmpeg.
   - *Motivo da rejeição*: Dificuldade de sincronia de áudio, gargalos de performance, e dropped frames em animações complexas.
2. **Lottie / Bodymovin**: Exportar via After Effects.
   - *Motivo da rejeição*: Foge do princípio "Código-primeiro" focado em Agentes IA; quebra o fluxo de geração programática direta.
3. **Puro Remotion (Interpolações Nativas)**: Usar apenas `interpolate` e `spring` do Remotion.
   - *Motivo da rejeição*: Muito verboso para timelines e sequências coreografadas (GSAP é o padrão ouro na indústria web para timelines complexas).

## Consequências
- **Positivas:** Permite que a IA gere animações web-baseadas que são perfeitamente passíveis de renderização via CLI (`npm run build`) para vídeos MP4 (4K, 60fps) perfeitamente suaves e sincronizados sem concorrência de frames.
- **Negativas/Limitações:** O código gerado deve obrigatoriamente estar em conformidade com o setup React do Remotion (`create-video`); a complexidade para o agente codificador (`aura-remotion-gsap`) aumenta, pois ele tem que gerenciar `useEffect` e a pausa do GSAP.

## Escala de Confiança
🟢 CONFIRMADO (Evidente no histórico do Git, skill `aura-remotion-gsap` e README)
