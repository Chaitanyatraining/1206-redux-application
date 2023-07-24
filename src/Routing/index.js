import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'

 const Routing = () => {
  return (
    <>
       <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<h2>Product Details Page</h2>} />
        </Routes> 
    </>
  )
}

export default Routing
