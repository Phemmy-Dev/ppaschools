import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
    return (
        <footer className="bg-brand-slate text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* School Info */}
                    <div className="sm:col-span-2 lg:col-span-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Profound Performance Academy Logo"
                                className="w-12 h-12 object-contain rounded-full"
                            />
                            <h3 className="font-serif text-xl font-bold text-brand-gold">
                                Profound Performance Academy
                            </h3>
                        </div>
                        <p className="font-sans text-gray-300 text-sm leading-relaxed">
                            <span className="italic">"Knowledge is Key."</span>
                            <br />
                            Creating an environment for proper learning through practical
                            teaching.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-base font-semibold mb-5 text-brand-gold-light">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 font-sans text-sm text-gray-300">
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-brand-gold transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/academics"
                                    className="hover:text-brand-gold transition-colors"
                                >
                                    Academics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/online-school"
                                    className="hover:text-brand-gold transition-colors"
                                >
                                    Online School
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.link/w6zfaj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-gold transition-colors"
                                >
                                    Admissions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-base font-semibold mb-5 text-brand-gold-light">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 font-sans text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>
                                    No. 3 Rahinna Street, Opposite AEDC Office, Angua Gede,
                                    Jikwoyi, Abuja
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-gold shrink-0" />
                                <a href="tel:+2347076153892" className="hover:text-brand-gold transition-colors">+234 707 615 3892</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-gold shrink-0" />
                                <span>ppacademyofficial@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 className="font-serif text-base font-semibold mb-5 text-brand-gold-light">
                            Connect With Us
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/61564853650936"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2.5 rounded-full hover:bg-brand-gold transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/p/DKKGW8Vo4gb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2.5 rounded-full hover:bg-brand-gold transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center font-sans text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Profound Performance Academy. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

