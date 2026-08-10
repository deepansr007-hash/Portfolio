'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { TIMELINE_DATA } from '@/constants/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            <span>04 // CAREER & EDUCATION TIMELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Milestones &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Academic Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A chronological timeline of software development milestones, academic achievements, and production project releases.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Vertical Axis Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-cyan-400 to-transparent opacity-40 shadow-[0_0_15px_#7C3AED]" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-accent flex items-center justify-center shadow-[0_0_20px_#22D3EE] z-20">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-4 h-4 text-accent" />
                    ) : item.type === 'achievement' ? (
                      <Award className="w-4 h-4 text-purple-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>

                  {/* Card Content Container */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <GlassCard glowColor="purple" className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {item.year}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {item.institution}
                      </p>

                      <p className="text-slate-300 text-xs leading-relaxed">
                        {item.description}
                      </p>

                      {item.details && (
                        <div className="pt-2 border-t border-white/10 space-y-1.5">
                          {item.details.map((detail) => (
                            <div key={detail} className="flex items-center space-x-2 text-xs text-slate-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
