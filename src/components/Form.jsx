import { useState } from "react"


const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: ""
    })
    const [submitting, setSubmitting] = useState(false)

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch("https://fakestoreapi.com/users/", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
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
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" placeholder="Elon musk" id="fullName" name="fullName" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*******" id="password" name="password" onChange={handleInput} />
                </div>

                <button disabled={submitting}>{submitting ? "Authenticating..." : "Create Account"}</button>
            </form>
        </div>
    )
}

export default Form