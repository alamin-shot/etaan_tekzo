import clsx from "clsx";

export type RadioCircleProps = {
    name: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    label: string;
    hex?: string | null;
};

export function RadioCircle({ name, value, checked, onChange, label, hex }: RadioCircleProps) {
    return (
        <label className="flex cursor-pointer items-center gap-3 py-1.5 text-sm select-none group">
            <span
                className={clsx(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                    checked ? "border-brand bg-brand" : "border-ink/25 group-hover:border-ink/50",
                )}
            >
                {checked ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
            </span>
            {hex ? (
                <span
                    className="h-4 w-4 shrink-0 rounded-full border border-black/15 shadow-sm"
                    style={{ backgroundColor: hex }}
                />
            ) : null}
            <span
                className={clsx(
                    "transition-colors",
                    checked ? "font-semibold text-ink" : "text-ink/75 group-hover:text-ink",
                )}
            >
                {label}
            </span>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className="sr-only"
            />
        </label>
    );
}
