import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { CheckCircle2, Download, Calendar, MapPin, Building } from 'lucide-react';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const beamScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    restDelta: 0.001,
  });

  // Traveling energy particle position
  const energyY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const energyOpacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  // Node activation thresholds
  const node1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0.3, 1]);
  const node1Scale = useTransform(scrollYProgress, [0.1, 0.25], [0.6, 1]);
  const node2Opacity = useTransform(scrollYProgress, [0.5, 0.65], [0.3, 1]);
  const node2Scale = useTransform(scrollYProgress, [0.5, 0.65], [0.6, 1]);

  const experiences = [
    {
      company: 'RealMeds Technologies Pvt. Ltd.',
      logo: 'RM',
      logoColor: 'bg-[#14b8a6] text-background',
      role: 'AI / ML Intern',
      duration: 'Oct 2025 – Dec 2025 · 3 months',
      location: 'Thiruvananthapuram, Kerala',
      tags: ['Python', 'Pandas', 'NumPy', 'Healthcare AI', 'EDA'],
      achievements: [
        'Engineered data preprocessing modules using Python, Pandas, and NumPy for medical ML pipelines',
        'Integrated ML models into RealMeds production system with healthcare data standards compliance',
        'Standardized dataset loading pipeline, reducing preprocessing latencies',
      ],
      certificate: {
        title: 'Internship Certificate — RealMeds Technologies',
        previewUrl: `${import.meta.env.BASE_URL}certifications/Realmeds Internship.png`,
        pdfUrl: `${import.meta.env.BASE_URL}certifications/Realmeds Internship.pdf`,
      },
    },
    {
      company: 'Pipra Solutions Pvt. Ltd.',
      logo: 'PS',
      logoColor: 'bg-primary text-background',
      role: 'AI / ML Intern',
      duration: 'Jul 2025 – Oct 2025 · 4 months',
      location: 'Hyderabad, India',
      tags: ['YOLO', 'FaceNet', 'SCRFD', 'Hailo-8L', 'Raspberry Pi 5', 'ONNX'],
      metrics: [
        { value: '93%', label: 'Recognition Accuracy' },
        { value: '+25pp', label: 'Improvement' },
      ],
      achievements: [
        'Engineered real-time face recognition pipeline achieving 93% accuracy at 6-meter range',
        'Boosted accuracy by 25 percentage points migrating from Haar Cascades to SCRFD + FaceNet',
        'Deployed custom YOLO models on Raspberry Pi 5 with Hailo-8L NPU (PyTorch → ONNX → HEF)',
        'Built end-to-end dataset pipeline with Label Studio for model retraining',
      ],
      certificate: {
        title: 'Internship Certificate — Pipra Solutions',
        previewUrl: `${import.meta.env.BASE_URL}certifications/Pipra Internship.png`,
        pdfUrl: `${import.meta.env.BASE_URL}certifications/Pipra Internship.pdf`,
      },
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="experience" ref={containerRef}>
      {/* Oversized Background Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none overflow-hidden opacity-[0.025]">
        <span className="font-headline text-[16vw] font-black tracking-tighter text-primary whitespace-nowrap">
          EXPERIENCE
        </span>
      </div>

      <div className="container-custom max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <Reveal direction="up" distance={40}>
            <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 mb-4 inline-block font-bold">
              CAREER TRACK
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1} distance={50}>
            <h2 className="text-section font-headline text-text-primary mb-4 tracking-tight font-black">
              Work Experience
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2} distance={50}>
            <p className="text-body-large text-primary font-extrabold text-xl">
              6 months · 2 internships · Production systems shipped
            </p>
          </Reveal>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Background Track */}
          <div className="absolute left-4 md:left-[19px] top-8 bottom-8 w-1 bg-surface-raised rounded-full hidden md:block" />

          {/* Scroll-Drawn Glowing Beam */}
          <motion.div
            style={{ scaleY: beamScaleY }}
            className="absolute left-4 md:left-[19px] top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-primary-hover to-secondary rounded-full origin-top hidden md:block shadow-[0_0_15px_#00D9C0]"
          />

          {/* Traveling Energy Particle */}
          <motion.div
            style={{ top: energyY, opacity: energyOpacity }}
            className="absolute left-[15px] md:left-[15px] w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#00D9C0,0_0_25px_#00D9C080] hidden md:block z-20"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const nodeOpacity = index === 0 ? node1Opacity : node2Opacity;
              const nodeScale = index === 0 ? node1Scale : node2Scale;

              return (
                <Reveal
                  key={index}
                  direction={index === 0 ? 'right' : 'left'}
                  delay={index * 0.15}
                  distance={70}
                >
                  <div className="relative md:pl-20">
                    {/* Animated Timeline Node */}
                    <div className="absolute left-0 top-8 hidden md:block z-10">
                      <motion.div
                        style={{ opacity: nodeOpacity, scale: nodeScale }}
                        className="relative flex h-10 w-10 items-center justify-center"
                      >
                        {/* Unified single pulse ring */}
                        <motion.span
                          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                          className="absolute inline-flex h-full w-full rounded-full bg-primary/25"
                        />
                        {/* Core dot */}
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-4 border-background shadow-[0_0_15px_#00D9C0]" />
                      </motion.div>
                    </div>

                    {/* Experience Card */}
                    <SpotlightCard className="border-border/90 hover:border-primary/50 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,217,192,0.12)] shadow-2xl relative overflow-hidden">
                      {/* Top Track Telemetry Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-border/70 text-micro font-mono">
                        <span className="text-primary font-bold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          TRACK // {index === 0 ? 'HEALTHCARE ML & DATA PIPELINES' : 'COMPUTER VISION & EDGE NPU SYSTEMS'}
                        </span>
                        <span className="text-text-tertiary">
                          LOG: 0{index + 1} // VERIFIED PRODUCTION
                        </span>
                      </div>

                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl ${exp.logoColor} shrink-0 shadow-xl border border-white/10`}
                          >
                            {exp.logo}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-black text-text-primary font-headline tracking-tight mb-1">
                              {exp.company}
                            </h3>
                            <div className="text-base md:text-lg text-primary font-bold mb-2 flex items-center gap-2 font-headline">
                              <Building className="w-4 h-4" /> {exp.role}
                            </div>
                            <div className="text-xs text-text-secondary flex flex-wrap items-center gap-2.5 font-mono font-medium">
                              <span className="flex items-center gap-1.5 bg-surface-raised px-2.5 py-1 rounded-md border border-border/80">
                                <Calendar className="w-3.5 h-3.5 text-primary" /> {exp.duration}
                              </span>
                              <span className="flex items-center gap-1.5 bg-surface-raised px-2.5 py-1 rounded-md border border-border/80">
                                <MapPin className="w-3.5 h-3.5 text-primary" /> {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metrics — Act 04 Proof Cards Treatment */}
                      {exp.metrics && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {exp.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="p-5 rounded-2xl bg-surface-raised/90 border border-primary/30 shadow-md hover:border-primary/50 transition-colors"
                            >
                              <div className="text-[10px] text-primary font-mono mb-1 font-bold tracking-wider uppercase">
                                {metric.label}
                              </div>
                              <div className="text-3xl lg:text-4xl font-black text-text-primary font-headline tracking-tight">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2.5 mb-6">
                        {exp.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.08, y: -2 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                            className="text-micro font-semibold text-text-secondary bg-surface-raised px-3.5 py-1.5 rounded-xl border border-border/80 hover:border-primary/50 hover:text-text-primary transition-all cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Achievements — Act 04 Engineering Proof Cards Treatment */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-xl bg-surface-raised/80 border border-border/80 hover:border-primary/40 transition-colors flex flex-col justify-start"
                          >
                            <div className="text-[10px] text-primary font-mono font-bold tracking-wider mb-2 flex items-center gap-1.5 uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              DELIVERABLE 0{i + 1}
                            </div>
                            <div className="text-xs text-text-secondary leading-relaxed font-body">
                              {achievement}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Certificate Footer */}
                      <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-xs text-text-secondary font-medium">
                            Verified Internship Certificate · Outstanding Performance
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={exp.certificate.pdfUrl}
                            download
                            className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover bg-primary/10 px-4 py-2.5 rounded-xl border border-primary/30 hover:border-primary active:scale-95 transition-all shadow-md"
                          >
                            <Download className="w-4 h-4" />
                            Download PDF
                          </a>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ═══ TIMELINE COMPLETION BADGE ═══ */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-surface/90 border border-primary/40 rounded-2xl backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 text-primary">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00D9C0]" />
                <span className="text-xl font-headline font-black">6</span>
              </div>
              <div className="w-px h-8 bg-border/50" />
              <div className="text-sm">
                <div className="text-text-primary font-bold">Months Production Experience</div>
                <div className="text-xs text-text-secondary">2 internships · 3 production systems shipped</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
