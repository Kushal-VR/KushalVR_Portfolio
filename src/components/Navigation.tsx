import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'DISCIPLINES', href: '#disciplines' },
    { name: 'EVOLUTION', href: '#evolution' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'h-[64px] bg-[#08090A]/90 backdrop-blur-md border-b border-[#232730]'
            : 'h-[76px] bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1500px] h-full mx-auto px-6 md:px-[6vw] flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-xs font-mono-meta font-semibold tracking-widest text-[#F8F7F4] hover:text-[#D4AF37] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] group-hover:scale-125 transition-transform" />
            <span>KUSHAL VR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="text-xs font-mono-meta tracking-widest text-[#A3A8B3] hover:text-[#F8F7F4] transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Quick CTA on Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-[11px] font-mono-meta tracking-widest px-4 py-2 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#F5E6BE] transition-all rounded-[2px]"
            >
              LET&apos;S TALK ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-1.5 text-xs font-mono-meta tracking-widest text-[#F8F7F4] hover:text-[#D4AF37] p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <span className="flex items-center gap-1.5">MENU <Menu size={16} /></span>}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#08090A] flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="space-y-6 pt-10">
              <span className="text-[11px] font-mono-meta tracking-widest text-[#D4AF37]">
                INDEX // NAVIGATION
              </span>
              <div className="flex flex-col space-y-5">
                {navLinks.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 * idx, duration: 0.35 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="text-4xl font-display font-bold text-[#F8F7F4] hover:text-[#D4AF37] transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#232730] pt-6 flex flex-col gap-2">
              <span className="text-[10px] font-mono-meta tracking-widest text-[#686E7B]">
                DIRECT TRANSMISSION
              </span>
              <a
                href="mailto:kushalvr7@gmail.com"
                className="text-sm font-mono-meta text-[#A3A8B3] hover:text-[#D4AF37]"
              >
                kushalvr7@gmail.com
              </a>
              <span className="text-[11px] font-mono-meta text-[#686E7B] mt-2">
                © 2026 KUSHAL VR · ALL RIGHTS RESERVED
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
