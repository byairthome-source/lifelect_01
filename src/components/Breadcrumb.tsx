import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-sm text-novu-near-black-55 mb-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-novu-near-black-15">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-novu-near-black transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-novu-near-black">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
