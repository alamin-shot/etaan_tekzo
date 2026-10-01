"use client";

import { useState } from "react";
import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordField<T extends FieldValues>({
    name,
    label,
    placeholder,
    autoComplete = "current-password",
}: {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    autoComplete?: string;
}) {
    const { register, formState } = useFormContext<T>();
    const [visible, setVisible] = useState(false);
    const error = formState.errors[name];

    return (
        <div>
            {label ? <Label htmlFor={name}>{label}</Label> : null}
            <div className="relative">
                <Input
                    id={name}
                    type={visible ? "text" : "password"}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    invalid={!!error}
                    {...register(name)}
                />
                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    aria-label={visible ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-white/60 hover:text-white"
                >
                    {visible ? "Hide" : "Show"}
                </button>
            </div>
            {error ? (
                <p className="mt-1 text-xs text-red-400">{String(error.message)}</p>
            ) : null}
        </div>
    );
}