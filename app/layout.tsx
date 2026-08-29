// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";
import GameTrigger from "@/components/GameTrigger";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollProgressRail from "@/components/ScrollProgressRail";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajivbhandari.com"),
  title: {
    default: "Rajiv Bhandari | Application Support, Data & Software",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, based in Adelaide. Application support, SQL-based data analysis, and software development, building toward data engineering. Real client projects, open-source builds, resume, and contact details.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | Application Support, Data & Software",
    description:
      "Application support, SQL-based data analysis, and software development portfolio. Real client projects, open-source data and full-stack builds, and a resume, all in one place.",
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
    title: "Rajiv Bhandari | Application Support, Data & Software",
    description:
      "Application support, SQL-based data analysis, and software development professional based in Adelaide, building toward data engineering.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Rajiv Bhandari",
    "IT Application Support",
    "Application Support Analyst",
    "Business Systems Analyst",
    "Application Systems Analyst",
    "Business Applications Support",
    "Data Analyst",
    "Data Analysis",
    "Data Engineering",
    "SQL Developer",
    "SQL",
    "SQL/MySQL",
    "SQL Server",
    "T-SQL",
    "PostgreSQL",
    "Window Functions",
    "Cohort Analysis",
    "Churn Analysis",
    "Data Quality",
    "Database Support",
    "Data Migration",
    "Python",
    "Pandas",
    "Streamlit",
    "Plotly",
    "Jupyter Notebook",
    "pytest",
    "React",
    "Next.js",
    "Django",
    "Django REST Framework",
    "Full Stack Developer",
    "Software Developer",
    "Junior Software Developer",
    "Microsoft 365",
    "SharePoint",
    "Active Directory",
    "Azure AD",
    "Reporting Support",
    "User Acceptance Testing",
    "QA & Testing",
    "Process Improvement",
    "Incident Resolution",
    "Stakeholder Engagement",
    "Technical Support",
    "Adelaide",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`min-h-screen bg-[#0a0a0b] text-[#f3f1ea] antialiased font-sans`}>
        <SmoothScrollProvider>
          <ScrollProgressRail />
          <Navbar />
          <main className="flex min-h-screen flex-col pb-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <CustomCursor />
          <GameTrigger />
          <ScrollToTopButton />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
