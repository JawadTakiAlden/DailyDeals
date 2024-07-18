"use client";
import Category from "@/app/interfaces/CatgeoryInterface";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Switch,
} from "@mui/material";
import React from "react";
import { Table } from "@/app/components/Table/table";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import Image from "next/image";
import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import Link from "next/link";
import LinkIconButton from "@/app/components/LinkIconButton/LinkIconButton";
import { EditOutlined } from "@mui/icons-material";

interface SubCategroyInterface extends Category {
  number_of_products: number;

  parent_name: string;
}

const categories: SubCategroyInterface[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://picsum.photos/200?random=1",
    is_visible: true,
    priority: 1,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 2,
    name: "Books",
    image: "https://picsum.photos/200?random=2",
    is_visible: true,
    priority: 2,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 3,
    name: "Clothing",
    image: "https://picsum.photos/200?random=3",
    is_visible: true,
    priority: 3,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 4,
    name: "Home & Kitchen",
    image: "https://picsum.photos/200?random=4",
    is_visible: true,
    priority: 4,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 5,
    name: "Sports",
    image: "https://picsum.photos/200?random=5",
    is_visible: true,
    priority: 5,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 6,
    name: "Toys",
    image: "https://picsum.photos/200?random=6",
    is_visible: true,
    priority: 6,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 7,
    name: "Beauty",
    image: "https://picsum.photos/200?random=7",
    is_visible: true,
    priority: 7,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 8,
    name: "Automotive",
    image: "https://picsum.photos/200?random=8",
    is_visible: true,
    priority: 8,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 9,
    name: "Health",
    image: "https://picsum.photos/200?random=9",
    is_visible: true,
    priority: 9,
    number_of_products: 50,
    parent_name: "bla",
  },
  {
    id: 10,
    name: "Garden",
    image: "https://picsum.photos/200?random=10",
    is_visible: true,
    priority: 10,
    number_of_products: 50,
    parent_name: "bla",
  },
];

interface Props {
  params: {
    categoryID: number;
  };
}

const CategoryDetails = ({ params: { categoryID } }: Props) => {
  const columns: MRT_ColumnDef<SubCategroyInterface>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 50,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "number_of_products",
      header: "Product Count",
      size: 50,
    },
    {
      accessorKey: "priority",
      header: "Priority",
      size: 50,
    },
    {
      accessorKey: "is_visible",
      header: "Visibility",
      Cell: ({ row }) => {
        return (
          <Box>
            <Switch value={row.original.is_visible} />
          </Box>
        );
      },
    },
    {
      accessorKey: "image",
      header: "Image",
      Cell: ({ row }) => {
        return (
          <Box>
            <Image
              src={row.original.image}
              alt={row.original.name}
              width={60}
              height={60}
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>
        );
      },
    },
  ];
  const table = Table({
    data: categories,
    columns,
    enableTopToolbar: true,
    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={{
            py: 1,
            px: 0.5,
          }}
        >
          <Button
            component={Link}
            href={`/admin/categories/form?task=create&parent_id=${categoryID}&redirectURL=/admin/categories/details/${categoryID}`}
            variant="contained"
          >
            Create new one
          </Button>
        </Box>
      );
    },
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box
        sx={{
          display: "flex",
          alignItems: " center",
          gap: "5px",
        }}
      >
        <DeleteButton
          dialogComponent={({ handleClose }) => {
            return (
              <>
                <DialogTitle>Delete Sub Catgeory</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    are you sure you want to delete {row.original.name} from
                    list of sub categories realted to {row.original.parent_name}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    color="error"
                    variant="contained"
                  >
                    Confirm delete
                  </Button>
                  <Button onClick={handleClose} color="success" autoFocus>
                    Cancel
                  </Button>
                </DialogActions>
              </>
            );
          }}
        />
        <LinkIconButton
          linkProps={{
            href: `/admin/categories/form?task=edit&categoryId=${row.original.id}&redirectURL=/admin/categories/details/${categoryID}`,
          }}
          icon={<EditOutlined />}
        />
      </Box>
    ),
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default CategoryDetails;
