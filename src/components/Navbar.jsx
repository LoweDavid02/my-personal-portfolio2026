import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80px',
            }}
          >
            {/* Logo */}
            <a
              href="#home"
              style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                fontFamily: 'Poppins, sans-serif',
                color: '#1a1a1a',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#6366f1';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#1a1a1a';
              }}
            >
              Lowe David Tubat
            </a>

            {/* Desktop Navigation */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2.5rem',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: '500',
                    color: activeSection === link.href.slice(1) ? '#6366f1' : '#6c757d',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#6366f1';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.href.slice(1)) {
                      e.target.style.color = '#6c757d';
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}

              {/* Contact Button */}
              <a
                href="#contact"
                style={{
                  padding: '0.625rem 1.5rem',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '0.9375rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#8b5cf6';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6366f1';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#1a1a1a',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 900,
          transition: 'all 0.3s',
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        }}
        className="mobile-menu-wrapper"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 0.3s',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '320px',
            backgroundColor: 'white',
            padding: '2rem',
            transition: 'transform 0.3s ease',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            overflowY: 'auto',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  color: activeSection === link.href.slice(1) ? '#6366f1' : '#6c757d',
                  textDecoration: 'none',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s',
                  backgroundColor: activeSection === link.href.slice(1) ? '#f8f9fa' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.color = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6c757d';
                  }
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: '#6366f1',
                color: 'white',
                fontWeight: '600',
                textAlign: 'center',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                marginTop: '1rem',
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
