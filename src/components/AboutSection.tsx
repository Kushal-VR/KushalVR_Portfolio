import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Layers, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoldingMobile, setIsHoldingMobile] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateLens = (clientX: number, clientY: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    el.style.setProperty('--lens-x', `${x}px`);
    el.style.setProperty('--lens-y', `${y}px`);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    updateLens(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsHoldingMobile(true);
    if (e.touches.length > 0) {
      updateLens(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateLens(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    updateLens(e.clientX, e.clientY);
    if (e.pointerType === 'touch' || (typeof window !== 'undefined' && window.innerWidth < 1024)) {
      setIsHoldingMobile(true);
    }
  };

  const handlePointerUp = () => {
    setIsHoldingMobile(false);
  };

  const stats = [
    { label: 'PROJECTS COMPLETED', value: '5+', sub: 'Web · 3D · Netcode · AI', icon: Code2 },
    { label: 'CORE DISCIPLINES', value: '4+', sub: 'Web · 3D · Games · AI', icon: Layers },
    { label: 'PRODUCTION CODE', value: 'HOSTED', sub: 'Live Enterprise Billing & Netcode', icon: Cpu },
    { label: 'DEV COMMITMENT', value: '100%', sub: 'Relentless Problem Solving', icon: Award },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#0F1115] border-t border-[#232730] py-24 md:py-36 overflow-hidden"
    >
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[12px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
            01 / ABOUT ME
          </span>
          <span className="w-12 h-[1px] bg-[#232730]" />
        </div>

        {/* 2-Column Editorial Grid (Inspired by Reference Video ref_3.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Typography, Narrative & 4 Metric Cards */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[0.94] tracking-tighter text-[#F8F7F4]">
              <span className="block gold-gradient-subtle">
                I DON&apos;T JUST WRITE CODE.
              </span>
              <span className="block text-[#D4AF37]">
                I BUILD WHAT&apos;S NEXT.
              </span>
            </h2>

            {/* Editorial Bio Copy */}
            <div className="space-y-4 text-base md:text-lg font-body text-[#A3A8B3] leading-relaxed max-w-[620px]">
              <p>
                I&apos;m a passionate developer and builder who enjoys turning ideas into working digital products.
              </p>
              <p>
                I explore software development, AI, interactive technology, 3D and game development, with a strong focus on logical problem-solving and learning through experimentation.
              </p>
              <p className="text-sm md:text-base border-l-2 border-[#D4AF37] pl-4 text-[#C5A059] italic bg-[#15181E]/50 py-2 pr-3">
                &ldquo;Coming from a middle-class background, I&apos;ve learned to value persistence, resourcefulness and making the most of every opportunity to learn and build.&rdquo;
              </p>
            </div>

            {/* 4 Highlight Metric Cards (Ref_3.jpg style) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="bg-[#15181E] border border-[#232730] hover:border-[#D4AF37]/60 p-4 transition-all duration-300 rounded-[3px] group"
                  >
                    <Icon size={16} className="text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl sm:text-3xl font-display font-bold text-[#F8F7F4] group-hover:text-[#F5E6BE] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono-meta tracking-wider text-[#D4AF37] font-semibold mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] font-body text-[#686E7B] mt-0.5 leading-snug">
                      {stat.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Framed Portrait with Gold Metallic Trim & Interactive Reveal Lens */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[440px] p-2.5 bg-gradient-to-br from-[#D4AF37]/50 via-[#232730] to-[#8C6D23]/40 shadow-2xl rounded-2xl"
            >
              <div className="bg-[#08090A] p-3 border border-[#D4AF37]/40 rounded-xl overflow-hidden">
                <div
                  ref={frameRef}
                  onPointerMove={handlePointerMove}
                  onPointerEnter={() => setIsHovered(true)}
                  onPointerLeave={() => setIsHovered(false)}
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handlePointerUp}
                  onTouchCancel={handlePointerUp}
                  onMouseDown={() => { if (typeof window !== 'undefined' && window.innerWidth < 1024) setIsHoldingMobile(true); }}
                  onMouseUp={handlePointerUp}
                  onContextMenu={(e) => e.preventDefault()}
                  data-cursor="REVEAL"
                  className="relative aspect-[3/4] overflow-hidden bg-[#0F1115] rounded-lg border border-[#232730] cursor-crosshair select-none touch-none group active:scale-[0.99] transition-transform"
                >
                  {/* Base Main Layer: Clean Black & White Portrait */}
                  <img
                    src="/kushal_portrait.jpg"
                    alt="Kushal VR Portrait"
                    className="w-full h-full object-cover object-top contrast-[1.05]"
                  />

                  {/* Top Reveal Layer: Vibrant Cinematic Persona Photo (Revealed strictly within the lens radius) */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: (isHoldingMobile || isHovered) ? 1 : 0,
                      maskImage: 'radial-gradient(circle 135px at var(--lens-x, -500px) var(--lens-y, -500px), black 0%, black 72%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(circle 135px at var(--lens-x, -500px) var(--lens-y, -500px), black 0%, black 72%, transparent 100%)',
                    }}
                  >
                    <img
                      src="/kushal_reveal.png"
                      alt="Kushal VR Alter Ego"
                      className="w-full h-full object-cover object-top filter brightness-[1.05] contrast-[1.08]"
                    />
                  </div>

                  {/* Glowing Lens Ring Border tracking the cursor / touch position */}
                  {(isHovered || isHoldingMobile) && (
                    <div
                      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.75),inset_0_0_20px_rgba(212,175,55,0.35)] transition-transform duration-75"
                      style={{
                        left: 'var(--lens-x, -500px)',
                        top: 'var(--lens-y, -500px)',
                        width: '270px',
                        height: '270px',
                      }}
                    />
                  )}

                  {/* Subtle corner badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#08090A]/90 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full text-[10px] font-mono-meta text-[#F5E6BE] font-semibold flex items-center gap-1.5 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>KUSHAL VR</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#08090A]/90 backdrop-blur-sm border border-[#232730] rounded-full text-[9px] font-mono-meta flex items-center gap-1.5 pointer-events-none transition-colors duration-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${(isHovered || isHoldingMobile) ? 'bg-[#D4AF37] animate-ping' : 'bg-[#D4AF37]'}`} />
                    <span className={(isHovered || isHoldingMobile) ? 'text-[#F5E6BE] font-bold tracking-wider' : 'text-[#A3A8B3]'}>
                      <span className="hidden sm:inline">
                        {isHovered ? 'ALTER EGO REVEALED' : 'HOVER TO REVEAL'}
                      </span>
                      <span className="sm:hidden">
                        {isHoldingMobile ? 'DRAG LENS TO EXPLORE' : 'HOLD & MOVE TO REVEAL'}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono-meta text-[#686E7B]">
                  <span>BASED IN INDIA</span>
                  <span className="text-[#D4AF37]">CURIOUS ABOUT EVERYTHING</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
