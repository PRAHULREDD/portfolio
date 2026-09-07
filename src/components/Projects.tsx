import React from 'react';
import { motion } from 'motion/react';
import { Lock, Cpu, Layers, Scan, CircuitBoard, Zap, Activity, Crosshair } from 'lucide-react';
import SpotlightCard from './motion/SpotlightCard';
import Reveal from './motion/Reveal';
import ProjectShowcase from './ProjectShowcase';
import ProjectFlowDiagram from './motion/ProjectFlowDiagram';

export default function Projects() {
  return (
    <section className="relative" id="projects">
      {/* ═══ Section Header ═══ */}
      <div className="section-padding bg-background pb-6 pt-16 relative overflow-hidden">
        {/* Atmosphere Bridge from Hero */}
        <div className="absolute top-0 inset-x-0 h-48 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,217,192,0.12),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00D9C012_1px,transparent_1px),linear-gradient(to_bottom,#00D9C012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

        <div className="container-custom text-center mb-16 relative z-10">
          <Reveal direction="up" distance={40}>
            <span className="text-micro font-mono text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 mb-4 inline-block font-bold">
              ENGINEERING SHIPPED
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1} distance={50}>
            <h2 className="text-section font-headline text-text-primary mb-4 tracking-tight font-black">
              Featured Work
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2} distance={50}>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
              Production machine learning pipelines and real-time computer vision deployed on edge hardware
            </p>
          </Reveal>
        </div>
      </div>

      {/* ═══ FLAGSHIP: JobSpark AI — Pinned Scroll Showcase ═══ */}
      <div id="jobspark">
        <ProjectShowcase />
      </div>

      {/* ═══ SECONDARY PROJECTS — Distinct Visual Languages ═══ */}
      <div className="section-padding bg-background pt-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── 02: Real-Time Face Recognition (Biometric Vision HUD Theme) ── */}
            <motion.div
              id="face-rec"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full"
            >
              <SpotlightCard className="h-full flex flex-col justify-between border-primary/30 hover:border-primary/70 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,217,192,0.18)] shadow-2xl relative overflow-hidden bg-gradient-to-b from-surface/95 to-background !p-5 sm:!p-7 md:!p-8">
                  {/* Biometric HUD Reticle corner marks */}
                  <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-primary/70 pointer-events-none group-hover:border-primary group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-primary/70 pointer-events-none group-hover:border-primary group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-primary/70 pointer-events-none group-hover:border-primary group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-primary/70 pointer-events-none group-hover:border-primary group-hover:scale-110 transition-all duration-300" />

                  <div>
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl font-black font-headline text-primary/40 font-mono">02</span>
                        <span className="inline-flex items-center gap-1.5 text-micro font-mono text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/30 font-bold uppercase tracking-wider">
                          <Scan className="w-3.5 h-3.5 animate-pulse" /> BIOMETRIC CV
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-micro text-text-tertiary bg-surface-raised px-3 py-1 rounded-md border border-border font-mono">
                          Pipra Solutions
                        </span>
                        <div className="flex items-center gap-1.5 text-micro text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20 font-bold">
                          <Lock className="w-3 h-3" />
                          NDA
                        </div>
                      </div>
                    </div>

                    {/* ═══ BIOMETRIC HUD SCANNER CONSOLE ═══ */}
                    <div className="mb-6 rounded-2xl border border-primary/40 bg-surface/95 backdrop-blur-xl p-4 sm:p-5 md:p-6 shadow-xl relative overflow-hidden group/hud">
                      {/* Scanning Laser Beam */}
                      <motion.div
                        animate={{ y: ['-100%', '300%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/25 to-transparent pointer-events-none"
                      />

                      {/* Top HUD Telemetry Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-primary/70 mb-3 border-b border-primary/20 pb-2">
                        <span className="flex items-center gap-1.5">
                          <Crosshair className="w-3 h-3 text-primary animate-spin" style={{ animationDuration: '8s' }} />
                          RANGE: 6.0 METERS
                        </span>
                        <span>FOV: 68°<span className="hidden sm:inline"> // SCRFD ULTRA-LIGHT</span></span>
                        <span className="text-primary font-bold">MATCH: CONFIRMED</span>
                      </div>

                      {/* Central Biometric Target Visualizer */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-2">
                        {/* Biometric Target Face Graphic (5 cols) */}
                        <div className="md:col-span-5 relative flex items-center justify-center p-3 rounded-xl bg-background/80 border border-primary/30">
                          {/* Face landmark mesh mockup */}
                          <svg className="w-24 h-24 text-primary/80" viewBox="0 0 100 100">
                            {/* Bounding box brackets */}
                            <rect x="15" y="15" width="70" height="70" fill="none" stroke="#00D9C0" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                            <path d="M 10 25 L 10 10 L 25 10" fill="none" stroke="#00D9C0" strokeWidth="2" />
                            <path d="M 90 25 L 90 10 L 75 10" fill="none" stroke="#00D9C0" strokeWidth="2" />
                            <path d="M 10 75 L 10 90 L 25 90" fill="none" stroke="#00D9C0" strokeWidth="2" />
                            <path d="M 90 75 L 90 90 L 75 90" fill="none" stroke="#00D9C0" strokeWidth="2" />
                            
                            {/* Facial keypoints */}
                            <circle cx="38" cy="42" r="2.5" fill="#00D9C0" />
                            <circle cx="62" cy="42" r="2.5" fill="#00D9C0" />
                            <circle cx="50" cy="54" r="2" fill="#00D9C0" />
                            <circle cx="42" cy="68" r="2" fill="#00D9C0" />
                            <circle cx="58" cy="68" r="2" fill="#00D9C0" />
                            {/* Keypoint triangulation */}
                            <line x1="38" y1="42" x2="62" y2="42" stroke="#00D9C0" strokeWidth="0.8" opacity="0.4" />
                            <line x1="38" y1="42" x2="50" y2="54" stroke="#00D9C0" strokeWidth="0.8" opacity="0.4" />
                            <line x1="62" y1="42" x2="50" y2="54" stroke="#00D9C0" strokeWidth="0.8" opacity="0.4" />
                            <line x1="50" y1="54" x2="42" y2="68" stroke="#00D9C0" strokeWidth="0.8" opacity="0.4" />
                            <line x1="50" y1="54" x2="58" y2="68" stroke="#00D9C0" strokeWidth="0.8" opacity="0.4" />
                          </svg>
                          <div className="absolute bottom-1 right-2 text-[9px] font-mono text-primary bg-primary/20 px-1.5 py-0.5 rounded">
                            FACENET 512-D
                          </div>
                        </div>

                        {/* Metric readout & Delta improvement (7 cols) */}
                        <div className="md:col-span-7 pl-0 md:pl-2">
                          <div className="text-5xl lg:text-6xl font-black text-primary font-headline tracking-tighter drop-shadow-[0_0_25px_rgba(0,217,192,0.4)]">
                            93%
                          </div>
                          <div className="text-caption text-text-primary font-bold mt-0.5">
                            Accuracy @ 6m Distance
                          </div>
                          <div className="text-xs text-primary/90 font-mono mt-1 flex items-center gap-1.5 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                            +25pp vs Haar Cascades (70% → 93%)
                          </div>
                        </div>
                      </div>

                      {/* Vector Embedding & Cosine Distance HUD readout */}
                      <div className="mt-3 pt-3 border-t border-primary/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                        <span className="text-text-tertiary">
                          VECTOR: <span className="text-primary font-bold">[0.21, -0.44, 0.88, ... 512-D]</span>
                        </span>
                        <span className="text-primary/90 bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                          COSINE DIST: 0.28 &lt; 0.60
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-text-primary mb-3 font-headline tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
                      Real-Time Face Recognition Pipeline
                    </h3>

                    {/* ═══ FLOW DIAGRAM: Face → Detection → Embedding → Match → 93% ═══ */}
                    <ProjectFlowDiagram
                      nodes={[
                        { label: 'FACE' },
                        { label: 'SCRFD', metric: 'Detect' },
                        { label: 'FACENET', metric: 'Embed' },
                        { label: 'MATCH', metric: 'Classify' },
                        { label: 'RESULT', metric: '93%' },
                      ]}
                    />

                    <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                      High-precision computer vision pipeline built with SCRFD face detection and FaceNet 512-D embeddings running on ONNX Runtime.
                      Engineered for high-accuracy security entry tracking under varying lighting and extreme 6-meter focal distance.
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['SCRFD', 'FaceNet', 'ONNX Runtime', 'OpenCV', 'Python', 'WebSockets'].map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                          className="text-micro font-semibold text-text-secondary bg-surface-raised px-3 py-1.5 rounded-lg border border-border/80 hover:border-primary/50 hover:text-text-primary transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-surface-raised/80 border border-primary/20 rounded-2xl p-4 mt-auto shadow-inner">
                    <div className="text-caption font-mono text-primary mb-1 flex items-center gap-1.5 font-bold">
                      <Layers className="w-3.5 h-3.5" /> REAL-TIME ENTRY DISPATCH
                    </div>
                    <div className="text-sm text-text-secondary">
                      Engineered real-time WebSocket alert dispatch for unauthorized entry detection & streaming surveillance logs
                    </div>
                  </div>
                </SpotlightCard>
            </motion.div>

            {/* ── 03: Edge AI Object Detection (Hardware NPU Acceleration Theme) ── */}
            <motion.div
              id="edge-ai"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full"
            >
              <SpotlightCard className="h-full flex flex-col justify-between border-secondary/30 hover:border-secondary/70 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,112,243,0.18)] shadow-2xl relative overflow-hidden bg-gradient-to-b from-surface/95 to-background !p-5 sm:!p-7 md:!p-8">
                  {/* Silicon Chip Corner Pad Pins */}
                  <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-secondary/70 pointer-events-none group-hover:border-secondary group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-secondary/70 pointer-events-none group-hover:border-secondary group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-secondary/70 pointer-events-none group-hover:border-secondary group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-secondary/70 pointer-events-none group-hover:border-secondary group-hover:scale-110 transition-all duration-300" />

                  <div>
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl font-black font-headline text-secondary/40 font-mono">03</span>
                        <span className="inline-flex items-center gap-1.5 text-micro font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-md border border-secondary/30 font-bold uppercase tracking-wider">
                          <CircuitBoard className="w-3.5 h-3.5 text-secondary animate-pulse" /> NPU SILICON
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-micro text-text-tertiary bg-surface-raised px-3 py-1 rounded-md border border-border font-mono">
                          Pipra Solutions
                        </span>
                        <div className="flex items-center gap-1.5 text-micro text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20 font-bold">
                          <Lock className="w-3 h-3" />
                          NDA
                        </div>
                      </div>
                    </div>

                    {/* ═══ SILICON NPU HARDWARE CHIP CONSOLE ═══ */}
                    <div className="mb-6 rounded-2xl border border-secondary/40 bg-surface/95 backdrop-blur-xl p-4 sm:p-5 md:p-6 shadow-xl relative overflow-hidden group/chip">
                      {/* Top Hardware Telemetry */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-secondary/80 mb-3 border-b border-secondary/20 pb-2">
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-3 h-3 fill-secondary" />
                          HAILO-8L M.2 HAT
                        </span>
                        <span>HOST: RASPBERRY PI 5</span>
                        <span className="text-secondary font-bold">BUS: PCIe Gen2 x1</span>
                      </div>

                      {/* Central Hardware Die & Acceleration Metric */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-2">
                        {/* Silicon Die Micro-architecture Graphic (5 cols) */}
                        <div className="md:col-span-5 relative flex flex-col items-center justify-center p-3 rounded-xl bg-background/80 border border-secondary/30">
                          {/* Silicon die diagram */}
                          <div className="w-20 h-20 rounded-lg border-2 border-secondary/50 bg-secondary/10 flex flex-col items-center justify-center relative shadow-[0_0_15px_rgba(0,112,243,0.2)]">
                            <div className="w-10 h-10 rounded border border-secondary/70 bg-background/90 flex items-center justify-center">
                              <Cpu className="w-6 h-6 text-secondary" />
                            </div>
                            <span className="text-[8px] font-mono text-secondary font-bold mt-1">
                              26-CORE NPU
                            </span>
                            {/* Pin marks */}
                            <div className="absolute -top-1 inset-x-2 flex justify-between">
                              <span className="w-1 h-1 bg-secondary/60 rounded-full" />
                              <span className="w-1 h-1 bg-secondary/60 rounded-full" />
                              <span className="w-1 h-1 bg-secondary/60 rounded-full" />
                            </div>
                            <div className="absolute -bottom-1 inset-x-2 flex justify-between">
                              <span className="w-1 h-1 bg-secondary/60 rounded-full" />
                              <span className="w-1 h-1 bg-secondary/60 rounded-full" />
                              <span className="w-1 h-1 bg-secondary/60 rounded-full" />
                            </div>
                          </div>
                          <div className="text-[9px] font-mono text-secondary font-bold mt-2">
                            HEF COMPILED BINARY
                          </div>
                        </div>

                        {/* Hardware Metric Readout (7 cols) */}
                        <div className="md:col-span-7 pl-0 md:pl-2">
                          <div className="text-5xl lg:text-6xl font-black text-secondary font-headline tracking-tighter drop-shadow-[0_0_25px_rgba(0,112,243,0.4)]">
                            13 TOPS
                          </div>
                          <div className="text-caption text-text-primary font-bold mt-0.5">
                            Hardware Neural Compute
                          </div>
                          <div className="text-xs text-secondary/90 font-mono mt-1 flex items-center gap-1.5 font-semibold">
                            <Activity className="w-3.5 h-3.5 text-secondary animate-pulse" />
                            Power Envelope: &lt;4.2W Under Full Load
                          </div>
                        </div>
                      </div>

                      {/* Quantization & Compilation Bar */}
                      <div className="mt-3 pt-3 border-t border-secondary/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                        <span className="text-text-tertiary">
                          QUANT: <span className="text-secondary font-bold">FP32 → INT8 Post-Training Calib</span>
                        </span>
                        <span className="text-secondary/90 bg-secondary/10 px-2 py-0.5 rounded border border-secondary/30">
                          30+ FPS INFERENCE
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-text-primary mb-3 font-headline tracking-tight group-hover:text-secondary transition-colors flex items-center gap-2">
                      Edge AI Object Detection Acceleration
                    </h3>

                    {/* ═══ FLOW DIAGRAM: Camera → YOLO → RPi5 → Hailo-8L → 13 TOPS ═══ */}
                    <ProjectFlowDiagram
                      nodes={[
                        { label: 'CAMERA' },
                        { label: 'YOLOv8', metric: 'INT8' },
                        { label: 'RPI5', metric: 'Host' },
                        { label: 'HAILO-8L', metric: 'NPU' },
                        { label: 'OUTPUT', metric: '30+ FPS' },
                      ]}
                    />

                    <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                      Optimized YOLOv8 object detection compiled for Raspberry Pi 5 + Hailo-8L NPU using INT8 quantization.
                      Complete PyTorch → ONNX → HEF compilation toolchain enabling real-time edge vision under 5W power envelope.
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['YOLOv8', 'Hailo-8L', 'Raspberry Pi 5', 'PyTorch', 'ONNX', 'HEF Runtime'].map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                          className="text-micro font-semibold text-text-secondary bg-surface-raised px-3 py-1.5 rounded-lg border border-border/80 hover:border-secondary/50 hover:text-text-primary transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-surface-raised/90 border border-secondary/30 rounded-2xl p-4 mt-auto shadow-inner">
                    <div className="text-caption font-mono text-secondary mb-1 flex items-center gap-1.5 font-bold">
                      <Cpu className="w-3.5 h-3.5" /> HARDWARE DEPLOYMENT IMPACT
                    </div>
                    <div className="text-sm text-text-secondary">
                      Achieved real-time 30+ FPS edge inference with zero drift post INT8 calibration on embedded hardware
                    </div>
                  </div>
                </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
