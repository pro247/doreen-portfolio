import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider, useTheme } from "./ThemeContext"
import Navbar from "./components/Navbar"
import "./index.css"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

// AppShell reads the current theme and applies the right
// background colour to the whole page wrapper.
// It must be INSIDE ThemeProvider so it can call useTheme().
const AppShell = () => {
  const { theme } = useTheme()

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme === "dark" ? "#0A0F0B" : "#F5F0E8"
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App