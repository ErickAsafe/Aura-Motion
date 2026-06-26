# agents/gsap-remotion, Design Técnico

> Template do arquivo `design.md`. Foca no COMO a unit é construída, com base no código legado lido.

## Interface
Código React injetado pelo Agente.

| Componente Gerado | Entrada | Saída |
|--------|---------|-------|
| `Scene.tsx` | plano e locução | JSX com ref GSAP e useCurrentFrame |
| `Timeline.ts` | tempos do GSAP | Timeline estática pre-calculada |

## Fluxo Principal
1. O agente lê o plano visual e roteiro.
2. Escreve a sintaxe HTML com classes Tailwind CDN para os assets.
3. Cria a `gsap.timeline({ paused: true })`.
4. Atrela a timeline no `useEffect`:
   ```javascript
   const frame = useCurrentFrame();
   const { fps } = useVideoConfig();
   useEffect(() => {
     timeline.seek(frame / fps);
   }, [frame, fps, timeline]);
   ```

## Fluxos Alternativos
- **Correção de QA:** Se a renderização estourar os limites da caixa (verificado pelo QA Director), o componente é ajustado.

## Dependências
- `remotion`
- `gsap`

## Decisões de Design Identificadas

| Decisão | Evidência no código | Confiança |
|---------|---------------------|-----------|
| Time Trick com GSAP | `_reversa_sdd/code-analysis.md#3-módulo-gsapremotion-logic` | 🟢 |

## Estado Interno
Tempo (frames decorridos na renderização).

## Observabilidade
Progress bar do build do Remotion.

## Riscos e Lacunas
- Nenhuma severa identificada.
