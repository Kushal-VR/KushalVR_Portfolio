import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MoreThanCode } from './components/MoreThanCode';
import { DisciplineShowcase } from './components/DisciplineShowcase';
import { SelectedWork } from './components/SelectedWork';
import { ProjectModal } from './components/ProjectModal';
import { TechnologyStack } from './components/TechnologyStack';
import { JourneySection } from './components/JourneySection';
import { CurrentFocus } from './components/CurrentFocus';
import { EasterEgg } from './components/EasterEgg';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-[#08090A] text-[#F8F7F4] selection:bg-[#D4AF37]/30 selection:text-[#F8F7F4]">
      {/* Subtle Procedural Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Dynamic Gold Desktop Follower Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navigation />

      {/* Main Narrative Flow */}
      <main>
        {/* 00 / Hero Stage with Natural Walking Video & Glowing Gold Headline */}
        <HeroSection />

        {/* 01 / About Section with Highlight Metric Cards & Framed Portrait */}
        <AboutSection />

        {/* 02 / Featured Projects (Cortinex, Quenalty, Imposter 3D, Blender works) */}
        <SelectedWork onSelectProject={setActiveProject} />

        {/* Philosophy Transition Statement */}
        <MoreThanCode />

        {/* 03 / 4 Core Disciplines */}
        <DisciplineShowcase />

        {/* 04 / Capabilities & Tech Stack */}
        <TechnologyStack />

        {/* 05 / Evolution & Milestones (Luminous Vertical Timeline) */}
        <JourneySection />

        {/* Current Focus Horizontal Ticker */}
        <CurrentFocus />

        {/* Personal Hidden Easter Egg */}
        <EasterEgg />

        {/* 06 / Final Contact Scene */}
        <ContactSection />
      </main>

      {/* Clean Editorial Footer */}
      <Footer />

      {/* Deep Case Study Modal with Video & Specs */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};

export default App;
