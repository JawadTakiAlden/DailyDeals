"use client";
import { Box, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import CategoryForm from "./components/CategoryForm";

interface Props {
  searchParams: {
    task: "create" | "edit";
    categoryId : number;
    redirectURL : string;
  };
}

const CreateCategory = ({
  searchParams: { redirectURL, task, categoryId },
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "70%", lg: "50%" },
          borderRadius: "6px",
        }}
      >
        <Typography mb={2}>
          {task === "create" ? " Create new category" : "Update catgeory"}
        </Typography>
        <CategoryForm
          redirectURL={redirectURL}
          task={task}
          categoryId={categoryId}
        />
      </Box>
    </Box>
  );
};

export default CreateCategory;
