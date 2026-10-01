import { client, normalizeError } from "@/lib/http";
import { mockLogin } from "@/mocks/auth";
import { env } from "@/config/env";
import type { LoginInput, LoginResponse } from "@/types/auth";

export async function login(input: LoginInput): Promise<LoginResponse> {
    if (env.useMock) return mockLogin(input.email);
    try {
        const { data } = await client.post<LoginResponse>("/auth/login", input);
        return data;
    } catch (error) {
        return normalizeError(error);
    }
}