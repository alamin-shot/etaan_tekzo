import "server-only"

import { client, normalizeError } from "@/lib/http";
import { mockVerify } from "@/mocks/auth";
import { env } from "@/config/env";
import type { VerifyEmailInput, VerifyResponse } from "@/types/auth";

export async function verifyEmail(input: VerifyEmailInput): Promise<VerifyResponse> {
    if (env.useMock) return mockVerify(input.email, input.code);
    try {
        const { data } = await client.post<VerifyResponse>("/auth/verify", input);
        return data;
    } catch (error) {
        return normalizeError(error);
    }
}