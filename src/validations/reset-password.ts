import { z } from "zod";

export const resetPasswordBase = z.object({
    token: z.string().min(1),
    password: z.string().min(8, "At least 8 characters"),
    confirmPassword: z.string().min(8, "At least 8 characters"),
});

export const resetPasswordFormBase = resetPasswordBase
    .omit({ token: true })
    .refine((v) => v.password === v.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type ResetPasswordForm = z.infer<typeof resetPasswordFormBase>;

export const resetPasswordSchema = resetPasswordBase.refine(
    (v) => v.password === v.confirmPassword,
    { message: "Passwords do not match", path: ["confirmPassword"] },
);

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;