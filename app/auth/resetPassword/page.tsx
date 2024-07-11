"use client";
import {
  LockOpenOutlined,
  LockResetOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  searchParams: {
    task: string;
    email: string;
  };
}

const ResetForgotenPassword = ({ searchParams: { task, email } }: Props) => {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  const goToVerifyReset = () => {
    router.push(
      `/auth/resetPassword?task=verify&email=jawad.taki.alden2002@gmail.com`
    );
  };

  const goToReset = () => {
    router.push(
      `/auth/resetPassword?task=reset&email=jawad.taki.alden2002@gmail.com`
    );
  };
  
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
      <Box
        sx={{
          width: { xs: "98%", sm: "60%", md: "40%" },
          p: 2,
          borderRadius: "12px",
          mx: "auto",
        }}
      >
        {!task ? (
          <>
            <Typography variant="h5" mb={2}>
              <LockResetOutlined /> Forgot Your Password? Let's Get You Back In!
            </Typography>
            <Typography
              sx={{
                lineHeight: "1.6",
                mb: 2,
              }}
            >
              Forgot your password? Don’t worry; it happens to the best of us.
              Just provide your registered email address or username, and we'll
              send you a code to reset your password. This quick and easy
              process ensures that you can regain access to your account without
              any hassle. Your security is our top priority, so rest assured
              that your information will remain safe and secure throughout the
              process. If you encounter any issues or need assistance, our
              support team is here to help!
            </Typography>
            <FormControl fullWidth color="primary" margin="normal">
              <InputLabel>Email</InputLabel>
              <OutlinedInput label="Email" />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={goToVerifyReset}
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
            </Box>
          </>
        ) : task === "verify" ? (
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
              <span className="email">{email}</span> to proceed with resetting
              your password.
            </Typography>
            <MuiOtpInput
              sx={{ mb: 2 }}
              value={otp}
              onChange={handleChange}
              color={"secondary.main"}
              length={4}
              autoFocus
            />
            <Button
              onClick={goToReset}
              sx={{ mb: 2 }}
              fullWidth
              variant="contained"
            >
              Verify
            </Button>
            <Typography variant="body2">
              Didn't receive a code? Check your spam or junk folder.
            </Typography>
            <Button sx={{ mt: 1 }} variant="outlined">
              or request a new one
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography variant="h5" mb={2}>
              <LockOpenOutlined />
              {" "}Congratulations! You're Almost There.
            </Typography>
            <Typography
              sx={{
                lineHeight: "1.6",
                // mb: 2,
                "& .email": {
                  color: "primary.main",
                },
              }}
            >
              You're just a few steps away from accessing your account. Please
              set a new password below to complete the process.
            </Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>New Passowrd</InputLabel>
              <OutlinedInput autoFocus label="New Passowrd" />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Confirm Passowrd</InputLabel>
              <OutlinedInput label="Confirm Passowrd" />
            </FormControl>

            <Typography variant="body2" color={'grey'}>
              Choose a strong password that's unique to this account. Include a
              mix of uppercase letters, lowercase letters, numbers, and symbols
              for added security.
            </Typography>
            <Button
              onClick={() => {
                router.push(`/auth/login?email=${email}`)
              }}
              sx={{ mt: 2 }}
              fullWidth
              variant="contained"
            >
              Finish & Secure
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );

  return page;
};

export default ResetForgotenPassword;
