"use client";
import { faqs } from "@/app/dumy/dumyData";
import FaqInterface from "@/app/interfaces/FaqInterface";
import {
  CreateOutlined,
  QuestionMarkOutlined,
  UpdateOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";

type CreateFaqForm = {
  question: string;
  answer: string;
};

interface Props {
  searchParams: {
    redirectLink: string;
    task: "create" | "update";
    faqID: number;
  };
}

const CreateFaq = ({ searchParams: { redirectLink, task, faqID } }: Props) => {
  const router = useRouter();
  const handleCreateFaq = (values: CreateFaqForm) => {
    console.log(values);

    if (redirectLink) {
      router.push(redirectLink);
    }
  };
  let faqData: FaqInterface | null = null;

  if (task === "update") {
    faqData = faqs.filter((faq) => faq.id === +faqID)[0];
  }

  const initialValues: CreateFaqForm =
    task === "create"
      ? {
          question: "",
          answer: "",
        }
      : {
          question: faqData?.question!,
          answer: faqData?.answer!,
        };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          mx: "auto",
          mt: "150px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {task === "create" ? " Create new FAQ" : "Update FAQ"}
        </Typography>
        <Formik
          onSubmit={handleCreateFaq}
          initialValues={initialValues}
          validationSchema={yup.object({
            question: yup.string().required("question is required"),
            answer: yup.string().required("answer is required"),
          })}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                error={!!errors.question && !!touched.question}
                fullWidth
                margin="dense"
              >
                <InputLabel>Question</InputLabel>
                <OutlinedInput
                  name="question"
                  label="Question"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.question}
                />
                {!!errors.question && !!touched.question && (
                  <FormHelperText error>{errors.question}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                error={!!errors.answer && !!touched.answer}
              >
                <InputLabel>Answer</InputLabel>
                <OutlinedInput
                  name="answer"
                  label="Answer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.answer}
                />
                {!!errors.answer && !!touched.answer && (
                  <FormHelperText error>{errors.answer}</FormHelperText>
                )}
              </FormControl>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                startIcon={
                  task === "create" ? <CreateOutlined /> : <UpdateOutlined />
                }
              >
                {task === "create" ? " Create Question" : "Update Question"}
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateFaq;
