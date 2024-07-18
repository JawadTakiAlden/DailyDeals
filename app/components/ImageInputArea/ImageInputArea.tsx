"use client";
import { alpha, Box, Typography } from "@mui/material";
import React, { InputHTMLAttributes, memo } from "react";
import VisualHidinFileInput from "../VisualHidinFileInput/VisualHidinFileInput";
import Image from "next/image";

interface Props {
  inputFileProps: InputHTMLAttributes<HTMLInputElement>;

  value: File | null;
}

const ImageInputArea = ({ inputFileProps, value }: Props) => {
  return (
    <Box
      component={"label"}
      role={undefined}
      sx={{
        p: 2,
        backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.2),
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: "10px",
        cursor: "pointer",
        mb: 1,
      }}
    >
      <VisualHidinFileInput
        accept="image/jpg,image/png,image/jpeg"
        max={5000}
        type="file"
        {...inputFileProps}
      />
      {!value ? (
        <Box>
          <Typography
            sx={{
              "& .or-word": {
                color: "primary.light",
                textDecoration: "underline",
              },
            }}
            textAlign={"center"}
          >
            Please select an image <span className="or-word">or</span> <br />{" "}
            drag and drop an image here to upload.
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              mx: "auto",
              fontSize: "14px",
              fontWeight: "400",
            }}
            color={"warning.main"}
          >
            accepted formats: JPG, PNG, JPEG
          </Typography>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              position: "relative",
              height: "200px",
              width: "200px",
              borderRadius: "8px",
              overflow: "hidden",
              mx: "auto",
            }}
          >
            <Image
              src={URL.createObjectURL(value)}
              alt={value.name}
              fill
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Typography
            sx={{
              mx: "auto",
              fontSize: "14px",
              fontWeight: "400",
              textAlign: "center",
              mt: 1,
            }}
          >
            {value.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default memo(ImageInputArea, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
