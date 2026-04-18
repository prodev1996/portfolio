"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
  rotate: number;
};

export default function CursorStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const idRef = useRef(0);
  const lastStarRef = useRef(0);
  const timeoutRefs = useRef<number[]>([]);

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!pointerFine || reducedMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }

      const now = performance.now();

      if (now - lastStarRef.current < 28) {
        return;
      }

      lastStarRef.current = now;

      const id = idRef.current + 1;
      idRef.current = id;

      const star: Star = {
        id,
        x: event.clientX,
        y: event.clientY,
        size: 8 + Math.random() * 8,
        driftX: (Math.random() - 0.5) * 46,
        driftY: -18 - Math.random() * 28,
        rotate: Math.random() * 180,
      };

      setStars((current) => [...current.slice(-22), star]);

      const timeout = window.setTimeout(() => {
        setStars((current) => current.filter((item) => item.id !== id));
      }, 760);

      timeoutRefs.current.push(timeout);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      timeoutRefs.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, []);

  return (
    <div className="cursor-stars" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="cursor-star"
          style={
            {
              left: star.x,
              top: star.y,
              height: star.size,
              width: star.size,
              "--star-x": `${star.driftX}px`,
              "--star-y": `${star.driftY}px`,
              "--star-rotate": `${star.rotate}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
