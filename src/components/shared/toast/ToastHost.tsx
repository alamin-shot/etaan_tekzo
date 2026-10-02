"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/hooks/use-app-selector";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { uiActions } from "@/store/slices/ui";
import { selectToasts } from "@/store/slices/ui";
import clsx from "clsx";

export function ToastHost() {
    const toasts = useAppSelector(selectToasts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (toasts.length === 0) return;
        const timers = toasts.map((t) =>
            setTimeout(() => dispatch(uiActions.dismissToast(t.id)), 3200),
        );
        return () => timers.forEach(clearTimeout);
    }, [toasts, dispatch]);

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 z-[60] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4">
            {toasts.map((t) => (
                <div
                    key={t.id}
                    role="status"
                    className={clsx(
                        "rounded-xl px-4 py-3 text-sm shadow-lg",
                        t.variant === "success" && "bg-brand text-white",
                        t.variant === "error" && "bg-red-600 text-white",
                        t.variant === "info" && "bg-white text-ink",
                    )}
                >
                    {t.message}
                </div>
            ))}
        </div>
    );
}