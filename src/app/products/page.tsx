import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Window Cleaning Robots — Products",
  description:
    "Explore Lifelect's range of professional window cleaning robots. Compare models across M series, D series, and BO series. Find the right robotic window cleaner for your business.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Window Cleaning Robots — Lifelect Products",
    description:
      "Explore Lifelect's range of professional window cleaning robots. Compare models across M series, D series, and BO series.",
  },
};

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsClient products={products} />;
}
