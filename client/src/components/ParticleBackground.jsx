import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Box } from "@chakra-ui/react";
export default function ParticleBackground({ id, hasLink, particles = 40 }) {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = {
    fullScreen: {
      enable: false,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: particles,
      },
      links: {
        enable: hasLink,
        distance: 150,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: {
          default: "bounce",
        },
      },
      size: {
        value: 1,
      },
    },
  };

  if (init) {
    return (
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        h={"100%"}
        zIndex={-1}
      >
        <Box height="100%" width="100%" position="relative" overflow="hidden">
          <Particles
            className="h-full"
            id={id}
            particlesLoaded={particlesLoaded}
            options={options}
            style={{
              position: "absolute", // Make sure it fills the Box
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    );
  }

  return <></>;
}
