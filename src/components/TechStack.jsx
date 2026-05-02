import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [activeTab, setActiveTab] = useState('web');

  const techCategories = {
    web: [
      { name: 'Laravel PHP', icon: 'laravel', color: '#FF2D20', proficiency: 90 },
      { name: 'Laravel Reverb', icon: 'laravel', color: '#FF2D20', proficiency: 85 },
      { name: 'React.js', icon: 'react', color: '#61DAFB', proficiency: 95 },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4', proficiency: 90 },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1', proficiency: 85 },
    ],
    mobile: [
      { name: 'React Native', icon: 'react', color: '#61DAFB', proficiency: 90 },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6', proficiency: 85 },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', proficiency: 95 },
      { name: 'Convex', icon: 'convex', color: '#00f5ff', proficiency: 80 },
    ],
    devops: [
      { name: 'Render', icon: 'render', color: '#46E3B7', proficiency: 85 },
      { name: 'GitHub', icon: 'github', color: '#181717', proficiency: 90 },
      { name: 'Git', icon: 'git', color: '#F05032', proficiency: 90 },
    ],
    design: [
      { name: 'Figma', icon: 'figma', color: '#F24E1E', proficiency: 85 },
    ],
  };

  const tabs = [
    { id: 'web', label: 'Web App' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'devops', label: 'DevOps & Tools' },
    { id: 'design', label: 'Design' },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="font-dm-mono text-accent-cyan text-sm mb-8">
            // 02 — TECH STACK
          </div>

          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-text-primary mb-4">
            Technologies I <span className="text-gradient-cyan-violet">Master</span>
          </h2>

          <p className="text-text-muted font-dm-sans text-lg mb-12">
            Technologies I work with across web, mobile, and infrastructure.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-12 relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-dm-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-accent-cyan'
                    : 'text-text-muted hover:text-accent-cyan'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tech Cards Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {techCategories[activeTab].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass rounded-xl p-6 border border-glass-border hover:border-accent-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/20 group"
              >
                {/* Tech Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.icon}`}
                    alt={tech.name}
                    className="w-10 h-10"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div
                    className="hidden w-10 h-10 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                </div>

                {/* Tech Name */}
                <h3 className="font-dm-sans font-semibold text-text-primary mb-3">
                  {tech.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-dm-mono text-text-muted">
                    <span>Proficiency</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
