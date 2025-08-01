import React, { useEffect, useState } from 'react'
import useConversation  from '../zustand/useConversation';
import axios from 'axios';

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessage, selectedConversation} = useConversation();

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
           if (selectedConversation && selectedConversation._id) {
                try {
                const response = await axios.get(`/api/messages/get/${selectedConversation._id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setMessage(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
                setLoading(false);
            }
            }
        }
        fetchMessages();

    }, [selectedConversation, setMessage]);

  return { loading, messages };
    }

export default useGetMessage
