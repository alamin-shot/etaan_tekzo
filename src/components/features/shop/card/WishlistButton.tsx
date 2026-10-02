"use client";

import { HeartIcon } from "@/components/ui/icons";
import { IconButton } from "@/components/ui/icon-button";
import { useAppSelector } from "@/hooks/use-app-selector";
import { selectIsWishlisted, wishlistActions } from "@/store/slices/wishlist";
import { useAppDispatch } from "@/hooks/use-app-dispatch";

export function WishlistButton({ id }: { id: string }) {
    const dispatch = useAppDispatch();
    const active = useAppSelector(selectIsWishlisted(id));

    return (
        <IconButton
            label={active ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => dispatch(wishlistActions.toggle(id))}
            className="bg-red-500/20 text-ink "
        >
            <HeartIcon className="h-4 w-4" filled={active} />
        </IconButton>
    );
}