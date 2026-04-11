// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajivbhandari.com"),
  title: {
    default: "Rajiv Bhandari | Application Support Analyst",
    template: "%s | Rajiv Bhandari",
  },
  description:
    "Portfolio of Rajiv Bhandari, an Adelaide-based application support professional building toward data analytics with experience across Microsoft 365, business systems, troubleshooting, SQL, Power BI, and reporting.",
  alternates: {
    canonical: "https://www.rajivbhandari.com",
  },
  openGraph: {
    title: "Rajiv Bhandari | Application Support Analyst",
    description:
      "Application support, Microsoft 365, business systems, SQL, Power BI, reporting, and client project delivery for Adelaide teams and businesses.",
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
    title: "Rajiv Bhandari | Application Support Analyst",
    description:
      "Adelaide-based application support professional building toward data analytics with Microsoft 365, business systems, SQL, Power BI, and reporting.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Rajiv Bhandari",
    "ICT Support",
    "IT Support",
    "Service Desk",
    "Application Support Analyst",
    "Microsoft 365",
    "SharePoint",
    "Active Directory",
    "Business Systems",
    "Reporting",
    "Data Analytics",
    "SQL",
    "Power BI",
    "Web Delivery",
    "React",
    "Next.js",
    "Django",
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
