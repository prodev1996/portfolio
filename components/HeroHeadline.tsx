"use client";

import { useEffect, useMemo, useState } from "react";

type Line = {
  text: string;
  gradient?: boolean;
};

const CHAR_MS = 48;
const LINE_GAP_MS = 220;
const START_DELAY_MS = 300;

export default function HeroHeadline({ lines }: { lines: Line[] }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cursorDone, setCursorDone] = useState(false);

  const timedLines = useMemo(() => {
    let cumulativeDelay = START_DELAY_MS;
    return lines.map((line) => {
      const duration = line.text.length * CHAR_MS;
      const delay = cumulativeDelay;
      cumulativeDelay += duration + LINE_GAP_MS;
      return { ...line, duration, delay };
    });
  }, [lines]);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (reducedMotion || timedLines.length === 0) return;
    const last = timedLines[timedLines.length - 1];
    const typingEnd = last.delay + last.duration;
    const timeoutId = window.setTimeout(() => setCursorDone(true), typingEnd);
    return () => window.clearTimeout(timeoutId);
  }, [reducedMotion, timedLines]);

  return (
    <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[0.9] xl:text-[4.35rem]">
      {timedLines.map((line, lineIndex) => {
        const isLast = lineIndex === timedLines.length - 1;
        const showCursor = isLast && !reducedMotion && !cursorDone;

        return (
          <span
            key={lineIndex}
            className={`block pb-1 ${
              line.gradient
                ? "bg-gradient-to-r from-[#f4f1ff] via-[#d7d0ff] to-[#bde7dc] bg-clip-text text-transparent"
                : ""
            }`}
          >
            <span
              className={`inline-block max-w-max overflow-hidden whitespace-nowrap align-bottom ${
                showCursor ? "typewriter-cursor" : ""
              }`}
              style={
                reducedMotion
                  ? { width: "auto" }
                  : {
                      width: 0,
                      animationName: "terminal-type",
                      animationDuration: `${line.duration}ms`,
                      animationTimingFunction: `steps(${line.text.length}, end)`,
                      animationDelay: `${line.delay}ms`,
                      animationFillMode: "forwards",
                    }
              }
            >
              {line.text}
            </span>
          </span>
        );
      })}
    </h1>
  );
}
