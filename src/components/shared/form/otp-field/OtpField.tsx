"use client";

import { Controller, useFormContext, type FieldValues, type Path } from "react-hook-form";
import { OtpInput } from "@/components/ui/otp-input";

export function OtpField<T extends FieldValues>({
    name,
    onComplete,
}: {
    name: Path<T>;
    onComplete?: (code: string) => void;
}) {
    const { control, formState } = useFormContext<T>();
    const error = formState.errors[name];

    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <OtpInput
                        value={typeof field.value === "string" ? field.value : ""}
                        onChange={field.onChange}
                        invalid={!!error}
                        autoFocus
                    />
                )}
            />
            {error ? (
                <p className="mt-2 text-xs text-red-400">{String(error.message)}</p>
            ) : null}
        </div>
    );
}