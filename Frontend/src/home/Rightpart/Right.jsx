import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation";
import { useAuth } from "../../Context/AuthProvider";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    // Cleanup function that only runs when component unmounts
    return () => setSelectedConversation(null);
  }, []); // Empty dependency array means it only runs on mount/unmount
  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="w-[70%] bg-slate-900 text-gray-300">
            <Chatuser />
            <Messages />
            <Typesend />
          </div>
        </>
      )}
    </>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="flex h-sceen justify-center items-center flex-col text-gray-300 w-[70%] bg-slate-900">
        <h1 className="text-center">
          Welcome
          <span className="font-semibold text-xl ml-2">{authUser.user.fullname}</span>
        </h1>
        <p>
          No chat selected. Please select a chat from the left sidebar to start
          messaging.
        </p>
      </div>
    </>
  );
};
