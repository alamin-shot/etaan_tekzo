import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { ResetDoneLeft } from "@/components/pages/auth/reset-done/sections";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Password reset — Etan" };

export default function ResetSuccessPage() {
    return (
        <AuthShell heroSrc="/images/auth/hero-forgot.jpg" heroAlt="Etan hero">
            <ResetDoneLeft />
        </AuthShell>
    );
}