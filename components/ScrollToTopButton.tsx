"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className="fixed bottom-6 right-[5.5rem] z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#120f1d]/80 text-[#d8d1e6] shadow-[0_16px_34px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:text-white"
    >
      <FaChevronUp size={14} />
    </button>
  );
}
