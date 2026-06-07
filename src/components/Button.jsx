import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className,
  ...props 
}) => {
  const baseClass = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative group overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-lg hover:shadow-neon-purple/50",
    secondary: "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/50",
  };

  const content = (
    <motion.button
      className={clsx(baseClass, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return content;
};
