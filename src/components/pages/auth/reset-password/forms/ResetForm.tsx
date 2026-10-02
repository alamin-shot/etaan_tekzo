"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form } from "@/components/shared/form/form";
import { PasswordField } from "@/components/shared/form/password-field";
import { Button } from "@/components/ui/button";
import { StepCounter } from "@/components/features/auth/step-counter";
import {
    resetPasswordFormBase,
    type ResetPasswordForm,
} from "@/validations/reset-password";
import { resetPassword } from "@/services/auth";
import { ROUTES } from "@/config/routes";
import { AUTH_STEPS } from "@/constants/auth-steps";

type FormShape = ResetPasswordForm;

export function ResetForm({ token }: { token: string }) {
    const router = useRouter();
    const form = useForm<FormShape>({
        resolver: zodResolver(resetPasswordFormBase),
        defaultValues: { password: "", confirmPassword: "" },
    });

    const onSubmit = async (values: FormShape) => {
        const res = await resetPassword({ token, password: values.password });
        if (!res.ok) {
            form.setError("password", { message: res.message });
            return;
        }
        router.push(ROUTES.resetPasswordSuccess);
    };

    return (
        <Form form={form} onSubmit={onSubmit} className="max-w-sm w-full">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-3">
                Set new password
            </h1>
            <p className="text-sm text-white/70 mb-8">
                Create a new password for your account.
            </p>
            <div className="space-y-5">
                <PasswordField<FormShape>
                    name="password"
                    label="Password"
                    placeholder="Enter new password"
                    autoComplete="new-password"
                />
                <PasswordField<FormShape>
                    name="confirmPassword"
                    label="Confirm password"
                    placeholder="Re-enter new password"
                    autoComplete="new-password"
                />
            </div>
            <div className="mt-8">
                <Button type="submit" loading={form.formState.isSubmitting}>
                    Continue
                </Button>
            </div>
            <StepCounter
                current={AUTH_STEPS.RESET_PASSWORD.current}
                total={AUTH_STEPS.RESET_PASSWORD.total}
            />
        </Form>
    );
}