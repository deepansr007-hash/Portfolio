'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GithubSection from '@/components/sections/GithubSection';
import ContactSection from '@/components/sections/ContactSection';
import Preloader from '@/components/ui/Preloader';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ServicesSection />
        <GithubSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
