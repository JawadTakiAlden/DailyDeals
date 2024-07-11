"use client";

import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import FaqInterface from "@/app/interfaces/FaqInterface";
import { Add, DeleteOutlined, EditOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import Link from "next/link";

const FaqRow = ({
  faq,
  open,
  setOpen,
}: {
  faq: FaqInterface;
  open: number | null;
  setOpen: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <Box
      sx={{
        py: 1,
        px: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ flex: 1 }}>{faq.question}</Typography>
        <IconButton
          onClick={() => {
            if (open === faq.id) {
              setOpen(null);
            } else {
              setOpen(faq.id!);
            }
          }}
        >
          <Add
            sx={{
              transform: open === faq.id ? "rotate(45deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          />
        </IconButton>
      </Box>
      <Collapse in={open === faq.id}>
        <Box
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            py: 2,
            px: 1,
            borderRadius: "8px",
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <DeleteButton
              dialogComponent={({ handleClose }) => {
                return (
                  <>
                    <DialogTitle>Delete FAQ</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        are you sure you want to delete {faq.question} from list
                        of frequent questions
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
            <Tooltip title={"Edit"}>
              <IconButton component={Link} href={`/admin/faq/faqFormDetail?redirectLink=/admin/faq/all&task=update&faqID=${faq.id}`} color="warning">
                <EditOutlined />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography>{faq.answer}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FaqRow;
