import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sidiqolasode.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Sidiq Olasode — Full Stack Developer & AI Enthusiast",
    template: "%s | Sidiq Olasode",
  },
  description:
    "Portfolio of Sidiq Olasode — Full Stack Developer specializing in Next.js, AI/ML, and Web3. Building digital products at the intersection of code and craft.",
  keywords: [
    "Sidiq Olasode",
    "Olasode Sidiq",
    "Full Stack Developer",
    "AI Developer",
    "Web3 Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "sidiq20",
    "python",
    "solana",
    "web3",
    "ai",
    "ml",
    "blockchain",
    "full stack developer",
    "ai developer",
    "web3 developer",
    "full stack developer",
    "ai developer",
    "web3 developer",
  ],
  authors: [{ name: "Sidiq Olasode" }],
  creator: "Sidiq Olasode",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidiqolasode.vercel.app",
    siteName: "Sidiq Olasode",
    title: "Sidiq Olasode — Full Stack Developer & AI Enthusiast",
    description:
      "Building digital products at the intersection of code and craft. Specializing in React, Next.js, AI/ML, and Web3.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidiq Olasode — Full Stack Developer & AI Enthusiast & Web3 Developer",
    description:
      "Building digital products at the intersection of code and craft.",
    creator: "@sidiq20",
  },
  icons: {
    icon: "/JSX.svg",
    apple: "/JSX.svg",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
