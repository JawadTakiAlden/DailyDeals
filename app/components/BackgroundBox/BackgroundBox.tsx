"use client";
import { Box, alpha, styled } from "@mui/material";

export default styled(Box)<{backgroundURL : string}>(({ theme , backgroundURL }) => ({
  height: "300px",
  width: "100%",
  mx: "auto",
  borderRadius: "22px",
  backdropFilter: "blur(10px)",
  backgroundImage: `linear-gradient(to right , ${alpha(
    theme.palette.primary.dark,
    0.5
  )} , ${alpha(theme.palette.primary.light, 0.5)}) , url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
