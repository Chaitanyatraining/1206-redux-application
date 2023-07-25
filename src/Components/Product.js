import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    console.log(id)

    const getProductData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
       setProduct(response.data)
    }

        useEffect(()=>{
            getProductData();
        }, [])

  return (
    <>
    <h2>Product Page</h2>
    
    </>
  )
}
