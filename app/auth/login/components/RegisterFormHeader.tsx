import { Typography } from "@mui/material";
import React from "react";

const RegisterFormHeader = () => {
  return (
    <>
      <Typography
        sx={{
          mb: 1,
          color: "primary.dark",
          fontSize: "16px",
        }}
      >
        Discover Your Next Great Find!
      </Typography>
      <Typography
        sx={{
          mb: 2,
          lineHeight: "1.6",
          color: "grey",
        }}
      >
        Join us and access exclusive deals, curated collections, and a seamless
        shopping experience. Your journey to finding the best products starts
        now!
      </Typography>
    </>
  );
};

export default RegisterFormHeader;
