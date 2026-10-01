import Link from "next/link";
import { ROUTES } from "@/config/routes";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="text-3xl font-semibold uppercase tracking-wide">Not found</h1>
            <p className="text-white/60">The page you are looking for does not exist.</p>
            <Link href={ROUTES.starting} className="text-[11px] uppercase tracking-widest text-brand hover:text-brand-hover">
                Go to start
            </Link>
        </main>
    );
}