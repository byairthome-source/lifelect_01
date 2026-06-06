import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found — Lifelect" };
  }
  return {
    title: `${product.name} | ${product.series}`,
    description: product.subtitle,
    openGraph: {
      title: `${product.name} — Lifelect Window Cleaning Robot`,
      description: product.summary,
      images: [product.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Lifelect Window Cleaning Robot`,
      description: product.summary,
      images: [product.image],
    },
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
