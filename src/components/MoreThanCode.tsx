import React from 'react';
import { motion } from 'framer-motion';

export const MoreThanCode: React.FC = () => {
  return (
    <section className="relative w-full bg-[#08090A] py-24 md:py-36 overflow-hidden border-t border-[#232730]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
              02 / PHILOSOPHY &amp; SCOPE
            </span>
            <span className="w-8 h-[1px] bg-[#232730]" />
          </div>

          {/* Huge Statement (10-13vw desktop) with gold gradient */}
          <h2 className="text-4xl min-[380px]:text-5xl sm:text-7xl md:text-[9vw] lg:text-[10.5vw] font-display font-bold leading-[0.88] tracking-tighter text-[#F8F7F4] uppercase">
            <span className="block">MORE THAN</span>
            <span className="block gold-gradient-text drop-shadow-[0_0_35px_rgba(212,175,55,0.3)]">
              JUST CODE.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl font-body text-[#A3A8B3] max-w-[760px] leading-relaxed">
            I like building across the boundaries between software, interactive experiences, and digital 3D worlds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
