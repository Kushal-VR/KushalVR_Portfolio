import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'view' | 'reveal'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorElement = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorElement) {
        const type = cursorElement.getAttribute('data-cursor');
        if (type === 'VIEW') {
          setCursorType('view');
          return;
        }
        if (type === 'REVEAL') {
          setCursorType('reveal');
          return;
        }
      }

      if (target.closest('a, button, [role="button"], input, textarea')) {
        setCursorType('link');
        return;
      }

      setCursorType('default');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central gold dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D4AF37] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_#D4AF37]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorType === 'default' || cursorType === 'link' ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Dynamic follower ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-200"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width:
            cursorType === 'view' || cursorType === 'reveal'
              ? 76
              : cursorType === 'link'
              ? 38
              : 28,
          height:
            cursorType === 'view' || cursorType === 'reveal'
              ? 76
              : cursorType === 'link'
              ? 38
              : 28,
          backgroundColor:
            cursorType === 'view' || cursorType === 'reveal'
              ? 'rgba(8, 9, 10, 0.88)'
              : cursorType === 'link'
              ? 'rgba(212, 175, 55, 0.12)'
              : 'transparent',
          borderColor:
            cursorType === 'view' || cursorType === 'reveal'
              ? '#D4AF37'
              : cursorType === 'link'
              ? '#D4AF37'
              : 'rgba(212, 175, 55, 0.3)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.2 }}
        style={{
          backdropFilter:
            cursorType === 'view' || cursorType === 'reveal'
              ? 'blur(4px)'
              : 'none',
        }}
      >
        {cursorType === 'view' && (
          <span className="text-[11px] font-mono-meta tracking-widest text-[#F5E6BE] font-bold">
            VIEW
          </span>
        )}
        {cursorType === 'reveal' && (
          <span className="text-[10px] font-mono-meta tracking-widest text-[#D4AF37] font-bold">
            REVEAL
          </span>
        )}
      </motion.div>
    </div>
  );
};
