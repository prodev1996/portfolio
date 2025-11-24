"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  subtitle?: string;
  role: string;
  timeline?: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl?: string;
  screenshots?: ProjectScreenshot[]; // 👈 NEW
};

interface ProjectModalProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  open,
  project,
  onClose,
}: ProjectModalProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  // Reset screenshot index when project changes or modal opens
  useEffect(() => {
    if (open) {
      setCurrentScreenshot(0);
    }
  }, [open, project?.id]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const hasScreenshots = !!project?.screenshots && project.screenshots.length > 0;

  function showPrev() {
    if (!project?.screenshots) return;
    setCurrentScreenshot((prev) =>
      prev === 0 ? project.screenshots!.length - 1 : prev - 1
    );
  }

  function showNext() {
    if (!project?.screenshots) return;
    setCurrentScreenshot((prev) =>
      prev === project.screenshots!.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Panel */}
          <motion.div
            className="relative mx-3 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/95 shadow-soft"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500 hover:text-slate-50"
              aria-label="Close project details"
            >
              <X size={16} />
            </button>

            <div className="grid gap-5 p-5 md:grid-cols-[1.6fr,1.2fr] md:p-6">
              {/* LEFT: Screenshots + Overview */}
              <div className="flex flex-col gap-4 overflow-y-auto pr-1 md:max-h-[65vh]">
                {/* Screenshot carousel */}
                {hasScreenshots && (
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                    <div className="relative h-52 w-full md:h-60">
                      <motion.img
                        key={project.screenshots![currentScreenshot].src}
                        src={project.screenshots![currentScreenshot].src}
                        alt={project.screenshots![currentScreenshot].alt}
                        className="h-full w-full object-cover"
                        initial={{ opacity: 0.2, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Left/right buttons */}
                    {project.screenshots!.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showPrev}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-200 hover:border-slate-500"
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={showNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-200 hover:border-slate-500"
                          aria-label="Next screenshot"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}

                    {/* Dots */}
                    {project.screenshots!.length > 1 && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                        {project.screenshots!.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentScreenshot(idx)}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === currentScreenshot
                                ? "w-4 bg-primary"
                                : "w-2 bg-slate-600"
                            }`}
                            aria-label={`Go to screenshot ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Overview text */}
                <div className="space-y-3 text-sm text-slate-200">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Project
                    </p>
                    <h2 className="text-lg font-semibold text-slate-50">
                      {project.name}
                    </h2>
                    {project.subtitle && (
                      <p className="text-xs text-slate-400">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="text-xs text-slate-300">
                    <p className="font-semibold text-slate-200">
                      Role: <span className="font-normal">{project.role}</span>
                    </p>
                    {project.timeline && (
                      <p className="mt-0.5 text-slate-400">
                        Timeline: {project.timeline}
                      </p>
                    )}
                  </div>

                  <p className="text-xs leading-relaxed text-slate-300">
                    {project.summary}
                  </p>

                  <div>
                    <p className="mb-1 text-xs font-semibold text-slate-200">
                      Key Contributions
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-[6px] h-1 w-1 rounded-full bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* RIGHT: Tech & links */}
              <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs">
                <div>
                  <p className="mb-2 text-xs font-semibold text-slate-200">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-1 space-y-2">
                  <p className="text-xs font-semibold text-slate-200">Links</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[11px] font-medium text-white hover:bg-primary/90"
                    >
                      <ExternalLink size={13} />
                      <span>View live site</span>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:border-slate-500"
                      >
                        <Github size={13} />
                        <span>View source</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-auto text-[11px] text-slate-400">
                  Tip: Use this project to highlight both your{" "}
                  <span className="text-slate-200">
                    ICT support skills (DNS, hosting, deployments)
                  </span>{" "}
                  and your{" "}
                  <span className="text-slate-200">
                    modern web development experience.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
