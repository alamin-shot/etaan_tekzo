import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="mt-16 border-t border-white/10 bg-ink py-10">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-4 text-center md:px-8">
                <Logo />
                <p className="text-[11px] uppercase tracking-widest text-white/50">
                    © {new Date().getFullYear()} Etan — All rights reserved
                </p>
            </div>
        </footer>
    );
}