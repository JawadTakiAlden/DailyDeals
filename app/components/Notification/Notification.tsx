"use client";
import { MarkAsUnread, NotificationsActive } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";

const notifications = [
  "Your order has been shipped and is on its way!",
  "New message received. Check your inbox.",
  "Don’t miss out! Limited-time offer just for you.",
  "Your subscription is about to expire. Renew now!",
  "System update available. Restart to apply changes.",
  "You have a new friend request.",
  "Your package has been delivered. Enjoy!",
  "Reminder: Your appointment is scheduled for tomorrow.",
  "New comment on your post. Click to view.",
  "Battery low. Please charge your device.",
  "Reminder: Your appointment is scheduled for tomorrow.",
  "New comment on your post. Click to view.",
  "Battery low. Please charge your device.",
];

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title="Notification">
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Badge color="secondary" badgeContent={99}>
            <NotificationsActive />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Button color="primary" fullWidth sx={{mb : 1}}>
            mark all as read
        </Button>
        {notifications.map((notification, i) => (
          <>
            <Typography
              key={i}
              sx={{
                my: 1,
                px: 2,
                maxWidth: "300px",
              }}
            >
              {notification}
            </Typography>
            {i !== notification.length - 1 ? <Divider /> : undefined}
          </>
        ))}
      </Menu>
    </Box>
  );
};

export default Notification;
