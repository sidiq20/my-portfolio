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
    default: "Olasode Sidiq — Full Stack Developer & AI Enthusiast",
    template: "%s | Olasode Sidiq",
  },
  description:
    "Portfolio of Olasode Sidiq — Full Stack Developer specializing in Next.js, AI/ML, and Web3. Building digital products at the intersection of code and craft.",
  keywords: [
    "Olasode Sidiq",
    "Full Stack Developer",
    "AI Developer",
    "Web3 Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Olasode Sidiq" }],
  creator: "Olasode Sidiq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidiqolasode.vercel.app",
    siteName: "Olasode Sidiq",
    title: "Olasode Sidiq — Full Stack Developer & AI Enthusiast",
    description:
      "Building digital products at the intersection of code and craft. Specializing in React, Next.js, AI/ML, and Web3.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olasode Sidiq Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olasode Sidiq — Full Stack Developer",
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
