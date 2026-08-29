"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";

type Line = {
  text: string;
  gradient?: boolean;
};

function splitWords(text: string) {
  return text.split(" ");
}

export default function HeroHeadline({ lines }: { lines: Line[] }) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLElement>("[data-word]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      gsap.set(words, { yPercent: 0, opacity: 1, clearProps: "transform" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.045,
          delay: 0.15,
          clearProps: "transform",
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={containerRef}
      className="mt-6 font-heading text-6xl font-bold tracking-[-0.03em] text-text leading-[0.92] sm:text-7xl lg:text-[5.5rem] lg:leading-[0.88] xl:text-[6.5rem]"
    >
      {lines.map((line, lineIndex) => {
        const words = splitWords(line.text);
        return (
          <span
            key={lineIndex}
            className={`block pb-1 ${line.gradient ? "text-accent" : ""}`}
          >
            {words.map((word, wordIndex) => (
              <Fragment key={wordIndex}>
                <span className="inline-block overflow-hidden align-top">
                  <span data-word className="inline-block">
                    {word}
                  </span>
                </span>
                {wordIndex < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </span>
        );
      })}
    </h1>
  );
}
