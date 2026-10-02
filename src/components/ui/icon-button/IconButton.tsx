import clsx from "clsx";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    children: React.ReactNode;
};

export function IconButton({ label, children, className, ...rest }: IconButtonProps) {
    return (
        <button
            {...rest}
            aria-label={label}
            className={clsx(
                "inline-flex h-9 w-9 items-center justify-center rounded-full transition",
                "text-white/80 hover:text-white hover:bg-white/10",
                className,
            )}
        >
            {children}
        </button>
    );
}