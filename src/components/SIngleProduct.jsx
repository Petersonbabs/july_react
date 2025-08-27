import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { withPermission } from './AuthChecker'
import { toast } from 'sonner'

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

    const addToCart = withPermission(() => {
        console.log("Added to cart: ", product)
        toast.success("Product has been added to cart")
    })

    return (
        <div>
            <img src={product?.image} alt="" width={300} />
            <h1>{product?.title}</h1>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default SIngleProduct