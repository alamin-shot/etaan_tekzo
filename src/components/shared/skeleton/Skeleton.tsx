import clsx from "clsx";

export function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                "etan-loader-pulse rounded-lg bg-white/10",
                className,
            )}
        />
    );
}