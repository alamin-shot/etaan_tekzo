"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { uiActions } from "@/store/slices/ui";

export function DetailActions({ productName }: { productName: string }) {
    const dispatch = useAppDispatch();
    const notify = () =>
        dispatch(
            uiActions.pushToast({
                message: `${productName} — this feature is coming soon`,
                variant: "info",
            }),
        );

    return (
        <div className="grid grid-cols-2 gap-3">
            <Button onClick={notify}>Buy now</Button>
            <Button variant="secondary" onClick={notify}>
                Add to bag
            </Button>
        </div>
    );
}