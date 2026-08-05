"use client";

import { useEffect, useState } from "react";
import SupportDeskGame from "@/components/SupportDeskGame";
import { useKonamiCode } from "@/components/useKonamiCode";

export const OPEN_SUPPORT_DESK_GAME_EVENT = "open-support-desk-game";

export default function GameTrigger() {
  const [open, setOpen] = useState(false);

  useKonamiCode(() => setOpen(true));

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_SUPPORT_DESK_GAME_EVENT, handler);
    return () =>
      window.removeEventListener(OPEN_SUPPORT_DESK_GAME_EVENT, handler);
  }, []);

  return <SupportDeskGame open={open} onClose={() => setOpen(false)} />;
}
