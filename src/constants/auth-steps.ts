export const AUTH_STEPS = {
    SIGNUP_DETAILS: { current: 0, total: 2 },
    SIGNUP_VERIFY: { current: 1, total: 2 },
    RESET_PASSWORD: { current: 2, total: 2 },
} as const;