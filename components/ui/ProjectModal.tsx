'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '@/constants/portfolioData';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7C3AED', '#06B6D4', '#22D3EE'],
    });
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-slate-950/90 p-6 md:p-8 shadow-[0_0_50px_rgba(124,58,237,0.3)] backdrop-blur-2xl text-white custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all border border-white/10"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>{project.category}</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {project.title}
          </h2>

          {/* Project Media Preview */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6 border border-white/10 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <span className="text-xs md:text-sm font-semibold text-accent flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {project.metrics}
              </span>
              <span className="text-xs text-slate-400 font-mono">Live System Verified</span>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> Architecture & Details
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {project.fullDesc}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-primary/10 border border-primary/30 text-purple-300 shadow-[0_0_10px_rgba(124,58,237,0.15)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo Preview
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800/80 border border-white/15 text-slate-200 hover:bg-slate-700 hover:text-white transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" /> View GitHub Repository
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
