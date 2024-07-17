import MainChatComponent from "@/app/components/Chat";
import React from "react";

interface Props {
  params: {
    userID: number;
  };
}

const Chat = ({ params: { userID } }: Props) => {
  return <MainChatComponent />
};

export default Chat;
