import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame } from 'lucide-react';
import { CertificateCard, CertificateModal, CertificateData } from './CertificateComponents';
import Reveal from './motion/Reveal';

export default function Hackathons() {
  const [activeCert, setActiveCert] = useState<CertificateData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hackathonsData: CertificateData[] = [
    {
      title: "Bharatiya Antariksh Hackathon 2025",
      issuer: "ISRO & Hack2Skill",
      date: "2025",
      credentialId: "2025H2S06BAH25-P06739",
      previewUrl: `${import.meta.env.BASE_URL}certifications/ISRO Bharatiya Antariksh Hackathon 2025.png`,
      pdfUrl: `${import.meta.env.BASE_URL}certifications/ISRO Bharatiya Antariksh Hackathon 2025.pdf`,
      achievement: "National Level Idea Submission",
      role: "Innovator",
      description: "Submitted an innovative idea addressing real-world challenges in space technology, satellites, and remote sensing applications for the national-level Bharatiya Antariksh Hackathon 2025 organized by ISRO.",
      tech: ["Edge AI", "Computer Vision", "Space Tech Research", "Analytical Problem Solving"]
    }
  ];

  const handleViewCert = (cert: CertificateData) => {
    setActiveCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-32 px-6 bg-background relative overflow-hidden" id="hackathons">
      {/* Oversized Background Typography Monogram */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none overflow-hidden opacity-[0.025]">
        <span className="font-headline text-[16vw] font-black tracking-tighter text-primary whitespace-nowrap">
          HACKATHONS & INNOVATION
        </span>
      </div>

      <div className="container-custom max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <Reveal direction="up">
            <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 mb-3 inline-block font-bold">
              NATIONAL COMPETITIONS
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-section font-headline text-text-primary mb-3 tracking-tight font-black">
              Hackathons & Innovation
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
              Developing solutions for real-world space and technology challenges
            </p>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center">
          <div className="w-full md:max-w-xl">
            {hackathonsData.map((hackathon, index) => (
              <Reveal key={index} direction="up" delay={0.15}>
                <div className="flex flex-col h-full">
                  <CertificateCard cert={hackathon} onView={handleViewCert} />
                  
                  {/* Additional Hackathon Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
                    className="mt-4 bg-surface/90 border border-border/80 rounded-2xl p-6 flex flex-col gap-3 flex-grow shadow-xl hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                      <Flame className="w-4 h-4" />
                      <span>Project Focus & Impact</span>
                    </div>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {hackathon.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {hackathon.tech?.map((t, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                          className="text-micro font-semibold text-text-secondary bg-surface-raised border border-border/80 px-3 py-1.5 rounded-lg hover:border-primary/50 hover:text-text-primary transition-colors cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal
        cert={activeCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
