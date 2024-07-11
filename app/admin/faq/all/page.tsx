"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import FaqList from "../components/FaqList";
import { ArrowForward, QuestionAnswerOutlined } from "@mui/icons-material";
import Link from "next/link";

const AllFAQ = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          p: 2,
          borderRadius: "12px",
          mx: "auto",
          width: { xs: "100%", sm: "80%", md: "70%" },
          mt: "75px",
        }}
      >
        <Typography
          sx={{
            "& .spical-word": {
              color: "secondary.main",
            },
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "25px",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          <IconButton
            sx={{
              color: "white",
              backgroundImage: (theme) =>
                `linear-gradient(90deg , ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
            }}
            size="large"
          >
            <QuestionAnswerOutlined />
          </IconButton>
          Quick Answers: Your FAQs, <span className="spical-word">Solved!</span>
        </Typography>
        <Button
          component={Link}
          href="/admin/faq/faqFormDetail?redirectLink=/admin/faq/all&task=create"
          variant="contained"
          endIcon={<ArrowForward />}
        >
          new question
        </Button>
        <FaqList />
      </Box>
    </Box>
  );
};

export default AllFAQ;
