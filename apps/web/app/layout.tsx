import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { AIChatWidget } from "../components/shared/AIChatWidget";
import { FloatingAIWidget } from "../components/shared/FloatingAIWidget";
import { SmoothScroll } from "../components/shared/SmoothScroll";
import { PageTransition } from "../components/shared/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salok University ERP | Official Portal",
  description: "Next-gen university management system powered by AI",`n  keywords: ["University", "ERP", "Education", "Salok"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"${inter.variable} ${robotoMono.variable} antialiased"}>
      <body className="font-sans bg-gray-50 text-gray-900 selection:bg-[#ffb800] selection:text-[#1a2b4c]">
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
        <AIChatWidget />
        <FloatingAIWidget />
      </body>
    </html>
  );
}


