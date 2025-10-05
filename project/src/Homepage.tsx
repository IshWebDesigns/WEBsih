import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FloatingApps } from './components/FloatingApps';
import { ProjectsSection } from './components/ProjectsSection';
import { CallToActionSection } from './components/CallToActionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />
      <FloatingApps />
      <ProjectsSection />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};