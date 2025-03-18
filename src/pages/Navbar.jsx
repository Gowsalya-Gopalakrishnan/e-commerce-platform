import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:"100%", backgroundColor:"blue",height:"60px", }}>
        <div >
             <NavLink to='/home' style={{color:"white",textDecoration:"none", marginLeft:'40%'}}>Home</NavLink>
      <NavLink to='/login'style={{color:"white",textDecoration:"none", marginLeft:'20%'}}>Login</NavLink>
        </div>
       
    </div>
  )
}

export default Navbar
