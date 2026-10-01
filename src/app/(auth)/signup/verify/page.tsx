import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { VerifyForm } from "@/components/pages/auth/signup-verify";

export const metadata: Metadata = { title: "Confirm your e-mail — Etan" };

export default async function VerifyPage({
    searchParams,
}: {
    searchParams: Promise<{ email?: string }>;
}) {
    const { email = "" } = await searchParams;
    return (
        <AuthShell heroSrc="/images/auth/hero-verify.jpg" heroAlt="Etan hero">
            <VerifyForm email={email} />
        </AuthShell>
    );
}