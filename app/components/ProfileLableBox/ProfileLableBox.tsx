"use client";
import { Box, alpha, styled } from "@mui/material";

export default styled(Box)(({ theme }) => ({
  p: 0,
  m: 0,
  position: "relative",
  overflow: "hidden",
  "&:hover .camera": {
    display: "block",
  },
  "&:hover::after": {
    opacity: 1,
    backdropFilter: "blur(5px)",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    width: "120px",
    height: "120px",
    left: 0,
    top: 0,
    borderRadius: "10%",
    opacity: 0,
    transition: "0.2s",
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    zIndex: "8",
  },
}));
