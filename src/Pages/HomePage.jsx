import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate=useNavigate()
  const[data,setData]=useState([])
  const handleLogout=()=>{
    navigate('/signin')
  }
  const homedata=()=>{

    axios({
      url:"https://api.jikan.moe/v4/anime?q=naruto",
      method:'GET'
    })
    .then((res)=>{
      setData(res.data)
    })
    .catch((errors)=>{
      console.log(errors)
    })
  }
  useEffect(()=>{
    homedata()
  },[])

  console.log(data)

  return (
    <div><h1>HomePage</h1>
    <button onClick={handleLogout}>Logout</button><br/>
  
      {/* {data.metadata} */}


    {/* <img src={data?.metadata?.images[0]}/> */}

    </div>
  )
}

export default HomePage