import { IconButton, IconButtonProps } from "@mui/material";
import Link, { LinkProps } from "next/link";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  linkProps: LinkProps;
  iconButtonProps?: IconButtonProps;
  icon: ReactElement<typeof IconButton>;
}

const LinkIconButton = ({ linkProps, iconButtonProps, icon }: Props) => {
  return (
    <IconButton component={Link} color="warning" {...linkProps} {...iconButtonProps}>
      {icon}
    </IconButton>
  );
};

export default LinkIconButton;
