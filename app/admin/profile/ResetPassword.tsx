import { LockResetOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

interface ChangePasswordFormInterface {
  old_password: string;

  new_password: string;

  confirm_new_password: string;
}

const initialValues: ChangePasswordFormInterface = {
  old_password: "",
  new_password: "",
  confirm_new_password: "",
};

const ResetPassword = () => {
  const changePasswordHandeler = (values: ChangePasswordFormInterface) => {
    console.log(values);
  };
  return (
    <Box>
      <Typography variant="h6" mb={1}>
        Change Password
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={changePasswordHandeler}
        validationSchema={yup.object({
          old_password: yup
            .string()
            .min(7)
            .max(26)
            .required("Old password is required field"),
          new_password: yup
            .string()
            .min(7)
            .max(26)
            .required("New password is required field"),
          confirm_new_password: yup
            .string()
            .min(7)
            .max(26)
            .required("Confirm new password is required field"),
        })}
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
            <Grid container columnSpacing={1}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth color="primary" margin="dense">
                  <InputLabel>Current Password</InputLabel>
                  <OutlinedInput
                  type="password"
                    label="Current Password"
                    name="old_password"
                    value={values.old_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.old_password && !!touched.old_password}
                  />
                  {!!errors.old_password && !!touched.old_password && (
                    <FormHelperText>{errors.old_password}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth color="primary" margin="dense">
                  <InputLabel>New Password</InputLabel>
                  <OutlinedInput
                   type="password"
                    label="New Password"
                    name="new_password"
                    value={values.new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.new_password && !!touched.new_password}
                  />
                  {!!errors.new_password && !!touched.new_password && (
                    <FormHelperText>{errors.new_password}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth color="primary" margin="dense">
                  <InputLabel>Confirm New Password</InputLabel>
                  <OutlinedInput
                   type="password"
                    label="Confirm New Password"
                    name="confirm_new_password"
                    value={values.confirm_new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.confirm_new_password && !!touched.confirm_new_password}
                  />
                  {!!errors.confirm_new_password && !!touched.confirm_new_password && (
                    <FormHelperText>{errors.confirm_new_password}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              sx={{ mt: 2 }}
              endIcon={<LockResetOutlined />}
              color="primary"
              variant="contained"
            >
              Change Password
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ResetPassword;
