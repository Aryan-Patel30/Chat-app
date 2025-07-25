import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'

function Right() {
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      <Chatuser/>
      <Messages/>
      <Typesend/>
    </div>
  )
}

export default Right
