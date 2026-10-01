import { NextResponse } from "next/server";
import { forgotPasswordSchema } from "@/validations/forgot-password";
import { forgotPassword } from "@/services/auth";

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const parsed = forgotPasswordSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, code: "validation", message: "Invalid input." },
            { status: 400 },
        );
    }
    const result = await forgotPassword(parsed.data);
    return NextResponse.json(result, { status: 200 });
}