// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajivbhandari.com"),
  title: {
    default: "Rajiv Bhandari | Application Support, Full Stack Development, and Data Analyst Transition",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, an Adelaide-based technical professional with strengths in application support, full stack web development, and an active transition into data analytics.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | Application Support, Full Stack Development, and Data Analyst Transition",
    description:
      "Application support, user-focused technical problem solving, full stack web delivery, and a growing transition into data analyst work.",
    url: "https://www.rajivbhandari.com",
    siteName: "Rajiv Bhandari Portfolio",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajiv Bhandari portfolio website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajiv Bhandari | Application Support, Full Stack Development, and Data Analyst Transition",
    description:
      "Adelaide-based technical professional with strengths across application support, web development, and a data analyst transition path.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Rajiv Bhandari",
    "Application Support",
    "ICT Support",
    "IT Support",
    "Service Desk",
    "Support Analyst",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Django",
    "SQL",
    "Power BI",
    "Excel",
    "Data Analyst",
    "Adelaide",
  ],
  authors: [
    {
      name: "Rajiv Bhandari",
      url: "https://www.linkedin.com/in/rajiv-bhandari25/",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f7f2e9] text-[#203128] antialiased">
        <Navbar />
        <main className="flex min-h-screen flex-col pb-16 pt-24 lg:pt-28">
          {children}
        </main>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
