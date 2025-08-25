import { createContext, useEffect, useState } from "react";

export const themeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState()

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setMode(savedTheme)
            console.log(savedTheme)
        } else {
            const preferDArk = window.matchMedia('(prefers-color-scheme: dark)').matches
            console.log(preferDArk)
            setMode(preferDArk ? "dark" : "light")
        }
    }, [])
    // find the current mode of the user device

    const toggleMode = () => {
        setMode(prev => prev == "light" ? "dark" : "light")
        saveTheme()
    }
    const saveTheme = () => {
        localStorage.setItem("theme", mode == "light" ? "dark" : "light")
    }

    const value = {
        mode,
        toggleMode
    }
    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    )
}

export default ThemeProvider