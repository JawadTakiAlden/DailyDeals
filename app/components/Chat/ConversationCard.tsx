"use client"
import { ChatCard } from '@/app/interfaces/ChatCard';
import { SET_SELECTED_CONVERSATION } from '@/app/store/slices/chatSlice';
import { alpha, Avatar, Box, Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';


const ConversationCard = ({ conversation }: { conversation: ChatCard }) => {
    const dispatch = useDispatch();
    return (
      <Box
        onClick={() => {
          dispatch(
            SET_SELECTED_CONVERSATION({
              conversation,
              id: conversation.id,
            })
          );
        }}
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          p: 1,
          borderRadius: "10px",
          mb: 2,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
          },
        }}
      >
        <Avatar sx={{ width: 40, height: 40 }} src={conversation.image} />
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "800",
              }}
            >
              {conversation.name}
            </Typography>
            <Typography
              sx={{
                color: (theme) =>
                  theme.palette.mode === "dark" ? "grey.400" : "grey.700",
                fontSize: "16px",
                maxWidth: "150px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                flex: 1,
              }}
            >
              {conversation.messages[conversation.messages.length - 1].text}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            {conversation.messages[0].time}
          </Typography>
        </Box>
      </Box>
    );
  };

export default ConversationCard