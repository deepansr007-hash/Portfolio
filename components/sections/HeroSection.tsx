'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import HeroCanvas from '@/components/3d/HeroCanvas';

const ROLES = [
  'AI Full Stack Developer',
  'MERN Stack Engineer',
  'Machine Learning Innovator',
  'Web Systems Architect'
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleResumeDownload = () => {
    const resumeContent = `DEEPAN S R - AI Full Stack Developer
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

Education: ${PERSONAL_INFO.education.degree} - ${PERSONAL_INFO.education.institution} (CGPA: ${PERSONAL_INFO.education.cgpa})

Key Projects:
- Book A Doctor (MERN Full Stack Appointment System)
- AI Symptom Checker & AI CRM System (ML & Enterprise Web App)
- ShopEZ E-Commerce Platform (MERN Stack)
- Smart House Rental Application

Certifications:
- MongoDB Node.js Developer Path (SmartBridge)
- Power BI Micro Course (SkillCourse)
- FutureSkills Prime STEM Digital Application Fundamentals
- NPTEL Elite Certification : Programming in Java
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Deepan_S_R_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050816]"
    >
      {/* 3D WebGL Three.js Particle Canvas */}
      <HeroCanvas />

      {/* Ambient Radial Gradient Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/15 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide">AVAILABLE FOR FULL-TIME ROLES & PROJECTS</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.08]"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent drop-shadow-[0_0_35px_rgba(124,58,237,0.4)]">
            DEEPAN S R
          </span>
        </motion.h1>

        {/* Dynamic Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center space-x-2 text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-slate-300 mb-8"
        >
          <Terminal className="w-6 h-6 text-accent animate-pulse" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">
            {displayText}
          </span>
          <span className="w-2.5 h-7 bg-cyan-400 animate-blink" />
        </motion.div>

        {/* Brief Tagline Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-center"
        >
          Computer Science Engineering student specializing in building high-performance{' '}
          <span className="text-white font-medium">MERN Stack applications</span>,{' '}
          <span className="text-cyan-300 font-medium">AI Healthcare Diagnostics</span>, and enterprise automation solutions.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group flex items-center space-x-3 px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-primary via-purple-600 to-accent text-white shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleResumeDownload}
            className="flex items-center space-x-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-slate-900/90 border border-white/15 text-slate-200 hover:border-accent hover:text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center space-x-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-slate-950 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all hover:scale-105 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center space-x-4 pt-4 border-t border-white/10"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-accent hover:border-accent/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]"
            />
          </div>
          <span className="text-[10px] font-mono text-slate-500 mt-2 uppercase tracking-widest">
            Scroll Down
          </span>
        </motion.div>
      </div>
    </section>
  );
}
