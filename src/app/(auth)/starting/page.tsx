import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell";
import { StartingHero, StartingActions } from "@/components/pages/auth/starting";

export const metadata: Metadata = {
    title: "Welcome — Etan",
    description: "Log in or sign up to Etan.",
};

export default function StartingPage() {
    return (
        <AuthShell heroSrc="/images/auth/hero-starting.jpg" heroAlt="Etan hero">
            <StartingHero />
            <StartingActions />
        </AuthShell>
    );
}