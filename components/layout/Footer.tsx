'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Code, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Glow gradient background bottom effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                <Code className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xl font-black text-white tracking-widest uppercase">
                DEEPAN S R
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {PERSONAL_INFO.subtitle} Engineer based in Tamil Nadu, specialized in MERN Stack, AI Diagnostics, and high-conversion web architectures.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-accent hover:border-accent/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Journey
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Interactive Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Status */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              Location & Status
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {PERSONAL_INFO.location}
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Hire</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} DEEPAN S R. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>using Next.js 15 & Three.js</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/15 text-slate-300 hover:text-white hover:border-primary/60 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all group cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
}
