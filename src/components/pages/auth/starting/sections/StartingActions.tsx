import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function StartingActions() {
    return (
        <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
            <Link href={ROUTES.login}>
                <Button variant="primary">Log in</Button>
            </Link>
            <Link href={ROUTES.signup}>
                <Button variant="ghost">Sign up</Button>
            </Link>
        </div>
    );
}