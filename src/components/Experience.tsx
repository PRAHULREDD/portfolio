import { useState } from 'react';
import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { Database, Cpu, Activity, TrendingUp, CheckCircle2, Download } from 'lucide-react';
import { CertificateModal, CertificateData } from './CertificateComponents';

export default function Experience() {
  const [activeCert, setActiveCert] = useState<CertificateData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      company: 'RealMeds Technologies Pvt. Ltd.',
      logo: 'RM',
      logoColor: 'bg-teal-500/20 text-teal-500',
      role: 'AI / ML Intern',
      duration: 'Oct 2025 – Dec 2025 · 2 months · Thiruvananthapuram, Kerala',
      tags: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Healthcare AI', 'EDA'],
      bullets: [
        'Engineered data preprocessing modules using Python, Pandas, and NumPy, optimizing data preparation workflows for medical machine learning pipelines.',
        'Collaborated with cross-functional healthcare engineering teams to integrate machine learning models into the RealMeds production system, ensuring compliance with medical data standards.',
        'Conducted exploratory data analysis (EDA) and standardized the dataset loading pipeline, reducing preprocessing latencies and improving data quality for model training.'
      ],
      certificate: {
        title: "Internship Completion Certificate — RealMeds Technologies",
        issuer: "RealMeds Technologies Pvt. Ltd.",
        date: "Oct – Dec 2025",
        previewUrl: `${import.meta.env.BASE_URL}certifications/Realmeds Internship.png`,
        pdfUrl: `${import.meta.env.BASE_URL}certifications/Realmeds Internship.pdf`,
        verifyUrl: "https://www.realmeds.in",
        description: "Awarded for successfully completing the 2-month AI/ML internship at RealMeds Technologies. Received outstanding remarks for model integration and EDA pipeline optimization.",
        tech: ["Python", "Pandas", "NumPy", "EDA", "Healthcare AI"]
      }
    },
    {
      company: 'Pipra Solutions Pvt. Ltd.',
      logo: 'PS',
      logoColor: 'bg-primary/20 text-primary',
      role: 'AI / ML Intern',
      duration: 'Jul 2025 – Oct 2025 · 3 months · Hyderabad, India',
      tags: ['Python', 'YOLO', 'FaceNet', 'SCRFD', 'ONNX', 'Hailo-8L', 'Raspberry Pi 5', 'OpenCV', 'WebSocket'],
      metrics: [
        { label: '93% Face Recog. Accuracy' },
        { label: '+25pp Improvement' }
      ],
      bullets: [
        'Engineered a real-time multi-stage face recognition pipeline (SCRFD + ONNX FaceNet), achieving 93% accuracy at a 6-meter operational range.',
        'Boosted facial recognition accuracy by 25 percentage points (70% → 93%) by migrating legacy Haar Cascade classifiers to a robust MTCNN + FaceNet architecture.',
        'Deployed custom YOLO models on Raspberry Pi 5 with Hailo-8L NPU accelerators, developing a PyTorch → ONNX → Hailo (HEF) conversion pipeline for local inference.',
        'Built an end-to-end dataset pipeline (collection, augmentation, and annotation via Label Studio), integrating with the WarePro control platform for real-time edge processing.',
        'Implemented a WebSocket alerting microservice in Python to broadcast real-time unauthorized entry events with push notifications.'
      ],
      certificate: {
        title: "Internship Completion Certificate — Pipra Solutions",
        issuer: "Pipra Solutions Pvt. Ltd.",
        date: "Jul – Oct 2025",
        previewUrl: `${import.meta.env.BASE_URL}certifications/Pipra Internship.png`,
        pdfUrl: `${import.meta.env.BASE_URL}certifications/Pipra Internship.pdf`,
        verifyUrl: "https://www.pipra.solutions",
        description: "Awarded for successfully completing the 3-month AI/ML internship with outstanding remarks. Recognized for key contributions to the YOLO object detection and face recognition system deployed on Raspberry Pi 5 + Hailo-8L.",
        tech: ["YOLO", "FaceNet", "SCRFD", "Hailo-8L", "Raspberry Pi 5", "ONNX", "OpenCV"]
      }
    }
  ];

  const handleViewCert = (cert: CertificateData) => {
    setActiveCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white font-headline"
            >
              Work Experience
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium font-body pl-5"
          >
            5 months · 2 internships · Production systems shipped
          </motion.p>
        </div>
        
        <div className="relative space-y-12">
          {/* Timeline Vertical Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-6 h-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#22C55E]" />
              </div>

              {/* Experience Card */}
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} scale={1.01} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glareColor="#ffffff" glarePosition="all" className="bg-[#1E293B] p-6 md:p-8 rounded-xl border-l-4 border-primary shadow-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${exp.logoColor}`}>
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-headline">{exp.company}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded border border-primary/20">
                          {exp.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-slate-400 text-sm font-medium mb-4 font-body">
                  {exp.duration}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-slate-800/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 py-4 border-y border-white/5">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="text-center md:text-left">
                        <div className="text-primary font-bold text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* RealMeds ETL Pipeline visualizer */}
                {exp.company.includes('RealMeds') && (
                  <div className="mb-8 p-4 bg-[#0F172A]/50 rounded-lg border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-[#1E293B] border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:border-teal-400 transition-colors duration-500">
                        <Database className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Extract</span>
                    </div>
                    
                    <div className="flex-[0] md:flex-1 w-px h-8 md:w-auto md:h-px bg-gradient-to-b md:bg-gradient-to-r from-teal-500/10 via-teal-500/50 to-teal-500/10 relative z-10 my-1 md:my-0">
                       <div className="absolute top-0 md:top-1/2 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 animate-[shimmer_2s_infinite] shadow-[0_0_8px_#2dd4bf]" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-[#1E293B] border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:border-teal-400 transition-colors duration-500">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Process (EDA)</span>
                    </div>
                    
                    <div className="flex-[0] md:flex-1 w-px h-8 md:w-auto md:h-px bg-gradient-to-b md:bg-gradient-to-r from-teal-500/10 via-teal-500/50 to-teal-500/10 relative z-10 my-1 md:my-0">
                       <div className="absolute top-0 md:top-1/2 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 animate-[shimmer_2s_infinite_0.7s] shadow-[0_0_8px_#2dd4bf]" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-[#1E293B] border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:border-teal-400 transition-colors duration-500">
                        <Activity className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Train</span>
                    </div>
                  </div>
                )}

                {/* Pipra Solutions Accuracy Chart visualizer */}
                {exp.company.includes('Pipra') && (
                  <div className="mb-8 p-6 bg-[#0F172A]/50 rounded-lg border border-white/5 relative overflow-hidden group">
                     <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
                       <span className="flex items-center gap-2"><TrendingUp className="w-3 h-3 text-primary" /> Accuracy Migration</span>
                       <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">+25% Increase in Live Env</span>
                     </div>
                     <div className="flex items-end gap-6 md:gap-16 h-32 pl-4 pr-6 md:pr-12 pb-6 border-b border-l border-white/10 relative w-full max-w-sm mx-auto">
                       
                       {/* Chart Y-Axis Labels */}
                       <div className="absolute left-[-2rem] bottom-0 w-6 flex flex-col justify-between h-full items-end text-[9px] text-slate-600 font-mono pb-4">
                         <span>100%</span>
                         <span>50%</span>
                         <span>0%</span>
                       </div>

                       {/* Chart Bars */}
                       <div className="flex-1 flex flex-col justify-end items-center relative h-full">
                         <div className="w-full max-w-[60px] bg-[#1E293B] border border-white/10 rounded-t-md h-[40%] transition-all duration-500 hover:bg-slate-700/50 hover:border-slate-500 relative flex justify-center z-10">
                           <span className="absolute -top-6 text-xs text-slate-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">70%</span>
                         </div>
                         <span className="absolute -bottom-6 text-[10px] text-slate-500 font-mono whitespace-nowrap">Haar Cascades</span>
                       </div>
                       
                       <div className="flex-1 flex flex-col justify-end items-center relative h-full">
                         <div className="w-full max-w-[60px] bg-primary/20 border border-primary/50 rounded-t-md h-[85%] relative overflow-hidden group-hover:bg-primary/30 group-hover:border-primary transition-all duration-500 flex justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)] z-10">
                           <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-transparent to-primary/20 animate-pulse" />
                           <span className="absolute -top-6 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">93%</span>
                         </div>
                         <span className="absolute -bottom-6 text-[10px] text-primary font-mono font-bold whitespace-nowrap">MTCNN+FaceNet</span>
                       </div>
                       
                       {/* Ascending Trend Line connecting top of bars */}
                       <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none">
                         <motion.path 
                           initial={{ pathLength: 0, opacity: 0 }}
                           whileInView={{ pathLength: 1, opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                           d="M 25% 60% L 75% 15%" 
                           stroke="#22C55E" 
                           strokeWidth="2" 
                           strokeDasharray="4 4"
                           fill="none" 
                         />
                         {/* Glowing dot at the end */}
                         <motion.circle
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: 2 }}
                           cx="75%" cy="15%" r="3" fill="#22C55E" className="animate-ping shadow-[0_0_10px_#22C55E]"
                         />
                       </svg>
                     </div>
                  </div>
                )}

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed font-body">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Verified Internship Certificate Credentials & Badge */}
                {exp.certificate && (
                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full text-primary font-mono text-[9px] font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified Certificate
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">
                        Remark: Outstanding
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewCert(exp.certificate)}
                        className="flex items-center gap-1 text-[10px] font-bold text-white hover:text-primary border border-white/10 hover:border-primary px-3 py-2 rounded bg-slate-900/50 transition-all uppercase tracking-wider font-headline"
                        aria-label={`View internship certificate for ${exp.company}`}
                      >
                        View
                      </button>
                      <a
                        href={exp.certificate.pdfUrl}
                        download
                        className="flex items-center gap-1 text-[10px] font-bold text-black bg-primary hover:brightness-110 px-3 py-2 rounded transition-all uppercase tracking-wider font-headline flex items-center justify-center gap-1"
                        aria-label={`Download certificate PDF for ${exp.company}`}
                      >
                        <Download className="w-3.5 h-3.5" /> PDF
                      </a>
                    </div>
                  </div>
                )}
              </Tilt>
            </motion.div>
          ))}
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
