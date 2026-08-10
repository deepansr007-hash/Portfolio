'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Server, LineChart, Figma, Globe, CheckCircle2, Layers } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { SERVICES_DATA } from '@/constants/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-accent" />,
  Server: <Server className="w-6 h-6 text-cyan-400" />,
  LineChart: <LineChart className="w-6 h-6 text-emerald-400" />,
  Figma: <Figma className="w-6 h-6 text-pink-400" />,
  Globe: <Globe className="w-6 h-6 text-sky-400" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>06 // SPECIALIZED SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Engineering Solutions &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            From conceptualizing modern UI/UX to deploying containerized backends and machine learning algorithms.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard
                glowColor="purple"
                className="h-full flex flex-col justify-between p-6 space-y-6 border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/15 w-fit mb-4">
                    {ICON_MAP[service.iconName]}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full text-center py-2.5 rounded-xl font-bold text-xs bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors block"
                >
                  Request Collaboration
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
