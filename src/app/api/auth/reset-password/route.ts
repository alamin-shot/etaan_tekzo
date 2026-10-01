import { NextResponse } from "next/server";
import { resetPasswordSchema } from "@/validations/reset-password";
import { resetPassword } from "@/services/auth";

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const parsed = resetPasswordSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, code: "validation", message: "Invalid input." },
            { status: 400 },
        );
    }
    const result = await resetPassword({
        token: parsed.data.token,
        password: parsed.data.password,
    });
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}