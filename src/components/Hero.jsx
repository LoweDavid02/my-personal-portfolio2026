import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import profileImage from '../assets/lowe2.png';

const Hero = () => {
  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '10+', label: 'Technologies' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '10rem 1.5rem 6rem',
        background: '#fafbfc',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '4rem 3rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            marginBottom: '4rem',
          }}
          className="hero-card"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Left Content */}
            <div style={{ textAlign: 'center' }} className="hero-content">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '1.125rem',
                  color: '#6c757d',
                  marginBottom: '1rem',
                  fontWeight: '500',
                }}
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: '800',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Lowe David Tubat
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '1.25rem',
                  color: '#6c757d',
                  maxWidth: '700px',
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.8',
                }}
              >
                Bachelor of Science in Information Systems student passionate about building modern web and mobile applications. Specializing in React, Laravel, and React Native development.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <a
                  href="mailto:louiecamarines21@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(99, 102, 241, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#8b5cf6';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 15px rgba(99, 102, 241, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#6366f1';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px rgba(99, 102, 241, 0.3)';
                  }}
                >
                  Say Hello!
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  maxWidth: '500px',
                  width: '100%',
                }}
              >
                <img
                  src={profileImage}
                  alt="Lowe David Tubat"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '1.5rem',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '2.5rem 2rem',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s',
                border: '1px solid #f0f0f0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
              }}
            >
              <div
                style={{
                  fontSize: '2.75rem',
                  fontWeight: '800',
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.75rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#6c757d',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-content {
            text-align: left !important;
          }
          .hero-content > div:last-of-type {
            justify-content: flex-start !important;
          }
          .hero-card {
            padding: 5rem 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
