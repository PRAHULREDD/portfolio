import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Code2 } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 bg-[#0F172A]" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight font-headline">
              Get In Touch
            </h2>
          </div>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-body">
            Open to entry-level roles in Machine Learning Engineering, Computer Vision, or AI Development. Based in India — open to remote and relocation.
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34,197,94,0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-primary text-black px-10 py-5 rounded-md font-bold text-xl hover:brightness-110 transition-all font-headline"
            href="mailto:rr0018619@gmail.com"
          >
            rr0018619@gmail.com →
          </motion.a>
          
          <div className="mt-20 flex justify-center gap-8 md:gap-12">
            <motion.a 
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-2" 
              href="https://github.com/PRAHULREDD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Github className="w-6 h-6 text-slate-400 group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">GitHub</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-2" 
              href="https://linkedin.com/in/rahulreddypulicharla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">LinkedIn</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-2" 
              href="https://leetcode.com/u/PULICHARLARAHUL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Code2 className="w-6 h-6 text-slate-400 group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">LeetCode</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
