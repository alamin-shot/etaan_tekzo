"use client";

import { Collapsible } from "@/components/ui/collapsible/Collapsible";
import { RadioCircle } from "@/components/ui/radio-circle/RadioCircle";

export type FilterOption = {
    value: string;
    label: string;
    hex?: string | null;
};

export function FilterGroup({
    title,
    options,
    value,
    onChange,
    defaultOpen = true,
    twoColumn = false,
}: {
    title: string;
    options: readonly FilterOption[];
    value: string;
    onChange: (value: string) => void;
    defaultOpen?: boolean;
    twoColumn?: boolean;
}) {
    const current = options.find((o) => o.value === value);

    return (
        <Collapsible title={title} subtitle={current?.label ?? "All"} defaultOpen={defaultOpen}>
            <div className={twoColumn ? "grid grid-cols-2 gap-x-4" : ""}>
                {options.map((o) => (
                    <RadioCircle
                        key={o.value}
                        name={title}
                        value={o.value}
                        checked={o.value === value}
                        onChange={onChange}
                        label={o.label}
                        hex={o.hex ?? null}
                    />
                ))}
            </div>
        </Collapsible>
    );
}