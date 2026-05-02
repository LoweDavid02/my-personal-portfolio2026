import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Philippines',
    },
    {
      icon: Mail,
      label: 'My Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Call Me Now',
      value: '+63 123 456 7890',
      href: 'tel:+631234567890',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section
      id="contact"
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
            Let's Discuss Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Project
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
            I'm always open to discussing product design work or partnership opportunities.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="lg:grid-cols-5"
        >
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            className="lg:col-span-2"
          >
            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '1rem',
                }}
              >
                I'm available for freelance work
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6c757d',
                  lineHeight: '1.7',
                }}
              >
                Drop me a line if you have a project you think I'd be a good fit for.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div key={index}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      borderRadius: '0.75rem',
                      flexShrink: 0,
                    }}
                  >
                    <info.icon size={24} color="white" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#1a1a1a',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {info.label}:
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        style={{
                          fontSize: '1rem',
                          color: '#6c757d',
                          textDecoration: 'none',
                          transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#6366f1';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#6c757d';
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '1rem', color: '#6c757d' }}>{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '2.5rem',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.5rem',
                }}
                className="md:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: 'white',
                      border: '1px solid #e9ecef',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#6366f1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      backgroundColor: 'white',
                      border: '1px solid #e9ecef',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#6366f1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
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
                Submit
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
          }
          .lg\\:col-span-2 {
            grid-column: span 2 / span 2 !important;
          }
          .lg\\:col-span-3 {
            grid-column: span 3 / span 3 !important;
          }
        }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
