import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, company, phone, subject, message, productId, website, ts } = body;

    // Honeypot: bots fill this hidden field
    if (website) {
      return NextResponse.json({ success: true }, { status: 201 });
    }
    // Time check: form filled in < 3 seconds = bot
    if (ts) {
      const elapsed = Date.now() - parseInt(ts, 10);
      if (elapsed < 3000) {
        return NextResponse.json({ success: true }, { status: 201 });
      }
    }

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    // Create inquiry
    const inquiry = await prisma.inquiry.create({
      data: {
        fullName,
        email,
        company: company || "",
        phone: phone || "",
        subject: subject || "General Inquiry",
        message,
        productId: productId || null,
      },
    });

    // Upsert customer
    await prisma.customer.upsert({
      where: { email },
      update: {
        fullName,
        company: company || "",
        phone: phone || "",
        totalInquiries: { increment: 1 },
        lastInquiryAt: new Date(),
      },
      create: {
        email,
        fullName,
        company: company || "",
        phone: phone || "",
      },
    });

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
