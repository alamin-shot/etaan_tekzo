import axios from "axios";
import { normalizeError } from "./error-normalizer";
import type { ApiResult } from "@/types/api";

const http = axios.create({
    baseURL: "/api/auth",
    withCredentials: true,
    timeout: 15000,
    headers: { "Content-Type": "application/json" },
});

export async function post<T>(path: string, body: unknown): Promise<ApiResult<T>> {
    try {
        const { data } = await http.post<ApiResult<T>>(path, body);
        return data;
    } catch (error) {
        return normalizeError(error);
    }
}