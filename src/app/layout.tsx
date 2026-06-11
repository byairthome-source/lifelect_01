import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import PublicShell from "@/components/PublicShell";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import SmoothScrollEnabler from "@/components/SmoothScrollEnabler";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// Dynamic imports for non-critical components (lazy-loaded, no SSR)
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });
const SplashCursorGate = dynamic(() => import("@/components/SplashCursorGate"), { ssr: false });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fe4e02",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lifelect.com"),
  title: {
    default: "Lifelect — Smart Window Cleaning Solutions",
    template: "%s — Lifelect",
  },
  description:
    "Professional-grade window cleaning robots for commercial and residential buildings. B2B wholesale, OEM/ODM, and distribution partnerships worldwide.",
  keywords: [
    "window cleaning robot",
    "robotic window cleaner",
    "automatic window cleaning",
    "smart window cleaner",
    "commercial window cleaning",
    "B2B window cleaning",
    "OEM window cleaning robot",
    "Lifelect",
  ],
  authors: [{ name: "Lifelect Technology Co., Ltd." }],
  creator: "Lifelect",
  publisher: "Lifelect Technology Co., Ltd.",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lifelect",
    images: [
      {
        url: "/images/logo/logo7.png",
        width: 512,
        height: 512,
        alt: "Lifelect Logo",
      },
    ],
    title: "Lifelect — Smart Window Cleaning Solutions",
    description:
      "Professional-grade window cleaning robots for commercial and residential buildings. B2B wholesale, OEM/ODM, and distribution partnerships worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lifelect",
    title: "Lifelect — Smart Window Cleaning Solutions",
    description:
      "Professional-grade window cleaning robots for commercial and residential buildings.",
    images: ["/images/logo/logo7.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased ${inter.className}`}>
        <SessionProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <PublicShell>{children}</PublicShell>
          <Footer />
          <WhatsAppButton />
          <ToastProvider />
          <SplashCursorGate />
          <SmoothScrollEnabler />
        </SessionProvider>
      </body>
    </html>
  );
}
