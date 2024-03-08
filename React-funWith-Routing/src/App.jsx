import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// eslint-disable-next-line no-unused-vars
import React from 'react'


function App() {

  return (
    <>
    <Header/> 
    <Outlet/> 
    <Footer/> 
    </>
  )
}

export default App
