import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { VerifyForm } from "@/components/pages/auth/signup-verify/forms/VerifyForm";
import type { Metadata } from "next";


export const metadata: Metadata = { title: "Confirm your e-mail — Etan" };

export default async function VerifyPage({
    searchParams,
}: {
    searchParams: Promise<{ email?: string }>;
}) {
    const { email = "" } = await searchParams;
    return (
        <AuthShell heroSrc="/image/authImg3.png" heroAlt="Etan hero">
            <VerifyForm email={email} />
        </AuthShell>
    );
}