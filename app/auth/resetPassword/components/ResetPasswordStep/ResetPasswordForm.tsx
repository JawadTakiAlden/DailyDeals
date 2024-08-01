import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import React, { MouseEvent, useState } from "react";
import * as yup from "yup";

const ResetPasswordForm = ({ email }: { email: string }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] =
    useState<boolean>(false);
  const handleClickShowConfirmNewPassword = () =>
    setShowConfirmNewPassword((show) => !show);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Formik
      initialValues={{
        new_password: "",
        confirm_new_password: "",
      }}
      validationSchema={yup.object({
        new_password: yup
          .string()
          .min(7)
          .max(26)
          .required("new password is required"),
        confirm_new_password: yup
          .string()
          .oneOf([yup.ref("new_password")], "Passwords must match")
          .required("Confirm new password is required"),
      })}
      onSubmit={(values: {
        new_password: string;
        confirm_new_password: string;
      }) => {
        console.log({
          ...values,
          email,
        });
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
            error={!!touched.new_password && !!errors.new_password}
            color="primary"
            fullWidth
            sx={{ mb: 1 }}
          >
            <InputLabel>New Password</InputLabel>
            <OutlinedInput
              name="new_password"
              value={values.new_password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="New Password"
              autoFocus
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
            {!!touched.new_password && !!errors.new_password && (
              <FormHelperText error>{errors.new_password}</FormHelperText>
            )}
          </FormControl>
          <FormControl
            error={!!touched.new_password && !!errors.new_password}
            color="primary"
            fullWidth
            sx={{ mb: 1 }}
          >
            <InputLabel>Confirm New Password</InputLabel>
            <OutlinedInput
              name="confirm_new_password"
              value={values.confirm_new_password}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Confirm New Password"
              type={showConfirmNewPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowConfirmNewPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmNewPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!!touched.confirm_new_password &&
              !!errors.confirm_new_password && (
                <FormHelperText error>
                  {errors.confirm_new_password}
                </FormHelperText>
              )}
          </FormControl>

          <LoadingButton
            type="submit"
            sx={{ mt: 2 }}
            fullWidth
            variant="contained"
          >
            Finish & Secure
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
