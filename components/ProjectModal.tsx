"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

type Project = {
  id: string;
  title: string;
  role: string;
  companyTag?: string;
  description: string;
  tech: string[];
  impact: string;
  liveUrl?: string;
  codeUrl?: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  isOpen,
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-950 shadow-[0_28px_80px_rgba(15,23,42,1)]"
          >
            {/* close button – put on top of everything */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 text-slate-300 shadow-[0_12px_30px_rgba(15,23,42,0.9)] transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
              aria-label="Close project details"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.28),_transparent_55%)] opacity-80" />

            <div className="relative flex max-h-[85vh] flex-col overflow-y-auto px-5 pb-5 pt-6 sm:px-7">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-3 sm:pb-4">
                <div className="pr-10">
                  <div className="inline-flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                      {project.title}
                    </h2>
                    {project.companyTag && (
                      <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-200">
                        {project.companyTag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[13px] text-slate-300">
                    {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-500/90 px-3 py-1.5 text-[12px] font-medium text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.75)] transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>View live</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/90 px-3 py-1.5 text-[12px] font-medium text-slate-100 transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 border-t border-slate-800/70 pt-4 text-[13px] text-slate-300">
                <div>
                  <p>{project.description}</p>
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3.5 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    Why this project matters
                  </p>
                  <p className="mt-1.5 text-[13px] text-slate-200">
                    {project.impact}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Tech stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-0.5 text-[11px] text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-500">
                  Happy to walk through the architecture, trade-offs and what I would
                  improve next in an interview.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
