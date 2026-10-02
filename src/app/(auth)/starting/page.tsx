import type { Metadata } from "next";
import { AuthShellFullBleed } from "@/components/layout/auth-shell";
import { StartingHero } from "@/components/pages/auth/starting/sections/StartingHero";
import { StartingActions } from "@/components/pages/auth/starting/sections/StartingActions";


export const metadata: Metadata = {
    title: "Welcome — Etan",
    description: "Log in or sign up to Etan.",
};

export default function StartingPage() {
    return (
        <AuthShellFullBleed heroSrc="/image/authImg1.jpg" heroAlt="Etan">
            <StartingHero />
            <StartingActions />
        </AuthShellFullBleed>
    );
}