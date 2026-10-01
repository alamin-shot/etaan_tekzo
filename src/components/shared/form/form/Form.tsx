"use client";

import { FormProvider, type FieldValues, type UseFormReturn } from "react-hook-form";

export function Form<T extends FieldValues>({
    form,
    onSubmit,
    children,
    className,
}: {
    form: UseFormReturn<T>;
    onSubmit: (values: T) => void | Promise<void>;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={className} noValidate>
                {children}
            </form>
        </FormProvider>
    );
}