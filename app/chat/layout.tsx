import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const ChatLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};

export default ChatLayout;
