"use client";
import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import Category from "@/app/interfaces/CatgeoryInterface";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

const DeleteCategoryButton = ({category} : {category : Category}) => {
  return (
    <DeleteButton
      dialogComponent={({ handleClose }) => {
        return (
          <>
            <DialogTitle>Delete Catgeory</DialogTitle>
            <DialogContent>
              <DialogContentText>
                are you sure you want to delete {category.name} from list of
                categories
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="error" variant="contained">
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
  );
};

export default DeleteCategoryButton;
