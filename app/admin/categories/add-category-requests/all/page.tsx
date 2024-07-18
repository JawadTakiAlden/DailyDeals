"use client"
import { Table } from "@/app/components/Table/table";
import { Box } from "@mui/material";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import React from "react";

interface AddCategoryRequests {
    id : number

    category : string

    admin_name? : string | null

    parent_id? : number | null

    parent_name? : string

    user_id : number

    // status : 'pending' | 'rejected' | 'accepted'
}



const categoryRequests: AddCategoryRequests[] = [
    {
        id: 1,
        category: "Electronics",
        admin_name: null,
        parent_id: 0,
        parent_name: "Root",
        user_id: 101
    },
    {
        id: 2,
        category: "Books",
        admin_name: null,
        parent_id: 0,
        parent_name: "Root",
        user_id: 102
    },
    {
        id: 3,
        category: "Computers",
        admin_name: null,
        parent_id: 1,
        parent_name: "Electronics",
        user_id: 103
    },
    {
        id: 4,
        category: "Fiction",
        admin_name: null,
        parent_id: 2,
        parent_name: "Books",
        user_id: 104
    },
    {
        id: 5,
        category: "Non-Fiction",
        admin_name: null,
        parent_id: 2,
        parent_name: "Books",
        user_id: 105
    },
    {
        id: 6,
        category: "Laptops",
        admin_name: null,
        parent_id: 3,
        parent_name: "Computers",
        user_id: 106
    },
    {
        id: 7,
        category: "Desktops",
        admin_name: null,
        parent_id: 3,
        parent_name: "Computers",
        user_id: 107
    },
    {
        id: 8,
        category: "Fantasy",
        admin_name: null,
        parent_id: 4,
        parent_name: "Fiction",
        user_id: 108
    },
    {
        id: 9,
        category: "Biography",
        admin_name: null,
        parent_id: 5,
        parent_name: "Non-Fiction",
        user_id: 109
    },
    {
        id: 10,
        category: "Tablets",
        admin_name: null,
        parent_id: 3,
        parent_name: "Computers",
        user_id: 110
    }
];

const AddCategoryRequests = () => {
    const columns : MRT_ColumnDef<AddCategoryRequests>[] = [
        {
            accessorKey : 'id',
            header : 'ID',
            size : 50
        },
        {
            accessorKey : 'category',
            header : 'Category Name',
        },
        {
            accessorKey : 'parent_name',
            header : 'Category Name',
        },
        // {
        //     ac
        // }
    ]
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
      ></Box>
    ),
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default AddCategoryRequests;
