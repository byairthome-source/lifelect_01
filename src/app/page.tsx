"use client";

import { useState, useEffect, useCallback } from "react";

export default function SplashPage() {
  const [visible, setVisible] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  const navigate = useCallback(() => {
    setVisible(false);
    // Lock scroll during fade-out
    document.documentElement.classList.add("no-scroll");
    setTimeout(() => {
      // Force scroll to absolute top before navigating
      window.scrollTo({ top: 0, behavior: "instant" });
      window.location.replace("/home#top");
    }, 700);
  }, []);

  useEffect(() => {
    // Ensure we start at top
    window.scrollTo({ top: 0, behavior: "instant" });
    document.documentElement.classList.add("no-scroll");

    const t1 = setTimeout(() => setShowSkip(true), 2000);
    const t2 = setTimeout(navigate, 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.classList.remove("no-scroll");
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-novu-near-black overflow-hidden
                  transition-opacity duration-700 ease-out ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Lifelect splash screen"
    >
      {/* Radial glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full
                   bg-[radial-gradient(circle,rgba(254,78,2,0.06)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative text-center px-6 z-10">
        {/* Line 1: Logo */}
        <p className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0
                      text-[clamp(40px,7vw,88px)] font-light tracking-tight leading-[1.05] text-white">
          Lifelect<span className="text-novu-orange">.</span>
        </p>

        {/* Line 2: Welcome */}
        <p className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0 mt-4
                      text-[clamp(16px,2vw,22px)] font-light tracking-wide text-white/50"
           style={{ animationDelay: "0.35s" }}>
          Welcome to Lifelect
        </p>

        {/* Line 3: Tagline */}
        <p className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0 mt-2
                      text-[clamp(13px,1.5vw,16px)] font-light tracking-wide text-white/25"
           style={{ animationDelay: "0.7s" }}>
          Smart Window Cleaning, Made Reliable
        </p>
      </div>

      {/* Thin progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-novu-orange/40 rounded-full animate-[splash-bar_4.5s_ease-out_forwards]" />
      </div>

      {/* Skip button */}
      {showSkip && (
        <button
          onClick={navigate}
          className="absolute bottom-20 text-white/15 hover:text-white/50 text-xs tracking-widest uppercase
                     transition-colors duration-500 cursor-pointer"
        >
          Skip
        </button>
      )}

      <style>{`
        @keyframes splash-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
