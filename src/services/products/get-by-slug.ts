import "server-only";
import { PRODUCTS } from "@/mocks/products";
import type { Product } from "@/types/product";
import type { ApiResult } from "@/types/api";

export async function getProductBySlug(
    slug: string,
): Promise<ApiResult<Product | null>> {
    const found = PRODUCTS.find((p) => p.slug === slug) ?? null;
    return { ok: true, data: found };
}