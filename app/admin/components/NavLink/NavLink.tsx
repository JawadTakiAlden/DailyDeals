import NavMenu from "@/app/components/NavMenu/NavMenu";
import { ChatOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavLink = () => {
  return (
    <>
      <Button component={Link} href="/admin/home">
        Dashboard
      </Button>
      <NavMenu
        title="Accounts"
        linksComponent={(handleClose) => {
          return (
            <>
              <MenuItem
                component={Link}
                href="/admin/merchant/all"
                onClick={handleClose}
              >
                Merchants
              </MenuItem>
              <MenuItem
                component={Link}
                href="/admin/customer/all"
                onClick={handleClose}
              >
                Customers
              </MenuItem>
              <MenuItem
                component={Link}
                href="/admin/merchantVerificationRequests/all"
                onClick={handleClose}
              >
                verification requsts
              </MenuItem>
            </>
          );
        }}
      />
      <NavMenu
        title="Categories"
        linksComponent={(handleClose) => {
          return (
            <>
              <MenuItem onClick={handleClose}>Categories</MenuItem>
              <MenuItem onClick={handleClose}>Create Category</MenuItem>
              <MenuItem onClick={handleClose}>Categories requests</MenuItem>
            </>
          );
        }}
      />

      <NavMenu
        title="Ads"
        linksComponent={(handleClose) => {
          return (
            <>
              <MenuItem onClick={handleClose}>Ads</MenuItem>
              <MenuItem onClick={handleClose}>Ads Requests</MenuItem>
            </>
          );
        }}
      />
      <NavMenu
        title="Others"
        linksComponent={(handleClose) => {
          return (
            <>
              <MenuItem
                component={Link}
                href="/admin/faq/all"
                onClick={handleClose}
              >
                FAQ
              </MenuItem>
              <MenuItem onClick={handleClose}>About app</MenuItem>
              <MenuItem onClick={handleClose}>Privacy policy</MenuItem>
              <MenuItem onClick={handleClose}>Terms and conditions</MenuItem>
            </>
          );
        }}
      />
      <IconButton
        // sx={{
        //   backgroundColor: "primary.main",
        //   "&:hover": {
        //     backgroundColor: "primary.dark",
        //   },
        // }}
        component={Link}
        href="/chat/2"
      >
        <ChatOutlined />
      </IconButton>
    </>
  );
};

export default NavLink;
