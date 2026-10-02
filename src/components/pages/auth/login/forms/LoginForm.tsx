"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form } from "@/components/shared/form/form";
import { TextField } from "@/components/shared/form/text-field";
import { PasswordField } from "@/components/shared/form/password-field";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginSchema } from "@/validations/login";
import { post } from "@/lib/http/api";
import { ROUTES } from "@/config/routes";
import type { AuthSession, LoginResponse } from "@/types/auth";

export function LoginForm() {
    const router = useRouter();
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = async (values: LoginSchema) => {
        const res = await post<AuthSession>("/login", values);
        if (!res.ok) {
            form.setError("email", { message: res.message });
            return;
        }
        router.push("/");
    };

    return (
        <Form form={form} onSubmit={onSubmit} className="max-w-sm w-full">
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-8">Log in</h1>
            <div className="space-y-5">
                <TextField<LoginSchema> name="email" label="E-mail" type="email" autoComplete="email" placeholder="Enter your email" />
                <PasswordField<LoginSchema> name="password" label="Password" placeholder="Enter your password" />
            </div>
            <div className="mt-3 text-right">
                <Link href={ROUTES.forgotPassword} className="text-[11px] uppercase tracking-widest text-white/70 hover:text-white">
                    Forgot password?
                </Link>
            </div>
            <div className="mt-8">
                <Button type="submit" loading={form.formState.isSubmitting}>Login</Button>
            </div>
        </Form>
    );
}