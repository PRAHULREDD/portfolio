import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tiltAmount?: number;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 217, 192, 0.22)',
  tiltAmount = 12,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Pointer position values relative to card element
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt calculation with spring physics
  const rotateXRaw = useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateYRaw = useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const rotateX = useSpring(rotateXRaw, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 220, damping: 18 });

  // Spotlight position inside card (percentage)
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    mouseX.set(posX / width - 0.5);
    mouseY.set(posY / height - 0.5);

    spotlightX.set((posX / width) * 100);
    spotlightY.set((posY / height) * 100);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    if (onMouseLeave) onMouseLeave(e);
  };

  if (shouldReduceMotion) {
    return (
      <div
        className={`relative bg-surface border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`group relative bg-surface border border-border/90 rounded-2xl p-6 md:p-8 hover:border-primary/60 hover:shadow-[0_0_35px_rgba(0,217,192,0.25)] transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(650px circle at ${spotlightX.get()}% ${spotlightY.get()}%, ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Outer Border Glow Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/40 transition-colors duration-300 z-10" />

      {/* Card Content with 3D Depth Layer Separation */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
