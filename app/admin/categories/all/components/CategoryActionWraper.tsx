"use client";
import { alpha, Box } from "@mui/material";
import React, { ReactNode } from "react";

const CategoryActionWraper = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.1),
        py: 1,
        px: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
        {children}
    </Box>
  );
};

export default CategoryActionWraper;
