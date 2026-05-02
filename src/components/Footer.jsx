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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-dm-mono text-sm text-text-muted hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent mb-8"></div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-dm-mono text-sm text-text-muted text-center sm:text-left"
          >
            Designed & Built by{' '}
            <span className="text-accent-cyan">Lowe David</span> — 2025
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-glass-border hover:border-accent-cyan text-accent-cyan hover:scale-105 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <span className="font-dm-mono text-sm">Back to top</span>
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent-violet/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
