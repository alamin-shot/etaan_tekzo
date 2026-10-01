import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};

export function Input({ invalid, className, ...rest }: InputProps) {
    return (
        <input
            {...rest}
            className={clsx(
                "w-full h-12 rounded-xl bg-transparent px-4 text-sm text-white placeholder:uppercase placeholder:tracking-wide placeholder:text-white/50",
                "border outline-none transition",
                invalid ? "border-red-400" : "border-white/30 focus:border-white",
                className,
            )}
        />
    );
}