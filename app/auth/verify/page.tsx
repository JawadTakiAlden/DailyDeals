import { VerifiedUser } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import OTPVerify from "./components/OTPVerify";

interface Props {
  searchParams: {
    email: string;
  };
}

const VerifyAccountPage = ({ searchParams: { email } }: Props) => {
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
        <OTPVerify />
      </Box>
    </Box>
  );
};

export default VerifyAccountPage;
