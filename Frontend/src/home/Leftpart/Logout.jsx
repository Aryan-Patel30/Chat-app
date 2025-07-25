import React from 'react'
import { BiLogOut } from "react-icons/bi";

function Logout() {
  return (
    <div className='flex h-[9vh]'>
    <div className='text-white px-6 py-4 hover:bg-slate-700 duration-300 cursor-pointer rounded-md flex items-center space-x-2'>
    <BiLogOut className='text-2xl'/>
    <h1 className='text white'>Logout</h1>
    </div>
    </div>
  )
}

export default Logout
