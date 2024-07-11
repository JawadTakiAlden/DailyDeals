"use client";
import { Box, alpha, styled } from "@mui/material";

const StatisticCardWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  border: `0.5px solid ${theme.palette.primary.dark}`,
  padding: '1.5rem',
  backdropFilter: "blur(10px)",
  backgroundColor: alpha("#fff", 0.05),
}));


export default StatisticCardWrapper;
