import "server-only"

import { client, normalizeError } from "@/lib/http";
import { mockResetPassword } from "@/mocks/auth";
import { env } from "@/config/env";
import type { ResetPasswordInput, ResetPasswordResponse } from "@/types/auth";

export async function resetPassword(input: ResetPasswordInput): Promise<ResetPasswordResponse> {
    if (env.useMock) return mockResetPassword(input.token, "mock@etan.dev");
    try {
        const { data } = await client.post<ResetPasswordResponse>("/auth/reset-password", input);
        return data;
    } catch (error) {
        return normalizeError(error);
    }
}