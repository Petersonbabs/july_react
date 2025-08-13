import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [submitting, setSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch("http://localhost:4000/users/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (data.status === "success") {
                alert("Welcome back! Redirecting...")
                localStorage.setItem("token", data.token)
                navigate("/dashboard")
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="joe@dev.com" id="email" name="email" onChange={handleInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*******" id="password" name="password" onChange={handleInput} />
                </div>

                <button disabled={submitting}>{submitting ? "Authenticating..." : "Login"}</button>
            </form>
            <p>Are you new here? <a href="./signup">Create Account</a></p>
        </div>
    )
}

export default Signin