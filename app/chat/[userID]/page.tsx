"use client";
import NoSelectedConversation from "@/public/svgAssets";
import {
  alpha,
  Avatar,
  Box,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    userID: number;
  };
}

interface Message {
  id: number;

  sender: number;

  text: string;

  time: string;
}

interface ChatCard {
  id: number;
  name: string;
  image: string; // real link for person image
  messages: Message[];
}

const conversations: ChatCard[] = [
  {
    id: 1,
    name: "Alice Smith",
    image: "https://picsum.photos/id/1011/200/200",
    messages: [
      { id: 1, sender: 1, text: "Hi there!", time: "09:25" },
      { id: 2, sender: 2, text: "Hello!", time: "09:25" },
    ],
  },
  {
    id: 2,
    name: "Bob Johnson",
    image: "https://picsum.photos/id/1012/200/200",
    messages: [
      { id: 1, sender: 1, text: "Good morning!", time: "Yesterday" },
      { id: 2, sender: 2, text: "Morning!", time: "Yesterday" },
    ],
  },
  {
    id: 3,
    name: "Charlie Brown",
    image: "https://picsum.photos/id/1013/200/200",
    messages: [
      {
        id: 1,
        sender: 1,
        text: "Are you coming to the party?",
        time: "2024-07-09",
      },
      { id: 2, sender: 2, text: "Yes, I'll be there.", time: "2024-07-09" },
    ],
  },
  {
    id: 4,
    name: "Daisy Ridley",
    image: "https://picsum.photos/id/1014/200/200",
    messages: [
      { id: 1, sender: 1, text: "How are you?", time: "09:25" },
      { id: 2, sender: 2, text: "I'm good, thanks!", time: "09:25" },
    ],
  },
  {
    id: 5,
    name: "Eve Torres",
    image: "https://picsum.photos/id/1015/200/200",
    messages: [
      { id: 1, sender: 1, text: "Let's meet up.", time: "Yesterday" },
      { id: 2, sender: 2, text: "Sure, where?", time: "Yesterday" },
    ],
  },
  {
    id: 6,
    name: "Frank Castle",
    image: "https://picsum.photos/id/1016/200/200",
    messages: [
      { id: 1, sender: 1, text: "Did you get the report?", time: "2024-07-08" },
      { id: 2, sender: 2, text: "Yes, I did.", time: "2024-07-08" },
    ],
  },
  {
    id: 7,
    name: "Grace Hopper",
    image: "https://picsum.photos/id/1011/200/200",
    messages: [
      { id: 1, sender: 1, text: "Happy Birthday!", time: "09:25" },
      { id: 2, sender: 2, text: "Thank you!", time: "09:25" },
    ],
  },
  {
    id: 8,
    name: "Hank Pym",
    image: "https://picsum.photos/id/1018/200/200",
    messages: [
      {
        id: 1,
        sender: 1,
        text: "Are we still on for tomorrow?",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: 2,
        text: "Yes, looking forward to it.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 9,
    name: "Ivy Green",
    image: "https://picsum.photos/id/1019/200/200",
    messages: [
      {
        id: 1,
        sender: 1,
        text: "Can you send me the files?",
        time: "2024-07-07",
      },
      { id: 2, sender: 2, text: "Sure, sending now.", time: "2024-07-07" },
    ],
  },
  {
    id: 10,
    name: "Jake Long",
    image: "https://picsum.photos/id/1020/200/200",
    messages: [
      { id: 1, sender: 1, text: "What's the plan?", time: "09:25" },
      { id: 2, sender: 2, text: "Let's discuss over lunch.", time: "09:25" },
    ],
  },
];

const Chat = ({ params: { userID } }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "320px",
          p: 2,
          backgroundColor: (theme) => alpha(theme.palette.common.white, 0.2),
          backdropFilter: "blur(10px)",
          height: "calc(100vh - 30px)",
          my: "auto",
          ml: 1,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "800",
            mb: 3,
          }}
        >
          Chats
        </Typography>
        <FormControl>
          <InputLabel>Search</InputLabel>
          <OutlinedInput
            label="Search"
            type="search"
            sx={{
              borderRadius: "30px",
              height: "50px",
            }}
          />
        </FormControl>
        <Divider
          sx={{
            my: 2,
          }}
        />
        <Box>
          {conversations.map((conversation) => (
            <Box
              key={conversation.id}
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                p: 1,
                backgroundColor: (theme) =>
                  alpha(theme.palette.common.white, 0.05),
                borderRadius: "10px",
                mb: 2,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.common.white, 0.09),
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
                      color: "grey.500",
                      fontSize: "16px",
                      maxWidth: "150px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      flex: 1,
                    }}
                  >
                    {conversation.messages[0].text}
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
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "calc(100% - 320px)",
          px: 1,
          py: 2,
          backgroundImage: (theme) =>
            `linear-gradient(to right , ${theme.palette.background.default} , ${theme.palette.background.paper})`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection : 'column'
          }}
        >
          <NoSelectedConversation />
          <Typography sx={{
            "& .marked" : {
              color : 'primary.main'
            }
          }}>Select a conversation or start a <span className="marked">new one</span></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
