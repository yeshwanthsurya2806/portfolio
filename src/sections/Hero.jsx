import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { portfolioData } from '../data/portfolio';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = portfolioData.hero.roles;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentRole) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== '') {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const mainText = "Yeshwanth Surya";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
      <motion.div
        className="text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Main Text - Letter by letter */}
        <div className="mb-6 overflow-hidden">
          <div className="flex justify-center flex-wrap gap-1">
            {mainText.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {portfolioData.hero.tagline}
        </motion.p>

        {/* Typewriter Effect */}
        <motion.div
          variants={itemVariants}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <p className="text-2xl md:text-3xl font-semibold">
            <span className="text-neon-cyan">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="text-neon-pink ml-1"
            >
              |
            </motion.span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {portfolioData.hero.cta.map((button, i) => (
            <Button
              key={i}
              variant={button.type}
              href={button.href}
              className="px-8 py-3 text-base md:text-lg"
            >
              {button.label}
            </Button>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mb-12"
        >
          <motion.a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-gray-400 hover:text-neon-pink transition-colors duration-300"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-gray-400 hover:text-neon-lime transition-colors duration-300"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown className="text-neon-cyan" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
