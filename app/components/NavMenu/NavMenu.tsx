"use client"
import { Button, Fade, Menu, alpha } from "@mui/material";
import React, { ReactNode } from "react";

type NavMenuProps = {
    title: string;
    linksComponent: (handleClose: () => void) => ReactNode;
  };

const NavMenu = ({
  linksComponent,
  title,
}: Readonly<NavMenuProps>) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
        open={open}

        onClose={handleClose}
        TransitionComponent={Fade}
        slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                mt: 1.5,
                backgroundColor: alpha('#fff' , 0.2),
                backdropFilter : 'blur(10px)',
                borderRadius: "6px",
                maxHeight : '600px',
                overflowY : 'auto',
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            },
          }}
      >
        {linksComponent(handleClose)}
      </Menu>
    </>
  );
};

export default NavMenu;
