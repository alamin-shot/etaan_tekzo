import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { SignupForm } from "@/components/pages/auth/signup/forms/SignupForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up — Etan",
    description: "Create your Etan account.",
};

export default function SignupPage() {
    return (
        <AuthShell heroSrc="/image/auth_etaan2.png" heroAlt="Etan hero">
            <SignupForm />
        </AuthShell>
    );
}