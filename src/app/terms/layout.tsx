import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms and conditions governing the use of Lifelect's website, products, and services.",
  openGraph: {
    title: "Terms of Service — Lifelect",
    description:
      "Review the terms and conditions governing the use of Lifelect's website, products, and services.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — Lifelect",
    description: "Review the terms and conditions governing the use of Lifelect's website and services.",
  },
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
