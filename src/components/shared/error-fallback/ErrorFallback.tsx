"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ErrorFallback({
    error,
    reset,
    title = "Something went wrong",
}: {
    error: Error & { digest?: string };
    reset: () => void;
    title?: string;
}) {
    useEffect(() => {
        // Client-side log only; no sensitive data.
        if (process.env.NODE_ENV !== "production") console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-white/60 max-w-sm">
                Please try again. If the problem continues, reload the page.
            </p>
            <div className="w-full max-w-xs">
                <Button onClick={reset}>Try again</Button>
            </div>
        </div>
    );
}