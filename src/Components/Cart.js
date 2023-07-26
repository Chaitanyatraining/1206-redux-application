import React from 'react'
import { useSelector } from 'react-redux'

 const Cart = () => {
    // we have a hook to get data from store
    // useSelector
    const cartData = useSelector((state) => state.productsData.cartData)
  return (
    <div>Cart</div>
  )
}
export default Cart
