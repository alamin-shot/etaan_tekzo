import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Toast, ToastVariant, UiSliceState } from "@/types/store";

const initialState: UiSliceState = {
    toasts: [],
    sessionOverlayVisible: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        pushToast(state, action: PayloadAction<{ message: string; variant: ToastVariant }>) {
            state.toasts.push({
                id: Math.random().toString(36).slice(2),
                message: action.payload.message,
                variant: action.payload.variant,
            });
        },
        dismissToast(state, action: PayloadAction<string>) {
            state.toasts = state.toasts.filter((t) => t.id !== action.payload);
        },
        setSessionOverlay(state, action: PayloadAction<boolean>) {
            state.sessionOverlayVisible = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;