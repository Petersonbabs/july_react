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
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
            </div>

        </header>
    )
}
export default Header

const menuStyle = {
    display: "flex",
    gap: "1rem"
}