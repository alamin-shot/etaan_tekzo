import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { CheckEmailLeft } from "@/components/pages/auth/check-email";

export const metadata: Metadata = { title: "Check your email — Etan" };

export default async function CheckEmailPage({
    searchParams,
}: {
    searchParams: Promise<{ email?: string }>;
}) {
    const { email = "" } = await searchParams;
    return (
        <AuthShell heroSrc="/images/auth/hero-forgot.jpg" heroAlt="Etan hero">
            <CheckEmailLeft email={email} />
        </AuthShell>
    );
}