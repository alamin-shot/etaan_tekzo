"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { uiActions } from "@/store/slices/ui";

export function ProductActions({ name }: { name: string }) {
    const dispatch = useAppDispatch();
    const notify = (msg: string) =>
        dispatch(uiActions.pushToast({ message: msg, variant: "info" }));

    return (
        <div className="grid grid-cols-2 gap-2">
            <Button size="md" onClick={() => notify(`${name} — checkout coming soon`)}>
                Buy now
            </Button>
            <Button
                size="md"
                variant="secondary"
                onClick={() => notify(`${name} added to bag (demo)`)}
            >
                Add to bag
            </Button>
        </div>
    );
}