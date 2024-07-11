"use client"
import { Box, alpha } from "@mui/material";
import React, { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        height: "70px",
        px: { xs: 1, sm: 2, md: 3, lg: 5 },
        boxShadow: (theme) => `0 0 10px 5px ${alpha(theme.palette.primary.main , 0.2)} , 0 0 30px 15px ${alpha(theme.palette.secondary.main , 0.2)}`,
      }}
    >
      {children}
    </Box>
  );
};

export default Header;
