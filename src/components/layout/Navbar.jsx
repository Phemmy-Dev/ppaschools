import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Academics", path: "/academics" },
        { name: "Online School", path: "/online-school" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-brand-cream/95 backdrop-blur-sm border-b border-brand-gold/20 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src={logo}
                            alt="Profound Performance Academy Logo"
                            className="w-14 h-14 object-contain rounded-full shadow-md group-hover:shadow-lg transition-shadow"
                        />
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-brand-slate text-lg leading-tight">
                                Profound Performance
                            </span>
                            <span className="font-sans text-brand-gold text-xs tracking-[0.2em] font-semibold uppercase">
                                Academy
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all ${isActive(link.path)
                                    ? "bg-brand-gold/10 text-brand-gold"
                                    : "text-brand-charcoal hover:text-brand-gold hover:bg-brand-gold/5"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.link/w6zfaj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 bg-brand-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full font-sans font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Enrol Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-brand-slate hover:text-brand-gold focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-brand-cream border-t border-brand-gold/20 px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block px-4 py-3 rounded-lg font-sans font-medium transition-colors ${isActive(link.path)
                                ? "bg-brand-gold/10 text-brand-gold"
                                : "text-brand-charcoal hover:text-brand-gold hover:bg-brand-gold/5"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.link/w6zfaj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-brand-gold text-white px-4 py-3 rounded-lg font-sans font-bold mt-4 shadow-md"
                        onClick={() => setIsOpen(false)}
                    >
                        Enrol Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

