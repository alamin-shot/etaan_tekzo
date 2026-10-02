import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WishlistSliceState } from "@/types/store";

const initialState: WishlistSliceState = { ids: [] };

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggle(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.ids = state.ids.includes(id)
                ? state.ids.filter((x) => x !== id)
                : [...state.ids, id];
        },
        clear(state) {
            state.ids = [];
        },
    },
});

export const wishlistActions = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;