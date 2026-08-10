'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Linkedin, Github, Sparkles } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { PERSONAL_INFO } from '@/constants/portfolioData';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#06B6D4', '#22D3EE'],
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050816] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30"
          >
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>08 // GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight"
          >
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-accent">
              Extraordinary
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Have an exciting full-stack engineering role, AI application concept, or software project? Send a message directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Details Column (Spans 2 on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <GlassCard glowColor="cyan" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" /> Direct Contact
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          Email Address
                        </span>
                        <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {PERSONAL_INFO.email}
                        </p>
                      </div>
                    </div>
                    <span className="text-slate-500 hover:text-white transition-colors">
                      {copiedField === 'Email' ? (
                        <span className="text-xs font-mono text-emerald-400">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Phone Box */}
                <div
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'Phone')}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          Phone Number
                        </span>
                        <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {PERSONAL_INFO.phone}
                        </p>
                      </div>
                    </div>
                    <span className="text-slate-500 hover:text-white transition-colors">
                      {copiedField === 'Phone' ? (
                        <span className="text-xs font-mono text-emerald-400">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Current Location
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="pt-4 border-t border-white/10 flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-200 hover:border-cyan-500/50 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono font-bold text-slate-200 hover:border-purple-500/50 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Glassmorphism Form Column (Spans 3 on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard glowColor="purple" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Deepan will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Full Stack Engineering Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your role or project requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-primary via-purple-600 to-accent text-white shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
