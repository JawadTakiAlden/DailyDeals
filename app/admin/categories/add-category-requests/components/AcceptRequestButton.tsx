import DialogButtonController from "@/app/components/DialogButtonController/DialogButtonController";
import AddCategoryRequest from "@/app/interfaces/AddCategoryRequest";
import { PendingOutlined, PublishOutlined } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { MRT_Row } from "material-react-table";
import React from "react";
import * as yup from "yup";
const AcceptRequestButton = ({ row }: { row: MRT_Row<AddCategoryRequest> }) => {
  const { submitForm, handleBlur, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        admin_name: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: yup.object({
        admin_name: yup.string().max(500).nullable(),
      }),
    });
  return (
    <DialogButtonController
      dialogComponent={({ handleClose }) => {
        return (
          <>
            <DialogTitle>Accept add category request</DialogTitle>
            <DialogContent>
              <DialogContentText>
                you are accept add {row.original.category}{" "}
                {row.original.parent?.name ? "sub category" : "category"}{" "}
                request by {row.original.user.name} , are you sure from this
                action
                <br />
                after accept will automaticly added to system
              </DialogContentText>
              <FormControl
                margin="dense"
                fullWidth
                error={!!touched.admin_name && !!errors.admin_name}
              >
                <TextField
                  title="Name To Publish"
                  placeholder="the name to publish"
                  value={values.admin_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="admin_name"
                />
              </FormControl>
              <Typography color={"warning.light"} variant="caption">
                the name of catgeory for publish , this field not required , and
                if you dont put it the name of category will be the same
                requsted name
              </Typography>
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
              <Button
                onClick={() => {
                  handleClose();
                }}
                color="success"
                autoFocus
              >
                Cancel
              </Button>
            </DialogActions>
          </>
        );
      }}
      title="accept"
      iconButtonProps={{
        color: "success",
      }}
      icon={<PublishOutlined />}
    />
  );
};

export default AcceptRequestButton;
