"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  category: string;
  description: string;
  impact?: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-[0_24px_90px_rgba(2,6,23,0.9)]"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                  {project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-white hover:text-white"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            {project.impact ? (
              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <p className="text-sm text-slate-200">
                  <span className="font-semibold text-emerald-300">Why it matters: </span>
                  {project.impact}
                </p>
              </div>
            ) : null}

            <div className="mt-5">
              <h4 className="text-sm font-semibold text-slate-100">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-semibold text-slate-100">Tech</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Live Site <FaExternalLinkAlt className="text-xs" />
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
