"use client";

import { signOut } from "next-auth/react";

interface TopBarProps {
  user?: { name?: string | null; email?: string | null };
}

export default function TopBar({ user }: TopBarProps) {
  return (
    <header className="h-16 bg-white border-b border-novu-warm-200 flex items-center justify-between px-6 shrink-0">
      <div />
      <div className="flex items-center gap-4">
        <span className="text-body-sm text-novu-near-black-55">{user?.email}</span>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="text-label-sm text-novu-near-black-55 hover:text-novu-orange transition-colors"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
