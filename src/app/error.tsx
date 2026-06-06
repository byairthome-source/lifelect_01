"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="pt-32 lg:pt-40 pb-32 bg-bg-light min-h-[80vh] flex items-center">
      <div className="container-main text-center">
        <div className="mb-8">
          {/* Error icon */}
          <svg
            className="w-24 h-24 mx-auto mb-6 text-novu-orange/20"
            viewBox="0 0 96 96"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="80" height="80" rx="16" />
            <circle cx="48" cy="32" r="6" />
            <rect x="44" y="44" width="8" height="20" rx="2" />
            <circle cx="48" cy="72" r="3" fill="currentColor" />
          </svg>
          <h1 className="text-section-lg text-novu-near-black font-light mb-4">
            Something Went Wrong
          </h1>
          <p className="text-body text-novu-near-black-55 max-w-md mx-auto mb-8 leading-relaxed">
            An unexpected error occurred. Don&apos;t worry — it&apos;s not your fault.
            You can try again or return to the home page.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
