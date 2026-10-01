import axios from "axios";
import type { ApiFailure } from "@/types/api";

export function normalizeError(error: unknown): ApiFailure {
    if (axios.isAxiosError(error)) {
        const data = error.response?.data as Partial<ApiFailure> | undefined;
        if (data && data.code && data.message) {
            return {
                ok: false,
                code: data.code,
                message: data.message,
                fieldErrors: data.fieldErrors,
            };
        }
        if (!error.response) {
            return { ok: false, code: "network", message: "Network error. Try again." };
        }
        return {
            ok: false,
            code: "http_error",
            message: "Something went wrong. Try again.",
        };
    }
    return { ok: false, code: "unknown", message: "Something went wrong." };
}