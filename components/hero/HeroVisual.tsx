"use client";

import { useEffect, useRef } from "react";

type Domain = "support" | "data" | "dev";

type Node = {
  x: number;
  y: number;
  r: number;
  domain: Domain | null;
  label: string | null;
  depth: number;
};

type Edge = {
  from: number;
  to: number;
  domain: Domain;
  pulseOffset: number;
  pulseSpeed: number;
};

const HUBS: { label: string; domain: Domain; x: number; y: number }[] = [
  { label: "Support", domain: "support", x: 0.5, y: 0.16 },
  { label: "Data", domain: "data", x: 0.15, y: 0.82 },
  { label: "Dev", domain: "dev", x: 0.85, y: 0.82 },
];

const SATELLITES_PER_HUB = 4;

function domainVar(domain: Domain) {
  if (domain === "support") return "--color-accent";
  if (domain === "data") return "--color-data";
  return "--color-dev";
}

function readColor(styles: CSSStyleDeclaration, varName: string) {
  const raw = styles.getPropertyValue(varName).trim();
  return raw || "#f0b429";
}

function hexOrRgbToRgb(color: string): [number, number, number] {
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    const full = hex.length === 3
      ? hex.split("").map((c) => c + c).join("")
      : hex;
    const num = parseInt(full, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  const match = color.match(/[\d.]+/g);
  if (match && match.length >= 3) {
    return [Number(match[0]), Number(match[1]), Number(match[2])];
  }
  return [240, 180, 41];
}

export default function HeroVisual({
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
    const pointerFine = window.matchMedia("(pointer: fine)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const nodes: Node[] = [];
    const edges: Edge[] = [];

    HUBS.forEach((hub, hubIndex) => {
      nodes.push({
        x: hub.x,
        y: hub.y,
        r: 5.5,
        domain: hub.domain,
        label: hub.label,
        depth: 0.15,
      });

      for (let i = 0; i < SATELLITES_PER_HUB; i += 1) {
        const angle = (Math.PI * 2 * i) / SATELLITES_PER_HUB + hubIndex;
        const spread = 0.16 + Math.random() * 0.1;
        const satelliteIndex = nodes.length;
        nodes.push({
          x: hub.x + Math.cos(angle) * spread,
          y: hub.y + Math.sin(angle) * spread * 0.7,
          r: 2 + Math.random() * 1.5,
          domain: hub.domain,
          label: null,
          depth: 0.5 + Math.random() * 0.5,
        });
        edges.push({
          from: hubIndex * (SATELLITES_PER_HUB + 1),
          to: satelliteIndex,
          domain: hub.domain,
          pulseOffset: Math.random(),
          pulseSpeed: 0.00028 + Math.random() * 0.00025,
        });
      }
    });

    // Connect the three hubs to each other so the network reads as one system.
    for (let i = 0; i < HUBS.length; i += 1) {
      const next = (i + 1) % HUBS.length;
      edges.push({
        from: i * (SATELLITES_PER_HUB + 1),
        to: next * (SATELLITES_PER_HUB + 1),
        domain: HUBS[i].domain,
        pulseOffset: Math.random(),
        pulseSpeed: 0.00018,
      });
    }

    let colors: Record<Domain, [number, number, number]> = {
      support: [240, 180, 41],
      data: [79, 176, 255],
      dev: [178, 149, 255],
    };
    let mutedColor: [number, number, number] = [163, 163, 163];

    function refreshColors() {
      const styles = getComputedStyle(document.documentElement);
      colors = {
        support: hexOrRgbToRgb(readColor(styles, domainVar("support"))),
        data: hexOrRgbToRgb(readColor(styles, domainVar("data"))),
        dev: hexOrRgbToRgb(readColor(styles, domainVar("dev"))),
      };
      mutedColor = hexOrRgbToRgb(readColor(styles, "--color-text-faint"));
    }

    refreshColors();

    const themeObserver = new MutationObserver(refreshColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

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

    let pointerX = 0.5;
    let pointerY = 0.5;
    let parallaxX = 0;
    let parallaxY = 0;

    function handlePointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / Math.max(rect.width, 1);
      pointerY = (event.clientY - rect.top) / Math.max(rect.height, 1);
    }

    if (pointerFine && !reducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    let rafId = 0;

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      if (pointerFine && !reducedMotion) {
        const targetX = (pointerX - 0.5) * 14;
        const targetY = (pointerY - 0.5) * 14;
        parallaxX += (targetX - parallaxX) * 0.04;
        parallaxY += (targetY - parallaxY) * 0.04;
      }

      const project = (node: Node) => ({
        x: node.x * width + parallaxX * node.depth,
        y: node.y * height + parallaxY * node.depth,
      });

      edges.forEach((edge) => {
        const from = project(nodes[edge.from]);
        const to = project(nodes[edge.to]);
        const [r, g, b] = colors[edge.domain];

        ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.16)`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(from.x, from.y);
        ctx!.lineTo(to.x, to.y);
        ctx!.stroke();

        if (!reducedMotion) {
          const t = (time * edge.pulseSpeed + edge.pulseOffset) % 1;
          const px = from.x + (to.x - from.x) * t;
          const py = from.y + (to.y - from.y) * t;
          ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, 0.85)`;
          ctx!.beginPath();
          ctx!.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx!.fill();
        }
      });

      nodes.forEach((node) => {
        const { x, y } = project(node);
        const [r, g, b] = node.domain ? colors[node.domain] : mutedColor;
        const radius = node.r;

        const glow = ctx!.createRadialGradient(x, y, 0, x, y, radius * 4);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.35)`);
        glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(x, y, radius * 4, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx!.beginPath();
        ctx!.arc(x, y, radius, 0, Math.PI * 2);
        ctx!.fill();

        if (node.label) {
          ctx!.font = "600 11px Inter, system-ui, sans-serif";
          ctx!.textAlign = "center";
          ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
          ctx!.fillText(node.label, x, y - radius - 10);
        }
      });

      if (!reducedMotion) {
        rafId = requestAnimationFrame(draw);
      }
    }

    draw(0);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      themeObserver.disconnect();
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
