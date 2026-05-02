import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: 'RealtimeBoard',
      category: 'WEB APPLICATION',
      description:
        'A real-time collaborative project board built with Laravel, Laravel Reverb (WebSockets), React.js, and PostgreSQL. Features live updates, drag-and-drop tasks, and role-based access control.',
      tags: ['Laravel', 'Reverb', 'React.js', 'PostgreSQL', 'WebSockets'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      title: 'TaskFlow Mobile',
      category: 'MOBILE APP',
      description:
        'A cross-platform task management mobile app built with React Native, TypeScript, and Convex for real-time backend sync. Supports offline mode and push notifications.',
      tags: ['React Native', 'TypeScript', 'Convex', 'Mobile'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    },
    {
      title: 'DevPortal Dashboard',
      category: 'WEB APPLICATION',
      description:
        'A developer dashboard for managing API keys, monitoring usage metrics, and deploying services. Deployed on Render with CI/CD via GitHub Actions.',
      tags: ['React.js', 'Laravel', 'PostgreSQL', 'Render'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'E-Commerce Platform',
      category: 'WEB APPLICATION',
      description:
        'Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with Laravel and Vue.js.',
      tags: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    },
    {
      title: 'Social Media App',
      category: 'MOBILE APP',
      description:
        'Social networking mobile application with real-time messaging, stories, and content sharing. Built with React Native and Firebase.',
      tags: ['React Native', 'Firebase', 'Real-time', 'Social'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    },
    {
      title: 'Analytics Dashboard',
      category: 'WEB APPLICATION',
      description:
        'Comprehensive analytics dashboard with data visualization, reporting, and insights. Features interactive charts and real-time data updates.',
      tags: ['React.js', 'Chart.js', 'Laravel', 'Analytics'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#ffffff',
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
            My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Portfolio
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
            Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
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
              {/* Project Image */}
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  overflow: 'hidden',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Project Content */}
              <div style={{ padding: '1.5rem' }}>
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#6366f1',
                    letterSpacing: '0.1em',
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.category}
                </p>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '1rem',
                    color: '#1a1a1a',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#6c757d',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: '#f8f9fa',
                        color: '#6c757d',
                        borderRadius: '0.375rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#6366f1',
                    fontWeight: '600',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'gap 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.gap = '0.75rem';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.gap = '0.5rem';
                  }}
                >
                  Case Study
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="https://github.com/LoweDavid02"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
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
            More Projects
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
