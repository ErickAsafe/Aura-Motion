# Spec Impact Matrix — Aura Motion

Esta matriz analisa como alterações em determinados módulos do pipeline impactam os outros (Rastreabilidade).

| Componente Modificado | Componentes Impactados (Cascata) | Risco de Quebra | Motivo |
|-----------------------|---------------------------------|-----------------|--------|
| **Planner** | Script Writer, Visuals, GSAP Coder | Alto | Muda a contagem e temporização das cenas. Quebra a estrutura da animação se o tempo não casar. |
| **Script Writer** | GSAP Coder, QA | Médio | Locução maior que a cena exige esticar o tempo (re-sync no GSAP). |
| **Visuals** | GSAP Coder, QA | Baixo/Médio | Cores e fontes novas podem causar text-overflow, ativando o QA. |
| **Remotion+GSAP Coder**| QA Director, Render final | Alto | Erros no `tl.seek` quebram o vídeo final, travando o render (black screen ou sem movimento). |
| **Time Trick Logic** | GSAP Coder | Crítico | Se o cálculo `frame / fps` for alterado incorretamente, o vídeo fica assíncrono ou estático. |

## Escala de Confiança
🟢 CONFIRMADO
