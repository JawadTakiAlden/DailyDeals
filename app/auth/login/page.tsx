import { Box, Typography } from "@mui/material";
import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

interface Props {
  searchParams: {
    email: string;
  };
}

const LoginPage = ({ searchParams: { email } }: Props) => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: "98%",
          borderRadius: "20px",
          mx: "auto",
          mt: 1,
          height: "300px",
          backgroundColor: "primary.main",
          // zIndex :
        }}
      ></Box>
      <Box
        sx={{
          width: { xs: "96%", sm: "70%", md: "50%", lg: "40%" },
          mx: "auto",
          borderRadius: "20px",
          minHeight: "500px",
          padding: 2,
          mt: "-100px",
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "1px 1px 10px -4px rgba(255,255,255,0.4)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "400",
            mb: 1,
          }}
        >
          Daily Deals
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mb: 1,
          }}
        >
          welcome back to daily deals
        </Typography>
        <LoginForm email={email} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            columnGap: "40px",
            rowGap: "20px",
            mt: 3,
            textAlign: "center",
          }}
        >
          <Typography>
            forget password ?{" "}
            <Typography
              color={"primary.main"}
              component={Link}
              href={"/auth/resetPassword"}
            >
              reset it
            </Typography>
          </Typography>
          <Typography>
            Dont have an account ?{" "}
            <Typography
              color={"primary.main"}
              component={Link}
              href={"/auth/register"}
            >
              be one of us now
            </Typography>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
