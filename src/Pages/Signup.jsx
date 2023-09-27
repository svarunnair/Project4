import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

  // const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const[data,setData]=useState([])
  const[error,setError]=useState([])
  const[loading,setLoading]=useState(false)



  // const handleName=(e)=>{
  //   let value=e.target.value
  //   setName(value)
  // }
  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleClick=()=>{
    navigate('/signin')
  }

  const handleSubmit=()=>{

    setLoading(true)
    axios({
      url:"https://reqres.in/api/register",
      method:"POST",
      data:{
        // name:name,
        email:email,
        password:password
      }      
    })
    .then((res)=>{
      setLoading(false)
      setData(res.data)
      navigate('/signin')
    })
    
    .catch((error))
    setLoading(false)
    setError(error)
  }






  return (
    <div>
      <h1>Sign Up</h1>
      {/* <input onChange={handleName} placeholder='Name'/><br/> */}
      <input onChange={handleEmail} placeholder='Email id'/><br/>
      <input onChange={handlePassword} placeholder='Password'/><br/>
      <button onClick={handleSubmit}>Sign up</button><br/>
      <h6 onClick={handleClick}>For Sign in</h6><br/>
      {loading&&<h4>Loading...</h4>}<br/>


    </div>
  )
}

export default Signup