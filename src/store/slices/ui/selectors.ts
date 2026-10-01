import type { RootState } from "@/types/store";

export const selectToasts = (s: RootState) => s.ui.toasts;
export const selectSessionOverlayVisible = (s: RootState) => s.ui.sessionOverlayVisible;