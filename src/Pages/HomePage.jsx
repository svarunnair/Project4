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
      url:"https://api.coindesk.com/v1/bpi/currentprice.json",
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
    
    {/* {data?.map((item)=>(
      <>
      {item.exchange
}
      </>
    ))} */}

    {/* {data.map((item)=>(
      <>
      {item}
      </>
    ))} */}

    <img  src="url"/>


    {/* {data.exchange
}<br/> */}


<img src='link' />

    

    </div>
  )
}

export default HomePage