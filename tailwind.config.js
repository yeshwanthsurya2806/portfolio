/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#7C3AED',
          pink: '#EC4899',
          cyan: '#06B6D4',
          lime: '#84CC16',
        },
        dark: {
          bg: '#0A0A0A',
          card: '#1a1a2e',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-purple': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
        'neon-cyan': 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)',
        'neon-lime': 'linear-gradient(135deg, #84CC16 0%, #06B6D4 100%)',
        'neon-full': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #06B6D4 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-spring': 'bounce-spring 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(124, 58, 237, 0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        'bounce-spring': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
