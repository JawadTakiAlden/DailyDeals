"use client";
import { VerifiedUser } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { LoadingButton } from "@mui/lab";

interface Props {
  searchParams: {
    email: string;
  };
}

const VerifyAccountPage = ({ searchParams: { email } }: Props) => {
  const [otp, setOtp] = useState<string>("");

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: { xs: "98%", sm: "60%", md: "40%" },
          p: 2,
          borderRadius: "12px",
          mx: "auto",
        }}
      >
        <Typography variant="h5" mb={2}>
          <VerifiedUser /> Verify Your Account
        </Typography>
        <Typography
          sx={{
            lineHeight: "1.6",
            mb: 2,
            "& .email": {
              color: "primary.main",
            },
          }}
        >
          To enhance the security of your account, we have sent a verification
          code to <span className="email">{email}</span> Please enter the code
          below to complete the verification process. This step helps us ensure
          that your account remains secure and confirms your identity. If you
          did not receive the email, please check your spam folder or request a
          new code.
        </Typography>
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
        <Button sx={{ mt: 1 }} variant="outlined">
          or request a new one
        </Button>
      </Box>
    </Box>
  );
};

export default VerifyAccountPage;
