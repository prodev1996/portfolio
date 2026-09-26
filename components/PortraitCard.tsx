"use client";
import { useState, type PointerEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function PortraitCard() {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 140, damping: 20 });
  const rotateY = useSpring(y, { stiffness: 140, damping: 20 });
  function move(event: PointerEvent<HTMLButtonElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 10);
    y.set(((event.clientX - rect.left) / rect.width - 0.5) * 10);
  }
  return (
    <div className="portrait-wrap hero-enter">
      <span className="portrait-spark" aria-hidden="true">
        ✳
      </span>
      <motion.button
        type="button"
        className={"portrait-card " + (flipped ? "is-flipped" : "")}
        onClick={() => setFlipped(!flipped)}
        onPointerMove={move}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={reduce ? {} : { rotateX, rotateY }}
        aria-label={
          flipped ? "Show Rajiv’s portrait" : "Meet Rajiv: turn the photo over"
        }
        aria-pressed={flipped}
      >
        <motion.span
          className="portrait-photo"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 65, damping: 15 }
          }
        >
          <span className="portrait-face" aria-hidden={flipped}>
            <Image
              src="/profile-headshot.png"
              alt="Rajiv Bhandari at his graduation"
              fill
              priority
              sizes="(max-width: 767px) 260px, 350px"
              className="headshot-photo"
            />
          </span>
          <span className="portrait-face portrait-back" aria-hidden={!flipped}>
            <Image
              src="/profile-hero.png"
              alt="Rajiv receiving his degree at Torrens University"
              fill
              sizes="(max-width: 767px) 260px, 350px"
              className="graduation-photo"
            />
          </span>
        </motion.span>
        <span className="portrait-caption">
          <span>{flipped ? "Always learning." : "Rajiv, in real life."}</span>
          {flipped ? (
            <RotateCcw size={20} aria-hidden="true" />
          ) : (
            <ArrowUpRight size={22} aria-hidden="true" />
          )}
        </span>
      </motion.button>
      <p className="portrait-hint">
        {flipped
          ? "Master of IT. Still curious."
          : "There’s a story on the other side."}
      </p>
    </div>
  );
}
