import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className='px-6 py-4 h-[11vh]'>
      <form action="">
         <div className='flex items-center gap-3'>
        <label className="border-[1px] border-gray-700 flex items-center gap-2 bg-slate-900 text-gray-300 rounded-lg px-4 py-2 w-[80%]">
  <input type="search" className="grow outline-none" placeholder="Search" />
</label>
<button><FaSearch className='text-4xl p-1 hover:bg-gray-600 rounded-full duration-300 cursor-pointer' /></button>
</div>
      </form>
    </div>
  )
}

export default Search
