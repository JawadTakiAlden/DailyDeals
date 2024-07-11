"use client";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  email?: string;
}

const LoginForm = ({ email }: Props) => {
  const router = useRouter();
  return (
    <form>
      <FormControl color="primary" fullWidth sx={{ mb: 1 }}>
        <InputLabel>Email</InputLabel>
        <OutlinedInput label="Email" type="email" value={email} autoFocus />
      </FormControl>
      <FormControl color="primary" fullWidth sx={{ mb: 1 }}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput label="Password" type="password" />
      </FormControl>
      <Button
        onClick={() => {
          router.push("/admin/home");
        }}
        fullWidth
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
