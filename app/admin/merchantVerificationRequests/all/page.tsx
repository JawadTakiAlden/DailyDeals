"use client";
import EyeIcon from "@/app/components/Icons/EyeIcon";
import { Table } from "@/app/components/Table/table";
import { verifications } from "@/app/dumy/dumyData";
import Verification from "@/app/interfaces/Verification";
import { GolfCourse } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ListItem,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllMerchantVerificationRequests = () => {
  const columns: MRT_ColumnDef<Verification>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 50,
    },
    {
      accessorKey: "merchant_name",
      header: "Merchant Name",
      size: 150,
    },
    {
      accessorKey: "store_name",
      header: "Store Name",
      size: 150,
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ row }) => {
        return (
          <Typography
            sx={{
              p: 1,
              borderRadius: "15px",
              width: "100px",
              textAlign : 'center',
              backgroundColor:
                row.original.status === "accepted"
                  ? "success.main"
                  : row.original.status === "pending"
                  ? "warning.main"
                  : "error.main",
            }}
          >
            {row.original.status}
          </Typography>
        );
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
              src={row.original.commercial_record}
              width={75}
              height={75}
              style={{ borderRadius: "50%" }}
              alt={row.original.commercial_record}
            />
          </Box>
        );
      },
    },
  ];
  const table = Table({
    data: verifications,
    columns,
    enableRowActions: true,
    renderRowActions: ({row}) => {
      return (
        <IconButton component={Link} href={`/admin/merchantVerificationRequests/${row.original.id}?redirectLink=/admin/merchantVerificationRequests/all`} color="secondary">
          <EyeIcon />
        </IconButton>
      );
    },
  });

  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default AllMerchantVerificationRequests;
