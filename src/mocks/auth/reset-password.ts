import type { ResetPasswordResponse } from "@/types/auth";

export function mockResetPassword(token: string, email: string): ResetPasswordResponse {
    if (!token) {
        return { ok: false, code: "invalid_token", message: "This reset link is invalid or expired." };
    }
    return { ok: true, data: { email } };
}
