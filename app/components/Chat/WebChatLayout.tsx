"use client"
import { RootState } from '@/app/store/store';
import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Conversations from './Conversations';
import NoSelectedConversationYet from './NoSelectedConversationYet';
import MainChat from './MainChat';

const WebChatLayout = () => {
    const { selctedConversation, conversations } = useSelector(
        (state: RootState) => state.chat
      );
      return (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
          }}
        >
          <Conversations conversations={conversations} />
    
          <Box
            sx={{
              width: { xs: "100%", sm: "calc(100% - 320px)" },
              height: "100vh",
              py: 2,
            }}
          >
            {!selctedConversation ? <NoSelectedConversationYet /> : <MainChat />}
          </Box>
        </Box>
      );
}

export default WebChatLayout