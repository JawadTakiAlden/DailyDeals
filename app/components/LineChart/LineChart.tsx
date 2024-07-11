"use client";
import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useTheme } from "@mui/material";

const uData = [
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
  Math.floor(Math.random() * 1000),
];
const xLabels = [
  "An",
  "Fe",
  "Ma",
  "Ap",
  "M",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SimpleAreaChart() {
  const theme = useTheme();
  const gradientId = "gradientAreaChart";
  return (
    <>
    <svg width={0} height={0}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: theme.palette.primary.main, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: theme.palette.secondary.main, stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
      </svg>
      <LineChart
        height={400}
        series={[{ data: uData, area: true, showMark: false , id : 'Number_of_account' }]}
        xAxis={[
          { scaleType: "point", data: xLabels, label: "Number Of Account" },
        ]}
        sx={{
          width: "100%",
          [`& .${lineElementClasses.root}`]: {
            display: "none",
          },
          '& .MuiAreaElement-series-Number_of_account': {
          fill: `url(#${gradientId})`,
        },
        }}
      />
    </>
  );
}
