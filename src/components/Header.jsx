import Button from "./Button"



function Header() {
    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 1rem",
            borderBottom: "1px solid"
        }}>
            <h1>Logo</h1>
            <div style={menuStyle}>
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