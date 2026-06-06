import { NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const series = url.searchParams.get("series") || undefined;
  const products = await getProducts(series);
  return NextResponse.json(products);
}
