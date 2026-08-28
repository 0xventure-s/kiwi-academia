import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { sendContactInquiryEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(180),
  interest: z.enum(["turnos", "comandas", "agentes-ia", "otro"]),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { message: "No pudimos procesar la consulta." },
        { status: 415 },
      );
    }

    const payload = contactSchema.safeParse(await request.json());

    if (!payload.success) {
      return NextResponse.json(
        { message: "Revisá los datos ingresados e intentá nuevamente." },
        { status: 400 },
      );
    }

    await sendContactInquiryEmail(payload.data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "No pudimos enviar tu consulta. Intentá nuevamente." },
      { status: 500 },
    );
  }
}
