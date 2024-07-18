"use client";
import { alpha, useTheme } from "@mui/material";
import {
  MRT_RowData,
  MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";

export const Table = <T extends MRT_RowData>(props: MRT_TableOptions<T>) => {
  const theme = useTheme();
  const table = useMaterialReactTable({
    muiTablePaperProps: {
      sx: {
        backgroundColor: "transparent",
      },
    },
    muiTableBodyRowProps: {
      sx: {
        backgroundColor: "transparent",
        "&:last-child .MuiTableCell-root": {
          borderBottom: "none",
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderBottomColor: alpha(theme.palette.secondary.main, 0.3),
      },
    },
    muiTableHeadRowProps: {
      sx: {
        backgroundColor: "transparent",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        borderBottom: "none",
      },
    },
    enableTopToolbar: false,
    ...props,
  });
  return table;
};
