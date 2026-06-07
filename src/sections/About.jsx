import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';
import { useState, useEffect } from 'react';

const StatCounter = ({ value, label, isInView }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = numericValue / 50;
    const interval = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, numericValue]);

  return (
    <motion.div
      className="text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
        {value.includes('∞') ? value : count}{value.includes('☕') ? ' ☕' : ''}
      </div>
      <p className="text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
};

export const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-48 h-48 md:w-64 md:h-64"
              >
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan p-1">
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                      YS
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio and Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Bio */}
              <p className="text-lg text-gray-300 leading-relaxed">
                {portfolioData.personal.bio}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {portfolioData.about.stats.map((stat, i) => (
                  <StatCounter
                    key={i}
                    value={stat.value}
                    label={stat.label}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating Emojis */}
          <motion.div
            className="mt-16 flex justify-center gap-8 flex-wrap"
            variants={containerVariants}
          >
            {portfolioData.about.emojis.map((emoji, i) => (
              <motion.div
                key={i}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                className="text-4xl md:text-5xl"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
