"use client";

import Link from "next/link";
import { IconButton } from "@/components/ui/icon-button";
import { HeartIcon, AccountIcon } from "@/components/ui/icons";
import { useAppSelector } from "@/hooks/use-app-selector";
import { selectWishlistIds } from "@/store/slices/wishlist";
import { ROUTES } from "@/config/routes";

export function NavbarActions() {
    const ids = useAppSelector(selectWishlistIds);

    return (
        <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] uppercase tracking-widest text-white/70">
                How it works?
            </span>
            <Link href={ROUTES.home} aria-label="Wishlist" className="relative inline-flex">
                <IconButton label="Wishlist">
                    <HeartIcon className="h-5 w-5" filled={ids.length > 0} />
                </IconButton>
                {ids.length > 0 ? (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white">
                        {ids.length}
                    </span>
                ) : null}
            </Link>
            <Link href={ROUTES.starting} aria-label="Account">
                <IconButton label="Account">
                    <AccountIcon className="h-5 w-5" />
                </IconButton>
            </Link>
        </div>
    );
}