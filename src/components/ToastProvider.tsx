"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#14171a",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
        },
        success: { iconTheme: { primary: "#25D366", secondary: "#fff" } },
        error: { iconTheme: { primary: "#fe4e02", secondary: "#fff" } },
      }}
    />
  );
}
