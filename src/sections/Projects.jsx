import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';

const ProjectCard = ({ project, index, isInView }) => {
  const isMain = project.featured;
  const isComingSoon = project.status === 'coming-soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative rounded-2xl overflow-hidden ${
        isMain ? 'md:col-span-2 md:row-span-2' : ''
      } h-64 md:h-80`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          isComingSoon
            ? 'bg-gradient-to-br from-gray-700/20 to-gray-900/40 backdrop-blur-sm'
            : 'bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 backdrop-blur-sm'
        }`}
      />

      {/* Glowing Border */}
      <div className="absolute inset-0 border border-neon-purple/30 group-hover:border-neon-cyan/50 rounded-2xl transition-all duration-300" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Title & Description */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="space-y-4">
          {/* Tech Pills */}
          {project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-neon-purple/30 border border-neon-purple/50 text-neon-cyan text-xs rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}

          {/* Coming Soon Badge */}
          {isComingSoon && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-semibold">Building...</span>
            </div>
          )}

          {/* Links */}
          {!isComingSoon && (
            <div className="flex gap-3">
              <Button
                variant="secondary"
                href={project.github}
                className="flex items-center gap-2 py-2 px-4 text-sm"
              >
                <Github size={16} /> Code
              </Button>
              <Button
                variant="primary"
                href={project.live}
                className="flex items-center gap-2 py-2 px-4 text-sm"
              >
                <ExternalLink size={16} /> Demo
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
