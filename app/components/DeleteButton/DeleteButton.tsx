import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { title } from "process";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DeleteButton = ({
  dialogComponent = () => {
    return <>edit dialogComponent props to update the dialog conetnt</>;
  },
  variant = "iconButton",
  buttonProps,
  tooltipProps,
}: {
  variant?: "button" | "iconButton";
  dialogComponent?: ({
    handleClose,
  }: {
    handleClose: () => void;
  }) => React.ReactNode;
  buttonProps?: ButtonProps | IconButtonProps;
  tooltipProps?: TooltipProps;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      {variant === "button" ? (
        <Tooltip title="Delete" {...tooltipProps}>
          <Button
            {...(buttonProps as ButtonProps)}
            color="error"
            variant="contained"
            onClick={handleClickOpen}
          >
            Delete
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title="Delete" {...tooltipProps}>
          <IconButton
            onClick={handleClickOpen}
            color="error"
            {...(buttonProps as ButtonProps)}
          >
            <DeleteOutlined />
          </IconButton>
        </Tooltip>
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        {dialogComponent({ handleClose })}
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteButton;
