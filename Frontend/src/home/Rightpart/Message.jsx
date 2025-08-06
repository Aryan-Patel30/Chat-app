import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user.id; // Changed from _id to id to match the auth data
  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-gray-700"; // Added contrast for received messages

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <div className="p-2 lg:p-4">
        <div className={`chat ${chatName}`}>
          <div
            className={`chat-bubble text-white ${chatColor} max-w-[80%] lg:max-w-xs text-sm lg:text-base break-words`}
          >
            {message.message}
          </div>
          <div className="chat-footer text-xs lg:text-sm opacity-70">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
