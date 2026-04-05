import { useTheme } from "../ThemeContext"
import MarqueeStrip from "../components/MarqueeStrip"

const projectList = [
    {
        title: "TinyML Sensor System",
        category: "Embedded AI",
        desc: "AI model deployed on a microcontroller — on-device inference solving a real Malawi problem without cloud dependency.",
        tags: ["TensorFlow Lite", "Arduino", "Python"],
        color: "#4A8C5C",
    },
    {
        title: "Final Year Project",
        category: "Engineering",
        desc: "Final year engineering project addressing a specific infrastructure challenge in Malawi. Built with a colleague.",
        tags: ["Embedded Systems", "C++", "Documentation"],
        color: "#C07840",
    },
    {
        title: "This Portfolio",
        category: "Web · React",
        desc: "Designed and built from scratch — React, Tailwind CSS, Vercel. The site you are looking at right now.",
        tags: ["React", "Tailwind", "Vercel"],
        color: "#7060A0",
    },
    {
        title: "Scrunchie Business",
        category: "Entrepreneurship",
        desc: "Product-based business running alongside a full engineering degree — design, production, and marketing.",
        tags: ["Product Design", "Marketing"],
        color: "#C06080",
    },
    {
        title: "Data Communications Lab",
        category: "Networking",
        desc: "Hands-on lab work in data communication systems — protocols, signal processing and network design.",
        tags: ["Networking", "Protocols"],
        color: "#4080A0",
    },
]

const Projects = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    return (
        <main>
            {/* Marquee strip at the top */}
            <MarqueeStrip />

            <section className="px-6 py-20 max-w-7xl mx-auto">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A8C5C] mb-3">
                    My work
                </p>
                <h1
                    className="text-4xl md:text-5xl font-black tracking-tight mb-3"
                    style={{ color: isDark ? "#F5F0E8" : "#1A2A1C" }}
                >
                    Projects & <span className="text-[#C07840]">builds</span>
                </h1>
                <p className="text-[#7A9A82] mb-12 text-sm">
                    Real problems. Real solutions. Real impact.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-xl border overflow-hidden transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                            style={{
                                backgroundColor: isDark ? "#111810" : "#EAF0EA",
                                borderColor: isDark ? "#1E2E20" : "#C0D8C0",
                            }}
                        >
                            {/* Coloured top bar */}
                            <div
                                className="h-1.5 w-full"
                                style={{ backgroundColor: project.color }}
                            />

                            <div className="p-5">
                                <p
                                    className="text-xs font-bold uppercase tracking-widest mb-2"
                                    style={{ color: project.color }}
                                >
                                    {project.category}
                                </p>
                                <h3
                                    className="text-base font-bold mb-3"
                                    style={{ color: isDark ? "#F5F0E8" : "#1A2A1C" }}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#7A9A82] leading-relaxed mb-4">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full"
                                            style={{
                                                backgroundColor: project.color + "20",
                                                color: project.color,
                                                border: `1px solid ${project.color}40`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Next project placeholder card */}
                    <div
                        className="rounded-xl border-2 border-dashed flex items-center justify-center min-h-[200px] cursor-pointer transition-colors duration-200"
                        style={{
                            borderColor: isDark ? "#2A3E2A" : "#8AB88A",
                        }}
                    >
                        <div className="text-center">
                            <p className="text-3xl text-[#2A3E2A] mb-2">+</p>
                            <p className="text-sm font-semibold text-[#7A9A82]">Next project</p>
                            <p className="text-xs text-[#4A8C5C] mt-1">TinyML — April build</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Projects