"use client";
import useLogin from "@/app/apiFetch/auth/useLogin";
// import useGetDeviceInfo from "@/app/utils/useGetDeviceInfo";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as yup from "yup";

interface Props {
  email?: string;
}

const LoginForm = ({ email }: Props) => {
  const router = useRouter();
  const login = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };
  return (
    <Formik
      initialValues={{
        email: email || "",
        password: "",
      }}
      validationSchema={yup.object({
        email: yup.string().email().required("email is required"),
        password: yup.string().min(7).max(26).required("password is required"),
      })}
      onSubmit={(values) => {
        login.mutate(values)
        // router.push('/admin/home')
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl
            error={!!touched.email && !!errors.email}
            color="primary"
            fullWidth
            sx={{ mb: 1 }}
          >
            <InputLabel>Email</InputLabel>
            <OutlinedInput
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              label="Email"
              value={values.email}
              autoFocus
            />
            {!!touched.email && !!errors.email && (
              <FormHelperText error>{errors.email}</FormHelperText>
            )}
          </FormControl>
          <FormControl
            error={!!touched.password && !!errors.password}
            color="primary"
            fullWidth
            sx={{ mb: 1 }}
          >
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!!touched.password && !!errors.password && (
              <FormHelperText error>{errors.password}</FormHelperText>
            )}
          </FormControl>
          <LoadingButton
            // onClick={() => {
            //   router.push("/admin/home");
            // }}
            loading={login.isPending}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
