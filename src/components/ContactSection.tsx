import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Copy, Check, Send, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'kushalvr7@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormOpen(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#08090A] py-24 md:py-36 border-t border-[#232730] overflow-hidden">
      {/* Warm ambient gold glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-[6vw] relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[12px] font-mono-meta tracking-widest text-[#D4AF37] font-semibold">
            06 / CONTACT
          </span>
          <span className="w-12 h-[1px] bg-[#232730]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Typography Statement */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-display font-bold leading-[0.92] tracking-tighter text-[#F8F7F4]">
              <span className="block">LET&apos;S BUILD</span>
              <span className="block text-[#A3A8B3]">SOMETHING</span>
              <span className="block gold-gradient-text drop-shadow-[0_0_30px_rgba(212,175,55,0.25)] break-words">
                WORTH REMEMBERING.
              </span>
            </h2>

            <p className="text-base sm:text-xl font-body text-[#A3A8B3]">
              Have a project, vision, or contract? Let&apos;s talk.
            </p>

            {/* CTA Button with Gold Gradient */}
            <div className="pt-2">
              <button
                onClick={() => setFormOpen(!formOpen)}
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono-meta tracking-widest bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C5A059] text-[#08090A] hover:brightness-110 px-8 py-4 font-bold transition-all duration-300 rounded-[2px] shadow-lg shadow-[#D4AF37]/20"
              >
                <span>{formOpen ? 'CLOSE INQUIRY FORM' : 'START A CONVERSATION →'}</span>
              </button>
            </div>

            {/* Expandable Form */}
            <AnimatePresence>
              {formOpen && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="pt-6 space-y-4 max-w-[560px]"
                >
                  <div className="p-6 sm:p-8 bg-[#15181E] border border-[#D4AF37]/40 space-y-4 rounded-[3px] shadow-2xl">
                    {formSubmitted ? (
                      <div className="py-6 text-center space-y-2 text-[#D4AF37]">
                        <Check className="mx-auto" size={26} />
                        <div className="text-sm font-mono-meta font-bold">Message transmitted. I will respond promptly.</div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-xs font-mono-meta tracking-wider text-[#D4AF37] mb-2 font-semibold">
                          <Sparkles size={14} />
                          <span>DIRECT TRANSMISSION PROTOCOL</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-mono-meta text-[#686E7B] mb-1">
                              YOUR NAME
                            </label>
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-[#08090A] border border-[#232730] focus:border-[#D4AF37] px-3.5 py-2.5 text-xs font-mono-meta text-[#F8F7F4] outline-none rounded-[2px]"
                              placeholder="Alex Chen"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-mono-meta text-[#686E7B] mb-1">
                              EMAIL ADDRESS
                            </label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-[#08090A] border border-[#232730] focus:border-[#D4AF37] px-3.5 py-2.5 text-xs font-mono-meta text-[#F8F7F4] outline-none rounded-[2px]"
                              placeholder="alex@domain.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono-meta text-[#686E7B] mb-1">
                            PROJECT SCOPE / MESSAGE
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#08090A] border border-[#232730] focus:border-[#D4AF37] px-3.5 py-2.5 text-xs font-body text-[#F8F7F4] outline-none resize-none rounded-[2px]"
                            placeholder="Tell me what you are building..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 text-xs font-mono-meta tracking-widest bg-[#D4AF37] hover:bg-[#F5E6BE] text-[#08090A] py-3.5 font-bold transition-colors rounded-[2px]"
                        >
                          <Send size={12} />
                          <span>SEND INQUIRY</span>
                        </button>
                      </>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Info & Social Channels */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-12 lg:pl-8 border-l-0 lg:border-l border-[#232730]">
            {/* Email Box */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono-meta tracking-widest text-[#686E7B]">
                DIRECT EMAIL
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-mono-meta text-[#F8F7F4] hover:text-[#D4AF37] transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-[#686E7B] hover:text-[#D4AF37] p-1.5 border border-[#232730] hover:border-[#D4AF37] transition-colors rounded-[2px]"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-[#D4AF37]" /> : <Copy size={14} />}
                </button>
              </div>
              {copied && (
                <span className="text-[10px] font-mono-meta text-[#D4AF37] block">
                  Copied to clipboard
                </span>
              )}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono-meta tracking-widest text-[#686E7B]">
                NETWORK &amp; PROFILES
              </span>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://github.com/Kushal-VR"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-xs font-mono-meta tracking-wider text-[#A3A8B3] hover:text-[#D4AF37] py-2 border-b border-[#232730] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Github size={14} className="text-[#D4AF37]" /> GITHUB
                  </span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kushal-vr-a3907b37a"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-xs font-mono-meta tracking-wider text-[#A3A8B3] hover:text-[#D4AF37] py-2 border-b border-[#232730] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin size={14} className="text-[#D4AF37]" /> LINKEDIN
                  </span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/kushalvr_01"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-xs font-mono-meta tracking-wider text-[#A3A8B3] hover:text-[#D4AF37] py-2 border-b border-[#232730] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Instagram size={14} className="text-[#D4AF37]" /> INSTAGRAM
                  </span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 bg-[#15181E] border border-[#D4AF37]/30 space-y-1 rounded-[2px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[11px] font-mono-meta text-[#F8F7F4] font-semibold">AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <p className="text-[11px] font-body text-[#A3A8B3]">
                Open for software development, 3D interactive applications, and creative engineering contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
