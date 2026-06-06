import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onInquiry?: (product: Product) => void;
}

export default function ProductCard({ product, onInquiry }: ProductCardProps) {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden
                 border border-novu-warm-100 hover:border-novu-warm-200
                 hover:shadow-card-float hover:-translate-y-1
                 transition-all duration-300 relative"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-novu-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Image */}
      <div className="aspect-[4/3] bg-novu-warm-100 relative overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} window cleaning robot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2"
        />
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-label-sm text-novu-orange uppercase tracking-[0.1em] mb-2">
          {product.series}
        </p>
        <h3 className="text-body-lg text-novu-near-black mb-3">
          {product.name}
        </h3>
        <p className="text-body-sm text-novu-near-black-55 mb-8 line-clamp-2 leading-relaxed">
          {product.summary}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`/products/${product.slug}`} className="btn-outline flex-1 text-center py-2.5">
            Learn More
          </Link>
          <button
            onClick={() => onInquiry?.(product)}
            className="btn-primary flex-1 py-2.5"
            aria-label={`Inquiry about ${product.name}`}
          >
            Inquiry
          </button>
        </div>
      </div>
    </article>
  );
}
