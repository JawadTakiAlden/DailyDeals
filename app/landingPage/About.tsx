import { Box, Typography } from "@mui/material";
import React from "react";
import Container from "./Container/Container";
import FadeIn from "../components/FadeIn/FadeIn";

const About = () => {
  return (
    <Box
      sx={{
        color: "common.white",
        fontSize: "40px",
        py: 2,
        position: "relative",
        zIndex: 10,
      }}
    >
      <Container>
        <FadeIn>
          <Typography
            sx={{
              mb: 12,
              fontSize: "25px",
              lineHeight: "1.5",
              maxWidth: "700px",
            }}
          >
            Daily Deals is offers ecommerce platform that get the offer from
            many stores and put it in your hand
          </Typography>
        </FadeIn>
        <FadeIn>
          <Typography
            sx={{
              mb: 12,
              fontSize: "25px",
              lineHeight: "1.5",
              maxWidth: "700px",
            }}
          >
            Daily Deals is user freindly application to get your next offer by
            searching by catgeoirs and filter the results using advanced avlible
            filter system
          </Typography>
        </FadeIn>
        <FadeIn>
          <Typography
            sx={{
              mb: 12,
              fontSize: "25px",
              lineHeight: "1.5",
              maxWidth: "700px",
            }}
          >
            Daily Deals free and dont ask you to pay any money just create your
            account and get the magic!
          </Typography>
        </FadeIn>
        <FadeIn>
          <Typography
            sx={{
              mb: 12,
              fontSize: "25px",
              lineHeight: "1.5",
              maxWidth: "700px",
            }}
          >
            Daily Deals is made for to find your next offer fast , esiest
          </Typography>
        </FadeIn>
      </Container>
    </Box>
  );
};

export default About;
