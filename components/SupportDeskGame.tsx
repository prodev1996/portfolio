"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Headset, X, Ticket as TicketIcon, Trophy } from "lucide-react";

type Choice = {
  text: string;
  points: number;
  feedback: string;
};

type Step = {
  prompt: string;
  choices: Choice[];
};

type Ticket = {
  ticketNumber: string;
  subject: string;
  requester: string;
  steps: Step[];
};

const TICKETS: Ticket[] = [
  {
    ticketNumber: "TCK-1042",
    subject: "Can't access the Finance folder in SharePoint",
    requester: "priya.k@client.com",
    steps: [
      {
        prompt:
          "\"I can't open the shared Finance folder in SharePoint anymore. It worked yesterday!\" What's your first move?",
        choices: [
          {
            text: "Ask them to restart their computer",
            points: 1,
            feedback:
              "Worth a shot, but this isn't a permissions issue you can restart your way out of.",
          },
          {
            text: "Check their SharePoint permissions and group membership",
            points: 3,
            feedback:
              "Exactly right — most access issues trace back to group membership.",
          },
          {
            text: "Tell them to email the Finance team, not your problem",
            points: 0,
            feedback: "It's very much your problem — that's the job.",
          },
        ],
      },
      {
        prompt:
          "You find their AD group was removed during a recent cleanup. What next?",
        choices: [
          {
            text: "Re-add them to the correct group and confirm access",
            points: 3,
            feedback: "Clean fix, confirmed working. Ticket closed properly.",
          },
          {
            text: "Just give them admin rights so this never happens again",
            points: 0,
            feedback:
              "That'll create a much bigger problem than the one you just fixed.",
          },
          {
            text: "Escalate without trying anything yourself",
            points: 1,
            feedback:
              "Sometimes necessary, but this one was well within reach.",
          },
        ],
      },
    ],
  },
  {
    ticketNumber: "TCK-1077",
    subject: "Weekly sales report totals don't match source system",
    requester: "stakeholder@client.com",
    steps: [
      {
        prompt:
          "A stakeholder says the report totals don't match the source data. What do you check first?",
        choices: [
          {
            text: "Compare the report's SQL logic against the source — check joins and filters",
            points: 3,
            feedback:
              "Right instinct — duplication almost always hides in a join.",
          },
          {
            text: "Tell them reports are always a little off",
            points: 0,
            feedback: "That's how trust in data dies. Never say this.",
          },
          {
            text: "Re-run the report and hope the numbers change",
            points: 1,
            feedback:
              "Sometimes it works, but you haven't actually diagnosed anything.",
          },
        ],
      },
      {
        prompt: "You find a duplicate JOIN inflating the totals. What now?",
        choices: [
          {
            text: "Fix the join, validate against source counts, then document the fix",
            points: 3,
            feedback:
              "Textbook — fixed, verified, and documented for next time.",
          },
          {
            text: "Subtract a rough estimate so the numbers look right",
            points: 0,
            feedback: "That's not a fix, that's a rumor with extra steps.",
          },
          {
            text: "Fix the join and move on without re-checking totals",
            points: 1,
            feedback:
              "Better double-check — an unverified fix is just a guess.",
          },
        ],
      },
    ],
  },
  {
    ticketNumber: "TCK-1103",
    subject: "Role permissions aren't saving in the compliance platform",
    requester: "qa-team@spacetel.com.au",
    steps: [
      {
        prompt:
          "QA reports role permissions aren't saving correctly. What's your first move?",
        choices: [
          {
            text: "Reproduce it with clear steps and gather evidence before logging",
            points: 3,
            feedback:
              "Perfect — a defect with reproduction steps is a defect that gets fixed fast.",
          },
          {
            text: "Log it immediately as \"permissions broken\"",
            points: 1,
            feedback:
              "Technically logged, but a developer will just bounce it back for detail.",
          },
          {
            text: "Ignore it, probably a one-off",
            points: 0,
            feedback: "Famous last words before it happens to everyone else too.",
          },
        ],
      },
      {
        prompt: "The developer fixes it and asks you to confirm. What do you do?",
        choices: [
          {
            text: "Retest the exact reproduction steps plus a couple of edge cases",
            points: 3,
            feedback: "This is why regressions don't slip through on your watch.",
          },
          {
            text: "Just close it, they said it's fixed",
            points: 0,
            feedback: '"They said" is not a test plan.',
          },
          {
            text: "Retest once quickly and close",
            points: 1,
            feedback: "A start, but edge cases are where bugs hide.",
          },
        ],
      },
    ],
  },
];

const MAX_SCORE = TICKETS.reduce(
  (sum, ticket) => sum + ticket.steps.length * 3,
  0,
);

function getVerdict(score: number) {
  if (score >= 16) {
    return {
      emoji: "🏆",
      title: "Certified Level 2 Support Hero",
      blurb: "This person closes tickets, not just types.",
    };
  }
  if (score >= 11) {
    return {
      emoji: "✅",
      title: "Solid Support Instincts",
      blurb: "You'd fit right into any help desk.",
    };
  }
  if (score >= 6) {
    return {
      emoji: "🙂",
      title: "Getting There",
      blurb: "A few more tickets and you'll be a pro.",
    };
  }
  return {
    emoji: "😅",
    title: "Rookie Ticket",
    blurb: "Everyone starts somewhere — even senior devs.",
  };
}

const HIGH_SCORE_KEY = "support-desk-game-high-score";

export default function SupportDeskGame({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [ticketIndex, setTicketIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<Choice | null>(null);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (!open) return;
    setTicketIndex(0);
    setStepIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    const stored = Number(localStorage.getItem(HIGH_SCORE_KEY) ?? 0);
    setHighScore(Number.isFinite(stored) ? stored : 0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const ticket = TICKETS[ticketIndex];
  const step = ticket.steps[stepIndex];
  const isLastStepOfTicket = stepIndex === ticket.steps.length - 1;
  const isLastTicket = ticketIndex === TICKETS.length - 1;

  function handleChoice(choice: Choice) {
    setSelected(choice);
    setScore((s) => s + choice.points);
  }

  function handleNext() {
    setSelected(null);
    if (!isLastStepOfTicket) {
      setStepIndex((i) => i + 1);
      return;
    }
    if (!isLastTicket) {
      setTicketIndex((i) => i + 1);
      setStepIndex(0);
      return;
    }
    const finalScore = score;
    if (finalScore > highScore) {
      localStorage.setItem(HIGH_SCORE_KEY, String(finalScore));
      setHighScore(finalScore);
    }
    setFinished(true);
  }

  const verdict = finished ? getVerdict(score) : null;
  const progress =
    (ticketIndex * 2 + stepIndex + (selected ? 1 : 0)) /
    (TICKETS.length * 2);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0910] shadow-[0_40px_140px_rgba(0,0,0,0.6)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#6f67df] to-[#c55b9e] transition-[width] duration-300"
              style={{ width: `${Math.min(100, progress * 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#6f67df] to-[#c55b9e] text-white">
                <Headset className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-black text-white">
                  Support Desk Simulator
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f87a0]">
                  You found the easter egg
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close game"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#8f87a0] transition hover:border-white/20 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-5 sm:p-6">
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={`${ticketIndex}-${stepIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#c55b9e]">
                      <TicketIcon className="h-3.5 w-3.5" />
                      {ticket.ticketNumber} · Ticket {ticketIndex + 1} of{" "}
                      {TICKETS.length}
                    </div>
                    <p className="mt-2 text-sm font-black text-white">
                      {ticket.subject}
                    </p>
                    <p className="mt-1 text-xs text-[#8f87a0]">
                      From: {ticket.requester}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#d8d1e6]">
                    {step.prompt}
                  </p>

                  <div className="mt-4 space-y-2.5">
                    {step.choices.map((choice) => {
                      const isSelected = selected === choice;
                      return (
                        <button
                          key={choice.text}
                          type="button"
                          disabled={Boolean(selected)}
                          onClick={() => handleChoice(choice)}
                          className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                            isSelected
                              ? "border-[#c55b9e]/50 bg-[#c55b9e]/10 text-white"
                              : selected
                                ? "border-white/5 bg-white/[0.015] text-[#6c6678]"
                                : "border-white/10 bg-white/[0.03] text-[#d8d1e6] hover:border-[#6f67df]/40 hover:bg-[#6f67df]/10 hover:text-white"
                          }`}
                        >
                          {choice.text}
                        </button>
                      );
                    })}
                  </div>

                  {selected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1e9b73]">
                          +{selected.points} point{selected.points === 1 ? "" : "s"}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-[#d8d1e6]">
                          {selected.feedback}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary mt-4 w-full justify-center"
                      >
                        {isLastStepOfTicket && isLastTicket
                          ? "See results"
                          : isLastStepOfTicket
                            ? "Next ticket"
                            : "Continue"}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="text-5xl">{verdict?.emoji}</span>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white">
                    {verdict?.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#a8a5b3]">{verdict?.blurb}</p>

                  <div className="mt-6 flex items-center justify-center gap-6">
                    <div>
                      <p className="text-3xl font-black text-white">
                        {score}
                        <span className="text-base font-bold text-[#8f87a0]">
                          {" "}
                          / {MAX_SCORE}
                        </span>
                      </p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#8f87a0]">
                        Score
                      </p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div>
                      <p className="flex items-center justify-center gap-1.5 text-3xl font-black text-white">
                        <Trophy className="h-5 w-5 text-[#d48d37]" />
                        {highScore}
                      </p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#8f87a0]">
                        Best
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setTicketIndex(0);
                        setStepIndex(0);
                        setScore(0);
                        setSelected(null);
                        setFinished(false);
                      }}
                      className="btn-outline flex-1 justify-center"
                    >
                      Play again
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-primary flex-1 justify-center"
                    >
                      Back to portfolio
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
