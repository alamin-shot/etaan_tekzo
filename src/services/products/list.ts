import "server-only";
import { env } from "@/config/env";
import { PRODUCTS } from "@/mocks/products";
import type { Product } from "@/types/product";
import type { ApiResult } from "@/types/api";

export async function listProducts(): Promise<ApiResult<Product[]>> {
    if (env.useMock) return { ok: true, data: PRODUCTS };
    return { ok: true, data: PRODUCTS };
}