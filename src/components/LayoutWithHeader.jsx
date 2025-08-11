import { Outlet } from "react-router-dom"
import Header from "./Header"

const LayoutWithHeader = ({ children }) => {
    return (
        <div>
            <Header />
            <Outlet />
            <h1>oiuytrd</h1>
        </div>
    )
}

export default LayoutWithHeader