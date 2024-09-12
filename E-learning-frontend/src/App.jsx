import React from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Profile from './components/Auth/Profile'
function App() {
  return (
    <div className='h-screen grid place-content-center'>
      <Login/>
      {/* <Signup/> */}
      <Profile/>
    </div>
   
  )
}

export default App