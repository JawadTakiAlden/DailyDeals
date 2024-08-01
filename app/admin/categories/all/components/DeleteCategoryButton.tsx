"use client";
import DialogButtonController from "@/app/components/DialogButtonController/DialogButtonController";
import Category from "@/app/interfaces/CatgeoryInterface";
import { Delete } from "@mui/icons-material";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

const DeleteCategoryButton = ({category} : {category : Category}) => {
  return (
    <DialogButtonController
    icon={<Delete />}
    iconButtonProps={{
      color: 'error'
    }}
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
