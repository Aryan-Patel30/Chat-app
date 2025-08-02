import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [], // Initialize as empty array
  setMessages: (messages) => set({ messages: messages || [] }), // Ensure messages is always an array
}));

export default useConversation;
