# Requirements: GSAP + Remotion Logic

> Identificador: `004-gsap-remotion`
> Data: `2026-06-26`
> Pasta da extração reversa: `_reversa_sdd/`
> Confidência: 🟢 CONFIRMADO, 🟡 INFERIDO, 🔴 LACUNA / DÚVIDA

## 1. Resumo executivo

O núcleo lógico do executor `aura-remotion-gsap`. É este agente (e a técnica utilizada por ele) que gera o código final executável unindo a animação web tradicional baseada em linha de tempo (GSAP) com o ambiente de frames rígidos do React (Remotion), gerando o `.mp4` liso.

## 2. Contexto a partir do legado

| Fonte | Trecho relevante | Confidência |
|-------|------------------|-------------|
| `_reversa_sdd/code-analysis.md#3-módulo-gsapremotion-logic` | O "truque do tempo" consiste em paralisar o ticker nativo... tl.seek(frame / fps) | 🟢 |
| `cachorrinho.html` | Exemplo prático de animação web complexa (`tlHead.seek...`) | 🟢 |

## 3. Personas e cenários de uso

| Persona | Objetivo | Cenário-chave |
|---------|----------|---------------|
| `aura-remotion-gsap` | Codificar a renderização | Cria componentes React no diretório `/src` do Remotion |

## 4. Regras de negócio novas ou alteradas

1. **RN-01:** O Ticker do GSAP **deve** estar desativado (`gsap.ticker.remove(gsap.updateRoot)`). 🟢
2. **RN-02:** O avanço da animação deve ser guiado pelo Hook `useCurrentFrame()` e `useVideoConfig()` do Remotion. 🟢

## 5. Requisitos Funcionais

| ID | Requisito | Prioridade | Critério de aceite | Confidência |
|----|-----------|------------|--------------------|-------------|
| RF-01 | Integração GSAP+Remotion | Must | Código gerado avança o tempo via `tl.seek()` no React `useEffect`. | 🟢 |
| RF-02 | Correção visual | Should | `aura-qa-director` revisa z-index no CSS Tailwind final gerado pelo Coder. | 🟡 |

## 6. Requisitos Não Funcionais

| Tipo | Requisito | Evidência ou justificativa | Confidência |
|------|-----------|----------------------------|-------------|
| Desempenho | Sincronia de Quadros | O método de seek garante 0 lost frames no render de MP4 (diferente do Puppeteer) | 🟢 |

## 7. Critérios de Aceitação

```gherkin
Cenário: Geração do código do vídeo
  Dado um arquivo video_plan aprovado
  Quando o aura-remotion-gsap executa
  Então ele injeta um arquivo .tsx na pasta src com GSAP atrelado a useCurrentFrame()
```

## 8. Prioridade MoSCoW

| Item | MoSCoW | Justificativa |
|------|--------|---------------|
| RF-01 | Must | Coração da Arquitetura Híbrida V2. |

## 9. Esclarecimentos
> Nenhuma sessão de dúvidas registrada ainda. Rode `/reversa-clarify` quando houver `[DÚVIDA]` pendente.

## 10. Lacunas
Nenhuma técnica, a lógica do `seek` foi validada na documentação.

## 11. Histórico de alterações

| Data | Alteração | Autor |
|------|-----------|-------|
| 2026-06-26 | Versão inicial gerada por `/reversa-requirements` | reversa-writer |
