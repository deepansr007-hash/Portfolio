'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BarChart3, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { CERTIFICATIONS_DATA } from '@/constants/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-7 h-7 text-cyan-400" />,
  Cpu: <Cpu className="w-7 h-7 text-accent" />,
  Award: <Award className="w-7 h-7 text-purple-400" />,
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <Award className="w-3.5 h-3.5 text-accent" />
            <span>05 // OFFICIAL CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Verified Industry{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Certifications
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Formal certifications and specialized credentials validating expertise in database systems, data analytics, Java OOP, and STEM fundamentals.
          </motion.p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor="cyan"
                className="h-full flex flex-col justify-between p-6 md:p-8 space-y-6 border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/15 shadow-inner">
                        {ICON_MAP[cert.iconName]}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                          {cert.issuer}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-primary/20 border border-primary/40 text-purple-300">
                      {cert.badgeText}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Credential</span>
                  </div>
                  <span className="text-slate-500">{cert.date}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
