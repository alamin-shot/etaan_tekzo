"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form } from "@/components/shared/form/form";
import { Button } from "@/components/ui/button";

import { otpSchema, type OtpSchema } from "@/validations/otp";
import { verifyEmail } from "@/services/auth";
import { ROUTES } from "@/config/routes";
import { AUTH_STEPS } from "@/constants/auth-steps";
import { OtpField } from "@/components/shared/form/otp-field";
import { StepCounter } from "@/components/features/auth/step-counter";

export function VerifyForm({ email }: { email: string }) {
    const router = useRouter();
    const form = useForm<OtpSchema>({
        resolver: zodResolver(otpSchema),
        defaultValues: { email, code: "" },
    });

    const submit = async (values: OtpSchema) => {
        const res = await verifyEmail(values);
        if (!res.ok) {
            form.setError("code", { message: res.message });
            return;
        }
        router.push(ROUTES.signupDone);
    };

    return (
        <Form form={form} onSubmit={submit} className="max-w-md w-full">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-3">
                Confirm your e-mail
            </h1>
            <p className="text-sm text-white/70 mb-8">
                Enter the 4-digit code we sent to your email.
            </p>
            <OtpField<OtpSchema> name="code" />
            <div className="mt-8">
                <Button type="submit" variant="secondary" loading={form.formState.isSubmitting}>
                    Confirm e-mail
                </Button>
            </div>
            <StepCounter current={AUTH_STEPS.SIGNUP_VERIFY.current} total={AUTH_STEPS.SIGNUP_VERIFY.total} />
        </Form>
    );
}