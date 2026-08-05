"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: [number, number, number];
};

const COLORS: [number, number, number][] = [
  [111, 103, 223], // #6f67df
  [197, 91, 158], // #c55b9e
  [212, 141, 55], // #d48d37
  [30, 155, 115], // #1e9b73
];

export default function AnimatedGradientCanvas({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const blobs: Blob[] = COLORS.map((color, i) => ({
      x: 0.2 + (i % 2) * 0.6 + (Math.random() - 0.5) * 0.15,
      y: 0.25 + Math.floor(i / 2) * 0.5 + (Math.random() - 0.5) * 0.15,
      r: 0.32 + Math.random() * 0.1,
      dx: (Math.random() - 0.5) * 0.00014,
      dy: (Math.random() - 0.5) * 0.00014,
      color,
    }));

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.max(1, width * dpr);
      canvas!.height = Math.max(1, height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const blob of blobs) {
        if (!reducedMotion) {
          blob.x += blob.dx;
          blob.y += blob.dy;
          if (blob.x < 0.05 || blob.x > 0.95) blob.dx *= -1;
          if (blob.y < 0.05 || blob.y > 0.95) blob.dy *= -1;
        }

        const cx = blob.x * width;
        const cy = blob.y * height;
        const radius = blob.r * Math.max(width, height);
        const [r, g, b] = blob.color;

        const gradient = ctx!.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.16)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx!.fillStyle = gradient;
        ctx!.fillRect(0, 0, width, height);
      }

      if (!reducedMotion) {
        rafId = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
