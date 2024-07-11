"use client";
import EyeIcon from "@/app/components/Icons/EyeIcon";
import { Table } from "@/app/components/Table/table";
import { merchants } from "@/app/dumy/dumyData";
import { MerchantInterface } from "@/app/interfaces/UserInterface";
import { Delete, Edit, ErrorOutline, VerifiedUser } from "@mui/icons-material";
import { Box, Icon, IconButton, SvgIcon } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllMerchant = () => {
  const columns: MRT_ColumnDef<MerchantInterface>[] = [
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
      size: 100,
    },
    {
      accessorKey: "verified",
      header: "Verified",
      Cell: ({ row }) => {
        return row.original.verified ? (
          <IconButton
            sx={{
              backgroundImage: (theme) =>
                `linear-gradient(90deg , ${theme.palette.primary.light} , ${theme.palette.primary.dark})`,
              color: "common.white",
            }}
          >
            <VerifiedUser />
          </IconButton>
        ) : (
          <IconButton color="error">
            <ErrorOutline />
          </IconButton>
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
    data: merchants,
    columns,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box>
        <IconButton component={Link} href={`/admin/merchant/${row.original.id}`} color="secondary" onClick={() => console.info("Edit")}>
          <EyeIcon />
        </IconButton>
      </Box>
    ),
  });

  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default AllMerchant;
