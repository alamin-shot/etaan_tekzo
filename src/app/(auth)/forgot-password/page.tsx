import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { ForgotForm } from "@/components/pages/auth/forgot-password/forms";
import type { Metadata } from "next";


export const metadata: Metadata = { title: "Forgot password — Etan" };

export default function ForgotPasswordPage() {
    return (
        <AuthShell heroSrc="/images/auth/hero-forgot.jpg" heroAlt="Etan hero">
            <ForgotForm />
        </AuthShell>
    );
}