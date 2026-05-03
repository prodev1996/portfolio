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
    default: "Rajiv Bhandari | Application Systems, Microsoft 365 & SQL Support",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, an application systems and support professional with experience in business applications, Microsoft 365, SQL/MySQL, troubleshooting, reporting support, and structured documentation.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | Application Systems, Microsoft 365 & SQL Support",
    description:
      "Application systems support, Microsoft 365, SQL/MySQL, reporting support, system improvements, and structured troubleshooting for business-focused teams.",
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
    title: "Rajiv Bhandari | Application Systems, Microsoft 365 & SQL Support",
    description:
      "Application systems profile with business application support, Microsoft 365, SQL/MySQL, documentation, reporting support, and troubleshooting experience.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Rajiv Bhandari",
    "ICT Support",
    "IT Support",
    "Service Desk",
    "Application Systems Analyst",
    "Application Systems Analysis",
    "Business Applications Support",
    "SQL Developer",
    "Database Support",
    "Data Quality",
    "System Upgrades",
    "Microsoft 365",
    "SharePoint",
    "Active Directory",
    "Azure AD",
    "Business Systems",
    "Reporting",
    "Reporting Support",
    "SQL",
    "SQL/MySQL",
    "SQL Server",
    "T-SQL",
    "Data Migration",
    "Integration Troubleshooting",
    "Vendor Coordination",
    "Stakeholder Engagement",
    "User Acceptance Testing",
    "Process Improvement",
    "Incident Resolution",
    "Change Support",
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
