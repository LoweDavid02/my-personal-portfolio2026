import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: 'RealtimeBoard',
      description:
        'A real-time collaborative project board built with Laravel, Laravel Reverb (WebSockets), React.js, and PostgreSQL. Features live updates, drag-and-drop tasks, and role-based access control.',
      tags: ['Laravel', 'Reverb', 'React.js', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com/LoweDavid02',
      demo: '#',
      gradient: 'from-accent-cyan/20 to-accent-violet/20',
    },
    {
      title: 'TaskFlow Mobile',
      description:
        'A cross-platform task management mobile app built with React Native, TypeScript, and Convex for real-time backend sync. Supports offline mode and push notifications.',
      tags: ['React Native', 'TypeScript', 'Convex', 'JavaScript'],
      github: 'https://github.com/LoweDavid02',
      demo: '#',
      gradient: 'from-accent-violet/20 to-accent-rose/20',
    },
    {
      title: 'DevPortal',
      description:
        'A developer dashboard for managing API keys, monitoring usage metrics, and deploying services. Deployed on Render with CI/CD via GitHub Actions.',
      tags: ['React.js', 'Laravel', 'PostgreSQL', 'Render', 'GitHub'],
      github: 'https://github.com/LoweDavid02',
      demo: '#',
      gradient: 'from-accent-rose/20 to-accent-cyan/20',
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="glass rounded-2xl overflow-hidden border border-glass-border hover:border-accent-cyan group"
      >
        {/* Project Mockup Area */}
        <div
          className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary/50 to-transparent"></div>
          <h3 className="font-syne font-bold text-3xl text-text-primary relative z-10 group-hover:scale-110 transition-transform duration-300">
            {project.title}
          </h3>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-accent-cyan/30 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-accent-violet/30 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-dm-mono bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-text-muted font-dm-sans text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-dm-mono text-accent-cyan hover:text-accent-violet transition-colors"
            >
              <ExternalLink size={18} />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-dm-mono text-accent-cyan hover:text-accent-violet transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="font-dm-mono text-accent-cyan text-sm mb-8">
            // 03 — PROJECTS
          </div>

          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-text-primary mb-4">
            Featured <span className="text-gradient-cyan-violet">Work</span>
          </h2>

          <p className="text-text-muted font-dm-sans text-lg mb-12">
            A selection of projects that showcase my skills and passion for development.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <a
              href="https://github.com/LoweDavid02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-dm-mono text-sm border-2 border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-bg-primary transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
