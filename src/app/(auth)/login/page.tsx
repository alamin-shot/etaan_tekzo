import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { LoginForm } from "@/components/pages/auth/login";

export const metadata: Metadata = {
    title: "Log in — Etan",
    description: "Log in to your Etan account.",
};

export default function LoginPage() {
    return (
        <AuthShell heroSrc="/images/auth/hero-login.jpg" heroAlt="Etan hero">
            <LoginForm />
        </AuthShell>
    );
}