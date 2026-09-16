"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useMagnetic } from "@/components/useMagnetic";

function subscribeNoop() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeNoop,
    getMountedSnapshot,
    getMountedServerSnapshot,
  );
  const buttonRef = useMagnetic<HTMLButtonElement>(0.25);

  const isDark = resolvedTheme !== "light";

  return (
    <Tooltip.Root delayDuration={200}>
      <Tooltip.Trigger asChild>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-white/[0.06] text-text transition hover:border-accent-border hover:text-accent"
        >
          {mounted ? (
            isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
          ) : (
            <span className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="bottom"
          sideOffset={8}
          className="native-cursor-zone z-[60] rounded-md border border-border bg-bg-raised px-2.5 py-1.5 text-[11px] font-semibold text-text shadow-lg"
        >
          {isDark ? "Switch to light mode" : "Switch to dark mode"}
          <Tooltip.Arrow className="fill-bg-raised" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
