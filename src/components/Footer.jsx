import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/LoweDavid02', label: 'GitHub' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/lowe-david', label: 'LinkedIn' },
    { name: 'Twitter', href: 'https://twitter.com/lowedavid', label: 'Twitter' },
    { name: 'Email', href: 'mailto:lowedavid02@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
        borderTop: '1px solid #e9ecef',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
              }}
            >
              Lowe David
            </h3>
            <p
              style={{
                color: '#6c757d',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                maxWidth: '400px',
                marginBottom: '1.5rem',
              }}
            >
              Full-Stack Developer & Laravel Specialist crafting elegant solutions for complex problems.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'white',
                    border: '1px solid #e9ecef',
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6366f1';
                    e.currentTarget.style.color = '#6366f1';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.color = '#6c757d';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
              }}
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    color: '#6c757d',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#6366f1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6c757d';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
            className="back-to-top-container"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '0.5rem',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
              }}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: '#e9ecef',
            marginBottom: '2rem',
          }}
        ></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: '#adb5bd',
            }}
          >
            © 2025{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600',
              }}
            >
              Lowe David
            </span>
            . All rights reserved.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
          .back-to-top-container {
            justify-content: flex-end !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
