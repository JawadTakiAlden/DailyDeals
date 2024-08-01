import DialogButtonController from "@/app/components/DialogButtonController/DialogButtonController";
import AddCategoryRequest from "@/app/interfaces/AddCategoryRequest";
import { PendingOutlined } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { MRT_Row, MRT_RowData } from "material-react-table";
import React from "react";
import * as yup from "yup";

const RejectButton = ({ row }: { row: MRT_Row<AddCategoryRequest> }) => {
  const { submitForm, handleBlur, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        message: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: yup.object({
        message: yup.string().max(500).required("message is required field"),
      }),
    });
  return (
    <DialogButtonController
      dialogComponent={({ handleClose }) => {
        return (
          <>
            <DialogTitle>Reject add category request</DialogTitle>
            <DialogContent>
              <DialogContentText>
                you are reject add {row.original.category}{" "}
                {row.original.parent?.name ? "sub category" : "category"}{" "}
                request by {row.original.user.name} , are you sure from this
                action
                <br />
                provide the user with reason of reject his request
              </DialogContentText>
              <FormControl
                margin="dense"
                fullWidth
                error={!!touched.message && !!errors.message}
              >
                <TextField
                  title="Message"
                  placeholder="the category already found ..."
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  multiline
                  minRows={4}
                  maxRows={6}
                  name="message"
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  submitForm();
                }}
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
      title="reject the request"
      icon={<PendingOutlined />}
    />
  );
};

export default RejectButton;
