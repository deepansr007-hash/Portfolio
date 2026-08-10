'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitFork, Code2, ExternalLink } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { GITHUB_STATS } from '@/constants/portfolioData';

export default function GithubSection() {
  // Generate 52 weeks x 7 days contribution grid simulation
  const weeks = Array.from({ length: 45 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const level = Math.floor(Math.random() * 5);
      return level;
    })
  );

  const levelColors = [
    'bg-slate-900 border-white/5',
    'bg-purple-950 border-purple-800',
    'bg-purple-800 border-purple-600',
    'bg-purple-600 border-purple-400',
    'bg-accent border-cyan-300 shadow-[0_0_8px_#22D3EE]',
  ];

  return (
    <section className="relative py-24 bg-[#050816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <Github className="w-3.5 h-3.5 text-accent" />
            <span>07 // OPEN SOURCE METRICS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            GitHub Activity &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Code Stats
            </span>
          </motion.h2>
        </div>

        {/* GitHub Stats Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Heatmap Card (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard glowColor="purple" className="space-y-6 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/15 text-white">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">@{GITHUB_STATS.username}</h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {GITHUB_STATS.contributionsThisYear}+ Contributions in Past Year
                    </span>
                  </div>
                </div>

                <a
                  href={`https://github.com/${GITHUB_STATS.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 border border-white/15 text-slate-200 hover:text-white hover:border-primary transition-all"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>

              {/* Contribution Graph Heatmap Matrix */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 overflow-x-auto custom-scrollbar">
                <div className="flex space-x-1 min-w-[650px] justify-between">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col space-y-1">
                      {week.map((lvl, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-3 h-3 rounded-sm border ${levelColors[lvl]} transition-transform hover:scale-125`}
                          title={`Contributions level: ${lvl}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-4">
                  <span>Less</span>
                  <div className="flex items-center space-x-1">
                    {levelColors.map((cls, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-sm border ${cls}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Languages Breakdown Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <GlassCard glowColor="cyan" className="space-y-6 p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Language Breakdown</h3>
                </div>

                <div className="space-y-4">
                  {GITHUB_STATS.topLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300 font-semibold">{lang.name}</span>
                        <span className="text-cyan-400">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${lang.percentage}%`,
                            backgroundColor: lang.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                  <span className="text-xl font-bold text-accent">{GITHUB_STATS.totalRepos}</span>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Public Repos</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                  <span className="text-xl font-bold text-purple-400">{GITHUB_STATS.totalStars}</span>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Stars Earned</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
