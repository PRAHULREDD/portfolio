import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  el?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  mode?: 'word' | 'character';
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = '',
  el = 'h1',
  mode = 'character',
  delay = 0,
  stagger = 0.025,
  once = true,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = el;
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const unitVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
      filter: 'blur(12px)',
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        mass: 0.8,
      },
    },
  };

  const words = text.split(' ');

  const renderUnits = () => {
    if (mode === 'word') {
      return words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={unitVariants}
          className="inline-block mr-[0.25em] whitespace-nowrap"
          style={{ transformOrigin: 'center bottom', perspective: '800px' }}
        >
          {word}
        </motion.span>
      ));
    }

    // Character mode — preserves word spacing
    return words.map((word, wordIndex) => (
      <span key={`w-${wordIndex}`} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={`c-${wordIndex}-${charIndex}`}
            variants={unitVariants}
            className="inline-block"
            style={{ transformOrigin: 'center bottom', perspective: '800px' }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    ));
  };

  const props = {
    className: `inline-flex flex-wrap ${className}`,
    variants: containerVariants,
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once, margin: '-40px' },
    children: renderUnits(),
  };

  switch (el) {
    case 'h2': return <motion.h2 {...props} />;
    case 'h3': return <motion.h3 {...props} />;
    case 'p': return <motion.p {...props} />;
    case 'span': return <motion.span {...props} />;
    case 'div': return <motion.div {...props} />;
    default: return <motion.h1 {...props} />;
  }
}
