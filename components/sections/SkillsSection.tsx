'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layout, Server, Database, Brain, Wrench, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { SKILL_CATEGORIES } from '@/constants/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-purple-400" />,
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Brain: <Brain className="w-5 h-5 text-accent" />,
  Wrench: <Wrench className="w-5 h-5 text-pink-400" />,
};

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <Cpu className="w-3.5 h-3.5 text-accent" />
            <span>02 // TECH STACK MATRIX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Capabilities &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A comprehensive breakdown of technical skills spanning frontend interfaces, backend microservices, database engine design, and AI model workflows.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-white/20 scale-105'
                    : 'bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {ICON_MAP[cat.iconName]}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Progress Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlassCard glowColor="purple" className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="font-bold text-white text-base">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden relative border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_#22D3EE]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span>Proficiency</span>
                    <span>Production Grade</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
