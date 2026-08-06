"use client";

import { useEffect, useState } from "react";

type Line = {
  text: string;
  gradient?: boolean;
};

const CHAR_MS = 48;
const LINE_GAP_MS = 220;
const START_DELAY_MS = 300;

export default function HeroHeadline({ lines }: { lines: Line[] }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  let cumulativeDelay = START_DELAY_MS;

  return (
    <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[0.9] xl:text-[4.35rem]">
      {lines.map((line, lineIndex) => {
        const duration = line.text.length * CHAR_MS;
        const delay = cumulativeDelay;
        cumulativeDelay += duration + LINE_GAP_MS;
        const isLast = lineIndex === lines.length - 1;

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
              className={`inline-block max-w-full overflow-hidden whitespace-nowrap align-bottom ${
                isLast && !reducedMotion ? "typewriter-cursor" : ""
              }`}
              style={
                reducedMotion
                  ? { width: "auto" }
                  : {
                      width: 0,
                      animationName: "terminal-type",
                      animationDuration: `${duration}ms`,
                      animationTimingFunction: `steps(${line.text.length}, end)`,
                      animationDelay: `${delay}ms`,
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
