import { Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[data,setData]=useState([])
  const navigate=useNavigate()
  const[error,setError]=useState([])
  const[loading,setLoading]=useState(false)

  const handleEmail=(e)=>{
    let value=e.target.value
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value
    setPassword(value)
  }
  const handleClick=()=>{
    navigate('/signup')
  }
  const handleSubmit=()=>{
    setLoading(true)
    axios({
      url:"https://reqres.in/api/login",
      method:"POST",
      data:{
        email:email,
        password:password
      }
    })
    .then((res)=>{
      setLoading(false)
      setData(res.data)
      localStorage.setItem('Token', res.data.token);
      if(res.data.token){
        navigate('/home')
      }

    })
    .catch((error)=>{
      setLoading(false)
      setError(error)
    })

  }

  


  return (

    <div>

      <h1>Sign In</h1>
      <Input onChange={handleEmail} placeholder='Email id'size='sm' width='auto' /><br/>
      <Input onChange={handlePassword} placeholder='Password'size='sm' width='auto' /><br/>
      <Button onClick={handleSubmit}>Sign In</Button><br/>
      <h6 onClick={handleClick}>For sign up</h6><br/>
      {loading&&<h4>loading...</h4>}


    </div>
  )
}

export default Signin