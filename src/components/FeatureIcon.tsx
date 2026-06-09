"use client";

import { LuDroplets, LuShieldCheck, LuSlidersHorizontal, LuRuler, LuZap, LuCog, LuSparkles, LuWifi } from "react-icons/lu";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  droplet: LuDroplets,
  "water-drop": LuDroplets,
  shield: LuShieldCheck,
  "shield-check": LuShieldCheck,
  sliders: LuSlidersHorizontal,
  settings: LuSlidersHorizontal,
  ruler: LuRuler,
  measure: LuRuler,
  zap: LuZap,
  lightning: LuZap,
  cog: LuCog,
  gear: LuCog,
  sparkles: LuSparkles,
  "auto-clean": LuSparkles,
  wifi: LuWifi,
  wireless: LuWifi,
};

// Fallback: detect known emoji characters
const emojiFallback: Record<string, string> = {
  "💧": "droplet",
  "🛡️": "shield-check",
  "🎛️": "sliders",
  "📏": "ruler",
  "⚡": "zap",
};

function resolveName(raw: string): string {
  // Direct match in iconMap
  if (iconMap[raw]) return raw;
  // Emoji fallback
  if (emojiFallback[raw]) return emojiFallback[raw];
  // Try lowercase
  const lower = raw.toLowerCase().trim();
  if (iconMap[lower]) return lower;
  return "";
}

export default function FeatureIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const resolved = resolveName(name);
  if (!resolved) {
    // Render nothing — caller can style the fallback
    return <span className={`${className} inline-block bg-novu-warm-100/50 rounded-full`} aria-hidden="true" />;
  }
  const Icon = iconMap[resolved];
  return <Icon className={className} />;
}

export { iconMap, emojiFallback };
