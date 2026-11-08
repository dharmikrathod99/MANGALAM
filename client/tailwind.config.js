/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FDF7F9',
          100: '#F8DDE5', // Primary Blush Pink
          200: '#F3CAD6',
          300: '#EBC0CE', // Soft Rose
          400: '#DF9EAF',
          500: '#C77087',
          700: '#865365', // Deep Rose
          800: '#643949',
          900: '#43212E',
        },
        ivory: {
          50: '#FFFFFD',
          100: '#FFFDF8', // Primary Ivory White
          200: '#FAF5EA',
          300: '#EDE2D5', // Warm Beige
        },
        lemon: {
          DEFAULT: '#F7E99A', // Lemon Yellow
          light: '#FCF5CC',
          dark: '#E2CE66',
        },
        sage: {
          DEFAULT: '#D9E8D3', // Sage Green
          light: '#EAF3E6',
          dark: '#B0CCA7',
          deep: '#4E6A4B',
        },
        gold: {
          DEFAULT: '#D8B879', // Champagne Gold
          light: '#F0DFB5',
          metallic: '#C8A252',
          deep: '#9A7426',
        },
        charcoal: {
          DEFAULT: '#2C2225',
          soft: '#4A3B40',
          muted: '#7B6A71',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"DM Sans"', 'sans-serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #D8B879 0%, #FFF4D0 50%, #C8A252 100%)',
        'blush-glow': 'radial-gradient(circle at 50% 50%, rgba(248, 221, 229, 0.6) 0%, rgba(255, 253, 248, 0) 70%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        'petal-fall': 'petal 12s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.85', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.15)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

