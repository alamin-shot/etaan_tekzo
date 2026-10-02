import type { SortKey } from "@/types/filters";

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
    { value: "recommended", label: "Recommended" },
    { value: "price_asc", label: "Price low to high" },
    { value: "price_desc", label: "Price high to low" },
    { value: "new", label: "New in" },
];

export const DEFAULT_SORT: SortKey = "recommended";