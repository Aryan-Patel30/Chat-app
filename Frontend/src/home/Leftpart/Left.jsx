import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left({ onUserSelect }) {
  return (
    <div className="w-full bg-black text-gray-300 h-full flex flex-col">
      <Search />
      <Users onUserSelect={onUserSelect} />
      <Logout />
    </div>
  );
}

export default Left;
