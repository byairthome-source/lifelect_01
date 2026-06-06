export interface Category {
  name: string;
  slug: string;
  desc: string;
  image: string;
  gradient: string;
}

export const productCategories: Category[] = [
  {
    name: "Vacuum Suction",
    slug: "m82",
    desc: "All-glass home model with powerful vacuum adhesion for streak-free cleaning on any surface.",
    image: "/images/products/m82.jpeg",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    name: "Magnetic Double Side",
    slug: "d90",
    desc: "Safe no power drop — dual-sided magnetic cleaning for high-rise curtain walls and commercial glass.",
    image: "/images/products/d90.jpeg",
    gradient: "from-blue-700 to-indigo-900",
  },
  {
    name: "Auto Water Spray",
    slug: "bo693p",
    desc: "Wet deep cleaning with automatic spray system. Cordless lithium battery for residential use.",
    image: "/images/products/bo693p.jpeg",
    gradient: "from-amber-600 to-orange-800",
  },
  {
    name: "Commercial Use",
    slug: "d91",
    desc: "Heavy-duty robots engineered for high-rise curtain walls, large glass facades, and industrial facilities.",
    image: "/images/products/d91.jpeg",
    gradient: "from-cyan-600 to-blue-800",
  },
  {
    name: "Wet Deep Cleaning",
    slug: "m84",
    desc: "True wet mop system with dual water tanks and 6 auto-spray nozzles for deep stain removal.",
    image: "/images/products/m84.jpeg",
    gradient: "from-emerald-600 to-teal-800",
  },
  {
    name: "Cordless Freedom",
    slug: "bo696p",
    desc: "Lithium battery powered, no power cord needed. Edge detection and auto path planning built in.",
    image: "/images/products/bo696p.jpeg",
    gradient: "from-orange-500 to-red-700",
  },
];
