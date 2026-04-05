import { useTheme } from "../ThemeContext"

const experiences = [
    {
        role: "IT Assistant (Intern)",
        company: "Alliance One Tobacco Limited",
        period: "June 2025 – September 2025",
        points: ["Cloud migration support", "Microsoft Office package"],
        color: "#C07840",
    },
    {
        role: "UI/UX Designer",
        company: "MUBAS Electronics Lab",
        period: "February – April 2024",
        points: ["Designed borrowing system UI in Figma", "End-to-end interface design"],
        color: "#4A8C5C",
    },
    {
        role: "Python & Scratch Tutor",
        company: "MUBAS",
        period: "August 2024 – Present",
        points: ["Teaching ages 6–17 Python and Scratch", "Breaking down complex ideas simply"],
        color: "#6DB87F",
    },
    {
        role: "FemTech Network Ambassador",
        company: "FemTech Network Malawi",
        period: "March 2025 – Present",
        points: ["Advocating girls into Tech & Engineering", "Community outreach and mentoring"],
        color: "#C06080",
    },
    {
        role: "Arduino & Circuit Facilitator",
        company: "Tech-On Network",
        period: "November – December 2024",
        points: ["Teaching girls Arduino basics", "Circuit design and hands-on projects"],
        color: "#7060A0",
    },
]

const awards = [
    {
        title: "2nd Place — ICT Association Innovation JAM",
        detail: "SheCodes track · ResearchConnect application",
        color: "#C07840",
    },
    {
        title: "4th Place — UbuntuNet Alliance Hackathon 2024",
        detail: "East & Southern Africa · ResearchConnect",
        color: "#4A8C5C",
    },
]

const About = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    const cardBg = isDark ? "#111810" : "#EAF0EA"
    const cardBorder = isDark ? "#1E2E20" : "#C0D8C0"
    const headColor = isDark ? "#F5F0E8" : "#1A2A1C"

    return (
        <main className="px-6 py-20 max-w-7xl mx-auto">

            {/* Section label */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A8C5C] mb-3">
                About me
            </p>
            <h1
                className="text-4xl md:text-5xl font-black tracking-tight mb-3"
                style={{ color: headColor }}
            >
                Engineer. <span className="text-[#C07840]">Builder.</span> Dreamer.
            </h1>
            <p className="text-[#7A9A82] mb-12 text-sm max-w-xl leading-relaxed">
                5th year Electronics and Computer Engineering student at MUBAS, Malawi.
                Passionate about embedded systems, TinyML, and using technology to solve
                real problems for real people.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

                {/* LEFT: quick info card */}
                <div
                    className="rounded-xl border p-6 h-fit"
                    style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                >
                    <div
                        className="w-full h-48 rounded-lg mb-5 flex items-center justify-center text-5xl font-black"
                        style={{ backgroundColor: isDark ? "#1C2820" : "#D8ECD8", color: "#4A8C5C" }}
                    >
                        DP
                    </div>

                    {[
                        ["Name", "Doreen Abel"],
                        ["University", "MUBAS, Malawi"],
                        ["Degree", "B.Eng Electronics & CE"],
                        ["Year", "5th Year (Final)"],
                        ["Speciality", "TinyML · Embedded AI"],
                        ["Location", "Blantyre, Malawi"],
                        ["GitHub", "github.com/pro247"],
                        ["Status", "Open to opportunities"],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="flex justify-between items-center py-2.5 border-b"
                            style={{ borderColor: cardBorder }}
                        >
                            <span className="text-xs font-bold uppercase tracking-wider text-[#7A9A82]">
                                {label}
                            </span>
                            <span
                                className="text-xs font-semibold"
                                style={{ color: value === "Open to opportunities" ? "#6DB87F" : headColor }}
                            >
                                {value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* RIGHT: experience + awards */}
                <div className="md:col-span-2 flex flex-col gap-8">

                    {/* Story */}
                    <div>
                        <h2
                            className="text-xl font-bold mb-3"
                            style={{ color: headColor }}
                        >
                            My story
                        </h2>
                        <p className="text-sm leading-relaxed text-[#7A9A82] mb-3">
                            I am an enthusiastic, creative and lifelong learner — an electronics and
                            computer engineer bringing ideas into reality through skills gained both in
                            the classroom and in industry. I give myself room to understand the future
                            of technology by building things, competing, and teaching others.
                        </p>
                        <p className="text-sm leading-relaxed text-[#7A9A82]">
                            Beyond engineering, I run a small crochet business, advocate for girls
                            in tech through FemTech Network Malawi, and tutor young learners in
                            Python and Scratch. Discipline, faith, and curiosity are my three pillars.
                        </p>
                    </div>

                    {/* Awards */}
                    <div>
                        <h2
                            className="text-xl font-bold mb-4"
                            style={{ color: headColor }}
                        >
                            Awards
                        </h2>
                        <div className="flex flex-col gap-3">
                            {awards.map((award) => (
                                <div
                                    key={award.title}
                                    className="flex items-start gap-3 p-4 rounded-xl border"
                                    style={{ backgroundColor: cardBg, borderColor: cardBorder, borderLeft: `3px solid ${award.color}` }}
                                >
                                    <div>
                                        <p
                                            className="text-sm font-bold"
                                            style={{ color: headColor }}
                                        >
                                            {award.title}
                                        </p>
                                        <p className="text-xs text-[#7A9A82] mt-1">{award.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h2
                            className="text-xl font-bold mb-4"
                            style={{ color: headColor }}
                        >
                            Experience & volunteering
                        </h2>
                        <div className="flex flex-col gap-3">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.role}
                                    className="p-4 rounded-xl border"
                                    style={{ backgroundColor: cardBg, borderColor: cardBorder, borderLeft: `3px solid ${exp.color}` }}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <p
                                            className="text-sm font-bold"
                                            style={{ color: headColor }}
                                        >
                                            {exp.role}
                                        </p>
                                        <span
                                            className="text-xs px-2 py-0.5 rounded-full"
                                            style={{ backgroundColor: exp.color + "20", color: exp.color }}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#7A9A82] mb-2">{exp.company}</p>
                                    <ul className="flex flex-col gap-1">
                                        {exp.points.map((pt) => (
                                            <li key={pt} className="text-xs text-[#7A9A82] flex items-center gap-2">
                                                <span style={{ color: exp.color }}>·</span> {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default About