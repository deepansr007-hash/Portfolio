'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ProjectModal from '@/components/ui/ProjectModal';
import { PROJECTS_DATA, Project } from '@/constants/portfolioData';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'MERN Healthcare Platform', 'AI / Machine Learning & Web App', 'Full-Stack E-Commerce'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Background Radial Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>03 // FEATURED WORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Architected For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Impact & Scale
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Explore real-world software platforms engineered with full-stack MERN tech stack, Machine Learning diagnostic workflows, and modern cloud deployment.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] border border-white/20'
                    : 'bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard
                  glowColor="purple"
                  className="h-full flex flex-col justify-between p-0 overflow-hidden group border-white/10 hover:border-primary/50"
                >
                  {/* Card Image Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Quick View Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
                    >
                      <span className="flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:scale-105 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>Interactive Preview</span>
                      </span>
                    </button>

                    {/* Featured Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 border border-white/15 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-xl font-bold text-white hover:text-accent transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          {project.title}
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </h3>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-500">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs font-bold text-accent hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
