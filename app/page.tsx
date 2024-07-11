import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";


const LandingPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Button color="primary" variant="contained" component={Link} href="/auth/login">
        Login
      </Button>
    </Box>
  );
};

export default LandingPage;
