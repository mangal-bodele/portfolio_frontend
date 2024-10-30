import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#ffffff",
          },
          size: {
            value: 5,
          },
          move: {
            enable: true,
            speed: 3,
          },
        },
      }}
    />
  );
}

export default ParticleBackground;
