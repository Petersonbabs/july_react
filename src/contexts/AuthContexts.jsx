// CREATE CONTEXT
// PROVIDE THE CONTEXT WITH ITS VALUES
// CONSUME / USE THE CONTEXT
import { createContext, useState } from "react"
export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "lekan",
        age: 89
    })
    const [verificationData, setVerificationData] = useState({
        status: ""
    })
    const [verifyingToken, setVerifyingToken] = useState(false)

    const baseUrl = import.meta.env.VITE_BASE_URL

    const verifyToken = async (token) => {
        setVerifyingToken(true)
        try {
            const res = await fetch(`${baseUrl}/users/verify-account/${token}`, {
                method: "POST"
            })
            const data = await res.json()
            setVerificationData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setVerifyingToken(false)
        }
    }

    const value = {
        verifyToken,
        verifyingToken,
        verificationData
    }

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}

export default AuthProvider