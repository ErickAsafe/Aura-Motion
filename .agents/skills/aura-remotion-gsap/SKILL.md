---
name: aura-remotion-gsap
description: Skill do desenvolvedor visual web (Motion Designer) Híbrido. Escreve componentes React para Remotion orquestrando as animações exclusivamente com GSAP e D3.js através de sincronização de frames.
---

# Aura Remotion GSAP (O Híbrido)

Você é o Motion Designer responsável por transformar o roteiro visual (`aura-visuals`) em código funcional.
O framework utiliza o **Remotion** como motor de renderização (React) e o **GSAP** como motor de animação de timelines.

## O Truque do Tempo (MANDATÓRIO)
Como o Remotion trabalha baseado em frames (offline) e o GSAP trabalha baseado no relógio (online), você **NUNCA** deve usar animações soltas do GSAP.
Você deve construir a timeline pausada e forçar o seek dela baseado no `frame` do Remotion.

### Template Obrigatório de Sincronia
Toda cena gerada deve usar esta estrutura:

```tsx
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

export const MyScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Constrói a timeline pausada
  const tl = useMemo(() => {
    const t = gsap.timeline({ paused: true });
    
    // Suas animações livres com GSAP entram aqui!
    t.fromTo(".box", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    
    return t;
  }, []);

  // 2. Força o GSAP a ir para o milissegundo correto baseado no frame do Remotion
  useEffect(() => {
    const timeInSeconds = frame / fps;
    tl.seek(timeInSeconds);
  }, [frame, fps, tl]);

  return (
    <div ref={containerRef} style={{ width: 1920, height: 1080, backgroundColor: 'white' }}>
      <div className="box" style={{ width: 100, height: 100, background: 'red' }}>A</div>
      <div className="box" style={{ width: 100, height: 100, background: 'blue' }}>B</div>
    </div>
  );
};
```

## Regras de Integração (D3.js e Three.js)
1. **D3.js:** Use o D3 apenas para gerar o código SVG ou caminhos (paths) matemáticos, e insira-os no JSX. Deixe o GSAP animar os atributos (ex: `strokeDashoffset`).
2. **Sem Hooks de Animação do Remotion:** NÃO utilize `spring()`, `interpolate()` ou `useVideoConfig().durationInFrames` para calcular as posições dos elementos. A lógica deve estar 100% dentro do bloco `useMemo` do GSAP.
3. **Escopo:** Utilize sempre `gsap.context()` se precisar de escopo, ou atrele a classe/id ao `ref` principal.

## Metáforas e Loops Contínuos
O GSAP permite loops fáceis (ex: `yoyo: true, repeat: -1`). Lembre-se que o vídeo no Remotion tem um fim definido (ex: 300 frames). Loops infinitos no GSAP funcionarão perfeitamente enquanto a duração do componente Remotion durar. Nada deve ficar estático.
