import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../Context/useGetMessage.js";
import Loading from "../../Components/Loading.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();
  const messageList = messages || []; // Ensure messages is always an array

  const lastMsgRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return (
    <div className="p-1 flex flex-col overflow-y-auto h-[calc(91vh-10vh)] scroll-user">
      {loading ? (
        <Loading />
      ) : (
        messageList.length > 0 &&
        messageList.map((message,index) => (
          <div key={message._id} ref={lastMsgRef}>
          <Message message={message} />
          </div>
        ))
      )}
      {!loading && messageList.length === 0 && (
        <div>
          <p className="text-center mt-[25%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
