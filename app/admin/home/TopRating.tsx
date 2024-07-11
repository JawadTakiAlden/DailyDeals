import StatisticCardWrapper from "@/app/components/StatisticCardWrapper/StatisticCardWrapper";
import { Star } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const stores = [
  { name: "TechHub Electronics", rating: 4.5 },
  { name: "Urban Outfitters", rating: 4.0 },
  { name: "The Book Nook", rating: 4.8 },
  { name: "Gourmet Delights", rating: 4.6 },
  { name: "Trendy Threads", rating: 4.2 },
  { name: "The Home Haven", rating: 4.7 },
  { name: "Fresh Market", rating: 4.3 },
  { name: "Gadget Galaxy", rating: 4.1 },
  { name: "Fashion Forward", rating: 4.4 },
  { name: "QuickMart Convenience", rating: 4.0 },
  { name: "QuickMart Convenience", rating: 4.0 },
  { name: "QuickMart Convenience", rating: 4.0 },
];

const TopRating = () => {
  return (
    <StatisticCardWrapper>
      <Typography
        sx={{
          color: "primary.light",
          fontWeight: "600",
          textTransform: "capitalize",
          fontSize: "20px",
          mb: 2,
        }}
      >
        Top Rating Stores
      </Typography>
      <Box
        sx={{
            maxHeight : '300px',
            overflowY: 'auto'
        }}
      >
        {stores.map((store, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              mb: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "17px",
              }}
            >
              {store.name}
            </Typography>
            <Rating
              value={store.rating}
              readOnly
              precision={0.1}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "primary.main",
                },
                "& .MuiRating-iconHover": {
                  color: "primary.dark",
                },
              }}
              emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
        ))}
      </Box>
    </StatisticCardWrapper>
  );
};

export default TopRating;
