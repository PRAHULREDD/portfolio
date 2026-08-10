import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Cpu, Activity, Lock, ArrowRight, Layers, HelpCircle } from 'lucide-react';

export interface ProjectCaseStudyData {
  id: string;
  name: string;
  summary: string;
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  techStack: { category: string; items: string[] }[];
  challenge: string;
  approach: string;
  optimization: string;
  results: string[];
  tradeOffs: string;
  githubUrl?: string;
  liveUrl?: string;
  nda?: boolean;
}

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudyData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, isOpen, onClose }: ProjectCaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Keyboard Focus Trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex="0"]'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    // Disable background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-4 md:inset-8 max-w-5xl mx-auto bg-[#0F172A] border border-white/10 shadow-[0_0_80px_rgba(34,197,94,0.15)] flex flex-col rounded-2xl overflow-hidden mt-16 md:mt-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                </div>
                <h3 id="case-study-title" className="text-white font-headline font-bold text-sm tracking-wide flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary shrink-0" /> Case Study: {project.name}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Case Study Body */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin">
              {/* NDA Lock Warning */}
              {project.nda && (
                <div className="flex items-start gap-3 bg-teal-500/5 border border-teal-500/20 p-4 rounded-xl text-teal-400 text-xs">
                  <Lock className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wide">NDA Sanitized Technical Overview</span>
                    <p className="text-slate-400 mt-1 leading-relaxed">
                      Proprietary source code, specific dataset descriptors, and client infrastructure have been withheld due to non-disclosure agreements. This document outlines general architectural decisions and public benchmarks.
                    </p>
                  </div>
                </div>
              )}

              {/* Title & One-Liner */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-headline leading-tight">
                  {project.name}
                </h2>
                <p className="text-primary font-mono text-sm mt-2">{project.summary}</p>
              </div>

              {/* Verified Metrics Banner */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/50 p-6 rounded-xl border border-white/5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-black text-primary font-headline tracking-tight">{m.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Core Layout Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Columns (Details) */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline">The Problem</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-body">
                        {project.problem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline">The Solution</h4>
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-body">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> System Architecture Pipeline
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-[10px]">
                      {project.architecture.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className={`px-2.5 py-1.5 rounded border transition-colors ${
                            idx === project.architecture.length - 1
                              ? 'bg-primary/5 border-primary/20 text-primary font-bold'
                              : 'bg-slate-900/60 border-white/5 text-slate-300'
                          }`}>
                            {step}
                          </span>
                          {idx < project.architecture.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Challenge & Approach */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline">Engineering Challenge</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-body">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline">Technical Approach & Implementation</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-body">
                      {project.approach}
                    </p>
                  </div>

                  {/* Optimization */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline">Performance Optimization</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-body">
                      {project.optimization}
                    </p>
                  </div>
                </div>

                {/* Right Column (Tech Stack, Trade-offs & Links) */}
                <div className="space-y-6">
                  {/* Tech Stack Card */}
                  <div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 space-y-4">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline pb-2 border-b border-white/5">
                      Technology Stack
                    </h4>
                    {project.techStack.map((tech, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">
                          {tech.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {tech.items.map((item, itemIdx) => (
                            <span key={itemIdx} className="px-2 py-1 bg-slate-950 border border-white/5 text-slate-300 text-[10px] rounded font-body">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decisions & Trade-offs Card */}
                  <div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 space-y-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline flex items-center gap-1.5 pb-2 border-b border-white/5">
                      <HelpCircle className="w-3.5 h-3.5" /> Engineering Decisions
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-body">
                      {project.tradeOffs}
                    </p>
                  </div>

                  {/* Results Bullet List */}
                  <div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest font-headline flex items-center gap-1.5 pb-2 border-b border-white/5">
                      <Activity className="w-3.5 h-3.5" /> Verified Outcomes
                    </h4>
                    <ul className="space-y-2 text-[11px] text-slate-400 list-disc list-inside font-body">
                      {project.results.map((res, rIdx) => (
                        <li key={rIdx}>{res}</li>
                      ))}
                    </ul>
                  </div>

                  {/* External Links action row */}
                  <div className="flex flex-col gap-2">
                    {project.nda ? (
                      <div className="w-full text-center border border-teal-500/20 text-teal-400 py-3 rounded-lg text-xs font-bold uppercase tracking-widest font-mono bg-teal-500/5 flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" /> NDA Protected Project
                      </div>
                    ) : (
                      <>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center border border-white/10 hover:border-primary hover:text-primary text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-slate-900/60 cursor-pointer"
                          >
                            <Github className="w-4 h-4" /> View Code on GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-primary text-black py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" /> View Live Application
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
