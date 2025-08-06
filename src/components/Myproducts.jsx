import { useState, useEffect } from "react"




// const products = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     description: "Ergonomic wireless mouse with USB receiver",
//     price: 25.99,
//     inStock: true
//   },
//   {
//     id: 2,
//     name: "Mechanical Keyboard",
//     description: "RGB backlit mechanical keyboard with blue switches",
//     price: 79.99,
//     inStock: true
//   },
//   {
//     id: 3,
//     name: "HD Webcam",
//     description: "1080p webcam with built-in microphone",
//     price: 49.99,
//     inStock: false
//   },
//   {
//     id: 4,
//     name: "USB-C Hub",
//     description: "Multi-port USB-C hub with HDMI and Ethernet",
//     price: 34.50,
//     inStock: true
//   },
//   {
//     id: 5,
//     name: "Noise-Canceling Headphones",
//     description: "Over-ear Bluetooth headphones with ANC",
//     price: 129.00,
//     inStock: true
//   },
//   {
//     id: 6,
//     name: "Laptop Stand",
//     description: "Adjustable aluminum laptop stand",
//     price: 27.75,
//     inStock: true
//   },
//   {
//     id: 7,
//     name: "Portable SSD",
//     description: "1TB USB 3.1 portable solid-state drive",
//     price: 99.95,
//     inStock: false
//   },
//   {
//     id: 8,
//     name: "Smart LED Light Bulb",
//     description: "Wi-Fi enabled multicolor LED bulb",
//     price: 15.99,
//     inStock: true
//   },
//   {
//     id: 9,
//     name: "Fitness Tracker",
//     description: "Water-resistant fitness tracker with heart rate monitor",
//     price: 59.99,
//     inStock: true
//   },
//   {
//     id: 10,
//     name: "Bluetooth Speaker",
//     description: "Portable waterproof Bluetooth speaker",
//     price: 39.99,
//     inStock: true
//   }
// ];



const MyProducts = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [userToken, setUserToken] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchProducts()
    }, [isLoggedIn, userToken])


    const fetchProducts = async () => {
        try {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
            console.log(data);

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }


    const toggleAuthState = () => {

        setUserToken(prev => prev + "")
    }

    return (
        <div>

            <h2>My Products</h2>
            <div>
                {
                    loading ? (
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
                                                <div key={index}>
                                                    <img src={ele.image} alt="" width={200} />
                                                    <h2>{ele.title}</h2>
                                                    <p>{ele.price}</p>
                                                    <p>{ele.category}</p>
                                                    <p>{ele.description}</p>
                                                </div>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </>





                }
            </div>
            <button onClick={toggleAuthState}>Login</button>


        </div>
    )


}

export default MyProducts