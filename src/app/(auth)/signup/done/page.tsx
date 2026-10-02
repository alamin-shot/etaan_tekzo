import { AuthShell } from "@/components/layout/auth-shell/AuthShell";
import { DoneLeft } from "@/components/pages/auth/signup-done/sections/DoneLeft";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Account created — Etan" };

export default function SignupDonePage() {
    return (
        <AuthShell heroSrc="/image/authImg2.png" heroAlt="Etan hero">
            <DoneLeft />
        </AuthShell>
    );
}