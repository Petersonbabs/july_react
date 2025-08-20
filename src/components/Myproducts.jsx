import { useState, useEffect, useContext } from "react"
import Header from "./Header"
import { productContext } from "../contexts/ProductContext"





const MyProducts = () => {
    const { fetchProducts, isLoading, products } = useContext(productContext)
    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)
    console.log(isLoading)


    return (
        <div>

            <div>
                {
                    isLoading ? (
                        <h1>Loading....</h1>
                    )
                        :
                        <>
                            {
                                products?.length == 0 ? (
                                    <h1>No Result</h1>
                                ) : (
                                    <>
                                        {
                                            products.map((ele, index) => (
                                                <a href={`/products/${ele.id}`} key={index}>
                                                    <img src={ele.image} alt="" width={200} />
                                                    <h2>{ele.title}</h2>
                                                    <p>{ele.price}</p>
                                                    <p>{ele.category}</p>
                                                    <p>{ele.description}</p>
                                                </a>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </>





                }
            </div>


        </div>
    )


}

export default MyProducts