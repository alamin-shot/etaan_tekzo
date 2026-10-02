"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form } from "@/components/shared/form/form";
import { TextField } from "@/components/shared/form/text-field";
import { PasswordField } from "@/components/shared/form/password-field";
import { Button } from "@/components/ui/button";
import { signupSchema, type SignupSchema } from "@/validations/signup";
import { signup } from "@/services/auth";
import { ROUTES } from "@/config/routes";
import { AUTH_STEPS } from "@/constants/auth-steps";
import { StepCounter } from "@/components/features/auth/step-counter";
import { SignupResponse } from "@/types/auth";
import { post } from "@/lib/http/api";
import { ApiError } from "next/dist/server/api-utils";

export function SignupForm() {
    const router = useRouter();
    const form = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema),
        defaultValues: { name: "", surname: "", email: "", password: "", confirmPassword: "" },
    });

    const onSubmit = async (values: SignupSchema) => {
        const res = await post<{ email: string } | ApiError>("/signup", values);
        if (!res.ok) {
            form.setError("email", { message: res.message });
            return;
        }
        router.push(`${ROUTES.signupVerify}?email=${encodeURIComponent(values.email)}`);
    };

    return (
        <Form form={form} onSubmit={onSubmit} className="max-w-md w-full">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide">Sign up</h1>
                <Link href={ROUTES.login} className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white">
                    Already have an account? Log in
                </Link>
            </div>
            <div className="space-y-5">
                <TextField<SignupSchema> name="name" label="Name" placeholder="Enter your name" />
                <TextField<SignupSchema> name="surname" label="Surname" placeholder="Enter your surname" />
                <TextField<SignupSchema> name="email" label="E-mail" type="email" autoComplete="email" placeholder="Enter your email" />
                <PasswordField<SignupSchema> name="password" label="Password" placeholder="Create a password" autoComplete="new-password" />
                <PasswordField<SignupSchema> name="confirmPassword" label="Confirm password" placeholder="Re-enter your password" autoComplete="new-password" />
            </div>
            <div className="mt-8">
                <Button type="submit" loading={form.formState.isSubmitting}>Continue</Button>
            </div>
            <StepCounter current={AUTH_STEPS.SIGNUP_DETAILS.current} total={AUTH_STEPS.SIGNUP_DETAILS.total} />
        </Form>
    );
}