"use client"
import { RootState } from '@/app/store/store';
import { alpha, Box, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';


const ChatBody = () => {
    const { selctedConversation , selectedConversationID } = useSelector((state: RootState) => state.chat);
    const containerMessages = useRef<HTMLDivElement | null>();
    useEffect(() => {
        if (containerMessages.current) {
          containerMessages.current.scrollTop = containerMessages.current.scrollHeight;
        }
      }, [selectedConversationID]);
    return (
      <Box
        sx={{
          display: "flex",
          height: "calc(100% - 60px - 48px)",
          overflowY: "auto",
          flexDirection: "column",
          py: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "5px",
        }}
        ref={containerMessages}
      >
        {selctedConversation?.messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              backgroundColor: msg.sender === 1 ? "primary.main" : "",
              p: 1,
              mb: 2,
              maxWidth: "60%",
              alignSelf: msg.sender === 1 ? "flex-end" : "flex-start",
              borderRadius: "4px",
              pb: "20px",
              position: "relative",
              boxShadow: (theme) =>
                msg.sender !== 1
                  ? `inset 1px 1px 10px -4px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`
                  : "",
            }}
          >
            <Typography
              sx={{
                color: (theme) =>
                  msg.sender === 1 ? theme.palette.primary.contrastText : "",
              }}
            >
              {msg.text}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                columnGap: "4px",
                height: "20px",
                bottom: "0",
                right: "0",
                px: 1,
  
                color: (theme) =>
                  theme.palette.mode === "dark" ? "grey.300" : "grey.700",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                8:15
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };
  

export default ChatBody