import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface PinSectionProps {
  children: (progress: any) => React.ReactNode;
  heightInVh?: number; // e.g. 200 for 200vh pinned scroll length
  className?: string;
}

export default function PinSection({
  children,
  heightInVh = 200,
  className = '',
}: PinSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  if (shouldReduceMotion) {
    return <div className={`relative ${className}`}>{children(0.5)}</div>;
  }

  return (
    <div
      ref={containerRef}
      style={{ height: `${heightInVh}vh` }}
      className={`relative w-full ${className}`}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {children(scrollYProgress)}
      </div>
    </div>
  );
}
