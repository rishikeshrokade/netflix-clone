import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../userSlices";
import { movieSlice } from "../movieSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice.reducer,
        movie: movieSlice.reducer
    }
})

export default appStore

export type RootStore = ReturnType<typeof appStore.getState>;
