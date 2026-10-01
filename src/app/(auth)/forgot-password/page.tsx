import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { ForgotForm } from "@/components/pages/auth/forgot-password";

export const metadata: Metadata = { title: "Forgot password — Etan" };

export default function ForgotPasswordPage() {
    return (
        <AuthShell heroSrc="/images/auth/hero-forgot.jpg" heroAlt="Etan hero">
            <ForgotForm />
        </AuthShell>
    );
}