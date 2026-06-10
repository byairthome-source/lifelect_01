"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overHero, setOverHero] = useState(isHome);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (isHome) setOverHero(y < window.innerHeight - 80);
      if (y > 200 && y > lastY.current) setHidden(true);
      else if (y < lastY.current || y <= 0) setHidden(false);
      lastY.current = y;
    };
    if (!isHome) setOverHero(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // ── Body scroll lock when mobile menu is open ──
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // ── Close mobile menu on route change ──
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ── Close mobile menu on Escape key ──
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      className={`fixed top-[10px] left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${hidden ? "-translate-y-[calc(100%+20px)]" : "translate-y-0"}`}
      role="banner"
      aria-label="Site header"
    >
      <div className="flex items-center justify-between h-[80px] px-6 lg:px-10 max-w-[1440px] mx-auto gap-6">
        {/* Logo — standalone, left-aligned */}
        <Link
          href="/"
          className={`text-xl font-semibold tracking-tight shrink-0 transition-colors duration-300 ${
            overHero && !mobileOpen ? "text-white" : "text-novu-near-black"
          }`}
          aria-label="Lifelect home"
        >
          Lifelect<span className="text-novu-orange">.</span>
        </Link>

        {/* Desktop Nav — frosted glass pill: dark glass on hero, light glass on content */}
        <nav
          aria-label="Main navigation"
          className={`hidden lg:flex items-center gap-0 rounded-full px-2 h-[50px] transition-all duration-500 backdrop-blur-md ${
            overHero
              ? "bg-black/30 border border-white/15"
              : "bg-white/80 border border-novu-warm-200/40 shadow-glass-inset-light"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-nav leading-tight rounded-full px-5 py-1.5 transition-all duration-300 ${
                overHero
                  ? "text-white/85 hover:text-white hover:bg-white/10"
                  : "text-novu-near-black/60 hover:text-novu-near-black hover:bg-novu-warm-50/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* CTA button — always high contrast */}
          <Link
            href="/contact"
            className={`group-cta inline-flex text-label-sm ml-2 h-10 px-5 rounded-pill items-center font-medium transition-all duration-300 ${
              overHero
                ? "bg-white text-novu-near-black hover:bg-white/90 hover:shadow-lg"
                : "bg-black text-white hover:bg-black/85 hover:shadow-lg"
            }`}
          >
            {"Get in Touch".split("").map((char, i) => (
              <span
                key={i}
                className="animate-bounce-wave"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {char === " " ? " " : char}
              </span>
            ))}
          </Link>
        </nav>

        {/* Right side — mobile toggle only */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className={`transition-colors duration-300 ${
                overHero && !mobileOpen ? "text-white" : "text-novu-near-black"
              }`}
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Nav Overlay (backdrop) ── */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Nav Panel ── */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`lg:hidden fixed top-0 right-0 w-[280px] max-w-[85vw] h-[100dvh] bg-white z-50
                    flex flex-col shadow-2xl
                    transition-transform duration-[350ms] ease-out ${
                      mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        {/* Mobile panel header */}
        <div className="flex items-center justify-between px-6 h-[80px] border-b border-novu-warm-100">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-novu-near-black"
            onClick={() => setMobileOpen(false)}
          >
            Lifelect<span className="text-novu-orange">.</span>
          </Link>
          <button
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-novu-near-black/40 hover:text-novu-near-black transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 4l10 10M4 14L14 4" />
            </svg>
          </button>
        </div>

        {/* Mobile nav links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-section-sm text-novu-near-black/60 hover:text-novu-near-black hover:bg-novu-warm-50 rounded-xl px-4 py-3 transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA footer */}
        <div className="px-6 py-6 border-t border-novu-warm-100">
          <Link
            href="/contact"
            className="flex items-center justify-center bg-black text-white rounded-pill text-label-sm py-3.5 px-5 font-medium w-full transition-all duration-300 hover:bg-black/85 hover:shadow-lg active:scale-[0.98]"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
