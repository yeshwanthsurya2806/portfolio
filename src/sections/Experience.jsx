import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';

const TimelineItem = ({ item, index, isInView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mb-12`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 backdrop-blur-sm border border-neon-purple/30 hover:border-neon-cyan/50 rounded-2xl p-6 md:p-8 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{item.icon}</span>
            <span className="text-neon-cyan font-semibold text-lg">{item.year}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
          <p className="text-neon-pink text-sm font-semibold mb-3">{item.subtitle}</p>
          <p className="text-gray-400 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>

      {/* Timeline Center */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan shadow-lg shadow-neon-purple/50"
        />
        <div className="w-1 h-16 bg-gradient-to-b from-neon-cyan to-transparent" />
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export const Experience = () => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-neon-lime to-neon-pink bg-clip-text text-transparent">
              My Journey
            </span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent" />

            {/* Timeline Items */}
            {portfolioData.experience.map((item, index) => (
              <TimelineItem
                key={item.year + index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
