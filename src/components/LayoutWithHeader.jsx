import { Outlet } from "react-router-dom"
import Header from "./Header"

const LayoutWithHeader = () => {
    // check if user is login
    // navigate("/signin")

    return (
        <Outlet />
    )
    return (
        <div>
            <Header />
            <Outlet />
            <h1>oiuytrd</h1>
        </div>
    )
}

export default LayoutWithHeader