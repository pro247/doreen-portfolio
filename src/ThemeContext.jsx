import { createContext, useContext, useEffect, useState } from "react"


const ThemeContext = createContext()


export const ThemeProvider = ({ children }) => {


    const [theme, setTheme] = useState(
        () => localStorage.getItem("dp-theme") || "dark"
    )


    useEffect(() => {
        localStorage.setItem("dp-theme", theme)
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    // children means "everything wrapped inside <ThemeProvider>"
    // We pass theme and toggleTheme down so any child can use them
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// useTheme is a custom hook — a shortcut so any component
// can write:  const { theme, toggleTheme } = useTheme()
// instead of the longer:  useContext(ThemeContext)
export const useTheme = () => useContext(ThemeContext)