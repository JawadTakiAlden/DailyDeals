"use client";
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Profile from "@/public/profile.jpg";
import {
  ChatOutlined,
  UnpublishedOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { stores } from "@/app/dumy/dumyData";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    id: number;
  };
  searchParams: {
    selectedStoreID?: number;
  };
}

const MerchantDetail = ({
  params: { id },
  searchParams: { selectedStoreID },
}: Props) => {
  const router = useRouter();
  console.log(selectedStoreID);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "20px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "300px" },
            display: "flex",
            alignItems: { xs: "center", sm: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Image
            src={Profile.src}
            width={280}
            height={280}
            style={{
              borderRadius: "12px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            alt="profile"
          />
          <Box py={2}>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "6px" }}
              mb={1}
            >
              Grace Mono <VerifiedOutlined color="primary" />
            </Typography>
            <Typography mb={1}>+963 948 966 979</Typography>
            <Typography mb={1}>jawad.taki.alden2002@gmail.com</Typography>
            <Box mb={1}>
              <FormControlLabel
                value="start"
                sx={{
                  marginLeft: "0",
                }}
                control={<Switch color="primary" />}
                label="Blocked"
                labelPlacement="start"
              />
            </Box>
            <Button
              endIcon={<ChatOutlined />}
              variant="contained"
              color="primary"
            >
              Chat With Grace
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "calc(100% - 320px)" },
          }}
        >
          <Box mb={2}>
            <SectionTitle sx={{ mb: 2 }}>Stores</SectionTitle>
            <Box
              sx={{
                display: "flex",
                alignItems: "stretch",
                columnGap: "10px",
                rowGap: "24px",
                flexWrap: "wrap",
              }}
            >
              {stores.map((store) => {
                return (
                  <Tooltip PopperProps={{
                    sx : {
                      backgroundColor : 'transparent'
                    }
                  }} followCursor title={'click to see branches'}>
                    <Box
                      onClick={() => {
                        router.push(
                          `/admin/merchant/${id}?selectedStoreID=${store.id}`
                        );
                      }}
                      sx={{
                        p: 2,
                        backgroundImage: (theme) =>
                          `linear-gradient(to right , ${alpha(
                            theme.palette.primary.dark,
                            0.2
                          )} , ${alpha(theme.palette.primary.light, 0.2)})`,
                        width: {
                          xs: "calc(100% - 10px)",
                          sm: "calc(50% - 10px)",
                          md: "calc(33.3333333% - 10px)",
                        },
                        borderRadius: "12px",
                        transition: "0.3s",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        "&:hover": {
                          transform: "translateY(-2px)",
                        },
                        cursor: "pointer",
                      }}
                      key={store.id}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "600",
                          mt: 2,
                        }}
                      >
                        {store.name}
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "-0",
                          right: "-0",
                          // transform: "translateX(-50%)",
                          backgroundColor: "background.default",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: " center",
                          justifyContent: "center",
                          borderRadius: "0 0 0 20px",
                        }}
                      >
                        {store.type === "verified_vendor" ? (
                          <VerifiedOutlined color="primary" />
                        ) : (
                          <UnpublishedOutlined color="error" />
                        )}
                      </Box>
                    </Box>
                  </Tooltip>
                );
              })}
            </Box>
          </Box>
          <Box>
            <SectionTitle sx={{ mb: 2 }}>Store Detail</SectionTitle>
            {!selectedStoreID ? (
              <Typography color={"warning.main"}>
                Click on store to see it's information
              </Typography>
            ) : (
              <Box>see information of store {selectedStoreID}</Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MerchantDetail;
