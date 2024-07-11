import { Box, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <RegisterForm />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { xs: "100%", md: "50%" },
          p: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "primary.main",
            transform: "skew(-7deg)",
            borderRadius: "20px 0px 5px 10px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Register;
