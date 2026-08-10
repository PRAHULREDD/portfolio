import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const containerRef = useRef<Container | null>(null);
  
  // States for responsive particle configuration
  const [particleCount, setParticleCount] = useState(80);
  const [linkDistance, setLinkDistance] = useState(180);
  const [enableHover, setEnableHover] = useState(true);
  const [enableMove, setEnableMove] = useState(true);

  useEffect(() => {
    // 1. Initialize tsParticles engine
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // 2. Detect device width and prefers-reduced-motion for optimization
    const handleResizeAndMotion = () => {
      const width = window.innerWidth;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Handle reduced motion
      if (prefersReducedMotion) {
        setEnableMove(false);
        setEnableHover(false);
        setParticleCount(25); // low static count
        return;
      }

      setEnableMove(true);

      // Handle responsiveness
      if (width < 768) {
        // Mobile Layout: low particle count, shorter link range, no hover calculations
        setParticleCount(20);
        setLinkDistance(100);
        setEnableHover(false);
      } else if (width >= 768 && width < 1024) {
        // Tablet Layout: medium particle count, medium links, hover disabled
        setParticleCount(45);
        setLinkDistance(130);
        setEnableHover(false);
      } else {
        // Desktop Layout: full features
        setParticleCount(80);
        setLinkDistance(180);
        setEnableHover(true);
      }
    };

    handleResizeAndMotion();
    window.addEventListener("resize", handleResizeAndMotion);

    // 3. Page Visibility API to pause rendering when the tab is hidden
    const handleVisibilityChange = () => {
      if (!containerRef.current) return;
      if (document.hidden) {
        containerRef.current.pause();
      } else {
        containerRef.current.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResizeAndMotion);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    containerRef.current = container || null;
    
    // Safety check visibility on load
    if (document.hidden && container) {
      container.pause();
    }
  };

  if (!init) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60, // capped at 60 FPS to save CPU and GPU cycles
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: enableHover,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 220,
                links: {
                  opacity: 0.6,
                  color: "#22C55E"
                },
              },
            },
          },
          particles: {
            color: {
              value: "#22C55E",
            },
            links: {
              color: "#22C55E",
              distance: linkDistance,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: {
              direction: "none",
              enable: enableMove,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.6, // slightly slower for a premium, non-distracting feel
              straight: false,
            },
            number: {
              density: {
                enable: false, // disable automatic density calculations to enforce explicit counts
              },
              value: particleCount,
            },
            opacity: {
              value: 0.25,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
