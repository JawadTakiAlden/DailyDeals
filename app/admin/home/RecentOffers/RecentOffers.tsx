"use client";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { Offer } from "@/app/interfaces/OfferInterface";
import { Box, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";

const offers: Offer[] = [
  {
    id: 1,
    name: "Summer Discount",
    created_at: "2024-05-01T10:00:00Z",
    branch_name: "Downtown",
    offer_type: "discount_offer",
  },
  {
    id: 2,
    name: "Winter Gift",
    created_at: "2024-01-15T09:30:00Z",
    branch_name: "Uptown",
    offer_type: "gift_offer",
  },
  {
    id: 3,
    name: "Exclusive Extra",
    created_at: "2024-03-20T12:45:00Z",
    branch_name: "Suburban",
    offer_type: "extra_offer",
  },
  {
    id: 4,
    name: "Holiday Percentage",
    created_at: "2024-12-25T08:00:00Z",
    branch_name: "Airport",
    offer_type: "percentage_offer",
  },
  {
    id: 5,
    name: "Back-to-School Discount",
    created_at: "2024-08-15T11:20:00Z",
    branch_name: "Main Street",
    offer_type: "discount_offer",
  },
];

const RecentOffers = () => {
  const columns = useMemo<MRT_ColumnDef<Offer>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        // size: 150,
      },
      {
        accessorKey: "name",
        header: "Offer Name",
        // size: 150,
      },
      {
        accessorKey: "created_at", //normal accessorKey
        header: "Created At",
        // size: 200,
      },
      {
        accessorKey: "branch_name",
        header: "Branch",
        // size: 150,
      },
      {
        accessorKey: "offer_type",
        header: "State",
        // size: 150,
      },
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data: offers,
    enableTopToolbar: false,
    enableColumnActions: false,
    enableSorting: false,
    enableTableFooter: false,
    enableBottomToolbar: false,
    muiTableBodyRowProps: {
      sx: {
        backgroundColor: "transparent",
        "&:last-child .MuiTableCell-root": {
          boxShadow: "0 0 10px -6px primary.main",
          border: "none",
        },
      },
    },
    muiTablePaperProps: {
      sx: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    muiTableHeadRowProps: {
      sx: {
        backgroundColor: "transparent",
      },
    },
  });
  return (
    <Box>
      <SectionTitle
      >
        Recent 5 Offers
      </SectionTitle>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default RecentOffers;
