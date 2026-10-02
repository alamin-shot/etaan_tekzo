import { ComingSoon } from "@/components/features/marketing/coming-soon/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shop Product — Etan" };

export default function Page() {
    return <ComingSoon title="Shop Product" />;
}