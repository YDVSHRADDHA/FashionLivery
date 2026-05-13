import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { AuthModal } from "@/components/AuthModal";
import { SearchOverlay } from "@/components/SearchOverlay";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "LIVERY | AI-Native Luxury Fashion Discovery",
  description: "Experience the future of fashion with LIVERY. AI-curated discovery, personalized style DNA, and cinematic editorial shopping.",
  manifest: "/manifest.json",
  themeColor: "#050505",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased selection:bg-accent/30 selection:text-silk`}
      >
        <AuthModal />
        <SearchOverlay />
        {children}
      </body>
    </html>
  );
}
