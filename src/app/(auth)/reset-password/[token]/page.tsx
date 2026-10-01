import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { ResetForm } from "@/components/pages/auth/reset-password";

export const metadata: Metadata = { title: "Set new password — Etan" };

export default async function ResetPasswordPage({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;
    return (
        <AuthShell heroSrc="/images/auth/hero-forgot.jpg" heroAlt="Etan hero">
            <ResetForm token={token} />
        </AuthShell>
    );
}