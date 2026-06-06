import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-section-sm text-novu-near-black font-light mb-6">Create Product</h1>
      <ProductForm />
    </div>
  );
}
