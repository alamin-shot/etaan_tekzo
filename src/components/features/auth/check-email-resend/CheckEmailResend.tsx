"use client";

import { useState } from "react";

import { post } from "@/lib/http/api";

export function CheckEmailResend({ email }: { email: string }) {
    const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

    const resend = async () => {
        setState("sending");
        await post("/forgot-password", { email });
        setState("sent");
    };

    return (
        <button
            type="button"
            onClick={resend}
            disabled={state !== "idle"}
            className="mt-6 text-[11px] uppercase tracking-widest text-white/70 hover:text-white disabled:opacity-50"
        >
            {state === "sent" ? "Code sent" : state === "sending" ? "Sending…" : "Resend the confirm code"}
        </button>
    );
}