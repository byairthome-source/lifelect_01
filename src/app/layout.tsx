import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import PublicShell from "@/components/PublicShell";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ToastProvider from "@/components/ToastProvider";

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script id="scroll-reset" strategy="beforeInteractive">{`
          if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
          window.scrollTo(0, 0);
        `}</Script>
      </head>
      <body className={`antialiased ${inter.className}`}>
        <SessionProvider>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <PublicShell>{children}</PublicShell>
          <Footer />
          <WhatsAppButton />
          <ToastProvider />
        </SessionProvider>
      </body>
    </html>
  );
}
