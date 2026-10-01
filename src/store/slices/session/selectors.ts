import type { RootState } from "@/types/store";

export const selectSessionStatus = (s: RootState) => s.session.status;
export const selectIsRefreshing = (s: RootState) => s.session.status === "refreshing";