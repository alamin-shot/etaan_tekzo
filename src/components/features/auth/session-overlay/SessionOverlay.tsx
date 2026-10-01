"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/shared/loader";
import { useAppSelector } from "@/hooks/use-app-selector";
import { selectIsRefreshing } from "@/store/slices/session";

export function SessionOverlay() {
    const refreshing = useAppSelector(selectIsRefreshing);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!refreshing) {
            setVisible(false);
            return;
        }
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
    }, [refreshing]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <Loader variant="section" />
        </div>
    );
}