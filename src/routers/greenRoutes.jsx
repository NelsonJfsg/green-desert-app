import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './../pages/home';

export const GreenRoutes = () => {
  return (
    
    <Routes>
      <Route path='home' element={<HomePage/>}/>

      <Route path='/*' element={<Navigate to='/home'/>}/>
    </Routes>
    
  )
}
