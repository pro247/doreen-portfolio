import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => {
        if (path === "/") return location.pathname === "/"
        return location.pathname.startsWith(path)
    }

    return (
        <nav
            className="sticky top-0 z-50 w-full border-b border-[#1E2E20]"
            style={{ backgroundColor: "rgba(10, 15, 11, 0.97)" }}
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-16">

                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#4A8C5C] flex items-center justify-center text-sm font-black text-[#F5F0E8]">
                            DP
                        </div>
                        <span className="text-base font-bold text-[#F5F0E8] tracking-tight">
                            Doreen<span className="text-[#C07840]">.</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                        ? "text-[#F5F0E8] bg-[#1C2820]"
                                        : "text-[#7A9A82] hover:text-[#F5F0E8] hover:bg-[#141A14]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/contact"
                            className="hidden md:block bg-[#C07840] hover:bg-[#A06030] text-[#F5F0E8] text-sm font-bold px-5 py-2 rounded-lg transition-colors duration-200 tracking-wide"
                        >
                            Let's talk
                        </Link>

                        <button
                            className="md:hidden p-2 rounded-lg text-[#7A9A82] hover:text-[#F5F0E8] hover:bg-[#141A14] transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden pb-4 border-t border-[#1E2E20] pt-3">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                                            ? "text-[#F5F0E8] bg-[#1C2820]"
                                            : "text-[#7A9A82] hover:text-[#F5F0E8]"
                                        }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="mt-2 w-full text-center bg-[#C07840] hover:bg-[#A06030] text-[#F5F0E8] text-sm font-bold px-5 py-3 rounded-lg transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                Let's talk
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar