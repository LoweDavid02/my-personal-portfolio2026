import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      period: '2023 – Present',
      role: 'Full-Stack Developer',
      company: 'Freelance / Remote',
      responsibilities: [
        'Built and deployed full-stack web apps using Laravel + React.js with real-time features via Laravel Reverb.',
        'Developed cross-platform mobile apps using React Native and Convex backend.',
        'Managed deployments on Render and maintained CI/CD pipelines via GitHub.',
      ],
      tags: ['Laravel', 'React.js', 'React Native', 'PostgreSQL', 'Convex', 'Render'],
    },
    {
      period: '2022 – 2023',
      role: 'Junior Web Developer',
      company: 'Tech Solutions Inc.',
      responsibilities: [
        'Developed RESTful APIs with Laravel and integrated React.js frontends.',
        'Collaborated on PostgreSQL database design and optimization.',
        'Implemented responsive UI components using Tailwind CSS.',
      ],
      tags: ['Laravel', 'React.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="font-dm-mono text-accent-cyan text-sm mb-8">
            // 04 — EXPERIENCE
          </div>

          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-text-primary mb-4">
            Professional <span className="text-gradient-cyan-violet">Journey</span>
          </h2>

          <p className="text-text-muted font-dm-sans text-lg mb-12">
            My career path and the experiences that shaped my expertise.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Center line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-cyan"></div>

            {/* Left line - visible on mobile */}
            <div className="md:hidden absolute left-4 w-0.5 h-full bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-cyan"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                } pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-4 h-4 bg-accent-cyan rounded-full border-4 border-bg-primary ${
                    index % 2 === 0
                      ? 'md:right-[calc(50%-8px)] left-[8px] md:left-auto'
                      : 'md:left-[calc(50%-8px)] left-[8px]'
                  } top-0 animate-pulse-glow`}
                ></div>

                {/* Content Card */}
                <div
                  className={`glass rounded-xl p-6 border border-glass-border hover:border-accent-cyan transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {/* Period Tag */}
                  <div
                    className={`inline-block px-4 py-1 mb-4 text-xs font-dm-mono bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/30 ${
                      index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                    }`}
                  >
                    {exp.period}
                  </div>

                  {/* Role & Company */}
                  <h3 className="font-syne font-bold text-2xl text-text-primary mb-2 clear-both">
                    {exp.role}
                  </h3>
                  <p className="text-accent-cyan font-dm-sans mb-4">{exp.company}</p>

                  {/* Responsibilities */}
                  <ul
                    className={`space-y-2 mb-4 text-text-muted font-dm-sans text-sm ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    } text-left`}
                  >
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-cyan mt-1 flex-shrink-0">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    } justify-start`}
                  >
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-dm-mono bg-bg-secondary text-text-muted rounded border border-glass-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
