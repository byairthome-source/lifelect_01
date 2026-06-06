"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right" | "clip-reveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;       // 0-7  (0, 0.08, 0.16 … 0.56s)
  threshold?: number;
  variant?: Variant;
}

const variantClass: Record<Variant, string> = {
  "fade-up":      "animate-fade-up",
  "fade-in":      "animate-fade-in",
  "scale-up":     "animate-scale-up",
  "slide-left":   "animate-slide-left",
  "slide-right":  "animate-slide-right",
  "clip-reveal":  "animate-clip-reveal",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  variant = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass = visible ? variantClass[variant] : "opacity-0";
  const delayClass = delay > 0 ? `animate-delay-${delay}` : "";

  return (
    <div ref={ref} className={`${animClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
