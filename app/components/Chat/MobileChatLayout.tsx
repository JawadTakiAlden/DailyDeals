"use client"
import { RootState } from '@/app/store/store';
import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Conversations from './Conversations';
import MainChat from './MainChat';

const MobileChatLayout = () => {
    const { selctedConversation, conversations } = useSelector(
      (state: RootState) => state.chat
    );
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        {selctedConversation ? (
          <MainChat />
        ) : (
          <Conversations
            conversations={conversations}
          />
        )}
      </Box>
    );
  };

export default MobileChatLayout