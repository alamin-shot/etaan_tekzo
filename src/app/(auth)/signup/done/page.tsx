import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { DoneLeft } from "@/components/pages/auth/signup-done";

export const metadata: Metadata = { title: "Account created — Etan" };

export default function SignupDonePage() {
    return (
        <AuthShell heroSrc="/images/auth/hero-done.jpg" heroAlt="Etan hero">
            <DoneLeft />
        </AuthShell>
    );
}