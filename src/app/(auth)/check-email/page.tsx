import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { CheckEmailLeft } from "@/components/pages/auth/check-email/sections";
import type { Metadata } from "next";


export const metadata: Metadata = { title: "Check your email — Etan" };

export default async function CheckEmailPage({
    searchParams,
}: {
    searchParams: Promise<{ email?: string }>;
}) {
    const { email = "" } = await searchParams;
    return (
        <AuthShell heroSrc="/image/authImg3.png" heroAlt="Etan hero">
            <CheckEmailLeft email={email} />
        </AuthShell>
    );
}