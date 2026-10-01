import type { VerifyResponse } from "@/types/auth";

export function mockVerify(email: string, code: string): VerifyResponse {
    if (code !== "1234") {
        return { ok: false, code: "invalid_code", message: "That code is not correct." };
    }
    return {
        ok: true,
        data: { user: { id: "u_1", name: "Mock", surname: "User", email } },
    };
}