import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Play, Box, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const total = PROJECTS.length;
  const currentProject = PROJECTS[activeIdx] || PROJECTS[0];

  // Natural scroll progression: 0 to 1 across 300vh track without any wheel blocking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map latest (0 to 1) smoothly to projects (0, 1, 2, 3)
    const idx = Math.min(Math.floor(latest * total), total - 1);
    if (idx !== activeIdx && idx >= 0 && idx < total) {
      setActiveIdx(idx);
    }
  });

  const handleSelectIdx = (i: number) => {
    setActiveIdx(i);
    if (containerRef.current) {
      const top = containerRef.current.offsetTop;
      const height = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = top + (i / (total - 1)) * height;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSelectIdx(Math.max(activeIdx - 1, 0));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSelectIdx(Math.min(activeIdx + 1, total - 1));
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#08090A] border-t border-[#232730]"
    >
      {/* Sticky Pinned Presentation Viewport */}
      <div className="sticky top-0 w-full h-screen min-h-[640px] flex flex-col justify-center items-center pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-[6vw] overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col justify-center my-auto">
        
        {/* Section Header & Interactive Progress Switcher */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-3 sm:mb-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="text-[11px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
                02 / SELECTED WORK
              </span>
              <span className="w-10 h-[1px] bg-[#232730]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#F8F7F4] tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Progress Selector Pills + Prev/Next Steppers */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar max-w-full pb-1 sm:pb-0 flex-nowrap">
            <button
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Previous Project"
              className={`p-1.5 sm:p-2 rounded-full border border-[#232730] transition-colors cursor-pointer ${
                activeIdx === 0 ? 'opacity-30 cursor-not-allowed text-[#686E7B]' : 'bg-[#15181E] text-[#D4AF37] hover:border-[#D4AF37]'
              }`}
            >
              <ChevronLeft size={14} />
            </button>
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleSelectIdx(i)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-mono-meta transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeIdx === i
                    ? 'bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C5A059] text-[#08090A] font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-102'
                    : 'bg-[#15181E] border border-[#232730] text-[#A3A8B3] hover:text-[#F8F7F4] hover:border-[#D4AF37]/40'
                }`}
              >
                <span className="font-bold">{p.number}</span>
                <span>{p.title.split(' ')[0]}</span>
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={activeIdx === total - 1}
              aria-label="Next Project"
              className={`p-1.5 sm:p-2 rounded-full border border-[#232730] transition-colors cursor-pointer ${
                activeIdx === total - 1 ? 'opacity-30 cursor-not-allowed text-[#686E7B]' : 'bg-[#15181E] text-[#D4AF37] hover:border-[#D4AF37]'
              }`}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STATIC SOLID CARD FRAME: STAYS FIXED IN CENTER, CONTENTS DISSOLVE         */}
        {/* ========================================================================= */}
        <div className="w-full bg-[#0F1115] border border-[#232730] hover:border-[#D4AF37]/50 rounded-[4px] p-4 sm:p-6 lg:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl relative">
          
          {/* Top Folder Header Row (Solid Frame Element) */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 sm:pb-3 border-b border-[#232730] mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-xs font-mono-meta text-[#D4AF37] font-bold">
                {currentProject.number} // {currentProject.category}
              </span>
              <span className="text-[#232730] hidden sm:inline">|</span>
              <span className="text-[10px] sm:text-[11px] font-mono-meta tracking-wider text-[#A3A8B3] uppercase">
                {currentProject.id === 'cortinex'
                  ? 'HOSTED ON CLOUD'
                  : currentProject.id === 'quenalty'
                  ? 'NEURO-PRIMING ENGINE'
                  : currentProject.id === 'imposter-3d'
                  ? 'FEATURED CLIMAX'
                  : 'BLENDER CYCLES 4K'}
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#15181E] border border-[#D4AF37]/40 text-[10px] font-mono-meta text-[#F5E6BE] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>{currentProject.status}</span>
              </div>

              <span className="text-[11px] font-mono-meta text-[#D4AF37] font-bold px-2.5 py-0.5 bg-[#15181E] border border-[#232730] rounded">
                0{activeIdx + 1} / 0{total}
              </span>
            </div>
          </div>

          {/* Inner Dissolve Stage: Only Active Project in DOM, 1-Scroll Smooth */}
          <div className="relative w-full h-auto lg:h-[350px] overflow-visible lg:overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.98 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.02 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center"
              >
                {/* Left Column: Typography, Role, Tech & CTAs */}
                <div className="lg:col-span-5 space-y-3 sm:space-y-3.5 order-2 lg:order-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#F8F7F4] tracking-tight leading-snug group-hover:text-[#F5E6BE] transition-colors">
                    {currentProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-body text-[#A3A8B3] leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {currentProject.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {currentProject.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] sm:text-[11px] font-mono-meta bg-[#15181E] text-[#D4AF37] border border-[#232730] rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs: Guaranteed Fully Visible on Mobile */}
                  <div className="pt-2 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={() => onSelectProject(currentProject)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono-meta tracking-widest text-[#08090A] bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C5A059] px-5 py-3 font-bold transition-all duration-300 rounded-[2px] shadow-md shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 cursor-pointer"
                    >
                      {currentProject.id === 'imposter-3d' ? (
                        <Play size={13} fill="#08090A" />
                      ) : currentProject.id === 'blender-works' ? (
                        <Box size={13} />
                      ) : (
                        <Sparkles size={13} />
                      )}
                      <span>
                        {currentProject.id === 'imposter-3d'
                          ? 'PLAY GAMEPLAY & CASE STUDY'
                          : currentProject.id === 'blender-works'
                          ? 'VIEW 3D BLUEPRINTS'
                          : 'VIEW CASE STUDY'}
                      </span>
                      <ArrowUpRight size={13} />
                    </button>

                    {currentProject.website && (
                      <a
                        href={`https://${currentProject.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono-meta tracking-wider text-[#F8F7F4] hover:text-[#D4AF37] transition-colors py-1"
                      >
                        <span>{currentProject.website}</span>
                        <ExternalLink size={12} className="text-[#D4AF37]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Real Project Media Preview */}
                <div className="lg:col-span-7 order-1 lg:order-2 h-full flex items-center">
                  <div
                    data-cursor="VIEW"
                    onClick={() => onSelectProject(currentProject)}
                    className="relative w-full cursor-pointer overflow-hidden border border-[#232730] hover:border-[#D4AF37]/60 bg-[#15181E] aspect-[16/9] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[180px] sm:max-h-[240px] lg:max-h-[310px] shadow-2xl rounded-[3px] group/media transition-all duration-300 mx-auto"
                  >
                    {currentProject.id === 'imposter-3d' && currentProject.videoUrl ? (
                      <div className="relative w-full h-full">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={currentProject.image}
                          className="w-full h-full object-cover"
                        >
                          <source src={currentProject.videoUrl} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#08090A]/90 border border-[#D4AF37]/40 text-[9px] font-mono-meta text-[#F5E6BE] flex items-center gap-1.5 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          LIVE GAMEPLAY VIDEO
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/media:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 bg-[#08090A]/90 border border-[#D4AF37]/40 text-[9px] sm:text-[10px] font-mono-meta text-[#F5E6BE] backdrop-blur-sm">
                          {currentProject.id === 'cortinex'
                            ? 'ACTIVE POS DASHBOARD'
                            : currentProject.id === 'quenalty'
                            ? 'NEURAL INTERFACE'
                            : 'COMMERCIAL OFFICE BLUEPRINT'}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Status & Scroll Instructions (Solid Frame Element) */}
          <div className="mt-3 pt-2.5 border-t border-[#232730]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono-meta text-[#686E7B]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[#F5E6BE] font-semibold">
                ACTIVE: {currentProject.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">
                {activeIdx === total - 1
                  ? 'PROJECT 04 OF 04 · SCROLL DOWN FOR PHILOSOPHY ↓'
                  : `SCROLL OR CLICK TO EXPLORE · 0${activeIdx + 2} OF 0${total} ↓`}
              </span>
            </div>
          </div>

        </div>

      </div>
      </div>
    </section>
  );
};
