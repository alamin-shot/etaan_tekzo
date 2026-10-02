"use client";

import { Button } from "@/components/ui/button";
import { FilterGroup } from "./FilterGroup";
import { useShopParams } from "./use-shop-params";
import { CLOTHING_OPTIONS, COLOUR_OPTIONS, SIZE_OPTIONS } from "@/constants/shop-filters";

export function FilterPanel() {
    const { params, setParam } = useShopParams();

    return (
        <div className="rounded-2xl bg-white p-5 text-ink">
            <FilterGroup
                title="Clothing"
                options={CLOTHING_OPTIONS}
                value={params.clothing}
                onChange={(v) => setParam("clothing", v)}
            />
            <FilterGroup
                title="Colour"
                options={COLOUR_OPTIONS}
                value={params.colour}
                onChange={(v) => setParam("colour", v)}
            />
            <FilterGroup
                title="Size"
                options={SIZE_OPTIONS}
                value={params.size}
                onChange={(v) => setParam("size", v)}
                twoColumn
            />
            <div className="pt-6">
                <Button
                    variant="primary"
                    onClick={() => setParam("page", 1)}
                    className="w-full"
                >
                    Show all products
                </Button>
            </div>
        </div>
    );
}