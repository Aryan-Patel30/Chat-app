import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../Context/SocketContext";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  }

  return (
    <div className="flex space-x-3 items-center h-[9vh] justify-center p-1 bg-gray-800 hover:bg-gray-700 duration-300 ">
      <div className={`avatar avatar-${getOnlineUsersStatus(selectedConversation._id)}`}> 
        <div className="w-13 rounded-full ring-primary ring-offset-base-100 ring-2 ring-offset-2 overflow-hidden">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">
          {selectedConversation?.fullname || "No chat selected"}
        </h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
