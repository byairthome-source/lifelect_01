"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return <>{children}</>;
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main-content">{children}</main>
      <BackToTop />
    </>
  );
}
