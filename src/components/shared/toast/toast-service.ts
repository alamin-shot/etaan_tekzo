import { makeStore } from "@/store";
import { uiActions } from "@/store/slices/ui";

export function toast(message: string, variant: "success" | "error" | "info" = "info") {
    const store = makeStore();
    store.dispatch(uiActions.pushToast({ message, variant }));
}