import React from "react";
import User from "./User";
import GetAllUsers from "../../Context/GetAllUsers";

function Users() {
  const [allusers, loading] = GetAllUsers();
  console.log(allusers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div className="scroll-user flex flex-col overflow-y-auto h-[calc(83.15vh-9vh)] py-4 space-y-2">
 
    {allusers.map((user,index) => (
      <User key={index} user={user} />
    ))}
   
     </div>
    </div>
  );
}

export default Users;
