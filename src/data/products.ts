export interface ProductSpec {
  key: string;
  value: string;
  unit: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  series: string;
  subtitle: string;
  summary: string;
  description: string;
  coverColor: string;
  image: string;
  images: string[];
  specs: ProductSpec[];
  features: ProductFeature[];
}

// ── Common M-Series features (shared across M82–M86) ──
const mSeriesFeatures: ProductFeature[] = [
  {
    icon: "droplet",
    title: "True Wet Mop System",
    description:
      "Cloth fully saturates with water for deep cleaning. Dual 100ml tanks support both tap water and glass-specific cleaning solution for streak-free results.",
  },
  {
    icon: "shield-check",
    title: "AI Smart Protection",
    description:
      "AI-driven G-sensor acceleration detection, MEMS auto-sensing, and 4,000–4,500Pa suction keep the robot securely on glass. UPS backup provides 25 minutes of emergency power.",
  },
  {
    icon: "sliders",
    title: "5 Cleaning Routes",
    description:
      "Z-path, N-path, Z/N hybrid, spot cleaning, and edge-follow modes. One-touch start with auto-stop at origin when complete. Voice prompts included.",
  },
];

// ── Common M-Series specs base ──
const mSeriesBaseSpecs: ProductSpec[] = [
  { key: "Suction Power", value: "4,000–4,500", unit: "Pa" },
  { key: "Battery", value: "14.8V / 600", unit: "mAh" },
  { key: "UPS Backup", value: "25", unit: "min" },
  { key: "Motor Type", value: "Brushless", unit: "~68dB" },
  { key: "Water Tanks", value: "2 × 50 (100 total)", unit: "ml" },
  { key: "Spray Nozzles", value: "6", unit: "auto" },
  { key: "Safety Rope", value: "4.5", unit: "m" },
  { key: "Min Window", value: "400 × 400", unit: "mm" },
  { key: "Cleaning Routes", value: "5 (Z / N / ZN / Spot / Edge)", unit: "" },
  { key: "Remote Control", value: "2.4G ≤ 8m range", unit: "" },
  { key: "Adapter", value: "AC 100–240V, DC 24V/3.0A", unit: "" },
  { key: "Package Size", value: "340 × 255 × 90", unit: "mm" },
];

export const products: Product[] = [
  // ═══════════ M SERIES (5 models) ═══════════
  {
    id: "m82",
    name: "Lifelect M82",
    slug: "m82",
    series: "M Series",
    subtitle: "Standard Wet Mop Window Cleaning Robot",
    summary:
      "The proven workhorse — true wet cleaning with dual 100ml tanks, 6 auto-spray nozzles, and 4,000–4,500Pa suction. Trusted by cleaning contractors worldwide.",
    description:
      "The M82 is the foundational model of the M Series — a reliable performer trusted by cleaning contractors and facility managers. Its full wet mop system saturates the cleaning cloth for deep stain removal, while AI-driven G-sensor and MEMS edge detection ensure safe autonomous operation. At 70mm thickness with a 7 min/m² cleaning pace, it delivers consistent commercial-grade results day after day.",
    coverColor: "from-slate-600 to-slate-800",
    image: "/images/products/m82.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "M82", unit: "" },
      { key: "Dimensions", value: "220 × 220 × 70", unit: "mm" },
      { key: "Cleaning Speed", value: "7", unit: "min/m²" },
      ...mSeriesBaseSpecs,
    ],
    features: mSeriesFeatures,
  },
  {
    id: "m83",
    name: "Lifelect M83",
    slug: "m83",
    series: "M Series",
    subtitle: "Fast Mid-Size Wet Mop Window Cleaning Robot",
    summary:
      "Same powerful M Series platform in a 66mm slim body. Nearly 2× faster at 4 min/m² — the balanced choice for speed and accessibility.",
    description:
      "The M83 strikes the ideal balance between profile and performance. At 66mm thick with a 4 min/m² cleaning speed, it's nearly twice as fast as the M82 while maintaining the same 4,000–4,500Pa suction and full sensor suite. Ideal for buildings with moderately narrow window frames that still demand high-throughput cleaning.",
    coverColor: "from-blue-600 to-blue-800",
    image: "/images/products/m83.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "M83", unit: "" },
      { key: "Dimensions", value: "220 × 220 × 66", unit: "mm" },
      { key: "Cleaning Speed", value: "4", unit: "min/m²" },
      ...mSeriesBaseSpecs,
    ],
    features: mSeriesFeatures,
  },
  {
    id: "m84",
    name: "Lifelect M84",
    slug: "m84",
    series: "M Series",
    subtitle: "Ultra-Slim Wet Mop Window Cleaning Robot",
    summary:
      "Thinnest M Series at 58mm — fits narrow frames without compromise. 4 min/m² speed with full 4,000–4,500Pa suction.",
    description:
      "At just 58mm thick, the M84 is the slimmest robot in the M Series, designed for narrow window frames, sliding door tracks, and inset glass panels. It retains the full power and protection of the M Series platform while delivering a 4 min/m² cleaning speed. The brushless motor runs at a quiet ~68dB, making it ideal for occupied offices and residential buildings.",
    coverColor: "from-emerald-600 to-teal-800",
    image: "/images/products/m84.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "M84", unit: "" },
      { key: "Dimensions", value: "220 × 220 × 58", unit: "mm" },
      { key: "Cleaning Speed", value: "4", unit: "min/m²" },
      ...mSeriesBaseSpecs,
    ],
    features: [
      {
        icon: "ruler",
        title: "58mm Ultra-Slim Body",
        description:
          "Thinnest in the M Series — designed for narrow window frames, sliding door tracks, and inset glass panels. Same power, smaller profile.",
      },
      {
        icon: "zap",
        title: "4 min/m² High Speed",
        description:
          "Nearly 2× faster than the standard model. Efficient path planning with MEMS auto-sensing maximizes coverage while minimizing cleaning time.",
      },
      {
        icon: "🔇",
        title: "Quiet Brushless Motor",
        description:
          "Imported brushless motor runs at approximately 68dB — quiet enough for occupied offices, hotel lobbies, and residential use during business hours.",
      },
    ],
  },
  {
    id: "m85",
    name: "Lifelect M85",
    slug: "m85",
    series: "M Series",
    subtitle: "Performance Wet Mop Window Cleaning Robot",
    summary:
      "Optimized 66mm chassis with fast 4 min/m² cleaning. Enhanced path planning algorithm for complex window layouts.",
    description:
      "The M85 takes the 66mm M Series chassis and couples it with an optimized path planning algorithm specifically tuned for complex window layouts — multi-pane facades, bay windows, and partitioned glass walls. Same 4,000–4,500Pa suction, same 4 min/m² speed, but smarter navigation for challenging architectural designs.",
    coverColor: "from-indigo-600 to-indigo-900",
    image: "/images/products/m85.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "M85", unit: "" },
      { key: "Dimensions", value: "220 × 220 × 66", unit: "mm" },
      { key: "Cleaning Speed", value: "4", unit: "min/m²" },
      ...mSeriesBaseSpecs,
    ],
    features: [
      {
        icon: "🧭",
        title: "Optimized Path Planning",
        description:
          "Enhanced navigation algorithm tuned for complex layouts — multi-pane facades, bay windows, and partitioned glass walls.",
      },
      {
        icon: "droplet",
        title: "True Wet Mop System",
        description:
          "Dual 100ml water tanks with 6 auto-spray nozzles deliver consistent moisture for streak-free results on any glass surface.",
      },
      {
        icon: "shield-check",
        title: "Full AI Protection",
        description:
          "G-sensor, MEMS edge detection, and 25-min UPS backup — enterprise-grade safety in a compact 66mm chassis.",
      },
    ],
  },
  {
    id: "m86",
    name: "Lifelect M86",
    slug: "m86",
    series: "M Series",
    subtitle: "High-Power Fast Window Cleaning Robot",
    summary:
      "The speed champion at 3 min/m². 90mm chassis houses upgraded motor delivering maximum power for large commercial facades.",
    description:
      "The M86 is built for speed. With a 90mm chassis housing an upgraded brushless motor, it cleans at an industry-leading 3 min/m² — ideal for large commercial facades, shopping malls, and airport terminals where throughput is critical. The thicker body accommodates enhanced cooling for continuous all-day operation without performance degradation.",
    coverColor: "from-orange-600 to-red-800",
    image: "/images/products/m86.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "M86", unit: "" },
      { key: "Dimensions", value: "220 × 220 × 90", unit: "mm" },
      { key: "Cleaning Speed", value: "3", unit: "min/m²" },
      ...mSeriesBaseSpecs,
    ],
    features: [
      {
        icon: "🚀",
        title: "Fastest at 3 min/m²",
        description:
          "Industry-leading speed powered by an upgraded brushless motor. Built for large commercial facades, malls, and terminals where throughput matters.",
      },
      {
        icon: "❄️",
        title: "Enhanced Cooling System",
        description:
          "Thicker 90mm chassis accommodates improved heat dissipation for continuous all-day operation without performance degradation.",
      },
      {
        icon: "droplet",
        title: "True Wet Mop + 6 Nozzles",
        description:
          "Full wet mop system with 6 auto-spray nozzles and dual 100ml tanks — deep cleaning coverage at maximum speed.",
      },
    ],
  },

  // ═══════════ D SERIES (2 models) ═══════════
  {
    id: "d90",
    name: "Lifelect D90",
    slug: "d90",
    series: "D Series",
    subtitle: "Dual Roller Brush Professional Robot",
    summary:
      "Patented dual roller brush with triple water spray. Barometric pressure edge detection senses 0.3mm gaps — the premium choice for frameless glass.",
    description:
      "The D90 introduces patented dual roller brush technology to the Lifelect lineup. Forward/reverse rotating brushes scrub glass and frame edges simultaneously for superior edge-to-edge cleaning. High-precision barometric pressure sensors detect gaps as small as 0.3mm between glass panels — providing reliable fall prevention even on completely frameless installations. APP control and voice guidance come standard.",
    coverColor: "from-blue-700 to-indigo-900",
    image: "/images/products/d90.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "D90", unit: "" },
      { key: "Dimensions", value: "240 × 223 × 75", unit: "mm" },
      { key: "Package Size", value: "340 × 255 × 90", unit: "mm" },
      { key: "Suction Power", value: "3,000", unit: "Pa" },
      { key: "Battery", value: "14.8V / 600", unit: "mAh" },
      { key: "UPS Backup", value: "25", unit: "min" },
      { key: "Motor Type", value: "Imported Brushless", unit: "" },
      { key: "Water Tank", value: "30", unit: "ml" },
      { key: "Spray Nozzles", value: "3", unit: "auto" },
      { key: "Edge Detection", value: "Barometric (0.3mm gap)", unit: "" },
      { key: "Safety Rope", value: "4.5", unit: "m" },
      { key: "Min Window", value: "400 × 400", unit: "mm" },
      { key: "Cleaning Speed", value: "3", unit: "min/m²" },
      { key: "Cleaning Routes", value: "5 (Z / N / ZN / Spot / Edge)", unit: "" },
      { key: "Remote + APP", value: "2.4G + Mobile APP", unit: "" },
      { key: "Adapter", value: "AC 100–240V, DC 24V/3.0A", unit: "" },
    ],
    features: [
      {
        icon: "🪥",
        title: "Dual Roller Brush System",
        description:
          "Patented forward/reverse rotating brushes scrub glass and frame edges simultaneously. Triple water spray ensures even moisture for streak-free results.",
      },
      {
        icon: "🎯",
        title: "Barometric Edge Detection",
        description:
          "High-precision air pressure sensors detect gaps as small as 0.3mm between glass panels. Reliable fall prevention even on frameless glass.",
      },
      {
        icon: "📱",
        title: "APP + Remote Dual Control",
        description:
          "Full mobile APP control with real-time status monitoring plus 2.4G wireless remote with 360° coverage up to 8 meters.",
      },
    ],
  },
  {
    id: "d91",
    name: "Lifelect D91",
    slug: "d91",
    series: "D Series",
    subtitle: "Dual Roller Brush Wide-Body Robot",
    summary:
      "Larger 88mm chassis with the patented dual roller brush system. Extended coverage for wide commercial glass panels and curtain walls.",
    description:
      "The D91 builds on the D90's dual roller brush platform with a larger 88mm chassis for extended coverage on wide commercial glass panels and curtain wall systems. Same barometric edge detection, same APP + remote dual control, but optimized for the largest glass surfaces in modern commercial architecture. At 3 min/m², it covers more area per pass than any other Lifelect model.",
    coverColor: "from-cyan-600 to-blue-900",
    image: "/images/products/d91.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "D91", unit: "" },
      { key: "Dimensions", value: "240 × 223 × 88", unit: "mm" },
      { key: "Package Size", value: "340 × 255 × 90", unit: "mm" },
      { key: "Suction Power", value: "3,000", unit: "Pa" },
      { key: "Battery", value: "14.8V / 600", unit: "mAh" },
      { key: "UPS Backup", value: "25", unit: "min" },
      { key: "Motor Type", value: "Imported Brushless", unit: "" },
      { key: "Water Tank", value: "30", unit: "ml" },
      { key: "Spray Nozzles", value: "3", unit: "auto" },
      { key: "Edge Detection", value: "Barometric (0.3mm gap)", unit: "" },
      { key: "Safety Rope", value: "4.5", unit: "m" },
      { key: "Min Window", value: "400 × 400", unit: "mm" },
      { key: "Cleaning Speed", value: "3", unit: "min/m²" },
      { key: "Cleaning Routes", value: "5 (Z / N / ZN / Spot / Edge)", unit: "" },
      { key: "Remote + APP", value: "2.4G + Mobile APP", unit: "" },
      { key: "Adapter", value: "AC 100–240V, DC 24V/3.0A", unit: "" },
    ],
    features: [
      {
        icon: "🏢",
        title: "Wide Commercial Coverage",
        description:
          "Larger 88mm chassis covers more area per pass — optimized for curtain walls, wide glass panels, and modern commercial facades.",
      },
      {
        icon: "🪥",
        title: "Dual Roller Brush System",
        description:
          "Patented forward/reverse rotating brushes with triple water spray for superior edge-to-edge cleaning on large glass surfaces.",
      },
      {
        icon: "🎯",
        title: "Barometric Edge Detection",
        description:
          "Senses gaps as small as 0.3mm. Safe for completely frameless glass installations — the gold standard for modern architecture.",
      },
    ],
  },

  // ═══════════ BO SERIES (3 models) ═══════════
  {
    id: "bo693p",
    name: "Lifelect BO-693P",
    slug: "bo693p",
    series: "BO Series",
    subtitle: "Ultra-Slim AI Smart Window Cleaning Robot",
    summary:
      "AI-powered smart chip with one-touch operation. 8.5cm ultra-slim body with atomizing dual-direction spray. Optional Tuya APP — cleans at 2 min/m².",
    description:
      "The BO-693P is designed for the modern smart home and smart facility. At just 8.5cm thick and 1.25kg, it's the lightest robot in the Lifelect lineup, yet delivers a best-in-class 2 min/m² cleaning speed. AI-driven path planning with auto-start/stop. Ultrasonic atomizing spray delivers a fine mist for even coverage without dripping. Compatible with the Tuya smart home platform for remote scheduling and voice control.",
    coverColor: "from-violet-600 to-purple-800",
    image: "/images/products/bo693p.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "BO-693P", unit: "" },
      { key: "Dimensions", value: "250 × 250 × 85", unit: "mm" },
      { key: "Product Weight", value: "1.25", unit: "kg" },
      { key: "Package Size", value: "340 × 255 × 90", unit: "mm" },
      { key: "Package Weight", value: "2.3", unit: "kg" },
      { key: "Suction Power", value: "3,000", unit: "Pa" },
      { key: "Battery", value: "14.8V / 600", unit: "mAh" },
      { key: "UPS Backup", value: "20", unit: "min" },
      { key: "Motor Type", value: "Imported Brushless", unit: "" },
      { key: "Water Tanks", value: "35 + 18 (53 total)", unit: "ml" },
      { key: "Spray Type", value: "Dual-direction atomizing", unit: "" },
      { key: "Safety Rope", value: "4.5", unit: "m" },
      { key: "Power Cable", value: "4.0", unit: "m" },
      { key: "Min Window", value: "400 × 400", unit: "mm" },
      { key: "Max Window", value: "6 × 5", unit: "m" },
      { key: "Cleaning Speed", value: "2", unit: "min/m²" },
      { key: "Cleaning Modes", value: "3 (Z / N / ZN)", unit: "" },
      { key: "Smart Platform", value: "Tuya APP (optional)", unit: "" },
      { key: "Adapter", value: "AC 100–240V, DC 24V/3.0A", unit: "" },
    ],
    features: [
      {
        icon: "🧠",
        title: "AI Smart Chip",
        description:
          "Intelligent path planning with one-touch start. Robot auto-returns to start and stops when complete — no supervision needed.",
      },
      {
        icon: "💨",
        title: "Atomizing Dual-Direction Spray",
        description:
          "Ultrasonic atomization delivers a fine, even mist in both directions. Separate 35ml and 18ml tanks. No dripping, no streaking.",
      },
      {
        icon: "🏠",
        title: "Tuya Smart Home Ready",
        description:
          "Optional Tuya APP for remote scheduling, voice control, and fleet management. 2.4G wireless remote included as standard. 2 min/m² — fastest in the lineup.",
      },
    ],
  },
  {
    id: "bo694p",
    name: "Lifelect BO-694P",
    slug: "bo694p",
    series: "BO Series",
    subtitle: "Super-Slim 7.2cm AI Window Cleaning Robot",
    summary:
      "Thinnest in the entire lineup at just 7.2cm. AI chip with one-touch operation, atomizing spray, and 2 min/m² speed. Tuya APP ready.",
    description:
      "At a remarkable 7.2cm thickness, the BO-694P is the slimmest window cleaning robot Lifelect has ever produced. It slips effortlessly into ultra-narrow window frames and sliding door tracks that other robots simply cannot access. Despite its thin profile, it packs the full BO Series feature set: AI smart chip, dual-direction atomizing spray, 3,000Pa suction, and Tuya APP compatibility.",
    coverColor: "from-rose-600 to-pink-800",
    image: "/images/products/bo694p.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "BO-694P", unit: "" },
      { key: "Dimensions", value: "250 × 250 × 72", unit: "mm" },
      { key: "Product Weight", value: "1.25", unit: "kg" },
      { key: "Package Size", value: "340 × 255 × 90", unit: "mm" },
      { key: "Package Weight", value: "2.3", unit: "kg" },
      { key: "Suction Power", value: "3,000", unit: "Pa" },
      { key: "Battery", value: "14.8V / 600", unit: "mAh" },
      { key: "UPS Backup", value: "20", unit: "min" },
      { key: "Motor Type", value: "Imported Brushless", unit: "" },
      { key: "Water Tanks", value: "35 + 18 (53 total)", unit: "ml" },
      { key: "Spray Type", value: "Dual-direction atomizing", unit: "" },
      { key: "Safety Rope", value: "4.5", unit: "m" },
      { key: "Power Cable", value: "4.0", unit: "m" },
      { key: "Min Window", value: "400 × 400", unit: "mm" },
      { key: "Max Window", value: "6 × 5", unit: "m" },
      { key: "Cleaning Speed", value: "2", unit: "min/m²" },
      { key: "Cleaning Modes", value: "3 (Z / N / ZN)", unit: "" },
      { key: "Smart Platform", value: "Tuya APP (optional)", unit: "" },
      { key: "Adapter", value: "AC 100–240V, DC 24V/3.0A", unit: "" },
    ],
    features: [
      {
        icon: "ruler",
        title: "7.2cm — Thinnest Ever",
        description:
          "The slimmest robot in the entire Lifelect lineup. Fits ultra-narrow frames and sliding door tracks that no other robot can access.",
      },
      {
        icon: "🧠",
        title: "AI Smart Chip",
        description:
          "Intelligent path planning with one-touch operation. Auto-start, auto-return, auto-stop — completely autonomous cleaning cycle.",
      },
      {
        icon: "💨",
        title: "2 min/m² + Atomizing Spray",
        description:
          "Fastest cleaning speed combined with ultrasonic mist spray for even, drip-free coverage. Tuya APP for smart home integration.",
      },
    ],
  },
  {
    id: "bo696p",
    name: "Lifelect BO-696P",
    slug: "bo696p",
    series: "BO Series",
    subtitle: "Compact 7.5cm AI Window Cleaning Robot",
    summary:
      "Balanced 7.5cm ultra-slim design with all BO Series smart features. The sweet spot between profile and performance for everyday smart cleaning.",
    description:
      "The BO-696P hits the sweet spot in the BO Series lineup — 7.5cm slim with all the smart features you expect. AI chip for intelligent path planning, dual-direction atomizing spray for even coverage, and Tuya APP compatibility for remote control. At 2 min/m² with 3,000Pa suction, it's the balanced everyday performer for smart homes, apartments, and boutique commercial spaces.",
    coverColor: "from-amber-500 to-orange-700",
    image: "/images/products/bo696p.jpeg",
    images: [],
    specs: [
      { key: "Model", value: "BO-696P", unit: "" },
      { key: "Dimensions", value: "250 × 250 × 75", unit: "mm" },
      { key: "Product Weight", value: "1.25", unit: "kg" },
      { key: "Package Size", value: "340 × 255 × 90", unit: "mm" },
      { key: "Package Weight", value: "2.3", unit: "kg" },
      { key: "Suction Power", value: "3,000", unit: "Pa" },
      { key: "Battery", value: "14.8V / 600", unit: "mAh" },
      { key: "UPS Backup", value: "20", unit: "min" },
      { key: "Motor Type", value: "Imported Brushless", unit: "" },
      { key: "Water Tanks", value: "35 + 18 (53 total)", unit: "ml" },
      { key: "Spray Type", value: "Dual-direction atomizing", unit: "" },
      { key: "Safety Rope", value: "4.5", unit: "m" },
      { key: "Power Cable", value: "4.0", unit: "m" },
      { key: "Min Window", value: "400 × 400", unit: "mm" },
      { key: "Max Window", value: "6 × 5", unit: "m" },
      { key: "Cleaning Speed", value: "2", unit: "min/m²" },
      { key: "Cleaning Modes", value: "3 (Z / N / ZN)", unit: "" },
      { key: "Smart Platform", value: "Tuya APP (optional)", unit: "" },
      { key: "Adapter", value: "AC 100–240V, DC 24V/3.0A", unit: "" },
    ],
    features: [
      {
        icon: "⚖️",
        title: "Balanced 7.5cm Design",
        description:
          "The sweet spot between ultra-slim profile and robust performance. Ideal for smart homes, apartments, and boutique commercial spaces.",
      },
      {
        icon: "🧠",
        title: "AI Smart Chip",
        description:
          "One-touch intelligent cleaning with auto path planning, auto-return, and auto-stop. Set it and forget it.",
      },
      {
        icon: "🏠",
        title: "Tuya Smart + 2 min/m²",
        description:
          "Fastest cleaning speed with smart home integration. Atomizing dual spray, remote control, and voice assistant compatibility.",
      },
    ],
  },
];

