"use client";

import { useEffect, useRef } from "react";

export default function SkillSnake({
  containerSelector,
}: {
  containerSelector: string;
}) {
  const snakeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const snakeEl = snakeRef.current;
    if (!snakeEl) return;

    let rafId = 0;
    let lastCheck = 0;
    const recentlyEaten = new Set<Element>();

    function tick(time: number) {
      if (time - lastCheck > 90) {
        lastCheck = time;
        const headRect = snakeEl!.getBoundingClientRect();
        const headX = headRect.left + headRect.width * 0.86;
        const headY = headRect.top + headRect.height * 0.5;

        const chips = document.querySelectorAll<HTMLElement>(
          `${containerSelector} [data-skill-chip]`,
        );

        chips.forEach((chip) => {
          const rect = chip.getBoundingClientRect();
          const withinX = headX > rect.left - 4 && headX < rect.right + 4;
          const withinY = headY > rect.top - 12 && headY < rect.bottom + 12;

          if (withinX && withinY && !recentlyEaten.has(chip)) {
            recentlyEaten.add(chip);
            chip.classList.add("skill-chip-gulp");
            window.setTimeout(() => {
              chip.classList.remove("skill-chip-gulp");
            }, 420);
            window.setTimeout(() => recentlyEaten.delete(chip), 1800);
          }
        });
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [containerSelector]);

  return (
    <div ref={snakeRef} className="skill-snake" aria-hidden="true">
      <svg width="82" height="32" viewBox="0 0 82 32" fill="none">
        <defs>
          <linearGradient id="skillSnakeGrad" x1="0" y1="0" x2="76" y2="0">
            <stop offset="0%" stopColor="#1e9b73" />
            <stop offset="100%" stopColor="#2ca2ba" />
          </linearGradient>
        </defs>
        <ellipse cx="10" cy="19" rx="7" ry="5" fill="url(#skillSnakeGrad)" opacity="0.8" />
        <ellipse cx="23" cy="15" rx="8" ry="6" fill="url(#skillSnakeGrad)" opacity="0.88" />
        <ellipse cx="38" cy="17" rx="9" ry="6.5" fill="url(#skillSnakeGrad)" />
        <ellipse cx="53" cy="14" rx="9.5" ry="7" fill="url(#skillSnakeGrad)" />
        <ellipse cx="65" cy="16" rx="8.5" ry="7.5" fill="url(#skillSnakeGrad)" />
        <circle cx="68" cy="13" r="1.5" fill="#0a0910" />
        <circle cx="68.5" cy="18.5" r="1.5" fill="#0a0910" />
        <path
          d="M72 15.5 L78 14.5 M72 17 L78 18"
          stroke="#f4c56b"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="skill-snake-tongue"
        />
      </svg>
    </div>
  );
}
