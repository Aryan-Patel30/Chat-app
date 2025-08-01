import React from "react";
import Message from "./Message";
import useGetMessage from "../../Context/useGetMessage.js";
import Loading from "../../Components/Loading.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();
  return (
    <div className="p-1 flex flex-col overflow-y-auto h-[calc(91vh-10vh)] scroll-user">
      {loading ?(<Loading/>) : (messages.length>0 && messages.map((message)=>(
        <Message key={message._id} message={message} />
      ))) }
      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[25%]">Say! Hi to start the conversation</p>
        </div>
      )}
    </div>
  );
}

export default Messages;

