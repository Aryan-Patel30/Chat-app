import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './Components/signup'
import Login from './Components/Login'


function App() {
  return (
    <div className='flex h-screen'>
      <Left/>
      <Right/>
    </div>
  //   <div>
  //  <Signup />
  //  <Login />
  //   </div>
  )
}

export default App
