
// Real data from Doreen's CV — achievements, projects, roles
const items = [
    { text: "2nd Place — ICT Innovation JAM", sub: "SheCodes · ResearchConnect", color: "#C07840" },
    { text: "4th Place — UbuntuNet Hackathon 2024", sub: "East & Southern Africa", color: "#4A8C5C" },
    { text: "TinyML Sensor System", sub: "Embedded AI · Arduino", color: "#6DB87F" },
    { text: "IT Intern — Alliance One Tobacco", sub: "Cloud migration · MS Office", color: "#C07840" },
    { text: "FemTech Network Ambassador", sub: "Advocating girls in Tech", color: "#C06080" },
    { text: "UI/UX Design — MUBAS Lab", sub: "Figma · Borrowing System", color: "#7060A0" },
    { text: "Arduino & Circuit Facilitator", sub: "Tech-On Network · Girls", color: "#4080A0" },
    { text: "Python & Scratch Tutor", sub: "MUBAS · Ages 6–17", color: "#6DB87F" },
    { text: "Final Year Project", sub: "Engineering for Malawi", color: "#C07840" },
    { text: "ESP32 & Proteus Design", sub: "Embedded Systems", color: "#4A8C5C" },
    { text: "ResearchConnect App", sub: "Award-winning project", color: "#C07840" },
    { text: "Portfolio Website", sub: "React · Tailwind · Vercel", color: "#7060A0" },
]

// Double the array so the loop is seamless
const doubled = [...items, ...items]

const MarqueeStrip = () => {
    return (
        <div
            style={{ backgroundColor: "#0C1510", borderTop: "1px solid #1E2E20", borderBottom: "1px solid #1E2E20" }}
            className="w-full py-8 overflow-hidden"
        >
            <p
                style={{ color: "#4A8C5C" }}
                className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-5"
            >
                Achievements & work
            </p>

            {/* overflow-hidden clips cards at both edges */}
            <div className="relative overflow-hidden">
                <div
                    className="flex gap-4 w-max"
                    style={{ animation: "marquee 35s linear infinite" }}
                >
                    {doubled.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full"
                            style={{
                                backgroundColor: item.color + "18",
                                border: `1px solid ${item.color}50`,
                                minWidth: "230px",
                            }}
                        >
                            {/* coloured dot */}
                            <div
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: item.color }}
                            />

                            <div>
                                {/* IMPORTANT: explicit white text so it shows on dark bg */}
                                <p
                                    className="text-sm font-bold whitespace-nowrap"
                                    style={{ color: "#F0EBE0" }}
                                >
                                    {item.text}
                                </p>
                                <p
                                    className="text-xs whitespace-nowrap mt-0.5"
                                    style={{ color: item.color }}
                                >
                                    {item.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MarqueeStrip