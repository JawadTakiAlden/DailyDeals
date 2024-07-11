import SimpleAreaChart from "@/app/components/LineChart/LineChart";
import { Span } from "@/app/components/Span/Span";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StatisticsCards from "./StatisticsCards";
import TopRating from "./TopRating";
import RecentOffers from "./RecentOffers/RecentOffers";
import DistributionOfOffers from "./DistributionOfOffers/DistributionOfOffers";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";

const AdminHome = () => {
  return (
    <Box>
      <Grid container columnSpacing={2} rowSpacing={4}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              textTransform: "capitalize",
            }}
          >
            <Span
              sx={{
                color: "grey.400",
                fontWeight: "500",
                "&::first-letter": { fontFamily: "cursive" },
              }}
            >
              welcome
            </Span>{" "}
            <Span sx={{ fontWeight: "bold" }}>Jawad taki aldeen</Span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <StatisticsCards />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid sx={{ height: "400px" }} item xs={12} sm={6} md={8}>
              <SimpleAreaChart />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TopRating />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={8}>
              <RecentOffers />
            </Grid>
            <Grid sx={{ height: "400px", py: 4 }} item xs={12} sm={6} md={4}>
              <SectionTitle>
                Ratio of distribution of offers according to type
              </SectionTitle>
              <DistributionOfOffers />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminHome;
