import { useTheme } from "../ThemeContext"

const technical = [
    { name: "C++ Programming", level: 82, note: "Efficient, effective code" },
    { name: "Arduino & Circuit Design", level: 85, note: "Boards, sensors, projects" },
    { name: "ESP32 Module Design", level: 78, note: "Integrating ESP32 into projects" },
    { name: "Proteus Simulation", level: 75, note: "Circuit design & simulation" },
    { name: "TinyML / Embedded AI", level: 72, note: "TF Lite, Edge Impulse, edX course" },
    { name: "Python Programming", level: 80, note: "Scripting, data, teaching" },
    { name: "Figma / UI Design", level: 70, note: "Designed MUBAS Lab system" },
    { name: "React & Tailwind", level: 55, note: "Building this portfolio right now" },
    { name: "Microsoft Office", level: 90, note: "Word, Excel, PowerPoint, OneDrive" },
    { name: "SCADA Troubleshooting", level: 65, note: "Industrial systems" },
    { name: "Google Workspace", level: 88, note: "Docs, Sheets, Drive" },
    { name: "GitHub", level: 72, note: "Version control & collaboration" },
]

const soft = [
    "Creative problem solving",
    "Public speaking",
    "Active listening",
    "Teamwork across cultures",
    "Teaching & mentoring",
    "Time management",
    "Resilience & self-discipline",
    "Community advocacy",
]

const Skills = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    const cardBg = isDark ? "#111810" : "#EAF0EA"
    const cardBorder = isDark ? "#1E2E20" : "#C0D8C0"
    const headColor = isDark ? "#F5F0E8" : "#1A2A1C"

    return (
        <main className="px-6 py-20 max-w-7xl mx-auto">

            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A8C5C] mb-3">
                My expertise
            </p>
            <h1
                className="text-4xl md:text-5xl font-black tracking-tight mb-3"
                style={{ color: headColor }}
            >
                Skills & <span className="text-[#C07840]">tools</span>
            </h1>
            <p className="text-[#7A9A82] mb-12 text-sm">
                Built through coursework, real projects, competitions, and relentless curiosity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {technical.map((skill) => (
                    <div
                        key={skill.name}
                        className="p-5 rounded-xl border"
                        style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <p
                                className="text-sm font-bold"
                                style={{ color: headColor }}
                            >
                                {skill.name}
                            </p>
                            <span className="text-xs font-bold text-[#C07840]">
                                {skill.level}%
                            </span>
                        </div>
                        <p className="text-xs text-[#7A9A82] mb-3">{skill.note}</p>

                        {/* Progress bar */}
                        <div
                            className="w-full h-1.5 rounded-full"
                            style={{ backgroundColor: isDark ? "#1E2E20" : "#C8DCC8" }}
                        >
                            <div
                                className="h-1.5 rounded-full transition-all duration-700"
                                style={{
                                    width: `${skill.level}%`,
                                    backgroundColor: skill.level >= 80 ? "#4A8C5C"
                                        : skill.level >= 70 ? "#C07840"
                                            : "#7060A0",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Soft skills */}
            <div
                className="p-6 rounded-xl border"
                style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
                <h2
                    className="text-lg font-bold mb-4"
                    style={{ color: headColor }}
                >
                    Soft skills
                </h2>
                <div className="flex flex-wrap gap-3">
                    {soft.map((s) => (
                        <span
                            key={s}
                            className="text-sm px-4 py-2 rounded-full font-semibold"
                            style={{
                                backgroundColor: isDark ? "#1C2820" : "#D8ECD8",
                                color: "#6DB87F",
                                border: "1px solid #2A4030",
                            }}
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Skills