"use client";
import React, { ReactElement, ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  DialogTitle,
  Icon,
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  variant?: "button" | "iconButton";
  buttonProps?: ButtonProps;
  iconButtonProps?: IconButtonProps;
  tooltipProps?: TooltipProps;
  title? : string,
  icon? : ReactNode,
  dialogProps? : DialogProps
  dialogComponent: ({
    handleClose,
  }: {
    handleClose: () => void;
  }) => ReactElement;
}

const DialogButtonController = ({
  dialogComponent,
  variant = "iconButton",
  buttonProps,
  tooltipProps,
  title,
  icon,
  iconButtonProps,
  dialogProps
}: Props) => {
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
          <Button
            {...buttonProps}
            color="error"
            variant="contained"
            onClick={handleClickOpen}
          >
            {title}
          </Button>
      ) : (
        <Tooltip title={title} {...tooltipProps}>
          <IconButton
            onClick={handleClickOpen}
            color="error"
            {...iconButtonProps}
          >
            {icon}
          </IconButton>
        </Tooltip>
      )}

      <Dialog
        TransitionComponent={Transition}
        {...dialogProps}
        open={open}
        onClose={handleClose}
        // keepMounted
      >
        {dialogComponent({ handleClose })}
      </Dialog>
    </React.Fragment>
  );
};

export default DialogButtonController;
