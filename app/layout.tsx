// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  // 🔗 Change this to your real production URL when deployed
  metadataBase: new URL("https://rajiv-portfolio-delta.vercel.app"),

  title: {
    default: "Rajiv Bhandari | ICT Support & Full Stack Developer",
    template: "%s | Rajiv Bhandari",
  },

  description:
    "Portfolio of Rajiv Bhandari, an ICT Support Specialist and Full Stack Developer based in Adelaide, Australia.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Rajiv Bhandari | ICT Support & Full Stack Developer",
    description:
      "ICT Support Level 1/2 and full stack web development. Real client projects – Glide Education & Visa Services, Prime Roof Care and more.",
    url: "/",
    siteName: "Rajiv Bhandari – Portfolio",
    type: "profile",
    images: [
      {
        // 👉 Put a 1200x630 image at public/og-image.png
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of Rajiv Bhandari's portfolio website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajiv Bhandari | ICT Support & Full Stack Developer",
    description:
      "ICT Support Specialist & Full Stack Developer in Adelaide. Microsoft 365, Windows/AD, networking, React, Next.js & Django.",
    images: ["/og-image.png"],
  },

  keywords: [
    "Rajiv Bhandari",
    "ICT Support",
    "IT Support",
    "Helpdesk",
    "Service Desk",
    "Systems Administrator",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Django",
    "Adelaide",
    "Microsoft 365",
    "Windows 10",
    "Active Directory",
  ],

  authors: [
    {
      name: "Rajiv Bhandari",
      url: "https://www.linkedin.com/in/rajiv-bhandari25/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
