// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import CursorStars from "@/components/CursorStars";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollProgressRail from "@/components/ScrollProgressRail";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajivbhandari.com"),
  title: {
    default: "Rajiv Bhandari | Junior SQL & Data Analyst",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, a junior SQL and data-focused systems candidate with experience across support, reporting, data validation, Microsoft 365, and business systems.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | Junior SQL & Data Analyst",
    description:
      "Junior SQL, reporting, data validation, Microsoft 365, business systems, and practical delivery experience for Australian teams and businesses.",
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
    title: "Rajiv Bhandari | Junior SQL & Data Analyst",
    description:
      "Junior SQL and data-focused systems candidate with experience in reporting, validation, Microsoft 365, and business systems.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Rajiv Bhandari",
    "ICT Support",
    "IT Support",
    "Service Desk",
    "Junior SQL Developer",
    "Data Analyst",
    "Microsoft 365",
    "SharePoint",
    "Active Directory",
    "Business Systems",
    "Reporting",
    "Data Quality",
    "SQL",
    "Power BI",
    "Data Migration",
    "Web Delivery",
    "React",
    "Next.js",
    "Django",
    "Australia",
  ],
  authors: [
    {
      name: "Rajiv Bhandari",
      url: "https://www.linkedin.com/in/rajiv-bhandari25/",
    },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className={`min-h-screen bg-[#050505] text-[#f8f7ef] antialiased font-sans`}>
        <ScrollProgressRail />
        <Navbar />
        <main className="flex min-h-screen flex-col pb-16">{children}</main>
        <CursorStars />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
