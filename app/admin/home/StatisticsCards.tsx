import AnimatedCounter from "@/app/components/AnimatedCounter/AnimatedCounter";
import StatisticCardWrapper from "@/app/components/StatisticCardWrapper/StatisticCardWrapper";
import SubText from "@/app/components/SubText/SubText";
import {
  CategoryOutlined,
  PeopleOutlined,
  StoreOutlined,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
} from "@mui/icons-material";
import { Box, Grid, Typography, alpha } from "@mui/material";
import React from "react";

const cards = [
  {
    title: "Store",
    icon: <StoreOutlined />,
    accessorKey: "store",
    changeAvg: 3.4,
  },
  {
    title: "Accounts",
    icon: <PeopleOutlined />,
    accessorKey: "account",
    changeAvg: -1.6,
  },
  {
    title: "Offers",
    icon: <PeopleOutlined />,
    accessorKey: "account",
    changeAvg: 0,
  },
  {
    title: "Categories",
    icon: <CategoryOutlined />,
    accessorKey: "account",
    changeAvg: +12.6,
  },
];

const StatisticsCards = () => {
  return (
    <Grid container spacing={2}>
      {cards.map((card, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <StatisticCardWrapper
            sx={{
              transition : '0.3s',
              "&:hover" : {
                transform : 'scale(1.05)',
              }
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                
              }}
            >
              {card.icon}
              <Typography>{card.title}</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                my: 1,
              }}
            >
              <AnimatedCounter
                value={Math.floor(Math.random() * 10000)}
                direction="up"
              />{" "}
              <SubText
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  display: "inline-flex",
                  alignItems: "center",
                  gap : '6px',
                  color : card.changeAvg === 0 ? 'primary.main' : card.changeAvg < 0 ? 'error.main' : 'success.main'
                }}
              >
                {card.changeAvg} {card.changeAvg === 0 ? <TrendingFlat /> : card.changeAvg < 0 ? <TrendingDown /> : <TrendingUp />}
              </SubText>
            </Typography>
          </StatisticCardWrapper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsCards;
