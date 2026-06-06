"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main">
          <p className="section-label mb-4">Blog</p>
          <h1 className="section-title mb-4">
            Insights &amp; <span className="font-serif italic text-novu-orange">Resources</span>
          </h1>
          <p className="section-body">
            Industry insights, product guides, and partnership resources from the Lifelect team.
          </p>
        </div>
      </section>

      <div className="divider container-main" />

      <section className="section-spacing-sm bg-bg-light">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br ${post.coverGradient} flex items-center justify-center relative overflow-hidden`}>
                  <svg className="w-12 h-12 opacity-20" viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
                    <rect x="8" y="8" width="32" height="32" rx="3" />
                    <path d="M16 20h16M16 26h12M16 32h8" strokeLinecap="round" />
                  </svg>
                  <span className="absolute top-3 right-3 text-label-sm text-white/20 uppercase tracking-[0.3em]">BLOG</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-label-sm text-novu-orange/70 bg-novu-orange/5 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-body-lg text-novu-near-black mb-2 group-hover:text-novu-orange transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-body-sm text-novu-near-black-55 mb-4 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                  <time dateTime={post.date} className="text-label-sm text-novu-near-black-15">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
