import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import PublicShell from "@/components/PublicShell";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ToastProvider from "@/components/ToastProvider";
import SplashCursorGate from "@/components/SplashCursorGate";
import SmoothScrollEnabler from "@/components/SmoothScrollEnabler";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lifelect.com"),
  title: {
    default: "Lifelect — Smart Window Cleaning Solutions",
    template: "%s — Lifelect",
  },
  description:
    "Professional-grade window cleaning robots for commercial and residential buildings. B2B wholesale, OEM/ODM, and distribution partnerships worldwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/logo/logo7.png", width: 512, height: 512 }],
    siteName: "Lifelect",
    title: "Lifelect — Smart Window Cleaning Solutions",
    description:
      "Professional-grade window cleaning robots for commercial and residential buildings. B2B wholesale, OEM/ODM, and distribution partnerships worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifelect — Smart Window Cleaning Solutions",
    description:
      "Professional-grade window cleaning robots for commercial and residential buildings.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
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
