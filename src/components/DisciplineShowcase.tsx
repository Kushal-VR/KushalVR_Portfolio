import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DISCIPLINES } from '../data/portfolioData';

export const DisciplineShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="disciplines" className="relative w-full bg-[#08090A] py-20 md:py-28 border-t border-[#232730]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw]">
        {/* Header */}
        <div className="flex items-center justify-between mb-16 pb-4 border-b border-[#232730]">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
              03 / DISCIPLINES
            </span>
            <span className="w-8 h-[1px] bg-[#232730]" />
          </div>
          <span className="hidden sm:inline text-[11px] font-mono-meta tracking-widest text-[#A3A8B3]">
            CROSS-DISCIPLINARY ARCHITECTURE
          </span>
        </div>

        {/* Vertical Editorial List */}
        <div className="flex flex-col divide-y divide-[#232730]">
          {DISCIPLINES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            const isMuted = isAnyHovered && !isHovered;

            return (
              <motion.div
                key={item.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative py-10 md:py-14 transition-all duration-500 cursor-pointer ${
                  isMuted ? 'opacity-35' : 'opacity-100'
                }`}
              >
                {/* Active subtle background glow highlight */}
                {isHovered && (
                  <motion.div
                    layoutId="disciplineHighlight"
                    className="absolute inset-0 bg-[#15181E] border-l-2 border-[#D4AF37] -mx-4 px-4 pointer-events-none"
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  />
                )}

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  {/* Large Number */}
                  <div className="md:col-span-2">
                    <span
                      className={`text-2xl sm:text-3xl font-mono-meta font-bold tracking-tighter transition-colors duration-300 ${
                        isHovered ? 'text-[#D4AF37]' : 'text-[#686E7B]'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Discipline Name */}
                  <div className="md:col-span-4">
                    <h3
                      className={`text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter transition-all duration-300 ${
                        isHovered
                          ? 'text-[#F5E6BE] translate-x-2'
                          : 'text-[#A3A8B3]'
                      }`}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Skills / Stack List */}
                  <div className="md:col-span-3 flex flex-wrap gap-x-4 gap-y-1">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs sm:text-sm font-mono-meta tracking-wider transition-colors duration-300 ${
                          isHovered ? 'text-[#F8F7F4]' : 'text-[#686E7B]'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Descriptive Scope */}
                  <div className="md:col-span-3">
                    <p
                      className={`text-xs sm:text-sm font-body leading-relaxed transition-colors duration-300 ${
                        isHovered ? 'text-[#A3A8B3]' : 'text-[#686E7B]'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
