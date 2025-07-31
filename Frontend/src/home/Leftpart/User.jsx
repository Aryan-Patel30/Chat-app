import React from 'react'

function User({user}) {
  return (
    <div className="flex space-x-4 px-6 py-4 hover:bg-slate-700 duration-300 cursor-pointer rounded-md items-center">
        <div className="avatar avatar-online">
          <div className="ring-primary ring-offset-base-100 w-13 rounded-full ring-1 ring-offset-1 overflow-hidden ">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
  )
}

export default User
