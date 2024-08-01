"use client";
import { ReplyOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackFloatButton = () => {
  const router = useRouter();
  return (
    <IconButton
      onClick={() => {
        router.back();
      }}
      sx={{
        backgroundImage: (theme) =>
          `linear-gradient(120deg , ${theme.palette.primary.dark} , ${theme.palette.primary.light})`,
        color: "white",
        padding: 2,
        position: "absolute",
        left: "50px",
        top: "10px",
      }}
    >
      <ReplyOutlined fontSize="large" />
    </IconButton>
  );
};

export default GoBackFloatButton;
