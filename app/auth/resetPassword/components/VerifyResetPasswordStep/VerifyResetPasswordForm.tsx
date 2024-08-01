"use client"
import { LoadingButton } from "@mui/lab";
import { FormControl, FormHelperText, Typography } from "@mui/material";
import { Formik } from "formik";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";

type verifyResetPassword = {
  otp: string;
};

const VerifyResetPasswordForm = ({email} : {email : string}) => {
  const router = useRouter()
  const initialValues: verifyResetPassword = {
    otp: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object({
        otp: yup.string().length(4).required("OTP code required"),
      })}
      onSubmit={(values: verifyResetPassword) => {
        console.log(values);
        router.push(`/auth/resetPassword?task=reset&email=${email}`)
      }}
    >
      {({
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <MuiOtpInput
              sx={{ mb: 2 }}
              value={values.otp}
              onChange={(newValue) => {
                setFieldValue("otp", newValue);
              }}
              id="otp"
              onBlur={handleBlur}
              color={"secondary.main"}
              length={4}
              autoFocus
            />
            {!!touched.otp && !!errors.otp && (
              <FormHelperText error>{errors.otp}</FormHelperText>
            )}
          </FormControl>

          <LoadingButton
            // onClick={goToReset}
            type="submit"
            sx={{ mb: 2 }}
            fullWidth
            variant="contained"
          >
            Verify
          </LoadingButton>
          <Typography variant="body2">
            Didnt receive a code? Check your spam or junk folder.
          </Typography>
          <LoadingButton sx={{ mt: 1 }} variant="outlined">
            or request a new one
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default VerifyResetPasswordForm;
