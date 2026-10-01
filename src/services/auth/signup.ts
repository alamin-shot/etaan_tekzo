import { client, normalizeError } from "@/lib/http";
import { mockSignup } from "@/mocks/auth";
import { env } from "@/config/env";
import type { SignupInput, SignupResponse } from "@/types/auth";

export async function signup(input: SignupInput): Promise<SignupResponse> {
    if (env.useMock) return mockSignup(input.email);
    try {
        const { data } = await client.post<SignupResponse>("/auth/signup", input);
        return data;
    } catch (error) {
        return normalizeError(error);
    }
}