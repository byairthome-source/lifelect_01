import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/admin/ProductForm";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { specs: { orderBy: { sortOrder: "asc" } }, features: { orderBy: { sortOrder: "asc" } }, images: { orderBy: { sortOrder: "asc" } } },
  });
  if (!product) notFound();

  return (
    <div className="max-w-4xl">
      <h1 className="text-section-sm text-novu-near-black font-light mb-6">Edit: {product.name}</h1>
      <ProductForm initial={product} isEdit />
    </div>
  );
}
