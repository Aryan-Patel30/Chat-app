import React from "react";
import User from "./User";
import GetAllUsers from "../../Context/GetAllUsers";

function Users({ onUserSelect }) {
  const [allusers, loading] = GetAllUsers();

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <h1 className="px-4 lg:px-8 py-2 text-white font-semibold bg-slate-800 rounded-md mx-2 lg:mx-0">
        Messages
      </h1>
      <div className="scroll-user flex flex-col overflow-y-auto flex-1 py-2 lg:py-4 space-y-1 lg:space-y-2 px-2 lg:px-0">
        {allusers.map((user, index) => (
          <User key={index} user={user} onUserSelect={onUserSelect} />
        ))}
      </div>
    </div>
  );
}

export default Users;
