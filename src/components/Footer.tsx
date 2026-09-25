import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#08090A] border-t border-[#232730] py-12 text-[#686E7B]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand Statement */}
        <div className="space-y-1">
          <div className="text-xs font-mono-meta font-bold tracking-widest text-[#F8F7F4] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>KUSHAL VR</span>
          </div>
          <div className="text-[11px] font-mono-meta tracking-wider text-[#A3A8B3]">
            BUILDING THINGS. LEARNING EVERYTHING.
          </div>
        </div>

        {/* Links & Year */}
        <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono-meta tracking-widest">
          <a
            href="https://github.com/Kushal-VR"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/kushalvr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com/kushalvr_01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="mailto:kushalvr7@gmail.com"
            className="hover:text-[#D4AF37] transition-colors"
          >
            EMAIL
          </a>
          <span className="text-[#232730]">|</span>
          <span className="text-[#D4AF37] font-semibold">2026</span>
        </div>
      </div>
    </footer>
  );
};
