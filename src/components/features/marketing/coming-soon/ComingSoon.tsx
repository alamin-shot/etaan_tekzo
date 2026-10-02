import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function ComingSoon({ title }: { title: string }) {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-white/50">
                Coming soon
            </p>
            <h1 className="text-3xl font-semibold uppercase tracking-wide md:text-5xl">
                {title}
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/60">
                We are preparing something special here. In the meantime, explore our seasons collection.
            </p>
            <div className="mt-8 w-full max-w-xs">
                <Link href={ROUTES.home}>
                    <Button>Back to shop</Button>
                </Link>
            </div>
        </section>
    );
}