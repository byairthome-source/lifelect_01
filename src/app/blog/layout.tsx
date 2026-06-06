import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on window cleaning robotics, facility management trends, OEM partnerships, and maintenance tips from the Lifelect team.",
  openGraph: {
    title: "Blog — Lifelect",
    description:
      "Insights on window cleaning robotics, facility management trends, and OEM partnerships.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Lifelect",
    description:
      "Insights on window cleaning robotics, facility management trends, and OEM partnerships.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
