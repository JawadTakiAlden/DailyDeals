import { SaveOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

interface ProfileFormValues {
  first_name: string;

  last_name: string;

  phone: string;
}

const initialValues: ProfileFormValues = {
  first_name: "",
  last_name: "",
  phone: "",
};

const UpdateProfile = () => {
  const updateProfileHandler = (values: ProfileFormValues) => {
    console.log(values);
  };
  return (
    <Box>
      <Typography variant="h5" mb={1}>
        Update Profile
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={updateProfileHandler}
        validationSchema={yup.object({
          first_name: yup
            .string()
            .max(26)
            .required("First name is required field"),
          last_name: yup
            .string()
            .max(26)
            .required("Last name is required field"),
          phone: yup
            .string()
            .matches(/^(09[34]\d{7}|09[58]\d{7})$/, 'Phone number is not valid for MTN or Syriatel')
            .required("Phone is required field"),
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
                  <InputLabel>First Name</InputLabel>
                  <OutlinedInput
                    label="First Name"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.first_name && !!touched.first_name}
                  />
                  {!!errors.first_name && !!touched.first_name && (
                    <FormHelperText>{errors.first_name}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth color="primary" margin="dense">
                  <InputLabel>Last Name</InputLabel>
                  <OutlinedInput
                    label="Last Name"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.last_name && !!touched.last_name}
                  />
                  {!!errors.last_name && !!touched.last_name && (
                    <FormHelperText>{errors.last_name}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth color="primary" margin="dense">
                  <InputLabel>Phone</InputLabel>
                  <OutlinedInput
                    label="Phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.phone && !!touched.phone}
                  />
                  {!!errors.phone && !!touched.phone && (
                    <FormHelperText>{errors.phone}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              sx={{ mt: 2 }}
              endIcon={<SaveOutlined />}
              color="primary"
              variant="contained"
            >
              Save
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default UpdateProfile;
