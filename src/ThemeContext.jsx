import { createContext, useContext, useEffect, useState } from "react"

// createContext makes a "global container" that any component
// in your app can reach into and read from or write to.
// Without this, you would have to pass theme as a prop through
// every single component — tedious and messy.
const ThemeContext = createContext()

// ThemeProvider wraps your entire app (in main.jsx or App.jsx).
// Any component inside it can call useTheme() to get the
// current theme and the function to toggle it.
export const ThemeProvider = ({ children }) => {

    // We read from localStorage first so the user's preference
    // is remembered when they close and reopen the site.
    // If nothing is saved yet, we default to "dark".
    const [theme, setTheme] = useState(
        () => localStorage.getItem("dp-theme") || "dark"
    )

    // Every time theme changes, we do two things:
    // 1. Save it to localStorage so it persists across sessions
    // 2. Add or remove the "dark" class on the html element
    //    Tailwind's dark mode reads this class to decide which
    //    colour values to use across the whole site
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