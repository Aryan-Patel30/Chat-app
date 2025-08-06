import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../Context/SocketContext.jsx";

function User({ user, onUserSelect }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const handleUserClick = () => {
    setSelectedConversation(user);
    if (onUserSelect) {
      onUserSelect(); // Close drawer on mobile
    }
  };

  return (
    <div
      className={`hover:bg-slate-600 duration-300 cursor-pointer rounded-md mx-2 lg:mx-0 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={handleUserClick}
    >
      <div className="flex space-x-3 lg:space-x-4 px-3 lg:px-6 py-3 lg:py-4 hover:bg-slate-800 duration-300 cursor-pointer rounded-md items-center">
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="ring-primary ring-offset-base-100 w-10 lg:w-13 rounded-full ring-1 ring-offset-1 overflow-hidden">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-sm lg:text-base truncate">
            {user.fullname}
          </h1>
          <span className="text-xs lg:text-sm text-gray-400 truncate block">
            {user.email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default User;
