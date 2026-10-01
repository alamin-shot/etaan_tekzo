import { NextResponse } from "next/server";
import { otpSchema } from "@/validations/otp";
import { verifyEmail } from "@/services/auth";

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const parsed = otpSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, code: "validation", message: "Invalid input." },
            { status: 400 },
        );
    }
    const result = await verifyEmail(parsed.data);
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}