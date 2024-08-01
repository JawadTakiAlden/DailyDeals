"use client"
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const OTPVerify = () => {
  const [otp, setOtp] = useState<string>("");

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  return (
    <>
      <MuiOtpInput
        sx={{ mb: 2 }}
        value={otp}
        onChange={handleChange}
        color={"secondary.main"}
        length={4}
        autoFocus
      />
      <LoadingButton
        fullWidth
        color="primary"
        loadingPosition="start"
        variant="contained"
        sx={{
          mb: 2,
        }}
      >
        Verifiy Now
      </LoadingButton>
      <Typography variant="body2">
        Did not receive a code? Check your spam or junk folder.
      </Typography>
      <LoadingButton sx={{ mt: 1 }} variant="outlined">
        or request a new one
      </LoadingButton>
    </>
  );
};

export default OTPVerify;
