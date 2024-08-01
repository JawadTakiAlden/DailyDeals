import { Money } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Container from "./Container/Container";
import Link from "next/link";
import { CustomButton } from "./CustomButton/CustomButton";

const Header = () => {
  return (
    <>
      <Box
        component={"header"}
        sx={{
          position: "relative",
          zIndex: "1000",
          backgroundColor : 'common.black'
        }}
      >
        <Container>
          <Box
            sx={{
              height: "44px",
              display: "flex",
              alignItems: "center",
              //   px : 2,
              //   borderRadius : '8px'
            }}
          >
            <Money color="primary" />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
            backgroundColor : 'common.black',
          position: "sticky",
          top: "0",
        //   backdropFilter: "blur(20px)",
          zIndex: "1000",
        }}
      >
        <Container>
          <Box
            sx={{
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              //   px : 2
            }}
          >
            <Typography>Daily Deals</Typography>
            <CustomButton
              color="primary"
              variant="contained"
              LinkComponent={Link}
              href="/auth/login"
            >
              Login
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
