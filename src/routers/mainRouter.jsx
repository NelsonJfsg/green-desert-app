import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from './authRoutes'
import { GreenRoutes } from './greenRoutes'


export const MainRouter = () => {
  return (

    <Routes>
        
    {/** Auth router */}
    <Route path="auth/*" element={<AuthRoutes/>} />
    
    {/** Green app router */}
    <Route path='/*' element={<GreenRoutes/> }/>
  
    </Routes>
  )
}
