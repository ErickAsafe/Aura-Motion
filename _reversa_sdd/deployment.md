# Diagrama de Deployment — Aura Motion

A infraestrutura não reside em nuvem, mas sim no ambiente local do criador via CLI (Node.js/React).

```mermaid
flowchart TD
    subgraph Local_Developer_Machine [Máquina Local]
        subgraph Terminal
            CLI_LLM[Claude Code / IA CLI]
            CLI_NPM[NPM Scripts]
        end
        
        subgraph FileSystem [Sistema de Arquivos]
            Repo[Aura Motion Repo]
            Src[Código-fonte /src]
            OutputMP4[output.mp4]
        end
        
        subgraph Remotion_Engine [Motor de Renderização]
            Headless_Chrome[Headless Chrome]
            FFmpeg[FFmpeg]
        end
    end

    CLI_LLM -- "Grava arquivos" --> Src
    CLI_NPM -- "npm run build" --> Remotion_Engine
    Remotion_Engine -- "Captura quadros" --> Src
    Headless_Chrome -- "Imagens PNG/JPEG" --> FFmpeg
    FFmpeg -- "Costura vídeo" --> OutputMP4
```

## Configurações / Dependências
- **Node.js**: Necessário para rodar o ambiente Remotion.
- **Chrome/Chromium**: Utilizado pelo Remotion para renderizar o DOM em frames estáticos.
- **FFmpeg**: Utilizado localmente pelo Remotion para juntar os frames capturados em vídeo.

## Escala de Confiança
🟢 CONFIRMADO (Evidente pelas instruções de `create-video` e `npm run build` do Remotion)
