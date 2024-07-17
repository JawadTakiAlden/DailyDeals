"use client";
import { CreateOutlined, Delete, Edit } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Category {
  id: number;

  name: string;

  image: string;

  is_visible: boolean;

  priority: number;
}

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

const AllCatgeories = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          rowGap: "20px",
          columnGap: "10px",
          flexWrap: "wrap",
          position : "relative"
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              px: 2,
              pt: 2,
              borderRadius: "10px",
              width: {
                xs: "100%",
                sm: "calc(50% - 10px)",
                md: "calc(33.3333% - 10px)",
                lg: "calc(25% - 10px)",
              },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Image
                width={80}
                height={80}
                style={{
                  borderRadius: "50%",
                }}
                src={category.image}
                alt={category.name}
              />
            </Box>
            <Typography
              sx={{
                my: 1,
                textAlign: "center",
              }}
            >
              {category.name}
            </Typography>
            <Box
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.1),
                py: 1,
                px: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Tooltip title="Edit">
                  <IconButton color="warning">
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Visibility">
                  <Switch value={category.is_visible} />
                </Tooltip>
              </Box>
              <Typography
                component={Link}
                href={`/admin/categories/details/${category.id}`}
                sx={{
                    color : 'info.main'
                }}
              >
                More...
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllCatgeories;
