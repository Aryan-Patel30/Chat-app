import React from "react";
import User from "./User";

function Users() {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div className="scroll-user flex flex-col overflow-y-auto h-[calc(83.15vh-9vh)] py-4 space-y-2">
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
     <User />
    
   
     </div>
    </div>
  );
}

export default Users;
