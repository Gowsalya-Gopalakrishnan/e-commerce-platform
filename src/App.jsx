import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import AddProducts from './pages/AddProducts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
