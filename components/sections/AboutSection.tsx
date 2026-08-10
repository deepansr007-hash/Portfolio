'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, Globe2, Award, Download, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { PERSONAL_INFO } from '@/constants/portfolioData';

export default function AboutSection() {
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
    <section id="about" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <User className="w-3.5 h-3.5 text-accent" />
            <span>01 // ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Engineering Driven By{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Innovation & AI
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Passionate Computer Science student architecting robust full-stack applications, intelligent healthcare systems, and scalable web solutions.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Personal Bio (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2"
          >
            <GlassCard glowColor="purple" className="h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {PERSONAL_INFO.bio}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  I specialize in turning complex software requirements into intuitive, reliable, and visually captivating digital products. From MongoDB database models to reactive frontends, I enjoy writing clean, maintainable code.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-300">
                  Full-Stack Architecture
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-purple-300">
                  Machine Learning Integrations
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-emerald-300">
                  REST API Design
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Academic Background (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <GlassCard glowColor="cyan" className="h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Education & Academics</h3>
                      <span className="text-xs text-slate-400 font-mono">CSE Degree Candidate</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                    CGPA: {PERSONAL_INFO.education.cgpa}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-base font-semibold text-white">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Core Coursework Covered:
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    {PERSONAL_INFO.education.coursework.map((course) => (
                      <div key={course} className="flex items-center space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Metrics Counter (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <GlassCard glowColor="aquamarine" className="h-full flex flex-col justify-between">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Key Impact Metrics</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">
                    8.2
                  </span>
                  <p className="text-[10px] font-mono text-slate-400 uppercase mt-1">
                    B.E. CGPA
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    5+
                  </span>
                  <p className="text-[10px] font-mono text-slate-400 uppercase mt-1">
                    Major Web Apps
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                    4
                  </span>
                  <p className="text-[10px] font-mono text-slate-400 uppercase mt-1">
                    Certifications
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    100%
                  </span>
                  <p className="text-[10px] font-mono text-slate-400 uppercase mt-1">
                    Commitment
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 4: Languages & Resume CTA (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <GlassCard glowColor="purple" className="h-full flex flex-col justify-between space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Languages & Resume</h3>
              </div>

              <div className="flex items-center justify-around py-3 px-4 rounded-xl bg-slate-950/60 border border-white/10 text-xs">
                {PERSONAL_INFO.languagesSpoken.map((lang) => (
                  <div key={lang.name} className="flex flex-col items-center">
                    <span className="font-bold text-white">{lang.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleResumeDownload}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get Complete Verified CV</span>
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
