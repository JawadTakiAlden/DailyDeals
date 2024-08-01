import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import theme from "./theme/theme";
import { CssBaseline, GlobalStyles } from "@mui/material";
import StoreProvider from "./store/StoreProvider";
import ThemeProvider from "./theme/ThemeProvider";
import { ReactNode } from "react";
import ReactQueryProvider from "./apiFetch/base/ReactQueryProvider";
import NotistickProvider from "./notistick/NotistickProvider";

export const metadata: Metadata = {
  title: "DailyDeals",
  description: "Offers in your hands easily",
};

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppRouterCacheProvider options={{ key: "dailydealscss" }}>
            <ThemeProvider>
              <CssBaseline />
              <GlobalStyles
                styles={{
                  // overflow: "hidden",
                }}
              />
              <ReactQueryProvider>
                <NotistickProvider> {children}</NotistickProvider>
              </ReactQueryProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
        {}
      </body>
    </html>
  );
}
