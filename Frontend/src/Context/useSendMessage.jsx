import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import api from "../utils/api";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);

    try {
      const response = await api.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      const authUser = JSON.parse(localStorage.getItem("ChatApp"));
      const newMessage = {
        ...response.data.newMessage, // Extract just the newMessage from response
        senderId: authUser.user.id,
      };
      setMessages([...messages, newMessage]);
      setLoading(false);
    } catch (error) {
      console.error("Failed to send messages:", error);
      setLoading(false);
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;
