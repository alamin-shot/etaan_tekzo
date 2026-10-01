import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
};

const base =
    "inline-flex items-center justify-center w-full rounded-[var(--radius-pill)] font-medium uppercase tracking-wide transition disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants: Record<Variant, string> = {
    primary: "bg-brand text-white hover:bg-brand-hover",
    secondary: "bg-white text-ink hover:bg-paper",
    ghost: "bg-transparent text-white border border-white/40 hover:border-white",
};

const sizes: Record<Size, string> = {
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-6 text-sm",
};

export function Button({
    variant = "primary",
    size = "lg",
    loading = false,
    disabled,
    className,
    children,
    ...rest
}: ButtonProps) {
    return (
        <button
            {...rest}
            disabled={disabled || loading}
            className={clsx(base, variants[variant], sizes[size], className)}
        >
            {loading ? <span className="etan-loader-pulse">…</span> : children}
        </button>
    );
}