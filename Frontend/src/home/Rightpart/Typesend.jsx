import React from 'react'
import { IoSend } from "react-icons/io5";

function Typesend() {
  return (
    <div className='flex items-center space-x-2 px-4 h-[10vh] text-center bg-gray-800 text-gray-300'>
    <div className='w-[70%] flex items-center justify-between p-1 rounded-lg bg-gray-700'>
      <input type="text" placeholder="Type here" className="input type-input w-full" />
    </div>
     <button className='text-3xl'><IoSend /></button>
    </div>
  )
}

export default Typesend
