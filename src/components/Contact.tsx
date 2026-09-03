import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Mail, Github, Linkedin, Code2, ArrowUpRight } from 'lucide-react';
import Reveal from './motion/Reveal';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven background intensity
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const bgIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  // Pointer position for ambient glow orb
  const orbX = useMotionValue(0);
  const orbY = useMotionValue(0);

  const springOrbX = useSpring(orbX, { stiffness: 50, damping: 25 });
  const springOrbY = useSpring(orbY, { stiffness: 50, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || shouldReduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    orbX.set(e.clientX - rect.left);
    orbY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="section-padding bg-background relative overflow-hidden"
      id="contact"
    >
      {/* Scroll-Driven Background Intensity */}
      <motion.div
        style={{ opacity: bgIntensity, scale: bgScale }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,217,192,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_60%_60%,rgba(0,112,243,0.08),transparent_70%)]" />
      </motion.div>

      {/* Pointer-Tracking Ambient Orb */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full blur-[180px] z-0 hidden md:block"
        style={{
          left: springOrbX,
          top: springOrbY,
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          opacity: 0.3,
          background: 'radial-gradient(circle, rgba(0, 217, 192, 0.3) 0%, rgba(0, 112, 243, 0.15) 40%, transparent 75%)',
        }}
      />

      {/* Oversized Background Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none overflow-hidden opacity-[0.025]">
        <span className="font-headline text-[16vw] font-black tracking-tighter text-primary whitespace-nowrap">
          INITIATE CONTACT
        </span>
      </div>

      {/* Atmospheric grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00D9C015_1px,transparent_1px),linear-gradient(to_bottom,#00D9C015_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="container-custom max-w-4xl text-center relative z-10">
        {/* Section Header */}
        <Reveal direction="up" distance={40}>
          <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 mb-6 inline-block font-bold">
            INITIATE CONTACT
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1} distance={50}>
          <h2 className="text-section font-headline text-text-primary mb-6 tracking-tight font-black">
            Let's Connect & Build
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2} distance={50}>
          <p className="text-body-large text-text-secondary mb-14 max-w-2xl mx-auto leading-relaxed">
            Open to full-time opportunities in ML Engineering, Computer Vision, or AI Development.
            Based in India — open to relocation and remote work globally.
          </p>
        </Reveal>

        {/* Primary Email CTA — Cinematic Magnetic CTA */}
        <Reveal direction="up" delay={0.3} distance={60}>
          <div className="mb-16">
            <MagneticButton intensity={45}>
              <motion.a
                href="mailto:rahulreddyp24@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-xl px-12 py-5 rounded-full flex items-center justify-center gap-4 shadow-2xl shadow-primary/30 hover:shadow-[0_0_40px_#00D9C050] border border-primary/40 group transition-all relative overflow-hidden"
              >
                {/* Breathing glow pulse */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full pointer-events-none"
                />
                <Mail className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
                <span className="font-extrabold tracking-tight relative z-10">rahulreddyp24@gmail.com</span>
                <motion.div
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center relative z-10"
                >
                  <ArrowUpRight className="w-5 h-5 text-background" />
                </motion.div>
              </motion.a>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal direction="up" delay={0.4} distance={40}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {[
              { href: 'https://github.com/PRAHULREDD', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/rahulreddypulicharla', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
              { href: 'https://leetcode.com/u/PULICHARLARAHUL', icon: <Code2 className="w-5 h-5" />, label: 'LeetCode' },
            ].map((link) => (
              <div key={link.label}>
                <MagneticButton intensity={30}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3.5 px-8 py-4 bg-surface/90 border border-border/90 rounded-full hover:border-primary/60 hover:text-primary hover:bg-surface hover:-translate-y-0.5 hover:shadow-lg transition-all text-text-secondary backdrop-blur-xl shadow-xl font-bold text-base group"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </MagneticButton>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ═══ FINAL BRAND MARK — Cinematic Closing ═══ */}
        <Reveal direction="up" delay={0.5} distance={30}>
          <div className="mt-20 pt-12 border-t border-border/30">
            {/* Horizontal signature line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>

            {/* Identity mark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="text-center"
            >
              <div className="text-2xl font-headline font-black text-text-primary/60 tracking-tight mb-1">
                P. Rahul Reddy
              </div>
              <div className="text-xs font-mono text-primary/40 tracking-[0.25em] uppercase">
                Edge AI · Computer Vision · ML Engineering
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
