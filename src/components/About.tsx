import { motion } from 'motion/react';
import { MapPin, Target, Book, Brain } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-10 bg-primary rounded-full" />
          <h2 className="text-4xl font-bold text-white font-headline">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[250px] auto-rows-auto">
          {/* Main Card (Spans 2x2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-[#1E293B] border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-primary/40 transition-colors min-h-[280px] md:min-h-0"
          >
            <Brain className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white font-headline mb-4">Edge AI & ML Specialist</h3>
            <p className="text-slate-400 font-body leading-relaxed z-10 flex-grow">
              Focused on Edge AI, Computer Vision, and model optimization. With 5 months of industry internship experience, I have engineered and deployed deep learning pipelines (YOLO, FaceNet) on resource-constrained hardware like the Raspberry Pi 5 + Hailo-8L NPU, as well as robust machine learning classification systems.
            </p>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#1E293B] border border-white/5 rounded-3xl p-8 flex flex-col justify-center hover:border-primary/40 transition-colors relative overflow-hidden min-h-[180px] md:min-h-0"
          >
            <div className="flex items-start gap-4 z-10">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold font-headline text-lg mb-1">B.Tech in AI & Data Science</h3>
                <p className="text-slate-400 text-sm">Saveetha School of Engineering, Chennai · 8.5 CGPA</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-900 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">2023-2027</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Map Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1E293B] border border-white/5 rounded-3xl pb-0 px-0 pt-6 flex flex-col hover:border-primary/40 transition-colors relative overflow-hidden group min-h-[220px] md:min-h-0"
          >
            <div className="px-6 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-white font-bold font-headline">Location</h3>
            </div>
            <p className="text-slate-400 text-xs px-6 mb-4">Chennai, India (Open to Relocation / Remote)</p>
            {/* Fake Map */}
            <div className="flex-1 bg-slate-900 relative w-full h-full mt-auto overflow-hidden min-h-[120px] md:min-h-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stat Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-primary/95 border border-primary/20 rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:brightness-110 transition-all cursor-default min-h-[180px] md:min-h-0"
          >
            <Target className="w-8 h-8 text-black mb-3" />
            <div className="text-5xl font-black text-black font-headline tracking-tighter mb-2">3+</div>
            <div className="text-[10px] font-bold text-black border border-black/20 px-3 py-1.5 rounded-full uppercase tracking-widest leading-tight mt-1">Production AI Models<br/>Deployed</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
