import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";
import { FastCursor, ScrollProgress, OrbBackground } from "@/components/Visuals";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NepaByte | AI & Automation Agency",
  description: "Boutique AI & automation agency based in Kathmandu, Nepal. We build intelligent workflows, chatbots, and custom AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" />
      </head>
      <body className="bg-[#080808] text-white selection:bg-brand-orange/30 min-h-screen font-sans">
        <FastCursor />
        <ScrollProgress />
        <OrbBackground />
        
        <Navbar />
        
        <main className="relative z-10">
          {children}
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
