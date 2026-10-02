import type { Metadata } from "next";
import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { StartingHero } from "@/components/pages/auth/starting/sections/StartingHero";
import { StartingActions } from "@/components/pages/auth/starting/sections/StartingActions";


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