import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { specs: { orderBy: { sortOrder: "asc" } }, features: { orderBy: { sortOrder: "asc" } }, images: { orderBy: { sortOrder: "asc" } } },
  });
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { specs, features, images, ...productData } = body;

  await prisma.product.update({ where: { id: params.id }, data: productData });

  if (specs) {
    await prisma.productSpec.deleteMany({ where: { productId: params.id } });
    for (let i = 0; i < specs.length; i++) {
      await prisma.productSpec.create({
        data: { productId: params.id, key: specs[i].key, value: specs[i].value, unit: specs[i].unit, sortOrder: i },
      });
    }
  }

  if (features) {
    await prisma.productFeature.deleteMany({ where: { productId: params.id } });
    for (let i = 0; i < features.length; i++) {
      await prisma.productFeature.create({
        data: { productId: params.id, icon: features[i].icon, title: features[i].title, description: features[i].description, sortOrder: i },
      });
    }
  }

  if (images) {
    await prisma.productImage.deleteMany({ where: { productId: params.id } });
    for (let i = 0; i < images.length; i++) {
      await prisma.productImage.create({
        data: { productId: params.id, url: images[i], sortOrder: i },
      });
    }
  }

  const updated = await prisma.product.findUnique({
    where: { id: params.id },
    include: { specs: { orderBy: { sortOrder: "asc" } }, features: { orderBy: { sortOrder: "asc" } }, images: { orderBy: { sortOrder: "asc" } } },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.product.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
