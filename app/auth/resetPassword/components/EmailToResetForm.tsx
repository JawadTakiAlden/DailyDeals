"use client"
import { SkipNext } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
    Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";

type EmailToReset = {
  email: string;
};

const EmailToResetForm = () => {
    const router = useRouter()
  const initalState: EmailToReset = {
    email: "",
  };
  const emailToResetHandler = (values: EmailToReset) => {
    console.log(values)
    // TODO : check if the user found in the system
    router.push(
        `/auth/resetPassword?task=verify&email=${values.email}`
      );
  };
  return (
    <Formik
      initialValues={initalState}
      validationSchema={yup.object<EmailToReset>({
        email: yup.string().email().required("email field is required"),
      })}
      onSubmit={emailToResetHandler}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl
            error={!!touched.email && !!errors.email}
            fullWidth
            color="primary"
            margin="normal"
          >
            <InputLabel>Email</InputLabel>
            <OutlinedInput
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            {!!touched.email && !!errors.email && (
              <FormHelperText error>{errors.email}</FormHelperText>
            )}
          </FormControl>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LoadingButton
            //   onClick={goToVerifyReset}
              variant="contained"
              type="submit"
              color="primary"
              endIcon={<SkipNext />}
              loadingPosition="end"
            >
              Continue
            </LoadingButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default EmailToResetForm;
