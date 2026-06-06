import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Lifelect Window Cleaning Robots",
  description:
    "Explore Lifelect's full range of smart window cleaning robots: M Series wet mop, D Series dual roller brush, and BO Series AI smart. Professional-grade solutions for commercial and residential buildings.",
  openGraph: {
    title: "Lifelect Window Cleaning Robot Portfolio",
    description:
      "Professional-grade window cleaning robots — wholesale, OEM/ODM, and distribution available.",
    images: ["/images/og-products.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifelect Window Cleaning Robot Portfolio",
    description:
      "Professional-grade window cleaning robots — wholesale, OEM/ODM, and distribution available.",
  },
  alternates: { canonical: "/products" },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
