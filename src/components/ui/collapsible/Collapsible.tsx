"use client";

import { useState } from "react";
import clsx from "clsx";
import { ChevronIcon } from "@/components/ui/icons";

export function Collapsible({
    title,
    subtitle,
    defaultOpen = false,
    children,
}: {
    title: string;
    subtitle?: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-black/10 py-4">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="flex w-full items-center justify-between text-left"
            >
                <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-ink">
                        {title}
                    </span>
                    {subtitle ? (
                        <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-ink/50">
                            {subtitle}
                        </span>
                    ) : null}
                </span>
                <ChevronIcon
                    className={clsx(
                        "h-4 w-4 text-ink/60 transition-transform",
                        open && "rotate-180",
                    )}
                />
            </button>
            {open ? <div className="pt-3">{children}</div> : null}
        </div>
    );
}