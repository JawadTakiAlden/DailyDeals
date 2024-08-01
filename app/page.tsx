import { Box, Button } from "@mui/material";
import React from "react";
import Header from "./landingPage/Header";
import Hero from "./landingPage/Hero";
import About from "./landingPage/About";

const LandingPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        // height: "300vh",
      }}
    >
      <Header />
      <Box
        sx={{
          backgroundColor: "common.black",
        }}
      >
        <Hero />
        <About />
      </Box>
      <Box>cateogirs</Box>
    </Box>
  );
};

export default LandingPage;
