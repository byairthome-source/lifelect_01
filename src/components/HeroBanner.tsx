"use client";

import Link from "next/link";
import Image from "next/image";
import PixelSnow from "./PixelSnow";

export default function HeroBanner() {
  return (
    <section className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-black">
      {/* Pixel snow background effect */}
      <PixelSnow
        color="#ffffff"
        flakeSize={0.008}
        minFlakeSize={1.5}
        pixelResolution={400}
        speed={0.6}
        density={0.15}
        direction={125}
        brightness={1.2}
        variant="round"
        depthFade={6}
      />

      <Image
        src="/images/banners/hero.jpg"
        alt="Lifelect window cleaning robot on glass facade"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-[1]" />

      {/* Centered text content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] mb-6 tracking-tight">
          Smart Window Cleaning<br />
          for a Brighter Home
        </h1>

        <p className="text-white/70 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Professional-grade robotic window cleaners engineered with 5000Pa suction,
          intelligent path planning, and uncompromising safety.
        </p>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-white text-novu-near-black font-medium
                     rounded-full px-8 py-4 text-base md:text-lg
                     hover:bg-novu-warm-100 hover:shadow-lg hover:-translate-y-0.5
                     transition-all duration-300"
        >
          Explore Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Scroll hint at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
