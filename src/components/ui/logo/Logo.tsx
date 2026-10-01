import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

export function Logo({ href = ROUTES.starting }: { href?: string }) {
    return (
        <Link href={href} aria-label="Etan home" className="inline-flex items-center">
            <Image src="/images/logo.png" alt="Etan" width={72} height={32} priority />
        </Link>
    );
}