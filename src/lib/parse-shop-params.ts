import { DEFAULT_SORT, SORT_OPTIONS } from "@/constants/sort-options";
import { CLOTHING_OPTIONS, COLOUR_OPTIONS, SIZE_OPTIONS } from "@/constants/shop-filters";
import type { ShopParams, SortKey } from "@/types/filters";
import type { ProductColour, ProductSize } from "@/types/product";

function pick<T extends string>(value: string | null, allowed: readonly T[], fallback: T): T {
    if (!value) return fallback;
    return (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

export function parseShopParams(sp: URLSearchParams): ShopParams {
    const clothingValues = CLOTHING_OPTIONS.map((o) => o.value);
    const colourValues = COLOUR_OPTIONS.map((o) => o.value);
    const sizeValues = SIZE_OPTIONS.map((o) => o.value);
    const sortValues = SORT_OPTIONS.map((o) => o.value);

    const pageRaw = Number(sp.get("page") ?? "1");
    const page = Number.isFinite(pageRaw) && pageRaw >= 1 ? Math.floor(pageRaw) : 1;

    return {
        clothing: pick(sp.get("clothing"), clothingValues, "all"),
        colour: pick(sp.get("colour"), colourValues, "all") as ProductColour | "all",
        size: pick(sp.get("size"), sizeValues, "all") as ProductSize | "all",
        sort: pick(sp.get("sort"), sortValues, DEFAULT_SORT) as SortKey,
        page,
    };
}