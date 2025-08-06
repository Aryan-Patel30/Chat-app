import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../Context/SocketContext";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  };

  return (
    <div className="flex space-x-3 items-center h-[9vh] min-h-[60px] justify-center lg:justify-center p-3 lg:p-4 bg-gray-800 hover:bg-gray-700 duration-300">
      {/* Mobile Menu Button - Only show on mobile */}
      <label
        htmlFor="chat-drawer"
        className="lg:hidden btn btn-square btn-ghost absolute left-3"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>

      <div className="flex space-x-3 items-center">
        <div
          className={`avatar avatar-${getOnlineUsersStatus(
            selectedConversation._id
          )}`}
        >
          <div className="w-10 lg:w-12 rounded-full ring-primary ring-offset-base-100 ring-2 ring-offset-2 overflow-hidden">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg lg:text-xl truncate">
            {selectedConversation?.fullname || "No chat selected"}
          </h1>
          <span className="text-xs lg:text-sm text-gray-400">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
