import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Cloud } from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'I build responsive and high-performance web applications using modern technologies like Laravel, React, and Vue.js, ensuring accessibility, scalability, and maintainability.',
      skills: ['Laravel', 'React.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'I design robust backend systems with RESTful APIs, real-time features using WebSockets, and efficient database architecture for optimal performance.',
      skills: ['Laravel Reverb', 'REST API', 'WebSockets', 'MySQL', 'PostgreSQL', 'Redis'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'I create cross-platform mobile applications using React Native with seamless offline support, push notifications, and real-time data synchronization.',
      skills: ['React Native', 'Convex', 'TypeScript', 'Mobile UI/UX', 'Push Notifications'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Deployment',
      description: 'I manage cloud deployments, CI/CD pipelines, and infrastructure to ensure smooth, reliable, and scalable application delivery.',
      skills: ['Docker', 'Render', 'GitHub Actions', 'CI/CD', 'Git', 'Cloud Services'],
    },
  ];

  return (
    <section
      id="tech-stack"
      ref={ref}
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            What I{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Do?
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
            I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <service.icon size={32} color="white" />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '1rem',
                  color: '#1a1a1a',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6c757d',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                }}
              >
                {service.description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.375rem 0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: '#f8f9fa',
                      color: '#6366f1',
                      borderRadius: '0.375rem',
                      border: '1px solid #e9ecef',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
