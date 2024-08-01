"use client";
import useRegister from "@/app/apiFetch/auth/useRegister";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import * as yup from "yup";
import RegisterFormHeader from "../../login/components/RegisterFormHeader";
import { UserInterface } from "@/app/interfaces/UserInterface";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type RegisterInaformation = {
  password: string;
  email: string;
  type: "merchant" | "user";
  first_name: string;
  last_name: string;
  phone_number: string;
  confirm_password: string;
};

const validationSchema = yup.object({
  password: yup.string().min(7).max(26).required(),
  first_name: yup.string().max(26).required(),
  last_name: yup.string().max(26).required(),
  email: yup.string().email().required(),
  phone_number: yup.string().length(10).required("phone number is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm new password is required"),
});

const initialValues: RegisterInaformation = {
  password: "",
  email: "",
  type: "merchant",
  first_name: "",
  last_name: "",
  phone_number: "",
  confirm_password: "",
};

const TypeButton = styled(Button)(() => ({
  transition: "0.3s",
}));

const accountTypes: ["merchant", "user"] = ["merchant", "user"];

const RegisterForm = () => {
  const register = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  const onSubmit = (values: RegisterInaformation) => {
    register.mutate(values);
  };
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: "600px",
        mx: "auto",
        p: 2,
      }}
    >
      <RegisterFormHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              {accountTypes.map((type, i) => (
                <TypeButton
                  key={i}
                  sx={{
                    width: type === values.type ? "70%" : "50%",
                    p: 1,
                    borderRadius: i === 0 ? "6px 0 0 6px" : "0 6px 6px 0",
                  }}
                  onClick={() => {
                    setFieldValue("type", type);
                  }}
                  variant={type === values.type ? "contained" : "text"}
                >
                  {type}
                </TypeButton>
              ))}
            </Box>
            <FormControl fullWidth color="primary" sx={{ mb: 2 }}>
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                type="email"
                label="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                value={values.email}
              />
              {!!errors.email && !!touched.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth color="primary" sx={{ mb: 2 }}>
              <InputLabel>First Name</InputLabel>
              <OutlinedInput
                type="text"
                label="First Name"
                name="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.first_name && !!errors.first_name}
                value={values.first_name}
              />
              {!!errors.first_name && !!touched.first_name && (
                <FormHelperText error>{errors.first_name}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth color="primary" sx={{ mb: 2 }}>
              <InputLabel>Last Name</InputLabel>
              <OutlinedInput
                type="text"
                label="Last Name"
                name="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.last_name && !!errors.last_name}
                value={values.last_name}
              />
              {!!errors.last_name && !!touched.last_name && (
                <FormHelperText error>{errors.last_name}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth color="primary" sx={{ mb: 2 }}>
              <InputLabel>Phone</InputLabel>
              <OutlinedInput
                type="text"
                label="Phone"
                name="phone_number"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.phone_number && !!errors.phone_number}
                value={values.phone_number}
              />
              {!!errors.phone_number && !!touched.phone_number && (
                <FormHelperText error>{errors.phone_number}</FormHelperText>
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
            <FormControl
              error={!!touched.confirm_password && !!errors.confirm_password}
              color="primary"
              fullWidth
              sx={{ mb: 1 }}
            >
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {!!touched.confirm_password && !!errors.confirm_password && (
                <FormHelperText error>{errors.confirm_password}</FormHelperText>
              )}
            </FormControl>
            <LoadingButton
              loading={register.isPending}
              type="submit"
              loadingPosition="start"
              fullWidth
              variant="contained"
              color="primary"
            >
              Create your account
            </LoadingButton>
          </form>
        )}
      </Formik>
      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
        }}
      >
        already have an account ?{" "}
        <Typography
          color={"primary.main"}
          component={Link}
          href={"/auth/login"}
        >
          login
        </Typography>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
