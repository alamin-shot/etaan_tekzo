"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { HomeIcon, ShopIcon, OutfitIcon, AccountIcon } from "@/components/ui/icons";
import { ROUTES } from "@/config/routes";

const ITEMS = [
    { href: ROUTES.home, label: "Home", Icon: HomeIcon },
    { href: ROUTES.home, label: "Shop", Icon: ShopIcon },
    { href: ROUTES.outfitForYou, label: "Outfit For You", Icon: OutfitIcon },
    { href: ROUTES.starting, label: "Account", Icon: AccountIcon },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur">
            <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 py-2">
                {ITEMS.map(({ href, label, Icon }) => {
                    const active = pathname === href;
                    return (
                        <li key={label} className="flex-1">
                            <Link
                                href={href}
                                className={clsx(
                                    "flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[10px] uppercase tracking-widest transition",
                                    active ? "text-brand" : "text-white/70 hover:text-white",
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}