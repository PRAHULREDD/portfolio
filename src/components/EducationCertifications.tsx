import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import { CertificateCard, CertificateModal, CertificateData } from './CertificateComponents';

export default function EducationCertifications() {
  const [activeCert, setActiveCert] = useState<CertificateData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iotCert: CertificateData = {
    title: "Introduction to Internet of Things (IoT)",
    issuer: "NPTEL — IIT Kharagpur",
    date: "Jan – Apr 2025",
    credentialId: "NPTEL25CS44S243303391",
    previewUrl: `${import.meta.env.BASE_URL}certifications/Introduction To Internet Of Things.png`,
    pdfUrl: `${import.meta.env.BASE_URL}certifications/Introduction To Internet Of Things.pdf`,
    verifyUrl: "https://nptel.ac.in/noc",
    description: "Successfully completed the 12-week course on Internet of Things with a consolidated score of 69% (Online Assignments: 22.88/25, Proctored Exam: 46.5/75). Awarded the Elite certificate status by IIT Kharagpur.",
    tech: ["IoT Architecture", "Sensors & Actuators", "Wireless Sensor Networks", "IoT Protocols", "Cloud Computing"]
  };

  const sqlCert: CertificateData = {
    title: "Oracle Database SQL Certified Specialist",
    issuer: "Oracle University",
    date: "November 29, 2024",
    credentialId: "100914473OCSSQL12C",
    previewUrl: `${import.meta.env.BASE_URL}certifications/Oracle SQL Certified Specialist.png`,
    pdfUrl: `${import.meta.env.BASE_URL}certifications/Oracle SQL Certified Specialist.pdf`,
    description: "Successfully completed the Oracle Database SQL Certified Specialist examination. Validates comprehensive skills in database principles, complex SQL statement construction, DDL/DML functions, and query optimization.",
    tech: ["SQL", "Oracle Database", "DDL/DML", "Queries & Joins", "Views & Indexes"]
  };

  const handleViewCert = (cert: CertificateData) => {
    setActiveCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-white font-headline">Education</h2>
            </div>
            
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all" className="bg-[#1E293B] p-8 rounded-xl border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-headline">Saveetha School of Engineering, Chennai</h3>
                  <p className="text-primary font-medium text-sm mt-1">B.Tech — Artificial Intelligence and Data Science</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8">
                <div className="text-slate-400 text-sm font-mono">
                  2023 – 2027
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl font-bold text-white font-headline">8.5 <span className="text-lg text-slate-500">/ 10</span></div>
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Current CGPA</div>
                </div>
              </div>
            </Tilt>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-white font-headline">Certifications</h2>
            </div>
            
            <div className="w-full flex flex-col gap-6">
              <CertificateCard cert={iotCert} onView={handleViewCert} />
              <CertificateCard cert={sqlCert} onView={handleViewCert} />
            </div>
          </motion.div>
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

