import type { AuthUser } from "./auth";
// Appended to src/types/store.ts
import type { makeStore } from "@/store";

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type SessionStatus = "anonymous" | "active" | "refreshing" | "expired";

export type AuthSliceState = {
    user: AuthUser | null;
    status: "idle" | "loading" | "authenticated" | "error";
    error: string | null;
};

export type SessionSliceState = { status: SessionStatus };

export type ToastVariant = "success" | "error" | "info";
export type Toast = { id: string; message: string; variant: ToastVariant };

export type UiSliceState = {
    toasts: Toast[];
    sessionOverlayVisible: boolean;
};