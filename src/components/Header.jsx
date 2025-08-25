import { useContext } from "react"
import Button from "./Button"
import { themeContext } from "../contexts/ThemeContext"



function Header() {
    const { mode, toggleMode } = useContext(themeContext)
    console.log(mode)
    return (
        <header style={{
            background: `${mode == "light" ? "white" : "black"}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 1rem",
            borderBottom: "1px solid"
        }}>
            <h1 style={{
                color: `${mode == "light" ? "black" : "white"}`
            }}>Logo</h1>
            <div style={menuStyle}>
                <button onClick={toggleMode}>{mode == "light" ? "Dark" : "Light"}</button>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/signup">Sign up</a>
                <a href="/signin">Login</a>
                <a href="/contact">Contact</a>
            </div>

        </header>
    )
}
export default Header

const menuStyle = {
    display: "flex",
    gap: "1rem"
}