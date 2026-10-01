import clsx from "clsx";

export type LoaderVariant = "fullscreen" | "section" | "inline";

const sizes: Record<LoaderVariant, string> = {
    fullscreen: "min-h-screen",
    section: "min-h-[40vh]",
    inline: "",
};

const spinnerSizes: Record<LoaderVariant, string> = {
    fullscreen: "h-12 w-12 border-4",
    section: "h-8 w-8 border-[3px]",
    inline: "h-4 w-4 border-2",
};

export function Loader({ variant = "fullscreen" }: { variant?: LoaderVariant }) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={clsx(
                "flex items-center justify-center w-full",
                sizes[variant],
            )}
        >
            <div
                className={clsx(
                    "rounded-full border-white/20 border-t-brand etan-loader-spin",
                    spinnerSizes[variant],
                )}
            />
        </div>
    );
}