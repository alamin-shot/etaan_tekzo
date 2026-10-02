import { ComingSoon } from "@/components/features/marketing/coming-soon/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shop By Occasion — Etan" };

export default function Page() {
  return <ComingSoon title="Shop By Occasion" />;
}