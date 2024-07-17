import { Box, TextField } from '@mui/material';
import React from 'react'
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';

const MainChat = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          px: { xs: 0, sm: 1 },
        }}
      >
        <ChatHeader />
        <ChatBody />
        <TextField fullWidth variant="standard" label="Message" />
      </Box>
    );
  };
export default MainChat