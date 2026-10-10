import "server-only";
import { PRODUCTS } from "@/mocks/products";
import type { Product } from "@/types/product";
import type { ApiResult } from "@/types/api";

export async function listProducts(): Promise<ApiResult<Product[]>> {
    return { ok: true, data: PRODUCTS };
}