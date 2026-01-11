import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = ["about", "skills", "projects", "contact"];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav 
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}>
            
            <a href="#" className="logo">
                <span className="logo-text">Yash</span>
                <span className="logo-dot">.</span>
            </a>

            <ul className="nav-links desktop-nav">
                {navLinks.map((link, index) => (
                    <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}>
                        <a 
                            href={link.href}
                            className={activeSection === link.href.slice(1) ? 'active' : ''}>
                            {link.name}
                            {activeSection === link.href.slice(1) && (
                                <motion.span 
                                    className="active-indicator"
                                    layoutId="activeIndicator"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    </motion.li>
                ))}
            </ul>

            <button 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={link.href}
                                className={activeSection === link.href.slice(1) ? 'active' : ''}
                                onClick={handleLinkClick}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;