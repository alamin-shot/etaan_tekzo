import { z } from "zod";

export const signupSchema = z
    .object({
        name: z.string().min(1, "Required"),
        surname: z.string().min(1, "Required"),
        email: z.string().email("Enter a valid email"),
        password: z.string().min(8, "At least 8 characters"),
        confirmPassword: z.string().min(8, "At least 8 characters"),
    })
    .refine((v) => v.password === v.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type SignupSchema = z.infer<typeof signupSchema>;