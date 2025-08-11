import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SIngleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        getSingleProduct()
    }, [])

    const getSingleProduct = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        } catch (error) {

        }
    }

    return (
        <div>
            <img src={product?.image} alt="" width={300} />
            <h1>{product?.title}</h1>

        </div>
    )
}

export default SIngleProduct