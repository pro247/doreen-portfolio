import { useTheme } from "../ThemeContext"
import MarqueeStrip from "../components/MarqueeStrip"

const Home = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    return (
        <main>
            {/* Hero section */}
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

                <p className="text-sm text-[#7A9A82] mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C07840]" />
                    Based in Malawi, building for Malawi to the world
                </p>

                <p
                    className="text-base leading-relaxed mb-10 max-w-xl"
                    style={{ color: isDark ? "#C8D8C0" : "#3A5A3A", opacity: 0.85 }}
                >
                    5th year Electronics and Computer Engineering student at MUBAS —
                    specialising in TinyML and intelligent embedded systems that solve
                    real-world problems.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="/projects"
                        className="bg-[#C07840] hover:bg-[#A06030] text-[#F5F0E8] font-bold px-8 py-3 rounded-lg transition-colors text-sm tracking-wide"
                    >
                        View my work
                    </a>
                    <a
                        href="/contact"
                        className="font-bold px-8 py-3 rounded-lg transition-colors text-sm tracking-wide border"
                        style={{
                            color: isDark ? "#F5F0E8" : "#1A2A1C",
                            borderColor: isDark ? "#2A3E2A" : "#8AB88A",
                            backgroundColor: "transparent",
                        }}
                    >
                        Download CV
                    </a>
                </div>
            </section>

            {/* Flowing projects strip */}
            <MarqueeStrip />

            {/* Stats row */}
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "5+", label: "Projects built" },
                        { number: "3+", label: "TinyML models" },
                        { number: "1", label: "Running business" },
                        { number: "21", label: "Years young" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-xl border"
                            style={{
                                backgroundColor: isDark ? "#111810" : "#EAF0EA",
                                borderColor: isDark ? "#1E2E20" : "#C0D8C0",
                            }}
                        >
                            <p className="text-4xl font-black text-[#C07840] mb-2">{stat.number}</p>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9A82]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home