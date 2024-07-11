"use client";
import { avaliblePalettes } from "@/app/contsant";
import { CHANGE_Palette } from "@/app/store/slices/customizationSlice";
import { RootState } from "@/app/store/store";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PaletteController = () => {
    const customization = useSelector((state : RootState) => state.customization)
  const dispacth = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {avaliblePalettes.map((palette, i) => (
        <Box
          sx={{
            cursor: "pointer",
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            transition : '0.3s',
            opacity : customization.activePaletteIndex === i ? 1 : 0.5,
            backgroundImage: `linear-gradient(to bottom , ${palette.primary} 20%  , ${palette.secondary} 20%  , ${palette.secondary} 40%  , ${palette.error} 40% , ${palette.error} 60% , ${palette.success} 60% , ${palette.success} 80% , ${palette.background} 80% , ${palette.background} 100% )`,
          }}
          onClick={() => {
            localStorage.setItem('dailyDealsTheme' , JSON.stringify(i))
            dispacth(
              CHANGE_Palette({
                palette,
                activePaletteIndex: i,
              })
            );
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default PaletteController;
