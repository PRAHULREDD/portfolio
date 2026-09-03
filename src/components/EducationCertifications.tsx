import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { GraduationCap, Award, Download, Shield, FileCheck } from 'lucide-react';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

export default function EducationCertifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 0.025, 0.025, 0]);

  // CGPA counter scroll animation
  const cgpaScale = useTransform(scrollYProgress, [0.15, 0.35], [0.8, 1]);
  const cgpaOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  const certifications = [
    {
      title: 'Introduction to Internet of Things (IoT)',
      issuer: 'NPTEL — IIT Kharagpur',
      date: 'Jan – Apr 2025',
      credentialId: 'NPTEL25CS44S243303391',
      badge: 'Elite Certificate',
      previewUrl: `${import.meta.env.BASE_URL}certifications/Introduction To Internet Of Things.png`,
      pdfUrl: `${import.meta.env.BASE_URL}certifications/Introduction To Internet Of Things.pdf`,
    },
    {
      title: 'Oracle Database SQL Certified Specialist',
      issuer: 'Oracle University',
      date: 'November 2024',
      credentialId: '100914473OCSSQL12C',
      previewUrl: `${import.meta.env.BASE_URL}certifications/Oracle SQL Certified Specialist.png`,
      pdfUrl: `${import.meta.env.BASE_URL}certifications/Oracle SQL Certified Specialist.pdf`,
    },
  ];

  return (
    <section ref={sectionRef} className="pt-6 md:pt-10 pb-12 md:pb-16 px-6 bg-surface/30 relative overflow-hidden" id="education">
      {/* Parallax Background Typography */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: watermarkY, opacity: watermarkOpacity }}
        className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none overflow-hidden"
      >
        <span className="font-headline text-[14vw] font-black tracking-tighter text-primary whitespace-nowrap">
          CREDENTIALS
        </span>
      </motion.div>

      <div className="container-custom max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <Reveal direction="up">
            <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-3 inline-block font-bold">
              ACADEMICS & CREDENTIALS
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-section font-headline text-text-primary tracking-tight font-black">
              Education & Certifications
            </h2>
          </Reveal>
        </div>

        {/* ═══ 3-COLUMN UNIFIED CREDENTIALS TRIO ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {/* ── CARD 01: FORMAL EDUCATION (Saveetha) ── */}
          <Reveal direction="up" delay={0.15} className="h-full">
            <SpotlightCard className="!p-0 border-border/80 hover:border-primary/50 transition-all shadow-xl h-full flex flex-col justify-between overflow-hidden">
              {/* Credential Header Bar */}
              <div className="bg-surface-raised/50 border-b border-border/60 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-text-tertiary">
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  <span>FORMAL EDUCATION</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 border border-primary/30 rounded-md text-micro text-primary font-bold">
                  <Shield className="w-3 h-3" /> Enrolled
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-text-primary text-lg mb-1 font-headline">
                        Saveetha School of Engineering
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-1">
                        B.Tech — AI & Data Science
                      </p>
                      <p className="text-xs text-text-tertiary font-mono">
                        Chennai, India · 2023 – 2027
                      </p>
                    </div>
                  </div>
                </div>

                {/* CGPA Readout Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-border/80 mt-4">
                  <span className="text-[10px] text-text-tertiary font-mono font-bold uppercase tracking-wider">
                    CUMULATIVE CGPA
                  </span>
                  <div className="text-2xl font-black text-primary font-headline">
                    8.5 <span className="text-xs text-text-secondary font-normal font-sans">/ 10</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* ── CARDS 02 & 03: VERIFIED CERTIFICATIONS ── */}
          {certifications.map((cert, idx) => (
            <Reveal key={idx} direction="up" delay={0.2 + idx * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <SpotlightCard className="!p-0 border-border/80 hover:border-primary/50 transition-all shadow-xl h-full flex flex-col justify-between overflow-hidden">
                  {/* Credential Header Bar */}
                  <div className="bg-surface-raised/50 border-b border-border/60 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-text-tertiary">
                      <FileCheck className="w-3.5 h-3.5 text-primary" />
                      <span>VERIFIED CREDENTIAL</span>
                    </div>
                    {cert.badge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 border border-primary/30 rounded-md text-micro text-primary font-bold">
                        <Award className="w-3 h-3" /> {cert.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-text-primary text-lg mb-1 font-headline">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-text-secondary mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-text-tertiary font-mono">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Download & Credential ID Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/80 mt-4">
                      <a
                        href={cert.pdfUrl}
                        download
                        className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/25 hover:border-primary transition-all group"
                      >
                        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                        PDF
                      </a>
                      {cert.credentialId && (
                        <span className="text-[10px] text-text-tertiary font-mono truncate max-w-[150px]" title={cert.credentialId}>
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
