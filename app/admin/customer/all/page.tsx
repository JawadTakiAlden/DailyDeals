"use client";
import { Table } from "@/app/components/Table/table";
import { customers } from "@/app/dumy/dumyData";
import { UserInterface } from "@/app/interfaces/UserInterface";
import { Box, Switch } from "@mui/material";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import Image from "next/image";
import React from "react";

const AllCustomers = () => {
  const columns: MRT_ColumnDef<UserInterface>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 50,
    },
    {
      accessorFn: ({ first_name, last_name }) => `${first_name} ${last_name}`,
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 150,
    },
    {
      accessorKey: "phone_number",
      header: "Phone",
      size: 75,
    },
    {
      accessorKey: "blocked",
      header: "Blocked Status",
      Cell: ({ row }) => {
        return <Switch color="secondary" value={row.original.blocked} />;
      },
    },
    {
      accessorKey: "image",
      header: "Image",
      size: 60,
      Cell: ({ row }) => {
        return (
          <Box>
            <Image
              src={row.original.image}
              width={75}
              height={75}
              style={{ borderRadius: "50%" }}
              alt={row.original.first_name}
            />
          </Box>
        );
      },
    },
  ];
  const table = Table({
    data: customers,
    columns,
    enableColumnActions: false,
  });

  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default AllCustomers;
