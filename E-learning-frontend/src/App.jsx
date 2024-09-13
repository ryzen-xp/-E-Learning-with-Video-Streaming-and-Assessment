import React from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Profile from './components/Auth/Profile'
import Routers from './ComponentsRouter'
import Home from './Home'

import ComponentsRouter from './ComponentsRouter'

function App() {
  return (
    <div className='h-screen grid place-content-center'>
  
     <ComponentsRouter/>
    </div>
   
  )
}

export default App