import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] md:h-screen md:min-h-[640px] bg-[#08090A] flex flex-col justify-between pt-16 sm:pt-20 pb-3 sm:pb-4 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* CINEMATIC BACKGROUND VIDEO: Multi-layer Zero-Edge Blended Stage            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {/* Ambient background glow and vignettes */}
        <div className="absolute inset-0 bg-[#08090A]" />
        
        {/* Soft background illumination aligned with the spotlight beam */}
        <div className="absolute top-0 right-[2%] sm:right-[8%] lg:right-[15%] w-[450px] h-[500px] bg-gradient-to-b from-white/[0.08] via-[#D4AF37]/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-4 right-[2%] sm:right-[6%] lg:right-[12%] w-[380px] h-[160px] bg-[#D4AF37]/[0.08] rounded-full blur-2xl pointer-events-none" />

        {/* Video Wrapper: Shifted upwards on mobile with full stage height + zero-edge integration */}
        <div
          className="absolute inset-x-0 top-0 md:top-auto md:inset-y-0 md:right-[3%] lg:right-[6%] xl:right-[10%] md:left-auto h-[80vh] sm:h-[82vh] md:h-[84vh] max-h-[760px] my-auto flex items-center justify-center md:justify-end z-0 opacity-85 sm:opacity-90 md:opacity-100"
          style={{
            mixBlendMode: 'lighten',
            maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 100%)',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero_video_poster.jpg"
            className="h-full w-auto object-contain filter contrast-[1.05] brightness-[1.0]"
          >
            <source src="/hero_walking_kushal.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Directional Edge Faders to ensure zero box borders across all screen sizes */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08090A] via-[#08090A]/60 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#08090A] via-[#08090A]/90 to-transparent z-10" />
        <div className="hidden md:block absolute inset-y-0 left-0 w-[55%] lg:w-[48%] bg-gradient-to-r from-[#08090A] via-[#08090A]/85 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Hero Content Stage (Layered above full-screen video) */}
      <div className="relative z-10 max-w-[1500px] w-full mx-auto px-5 sm:px-6 md:px-[6vw] flex-1 flex flex-col justify-center md:my-auto py-4 sm:py-6 md:py-0">
        <div className="max-w-[720px] space-y-3.5 sm:space-y-4 md:space-y-4.5">
          {/* Top Wordmark Tag (Hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden sm:inline-flex items-center gap-2.5 px-3 py-1 bg-[#15181E]/90 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <Sparkles size={12} className="text-[#D4AF37]" />
            <span className="text-[11px] font-mono-meta tracking-widest text-[#F5E6BE] font-medium">
              KUSHAL VR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-mono-meta tracking-wider text-[#A3A8B3]">
              PORTFOLIO 2026
            </span>
          </motion.div>

          {/* Main Huge Typography Headline with Glowing Gold Gradient */}
          <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.93] tracking-tight text-[#F8F7F4]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="block"
            >
              I BUILD
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              DIGITAL
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="block gold-gradient-text drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]"
            >
              EXPERIENCES.
            </motion.span>
          </h1>

          {/* Roles / Tech Scope */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xs sm:text-sm font-mono-meta tracking-wider text-[#D4AF37] flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold"
          >
            <span>FULL STACK DEVELOPER</span>
            <span className="text-[#232730]">·</span>
            <span>CREATIVE TECHNOLOGIST</span>
            <span className="text-[#232730]">·</span>
            <span>3D &amp; GAME DEV</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xs sm:text-sm md:text-base font-body text-[#A3A8B3] max-w-[500px] leading-relaxed"
          >
            I turn bold ideas into seamless digital experiences. Engineering reliable backends, interactive 3D spatial worlds, and scalable software platforms.
          </motion.p>

          {/* Action CTAs: Guaranteed Fully Visible */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C5A059] text-[#08090A] hover:brightness-110 text-xs font-mono-meta tracking-widest font-bold transition-all duration-300 rounded-[3px] shadow-[0_0_20px_rgba(212,175,55,0.3)] group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#15181E]/90 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#F8F7F4] text-xs font-mono-meta tracking-widest transition-all duration-300 rounded-[3px] backdrop-blur-sm group"
            >
              <MessageSquare size={13} className="text-[#D4AF37]" />
              <span>START A CONVERSATION</span>
            </a>
          </motion.div>
        </div>

        {/* Inspirational Signature & Quote (Floating gracefully on bottom right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="absolute right-6 md:right-[6vw] bottom-20 z-20 text-right space-y-1 pointer-events-none hidden md:block drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
        >
          <p className="text-[10px] font-mono-meta tracking-widest text-[#A3A8B3] uppercase">
            CODE IS MY CRAFT.
          </p>
          <p className="text-[10px] font-mono-meta tracking-widest text-[#F5E6BE] uppercase font-bold">
            IMPACT IS MY GOAL.
          </p>
          <p className="font-signature italic text-2xl text-[#D4AF37] tracking-wider pt-1 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            ~ Kushal VR
          </p>
        </motion.div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-10 w-full border-t border-[#232730] pt-4 mt-6">
        <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono-meta tracking-widest text-[#686E7B]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#A3A8B3]">AI / WEB / 3D / GAME</span>
          </div>

          <a href="#about" className="flex items-center gap-1.5 text-[#F8F7F4] hover:text-[#D4AF37] transition-colors">
            <span>SCROLL TO ENTER</span>
            <span className="inline-block animate-bounce text-[#D4AF37]">↓</span>
          </a>

          <div>
            2026 · EDITION
          </div>
        </div>
      </div>
    </section>
  );
};
