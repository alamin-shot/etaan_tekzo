import type { SignupResponse } from "@/types/auth";

export function mockSignup(email: string): SignupResponse {
    return { ok: true, data: { email } };
}