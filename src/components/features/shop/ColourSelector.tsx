"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { COLOUR_HEX, COLOUR_LABELS } from "@/constants/colours";
import type { ProductColour } from "@/types/product";

export function ColourSelector({
    colours,
    selected,
}: {
    colours: ProductColour[];
    selected: ProductColour | null;
}) {
    const router = useRouter();
    const sp = useSearchParams();

    const pick = (colour: ProductColour) => {
        const next = new URLSearchParams(sp.toString());
        if (colour === selected) next.delete("colour");
        else next.set("colour", colour);
        router.replace(`?${next.toString()}`, { scroll: false });
    };

    return (
        <div>
            <p className="mb-2 text-[11px] uppercase tracking-widest text-white/60">Colours</p>
            <div className="flex flex-wrap items-center gap-3">
                {colours.map((c) => (
                    <button
                        key={c}
                        type="button"
                        onClick={() => pick(c)}
                        aria-pressed={c === selected}
                        aria-label={COLOUR_LABELS[c] ?? c}
                        className={clsx(
                            "h-8 w-8 rounded-full border-2 transition",
                            c === selected ? "border-brand" : "border-white/30 hover:border-white/60",
                        )}
                        style={{ backgroundColor: COLOUR_HEX[c] ?? "#000" }}
                    />
                ))}
                {selected ? (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/80">
                        {COLOUR_LABELS[selected] ?? selected}
                    </span>
                ) : null}
            </div>
        </div>
    );
}