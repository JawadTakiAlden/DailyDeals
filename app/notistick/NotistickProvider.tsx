"use client";
import React, { ReactNode } from "react";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import { alpha, styled } from "@mui/material";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    "&.notistack-MuiContent-info": {
      backgroundColor: alpha(theme.palette.info.dark, 0.4),
      backdropFilter: "blur(10px)",
      color : theme.palette.info.contrastText
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: alpha(theme.palette.error.dark, 0.4),
      backdropFilter: "blur(10px)",
      color : theme.palette.error.contrastText
    },
    "&.notistack-MuiContent-success": {
      backgroundColor: alpha(theme.palette.success.dark, 0.4),
      backdropFilter: "blur(10px)",
      color : theme.palette.success.contrastText
    },
    "&.notistack-MuiContent-warning": {
      backgroundColor: alpha(theme.palette.warning.dark, 0.4),
      backdropFilter: "blur(10px)",
      color : theme.palette.warning.contrastText
    },
  })
);

const NotistickProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <SnackbarProvider
      iconVariant={{
        success: "✅ ",
        error: "✖️ ",
        warning: "⚠️ ",
        info: "✅ ",
      }}
      Components={{
        default: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        success: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
      // autoHideDuration={3000}
      TransitionProps={{
        direction: "down",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
};

export default NotistickProvider;
