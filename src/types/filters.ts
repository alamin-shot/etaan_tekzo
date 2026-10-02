import type { ProductColour, ProductSize } from "./product";

export type SortKey = "recommended" | "price_asc" | "price_desc" | "new";

export type ShopParams = {
    clothing: string;
    colour: ProductColour | "all";
    size: ProductSize | "all";
    sort: SortKey;
    page: number;
};