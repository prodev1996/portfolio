"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import SmoothScrollProvider from "../SmoothScrollProvider";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/keystatic" || pathname.startsWith("/keystatic/"))
    return children;
  return (
    <SmoothScrollProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
    </SmoothScrollProvider>
  );
}
