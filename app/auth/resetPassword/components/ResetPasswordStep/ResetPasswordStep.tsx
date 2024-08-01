import { LockOpenOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordStep = ({ email }: { email: string }) => {
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        <LockOpenOutlined /> Congratulations! You are Almost There.
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
        You are just a few steps away from accessing your account. Please set a
        new password below to complete the process.
      </Typography>
      <ResetPasswordForm email={email} />
      <Typography mt={2} variant="body2" color={"grey"}>
        Choose a strong password thats unique to this account. Include a mix of
        uppercase letters, lowercase letters, numbers, and symbols for added
        security.
      </Typography>
    </Box>
  );
};

export default ResetPasswordStep;
