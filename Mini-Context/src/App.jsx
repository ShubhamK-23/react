import './App.css'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import UserContextProvider from './Context/UserContextProvider';


function App() {
  
  return (
    <>
    <h1>Context API</h1>
    <UserContextProvider>
      <Login/>
      <Profile/>

    </UserContextProvider>

    </>
  )
}

export default App
