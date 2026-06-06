"use client";

import Link from "next/link";

const milestones = [
  { year: "2018", title: "Founded", desc: "Lifelect established in Shenzhen, focused exclusively on window cleaning robotics." },
  { year: "2019", title: "First Product", desc: "Launched W8 — compact window cleaning robot for residential markets." },
  { year: "2020", title: "CE & FCC Certified", desc: "Achieved international safety certifications, opening European and North American markets." },
  { year: "2022", title: "W10 Series", desc: "Introduced W10 RollerBrush technology and W10-L 100% wet mop system — flagship innovations." },
  { year: "2024", title: "Global Reach", desc: "Products sold in 30+ countries across 6 continents with dedicated regional support teams." },
];

const stats = [
  { value: "30+", label: "Countries Served" },
  { value: "500K+", label: "Units Shipped" },
  { value: "47", label: "Point QC Inspection" },
  { value: "12", label: "Time Zones Covered" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main">
          <p className="section-label mb-4">About Us</p>
          <h1 className="section-title mb-4">
            Engineering the Future of{" "}
            <span className="font-serif italic text-novu-orange">Window Cleaning</span>
          </h1>
          <p className="section-body">
            Lifelect is a Shenzhen-based robotics company dedicated to redefining how the world cleans windows.
            From our ISO-certified factory, we design, manufacture, and ship smart cleaning solutions to businesses
            in over 30 countries.
          </p>
        </div>
      </section>

      <div className="divider container-main" />

      {/* Mission & Vision */}
      <section className="section-spacing-sm bg-bg-light">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-novu-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-full bg-novu-orange/10 flex items-center justify-center mb-5">
              <svg width="24" height="24" fill="none" stroke="#fe4e02" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12M6 12h12" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">Our Mission</h2>
            <p className="text-body text-novu-near-black-55 leading-relaxed">
              To make window cleaning <strong className="text-novu-near-black-60 font-medium">safe, efficient, and accessible</strong> for
              commercial and residential buildings worldwide. We replace dangerous manual labor with intelligent
              robotic systems that work faster and clean better.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-novu-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
              <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="1.5" aria-hidden="true">
                <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12z" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">Our Vision</h2>
            <p className="text-body text-novu-near-black-55 leading-relaxed">
              To be the <strong className="text-novu-near-black-60 font-medium">world&apos;s most trusted partner</strong> in
              robotic window cleaning — powering facilities management companies, cleaning contractors, and
              distributors with reliable, innovative hardware backed by exceptional service.
            </p>
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      {/* Milestones */}
      <section className="section-spacing-sm bg-novu-warm-50">
        <div className="container-main">
          <p className="section-label mb-4">Our Journey</p>
          <h2 className="section-title mb-14">Company Milestones</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-novu-warm-200 -translate-x-px" aria-hidden="true" />
            <div className="space-y-10 md:space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className={`md:flex items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className={`bg-white rounded-2xl p-6 border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float transition-all duration-300 ${i % 2 !== 0 ? "md:text-left md:pl-12 md:pr-6" : ""}`}>
                      <span className="text-label-sm text-novu-orange uppercase tracking-[0.1em] font-medium">{m.year}</span>
                      <h3 className="text-body-lg text-novu-near-black mt-1 mb-2">{m.title}</h3>
                      <p className="text-body-sm text-novu-near-black-55 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot on timeline */}
                  <div className="hidden md:flex items-center justify-center shrink-0 w-3 h-3 rounded-full bg-novu-orange ring-4 ring-novu-orange/15" aria-hidden="true" />
                  <div className="flex-1 md:pl-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      {/* Stats */}
      <section className="section-spacing-sm bg-bg-light">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-white border border-novu-warm-100 hover:shadow-card-float transition-all duration-300">
                <div className="text-section-md lg:text-section-lg text-novu-orange font-light">{s.value}</div>
                <p className="text-label-sm text-novu-near-black-55 uppercase tracking-[0.1em] mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      {/* Factory */}
      <section className="section-spacing-sm bg-novu-warm-50">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center overflow-hidden relative">
            <svg className="w-24 h-24 opacity-20" viewBox="0 0 96 96" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
              <rect x="12" y="36" width="72" height="48" rx="4" />
              <path d="M28 36V24l8-8h24l8 8v12" />
              <rect x="40" y="48" width="16" height="20" rx="2" />
              <circle cx="48" cy="58" r="3" />
            </svg>
            <span className="absolute bottom-4 right-4 text-label-sm text-white/20 uppercase tracking-[0.3em]">Shenzhen Facility</span>
          </div>
          <div>
            <p className="section-label mb-4">Manufacturing</p>
            <h2 className="text-section-md text-novu-near-black font-light mb-6">
              ISO-Certified Factory in <span className="font-serif italic text-novu-orange">Shenzhen</span>
            </h2>
            <div className="space-y-4 text-body text-novu-near-black-55 leading-relaxed">
              <p>
                Our 3,000 m² manufacturing facility in Bao&apos;an District, Shenzhen operates with ISO 9001
                quality management systems. Every window cleaning robot passes through a 47-point inspection
                before shipment.
              </p>
              <p>
                We maintain lean inventory and offer flexible MOQ terms — from small-batch OEM trials to
                container-level wholesale orders. Our production lines can scale to 50,000 units per month.
              </p>
              <p>
                <strong className="text-novu-near-black-60 font-medium">Certifications:</strong> CE, FCC, RoHS, ISO 9001
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      {/* CTA */}
      <section className="section-spacing-sm bg-bg-light relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-[radial-gradient(circle,rgba(254,78,2,0.04)_0%,transparent_70%)]
                      pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-main text-center relative">
          <p className="section-label mb-5">Partner With Us</p>
          <h2 className="text-section-md lg:text-section-lg text-novu-near-black mb-6 font-light">
            Become a <span className="font-serif italic text-novu-orange">Partner</span>
          </h2>
          <p className="text-body text-novu-near-black-55 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you&apos;re a distributor, OEM partner, or wholesale buyer — our team is ready to discuss
            how we can grow together.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
