import Link from "next/link";
import { ROUTES } from "@/config/routes";

export function Breadcrumb({ productName }: { productName: string }) {
    return (
        <nav className="mb-6 text-[11px] uppercase tracking-widest text-white/60">
            <Link href={ROUTES.home} className="hover:text-white">
                Shop Seasons
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{productName}</span>
        </nav>
    );
}