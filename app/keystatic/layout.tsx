import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { editorEnabled } from "@/lib/editor";
import KeystaticApp from "./keystatic";

export const metadata: Metadata = {
  title: "Writing editor",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default function EditorLayout() {
  if (!editorEnabled()) notFound();
  return (
    <div className="editor-shell">
      <KeystaticApp />
    </div>
  );
}
