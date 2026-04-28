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
    default: "Rajiv Bhandari | SQL, Data Quality & Application Support",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, a database and application support professional with experience in SQL, data quality, reporting, Git/GitHub, structured troubleshooting, and business systems support.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | SQL, Data Quality & Application Support",
    description:
      "Database-backed applications, SQL, data quality, ETL support foundations, Git/GitHub, and business systems support for project-focused teams.",
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
    title: "Rajiv Bhandari | SQL, Data Quality & Application Support",
    description:
      "Database and application support profile with SQL, data quality, reporting, documentation, Git/GitHub, and structured troubleshooting experience.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Rajiv Bhandari",
    "ICT Support",
    "IT Support",
    "Service Desk",
    "SQL Developer",
    "Database Support",
    "Data Quality",
    "ETL Support",
    "Microsoft 365",
    "SharePoint",
    "Active Directory",
    "Business Systems",
    "Reporting",
    "SQL",
    "SQL Server",
    "T-SQL",
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
