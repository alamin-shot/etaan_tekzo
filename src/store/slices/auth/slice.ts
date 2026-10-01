import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthSliceState } from "@/types/store";
import type { AuthUser } from "@/types/auth";

const initialState: AuthSliceState = {
    user: null,
    status: "idle",
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading(state) {
            state.status = "loading";
            state.error = null;
        },
        setUser(state, action: PayloadAction<AuthUser>) {
            state.user = action.payload;
            state.status = "authenticated";
            state.error = null;
        },
        setError(state, action: PayloadAction<string>) {
            state.status = "error";
            state.error = action.payload;
        },
        clear(state) {
            state.user = null;
            state.status = "idle";
            state.error = null;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;