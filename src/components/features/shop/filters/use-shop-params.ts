"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { parseShopParams } from "@/lib/parse-shop-params";

export function useShopParams() {
    const router = useRouter();
    const sp = useSearchParams();
    const params = parseShopParams(sp);

    const setParam = useCallback(
        (key: string, value: string | number) => {
            const next = new URLSearchParams(sp.toString());
            if (value === "all" || value === "" || value === 1) next.delete(key);
            else next.set(key, String(value));
            if (key !== "page") next.delete("page");
            router.replace(`/?${next.toString()}`, { scroll: false });
        },
        [router, sp],
    );

    return { params, setParam };
}