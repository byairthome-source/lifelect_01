"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiBox, FiMessageSquare, FiUsers, FiBookOpen } from "react-icons/fi";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: FiGrid },
  { label: "Products", href: "/admin/products", icon: FiBox },
  { label: "Blog", href: "/admin/blog", icon: FiBookOpen },
  { label: "Inquiries", href: "/admin/inquiries", icon: FiMessageSquare },
  { label: "Customers", href: "/admin/customers", icon: FiUsers },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white border-r border-novu-warm-200 flex flex-col shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-novu-warm-100">
        <Link href="/admin/dashboard" className="text-lg font-semibold tracking-tight text-novu-near-black">
          Lifelect<span className="text-novu-orange">.</span>
          <span className="text-label-sm text-novu-near-black-55 ml-2 font-normal">Admin</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-body-sm transition-all duration-200 ${
                isActive
                  ? "bg-novu-orange/10 text-novu-orange font-medium"
                  : "text-novu-near-black-55 hover:text-novu-near-black hover:bg-novu-warm-50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-3 border-t border-novu-warm-100">
        <Link href="/" className="text-label-sm text-novu-near-black-55 hover:text-novu-near-black transition-colors">
          ← Back to Site
        </Link>
      </div>
    </aside>
  );
}
