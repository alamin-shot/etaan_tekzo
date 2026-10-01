import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SessionSliceState, SessionStatus } from "@/types/store";

const initialState: SessionSliceState = { status: "anonymous" };

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<SessionStatus>) {
            state.status = action.payload;
        },
    },
});

export const sessionActions = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;