"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { ProductSize } from "@/types/product";

const LABELS: Record<ProductSize, string> = {
    "s-36": "S",
    "m-38": "M",
    "l-40": "L",
    "xl-42": "XL",
    "xxl-44": "XXL",
};

export function SizeSelector({
    sizes,
    selected,
}: {
    sizes: ProductSize[];
    selected: ProductSize | null;
}) {
    const router = useRouter();
    const sp = useSearchParams();

    const pick = (size: ProductSize) => {
        const next = new URLSearchParams(sp.toString());
        if (size === selected) next.delete("size");
        else next.set("size", size);
        router.replace(`?${next.toString()}`, { scroll: false });
    };

    return (
        <div>
            <p className="mb-2 text-[11px] uppercase tracking-widest text-white/60">Size</p>
            <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => pick(s)}
                        aria-pressed={s === selected}
                        className={clsx(
                            "h-11 min-w-11 rounded-lg border px-3 text-xs uppercase tracking-widest transition",
                            s === selected
                                ? "border-brand bg-brand text-white"
                                : "border-white/20 text-white/80 hover:border-white/50",
                        )}
                    >
                        {LABELS[s]}
                    </button>
                ))}
            </div>
        </div>
    );
}