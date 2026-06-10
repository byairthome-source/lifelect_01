import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Surface hierarchy ──
        "bg-light": "#FFFFFF",
        "novu-warm-50": "#F5F5F5",
        "novu-warm-100": "#EEEEEE",
        "novu-warm-200": "#E0E0E0",
        "novu-warm-300": "#CCCCCC",
        "novu-warm-500": "#999999",

        // ── Core brand ──
        black: "#000000",
        "novu-orange": "#fe4e02",
        "novu-blue": "#3B82F6",

        // ── Text — primary #333, secondary #666, placeholder #999 ──
        "novu-near-black": "#333333",
        "novu-near-black-60": "#666666",
        "novu-near-black-55": "#666666",
        "novu-near-black-40": "#999999",
        "novu-near-black-15": "#CCCCCC",
        "novu-near-black-5": "rgba(0, 0, 0, 0.05)",

        // ── White opacity stops ──
        "white-80": "rgba(255,255,255,0.8)",
        "white-60": "rgba(255,255,255,0.6)",
        "white-40": "rgba(255,255,255,0.4)",
        "white-15": "rgba(255,255,255,0.15)",
        "white-10": "rgba(255,255,255,0.10)",
        "white-5": "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Messina Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Victor Serif", "Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      fontSize: {
        "hero-display": ["89.6px", { lineHeight: "89.6px", letterSpacing: "-0.448px", fontWeight: "300" }],
        "section-lg": ["48px", { lineHeight: "48px", letterSpacing: "-0.24px", fontWeight: "300" }],
        "section-md": ["40px", { lineHeight: "40px", letterSpacing: "-0.2px", fontWeight: "300" }],
        "section-sm": ["36px", { lineHeight: "36px", letterSpacing: "-0.18px", fontWeight: "300" }],
        "serif-lg": ["40px", { lineHeight: "40px", letterSpacing: "-0.4px", fontWeight: "500" }],
        "serif-md": ["36px", { lineHeight: "36px", letterSpacing: "-0.36px", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "25px", fontWeight: "500" }],
        "body": ["16px", { lineHeight: "28.8px", fontWeight: "400" }],
        "body-sm": ["15px", { lineHeight: "27px", fontWeight: "400" }],
        "label": ["18px", { lineHeight: "32.4px", fontWeight: "500" }],
        "label-sm": ["15px", { lineHeight: "18.75px", fontWeight: "500" }],
        "nav": ["16px", { lineHeight: "20px", fontWeight: "400" }],
      },
      borderRadius: {
        pill: "640px",
        "section-lg": "64px",
        section: "48px",
        xl: "40px",
        lg: "30px",
        "2xl": "16px",
        sm: "11.1px",
        xs: "5.1px",
      },
      boxShadow: {
        "card-float": "0px -4px 32px -12px rgba(0, 0, 0, 0.035)",
        "button-lift": "0px 4px 20px 0px rgba(0, 0, 0, 0.35)",
        "glass-inset-light": "inset 1px 1px 1px 0px rgba(255, 255, 255, 0.4)",
        "glass-inset-contrast": "inset 1px 1px 1px 0px rgba(255, 255, 255, 0.6)",
      },
      backdropBlur: {
        nav: "10px",
        card: "3px",
      },
      spacing: {
        "hero-pad": "264px",
        "section-desktop": "144px",
        "section-tablet": "112px",
        "section-mobile": "80px",
        "card-desktop": "32px",
        "card-mobile": "28px",
        "grid-gap": "24px",
        "btn-group-gap": "12px",
        "block-gap": "24px",
      },
    },
  },
  plugins: [],
};
export default config;
