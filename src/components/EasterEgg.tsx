import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export const EasterEgg: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative py-12 flex justify-center bg-[#08090A] border-t border-[#232730]/60">
      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] w-full flex justify-end">
        <div className="relative">
          <button
            data-cursor="REVEAL"
            onClick={() => setRevealed(!revealed)}
            className="group flex items-center gap-2 text-[10px] font-mono-meta tracking-widest text-[#686E7B] hover:text-[#D4AF37] transition-colors focus:outline-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#232730] group-hover:bg-[#D4AF37] transition-colors" />
            <span>THERE&apos;S MORE HERE.</span>
          </button>

          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                className="absolute right-0 bottom-8 z-30 w-72 bg-[#15181E] border border-[#D4AF37] p-4 shadow-2xl text-left rounded-[2px]"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#232730] text-[10px] font-mono-meta text-[#D4AF37]">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={12} /> SEC_KEY // 0x7F
                  </span>
                  <span className="text-[#F5E6BE]">DISCOVERED</span>
                </div>
                <p className="text-xs font-mono-meta text-[#F8F7F4] leading-relaxed">
                  &ldquo;Still experimenting. You weren&apos;t supposed to find this.&rdquo;
                </p>
                <p className="mt-2 text-[10px] font-mono-meta text-[#686E7B]">
                  — Kushal VR · Creative Technologist
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
