import type { RootState } from "@/types/store";

export const selectWishlistIds = (s: RootState) => s.wishlist.ids;
export const selectIsWishlisted = (id: string) => (s: RootState) =>
    s.wishlist.ids.includes(id);