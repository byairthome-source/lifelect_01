import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Direct from our Shenzhen factory — learn about Lifelect's story, manufacturing capabilities, and commitment to quality in window cleaning robotics.",
  openGraph: {
    title: "About Us — Lifelect",
    description:
      "Direct from our Shenzhen factory — learn about Lifelect's story, manufacturing capabilities, and commitment to quality.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Lifelect",
    description:
      "Direct from our Shenzhen factory — learn about Lifelect's story and manufacturing capabilities.",
  },
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
