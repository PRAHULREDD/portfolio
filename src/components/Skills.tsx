import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Database, Brain, Eye, Cpu, Server, Sparkles, Link2 } from 'lucide-react';
import Reveal from './motion/Reveal';
import SpotlightCard from './motion/SpotlightCard';

// Skill-to-project relationship map (only factual connections)
const skillProjectMap: Record<string, string[]> = {
  'Python': ['JobSpark AI', 'Face Recognition', 'Edge AI'],
  'YOLO (v8/v11)': ['Edge AI'],
  'FaceNet': ['Face Recognition'],
  'SCRFD': ['Face Recognition'],
  'OpenCV': ['Face Recognition', 'Edge AI'],
  'Hailo-8L NPU': ['Edge AI'],
  'Raspberry Pi 5': ['Edge AI'],
  'ONNX Runtime': ['Edge AI', 'Face Recognition'],
  'FastAPI': ['JobSpark AI'],
  'Scikit-learn': ['JobSpark AI'],
  'SVM': ['JobSpark AI'],
  'PyTorch': ['Edge AI'],
  'WebSockets': ['Face Recognition'],
};

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeLevelFilter, setActiveLevelFilter] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Languages & Tools',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'Python', level: 'expert' },
        { name: 'TypeScript', level: 'proficient' },
        { name: 'JavaScript', level: 'proficient' },
        { name: 'SQL', level: 'proficient' },
        { name: 'Java', level: 'proficient' },
      ],
    },
    {
      category: 'Machine Learning',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'Scikit-learn', level: 'expert' },
        { name: 'SVM', level: 'expert' },
        { name: 'TF-IDF', level: 'proficient' },
        { name: 'SMOTE', level: 'proficient' },
      ],
    },
    {
      category: 'Deep Learning',
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: 'PyTorch', level: 'expert' },
        { name: 'TensorFlow', level: 'proficient' },
        { name: 'Keras', level: 'proficient' },
        { name: 'CNN', level: 'expert' },
      ],
    },
    {
      category: 'Computer Vision',
      icon: <Eye className="w-5 h-5" />,
      skills: [
        { name: 'OpenCV', level: 'expert' },
        { name: 'YOLO (v8/v11)', level: 'expert' },
        { name: 'FaceNet', level: 'expert' },
        { name: 'SCRFD', level: 'expert' },
        { name: 'MediaPipe', level: 'proficient' },
      ],
    },
    {
      category: 'Edge AI & Deployment',
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: 'Raspberry Pi 5', level: 'expert' },
        { name: 'Hailo-8L NPU', level: 'expert' },
        { name: 'ONNX Runtime', level: 'expert' },
        { name: 'Model Quantization', level: 'proficient' },
        { name: 'TensorRT', level: 'familiar' },
      ],
    },
    {
      category: 'Backend & Infrastructure',
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: 'FastAPI', level: 'expert' },
        { name: 'Docker', level: 'proficient' },
        { name: 'Git / GitHub', level: 'expert' },
        { name: 'Linux', level: 'proficient' },
        { name: 'WebSockets', level: 'proficient' },
      ],
    },
  ];

  const getSkillClass = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-primary text-background font-bold shadow-md shadow-primary/25';
      case 'proficient':
        return 'bg-surface-raised border border-primary/50 text-primary hover:bg-primary/15 font-semibold';
      case 'familiar':
        return 'bg-surface-raised border border-border text-text-secondary hover:text-text-primary';
      default:
        return 'bg-surface-raised text-text-secondary';
    }
  };

  // Check if a skill is related to the currently hovered skill
  const isRelatedSkill = (skillName: string): boolean => {
    if (!hoveredSkill) return false;
    const hoveredProjects = skillProjectMap[hoveredSkill] || [];
    const skillProjects = skillProjectMap[skillName] || [];
    return hoveredProjects.some((p) => skillProjects.includes(p));
  };

  const hoveredSkillProjects = hoveredSkill ? (skillProjectMap[hoveredSkill] || []) : [];

  return (
    <section className="section-padding bg-surface/20 relative overflow-hidden" id="skills">
      {/* Section Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none overflow-hidden opacity-[0.025]">
        <span className="font-headline text-[16vw] font-black tracking-tighter text-primary whitespace-nowrap">
          SKILLS & ARCHITECTURE
        </span>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Reveal direction="up" distance={40}>
            <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 mb-4 inline-block font-bold">
              TECHNICAL ARCHITECTURE & TOOLING
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1} distance={50}>
            <h2 className="text-section font-headline text-text-primary mb-3 tracking-tight font-black">
              Core Competencies
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15} distance={40}>
            <div className="flex items-center justify-center gap-3 text-micro font-mono text-text-tertiary mb-6">
              <span>6 STACK DOMAINS</span>
              <span>•</span>
              <span className="text-primary font-bold">13 TOPS NPU TARGET</span>
              <span>•</span>
              <span>PRODUCTION VALIDATED</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2} distance={50}>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-8">
              Production expertise across edge neural processors, computer vision pipelines, and scalable ML services
            </p>
          </Reveal>

          {/* Level Filter Pills */}
          <Reveal direction="up" delay={0.25} distance={40}>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 bg-surface/90 border border-border/90 rounded-2xl backdrop-blur-xl shadow-2xl">
              <button
                onClick={() => setActiveLevelFilter(null)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 ${
                  activeLevelFilter === null
                    ? 'bg-primary text-background shadow-lg shadow-primary/30'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
                }`}
              >
                All Skills
              </button>
              <button
                onClick={() => setActiveLevelFilter(activeLevelFilter === 'expert' ? null : 'expert')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeLevelFilter === 'expert'
                    ? 'bg-primary text-background shadow-lg shadow-primary/30'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-raised'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Expert (Production)</span>
              </button>
              <button
                onClick={() => setActiveLevelFilter(activeLevelFilter === 'proficient' ? null : 'proficient')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeLevelFilter === 'proficient'
                    ? 'bg-primary/25 text-primary border border-primary'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-raised'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full border-2 border-primary" />
                <span>Proficient (Project)</span>
              </button>
              <button
                onClick={() => setActiveLevelFilter(activeLevelFilter === 'familiar' ? null : 'familiar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeLevelFilter === 'familiar'
                    ? 'bg-surface-raised text-text-primary border border-border'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-raised'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-text-tertiary" />
                <span>Familiar</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Hovered Skill → Project Connection Indicator */}
        <AnimatePresence>
          {hoveredSkill && hoveredSkillProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 flex items-center justify-center gap-3 text-xs font-mono text-primary"
            >
              <Link2 className="w-3.5 h-3.5" />
              <span className="font-bold">{hoveredSkill}</span>
              <span className="text-text-tertiary">→</span>
              {hoveredSkillProjects.map((p) => (
                <span key={p} className="px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-lg text-primary font-semibold">
                  {p}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const isCategoryHovered = hoveredCategory === category.category;
            const isAnyHovered = hoveredCategory !== null;

            return (
              <Reveal key={category.category} direction="up" delay={idx * 0.08} distance={60}>
                <SpotlightCard
                  onMouseEnter={() => setHoveredCategory(category.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`h-full transition-all duration-300 ${
                    isAnyHovered && !isCategoryHovered ? 'opacity-35 scale-[0.97]' : 'opacity-100 scale-100'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/80">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl border shadow-md transition-all duration-300 ${
                        isCategoryHovered
                          ? 'bg-primary text-background border-primary shadow-primary/30'
                          : 'bg-primary/15 text-primary border-primary/30'
                      }`}>
                        {category.icon}
                      </div>
                      <h3 className="font-headline font-bold text-xl text-text-primary">
                        {category.category}
                      </h3>
                    </div>
                    {isCategoryHovered && <Sparkles className="w-5 h-5 text-primary animate-pulse" />}
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const isHighlighted = activeLevelFilter === null || activeLevelFilter === skill.level;
                      const isRelated = isRelatedSkill(skill.name);
                      const isHoveredDirectly = hoveredSkill === skill.name;

                      return (
                        <motion.span
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          whileHover={{ scale: 1.12, y: -3 }}
                          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                          className={`inline-flex items-center justify-center ${getSkillClass(skill.level)} px-4 py-2 rounded-xl text-xs transition-all duration-200 cursor-default ${
                            !isHighlighted ? 'opacity-25 grayscale' : 'opacity-100'
                          } ${
                            isHoveredDirectly
                              ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-[0_0_12px_#00D9C060]'
                              : isRelated && hoveredSkill
                                ? 'ring-1 ring-primary/50 shadow-[0_0_8px_#00D9C030]'
                                : ''
                          }`}
                        >
                          {skill.name}
                        </motion.span>
                      );
                    })}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
