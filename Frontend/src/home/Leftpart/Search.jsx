import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import GetAllUsers from '../../Context/GetAllUsers';
import useConversation from '../../zustand/useConversation';

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = GetAllUsers();
  const {setSelectedConversation} = useConversation();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    const conversation = allUsers.find((user)=>
      user.fullname.toLowerCase().includes(search.toLocaleLowerCase()))

      if(conversation){
        setSelectedConversation(conversation)
        setSearch("")
      } else {
        alert("User Not Found")
    }
  }
  return (
    <div className='px-6 py-4 h-[11vh]'>
      <form onSubmit={handleSubmit}>
         <div className='flex items-center gap-3'>
        <label className="border-[1px] border-gray-700 flex items-center gap-2 bg-slate-900 text-gray-300 rounded-lg px-4 py-2 w-[80%]">
  <input type="search" className="grow outline-none" placeholder="Search"
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  />
</label>
<button><FaSearch className='text-4xl p-1 hover:bg-gray-600 rounded-full duration-300 cursor-pointer' /></button>
</div>
      </form>
    </div>
  )
}

export default Search
