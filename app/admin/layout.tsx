"use client";
import { Box, MenuItem, alpha } from "@mui/material";
import React from "react";
import Header from "../components/Header/Header";
import Logo from "./components/Logo/Logo";
import Profile from "../components/Profile/Profile";
import Notification from "../components/Notification/Notification";
import ModeSwitch from "../components/ModeSwicth/ModeSwitch";
import NavMenu from "../components/NavMenu/NavMenu";
import NavLink from "./components/NavLink/NavLink";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box>
      <Header>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          <Logo />
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: "30px",
            }}
          >
            <NavLink />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <ModeSwitch />
            <Notification />
            <Profile
              redirectLinks={{
                profile: "/admin/profile",
              }}
            />
          </Box>
        </Box>
      </Header>
      <Box
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            alignItems: "center",
            gap: "30px",

            height: "60px",
            backgroundColor: "secondary.main",
            minWidth: "600px",

            "& *": {
              color: (theme) => theme.palette.secondary.contrastText,
            },
          }}
        >
          <NavLink />
        </Box>
      </Box>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            width: "300px",
            backgroundColor: "primary.light",
            height: "300px",
            borderRadius: "30% 70% 58% 42% / 39% 32% 68% 61% ",
            zIndex: "-1",
            top: "20px",
            left: -50,
          }}
        />
        <Box
          sx={{
            px: { xs: 1, sm: 2, md: 3, lg: 5 },
            py: 2,
            position: "relative",
            minHeight: "calc(100vh - 70px )",
            zIndex: 2,
            backdropFilter: "blur(40px)",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
