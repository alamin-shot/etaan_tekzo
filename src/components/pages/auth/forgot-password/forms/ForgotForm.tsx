"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form } from "@/components/shared/form/form";
import { TextField } from "@/components/shared/form/text-field";
import { Button } from "@/components/ui/button";
import { forgotPasswordSchema, type ForgotPasswordSchema } from "@/validations/forgot-password";
import { forgotPassword } from "@/services/auth";
import { ROUTES } from "@/config/routes";
import { ForgotPasswordResponse } from "@/types/auth";
import { post } from "@/lib/http/api";
import { ApiError } from "next/dist/server/api-utils";

export function ForgotForm() {
    const router = useRouter();
    const form = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { email: "" },
    });

    const onSubmit = async (values: ForgotPasswordSchema) => {
        await post<{ email: string } | ApiError>("/forgot-password", values);
        router.push(`${ROUTES.checkEmail}?email=${encodeURIComponent(values.email)}`);
    };

    return (
        <Form form={form} onSubmit={onSubmit} className="max-w-sm w-full">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-3">
                Forgot password?
            </h1>
            <p className="text-sm text-white/70 mb-8">
                Enter your email and we will send you a reset link.
            </p>
            <TextField<ForgotPasswordSchema> name="email" label="E-mail" type="email" placeholder="Enter your email" />
            <div className="mt-8">
                <Button type="submit" loading={form.formState.isSubmitting}>Reset password</Button>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <Link href={ROUTES.login} className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white">
                    ← Back
                </Link>
                <span className="text-[11px] uppercase tracking-widest text-white/60">Steps 0/2 completed</span>
            </div>
        </Form>
    );
}