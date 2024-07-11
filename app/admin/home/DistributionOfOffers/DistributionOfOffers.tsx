"use client";
import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React, { useMemo } from "react";

const DistributionOfOffers = () => {
  const data = useMemo(() => [250, 150, 50, 1120], []);
  const theme = useTheme();
  const gradientId = "gradientAreaChart";
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              style={{
                stopColor: theme.palette.primary.main,
                stopOpacity: 0.8,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: theme.palette.secondary.main,
                stopOpacity: 0.1,
              }}
            />
          </linearGradient>
        </defs>
      </svg>
      <BarChart
        sx={{
          width: "100%",
          height: "300px",
          "& .MuiBarElement-series-Offer_distribution ": {
            fill: `url(#${gradientId})`,
          },
        }}
        series={[{ data: data, stack: "total" , id : 'Offer_distribution' }]}
        xAxis={[
          {
            data: ["extra", "gift", "percentage", "discount"],
            scaleType: "band",
          },
        ]}
      />
    </>
  );
};

export default DistributionOfOffers;
