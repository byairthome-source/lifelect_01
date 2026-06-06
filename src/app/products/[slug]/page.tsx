import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const allProducts = await getProducts();
  const moreProducts = allProducts.filter((p) => p.id !== product.id);

  return <ProductDetailClient product={product} moreProducts={moreProducts} />;
}
