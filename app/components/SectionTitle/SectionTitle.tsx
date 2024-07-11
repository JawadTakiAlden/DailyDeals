"use client"
import { Typography, styled } from "@mui/material"

export default styled(Typography)(({theme}) => ({
    fontSize: "22px",
    fontWeight: "600",
    textTransform: "capitalize",
    transition: "0.2s",
    mb: 2,
    "&::first-letter": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      pl: 2,
    },
}))