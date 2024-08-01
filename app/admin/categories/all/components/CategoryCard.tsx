"use client"
import Category from "@/app/interfaces/CatgeoryInterface";
import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryActionWraper from "./CategoryActionWraper";
import DeleteCategoryButton from "./DeleteCategoryButton";

const CategoryCard = ({
  category,
  type = "parent",
}: {
  category: Category;
  type?: "sub" | "parent";
}) => {
  return (
    <Box
      sx={{
        px: 0,
        pt: 2,
        borderRadius: "10px",
        width: {
          xs: "100%",
          sm: "calc(50% - 10px)",
          md: "calc(33.3333% - 10px)",
          lg: "calc(25% - 10px)",
        },
        // backgroundColor : 'primary.dark'
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
      <CategoryActionWraper>
        <Box>
          <Tooltip title="Edit">
            <IconButton
              component={Link}
              href={`/admin/categories/form?task=edit&categoryId=${category.id}&redirectURL=/admin/categories/all`}
              color="warning"
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <DeleteCategoryButton category={category} />
          <Tooltip title="Visibility">
            <Switch value={category.is_visible} />
          </Tooltip>
        </Box>
        {type === "parent" && (
          <Typography
            component={Link}
            href={`/admin/categories/details/${category.id}`}
            sx={{
              color: "info.main",
            }}
          >
            More...
          </Typography>
        )}
      </CategoryActionWraper>
    </Box>
  );
};

export default CategoryCard;
