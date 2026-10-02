import type { Metadata } from "next";
import { ComingSoon } from "@/components/features/marketing/coming-soon/ComingSoon";

export const metadata: Metadata = { title: "Outfit For You — Etan" };

export default function Page() {
    return <ComingSoon title="Outfit For You" />;
}