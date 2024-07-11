"use client";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";

type RegisterInaformation = {
  password: string;
  email: string;
  type: "merchant" | "user";
  first_name: string;
  last_name: string;
};

const validationSchema = yup.object({
  password: yup.string().min(7).max(26).required(),
  first_name: yup.string().max(26).required(),
  last_name: yup.string().max(26).required(),
  email: yup.string().email().required(),
});

const initialValues: RegisterInaformation = {
  password: "",
  email: "",
  type: "merchant",
  first_name: "",
  last_name: "",
};

const TypeButton = styled(Button)(() => ({
  transition: "0.3s",
}));

const accountTypes: ["merchant", "user"] = ["merchant", "user"];

const RegisterForm = () => {
  const router = useRouter()
  const onSubmit = (values: RegisterInaformation) => {
    console.log(values);
    router.push(`/auth/verify?email=jawad.taki.aldeen2002@gmail.com`)
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
      <Typography
        sx={{
          mb: 1,
          color: "primary.dark",
          fontSize: "16px",
        }}
      >
        Discover Your Next Great Find!
      </Typography>
      <Typography
        sx={{
          mb: 2,
          lineHeight: "1.6",
          color: "grey",
        }}
      >
        Join us and access exclusive deals, curated collections, and a seamless
        shopping experience. Your journey to finding the best products starts
        now!
      </Typography>
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
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type="password"
                label="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.password && !!errors.password}
                value={values.password}
              />
              {!!errors.password && !!touched.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>
            <LoadingButton
              // loading
              type="submit"
              loadingPosition="start"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
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
