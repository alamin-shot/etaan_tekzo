import { NextResponse } from "next/server";
import { loginSchema } from "@/validations/login";
import { login } from "@/services/auth";

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, code: "validation", message: "Invalid input.", fieldErrors: parsed.error.flatten().fieldErrors },
            { status: 400 },
        );
    }
    const result = await login(parsed.data);
    return NextResponse.json(result, { status: result.ok ? 200 : 401 });
}