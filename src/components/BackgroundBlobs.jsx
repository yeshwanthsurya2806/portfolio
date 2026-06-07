import { motion } from 'framer-motion';

export const BackgroundBlobs = () => {
  const blobs = [
    {
      id: 1,
      color: 'from-neon-purple to-neon-pink',
      size: 'w-64 h-64',
      top: '10%',
      left: '10%',
      delay: 0,
    },
    {
      id: 2,
      color: 'from-neon-cyan to-neon-purple',
      size: 'w-80 h-80',
      top: '50%',
      right: '10%',
      delay: 2,
    },
    {
      id: 3,
      color: 'from-neon-lime to-neon-cyan',
      size: 'w-72 h-72',
      bottom: '10%',
      left: '50%',
      delay: 4,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} bg-gradient-to-r ${blob.color} rounded-full blur-3xl opacity-10`}
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
          animate={{
            y: [0, 50, -50, 0],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: 20,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.1),rgba(10,10,10,1))]" />
    </div>
  );
};
