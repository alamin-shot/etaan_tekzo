import { NextResponse } from "next/server";
import { signupSchema } from "@/validations/signup";
import { signup } from "@/services/auth";

export async function POST(request: Request) {
    const body = await request.json().catch(() => null);
    const parsed = signupSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { ok: false, code: "validation", message: "Invalid input.", fieldErrors: parsed.error.flatten().fieldErrors },
            { status: 400 },
        );
    }
    const result = await signup(parsed.data);
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}