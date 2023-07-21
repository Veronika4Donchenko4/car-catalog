import React from 'react'
import { Route, Routers, BrowserRouter } from 'react-router-dom'
import Home from '../home/Home'
import CarDetail from '../car-detail/CarDetail'

const Router = () => {
  return (
    <div>
       <BrowserRouter>
       <Routers>
        <Route element={<Home/>} path= '/'/>
        <Route element={<CarDetail/>} path= '/car/:id'/>
        <Route  path= '*' element={<div>Car not found</div>}/>

       </Routers>
       </BrowserRouter>
      
    </div>
  )
}

export default Router
