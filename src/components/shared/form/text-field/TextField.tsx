"use client";

import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type TextFieldProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    autoComplete?: string;
};

export function TextField<T extends FieldValues>({
    name,
    label,
    type = "text",
    placeholder,
    autoComplete,
}: TextFieldProps<T>) {
    const { register, formState } = useFormContext<T>();
    const error = formState.errors[name];

    return (
        <div>
            {label ? <Label htmlFor={name}>{label}</Label> : null}
            <Input
                id={name}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                invalid={!!error}
                {...register(name)}
            />
            {error ? (
                <p className="mt-1 text-xs text-red-400">{String(error.message)}</p>
            ) : null}
        </div>
    );
}