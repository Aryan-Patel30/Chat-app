import React from 'react'
import useConversation  from '../../zustand/useConversation.js';
import { useSocketContext } from '../../Context/SocketContext.jsx';

function User({user}) {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket , onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div  className={`hover:bg-slate-600 duration-300 cursor-pointer rounded-md ${isSelected ? 'bg-slate-700' : ''}`} onClick={() => setSelectedConversation(user)}>
    <div className="flex space-x-4 px-6 py-4 hover:bg-slate-800 duration-300 cursor-pointer rounded-md items-center">
        <div className={`avatar ${isOnline ? 'avatar-online' : ''}`}>
          <div className="ring-primary ring-offset-base-100 w-13 rounded-full ring-1 ring-offset-1 overflow-hidden ">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
      </div>
  )
}

export default User
