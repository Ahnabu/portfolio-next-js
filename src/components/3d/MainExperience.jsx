'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Nav3D from './Nav3D';
import HeroSection3D from './HeroSection3D';
import StatsSection3D from './StatsSection3D';
import ServicesSection3D from './ServicesSection3D';
import ResumeSection3D from './ResumeSection3D';
import WorkSection3D from './WorkSection3D';
import ContactSection3D from './ContactSection3D';
import Footer3D from './Footer3D';

// Dynamically load 3D canvas background without SSR
const CanvasBackground = dynamic(() => import('./CanvasBackground'), {
  ssr: false,
});

export default function MainExperience() {
  return (
    <div className="relative min-h-screen bg-[#1c1c22] text-white selection:bg-accent selection:text-primary overflow-x-hidden">
      {/* Fixed interactive 3D WebGL Background Canvas */}
      <CanvasBackground />

      {/* Floating 3D Glass Header Navigation */}
      <Nav3D />

      {/* Scrollable Page Content Overlaid on 3D World */}
      <main className="relative z-10">
        <HeroSection3D />
        <StatsSection3D />
        <ServicesSection3D />
        <ResumeSection3D />
        <WorkSection3D />
        <ContactSection3D />
      </main>

      {/* Footer */}
      <Footer3D />
    </div>
  );
}
