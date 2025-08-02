import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../zustand/useConversation';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/AuthProvider';

function Right() {
  const { selectedConversation , setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [selectedConversation]);
  return (
<>
  {! selectedConversation ? (<Loading/>) : (<>
       <div className='w-[70%] bg-slate-900 text-gray-300'>
      <Chatuser/>
      <Messages/>
      <Typesend/>
    </div>
   </>
   )}
</> 
);
}
  


export default Right

const NoChatSelected = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
    <div>
      <h1>Welcome <span>{ authUser.fullname }</span></h1>
    </div>
    </>
  )
}
