import type { Metadata } from "next";
import { ComingSoon } from "@/components/features/marketing/coming-soon/ComingSoon";

export const metadata: Metadata = { title: "Style Profile — Etan" };

export default function Page() {
    return <ComingSoon title="Style Profile" />;
}