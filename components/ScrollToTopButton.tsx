// components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
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
      className="fixed bottom-6 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-slate-100 shadow-lg shadow-slate-900/70 hover:border-emerald-400 hover:text-emerald-300"
      aria-label="Back to top"
    >
      <ChevronUp size={16} />
    </button>
  );
}
