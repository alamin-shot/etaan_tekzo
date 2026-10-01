import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function DoneLeft() {
    return (
        <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-4">
                Your account has been created!
            </h1>
            <p className="text-sm text-white/70 mb-8">
                You can now log in with your email and password.
            </p>
            <Link href={ROUTES.login} className="block max-w-xs">
                <Button variant="secondary">Log in</Button>
            </Link>
        </div>
    );
}