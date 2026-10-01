import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function StartingActions() {
    return (
        <div className="mt-10 flex flex-col gap-3 max-w-sm">
            <Link href={ROUTES.login} className="block">
                <Button variant="primary">Log in</Button>
            </Link>
            <Link href={ROUTES.signup} className="block">
                <Button variant="ghost">Sign up</Button>
            </Link>
        </div>
    );
}