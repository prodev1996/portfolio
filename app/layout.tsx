// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Rajiv Bhandari | ICT Support & Full Stack Developer",
  description:
    "Portfolio of Rajiv Bhandari, an ICT Support Specialist and Full Stack Developer based in Adelaide, Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020617] text-slate-50 antialiased">
        {/* Top navigation */}
        <Navbar />

        {/* Main page content */}
        <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-24 lg:pt-28">
          {children}
        </main>

        {/* Floating scroll-to-top button */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
