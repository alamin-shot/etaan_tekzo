"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronIcon } from "@/components/ui/icons";

export type DropdownOption = { value: string; label: string };

export function Dropdown({
    value,
    options,
    onChange,
    align = "left",
}: {
    value: string;
    options: DropdownOption[];
    onChange: (value: string) => void;
    align?: "left" | "right";
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const selected = options.find((o) => o.value === value);

    useEffect(() => {
        if (!open) return;
        const onDoc = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex h-11 w-full items-center justify-between rounded-lg bg-brand px-4 text-[11px] font-semibold uppercase tracking-widest text-white"
            >
                <span>{selected?.label ?? "Sort"}</span>
                <ChevronIcon className={clsx("h-4 w-4 transition-transform", open && "rotate-180")} />
            </button>
            {open ? (
                <ul
                    role="listbox"
                    className={clsx(
                        "absolute z-40 mt-1 w-full overflow-hidden rounded-lg bg-white shadow-xl",
                        align === "right" && "right-0",
                    )}
                >
                    {options.map((o) => (
                        <li key={o.value}>
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(o.value);
                                    setOpen(false);
                                }}
                                className={clsx(
                                    "block w-full px-4 py-3 text-left text-sm text-ink hover:bg-ink/5",
                                    o.value === value && "bg-ink/5 font-medium",
                                )}
                            >
                                {o.label}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}