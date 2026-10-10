"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  text,
  label = "Copy link",
}: {
  text?: string;
  label?: string;
}) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text ?? window.location.href);
      setStatus("Copied");
    } catch {
      setStatus("Copy unavailable");
    }
  }
  return (
    <button className="article-copy" type="button" onClick={copy}>
      {status === "Copied" ? (
        <Check size={15} aria-hidden="true" />
      ) : (
        <Copy size={15} aria-hidden="true" />
      )}
      <span aria-live="polite">{status || label}</span>
    </button>
  );
}
