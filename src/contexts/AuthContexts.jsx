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

    return (
        <authContext.Provider value={{user}}>{children}</authContext.Provider>
    )
}

export default AuthProvider