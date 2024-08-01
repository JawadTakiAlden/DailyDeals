"use client";
import React, { useRef } from "react";
import Container from "./Container/Container";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton/CustomButton";
import Link from "next/link";
import Background from "@/public/offer3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "common.black",
      }}
    >
      <motion.div
        ref={imageContainerRef}
        style={{
          width: "100%",
          position: "absolute",
          left: "0",
          top: "-100px",
          height: "200vh",
          opacity,
        }}
      >
        <img
          style={{
            position: "sticky",
            top: "0",
            height: "100vh",
            objectFit: "cover",
            width: "100%",
          }}
          alt="background"
          src={Background.src}
        />
      </motion.div>

      <motion.div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "calc(100svh - 44px - 56px)",
        }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        whileInView={"visible"}
        exit={"hidden"}
        animate="hidden"
        viewport={{ amount: 0.98 }}
      >
        <Container sx={{
            width : '100%'
        }}>
          <Box
            sx={{
              position: "relative",
              zIndex: "3",
              py : 4
            }}
          >
            <Typography
              sx={{
                maxWidth: "600px",
                mb: 5,
                fontSize: { xs: "25px", sm: "35px", md: "45px" },
                fontWeight: "bold",
              }}
            >
              find your next deals esier with Daily Deals
            </Typography>
            <CustomButton
              sx={{
                width: "150px",
                mb: 3,
              }}
              LinkComponent={Link}
              href="/auth/login"
              variant="outlined"
            >
              Start Now
            </CustomButton>
            <Typography
              sx={{
                color: "grey.300",
                mb: 3,
              }}
            >
              get the world of sales in your hand
            </Typography>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default Hero;
