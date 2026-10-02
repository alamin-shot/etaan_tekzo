import { Logo } from "@/components/ui/logo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarActions } from "./NavbarActions";

export function Navbar() {
    return (
        <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-ink/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
                <Logo />
                <NavbarLinks />
                <NavbarActions />
            </div>
        </header>
    );
}