import Image from "next/image";
import { Logo } from "@/components/ui/logo";

export function AuthShellFullBleed({
    children,
    heroSrc,
    heroAlt,
}: {
    children: React.ReactNode;
    heroSrc: string;
    heroAlt: string;
}) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-ink text-white">
            <Image
                src={heroSrc}
                alt={heroAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/45" aria-hidden />

            <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
                <Logo />
                <span className="text-[11px] uppercase tracking-widest text-white/80">
                    How it works?
                </span>
            </header>

            <main className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">
                {children}
            </main>
        </div>
    );
}