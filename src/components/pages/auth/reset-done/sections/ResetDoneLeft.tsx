import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function ResetDoneLeft() {
    return (
        <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-4">
                Password reset
            </h1>
            <p className="text-sm text-white/70 mb-8">
                Your password has been updated. You can now log in.
            </p>
            <Link href={ROUTES.login} className="block max-w-xs">
                <Button variant="secondary">Back to login</Button>
            </Link>
        </div>
    );
}