import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../Context/useSendMessage";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !message.trim()) return; // Prevent sending if loading or message is empty
    await sendMessages(message);
    if (message.trim() !== "") {
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 px-2 lg:px-4 h-[60px] lg:h-[10vh] text-center bg-gray-800 text-gray-300">
        <div className="flex-1 lg:w-[70%] flex items-center justify-between p-1 rounded-lg bg-gray-900">
          <input
            type="text"
            placeholder="Type here"
            className="input type-input w-full text-sm lg:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="text-2xl lg:text-3xl hover:bg-slate-600 duration-300 cursor-pointer rounded-md p-2">
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
