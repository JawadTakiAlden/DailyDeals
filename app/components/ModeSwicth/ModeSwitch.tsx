"use client";
import { CHANGE_MODE } from "@/app/store/slices/customizationSlice";
import { RootState } from "@/app/store/store";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ModeSwitch = () => {
  const dispacth = useDispatch();
  const customization = useSelector((state: RootState) => state.customization);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => {
        dispacth(CHANGE_MODE());
      }}
      color="inherit"
    >
      {customization?.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ModeSwitch;
