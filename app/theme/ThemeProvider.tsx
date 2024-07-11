"use client"
import { ThemeProvider as BaseThemeProvider } from "@mui/material";
import {ReactNode } from "react";
import theme from "./theme";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const ThemeProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
    const customization = useSelector((state : RootState) => state.customization)
    return <BaseThemeProvider theme={theme(customization)}>
        {children}
    </BaseThemeProvider>
};

export default ThemeProvider;