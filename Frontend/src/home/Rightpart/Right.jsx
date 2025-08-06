import React, { useEffect, useState } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation";
import { useAuth } from "../../Context/AuthProvider";
import Left from "../Leftpart/Left";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // Cleanup function that only runs when component unmounts
    return () => setSelectedConversation(null);
  }, []); // Empty dependency array means it only runs on mount/unmount

  const handleUserSelect = () => {
    // Close the drawer when a user is selected on mobile
    const drawerCheckbox = document.getElementById("chat-drawer");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
    const welcomeDrawerCheckbox = document.getElementById("welcome-drawer");
    if (welcomeDrawerCheckbox) {
      welcomeDrawerCheckbox.checked = false;
    }
  };

  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected onUserSelect={handleUserSelect} />
      ) : (
        <>
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-col lg:w-full lg:h-screen bg-slate-900 text-gray-300">
            <Chatuser />
            <Messages />
            <Typesend />
          </div>

          {/* Mobile Layout with Drawer */}
          <div className="lg:hidden w-full bg-slate-900 text-gray-300 relative">
            <div className="drawer">
              <input
                id="chat-drawer"
                type="checkbox"
                className="drawer-toggle"
              />

              {/* Main Content */}
              <div className="drawer-content flex flex-col h-screen">
                <Chatuser />
                <Messages />
                <Typesend />
              </div>

              {/* Drawer Sidebar for Mobile */}
              <div className="drawer-side z-50">
                <label htmlFor="chat-drawer" className="drawer-overlay"></label>
                <aside className="w-80 min-h-full bg-black text-gray-300">
                  <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold">Messages</h2>
                    <label
                      htmlFor="chat-drawer"
                      className="btn btn-sm btn-circle btn-ghost"
                    >
                      ✕
                    </label>
                  </div>
                  <Left onUserSelect={handleUserSelect} />
                </aside>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Right;

const NoChatSelected = ({ onUserSelect }) => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:h-screen lg:justify-center lg:items-center lg:flex-col text-gray-300 w-full bg-slate-900">
        <div className="text-center px-4">
          <h1 className="text-2xl mb-2">
            Welcome
            <span className="font-semibold text-2xl ml-2">
              {authUser.user.fullname}
            </span>
          </h1>
          <p className="text-base text-gray-400 mb-4">
            No chat selected. Please select a chat to start messaging.
          </p>
        </div>
      </div>

      {/* Mobile Layout with Drawer */}
      <div className="lg:hidden">
        <div className="drawer">
          <input
            id="welcome-drawer"
            type="checkbox"
            className="drawer-toggle"
          />

          {/* Main Welcome Content */}
          <div className="drawer-content flex h-screen justify-center items-center flex-col text-gray-300 w-full bg-slate-900">
            {/* Mobile Menu Button */}
            <label
              htmlFor="welcome-drawer"
              className="fixed top-4 left-4 z-40 btn btn-square btn-ghost"
            >
              <svg
                className="w-6 h-6"
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

            <div className="text-center px-4">
              <h1 className="text-xl mb-2">
                Welcome
                <span className="font-semibold text-xl ml-2">
                  {authUser.user.fullname}
                </span>
              </h1>
              <p className="text-sm text-gray-400 mb-4">
                No chat selected. Please select a chat to start messaging.
              </p>
              <label htmlFor="welcome-drawer" className="btn btn-primary">
                Browse Chats
              </label>
            </div>
          </div>

          {/* Drawer Sidebar */}
          <div className="drawer-side z-50">
            <label htmlFor="welcome-drawer" className="drawer-overlay"></label>
            <aside className="w-80 min-h-full bg-black text-gray-300">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Messages</h2>
                <label
                  htmlFor="welcome-drawer"
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  ✕
                </label>
              </div>
              <Left onUserSelect={onUserSelect} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
