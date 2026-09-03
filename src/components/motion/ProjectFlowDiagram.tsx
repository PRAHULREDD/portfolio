import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface FlowNode {
  label: string;
  metric?: string;
}

interface ProjectFlowDiagramProps {
  nodes: FlowNode[];
}

/**
 * Horizontal scroll-driven pipeline flow.
 * Supports up to 6 nodes (hooks pre-allocated).
 * Final node gets primary emphasis.
 */
export default function ProjectFlowDiagram({ nodes }: ProjectFlowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 60%'],
  });

  // Pre-allocate hooks for up to 6 nodes (fixed call count)
  const gap = 0.7 / Math.max(nodes.length, 1);

  const n0o = useTransform(scrollYProgress, [0, 0 + 0.15], [0.15, 1]);
  const n0s = useTransform(scrollYProgress, [0, 0 + 0.15], [0.8, 1]);
  const n0c = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);

  const n1o = useTransform(scrollYProgress, [gap, gap + 0.15], [0.15, 1]);
  const n1s = useTransform(scrollYProgress, [gap, gap + 0.15], [0.8, 1]);
  const n1c = useTransform(scrollYProgress, [gap + 0.08, gap + 0.18], [0, 1]);

  const n2o = useTransform(scrollYProgress, [gap * 2, gap * 2 + 0.15], [0.15, 1]);
  const n2s = useTransform(scrollYProgress, [gap * 2, gap * 2 + 0.15], [0.8, 1]);
  const n2c = useTransform(scrollYProgress, [gap * 2 + 0.08, gap * 2 + 0.18], [0, 1]);

  const n3o = useTransform(scrollYProgress, [gap * 3, gap * 3 + 0.15], [0.15, 1]);
  const n3s = useTransform(scrollYProgress, [gap * 3, gap * 3 + 0.15], [0.8, 1]);
  const n3c = useTransform(scrollYProgress, [gap * 3 + 0.08, gap * 3 + 0.18], [0, 1]);

  const n4o = useTransform(scrollYProgress, [gap * 4, gap * 4 + 0.15], [0.15, 1]);
  const n4s = useTransform(scrollYProgress, [gap * 4, gap * 4 + 0.15], [0.8, 1]);
  const n4c = useTransform(scrollYProgress, [gap * 4 + 0.08, gap * 4 + 0.18], [0, 1]);

  const n5o = useTransform(scrollYProgress, [gap * 5, gap * 5 + 0.15], [0.15, 1]);
  const n5s = useTransform(scrollYProgress, [gap * 5, gap * 5 + 0.15], [0.8, 1]);

  const allOpacities = [n0o, n1o, n2o, n3o, n4o, n5o];
  const allScales = [n0s, n1s, n2s, n3s, n4s, n5s];
  const allConnections = [n0c, n1c, n2c, n3c, n4c];

  if (shouldReduceMotion) {
    return (
      <div ref={containerRef} className="flex items-center gap-1 flex-wrap my-4">
        {nodes.map((node, i) => (
          <React.Fragment key={node.label}>
            <div className="bg-surface/90 border border-border/80 rounded-lg px-3 py-2 text-center">
              <div className="text-xs font-mono font-bold text-primary">{node.label}</div>
              {node.metric && <div className="text-xs text-text-secondary">{node.metric}</div>}
            </div>
            {i < nodes.length - 1 && <span className="text-primary/40 text-xs mx-1">→</span>}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="my-4 relative">
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
        {nodes.map((node, i) => {
          const isLast = i === nodes.length - 1;

          return (
            <React.Fragment key={node.label}>
              <motion.div
                style={{ opacity: allOpacities[i], scale: allScales[i] }}
                className={`flex-shrink-0 border rounded-xl px-3 py-2.5 text-center transition-colors duration-300 min-w-[80px] ${
                  isLast
                    ? 'bg-primary/15 border-primary/50 shadow-[0_0_12px_rgba(0,217,192,0.15)]'
                    : 'bg-surface/90 border-border/80 hover:border-primary/40'
                }`}
              >
                <div className={`text-[10px] font-mono font-bold tracking-wider ${isLast ? 'text-primary' : 'text-text-tertiary'}`}>
                  {node.label}
                </div>
                {node.metric && (
                  <div className={`text-sm font-bold mt-0.5 ${isLast ? 'text-primary' : 'text-text-primary'}`}>
                    {node.metric}
                  </div>
                )}
              </motion.div>

              {/* Animated connection line */}
              {i < nodes.length - 1 && (
                <div className="flex-shrink-0 w-6 flex items-center justify-center relative">
                  <div className="w-full h-px bg-border/40" />
                  <motion.div
                    style={{ scaleX: allConnections[i] }}
                    className="absolute inset-y-0 left-0 w-full flex items-center origin-left"
                  >
                    <div className="w-full h-px bg-primary/60 shadow-[0_0_4px_rgba(0,217,192,0.3)]" />
                  </motion.div>
                  <span className="absolute right-0 text-primary/40 text-[8px]">▸</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
