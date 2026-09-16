"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

import HeroHeadline from "@/components/HeroHeadline";
import HeroVisual from "@/components/hero/HeroVisual";
import ParallaxLayer from "@/components/ParallaxLayer";
import { useMagnetic } from "@/components/useMagnetic";

export default function Hero() {
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>(0.3);
  const outlineCtaRef = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:items-start lg:px-8 lg:pb-6 lg:pt-20"
    >
      <HeroVisual className="opacity-60" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start xl:gap-14">
        <div className="max-w-3xl lg:max-w-[44rem]">
          <HeroHeadline
            lines={[
              { text: "Hi, I'm" },
              { text: "Rajiv Bhandari.", gradient: true },
            ]}
          />

          <p className="mt-5 text-lg font-bold text-text sm:text-xl">
            Application Support Specialist &amp; Data Analyst
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-[17px]">
            Master of IT graduate based in Adelaide. I bridge the gap
            between enterprise software, SQL databases, and custom web
            applications to keep business systems running seamlessly.
          </p>

          <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-text-faint">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Adelaide, SA &middot; Open across Australia
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link ref={primaryCtaRef} href="#projects" className="btn-primary group">
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link ref={outlineCtaRef} href="#contact" className="btn-outline group">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Link>
          </div>

          <Link
            href="/resume"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-text-faint transition hover:text-accent"
          >
            <Download className="h-3.5 w-3.5" />
            Prefer a PDF? View résumé
          </Link>
        </div>

        <ParallaxLayer speed={-0.1} className="relative lg:pt-2">
          <div className="relative mx-auto aspect-square w-full max-w-[15rem] sm:max-w-xs lg:max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-bg-raised shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-2 ring-accent/40">
              <Image
                src="/profile-headshot.png"
                alt="Rajiv Bhandari"
                fill
                sizes="(min-width: 1024px) 28vw, 60vw"
                priority
                className="object-cover"
              />
            </div>
            <span className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent font-heading text-xs font-bold text-bg shadow-[0_16px_40px_rgba(240,180,41,0.35)] sm:-bottom-2 sm:-right-2 sm:h-16 sm:w-16 sm:text-base">
              MIT
            </span>
          </div>
        </ParallaxLayer>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center lg:flex">
        <div className="flex flex-col items-center gap-2 text-text-faint">
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-gradient-to-b from-text-faint to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
