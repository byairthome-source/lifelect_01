"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="/images/banners/hero.jpg"
        alt="Lifelect window cleaning robot on glass facade"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-45 animate-[hero-zoom_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      />
      {/* Dark overlay — ensures text readability on any background */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Centered text content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0 text-white font-bold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] mb-6 tracking-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.6s" }}
        >
          Smart Window Cleaning<br />
          for a <span className="text-novu-orange">Brighter Home</span>
        </h1>

        <p
          className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0 text-white/85 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "0.85s" }}
        >
          Professional-grade robotic window cleaners engineered with 5000Pa suction,
          intelligent path planning, and uncompromising safety.
        </p>

        <div className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: "1.1s" }}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-novu-near-black font-medium
                       rounded-full px-8 py-4 text-base md:text-lg
                       hover:bg-zinc-200 hover:shadow-lg hover:-translate-y-0.5
                       transition-all duration-300"
          >
            Explore Products
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll hint at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-0 animate-[fade-up_0.6s_ease-out_forwards]" style={{ animationDelay: "2s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes hero-zoom {
          from { transform: scale(1.15); }
          to   { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
