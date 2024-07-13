import { configureStore } from "@reduxjs/toolkit";
import customization from "./slices/customizationSlice";
import chat from "./slices/chatSlice";

const store = configureStore({
    reducer : {
        customization : customization,
        chat : chat
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>