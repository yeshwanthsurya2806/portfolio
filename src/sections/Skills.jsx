import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const SkillPill = ({ skill, gradient, isInView, index }) => {
  const gradientMap = {
    'neon-purple': 'from-neon-purple to-neon-pink',
    'neon-cyan': 'from-neon-cyan to-neon-purple',
    'neon-lime': 'from-neon-lime to-neon-cyan',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        type: 'spring',
        bounce: 0.3,
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`px-5 py-2 rounded-full border-2 border-transparent bg-gradient-to-r ${gradientMap[gradient]} bg-clip-border hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
        animate={{ x: [-100, 100] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />

      <span className="relative z-10 text-sm font-semibold text-white">
        {skill}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ category, skills, icon: Icon, gradient, isInView, categoryIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
      className="space-y-4"
    >
      {/* Category Title */}
      <motion.h3
        className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${
          gradient === 'neon-purple'
            ? 'from-neon-purple to-neon-pink'
            : gradient === 'neon-cyan'
            ? 'from-neon-cyan to-neon-purple'
            : 'from-neon-lime to-neon-cyan'
        } bg-clip-text text-transparent`}
      >
        {category}
      </motion.h3>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillPill
            key={skill}
            skill={skill}
            gradient={gradient}
            isInView={isInView}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            <span className="bg-gradient-to-r from-neon-cyan to-neon-lime bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>

          {/* Skills Categories */}
          <div className="space-y-10">
            {portfolioData.skills.map((skillGroup, index) => (
              <SkillCategory
                key={skillGroup.category}
                category={skillGroup.category}
                skills={skillGroup.skills}
                icon={skillGroup.icon}
                gradient={skillGroup.gradient}
                isInView={isInView}
                categoryIndex={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
