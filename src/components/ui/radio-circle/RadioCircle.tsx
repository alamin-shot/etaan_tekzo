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
        <label className="flex cursor-pointer items-center gap-3 py-1.5 text-sm">
            <span
                className={clsx(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition",
                    checked ? "border-brand" : "border-white/40",
                )}
            >
                {checked ? <span className="h-2 w-2 rounded-full bg-brand" /> : null}
            </span>
            {hex ? (
                <span
                    className="h-4 w-4 shrink-0 rounded-full border border-white/20"
                    style={{ backgroundColor: hex }}
                />
            ) : null}
            <span className={clsx("text-white/80", checked && "text-white")}>{label}</span>
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