'use client';

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'aquamarine' | 'default';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  glowColor = 'default',
  hoverEffect = true,
  onClick,
}: GlassCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    purple: 'rgba(124, 58, 237, 0.25)',
    cyan: 'rgba(6, 182, 212, 0.25)',
    aquamarine: 'rgba(34, 211, 238, 0.25)',
    default: 'rgba(255, 255, 255, 0.12)',
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverEffect ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-colors duration-300',
        hoverEffect && 'hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer',
        className
      )}
    >
      {/* Interactive Radial Spotlight on Hover */}
      {hoverEffect && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowStyles[glowColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* Subtle Top Border Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
