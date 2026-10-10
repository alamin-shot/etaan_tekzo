"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { parseShopParams } from "@/lib/parse-shop-params";
import type { Product } from "@/types/product";
import { ProductCard } from "./card";

const PAGE_SIZE = 8;

export function ProductGrid({ products }: { products: Product[] }) {
    const sp = useSearchParams();
    const params = parseShopParams(sp);

    const filtered = useMemo(() => {
        let list = [...products];
        if (params.clothing !== "all") list = list.filter((p) => p.clothing === params.clothing);
        if (params.colour !== "all") list = list.filter((p) => p.colours.includes(params.colour as never));
        if (params.size !== "all") list = list.filter((p) => p.sizes.includes(params.size as never));

        if (params.sort === "price_asc") list.sort((a, b) => a.priceBdt - b.priceBdt);
        else if (params.sort === "price_desc") list.sort((a, b) => b.priceBdt - a.priceBdt);
        else if (params.sort === "new") list = list.filter((p) => p.isNew).concat(list.filter((p) => !p.isNew));

        return list;
    }, [products, params.clothing, params.colour, params.size, params.sort]);

    const start = (params.page - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    if (filtered.length === 0) {
        return (
            <div className="rounded-2xl bg-white/5 p-10 text-center text-sm text-white/70">
                No products match these filters.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {pageItems.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}