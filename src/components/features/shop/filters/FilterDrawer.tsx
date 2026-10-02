"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FilterPanel } from "./FilterPanel";

export function FilterDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setOpen(true)} className="lg:hidden">
                Filter
            </Button>

            {open ? (
                <div className="fixed inset-0 z-50 flex flex-col bg-white text-ink">
                    <div className="flex items-center justify-between bg-brand px-5 py-4">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-[11px] uppercase tracking-widest text-white"
                        >
                            ← Back
                        </button>
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-white">
                            Filters
                        </span>
                        <span className="w-10" />
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        <FilterPanel />
                    </div>
                </div>
            ) : null}
        </>
    );
}