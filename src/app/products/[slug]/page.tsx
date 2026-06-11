import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.summary || product.subtitle,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — Lifelect`,
      description: product.summary || product.subtitle,
      images: product.image ? [{ url: product.image, width: 800, height: 800 }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Lifelect`,
      description: product.summary || product.subtitle,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const allProducts = await getProducts();
  const moreProducts = allProducts.filter((p) => p.id !== product.id);

  return <ProductDetailClient product={product} moreProducts={moreProducts} />;
}
