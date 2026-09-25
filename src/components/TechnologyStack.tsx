import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const TechnologyStack: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="capabilities" className="relative w-full bg-[#08090A] py-24 md:py-36 border-t border-[#232730]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw]">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[12px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
              04 / CAPABILITIES
            </span>
            <span className="w-8 h-[1px] bg-[#232730]" />
          </div>
          <h2 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#F8F7F4] tracking-tight">
            THE TOOLS I BUILD WITH.
          </h2>
          <p className="mt-3 text-sm md:text-base font-mono-meta text-[#A3A8B3]">
            Confidence expressed through systems architecture and clean engineering.
          </p>
        </div>

        {/* Stack Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.category} className="space-y-6 bg-[#0F1115] p-6 border border-[#232730] rounded-[3px]">
              {/* Category Header */}
              <div className="border-b border-[#232730] pb-3 flex items-center justify-between">
                <h3 className="text-xs font-mono-meta tracking-widest text-[#D4AF37] uppercase font-bold">
                  {cat.category}
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]/50" />
              </div>

              {/* Items List */}
              <ul className="space-y-3.5">
                {cat.items.map((item) => {
                  const isHovered = hoveredItem === item.name;

                  return (
                    <li
                      key={item.name}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="group flex items-center justify-between cursor-default transition-all duration-200"
                    >
                      <span
                        className={`text-xl sm:text-2xl font-display font-medium transition-all duration-200 ${
                          isHovered
                            ? 'text-[#F5E6BE] translate-x-1.5'
                            : 'text-[#A3A8B3] group-hover:text-[#F8F7F4]'
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Subtle status preview with gold highlight */}
                      <span
                        className={`text-[10px] font-mono-meta tracking-wider px-2 py-0.5 transition-all duration-200 ${
                          isHovered
                            ? 'opacity-100 text-[#D4AF37] border border-[#D4AF37]/40 bg-[#15181E]'
                            : 'opacity-0 text-[#686E7B]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
