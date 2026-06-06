import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getAdminProducts } from "@/lib/products";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const products = await getAdminProducts();
  return NextResponse.json(products);
}

interface SpecInput { key: string; value: string; unit: string; }
interface FeatureInput { icon: string; title: string; description: string; }

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { specs, features, images, ...productData } = body;

  const product = await prisma.product.create({
    data: {
      ...productData,
      specs: { create: (specs as SpecInput[]).map((s, i: number) => ({ ...s, sortOrder: i })) },
      features: { create: (features as FeatureInput[]).map((f, i: number) => ({ ...f, sortOrder: i })) },
      images: { create: (images as string[]).map((url, i: number) => ({ url, sortOrder: i })) },
    },
    include: { specs: true, features: true, images: true },
  });

  return NextResponse.json(product, { status: 201 });
}
