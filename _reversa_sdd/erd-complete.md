# Diagrama ERD Completo — Aura Motion

Como o Aura Motion é um framework de renderização de vídeo e pipeline automatizado (e não um sistema de gestão de dados com banco de dados), ele não armazena dados transacionais (não há tabelas). Contudo, o "schema" abstrato de como a estrutura do vídeo (Timeline) se organiza pode ser mapeado como um modelo de dados hierárquico na memória.

```mermaid
erDiagram
    VIDEO_PROJECT ||--|{ SCENE : contains
    SCENE ||--|{ ASSET : uses
    SCENE ||--|| SCRIPT : has
    SCENE ||--|| ANIMATION_TIMELINE : controlled_by

    VIDEO_PROJECT {
        string title
        int duration_seconds
        string output_resolution
        int fps
    }
    
    SCENE {
        int sequence_number
        int start_frame
        int end_frame
        string background_style
    }
    
    SCRIPT {
        string narration_text
        string on_screen_text
    }
    
    ASSET {
        string type "imagem|vetor|icone"
        string source_url
    }
    
    ANIMATION_TIMELINE {
        string gsap_code
        float seek_progress
    }
```

## Escala de Confiança
🟢 CONFIRMADO (Inferido da mecânica descrita no fluxo de roteiro e animação)
