import { configureStore } from "@reduxjs/toolkit";
import customization from "./slices/customizationSlice";

const store = configureStore({
    reducer : {
        customization : customization
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>