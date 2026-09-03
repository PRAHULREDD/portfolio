import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Zap, Compass, Sparkles } from 'lucide-react';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Editorial parallax for large background typography
  const watermarkY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.03, 0.03, 0]);

  // Fact cards enter from different depth planes
  const factCard1Y = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);
  const factCard2Y = useTransform(scrollYProgress, [0.25, 0.55], [50, 0]);
  const factCard3Y = useTransform(scrollYProgress, [0.3, 0.6], [60, 0]);
  const factCard4Y = useTransform(scrollYProgress, [0.35, 0.65], [70, 0]);

  // ═══ Editorial statement word-by-word scroll reveal (6 words, hooks explicit) ═══
  const statementWords = ['BUILDING', 'INTELLIGENT', 'SYSTEMS', 'AT', 'THE', 'EDGE.'];

  const w0o = useTransform(scrollYProgress, [0.05, 0.1], [0.08, 1]);
  const w0y = useTransform(scrollYProgress, [0.05, 0.1], [20, 0]);
  const w1o = useTransform(scrollYProgress, [0.09, 0.14], [0.08, 1]);
  const w1y = useTransform(scrollYProgress, [0.09, 0.14], [20, 0]);
  const w2o = useTransform(scrollYProgress, [0.13, 0.18], [0.08, 1]);
  const w2y = useTransform(scrollYProgress, [0.13, 0.18], [20, 0]);
  const w3o = useTransform(scrollYProgress, [0.17, 0.22], [0.08, 1]);
  const w3y = useTransform(scrollYProgress, [0.17, 0.22], [20, 0]);
  const w4o = useTransform(scrollYProgress, [0.21, 0.26], [0.08, 1]);
  const w4y = useTransform(scrollYProgress, [0.21, 0.26], [20, 0]);
  const w5o = useTransform(scrollYProgress, [0.25, 0.30], [0.08, 1]);
  const w5y = useTransform(scrollYProgress, [0.25, 0.30], [20, 0]);

  const wordOpacities = [w0o, w1o, w2o, w3o, w4o, w5o];
  const wordYs = [w0y, w1y, w2y, w3y, w4y, w5y];

  return (
    <section ref={sectionRef} className="pt-20 md:pt-32 pb-12 md:pb-16 px-6 bg-surface/30 relative overflow-hidden" id="about">
      {/* Ambient Gradient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Parallax-Moving Large Background Typography */}
      <motion.div
        style={{ y: watermarkY, opacity: watermarkOpacity }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none overflow-hidden"
      >
        <span className="font-headline text-[20vw] font-black tracking-tighter text-primary whitespace-nowrap">
          PROFILE
        </span>
      </motion.div>

      <div className="container-custom max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <Reveal direction="up">
            <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4 inline-block font-bold">
              PROFILE & BACKGROUND
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-section font-headline text-text-primary mb-4 tracking-tight font-black">
              About Me
            </h2>
          </Reveal>
        </div>

        {/* ═══ EDITORIAL STATEMENT — Scroll-Driven Word Reveal ═══ */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 max-w-4xl mx-auto">
            {statementWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                style={shouldReduceMotion ? {} : {
                  opacity: wordOpacities[i],
                  y: wordYs[i],
                }}
                className={`font-headline font-black tracking-tight leading-none ${
                  word === 'EDGE.'
                    ? 'text-5xl md:text-7xl lg:text-8xl text-primary'
                    : word === 'INTELLIGENT' || word === 'SYSTEMS'
                      ? 'text-5xl md:text-7xl lg:text-8xl text-text-primary'
                      : 'text-4xl md:text-6xl lg:text-7xl text-text-secondary'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column — Bio Storytelling */}
          <div className="lg:col-span-3 space-y-6">
            <Reveal direction="up" delay={0.2}>
              <div className="bg-surface/90 border border-border/80 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                {/* Top Telemetry Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/70 text-micro font-mono">
                  <span className="text-primary font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    ENGINEERING PROFILE // P. RAHUL REDDY
                  </span>
                  <span className="text-text-tertiary">
                    CLEARANCE: PRODUCTION READY
                  </span>
                </div>

                <div className="absolute top-10 right-6 p-4 text-primary/5 pointer-events-none">
                  <Compass className="w-40 h-40" />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-text-primary font-headline tracking-tight mb-4 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-primary" /> Engineering Philosophy & Focus
                </h3>

                <p className="text-body-large text-text-primary leading-relaxed mb-6 font-medium">
                  I specialize in <span className="text-primary font-semibold">Edge AI and Real-Time Computer Vision</span>,
                  shipping production deep learning models directly onto resource-constrained hardware.
                </p>

                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  With 6 months of production engineering experience across two industry internships, I've engineered
                  and deployed deep learning pipelines including YOLO object detection and FaceNet face recognition
                  systems on edge devices like the Raspberry Pi 5 with Hailo-8L NPU acceleration.
                </p>

                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  My work focuses on model optimization, quantization, and efficient deployment strategies that enable
                  real-time computer vision on low-power hardware. I've built complete ML pipelines from data collection
                  and augmentation through training and production deployment.
                </p>

                <div className="pt-6 border-t border-border/60">
                  <p className="text-base text-text-secondary leading-relaxed">
                    Currently pursuing <span className="text-text-primary font-semibold">B.Tech in AI & Data Science</span> at
                    Saveetha School of Engineering with an <span className="text-primary font-bold">8.5 CGPA</span>, actively seeking full-time opportunities in
                    ML Engineering, Computer Vision, or AI Development roles.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Key Facts with Independent Scroll Depth */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div style={shouldReduceMotion ? {} : { y: factCard1Y }}>
              <Reveal direction="left" delay={0.25}>
                <SpotlightCard className="!p-5 border-border/80 hover:border-primary/50 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-primary font-mono mb-1 font-bold tracking-wider uppercase">LOCATION</div>
                      <div className="text-base font-bold text-text-primary font-headline">Chennai, India</div>
                      <div className="text-xs text-text-secondary mt-1">Open to relocation & remote work</div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </motion.div>

            <motion.div style={shouldReduceMotion ? {} : { y: factCard2Y }}>
              <Reveal direction="left" delay={0.35}>
                <SpotlightCard className="!p-5 border-border/80 hover:border-primary/50 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-primary font-mono mb-1 font-bold tracking-wider uppercase">ACADEMICS</div>
                      <div className="text-base font-bold text-text-primary font-headline">B.Tech AI & Data Science</div>
                      <div className="text-xs text-text-secondary mt-0.5">Saveetha School of Engineering</div>
                      <div className="text-xs text-primary font-semibold mt-1">8.5 CGPA · 2023–2027</div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </motion.div>

            <motion.div style={shouldReduceMotion ? {} : { y: factCard3Y }}>
              <Reveal direction="left" delay={0.45}>
                <SpotlightCard className="!p-5 border-border/80 hover:border-primary/50 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-primary font-mono mb-1 font-bold tracking-wider uppercase">EXPERIENCE</div>
                      <div className="text-base font-bold text-text-primary font-headline">6 Months Total</div>
                      <div className="text-xs text-text-secondary mt-0.5">Pipra Solutions · RealMeds</div>
                      <div className="text-xs text-primary font-semibold mt-1">Production ML Systems</div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </motion.div>

            <motion.div style={shouldReduceMotion ? {} : { y: factCard4Y }}>
              <Reveal direction="left" delay={0.55}>
                <SpotlightCard className="!p-5 bg-primary/10 border-primary/40 hover:border-primary transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl text-primary border border-primary/30 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-primary font-mono mb-1 font-bold tracking-wider uppercase">STATUS</div>
                      <div className="text-base font-bold text-text-primary font-headline">Immediately Available</div>
                      <div className="text-xs text-text-secondary mt-1">Seeking full-time ML / CV engineering roles</div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
