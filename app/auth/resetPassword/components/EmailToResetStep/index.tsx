import { LockResetOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import EmailToResetForm from "../EmailToResetForm";

const EmailToResetStep = () => {
  return (
    <>
      <Typography variant="h5" mb={2}>
        <LockResetOutlined /> Forgot Your Password? Lets Get You Back In!
      </Typography>
      <Typography
        sx={{
          lineHeight: "1.6",
          mb: 2,
        }}
      >
        Forgot your password? Dont worry it happens to the best of us. Just
        provide your registered email address or username, and we will send you
        a code to reset your password. This quick and easy process ensures that
        you can regain access to your account without any hassle. Your security
        is our top priority, so rest assured that your information will remain
        safe and secure throughout the process. If you encounter any issues or
        need assistance, our support team is here to help!
      </Typography>
      <EmailToResetForm />
    </>
  );
};

export default EmailToResetStep;
