import React from "react";
import useConversation from "../../zustand/useConversation";

function Chatuser() {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);

  return (
    <div className="flex space-x-3 items-center h-[9vh] justify-center p-1 bg-gray-800 hover:bg-gray-700 duration-300 ">
      <div className="avatar avatar-online">
        <div className="w-13 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">
          {selectedConversation?.fullname || "No chat selected"}
        </h1>
        <span className="text-sm">
          {selectedConversation ? "Offline" : " "}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
