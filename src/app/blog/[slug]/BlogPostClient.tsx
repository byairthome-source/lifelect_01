"use client";

import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { BlogPost } from "@/data/blog";

function renderBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-novu-near-black-60 font-medium">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Lifelect" },
    publisher: { "@type": "Organization", name: "Lifelect" },
  } as const;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      <JsonLd data={buildArticleSchema(post)} />
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-label-sm text-novu-near-black-55 hover:text-novu-near-black transition-colors duration-200 mb-6"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M10 14L4 8l6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-label-sm text-novu-orange/70 bg-novu-orange/5 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-section-md lg:text-section-lg text-novu-near-black font-light mb-4">
            {post.title}
          </h1>
          <time dateTime={post.date} className="text-body-sm text-novu-near-black-55">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </div>
      </section>

      <div className="divider container-main" />

      <article className="section-spacing-sm bg-bg-light">
        <div className="container-main max-w-3xl">
          <div className="prose-clean">
            {post.body.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-section-sm text-novu-near-black font-light mt-12 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-2 text-body text-novu-near-black-55 mb-6">
                    {block.split("\n").map((item, j) => (
                      <li key={j} className="leading-relaxed pl-1">
                        {renderBold(item.replace(/^- /, ""))}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (/^\d+\. /.test(block)) {
                return (
                  <ol key={i} className="list-decimal pl-5 space-y-2 text-body text-novu-near-black-55 mb-6">
                    {block.split("\n").map((item, j) => (
                      <li key={j} className="leading-relaxed pl-1">
                        {renderBold(item.replace(/^\d+\. /, ""))}
                      </li>
                    ))}
                  </ol>
                );
              }
              if (block === "---") {
                return <hr key={i} className="my-10 border-white-5" />;
              }
              return (
                <p key={i} className="text-body text-novu-near-black-55 leading-relaxed mb-6">
                  {renderBold(block)}
                </p>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-novu-warm-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-label-sm text-novu-orange hover:text-novu-orange/80 transition-colors duration-200 font-medium"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M10 14L4 8l6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
