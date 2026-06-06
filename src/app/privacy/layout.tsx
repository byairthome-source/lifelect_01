import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Lifelect collects, uses, and protects your personal information in accordance with applicable privacy laws.",
  openGraph: {
    title: "Privacy Policy — Lifelect",
    description:
      "Learn how Lifelect collects, uses, and protects your personal information in accordance with applicable privacy laws.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — Lifelect",
    description: "Learn how Lifelect collects, uses, and protects your personal information.",
  },
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
