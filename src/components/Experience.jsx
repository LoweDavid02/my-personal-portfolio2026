import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      period: '2024 – Present',
      role: 'Full-Stack Developer',
      company: 'Freelance / Student Projects',
      description:
        'Developing modern web and mobile applications using cutting-edge technologies. Building scalable solutions with React ecosystems, Laravel backend, and real-time features while pursuing my Bachelor of Science in Information Systems degree.',
      responsibilities: [
        'Built and deployed full-stack web apps using Laravel + React.js with real-time features via Laravel Reverb',
        'Developed cross-platform mobile apps using React Native and Convex backend',
        'Implemented responsive UI components using Tailwind CSS and TypeScript',
        'Collaborated with teams using GitHub for version control and project management',
      ],
      tags: ['React.js', 'Laravel', 'React Native', 'Convex', 'TypeScript', 'Tailwind CSS', 'Inertia.js', 'Figma'],
    },
    {
      period: '2022 – 2024',
      role: 'Learning Web Development Fundamentals',
      company: 'Self-Study & Academic Projects',
      description:
        'Built a strong foundation in web development through hands-on learning and academic projects. Mastered core technologies and database management while developing various practice applications.',
      responsibilities: [
        'Learned Java programming fundamentals and object-oriented concepts',
        'Developed web pages using HTML, CSS, and JavaScript',
        'Created dynamic websites with PHP and MySQL databases',
        'Set up local development environments using XAMPP and phpMyAdmin',
        'Explored Python basics for scripting and automation',
      ],
      tags: ['Java', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Python', 'XAMPP'],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              fontFamily: 'Poppins, sans-serif',
              marginBottom: '1rem',
            }}
          >
            Work{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#6c757d',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}
          >
            My professional journey and the experiences that shaped my expertise in full-stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                marginBottom: index < experiences.length - 1 ? '3rem' : '0',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '2.5rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Period Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Calendar size={16} color="#6366f1" />
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#6366f1',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      fontFamily: 'Poppins, sans-serif',
                      color: '#1a1a1a',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#6366f1',
                      fontSize: '1.125rem',
                      fontWeight: '600',
                    }}
                  >
                    <Briefcase size={18} />
                    {exp.company}
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                  }}
                >
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0 0 1.5rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.9375rem',
                        color: '#6c757d',
                        lineHeight: '1.6',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#6366f1',
                          borderRadius: '50%',
                          marginTop: '0.5rem',
                          flexShrink: 0,
                        }}
                      ></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.375rem 0.875rem',
                        fontSize: '0.8125rem',
                        fontWeight: '500',
                        backgroundColor: '#f8f9fa',
                        color: '#6366f1',
                        borderRadius: '0.375rem',
                        border: '1px solid #e9ecef',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
