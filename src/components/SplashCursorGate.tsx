"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";

export default function SplashCursorGate() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only on homepage
    if (pathname !== "/home") { setEnabled(false); return; }
    // Disable on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) { setEnabled(false); return; }
    // Disable on reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setEnabled(false); return; }
    setEnabled(true);
  }, [pathname]);

  if (!enabled) return null;
  return <SplashCursor RAINBOW_MODE={false} COLOR="#fe4e02" SPLAT_FORCE={3000} SPLAT_RADIUS={0.15} DENSITY_DISSIPATION={4} />;
}
