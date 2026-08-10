import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Flame, ExternalLink } from 'lucide-react';
import { CertificateCard, CertificateModal, CertificateData } from './CertificateComponents';

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
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="hackathons">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white font-headline"
            >
              Hackathons & Innovation
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium font-body pl-5"
          >
            Developing solutions for real-world space and technology challenges
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center">
          <div className="w-full md:max-w-md">
            {hackathonsData.map((hackathon, index) => (
              <div key={index} className="flex flex-col h-full">
                <CertificateCard cert={hackathon} onView={handleViewCert} />
                
                {/* Additional Hackathon Details Card overlaying below the generic certificate card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 bg-[#1E293B]/60 border border-white/5 rounded-2xl p-6 flex flex-col gap-3 flex-grow"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Flame className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase font-bold tracking-wider">Project Focus</span>
                  </div>
                  
                  <p className="text-slate-300 text-xs font-body leading-relaxed">
                    {hackathon.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {hackathon.tech?.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-white/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
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
