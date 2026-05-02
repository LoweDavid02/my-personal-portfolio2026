import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Mail,
      label: 'GitHub',
      value: 'github.com/LoweDavid02',
      href: 'https://github.com/LoweDavid02',
    },
    {
      icon: Mail,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('This is a UI-only form. Connect it to your backend to enable submissions.');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="font-dm-mono text-accent-cyan text-sm mb-8">
            // 05 — GET IN TOUCH
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="font-syne font-bold text-4xl sm:text-5xl text-text-primary leading-tight">
                Let's build something{' '}
                <span className="text-gradient-cyan-violet">remarkable</span> together.
              </h2>

              <p className="text-text-muted font-dm-sans text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="glass rounded-lg p-4 flex items-center gap-4 border border-glass-border hover:border-accent-cyan transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="text-accent-cyan" size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-dm-mono text-text-muted">{info.label}</div>
                      <div className="text-sm font-dm-sans text-text-primary group-hover:text-accent-cyan transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/LoweDavid02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300 hover:scale-110 glow-cyan"
                  aria-label="GitHub"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300 hover:scale-110 glow-cyan"
                  aria-label="LinkedIn"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300 hover:scale-110 glow-cyan"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-glass-border space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary font-dm-sans focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-text-muted font-dm-sans text-sm transition-all peer-focus:-top-6 peer-focus:text-accent-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-accent-cyan peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary font-dm-sans focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-text-muted font-dm-sans text-sm transition-all peer-focus:-top-6 peer-focus:text-accent-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-accent-cyan peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Your Email
                  </label>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    placeholder=" "
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary font-dm-sans focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all peer"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-3 text-text-muted font-dm-sans text-sm transition-all peer-focus:-top-6 peer-focus:text-accent-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-accent-cyan peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Subject
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder=" "
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary font-dm-sans focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 transition-all resize-none peer"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-text-muted font-dm-sans text-sm transition-all peer-focus:-top-6 peer-focus:text-accent-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-accent-cyan peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary font-dm-sans font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shimmer"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
