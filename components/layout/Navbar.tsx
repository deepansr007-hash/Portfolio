'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Code2, Sparkles, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // Generate simulated resume download link with candidate information
    const resumeContent = `DEEPAN S R - AI Full Stack Developer
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

Education: ${PERSONAL_INFO.education.degree} - ${PERSONAL_INFO.education.institution} (CGPA: ${PERSONAL_INFO.education.cgpa})

Key Projects:
- Book A Doctor (MERN Full Stack Appointment System)
- AI Symptom Checker (ML Medical Diagnosis Engine)
- AI CRM System (Automated Customer Analytics & CRM Platform)

Certifications:
- MongoDB Node.js Developer Path (SmartBridge)
- Power BI Micro Course (SkillCourse)
- FutureSkills Prime : STEM Digital Application Fundamentals
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
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-slate-950/75 border-b border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-primary/40 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
              <Code2 className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                DEEPAN S R
              </span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                AI Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-all rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-white/15 text-slate-200 hover:border-primary/50 hover:text-white shadow-sm hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-4 right-4 z-[8999] lg:hidden rounded-2xl border border-white/15 bg-slate-950/95 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-accent font-semibold text-base py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleResumeDownload();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-semibold text-sm bg-slate-900 border border-white/15 text-slate-200"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Download Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-primary to-accent text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Deepan</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
