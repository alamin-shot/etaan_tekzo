import type { LoginResponse } from "@/types/auth";

export function mockLogin(email: string): LoginResponse {
    if (email === "fail@etan.dev") {
        return { ok: false, code: "invalid_credentials", message: "Invalid email or password." };
    }
    return {
        ok: true,
        data: {
            user: { id: "u_1", name: "Mock", surname: "User", email },
        },
    };
}