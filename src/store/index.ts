import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { sessionReducer } from "./slices/session";
import { uiReducer } from "./slices/ui";
import { wishlistReducer } from "./slices/wishlist";

export function makeStore() {
    return configureStore({
        reducer: {
            auth: authReducer,
            session: sessionReducer,
            ui: uiReducer,
            wishlist: wishlistReducer,
        },
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];