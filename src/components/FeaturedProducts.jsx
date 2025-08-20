import { useContext, useEffect } from "react"
import { productContext } from "../contexts/ProductContext"


const FeaturedProducts = () => {
    const { fetchProducts, products, isLoading } = useContext(productContext)
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div style={{
            margin: "4rem",
            border: "1px solid",
            padding: "1rem",
            display: "flex",
            overflowX: "scroll",
            gap: "1rem"
        }}>
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
                                        products.slice(0, 6).map((ele, index) => (
                                            <a href={`/products/${ele.id}`} style={{
                                                minWidth: "300px",
                                                display: "block",
                                                border: "1px solid"
                                            }} key={index}>
                                                <img src={ele.image} alt="" width={200} />
                                                <h2>{ele.title}</h2>
                                                <p>{ele.price}</p>
                                                <p>{ele.category}</p>
                                            </a>
                                        ))
                                    }
                                </>
                            )
                        }
                    </>
            }
        </div>
    )
}

export default FeaturedProducts