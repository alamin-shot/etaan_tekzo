import { Logo } from "@/components/ui/logo";

export function AuthShell({
    children,
    heroSrc,
    heroAlt,
    rightSide = true,
}: {
    children: React.ReactNode;
    heroSrc: string;
    heroAlt: string;
    rightSide?: boolean;
}) {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row bg-ink text-white">
            <header className="md:hidden flex items-center justify-between px-6 py-4">
                <Logo />
                <span className="text-[11px] uppercase tracking-widest text-white/60">How it works?</span>
            </header>

            <section className="w-full md:w-1/2 flex flex-col px-6 py-10 md:px-16 md:py-14">
                <div className="hidden md:flex items-center justify-between mb-12">
                    <Logo />
                    <span className="text-[11px] uppercase tracking-widest text-white/60">How it works?</span>
                </div>
                <div className="flex-1 flex flex-col justify-center">{children}</div>
            </section>

            {rightSide ? (
                <aside
                    aria-hidden
                    className="hidden md:block md:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSrc})` }}
                >
                    <div className="sr-only">{heroAlt}</div>
                </aside>
            ) : null}
        </div>
    );
}