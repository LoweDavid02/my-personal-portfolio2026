import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const techBadges = [
    { name: 'React', color: '#61DAFB', delay: 0 },
    { name: 'Laravel', color: '#FF2D20', delay: 0.2 },
    { name: 'PostgreSQL', color: '#4169E1', delay: 0.4 },
    { name: 'React Native', color: '#61DAFB', delay: 0.6 },
    { name: 'TypeScript', color: '#3178C6', delay: 0.8 },
  ];

  const socialLinks = [
    { icon: Mail, href: 'https://github.com/LoweDavid02', label: 'GitHub' },
    { icon: Mail, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Parallax background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Code Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="code-tag text-accent-cyan">
                &lt; Full-Stack Developer /&gt;
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight"
            >
              <span className="text-gradient-cyan-violet">Lowe David</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-dm-mono text-xl sm:text-2xl text-accent-cyan h-8"
            >
              <TypeAnimation
                sequence={[
                  'Web App Developer',
                  2000,
                  'Mobile App Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Laravel Specialist',
                  2000,
                  'React Native Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-text-muted text-lg leading-relaxed max-w-xl font-dm-sans"
            >
              I craft high-performance web & mobile applications with clean architecture,
              real-time capabilities, and pixel-perfect interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
              </a>
              <a
                href="/cv.pdf"
                download
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300 hover:scale-110 glow-cyan"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Code Window Mockup */}
            <div className="glass rounded-2xl p-6 w-full max-w-md border-2 border-accent-cyan/30 glow-cyan">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent-rose"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="font-dm-mono text-sm space-y-2">
                <div className="text-accent-violet">const <span className="text-accent-cyan">developer</span> = {'{'}</div>
                <div className="pl-4 text-text-muted">
                  name: <span className="text-green-400">"Lowe David"</span>,
                </div>
                <div className="pl-4 text-text-muted">
                  skills: <span className="text-yellow-400">["React", "Laravel", "React Native"]</span>,
                </div>
                <div className="pl-4 text-text-muted">
                  passion: <span className="text-green-400">"Building amazing apps"</span>,
                </div>
                <div className="pl-4 text-text-muted">
                  available: <span className="text-accent-cyan">true</span>
                </div>
                <div className="text-accent-violet">{'}'}</div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            {techBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + badge.delay, duration: 0.5 }}
                className="absolute glass rounded-lg px-3 py-2 text-xs font-dm-mono border border-accent-cyan/30"
                style={{
                  top: `${20 + index * 15}%`,
                  left: index % 2 === 0 ? '-10%' : 'auto',
                  right: index % 2 === 1 ? '-10%' : 'auto',
                  animation: `float ${4 + index}s ease-in-out infinite`,
                  animationDelay: `${badge.delay}s`,
                }}
              >
                <span style={{ color: badge.color }}>{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-dm-mono text-xs text-text-muted">Scroll to explore</span>
        <ChevronDown className="text-accent-cyan animate-bounce-slow" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
