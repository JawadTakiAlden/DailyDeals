"use client";
import { Table } from "@/app/components/Table/table";
import AddCategoryRequest from "@/app/interfaces/AddCategoryRequest";
import { Box, Typography } from "@mui/material";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import React from "react";
import RejectButton from "../components/RejectButton";
import AcceptRequestButton from "../components/AcceptRequestButton";

const categoryRequests: AddCategoryRequest[] = [
  {
    id: 1,
    category: "Electronics",
    status: "pending",
    admin_name: null,
    user: {
      id: 105,
      name: "jawad taki aldeen",
    },
    parent: null,
  },
  {
    id: 2,
    category: "Books",
    admin_name: null,
    status: "accepted",
    user: {
      id: 50,
      name: "ali aldkak",
    },
    parent: {
      id: 50,
      name: "Electronics",
    },
  },
  {
    id: 3,
    category: "Laptops",
    admin_name: null,
    status: "rejected",
    user: {
      id: 110,
      name: "noor asma",
    },
    parent: {
      id: 50,
      name: "Electronics",
    },
  },
];

const AddCategoryRequests = () => {
  console.log("rerender");
  const columns: MRT_ColumnDef<AddCategoryRequest>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 50,
    },
    {
      accessorKey: "category",
      header: "Category Name",
    },
    {
      accessorKey: "user.name",
      header: "Username",
    },
    {
      accessorKey: "parent.name",
      header: "Parent Categroy",
      Cell: ({ row }) => {
        return (
          <Box>
            {row.original.parent?.name || (
              <Typography variant="caption" color={"error.light"}>
                no parent
              </Typography>
            )}
          </Box>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ row }) => (
        <Typography
          sx={{
            width: "150px",
            p: 1,
            borderRadius: "6px",
            backgroundColor:
              row.original.status === "accepted"
                ? "success.main"
                : row.original.status === "pending"
                ? "info.main"
                : "error.main",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.info.main),
            textAlign: "center",
          }}
        >
          {row.original.status}
        </Typography>
      ),
    },
    {
      accessorKey: "admin_name",
      header: "Public Name",
      Cell: ({ row }) => {
        return (
          row.original.admin_name || (
            <Typography color={"error.light"} variant="caption">
              not specifed yet
            </Typography>
          )
        );
      },
    },
  ];

  const table = Table({
    data: categoryRequests,
    columns,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box
        sx={{
          display: "flex",
          alignItems: " center",
          gap: "5px",
        }}
      >
        <RejectButton row={row} />
        <AcceptRequestButton row={row} />
      </Box>
    ),
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default AddCategoryRequests;
