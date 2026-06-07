import { useCursor } from '../hooks/useCursor';

export const AnimatedCursor = () => {
  const { mousePosition, isVisible } = useCursor();

  return (
    <>
      {/* Main cursor dot */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
          }}
          className="w-3 h-3 bg-neon-cyan rounded-full shadow-lg shadow-neon-cyan/50"
        />
      )}

      {/* Glowing trail */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            pointerEvents: 'none',
            zIndex: 9998,
            transform: 'translate(-50%, -50%)',
          }}
          className="w-8 h-8 border border-neon-cyan rounded-full animate-pulse shadow-lg shadow-neon-cyan/30"
        />
      )}
    </>
  );
};
