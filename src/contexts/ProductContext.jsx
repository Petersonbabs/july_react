import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContexts";

export const productContext = createContext()
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const fakeStoreUrl = import.meta.env.VITE_FAKESTORE_BASE_URL

    // FETCH PRODUCTS
    const fetchProducts = async () => {
        setIsloading(true)
        try {
            const res = await fetch(`${fakeStoreUrl}/products`)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }
    
    // GET SINGLE PRODUCTS
    const value = {
        products,
        isLoading,
        fetchProducts
    }

    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    )
}

export default ProductProvider