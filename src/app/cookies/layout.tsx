import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how Lifelect uses cookies and similar technologies to improve your browsing experience and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy — Lifelect",
    description:
      "Understand how Lifelect uses cookies and similar technologies to improve your browsing experience.",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy — Lifelect",
    description: "Understand how Lifelect uses cookies and similar technologies.",
  },
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: false },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
