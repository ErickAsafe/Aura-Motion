import { Composition } from "remotion";
import React from "react";

// Este arquivo será o registro dinâmico de todos os Motions criados pelas IAs

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={() => <div style={{ flex: 1, backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Bem-vindo ao Aura Motion</div>}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
