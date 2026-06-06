import { prisma } from "@/lib/prisma";
import type { Product } from "@/data/products";

// ── Internal types ──

interface PrismaProduct {
  id: string;
  name: string;
  slug: string;
  series: string;
  subtitle: string;
  summary: string;
  description: string;
  coverColor: string;
  image: string;
  specs: { key: string; value: string; unit: string }[];
  features: { icon: string; title: string; description: string }[];
  images: { url: string; sortOrder: number }[];
}

// ── Public (no auth) ──

export async function getProducts(series?: string): Promise<Product[]> {
  const where: Record<string, unknown> = { published: true };
  if (series) where.series = series;

  const dbProducts = await prisma.product.findMany({
    where,
    include: {
      specs: { orderBy: { sortOrder: "asc" } },
      features: { orderBy: { sortOrder: "asc" } },
      images: { orderBy: { sortOrder: "asc" } },
    },
    orderBy: { sortOrder: "asc" },
  });

  return dbProducts.map(mapToProductInterface);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const p = await prisma.product.findUnique({
    where: { slug, published: true },
    include: {
      specs: { orderBy: { sortOrder: "asc" } },
      features: { orderBy: { sortOrder: "asc" } },
      images: { orderBy: { sortOrder: "asc" } },
    },
  });
  if (!p) return null;
  return mapToProductInterface(p);
}

// ── Admin (requires auth check at API layer) ──

export async function getAdminProducts(): Promise<Product[]> {
  const dbProducts = await prisma.product.findMany({
    include: {
      specs: { orderBy: { sortOrder: "asc" } },
      features: { orderBy: { sortOrder: "asc" } },
      images: { orderBy: { sortOrder: "asc" } },
    },
    orderBy: { sortOrder: "asc" },
  });
  return dbProducts.map(mapToProductInterface);
}

export async function getAdminProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: {
      specs: { orderBy: { sortOrder: "asc" } },
      features: { orderBy: { sortOrder: "asc" } },
      images: { orderBy: { sortOrder: "asc" } },
    },
  });
}

// ── Mapper ──

function mapToProductInterface(p: PrismaProduct): Product {
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    series: p.series,
    subtitle: p.subtitle,
    summary: p.summary,
    description: p.description,
    coverColor: p.coverColor,
    image: p.image,
    images: (p.images || []).sort((a, b) => a.sortOrder - b.sortOrder).map((img) => img.url),
    specs: p.specs.map((s) => ({ key: s.key, value: s.value, unit: s.unit })),
    features: p.features.map((f) => ({ icon: f.icon, title: f.title, description: f.description })),
  };
}
