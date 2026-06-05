import { Link } from "react-router-dom"
import { useTheme } from "../ThemeContext"
import MarqueeStrip from "../components/MarqueeStrip"

const Home = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    return (
        <main>
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
                    style={{
                        backgroundColor: isDark ? "#1C2820" : "#D8ECD8",
                        borderColor: "#2A3E2A",
                        color: "#6DB87F",
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-[#4A8C5C] animate-pulse" />
                    Open to internships and global opportunities
                </div>

                <p className="text-sm font-medium tracking-widest uppercase text-[#7A9A82] mb-3">
                    Hello, I'm
                </p>

                <h1
                    className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-3"
                    style={{ color: isDark ? "#F5F0E8" : "#1A2A1C" }}
                >
                    Doreen{" "}
                    <span className="text-[#C07840]">Providence Abel</span>
                </h1>

                <p
                    className="text-lg md:text-xl font-semibold tracking-wide uppercase mb-2"
                    style={{ color: "#6DB87F" }}
                >
                    Aspiring Embedded Systems · AI · ML Engineer
                </p>