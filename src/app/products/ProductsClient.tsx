"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import InquiryModal from "@/components/InquiryModal";
import type { Product } from "@/data/products";

const categories = ["All", "M Series", "D Series", "BO Series"];

export default function ProductsClient({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  const filtered = selectedCategory === "All" ? products : products.filter((p) => p.series === selectedCategory);

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-14 bg-bg-light">
        <div className="container-main">
          <p className="section-label mb-4">Lifelect</p>
          <h1 className="section-title">Product Portfolio</h1>
        </div>
      </section>

      <section className="bg-bg-light border-y border-novu-warm-100 sticky top-16 lg:top-20 z-40">
        <div className="container-main py-4 flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-nav transition-all duration-300 rounded-pill ${
                selectedCategory === cat
                  ? "bg-novu-orange text-novu-near-black font-medium"
                  : "text-novu-near-black-55 hover:text-novu-near-black border border-novu-warm-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-light min-h-[60vh]">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onInquiry={(p) => setInquiryProduct(p)} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-section-sm text-novu-near-black-15 font-light">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <InquiryModal open={inquiryProduct !== null} productName={inquiryProduct?.name} onClose={() => setInquiryProduct(null)} />
    </>
  );
}
