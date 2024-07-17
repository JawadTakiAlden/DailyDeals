"use client";
import BackgroundBox from "@/app/components/BackgroundBox/BackgroundBox";
import ProfileLableBox from "@/app/components/ProfileLableBox/ProfileLableBox";
import { AccountBoxOutlined, LogoutOutlined } from "@mui/icons-material";
import React from "react";
import wavy from "@/public/wavy-background.jpg";
import { Box, Divider, Grid, Typography, alpha, styled } from "@mui/material";
import Image from "next/image";
import ModeSwitch from "@/app/components/ModeSwicth/ModeSwitch";
import PaletteController from "@/app/components/PaletteController/PaletteController";
import UpdateProfile from "./UpdateProfile";
import ResetPassword from "./ResetPassword";
import LoginsToMyAccount from "@/app/components/LoginsToMyAccount/LoginsToMyAccount";
import VisualHidinFileInput from "@/app/components/VisualHidinFileInput/VisualHidinFileInput";


interface Props {
    src : string
    name : string
}

const Profile = ({src , name} : Props) => {
  return (
    <>
      <BackgroundBox backgroundURL={wavy.src} />
      <Box
        sx={{
          p: "4",
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          marginTop: "-100px",
          px: 2,
          gap: "15px",
          backdropFilter: "blur(10px)",
          width: "98%",
          mx: "auto",
          py: 3,
          boxShadow: (theme) =>
            `2px 2px 15px -5px ${theme.palette.primary.main}`,
          borderRadius: "30px",
          mb : 3
        }}
      >
        <ProfileLableBox component={"label"} role={undefined}>
          <AccountBoxOutlined
            className="camera"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50% , -50%)",
              zIndex: "10",
              display: "none",
              transition: "0.2s",
            }}
          />
          <VisualHidinFileInput accept="image/jpg,image/png,image/jpeg" max={5000} type="file" />
          <Image
            style={{ borderRadius: "10%" }}
            width={120}
            height={120}
            src={src}
            alt="prfole"
          />
        </ProfileLableBox>
        <Typography
          sx={{
            fontSize: "25px",
          }}
        >
          {name}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm ={6} md={4}>
          <Box
            sx={{
              p : 2,
              borderRadius : '8px',
              backgroundColor : (theme) => alpha(theme.palette.primary.main , 0.1)
            }}
          >
            <Typography>
              Mode
            </Typography>
            <ModeSwitch />
            <Typography>
              Colors Palette
            </Typography>
            <PaletteController />
          </Box>
        </Grid>
        <Grid item xs={12} sm ={6} md={8}>
            <UpdateProfile />
            <Divider sx={{my : 2}}/>
            <ResetPassword />
            <Divider sx={{my : 2}}/>
            <LoginsToMyAccount />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
