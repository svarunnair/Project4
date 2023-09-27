import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import HomePage from '../Pages/HomePage'

function MainRoutes() {
  return (
    <div>

    <Routes>

      <Route path='/'element={<Signup/>}/>
      <Route path='signup'element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='*'element={<h1>page not found</h1>}/>

    </Routes>
        
    </div>
  )
}

export default MainRoutes