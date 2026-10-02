import Link from "next/link";
import { ROUTES } from "@/config/routes";

const LINKS = [
    { href: ROUTES.outfitForYou, label: "Outfit For You" },
    { href: ROUTES.styleProfile, label: "Style Profile" },
    { href: ROUTES.home, label: "Shop Seasons" },
    { href: ROUTES.shopProduct, label: "Shop Product" },
    { href: ROUTES.shopByOccasion, label: "Shop By Occasion" },
];

export function NavbarLinks() {
    return (
        <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
                <Link
                    key={l.href}
                    href={l.href}
                    className="text-[11px] uppercase tracking-widest text-white/85 hover:text-white"
                >
                    {l.label}
                </Link>
            ))}
        </nav>
    );
}