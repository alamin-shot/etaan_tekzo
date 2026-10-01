export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
    return (
        <label
            htmlFor={htmlFor}
            className="block text-[11px] uppercase tracking-widest text-white/70 mb-2"
        >
            {children}
        </label>
    );
}