import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // ── Create admin user ──
  const passwordHash = await bcrypt.hash("Momo0622", 12);
  await prisma.user.upsert({
    where: { email: "admin@lifelect.com" },
    update: {},
    create: {
      email: "admin@lifelect.com",
      name: "Admin",
      password: passwordHash,
      role: "admin",
    },
  });
  console.log("✅ Admin user: admin@lifelect.com / admin123");

  // ── Seed products ──
  const { products } = await import("../src/data/products");

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name, series: p.series, subtitle: p.subtitle,
        summary: p.summary, description: p.description,
        coverColor: p.coverColor, image: p.image, sortOrder: i,
      },
      create: {
        slug: p.slug, name: p.name, series: p.series, subtitle: p.subtitle,
        summary: p.summary, description: p.description,
        coverColor: p.coverColor, image: p.image, sortOrder: i,
      },
    });

    await prisma.productSpec.deleteMany({ where: { productId: product.id } });
    await prisma.productFeature.deleteMany({ where: { productId: product.id } });

    for (let j = 0; j < p.specs.length; j++) {
      const s = p.specs[j];
      await prisma.productSpec.create({
        data: { productId: product.id, key: s.key, value: s.value, unit: s.unit, sortOrder: j },
      });
    }
    for (let j = 0; j < p.features.length; j++) {
      const f = p.features[j];
      await prisma.productFeature.create({
        data: { productId: product.id, icon: f.icon, title: f.title, description: f.description, sortOrder: j },
      });
    }
    console.log(`✅ ${p.name}`);
  }
  // ── Seed blog posts ──
  const { blogPosts } = await import("../src/data/blog");

  for (const bp of blogPosts) {
    await prisma.post.upsert({
      where: { slug: bp.slug },
      update: {
        title: bp.title, date: new Date(bp.date), tags: JSON.stringify(bp.tags),
        summary: bp.summary, body: bp.body, coverGradient: bp.coverGradient,
      },
      create: {
        slug: bp.slug, title: bp.title, date: new Date(bp.date), tags: JSON.stringify(bp.tags),
        summary: bp.summary, body: bp.body, coverGradient: bp.coverGradient,
      },
    });
    console.log(`✅ Blog: ${bp.title}`);
  }

  console.log(`\n🎉 Done: 1 admin + ${products.length} products + ${blogPosts.length} blog posts`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
