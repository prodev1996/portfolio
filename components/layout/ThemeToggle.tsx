"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
const subscribe = () => () => {};
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={"Switch to " + (dark ? "light" : "dark") + " mode"}
    >
      <span aria-hidden="true">◐</span>
      <span className="theme-label">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
