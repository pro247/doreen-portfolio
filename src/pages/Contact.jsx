import { useState } from "react"
import { useTheme } from "../ThemeContext"

const Contact = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark"
    const [sent, setSent] = useState(false)

    const cardBg = isDark ? "#111810" : "#EAF0EA"
    const cardBorder = isDark ? "#1E2E20" : "#C0D8C0"
    const headColor = isDark ? "#F5F0E8" : "#1A2A1C"
    const inputBg = isDark ? "#0C1510" : "#F0F5F0"

    const links = [
        { label: "GitHub", value: "github.com/pro247", color: "#4A8C5C" },
        { label: "Email", value: "doreen4abel@gmail.com", color: "#C07840" },
        { label: "MUBAS Mail", value: "bece21-dabel@mubas.ac.mw", color: "#7060A0" },
        { label: "Phone", value: "+265 984 27564", color: "#4080A0" },
    ]

    return (
        <main className="px-6 py-20 max-w-7xl mx-auto">

            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A8C5C] mb-3">
                Contact
            </p>
            <h1
                className="text-4xl md:text-5xl font-black tracking-tight mb-3"
                style={{ color: headColor }}
            >
                Let's <span className="text-[#C07840]">connect</span>
            </h1>
            <p className="text-[#7A9A82] mb-12 text-sm max-w-lg leading-relaxed">
                Open to internships, research collaborations, and engineering opportunities —
                especially outside Malawi. I would love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-10">

                {/* Contact links */}
                <div className="flex flex-col gap-4">
                    {links.map((link) => (
                        <div
                            key={link.label}
                            className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                            style={{ backgroundColor: cardBg, borderColor: cardBorder, borderLeft: `3px solid ${link.color}` }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                                style={{ backgroundColor: link.color + "20", color: link.color }}
                            >
                                {link.label.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#7A9A82]">
                                    {link.label}
                                </p>
                                <p
                                    className="text-sm font-semibold mt-0.5"
                                    style={{ color: headColor }}
                                >
                                    {link.value}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* CV download */}
                    <a
                        href="/Doreen_Abel_CV.pdf"
                        download
                        className="flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-sm transition-colors"
                        style={{ backgroundColor: "#C07840", color: "#F5F0E8" }}
                    >
                        Download CV / Resume (PDF)
                    </a>
                </div>

                {/* Message form */}
                <div
                    className="p-6 rounded-xl border"
                    style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                >
                    {sent ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 py-10">
                            <div className="w-14 h-14 rounded-full bg-[#1C2820] flex items-center justify-center">
                                <svg className="w-7 h-7 text-[#4A8C5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-base font-bold" style={{ color: headColor }}>Message sent!</p>
                            <p className="text-xs text-[#7A9A82] text-center">
                                Thank you for reaching out. Doreen will get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                            className="flex flex-col gap-4"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] block mb-1.5">
                                        First name
                                    </label>
                                    <input
                                        required
                                        placeholder="Jane"
                                        className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none"
                                        style={{ backgroundColor: inputBg, borderColor: cardBorder, color: headColor }}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] block mb-1.5">
                                        Last name
                                    </label>
                                    <input
                                        required
                                        placeholder="Smith"
                                        className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none"
                                        style={{ backgroundColor: inputBg, borderColor: cardBorder, color: headColor }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] block mb-1.5">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder="jane@company.com"
                                    className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none"
                                    style={{ backgroundColor: inputBg, borderColor: cardBorder, color: headColor }}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] block mb-1.5">
                                    Subject
                                </label>
                                <input
                                    required
                                    placeholder="Internship opportunity / Collaboration..."
                                    className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none"
                                    style={{ backgroundColor: inputBg, borderColor: cardBorder, color: headColor }}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-[#7A9A82] block mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell me about the opportunity..."
                                    className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none resize-none"
                                    style={{ backgroundColor: inputBg, borderColor: cardBorder, color: headColor }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg text-sm font-bold tracking-wide transition-colors"
                                style={{ backgroundColor: "#C07840", color: "#F5F0E8" }}
                            >
                                Send message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Contact