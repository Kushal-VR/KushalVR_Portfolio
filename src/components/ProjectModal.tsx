import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#08090A]/92 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-5xl bg-[#0F1115] border border-[#D4AF37]/40 shadow-[0_0_60px_rgba(212,175,55,0.15)] overflow-hidden my-auto max-h-[90vh] flex flex-col rounded-[3px]"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#232730] bg-[#08090A]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono-meta tracking-widest text-[#D4AF37] font-bold">
                  {project.number} // ARCHITECTURAL CASE STUDY
                </span>
                <span className="text-[#232730]">|</span>
                <span className="text-[11px] font-mono-meta tracking-widest text-[#A3A8B3]">
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-[#A3A8B3] hover:text-[#D4AF37] p-1 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10 space-y-10">
              {/* Title & Metadata */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F8F7F4] tracking-tight">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono-meta tracking-wider text-[#A3A8B3] pt-2 border-t border-[#232730]">
                  <div>
                    <span className="text-[#686E7B]">ROLE: </span>
                    <span className="text-[#F8F7F4] font-medium">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-[#686E7B]">STACK: </span>
                    <span className="text-[#D4AF37] font-medium">{project.technology}</span>
                  </div>
                  <div>
                    <span className="text-[#686E7B]">STATUS: </span>
                    <span className="text-[#F5E6BE] font-semibold">{project.status}</span>
                  </div>
                  {project.website && (
                    <div className="flex items-center gap-1">
                      <span className="text-[#686E7B]">LIVE: </span>
                      <a
                        href={`https://${project.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#D4AF37] hover:underline flex items-center gap-1"
                      >
                        {project.website} <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Media Player / Image Anchor */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#232730] bg-[#15181E] rounded-[2px]">
                {project.videoUrl ? (
                  <video
                    controls
                    autoPlay
                    playsInline
                    poster={project.image}
                    className="w-full h-full object-cover"
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>

              {/* Secondary Screenshot if present */}
              {project.secondaryImage && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono-meta text-[#D4AF37] font-semibold">ADDITIONAL SYSTEM SURFACE:</div>
                  <div className="aspect-[16/9] w-full overflow-hidden border border-[#232730] bg-[#15181E] rounded-[2px]">
                    <img
                      src={project.secondaryImage}
                      alt={`${project.title} secondary`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {/* Editorial Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                {/* Overview & Approach */}
                <div className="md:col-span-7 space-y-8">
                  <div>
                    <h3 className="text-xs font-mono-meta tracking-widest text-[#D4AF37] mb-3 uppercase font-semibold">
                      OVERVIEW
                    </h3>
                    <p className="text-sm sm:text-base font-body text-[#A3A8B3] leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono-meta tracking-widest text-[#F5E6BE] mb-3 uppercase font-semibold">
                      THE APPROACH
                    </h3>
                    <p className="text-sm sm:text-base font-body text-[#A3A8B3] leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono-meta tracking-widest text-[#F8F7F4] mb-3 uppercase font-semibold">
                      WHAT I BUILT
                    </h3>
                    <ul className="space-y-2.5">
                      {project.whatIBuilt.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#A3A8B3]">
                          <ArrowRight size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features & Tech Stack */}
                <div className="md:col-span-5 space-y-8 bg-[#15181E] p-6 border border-[#232730] rounded-[2px]">
                  <div>
                    <h3 className="text-xs font-mono-meta tracking-widest text-[#686E7B] mb-4 uppercase">
                      KEY ARCHITECTURAL FEATURES
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-body text-[#F8F7F4]">
                          <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#232730]">
                    <h3 className="text-xs font-mono-meta tracking-widest text-[#686E7B] mb-3 uppercase">
                      TECHNOLOGY DEPLOYED
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono-meta bg-[#08090A] border border-[#232730] text-[#D4AF37]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
