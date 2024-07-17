"use client";
import ImageInputArea from "@/app/components/ImageInputArea/ImageInputArea";
import NumberOutlinedInput from "@/app/components/NumberOutlinedInput";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import React, { useMemo, useState } from "react";

const CategoryForm = () => {
  const [open, setOpen] = useState(false);
  const initialValues: {
    category: string;
    image: File | null;
    parent_id: number | null;
    priority: number;
  } = useMemo(
    () => ({
      category: "",
      image: null,
      parent_id: null,
      priority: 0,
    }),
    []
  );

  const handleFormSubmit = (values: typeof initialValues) => {
    console.log(values);
  };
  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          touched,
          errors,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <ImageInputArea
                value={values.image}
                inputFileProps={{
                  name: "image",
                  onChange: (e) => {
                    setFieldValue(
                      "image",
                      e.target.files ? e.target.files[0] : null
                    );
                  },
                  onBlur: handleBlur,
                }}
              />
            </FormControl>
            <FormControl
              error={!!touched.category && !!errors.category}
              fullWidth
              color="primary"
              margin="dense"
            >
              <InputLabel>Category Name</InputLabel>
              <OutlinedInput
                type="text"
                label={"Category Name"}
                value={values.category}
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.category && !!errors.category && (
                <FormHelperText error>{errors.category}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              error={!!touched.priority && !!errors.priority}
              fullWidth
              color="primary"
              margin="dense"
            >
              <InputLabel>Priority</InputLabel>
              <OutlinedInput
                type="number"
                label={"Priority"}
                componentsProps={{
                  input: {
                    min: 0,
                  },
                }}
                value={values.priority}
                name="priority"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {!!touched.priority && !!errors.priority && (
                <FormHelperText error>{errors.priority}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              error={!!touched.priority && !!errors.priority}
              fullWidth
              color="primary"
              margin="dense"
            >
              {!!touched.priority && !!errors.priority && (
                <FormHelperText error>{errors.priority}</FormHelperText>
              )}
            </FormControl>
            <Button color="primary" fullWidth type="submit" variant="contained">
              Create
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CategoryForm;
