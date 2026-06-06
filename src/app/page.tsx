"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  const navigate = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      router.push("/home");
    }, 700);
  }, [router]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowSkip(true), 2000);
    const t2 = setTimeout(navigate, 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
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
        <p className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0
                      text-[clamp(40px,7vw,88px)] font-light tracking-tight leading-[1.05] text-white">
          Lifelect<span className="text-novu-orange">.</span>
        </p>

        <p className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0 mt-4
                      text-[clamp(16px,2vw,22px)] font-light tracking-wide text-white/50"
           style={{ animationDelay: "0.35s" }}>
          Welcome to Lifelect
        </p>

        <p className="animate-[fade-up_0.8s_ease-out_forwards] opacity-0 mt-2
                      text-[clamp(13px,1.5vw,16px)] font-light tracking-wide text-white/25"
           style={{ animationDelay: "0.7s" }}>
          Smart Window Cleaning, Made Reliable
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-novu-orange/40 rounded-full animate-[splash-bar_4.5s_ease-out_forwards]" />
      </div>

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
