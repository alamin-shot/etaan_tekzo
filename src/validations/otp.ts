import { z } from "zod";

export const otpSchema = z.object({
    email: z.string().email(),
    code: z.string().regex(/^\d{4}$/, "Enter the 4-digit code"),
});

export type OtpSchema = z.infer<typeof otpSchema>;