import type { ApiResult } from "./api";

export type AuthUser = {
    id: string;
    name: string;
    surname: string;
    email: string;
};

export type LoginInput = { email: string; password: string };
export type SignupInput = {
    name: string;
    surname: string;
    email: string;
    password: string;
};
export type ForgotPasswordInput = { email: string };
export type ResetPasswordInput = { token: string; password: string };
export type VerifyEmailInput = { email: string; code: string };

export type AuthSession = { user: AuthUser };

export type LoginResponse = ApiResult<AuthSession>;
export type SignupResponse = ApiResult<{ email: string }>;
export type VerifyResponse = ApiResult<AuthSession>;
export type ForgotPasswordResponse = ApiResult<{ email: string }>;
export type ResetPasswordResponse = ApiResult<{ email: string }>;
export type RefreshResponse = ApiResult<AuthSession>;
export type LogoutResponse = ApiResult<null>;