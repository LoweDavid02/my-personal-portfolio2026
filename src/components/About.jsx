import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase } from 'lucide-react';
import profileImage from '../assets/lowe1.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '4rem 3rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f0f0f0',
          }}
          className="about-card"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="lg:grid-cols-2"
          >
            {/* Left - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={profileImage}
                  alt="Lowe David"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                }}
              >
                Aspiring{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Full-Stack Developer
                </span>
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#6c757d',
                    lineHeight: '1.8',
                  }}
                >
                  I'm a Bachelor of Science in Information Systems student with a passion for creating modern, user-friendly web and mobile applications. My journey in development started in 2022, learning the fundamentals with Java, HTML, CSS, JavaScript, MySQL, PHP, and Python.
                </p>

                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#6c757d',
                    lineHeight: '1.8',
                  }}
                >
                  Since 2024, I've been focusing on modern technologies including React.js, Vite, Laravel PHP, Convex, React Native, Tailwind CSS, TypeScript, Inertia.js, and Figma. I love building scalable applications with clean code and intuitive user experiences.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="#projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1.75rem',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '0.5rem',
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
                  <Briefcase size={20} />
                  My Projects
                </a>

                <a
                  href="/Lowe David C. Tubat.pdf"
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1.75rem',
                    backgroundColor: 'transparent',
                    color: '#6366f1',
                    fontWeight: '600',
                    border: '2px solid #6366f1',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#6366f1';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6366f1';
                  }}
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-card {
            padding: 5rem 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
