import Link from "next/link";
import { CheckEmailResend } from "@/components/features/auth/check-email-resend";
import { ROUTES } from "@/config/routes";

export function CheckEmailLeft({ email }: { email: string }) {
    return (
        <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-4">
                Check your email!
            </h1>
            <p className="text-sm text-white/70">
                We sent a confirmation link to <span className="text-white">{email}</span>.
            </p>
            <CheckEmailResend email={email} />
            <div className="mt-10 flex items-center justify-between">
                <Link href={ROUTES.forgotPassword} className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white">
                    ← Back
                </Link>
                <span className="text-[11px] uppercase tracking-widest text-white/60">Steps 1/2 completed</span>
            </div>
        </div>
    );
}