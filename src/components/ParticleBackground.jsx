import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadBubblesPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  let options = {
    background: {
      color: {
        value: "#262F53",
      },
    },
    particles: {
      number: {
        value: 38,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#babbc7",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000",
        },
        polygon: {
          nb_sides: 6,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.4478208716513396,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0,
          sync: false,
        },
      },

      move: {
        enable: true,
        speed: 2,
        direction: "left",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  return (
    <div className="z-[-10]">
      <Particles
        className=""
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "bubbles",
          ...options,
        }}
      />
    </div>
  );
}
