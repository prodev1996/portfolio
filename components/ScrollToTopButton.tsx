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
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className="fixed bottom-4 right-[4.25rem] z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#120f1d]/82 text-[#d8d1e6] shadow-[0_16px_34px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:border-[#6f67df]/42 hover:bg-[#6f67df]/10 hover:text-white sm:bottom-6 sm:right-[5.5rem] sm:h-12 sm:w-12"
    >
      <FaChevronUp size={14} />
    </button>
  );
}
