"use client";

import { useEffect } from "react";

export default function SmoothScrollEnabler() {
  useEffect(() => {
    const t = setTimeout(() => {
      document.documentElement.classList.add("smooth-scroll");
    }, 200);
    return () => clearTimeout(t);
  }, []);
  return null;
}
