'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050816] text-white selection:bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Logo / Brand Watermark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-4 text-center z-10 px-6"
          >
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900/80 border border-primary/40 shadow-[0_0_30px_rgba(124,58,237,0.4)] backdrop-blur-md">
              <span className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                DSR
              </span>
              <motion.div
                className="absolute inset-0 rounded-2xl border border-accent/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-xl font-bold tracking-[0.25em] text-white uppercase">
                DEEPAN S R
              </h1>
              <p className="text-xs tracking-widest text-cyan-400 font-mono uppercase">
                AI Full Stack Developer Portfolio
              </p>
            </div>
          </motion.div>

          {/* Dynamic Progress Bar & Percentage */}
          <div className="mt-12 w-64 md:w-80 flex flex-col items-center space-y-3 z-10">
            <div className="w-full h-[3px] bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_15px_#22D3EE]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="animate-pulse">INITIALIZING EXPERIENCE...</span>
              <span className="text-accent font-bold">{progress}%</span>
            </div>
          </div>

          {/* Bottom Luxury Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8 text-[10px] tracking-[0.3em] font-mono text-slate-500 uppercase"
          >
            Mahendra Engineering College • Salem
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
