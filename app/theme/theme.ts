"use client";
import { alpha, createTheme } from "@mui/material/styles";
import variables from "../variables.module.scss";
import { Poppins } from "next/font/google";
import customizationObject from "../types/CustomizationObject";
import CustiomizationState from "../interfaces/CustiomizationStateState";

const poppins = Poppins({
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function AppTheme({
  palette: { primary, secondary, background, backgroundDark, success, error },
  mode,
}: CustiomizationState) {
  const theme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === "dark" ? backgroundDark : background,
      },
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      success: {
        main: success,
      },
      error: {
        main: error,
      },
    },
    typography: {
      fontFamily: poppins.style.fontFamily,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            color: "inherit",
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          autoComplete: "off",
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'dark' ? 'transparent' : background,
            backdropFilter: "blur(10px)",
          },
        },
      },
      MuiDialogTitle : {
        styleOverrides : {
          root : {
            color : primary
          }
        }
      }
    },
  });

  return theme;
}
