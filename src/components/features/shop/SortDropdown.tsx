"use client";

import { Dropdown } from "@/components/ui/dropdown";
import { SORT_OPTIONS } from "@/constants/sort-options";
import { useShopParams } from "./filters";

export function SortDropdown() {
    const { params, setParam } = useShopParams();

    return (
        <Dropdown
            value={params.sort}
            options={SORT_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
            onChange={(v) => setParam("sort", v)}
        />
    );
}