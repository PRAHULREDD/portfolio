import { motion } from 'motion/react';
import { useRef, useMemo, useState } from 'react';
import { Network, Grid, Brain, Eye, Cpu, Server, Code, Database } from 'lucide-react';

export default function Skills() {
  const constraintsRef = useRef(null);
  const [viewMode, setViewMode] = useState<'grid' | 'playground'>('grid');

  const coreSkills = [
    'Python', 'FastAPI', 'React', 'TypeScript',
    'OpenCV', 'FaceNet', 'YOLO', 'ONNX Runtime', 
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'SVM',
    'Hailo-8L', 'Raspberry Pi 5', 'Docker', 'Vercel'
  ];
  
  const tier1 = ['Edge AI', 'Computer Vision', 'YOLO', 'OpenCV', 'FaceNet', 'SCRFD', 'MTCNN', 'ONNX Runtime', 'Hailo-8L', 'Raspberry Pi 5'];
  const tier2 = ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SVM', 'Naive Bayes', 'CNN', 'SMOTE', 'TF-IDF'];

  // Categorized Skills Data structure for standard grid view
  const categorizedSkills = [
    {
      category: "Languages",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: ["Python", "SQL", "C", "TypeScript", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Machine Learning",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["Scikit-learn", "XGBoost", "SVM", "Naive Bayes", "SMOTE", "TF-IDF", "EDA"]
    },
    {
      category: "Deep Learning",
      icon: <Brain className="w-5 h-5 text-primary" />,
      skills: ["PyTorch", "TensorFlow", "Keras", "CNN (Convolutional Neural Networks)"]
    },
    {
      category: "Computer Vision",
      icon: <Eye className="w-5 h-5 text-primary" />,
      skills: ["OpenCV", "YOLO (v8/v11)", "MediaPipe", "FaceNet", "SCRFD", "MTCNN"]
    },
    {
      category: "Edge AI & Deployment",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      skills: ["Raspberry Pi 5", "Hailo-8L NPU", "ONNX Runtime", "TensorRT", "Model Quantization"]
    },
    {
      category: "Backend & Tools",
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: ["FastAPI", "Docker", "Git / GitHub", "Linux", "Label Studio", "WebSockets", "Vercel"]
    }
  ];

  // Calculate physics properties once so they don't snap on re-render.
  const nodes = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const boundsX = isMobile ? 180 : 450;
    const boundsY = isMobile ? 280 : 250;

    return coreSkills.map(skill => ({
      name: skill,
      initialX: (Math.random() - 0.5) * boundsX, 
      initialY: (Math.random() - 0.5) * boundsY, 
      floatY: [Math.random() * 30 - 15, Math.random() * -30 + 15, Math.random() * 30 - 15],
      floatX: [Math.random() * 30 - 15, Math.random() * -30 + 15, Math.random() * 30 - 15],
      duration: Math.random() * 4 + 4,
    }));
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-[#0F172A] overflow-hidden" id="skills">
      {/* Background radial pacing */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Background Marquee (Faded) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-[0.02] pointer-events-none -rotate-6 scale-110">
        <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: '60s' }}>
          {[...tier1, ...tier1, ...tier1, ...tier1].map((skill, i) => (
             <span key={i} className="text-6xl md:text-8xl font-black text-white px-8">{skill}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee mt-10" style={{ animationDuration: '70s', animationDirection: 'reverse' }}>
          {[...tier2, ...tier2, ...tier2, ...tier2].map((skill, i) => (
             <span key={i} className="text-6xl md:text-8xl font-black text-white px-8">{skill}</span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-12 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-headline">
              Technical Arsenal
            </h2>
            <div className="w-1 h-10 bg-primary rounded-full hidden md:block" />
          </div>
          
          <p className="text-slate-400 font-body max-w-xl mb-8">
            Expertise in deploying optimized computer vision and machine learning systems at the edge.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/5 relative z-20 shadow-2xl mb-8">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 font-headline cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-primary text-black shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Show structured grid view"
            >
              <Grid className="w-4 h-4" /> Grid View
            </button>
            <button
              onClick={() => setViewMode('playground')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 font-headline cursor-pointer ${
                viewMode === 'playground' 
                  ? 'bg-primary text-black shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Show interactive physics playground"
            >
              <Network className="w-4 h-4" /> Interactive Playground
            </button>
          </div>
        </div>
        
        {/* View Mode Rendering */}
        <div className="relative min-h-[500px]">
          {viewMode === 'grid' ? (
            /* Categorized Grid View */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categorizedSkills.map((cat, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1E293B]/70 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-primary/20 hover:shadow-[0_0_25px_rgba(34,197,94,0.05)] transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        {cat.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white font-headline tracking-wide">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-3 py-1.5 bg-slate-900 border border-white/5 hover:border-primary/30 rounded-lg text-xs text-slate-300 font-body transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Physics Interactive Sandbox */
            <motion.div 
              ref={constraintsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-full h-[500px] md:h-[550px] rounded-3xl border border-white/10 bg-[#1E293B]/20 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl inner-shadow"
            >
              {/* Subtle grid background to look like a canvas */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              
              {nodes.map((node, i) => (
                <motion.div 
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{ 
                    x: node.initialX, 
                    y: node.initialY, 
                    opacity: 1, 
                    scale: 1 
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: i * 0.03 },
                    scale: { type: "spring", delay: i * 0.03 },
                  }}
                  whileHover={{ scale: 1.12, zIndex: 50, borderColor: "rgba(34, 197, 94, 0.4)", backgroundColor: "rgba(30, 41, 59, 1)" }}
                  whileTap={{ scale: 0.95, cursor: "grabbing" }}
                  key={i} 
                  className="absolute px-5 py-3 bg-[#1E293B]/90 backdrop-blur-md border border-white/10 text-white font-bold rounded-full cursor-grab tracking-wide font-headline select-none shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex items-center gap-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-colors text-xs"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_#22C55E]" />
                  {node.name}
                </motion.div>
              ))}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 font-mono uppercase tracking-widest text-center select-none pointer-events-none">
                💡 Grab and drag the tech nodes around the sandbox
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
