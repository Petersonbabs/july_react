import { useState } from "react"
import { useNavigate } from "react-router-dom"

// STATE MANAGEMENT
// Local state: useState
// global state: context api
// CONTEXT API
// redux, zustand

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        companyName: ""
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

    const handleSubmit = async (dddd) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch("http://localhost:4000/users", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (data.status === "success") {
                // window.location.href = "/signin"
                alert("Welcome onboard! Redirecting...")
                navigate("/signin")
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }


    return (
        <div className="signup-container">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="joe@dev.com" id="email" name="email" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="name">Full name</label>
                    <input type="text" placeholder="Elon musk" id="name" name="name" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="companyName">Company Name (optional)</label>
                    <input type="text" placeholder="Elon Enterprise" id="companyName" name="companyName" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*******" id="password" name="password" onChange={handleInput} />
                </div>

                <button disabled={submitting}>{submitting ? "Authenticating..." : "Create Account"}</button>
            </form>
            <p>Have an account already? <a href="./signin">Login</a></p>
        </div>
    )
}

export default Form