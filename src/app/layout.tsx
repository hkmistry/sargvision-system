import type { Metadata } from "next";
import { Inter, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import SmoothScroll from "@/components/shared/smooth-scroll";
import Script from "next/script";
import CustomCursor from "@/components/ui/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SARGVISION | Sovereign Agentic Universe",
  description: "Autonomous AI systems and educational intelligence infrastructure built for Bharat's sovereign future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable}`}
    >
      <body className="min-h-full flex flex-col bg-dark-base text-[#0F172A] dark:text-gray-100 select-none transition-colors duration-500">
        <ThemeProvider>
          {/* Preload/load the official Spline Viewer script client-side as early as possible */}
          <Script
            id="spline-viewer-runtime-script"
            src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"
            type="module"
            strategy="afterInteractive"
          />
          
          {/* SARGVISION Active Intelligence Probe Cursor Layer */}
          <CustomCursor />
          
          <SmoothScroll>
            {/* Fixed background ambient fogs */}
            <div className="fixed inset-0 pointer-events-none z-0 ambient-fog-layer-1" />
            <div className="fixed inset-0 pointer-events-none z-0 ambient-fog-layer-2" />
            
            {/* Premium animated film grain overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 noise-grain-layer" />

            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
