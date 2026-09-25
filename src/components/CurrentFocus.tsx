import React from 'react';
import { CURRENT_FOCUS_ITEMS } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  return (
    <section className="relative w-full bg-[#08090A] py-16 md:py-24 overflow-hidden border-t border-[#232730]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] mb-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <h2 className="text-xs font-mono-meta tracking-widest text-[#F5E6BE] uppercase font-semibold">
            CURRENTLY BUILDING
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Typography Ticker with Gold Accents */}
      <div className="relative w-full overflow-hidden whitespace-nowrap py-5 border-y border-[#232730] bg-[#0F1115]">
        <div className="animate-marquee flex items-center">
          {[...CURRENT_FOCUS_ITEMS, ...CURRENT_FOCUS_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center mx-8">
              <span className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tighter text-[#A3A8B3]/50 hover:text-[#F5E6BE] transition-colors cursor-default">
                {item}
              </span>
              <span className="mx-8 text-[#D4AF37]/50 text-2xl font-mono-meta">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
