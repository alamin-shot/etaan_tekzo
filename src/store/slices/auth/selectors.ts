import type { RootState } from "@/types/store";

export const selectAuthUser = (s: RootState) => s.auth.user;
export const selectAuthStatus = (s: RootState) => s.auth.status;
export const selectAuthError = (s: RootState) => s.auth.error;