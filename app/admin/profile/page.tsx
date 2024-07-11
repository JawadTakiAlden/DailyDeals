"use client";
import { Box } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import Image from '@/public/Wavy_Gen-01_Single-07.jpg'

const AdminProfile = () => {
  return (
    <Box>
      <Profile src={Image.src} name="Jawad taki aldeen" />
    </Box>
  );
};

export default AdminProfile;
