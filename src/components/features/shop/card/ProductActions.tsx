"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ProductActions({ name, href }: { name: string; href: string }) {
    const router = useRouter();
    const go = () => router.push(href);

    return (
        <div className="grid grid-cols-2 gap-2">
            <Button size="md" onClick={go} aria-label={`Buy ${name} now`}>
                Buy now
            </Button>
            <Button size="md" variant="secondary" onClick={go} aria-label={`Add ${name} to bag`}>
                Add to bag
            </Button>
        </div>
    );
}