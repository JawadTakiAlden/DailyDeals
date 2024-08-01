"use client";
import { LockOpenOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmailToResetStep from "./components/EmailToResetStep";
import VerifyResetPasswordStep from "./components/VerifyResetPasswordStep";
import ResetPasswordStep from "./components/ResetPasswordStep/ResetPasswordStep";
import GoBackFloatButton from "@/app/components/GoBackFloatButton/GoBackFloatButton";

interface Props {
  searchParams: {
    task: string;
    email: string;
  };
}

const ResetForgotenPassword = ({ searchParams: { task, email } }: Props) => {
  const page = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexWrap: "wrap",
      }}
    >
      <GoBackFloatButton />
      <Box
        sx={{
          width: { xs: "98%", sm: "60%", md: "40%" },
          p: 2,
          borderRadius: "12px",
          mx: "auto",
        }}
      >
        {!task ? (
          <EmailToResetStep />
        ) : task === "verify" ? (
          <VerifyResetPasswordStep email={email} />
        ) : (
          <ResetPasswordStep email={email} />
        )}
      </Box>
    </Box>
  );

  return page;
};

export default ResetForgotenPassword;
