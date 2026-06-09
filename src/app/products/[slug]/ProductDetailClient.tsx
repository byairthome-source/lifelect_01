"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InquiryModal from "@/components/InquiryModal";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import FeatureIcon from "@/components/FeatureIcon";
import type { Product } from "@/data/products";

function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: "Window Cleaning Robot",
    image: `https://lifelect.com${product.image}`,
    brand: { "@type": "Brand", name: "Lifelect" },
    manufacturer: { "@type": "Organization", name: "Weishida Technology Co., Ltd." },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        eligibleQuantity: { "@type": "QuantitativeValue", minValue: "10", unitText: "units" },
      },
    },
  } as const;
}

export default function ProductDetailClient({ product, moreProducts }: { product: Product; moreProducts: Product[] }) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const allImages = product.images?.length ? product.images : [product.image].filter(Boolean);
  const [activeImage, setActiveImage] = useState(allImages[0] || "");

  return (
    <>
      <JsonLd data={buildProductSchema(product)} />
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />
          <span className="section-label mb-3 block">{product.series}</span>
          <h1 className="text-section-md lg:text-section-lg text-novu-near-black font-light mb-4">{product.name}</h1>
          <p className="text-body text-novu-near-black-55 max-w-2xl mb-8">{product.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setInquiryOpen(true)} className="btn-primary">Request Quote</button>
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      <section className="py-16 md:py-20 bg-bg-light">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="aspect-square bg-novu-warm-50 relative border border-novu-warm-100 rounded-2xl overflow-hidden">
              <Image
                src={activeImage}
                alt={`${product.name} window cleaning robot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain p-4"
              />
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-3 mt-4">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`flex-1 aspect-square relative border rounded-sm overflow-hidden transition-colors ${img === activeImage ? "border-novu-orange/50" : "border-novu-warm-100 hover:border-novu-warm-200"}`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill sizes="120px" className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-section-sm text-novu-near-black font-light mb-6">Technical Specifications</h2>
            <div className="border border-novu-warm-100 rounded-2xl overflow-hidden">
              {product.specs.map((spec, i) => (
                <div key={spec.key} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-bg-light"} ${i !== product.specs.length - 1 ? "border-b border-novu-warm-100" : ""}`}>
                  <span className="text-label-sm text-novu-near-black-55 uppercase tracking-[0.1em]">{spec.key}</span>
                  <span className="text-body text-novu-near-black-60">{spec.value}{spec.unit && <span className="text-novu-near-black-15 ml-1">{spec.unit}</span>}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-section-sm text-novu-near-black font-light mb-4">Overview</h2>
              <p className="text-body text-novu-near-black-55 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      <section className="py-16 md:py-20 bg-novu-warm-50">
        <div className="container-main">
          <h2 className="text-section-md text-novu-near-black font-light mb-12">
            Key <span className="font-serif italic text-novu-orange">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-7 border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-novu-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FeatureIcon name={feature.icon} className="w-8 h-8 text-novu-orange mb-4 opacity-60" />
                <h3 className="text-body-lg text-novu-near-black mb-2">{feature.title}</h3>
                <p className="text-body-sm text-novu-near-black-55 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      <section className="py-16 md:py-20 bg-bg-light">
        <div className="container-main">
          <h2 className="text-section-md text-novu-near-black font-light mb-10">More Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`}
                className="bg-white rounded-2xl p-6 border border-novu-warm-100 hover:border-novu-warm-200 transition-all duration-300 hover:-translate-y-0.5">
                <p className="text-label-sm text-novu-orange uppercase tracking-[0.1em] mb-2">{p.series}</p>
                <h3 className="text-body-lg text-novu-near-black mb-2">{p.name}</h3>
                <p className="text-body-sm text-novu-near-black-55 line-clamp-2">{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquiryModal open={inquiryOpen} productName={product.name} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
