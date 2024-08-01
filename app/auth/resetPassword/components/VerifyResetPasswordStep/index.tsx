import { VerifiedOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import VerifyResetPasswordForm from "./VerifyResetPasswordForm";

const VerifyResetPasswordStep = ({email} : {email : string}) => {
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        <VerifiedOutlined /> Enter Verification Code
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
        Please enter the verification code that was sent to{" "}
        <span className="email">{email}</span> to proceed with resetting your
        password.
      </Typography>
      <VerifyResetPasswordForm email={email} />
    </Box>
  );
};

export default VerifyResetPasswordStep;
