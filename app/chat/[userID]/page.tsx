"use client";
import { ChatCard } from "@/app/interfaces/ChatCard";
import { SET_SELECTED_CONVERSATION } from "@/app/store/slices/chatSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import NoSelectedConversation from "@/public/svgAssets";
import {
  ChatBubble,
  ChatBubbleOutline,
  ChatBubbleOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import {
  alpha,
  Avatar,
  Box,
  BoxProps,
  Divider,
  FormControl,
  getContrastRatio,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  params: {
    userID: number;
  };
}

const ConversationHeader = () => {
  return (
    <Typography
      sx={{
        fontSize: "32px",
        fontWeight: "800",
        mb: 3,
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <ChatBubbleOutline sx={{ fontSize: "32px" }} />
      Chats
    </Typography>
  );
};

const Conversations = ({ conversations }: { conversations: ChatCard[] }) => {
  return (
    <Box
      sx={{
        width: {xs : "100%" , sm : "320px"},
        p: 2,
        boxShadow: (theme) =>
          `inset 2px 2px 15px 0px ${alpha(theme.palette.primary.dark, 0.3)}`,
        backdropFilter: "blur(10px)",
        height: {xs : "100%" , sm :"calc(100vh - 30px)"},
        my: "auto",
        ml: {xs : 0 , sm : 1},
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
      <ConversationHeader />
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
          <ConversationCard key={conversation.id} conversation={conversation} />
        ))}
      </Box>
    </Box>
  );
};

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

const ChatBody = () => {
  const { selctedConversation } = useSelector((state: RootState) => state.chat);
  const containerMessages = useRef();
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

const ChatHeader = () => {
  const { selctedConversation } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        height: "60px",
        boxShadow: (theme) =>
          `2px 4px 15px -6px ${alpha(theme.palette.primary.main, 0.4)}`,
        position: "sticky",
        top: "0",
        borderRadius: "5px",
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 40, height: 40 }}
          src={selctedConversation?.image}
        />
        <Typography ml={1}>{selctedConversation?.name}</Typography>
      </Box>
      <IconButton
        sx={{
          display: { sm: "none" },
        }}
        onClick={() => {
          dispatch(
            SET_SELECTED_CONVERSATION({
              conversation: null,
              id: null,
            })
          );
        }}
      >
        <ExitToAppOutlined />
      </IconButton>
    </Box>
  );
};

const NoSelectedConversationYet = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <NoSelectedConversation />
      <Typography
        sx={{
          "& .marked": {
            color: "primary.main",
          },
        }}
      >
        Select a conversation or start a <span className="marked">new one</span>
      </Typography>
    </Box>
  );
};

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
};

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

const Chat = ({ params: { userID } }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? <MobileChatLayout /> : <WebChatLayout />;
};

export default Chat;
