import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            for (const section of sections) {
                if (section === 'home') {
                    if (window.scrollY < 100) {
                        setActiveSection('home');
                        break;
                    }
                    continue;
                }
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        if (href === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.querySelector(href);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${isScrolled ? 'shadow-lg py-3' : 'bg-transparent py-6'}`} style={isScrolled ? { backgroundColor: 'var(--theme-primary)' } : {}}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-600 ${isScrolled ? 'bg-white' : ''}`} style={!isScrolled ? { backgroundColor: 'var(--theme-primary)' } : {}}>
                        <img src="logo.svg" alt="Blissful Logo" className="w-6 h-6 transition-all duration-600" style={isScrolled ? { filter: 'brightness(0.6) sepia(1) saturate(10) hue-rotate(-50deg)' } : {}} />
                    </div>
                    <span className={`font-bold text-xl transition-colors duration-600 ${isScrolled ? 'text-white' : ''}`} style={!isScrolled ? { color: 'var(--theme-text)' } : {}}>Blissful</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`text-sm font-medium transition-colors duration-600 ${isScrolled ? (activeSection === item.href.substring(1) ? 'text-white font-bold' : 'text-white/70 hover:text-white/80') : (activeSection === item.href.substring(1) ? 'font-bold' : 'opacity-70')}`}
                            style={!isScrolled ? { color: activeSection === item.href.substring(1) ? 'var(--theme-primary)' : 'var(--theme-text)' } : {}}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-4 rounded-lg transition-colors duration-600"
                    style={!isScrolled ? { color: 'var(--theme-text)' } : { color: 'white' }}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 transition-colors duration-600" />
                    ) : (
                        <Menu className="w-6 h-6 transition-colors duration-600" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={`md:hidden border-t py-4 px-6 transition-colors duration-600 ${isScrolled ? 'border-white/10' : 'border-[var(--theme-border)]/10'}`} style={isScrolled ? { backgroundColor: 'var(--theme-primary)' } : { backgroundColor: 'var(--theme-background)' }}>
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`font-medium py-2 transition-colors duration-600 ${isScrolled ? 'text-white/70 hover:text-white/80' : 'opacity-70'}`}
                                style={!isScrolled ? { color: 'var(--theme-text)' } : {}}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
