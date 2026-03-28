import { motion } from 'motion/react';

export default function Skills() {
  const tier1 = [
    'Edge AI', 'Computer Vision', 'YOLO', 'OpenCV', 'FaceNet', 
    'SCRFD', 'MTCNN', 'ONNX Runtime', 'Hailo-8L', 'Raspberry Pi 5'
  ];

  const tier2 = [
    'Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SVM', 
    'Naive Bayes', 'CNN', 'SMOTE', 'TF-IDF'
  ];

  const tier3 = [
    'FastAPI', 'React', 'Streamlit', 'REST API', 'WebSocket', 
    'Docker', 'Vercel', 'Pandas', 'NumPy', 'Matplotlib', 
    'SQL', 'TypeScript', 'Git', 'GitHub', 'VS Code', 
    'Google Colab', 'Jupyter Notebook'
  ];

  return (
    <section className="py-32 px-6 bg-[#0F172A]" id="skills">
      <div className="max-w-7xl mx-auto">
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
              Technical Skills
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium font-body"
          >
            Specialised in Edge AI · Computer Vision · Full-Stack ML Deployment
          </motion.p>
        </div>
        
        <div className="space-y-16">
          {/* TIER 1 — CORE SPECIALISATION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
              Core Specialisation
            </h3>
            <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              {tier1.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-primary/15 border border-primary/40 text-primary px-6 py-3 text-sm md:text-base font-bold rounded-lg whitespace-nowrap transition-all hover:bg-primary/25"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-primary/20 w-full" />

          {/* TIER 2 — ML & DEEP LEARNING */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest font-headline">
              Machine Learning & Deep Learning
            </h3>
            <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              {tier2.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-[#1E293B] border border-white/10 text-white px-4 py-2.5 text-sm font-medium rounded-md whitespace-nowrap hover:border-white/30 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="h-px bg-primary/10 w-full" />

          {/* TIER 3 — WEB, DATA & TOOLS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-widest font-headline">
              Web · Data · Tools
            </h3>
            <div className="flex flex-nowrap md:flex-wrap gap-2.5 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              {tier3.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-[#111827] border border-white/5 text-slate-300 px-3.5 py-2 text-xs font-medium rounded whitespace-nowrap hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
