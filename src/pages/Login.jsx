import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetch } from '../redux/actions/action'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const dispatch = useDispatch('')
    const datas = useSelector(state=>state.reducer.data)
    const navigate= useNavigate('')
    const handleClick=(e)=>{
        e.preventDefault()
        if(email==="admin" && password==="admin123"){
             dispatch(fetch())
        navigate('/home')
        }
        else{
            alert("Invalid Credintials")
            console.log("Invalid Credintials")
        }
       
    }
  return (
    <div>
      <form style={{display:"flex", flexDirection:"column",gap:"30px",margin:"auto",border:"2px solid #ddd"}}>
        <h1 style={{margin:"auto",marginTop:"10%"}}>Login</h1>
        <input type='text'placeholder='Enter UserName'value={email}onChange={(e)=>setEmail(e.target.value)} 
        style={{width:"30%",height:"30px",margin:"auto"}}/>
        <input type='password'placeholder='Enter Password'value={password}onChange={(e)=>setPassword(e.target.value)}
         style={{width:"30%",height:"30px",margin:"auto"}}/>
        <button onClick={handleClick} style={{width:"10%",height:"30px",margin:"auto"}}>Login</button>
      </form>
    </div>
  )
}

export default Login
