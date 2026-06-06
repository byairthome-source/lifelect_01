"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface FooterProduct { id: string; name: string; slug: string; }

export default function Footer() {
  const [products, setProducts] = useState<FooterProduct[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => {});
  }, []);

  return (
    <footer className="relative z-10 bg-novu-near-black text-white">
      <div className="container-main py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <span className="text-label text-white font-medium">Lifelect<span className="text-novu-orange">.</span></span>
            <p className="mt-4 text-body-sm text-white-40 leading-relaxed max-w-xs">Next-generation smart cleaning solutions for commercial and residential buildings worldwide.</p>
          </div>
          <nav aria-label="Product links"><h2 className="text-label-sm text-white-40 uppercase tracking-[0.1em] mb-5">Products</h2><ul className="space-y-3">{products.map((p)=><li key={p.id}><Link href={`/products/${p.slug}`} className="text-body-sm text-white-40 hover:text-white transition-colors duration-200">{p.name}</Link></li>)}</ul></nav>
          <nav aria-label="Company links"><h2 className="text-label-sm text-white-40 uppercase tracking-[0.1em] mb-5">Company</h2><ul className="space-y-3">{[{label:"About Us",href:"/about"},{label:"Become a Dealer",href:"/contact"},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"}].map((item)=><li key={item.label}><Link href={item.href} className="text-body-sm text-white-40 hover:text-white transition-colors duration-200">{item.label}</Link></li>)}</ul></nav>
          <div><h2 className="text-label-sm text-white-40 uppercase tracking-[0.1em] mb-5">Contact</h2><address className="space-y-3 text-body-sm text-white-40 not-italic"><p>info@lifelect.com</p><p>0086-13609611816</p><p>Shenzhen, China</p></address></div>
        </div>
        <div className="mt-16 pt-8 border-t border-white-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-white-15">© 2026 Lifelect. All rights reserved.</p>
          <div className="flex gap-8 text-label-sm text-white-15"><Link href="/privacy" className="hover:text-white-40 transition-colors">Privacy</Link><Link href="/cookies" className="hover:text-white-40 transition-colors">Cookies</Link><Link href="/terms" className="hover:text-white-40 transition-colors">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
