import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'tech-stack', 'projects', 'experience', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-accent-cyan shadow-lg shadow-accent-cyan/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="font-dm-mono text-xl text-accent-cyan">
                &lt;
                <span className="font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                  LD
                </span>
                /&gt;
              </span>
              <span className="inline-block w-0.5 h-6 bg-accent-cyan animate-blink ml-1"></span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-dm-mono text-sm transition-colors relative group ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent-cyan'
                      : 'text-text-muted hover:text-accent-cyan'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${
                      activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-accent-cyan p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-bg-primary/95 backdrop-blur-lg transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-20 right-0 w-64 h-[calc(100vh-5rem)] glass border-l border-accent-cyan/20 p-8 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`font-dm-mono text-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-cyan translate-x-2'
                    : 'text-text-muted hover:text-accent-cyan hover:translate-x-2'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-accent-cyan mr-2">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
