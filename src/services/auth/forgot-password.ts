import "server-only"

import { client, normalizeError } from "@/lib/http";
import { mockForgotPassword } from "@/mocks/auth";
import { env } from "@/config/env";
import type { ForgotPasswordInput, ForgotPasswordResponse } from "@/types/auth";

export async function forgotPassword(input: ForgotPasswordInput): Promise<ForgotPasswordResponse> {
    if (env.useMock) return mockForgotPassword(input.email);
    try {
        const { data } = await client.post<ForgotPasswordResponse>("/auth/forgot-password", input);
        return data;
    } catch (error) {
        return normalizeError(error);
    }
}