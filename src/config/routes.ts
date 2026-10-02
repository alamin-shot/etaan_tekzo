export const ROUTES = {
    // auth
    starting: "/starting",
    login: "/login",
    signup: "/signup",
    signupVerify: "/signup/verify",
    signupDone: "/signup/done",
    forgotPassword: "/forgot-password",
    checkEmail: "/check-email",
    resetPassword: (token: string) => `/reset-password/${token}`,
    resetPasswordSuccess: "/reset-password/success",

    // public
    home: "/",
    shopProduct: "/shop-product",
    shopByOccasion: "/shop-by-occasion",
    outfitForYou: "/outfit-for-you",
    styleProfile: "/style-profile",
    howItWorks: "/how-it-works",
} as const;