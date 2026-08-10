import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check prefers-reduced-motion or touch devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (prefersReducedMotion || isTouchDevice) {
      // Do not hide native cursor, do not activate custom cursor elements
      document.documentElement.classList.remove('has-custom-cursor');
      return;
    }

    // Add class to document to apply global CSS cursor hidden
    document.documentElement.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHidden = true;
    let frameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (isHidden) {
        isHidden = false;
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      isHidden = true;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const tagName = target.tagName.toLowerCase();
      const isInput =
        tagName === 'input' ||
        tagName === 'textarea' ||
        tagName === 'select' ||
        target.isContentEditable ||
        target.closest('input') ||
        target.closest('textarea');

      const isInteractive =
        tagName === 'a' ||
        tagName === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        getComputedStyle(target).cursor === 'pointer';

      if (isInput) {
        // Fully hide custom cursor elements to allow clean native caret cursor
        if (ringRef.current) ringRef.current.style.display = 'none';
        if (dotRef.current) dotRef.current.style.display = 'none';
      } else {
        if (ringRef.current) ringRef.current.style.display = 'block';
        if (dotRef.current) dotRef.current.style.display = 'block';

        if (isInteractive) {
          if (ringRef.current) {
            ringRef.current.style.width = '48px';
            ringRef.current.style.height = '48px';
            ringRef.current.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
            ringRef.current.style.borderColor = '#22C55E';
          }
        } else {
          if (ringRef.current) {
            ringRef.current.style.width = '24px';
            ringRef.current.style.height = '24px';
            ringRef.current.style.backgroundColor = 'transparent';
            ringRef.current.style.borderColor = 'rgba(34, 197, 94, 0.5)';
          }
        }
      }
    };

    // requestAnimationFrame Tick loop for physics easing on ring position
    const tick = () => {
      // Linear interpolation (lerp) for spring easing effect
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.18; // speed factor
      ringY += dy * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseover', onMouseOver);
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide native cursor globally ONLY if custom cursor class is active */
        .has-custom-cursor,
        .has-custom-cursor * {
          cursor: none;
        }

        /* Enforce native pointer icons on interactive/form controls */
        .has-custom-cursor a,
        .has-custom-cursor button,
        .has-custom-cursor select,
        .has-custom-cursor input,
        .has-custom-cursor textarea,
        .has-custom-cursor label,
        .has-custom-cursor [role="button"],
        .has-custom-cursor iframe,
        .has-custom-cursor [contenteditable="true"] {
          cursor: auto !important;
        }
        
        .has-custom-cursor a,
        .has-custom-cursor button,
        .has-custom-cursor [role="button"],
        .has-custom-cursor label {
          cursor: pointer !important;
        }
        
        .has-custom-cursor input,
        .has-custom-cursor textarea {
          cursor: text !important;
        }
      `}</style>

      {/* Ring element */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-primary transition-[width,height,background-color,border-color] duration-250 ease-out opacity-0"
        style={{
          width: '24px',
          height: '24px',
          willChange: 'transform',
        }}
      />

      {/* Dot element */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] opacity-0"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
}
