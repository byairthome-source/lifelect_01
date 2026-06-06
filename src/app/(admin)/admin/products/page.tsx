import { prisma } from "@/lib/prisma";
import ProductTable from "./ProductTable";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { sortOrder: "asc" },
    select: { id: true, name: true, slug: true, series: true, image: true, published: true },
  });

  return <ProductTable products={products} />;
}
