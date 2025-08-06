import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../Context/useGetMessage.js";
import Loading from "../../Components/Loading.jsx";
import useGetSocketMessage from "../../Context/useGetSocketMessage.js";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();
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
    <div className="p-1 lg:p-4 flex flex-col overflow-y-auto flex-1 lg:flex-1 mobile-messages lg:h-auto scroll-user">
      {loading ? (
        <Loading />
      ) : (
        messageList.length > 0 &&
        messageList.map((message, index) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      )}
      {!loading && messageList.length === 0 && (
        <div>
          <p className="text-center mt-[25%] px-4 text-sm lg:text-base">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
