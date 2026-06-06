import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-32 lg:pt-40 pb-32 bg-bg-light min-h-[80vh] flex items-center">
      <div className="container-main text-center">
        <div className="mb-8">
          {/* Large 404 graphic */}
          <svg
            className="w-24 h-24 mx-auto mb-6 text-novu-near-black-15"
            viewBox="0 0 96 96"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="80" height="80" rx="16" />
            <circle cx="36" cy="36" r="8" />
            <circle cx="60" cy="36" r="8" />
            <path d="M32 64c0-8.8 7.2-16 16-16s16 7.2 16 16" strokeLinecap="round" />
            <path d="M72 24l-24 24-12-12" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="72" cy="24" r="4" fill="currentColor" />
          </svg>
          <h1 className="text-section-lg text-novu-near-black font-light mb-4">
            Page Not Found
          </h1>
          <p className="text-body text-novu-near-black-55 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
