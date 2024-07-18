import Category from "@/app/interfaces/CatgeoryInterface";
import { Box, Typography } from "@mui/material";
import React from "react";
import CategoryCard from "../../all/components/CategoryCard";

const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://picsum.photos/200?random=1",
    is_visible: true,
    priority: 1,
  },
  {
    id: 2,
    name: "Books",
    image: "https://picsum.photos/200?random=2",
    is_visible: true,
    priority: 2,
  },
  {
    id: 3,
    name: "Clothing",
    image: "https://picsum.photos/200?random=3",
    is_visible: true,
    priority: 3,
  },
  {
    id: 4,
    name: "Home & Kitchen",
    image: "https://picsum.photos/200?random=4",
    is_visible: true,
    priority: 4,
  },
  {
    id: 5,
    name: "Sports",
    image: "https://picsum.photos/200?random=5",
    is_visible: true,
    priority: 5,
  },
  {
    id: 6,
    name: "Toys",
    image: "https://picsum.photos/200?random=6",
    is_visible: true,
    priority: 6,
  },
  {
    id: 7,
    name: "Beauty",
    image: "https://picsum.photos/200?random=7",
    is_visible: true,
    priority: 7,
  },
  {
    id: 8,
    name: "Automotive",
    image: "https://picsum.photos/200?random=8",
    is_visible: true,
    priority: 8,
  },
  {
    id: 9,
    name: "Health",
    image: "https://picsum.photos/200?random=9",
    is_visible: true,
    priority: 9,
  },
  {
    id: 10,
    name: "Garden",
    image: "https://picsum.photos/200?random=10",
    is_visible: true,
    priority: 10,
  },
];

const CategoryDetails = () => {
  return (
    <Box>
      <Typography mb={2} variant="h5">Sub categories</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          rowGap: "20px",
          columnGap: "10px",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {categories.map((category) => (
          <CategoryCard type="sub" key={category.id} category={category} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryDetails;
