import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div className="p-1 flex flex-col overflow-y-auto h-[calc(91vh-10vh)] scroll-user">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;

