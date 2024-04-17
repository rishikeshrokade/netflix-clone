import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices";

const appStore = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

export default appStore

export type RootStore = ReturnType<typeof appStore.getState>;
