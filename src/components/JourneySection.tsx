import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_STAGES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="evolution" className="relative w-full bg-[#0F1115] py-24 md:py-36 border-t border-[#232730] overflow-hidden">
      {/* Background golden vertical glow beam */}
      <div className="absolute top-0 left-8 md:left-20 w-[2px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] relative z-10">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[12px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
              05 / EVOLUTION &amp; MILESTONES
            </span>
            <span className="w-8 h-[1px] bg-[#232730]" />
          </div>
          <h2 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#F8F7F4] tracking-tight">
            BUILT BY BUILDING.
          </h2>
          <p className="mt-3 text-sm md:text-base font-mono-meta text-[#A3A8B3]">
            I learn by making things real. A progression from curiosity to production systems.
          </p>
        </div>

        {/* Luminous Vertical Gold Timeline (Inspired by reference video ref_6.jpg) */}
        <div className="relative border-l-2 border-[#D4AF37]/40 pl-8 md:pl-16 space-y-20 md:space-y-28 ml-2 md:ml-6">
          {JOURNEY_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="relative group"
            >
              {/* Luminous Glowing Golden Timeline Node (Ref_6.jpg style) */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-4 h-4 rounded-full bg-[#08090A] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.7)] group-hover:bg-[#D4AF37] transition-all duration-300" />

              <div className="space-y-2.5 max-w-[760px] bg-[#15181E] p-6 sm:p-8 border border-[#232730] group-hover:border-[#D4AF37]/60 transition-all duration-300 rounded-[3px] shadow-xl">
                {/* Number & Subtitle */}
                <div className="flex items-center gap-3 text-xs font-mono-meta tracking-widest text-[#D4AF37]">
                  <span className="font-bold">{stage.number} // STAGE</span>
                  <span className="text-[#232730]">·</span>
                  <span className="text-[#A3A8B3]">{stage.subtitle}</span>
                </div>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F8F7F4] tracking-tight group-hover:text-[#F5E6BE] transition-colors">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm font-body text-[#A3A8B3] leading-relaxed pt-1">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
