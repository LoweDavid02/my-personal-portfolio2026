import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import profileImage from '../assets/Lowe.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Platforms', value: 2, suffix: '' },
  ];

  const AnimatedCounter = ({ end, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, inView]);

    return (
      <span className="text-4xl font-bold text-gradient-cyan-violet">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="font-dm-mono text-accent-cyan text-sm mb-8">
            // 01 — ABOUT ME
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 border-2 border-accent-cyan/30 glow-cyan relative overflow-hidden group">
                {/* Decorative corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent-cyan"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-cyan"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent-cyan"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent-cyan"></div>

                {/* Profile Image */}
                <div className="aspect-square rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-accent-violet/10 animate-gradient-shift"></div>
                  <img 
                    src={profileImage} 
                    alt="Lowe David Profile" 
                    className="relative z-10 w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Glowing ring */}
                  <div className="absolute inset-0 border-4 border-accent-cyan/30 rounded-xl animate-pulse-glow"></div>
                </div>
              </div>
            </motion.div>

            {/* Right - Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-syne font-bold text-4xl sm:text-5xl text-text-primary">
                Crafting Digital <span className="text-gradient-cyan-violet">Experiences</span>
              </h2>

              <div className="space-y-4 text-text-muted font-dm-sans text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise in building scalable web
                  applications and cross-platform mobile apps. I thrive at the intersection of
                  clean code and elegant design, delivering real-time, high-performance solutions
                  end-to-end.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open source,
                  or sketching UI concepts in Figma.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass rounded-lg p-4 border-l-2 border-accent-cyan hover:border-accent-violet transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        inView={inView}
                      />
                      <div className="text-xs text-text-muted font-dm-mono mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
