import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact Lifelect for wholesale pricing, OEM/ODM partnerships, or distribution opportunities. Our multilingual sales team covers 12 time zones.",
  openGraph: {
    title: "Contact Lifelect — Wholesale & OEM Inquiries",
    description:
      "Get in touch for wholesale pricing, OEM/ODM partnerships, or distribution opportunities worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lifelect — Wholesale & OEM Inquiries",
    description:
      "Get in touch for wholesale pricing, OEM/ODM partnerships, or distribution opportunities worldwide.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
