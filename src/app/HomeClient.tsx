"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import InquiryModal from "@/components/InquiryModal";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedDivider from "@/components/AnimatedDivider";
import BorderGlow from "@/components/BorderGlow";
import type { Product } from "@/data/products";
import { productCategories } from "@/data/categories";
import { projectCases } from "@/data/cases";
import { partnerLogos } from "@/data/partners";

/* ── Static data ── */

const STATS = [
  { value: "12+",  label: "Years of Manufacturing" },
  { value: "50+",  label: "Countries Served" },
  { value: "200K+", label: "Units Deployed" },
  { value: "4h",   label: "Avg. Response Time" },
];

const WHY_US = [
  { icon: "🏭", title: "Factory Direct Supply", desc: "Own 5,000m² manufacturing facility in Shenzhen. No middlemen — work directly with the source for the best pricing and full quality control." },
  { icon: "🎨", title: "OEM / ODM Customization", desc: "Custom branding, color matching, packaging design, UI language, and feature modifications. Your brand, our engineering." },
  { icon: "🔍", title: "Strict QC Inspection", desc: "47-point quality checklist per unit. CE, FCC, RoHS, BSCI certified. Every robot tested before leaving the production line." },
  { icon: "🚚", title: "Short Lead Time", desc: "Standard orders ship within 7–15 days. Urgent orders expedited. Dedicated project manager tracks your order end-to-end." },
  { icon: "🛡️", title: "After-Sales Guarantee", desc: "1-year full warranty with multilingual support team. Spare parts inventory maintained for all active models." },
  { icon: "📦", title: "Free Sample Available", desc: "Qualified buyers can request evaluation samples. Test our robots on your glass before committing to a bulk order." },
];

const CERTS = [
  { name: "CE", desc: "European Conformity" },
  { name: "FCC", desc: "Federal Communications" },
  { name: "RoHS", desc: "Hazardous Substances" },
  { name: "ISO 9001", desc: "Quality Management" },
  { name: "BSCI", desc: "Social Compliance" },
  { name: "FDA", desc: "Food Contact Safe" },
];

/* ── Reusable section heading ── */

function SectionHeading({ label, title, highlight, body, variant = "fade-up" }: { label: string; title: string; highlight?: string; body?: string; variant?: "fade-up" | "scale-up" }) {
  return (
    <ScrollReveal className="mb-12 text-center" variant={variant}>
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title">
        {title}{highlight && <span className="font-serif italic text-novu-orange"> {highlight}</span>}
      </h2>
      {body && <p className="section-body mx-auto mt-4">{body}</p>}
    </ScrollReveal>
  );
}

/* ══════════════════════════════════════════════════════════════ */

export default function HomeClient({ products }: { products: Product[] }) {
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const featured = products.slice(0, 8);

  useEffect(() => {
    document.documentElement.classList.remove("no-scroll");
    window.scrollTo({ top: 0, behavior: "instant" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }, []);

  return (
    <>
      {/* Spacer for hero banner */}
      <div className="h-screen" aria-hidden="true" />
      <div className="relative z-10 bg-bg-light shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.15)] cover-scroll-top animate-page-in">

      {/* ═══════════ 1. Stats Bar ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-16 md:py-20 bg-novu-near-black relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-novu-orange/[0.03] animate-breathe pointer-events-none" aria-hidden="true" />
          <div className="container-main relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {STATS.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i} variant="scale-up">
                  <div className="text-center">
                    <p className="text-section-md lg:text-section-lg text-white font-light tracking-tight">{stat.value}</p>
                    <p className="text-body-sm text-white-40 mt-2">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════ 2. Product Categories ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36">
          <div className="container-main">
            <SectionHeading
              label="Product Categories"
              title="Find the Right"
              highlight="Solution"
              body="Six specialized platforms covering every glass cleaning scenario — from home windows to skyscraper facades."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {productCategories.map((cat, i) => (
                <ScrollReveal key={cat.slug} delay={Math.min(i, 5)} variant="scale-up">
                  <BorderGlow borderRadius={16} glowRadius={25} colors={["#fe4e02", "#f97316", "#fbbf24"]} glowColor="25 100 55">
                    <Link
                      href={`/products/${cat.slug}`}
                      className="group block bg-white rounded-2xl border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-[16/10] bg-novu-warm-50 relative overflow-hidden">
                        <Image src={cat.image} alt={cat.name} fill sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" className="object-contain p-3 transition-transform duration-700 group-hover:scale-105" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      </div>
                      <div className="p-5">
                        <h3 className="text-body-lg text-novu-near-black mb-1.5">{cat.name}</h3>
                        <p className="text-body-sm text-novu-near-black-55 leading-relaxed mb-4 line-clamp-2">{cat.desc}</p>
                        <span className="text-label-sm text-novu-orange group-hover:underline">View More →</span>
                      </div>
                    </Link>
                  </BorderGlow>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <AnimatedDivider className="container-main" />

      {/* ═══════════ 3. Why Choose Us ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36 bg-novu-near-black relative overflow-hidden">
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-novu-orange/[0.03] animate-breathe pointer-events-none" aria-hidden="true" />
          <div className="container-main relative">
            <ScrollReveal className="mb-12 text-center" variant="scale-up">
              <p className="section-label mb-3">Why Choose Us</p>
              <h2 className="text-section-md lg:text-section-lg text-white font-light">
                Built for <span className="font-serif italic text-novu-orange">Procurement</span>
              </h2>
              <p className="text-body text-white-40 max-w-2xl mx-auto mt-4">
                Everything a B2B buyer needs — factory-direct pricing, custom engineering, and supply chain reliability.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_US.map((item, i) => (
                <ScrollReveal key={item.title} delay={Math.min(i, 5)} variant="fade-up">
                  <BorderGlow borderRadius={16} glowRadius={25} backgroundColor="rgba(255,255,255,0.03)" colors={["#fe4e02", "#f97316", "#fbbf24"]} glowColor="25 100 55" fillOpacity={0.3}>
                    <div className="bg-white/[0.03] rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border border-white/[0.06]">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-novu-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-3xl block mb-4">{item.icon}</span>
                      <h3 className="text-body-lg text-white mb-2">{item.title}</h3>
                      <p className="text-body-sm text-white-60 leading-relaxed">{item.desc}</p>
                    </div>
                  </BorderGlow>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <AnimatedDivider className="container-main" />

      {/* ═══════════ 4. Featured Products ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36">
          <div className="container-main">
            <SectionHeading
              label="Featured Products"
              title="Best-Selling"
              highlight="Models"
              body="Our most popular window cleaning robots — trusted by wholesalers and distributors worldwide. No prices listed — contact us for bulk quotes."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((product, i) => {
                const row = Math.floor(i / 4);
                const anim = row % 2 === 0 ? "slide-left" : "slide-right";
                return (
                  <ScrollReveal key={product.id} delay={i % 4} variant={anim as "slide-left" | "slide-right"}>
                    <BorderGlow borderRadius={16} glowRadius={25} colors={["#fe4e02", "#f97316", "#fbbf24"]} glowColor="25 100 55">
                      <article className="group bg-white rounded-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-novu-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <div className="aspect-[4/3] bg-novu-warm-50 relative overflow-hidden">
                          <Image src={product.image} alt={product.name} fill sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw" className="object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="p-5">
                          <p className="text-label-sm text-novu-orange uppercase tracking-[0.1em] mb-1.5">{product.series}</p>
                          <h3 className="text-body-lg text-novu-near-black mb-3">{product.name}</h3>
                          <div className="space-y-1 mb-5">
                            {product.specs.slice(0, 3).map((s) => (
                              <div key={s.key} className="flex justify-between text-body-sm">
                                <span className="text-novu-near-black-40">{s.key}</span>
                                <span className="text-novu-near-black-60">{s.value}{s.unit ? ` ${s.unit}` : ""}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Link href={`/products/${product.slug}`} className="flex-1 text-center py-2 text-label-sm rounded-pill border border-novu-warm-200 text-novu-near-black-55 hover:border-novu-near-black-15 hover:text-novu-near-black transition-all duration-200">
                              View Detail
                            </Link>
                            <button onClick={() => setInquiryProduct(product)} className="flex-1 py-2 text-label-sm rounded-pill bg-black text-white hover:bg-black/85 transition-all duration-200">
                              Get Quote
                            </button>
                          </div>
                        </div>
                      </article>
                    </BorderGlow>
                  </ScrollReveal>
                );
              })}
            </div>
            <ScrollReveal className="text-center mt-12" variant="fade-up">
              <Link href="/products" className="btn-outline">View All Products →</Link>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      <AnimatedDivider className="container-main" />

      {/* ═══════════ 5. Project Cases ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36 bg-novu-near-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-novu-orange/[0.02] animate-breathe pointer-events-none" aria-hidden="true" />
          <div className="container-main relative">
            <ScrollReveal className="mb-12 text-center" variant="scale-up">
              <p className="section-label mb-3">Project Cases</p>
              <h2 className="text-section-md lg:text-section-lg text-white font-light">
                Global Project <span className="font-serif italic text-novu-orange">Experience</span>
              </h2>
              <p className="text-body text-white-40 max-w-2xl mx-auto mt-4">
                We have cooperated with leading brands and contractors across 50+ countries. Real deployments, real results.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectCases.map((c, i) => (
                <ScrollReveal key={c.title} delay={Math.min(i, 5)} variant="fade-in">
                  <BorderGlow borderRadius={16} glowRadius={25} backgroundColor="rgba(255,255,255,0.05)" colors={["#fe4e02", "#f97316", "#fbbf24"]} glowColor="25 100 55" fillOpacity={0.3}>
                    <div className="bg-white/5 rounded-2xl p-7 hover:bg-white/8 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-label-sm text-novu-orange uppercase tracking-[0.1em]">{c.industry}</span>
                        <span className="text-white-15">·</span>
                        <span className="text-label-sm text-white-40">{c.region}</span>
                      </div>
                      <h3 className="text-body-lg text-white mb-2">{c.title}</h3>
                      <p className="text-body-sm text-white-40 leading-relaxed mb-5">{c.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {c.highlights.map((h) => (
                          <span key={h} className="text-label-sm text-white-60 bg-white/5 border border-white/10 rounded-full px-3 py-1">{h}</span>
                        ))}
                      </div>
                    </div>
                  </BorderGlow>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════ 6. Trust Badges ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36">
          <div className="container-main">
            <SectionHeading label="Trusted Worldwide" title="Partner" highlight="Network" variant="scale-up" />
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-20">
              {partnerLogos.map((name, i) => (
                <ScrollReveal key={name} delay={Math.min(i, 7)} variant="fade-in">
                  <span className="text-section-md text-novu-near-black-5 font-light uppercase tracking-wider hover:text-novu-near-black-15 transition-colors duration-500 cursor-default">
                    {name}
                  </span>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="scale-up">
              <p className="section-label mb-8 text-center">Certifications & Compliance</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {CERTS.map((cert, i) => (
                <ScrollReveal key={cert.name} delay={Math.min(i, 5)} variant="scale-up">
                  <BorderGlow borderRadius={16} glowRadius={20} colors={["#fe4e02", "#f97316", "#fbbf24"]} glowColor="25 100 55">
                    <div className="bg-white rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-novu-warm-50 flex items-center justify-center">
                        <span className="text-body-lg font-semibold text-novu-near-black-55">✓</span>
                      </div>
                      <p className="text-label-sm text-novu-near-black font-medium">{cert.name}</p>
                      <p className="text-body-sm text-novu-near-black-40 mt-0.5">{cert.desc}</p>
                    </div>
                  </BorderGlow>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <AnimatedDivider className="container-main" />

      {/* ═══════════ 7. OEM/ODM Custom Solution ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36 bg-novu-warm-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(254,78,2,0.03)_0%,transparent_70%)] animate-breathe pointer-events-none" aria-hidden="true" />
          <div className="container-main relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="slide-left">
                <p className="section-label mb-4">Custom Solution</p>
                <h2 className="text-section-md lg:text-section-lg text-novu-near-black font-light mb-6">
                  OEM / ODM <span className="font-serif italic text-novu-orange">Made Simple</span>
                </h2>
                <div className="space-y-4 text-body text-novu-near-black-55 leading-relaxed mb-8">
                  <p>Own a 5,000m² factory floor in Shenzhen dedicated to custom orders. From logo engraving and color matching to full hardware modifications — we engineer solutions that fit your market.</p>
                  <ul className="space-y-2">
                    {["Custom branding & packaging design", "Color & material customization", "UI language localization (20+ languages)", "Hardware modifications & feature tuning", "Regulatory compliance assistance (CE, FCC, RoHS, etc.)", "Dedicated project manager from prototype to delivery"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-novu-orange mt-1 flex-shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Send Your Design →
                </Link>
              </ScrollReveal>
              <ScrollReveal variant="slide-right">
                <div className="relative bg-white rounded-2xl border border-novu-warm-100 overflow-hidden aspect-[4/3] group">
                  <Image
                    src="/images/Factory/Factory.png"
                    alt="Lifelect Shenzhen Factory — 5,000m² ISO 9001 & BSCI Certified Manufacturing Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-body-lg text-white font-medium">5,000m² Shenzhen Factory</p>
                    <p className="text-body-sm text-white/70 mt-1">ISO 9001 · BSCI Certified</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <AnimatedDivider className="container-main" />

      {/* ═══════════ 8. Quick Quote Form ═══════════ */}
      <ScrollReveal variant="fade-in">
        <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-novu-orange/[0.02] animate-float pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-20 w-[250px] h-[250px] rounded-full bg-novu-orange/[0.015] animate-breathe pointer-events-none" aria-hidden="true" />
          <div className="container-main relative">
            <div className="max-w-2xl mx-auto">
              <SectionHeading
                label="Get In Touch"
                title="Request a"
                highlight="Quote"
                body="Fill out the form below and our sales team will respond within 4 hours with pricing and availability."
              />
              <ScrollReveal variant="scale-up">
                <div className="bg-white rounded-2xl border border-novu-warm-100 p-6 md:p-8 shadow-card-float">
                  <QuickQuoteForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      </div>{/* end cover-scroll overlay */}

      <InquiryModal open={inquiryProduct !== null} productName={inquiryProduct?.name} onClose={() => setInquiryProduct(null)} />
    </>
  );
}
