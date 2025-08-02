import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const response = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessages(response.data.messages);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch messages:", error);
          setLoading(false);
        }
      }
    };
    fetchMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
