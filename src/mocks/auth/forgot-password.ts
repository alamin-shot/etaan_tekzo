import type { ForgotPasswordResponse } from "@/types/auth";

export function mockForgotPassword(email: string): ForgotPasswordResponse {
    return { ok: true, data: { email } };
}