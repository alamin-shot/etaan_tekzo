export const ROUTES = {
    starting: "/starting",
    login: "/login",
    signup: "/signup",
    signupVerify: "/signup/verify",
    signupDone: "/signup/done",
    forgotPassword: "/forgot-password",
    checkEmail: "/check-email",
    resetPassword: (token: string) => `/reset-password/${token}`,
    resetPasswordSuccess: "/reset-password/success",
} as const;